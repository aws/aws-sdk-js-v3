// @ts-check
// Publishes non-private workspace packages whose package.json version is not on NPM.
// Dry run unless --confirm is passed.

import { execFile, execFileSync } from "node:child_process";
import { relative } from "node:path";
import { promisify } from "node:util";

import {
  filterUnpublished,
  findDependents,
  findMissingPackages,
  getPublicPackages,
  tierByDependencies,
} from "./plan.mjs";
import { isTransientPublishFailure, PermanentPublishError } from "./classify.mjs";
import { checkReleaseCommit, checkTrustedPublishing, getNpmVersion, readGitCommits } from "./preflight.mjs";
import { confirmPublished, isPublished, retryWithBackoff } from "./registry.mjs";
import {
  AVAILABILITY_DEADLINE_MINUTES,
  NPM_PUBLISH_TIMEOUT_MINUTES,
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
          timeout: Math.max(1000, Math.min(NPM_PUBLISH_TIMEOUT_MINUTES * 60 * 1000, publishDeadline - Date.now())),
        });
        console.log(`Published ${id}\n${stdout}${stderr}`.trimEnd());
        return { ok: true, value: undefined };
      } catch (e) {
        /**
         * @type {any}
         */
        const failure = e;
        const { stdout = "", stderr = "", code, killed = false } = failure;
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
        if (isTransientPublishFailure({ output, timedOut: killed })) {
          return { ok: false, reason: `exit ${code}\n${output}` };
        }
        throw new PermanentPublishError(id, output);
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

const publicPackages = getPublicPackages();

const preflight = checkTrustedPublishing({
  packages: publicPackages,
  env: process.env,
  nodeVersion: process.versions.node,
  getNpmVersion,
});
const preflightErrors = [
  ...preflight.errors,
  ...checkReleaseCommit({ env: process.env, confirm, readCommits: readGitCommits }),
];
for (const warning of preflight.warnings) {
  console.warn(`Preflight warning: ${warning}`);
}
if (preflightErrors.length > 0) {
  console.error(`Trusted publishing preflight failed:\n  ${preflightErrors.join("\n  ")}`);
  process.exit(1);
}
console.log("Trusted publishing preflight passed.");

const unpublished = await filterUnpublished(publicPackages);

// The first version of a package needs a maintainer, because trusted publishing can only be set up on an existing package.
const missingPackages = await findMissingPackages(unpublished);
const blockedPackages = findDependents(unpublished, missingPackages);
const skippedNames = new Set([...missingPackages, ...blockedPackages].map(({ name }) => name));

/**
 * @type {string[]}
 */
const failures = [];
if (missingPackages.length > 0) {
  /**
   * @param {import("./plan.mjs").WorkspacePackage[]} list
   * @returns {string}
   */
  const format = (list) => list.map(({ name, version }) => `  ${name}@${version}`).join("\n");
  const message =
    `${missingPackages.length} package(s) do not exist on NPM yet. A maintainer must publish each first version, then rerun the release:\n${format(missingPackages)}` +
    (blockedPackages.length > 0
      ? `\n${blockedPackages.length} package(s) were not published because they depend on those:\n${format(blockedPackages)}`
      : "");
  failures.push(message);
  console.warn(
    `${confirm ? "The rest will be published, and the run will fail at the end." : "The rest would be published."}\n${message}`
  );
}

/**
 * Ends the run, failing it if anything was skipped or did not become available.
 * A dry run reports the same problems without failing, because a failed dry run beside the real publisher aborts it.
 */
const finish = () => {
  if (failures.length > 0) {
    console.error(failures.join("\n\n"));
    process.exit(confirm ? 1 : 0);
  }
  process.exit(0);
};

const tiers = tierByDependencies(unpublished.filter(({ name }) => !skippedNames.has(name)));
const count = tiers.reduce((sum, tier) => sum + tier.length, 0);

if (count === 0) {
  console.log("No packages to publish.");
  finish();
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
  finish();
}

// Cache reads would let a stale artifact ship under a new version number.
run("make", ["build"], { AWS_JSV3_TURBO_CACHE_BUILD_TYPE: "RELEASE" });
run("yarn", ["build:types:downlevel"]);
// npm publish uploads package.json as is, so the workspace protocol is replaced first. Static analysis runs
// afterwards, with the flag that makes it check the rewritten versions, so it sees what is published.
run("yarn", ["update:versions:current"]);
run("make", ["static-analysis"], { AWS_SDK_PREPUBLISH: "true" });

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

/**
 * @type {PermanentPublishError[]}
 */
const failedPublishes = [];

/**
 * @type {Set<string>}
 */
const blockedByFailures = new Set();

const plannedPackages = tiers.flat();
logTimeCheck("publish");
for (const [i, tier] of tiers.entries()) {
  console.log(`Publishing tier ${i + 1} of ${tiers.length}`);
  /**
   * @type {import("./plan.mjs").WorkspacePackage[]}
   */
  const published = [];
  try {
    await forEachConcurrent(
      tier.filter(({ name }) => !skippedNames.has(name)),
      PUBLISH_CONCURRENCY,
      async (pkg) => {
        try {
          await publish(pkg);
          published.push(pkg);
        } catch (e) {
          if (!(e instanceof PermanentPublishError)) {
            throw e;
          }
          console.error(e.message);
          failedPublishes.push(e);
          for (const dependent of findDependents(plannedPackages, [pkg])) {
            skippedNames.add(dependent.name);
            blockedByFailures.add(dependent.name);
          }
        }
      }
    );
  } catch (e) {
    /**
     * @type {Error}
     */
    const error = e;
    console.error(`Publishing did not complete within ${PUBLISH_DEADLINE_MINUTES} minutes: ${error.message}`);
    process.exit(1);
  }

  const confirmation = confirmTier(published);
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
if (failedPublishes.length > 0) {
  const blocked = plannedPackages.filter(({ name }) => blockedByFailures.has(name));
  failures.push(
    `${failedPublishes.length} package(s) failed to publish and were not retried:\n${failedPublishes
      .map(({ id, output }) => `  ${id}\n${output.split("\n").slice(-15).join("\n").replace(/^/gm, "    ")}`)
      .join("\n")}` +
      (blocked.length > 0
        ? `\n${blocked.length} package(s) were not published because they depend on those:\n${blocked
            .map(({ name, version }) => `  ${name}@${version}`)
            .join("\n")}`
        : "")
  );
}
if (unavailable.size) {
  failures.push(
    `${unavailable.size} package(s) not available within ${AVAILABILITY_DEADLINE_MINUTES} minutes:\n  ${[...unavailable].join("\n  ")}`
  );
} else {
  console.log("The published packages are available on NPM.");
}
finish();
