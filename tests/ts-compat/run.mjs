/**
 * TypeScript compatibility test runner.
 *
 * For every TypeScript version listed in typescript-versions.json, this script:
 *   1. Installs that TypeScript version in isolation (under .tmp/).
 *   2. Type-checks fixtures/index.ts - which imports and uses one client per
 *      protocol - against it. The clients' published .d.ts are parsed (so
 *      downlevel *syntax* incompatibilities surface), while skipLibCheck avoids
 *      failing on their internal Node references (see tsconfig.json).
 *
 * Work is parallelized across a pool of worker threads sized to the number of
 * available processors (os.cpus().length).
 *
 * Usage: node ./run.mjs
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Worker } from "node:worker_threads";

const root = import.meta.dirname;

// The versions under test live in typescript-versions.json (oldest -> newest)
// so the support range can be updated without touching runner logic. Each entry
// is { version: string, tscArgs?: string[] } where `version` is any spec npm
// accepts (a bare minor like "5.4" installs its latest patch) and `tscArgs`
// holds compiler options that CHANGED for that version and must be passed on
// the command line (overriding tsconfig.json) so the shared base config stays
// valid everywhere. Past examples of why an entry needed tscArgs:
//   - `moduleResolution: node` (node10) became a deprecation *error* in TS 6.0.
//   - `moduleResolution: node` (node10) was removed in TS 7.0; `bundler`
//     resolution requires `module: preserve` (or esnext).
const VERSIONS_FILE = path.join(root, "typescript-versions.json");

/**
 * Load the version specs under test.
 * @returns {{ version: string, tscArgs: string[] }[]}
 */
function loadVersions() {
  /** @type {{ version: string, tscArgs?: string[] }[]} */
  const specs = JSON.parse(readFileSync(VERSIONS_FILE, "utf8"));
  return specs.map(({ version, tscArgs = [] }) => ({ version, tscArgs }));
}

/**
 * Ensure the workspace clients are installed and built (dist-types present).
 * The clients are consumed via file: links, so their .d.ts must exist on disk.
 */
function ensureClientsReady() {
  if (!existsSync(path.join(root, "node_modules"))) {
    console.log("Installing fixture dependencies (clients) ...");
    execFileSync("npm", ["install", "--no-audit", "--no-fund"], {
      cwd: root,
      stdio: "inherit",
    });
  }

  const clients = [
    "@aws-sdk/client-dynamodb",
    "@aws-sdk/client-cloudwatch-logs",
    "@aws-sdk/client-sts",
    "@aws-sdk/client-ec2",
    "@aws-sdk/client-lambda",
    "@aws-sdk/client-s3",
  ];
  const missing = clients.filter(
    (name) => !existsSync(path.join(root, "node_modules", ...name.split("/"), "dist-types", "index.d.ts"))
  );
  if (missing.length > 0) {
    console.error(
      `\nThe following clients are not built (dist-types missing): ${missing.join(", ")}.\n` +
        `Build them first, e.g.:\n` +
        `  node ./scripts/turbo build -F=@aws-sdk/client-dynamodb -F=@aws-sdk/client-cloudwatch-logs \\\n` +
        `    -F=@aws-sdk/client-sts -F=@aws-sdk/client-ec2 -F=@aws-sdk/client-lambda -F=@aws-sdk/client-s3\n`
    );
    process.exit(1);
  }
}

/**
 * Run all compile jobs across a worker pool.
 * @param {{ minor: string, version: string }[]} versions
 */
async function runPool(versions) {
  const poolSize = Math.max(1, Math.min(os.cpus().length, versions.length));

  const queue = [...versions];
  /** @type {{ version: string, ok: boolean, output: string }[]} */
  const results = [];

  await new Promise((resolve, reject) => {
    let active = 0;

    const workerPath = path.join(root, "worker.mjs");

    const spawnWorker = () => {
      const job = queue.shift();
      if (!job) {
        return;
      }
      active++;
      const worker = new Worker(workerPath, { workerData: { root, job } });

      worker.once("message", (res) => {
        results.push(res);
        worker.terminate();
      });
      worker.once("error", reject);
      worker.once("exit", () => {
        active--;
        if (queue.length > 0) {
          spawnWorker();
        } else if (active === 0) {
          resolve(undefined);
        }
      });
    };

    for (let i = 0; i < poolSize; i++) {
      spawnWorker();
    }
  });

  return results;
}

ensureClientsReady();
const versions = loadVersions();
const results = await runPool(versions);

results.sort(
  (a, b) => versions.findIndex((v) => v.version === a.version) - versions.findIndex((v) => v.version === b.version)
);

const failures = results.filter((r) => !r.ok);

console.log("\n" + "=".repeat(60));
console.log("TypeScript compatibility summary");
console.log("=".repeat(60));
for (const r of results) {
  console.log(`  ${r.ok ? "PASS" : "FAIL"}  typescript@${r.version}`);
}

if (failures.length > 0) {
  for (const f of failures) {
    console.error(`\nFAIL typescript@${f.version}:\n${f.output.trim()}`);
  }
  process.exit(1);
}
