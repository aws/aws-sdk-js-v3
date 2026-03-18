import fs from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { BundlerSizeBenchmarker } from "./BundlerSizeBenchmarker.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPLICATIONS_DIR = path.resolve(__dirname, "../applications");
const DIST_DIR = path.resolve(__dirname, "../dist-perf");

const lerna = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../lerna.json"), "utf-8"));

let commitId = "unknown";
try {
  commitId = execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
} catch {}

fs.mkdirSync(DIST_DIR, { recursive: true });

const date = Math.floor(Date.now() / 1000);
const results = [];

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

process.stdout.write(
  JSON.stringify({ productId: "JavaScript-v3", sdkVersion: lerna.version, commitId, results }, null, 2) + "\n"
);
