// @ts-check
// Publishes non-private workspace packages whose package.json version is not on NPM.
// Dry run unless --confirm is passed.

import { execFile, execFileSync } from "node:child_process";
import { relative } from "node:path";
import { promisify } from "node:util";

import { filterUnpublished, getPublicPackages, tierByDependencies } from "./plan.mjs";
import { confirmPublished, isPublished, retryWithBackoff } from "./registry.mjs";
import {
  AVAILABILITY_DEADLINE_MINUTES,
  PROGRESS_LOG_MINUTES,
  PUBLISH_DEADLINE_MINUTES,
  TIER_CONFIRMATION_WAIT_MINUTES,
} from "./tuning.mjs";

const PUBLISH_CONCURRENCY = 4;

const startedAt = Date.now();
const publishDeadline = startedAt + PUBLISH_DEADLINE_MINUTES * 60 * 1000;
const availabilityDeadline = startedAt + AVAILABILITY_DEADLINE_MINUTES * 60 * 1000;

const execFileAsync = promisify(execFile);
const rootDir = new URL("../..", import.meta.url).pathname;
const confirm = process.argv.includes("--confirm");

/**
 * @param {string} command
 * @param {string[]} args
 * @param {Record<string, string>} [extraEnv]
 */
const run = (command, args, extraEnv = {}) => {
  console.log(`$ ${command} ${args.join(" ")}`);
  execFileSync(command, args, { cwd: rootDir, stdio: "inherit", env: { ...process.env, ...extraEnv } });
};

/**
 * Resolves once the version is on NPM or submitted and held for scanning.
 *
 * @param {import("./plan.mjs").WorkspacePackage} pkg
 */
const publish = (pkg) => {
  const id = `${pkg.name}@${pkg.version}`;
  return retryWithBackoff(
    `npm publish ${id}`,
    async () => {
      try {
        const { stdout, stderr } = await execFileAsync("npm", ["publish", "--access", "public", "--ignore-scripts"], {
          cwd: pkg.dir,
          maxBuffer: 64 * 1024 * 1024,
        });
        console.log(`Published ${id}\n${stdout}${stderr}`.trimEnd());
        return { ok: true, value: undefined };
      } catch (e) {
        /**
         * @type {any}
         */
        const failure = e;
        const { stdout = "", stderr = "", code } = failure;
        const output = `${stdout}${stderr}`.trimEnd();
        // A failed attempt may still have been accepted, so republishing is only for versions NPM does not know.
        if (await isPublished(pkg)) {
          return { ok: true, value: undefined };
        }
        // The version exists but is not readable: NPM is holding it for scanning.
        if (/cannot publish over|previously published/i.test(output)) {
          console.warn(`${id} is held by NPM. Waiting for it to become available.`);
          return { ok: true, value: undefined };
        }
        return { ok: false, reason: `exit ${code}\n${output}` };
      }
    },
    { deadline: publishDeadline }
  );
};

/**
 * @template T
 * @param {T[]} items
 * @param {number} concurrency
 * @param {(item: T) => Promise<void>} fn
 */
const forEachConcurrent = async (items, concurrency, fn) => {
  const queue = [...items];
  const worker = async () => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      await fn(item);
    }
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
};

const tiers = tierByDependencies(await filterUnpublished(getPublicPackages()));
const count = tiers.reduce((sum, tier) => sum + tier.length, 0);

if (count === 0) {
  console.log("No packages to publish: the public workspace versions are already on NPM.");
  process.exit(0);
}

console.log(`${confirm ? "Publishing" : "Dry run, would publish"} ${count} package(s) in ${tiers.length} tier(s):`);
tiers.forEach((tier, i) => {
  console.log(`Tier ${i + 1} (${tier.length}):`);
  for (const { name, version, dir } of tier) {
    console.log(`  ${name}@${version} (${relative(rootDir, dir)})`);
  }
});

