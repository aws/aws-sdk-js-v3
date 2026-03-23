import fs from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { BundlerSizeBenchmarker } from "./BundlerSizeBenchmarker.mjs";
import { generateBundleSizeReport } from "./BundleSizeReportGenerator.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPLICATIONS_DIR = path.resolve(__dirname, "../applications");
const DIST_DIR = path.resolve(__dirname, "../dist-perf");

let lerna = { version: "unknown" };
try {
  lerna = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../lerna.json"), "utf-8"));
} catch {}

let commitId = "unknown";
try {
  commitId = execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
} catch {}

fs.mkdirSync(DIST_DIR, { recursive: true });

const date = Math.floor(Date.now() / 1000);
const results = [];
const appResults = [];

for (const app of fs.readdirSync(APPLICATIONS_DIR)) {
  if (fs.lstatSync(path.join(APPLICATIONS_DIR, app)).isDirectory()) continue;

  const name = "bundle.size." + app.replace(/\.ts$/, "").toLowerCase().replace(/[-_]/g, ".");
  const description = `Minified bundle size for ${app.replace(".ts", "")}`;

  let stats;
  try {
    stats = await new BundlerSizeBenchmarker({ application: app }).all();
  } catch (e) {
    process.stderr.write(`WARN: skipping ${app}: ${e.message}\n`);
    continue;
  }

  appResults.push({ app, stats });

  for (const { bundler, bytes } of stats) {
    results.push({
      name,
      description,
      unit: "Bytes",
      date,
      dimensions: [{ name: "bundler", value: bundler }],
      measurements: [bytes],
    });
  }
}

// Run correctness assertions before cleaning up dist files
await import("./spec.mjs");

fs.rmSync(DIST_DIR, { recursive: true, force: true });

await generateBundleSizeReport(appResults, lerna.version);

process.stdout.write(
  JSON.stringify({ productId: "JavaScript-v3", sdkVersion: lerna.version, commitId, results }, null, 2) + "\n"
);