if (!confirm) {
  console.log("Dry run only. Pass CONFIRM=1 to build, run static analysis and publish.");
  process.exit(0);
}

// Cache reads would let a stale artifact ship under a new version number.
run("make", ["build"], { AWS_JSV3_TURBO_CACHE_BUILD_TYPE: "RELEASE" });
run("yarn", ["build:types:downlevel"]);
run("make", ["static-analysis"]);

// A rerun after a partial failure is safe: versions already on NPM are filtered out above.
/**
 * @type {Set<string>}
 */
const awaitingAvailability = new Set();
const progress = setInterval(
  () => {
    if (awaitingAvailability.size) {
      const names = [...awaitingAvailability].slice(0, 10).join(", ");
      console.log(`${awaitingAvailability.size} package(s) not yet available on NPM, e.g. ${names}`);
    }
  },
  PROGRESS_LOG_MINUTES * 60 * 1000
);

/**
 * @type {Set<string>}
 */
const unavailable = new Set();

/**
 * @param {import("./plan.mjs").WorkspacePackage[]} tier
 */
const confirmTier = (tier) =>
  forEachConcurrent(tier, 16, async (pkg) => {
    const id = `${pkg.name}@${pkg.version}`;
    awaitingAvailability.add(id);
    try {
      await confirmPublished(pkg, availabilityDeadline);
    } catch {
      unavailable.add(id);
    }
    awaitingAvailability.delete(id);
  });

/**
 * @param {number} ms
 * @returns {string}
 */
const formatDuration = (ms) => {
  const seconds = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(seconds / 60)}m${seconds % 60}s`;
};

/**
 * @param {"publish" | "availability"} deadlineName
 */
const logTimeCheck = (deadlineName) => {
  const deadline = deadlineName === "publish" ? publishDeadline : availabilityDeadline;
  const now = Date.now();
  console.log(
    `Publish script time check: ${formatDuration(now - startedAt)} elapsed, ${formatDuration(deadline - now)} to ${deadlineName} deadline`
  );
};

/**
 * @type {Promise<void>[]}
 */
const confirmations = [];
logTimeCheck("publish");
for (const [i, tier] of tiers.entries()) {
  console.log(`Publishing tier ${i + 1} of ${tiers.length}`);
  try {
    await forEachConcurrent(tier, PUBLISH_CONCURRENCY, publish);
  } catch (e) {
    /**
     * @type {Error}
     */
    const error = e;
    console.error(`Publishing did not complete within ${PUBLISH_DEADLINE_MINUTES} minutes: ${error.message}`);
    process.exit(1);
  }

  const confirmation = confirmTier(tier);
  confirmations.push(confirmation);

  // NPM can take hours to release a tier. Past the wait the next tier proceeds, trading strict
  // ordering for finishing within the workflow timeout; the unconfirmed tier keeps being polled.
  const isLastTier = i === tiers.length - 1;
  let waitTimer;
  const waited = await Promise.race([
    confirmation.then(() => true),
    new Promise((resolve) => {
      waitTimer = setTimeout(() => resolve(false), TIER_CONFIRMATION_WAIT_MINUTES * 60 * 1000);
    }),
  ]);
  clearTimeout(waitTimer);
  if (waited) {
    console.log(`Tier ${i + 1} is available on NPM.`);
  } else if (!isLastTier) {
    console.warn(`Tier ${i + 1} is not fully available after ${TIER_CONFIRMATION_WAIT_MINUTES} minutes. Continuing.`);
  }
  logTimeCheck(isLastTier ? "availability" : "publish");
}

// The run ending signals to customers that the release is available, so unavailable packages fail it.
await Promise.all(confirmations);
clearInterval(progress);
if (unavailable.size) {
  console.error(
    `${unavailable.size} package(s) not available within ${AVAILABILITY_DEADLINE_MINUTES} minutes:\n  ${[...unavailable].join("\n  ")}`
  );
  process.exit(1);
}
console.log("The published packages are available on NPM.");
