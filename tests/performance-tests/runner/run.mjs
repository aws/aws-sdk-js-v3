import fs from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { BundlerSizeBenchmarker } from "./BundlerSizeBenchmarker.mjs";
import { generateBundleSizeReport } from "./BundleSizeReportGenerator.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPLICATIONS_DIR = path.join(__dirname, "..", "applications");
const DIST_DIR = path.join(__dirname, "..", "dist-perf");

let lerna = { version: "unknown" };
for (const candidate of [
  path.join(__dirname, "..", "lerna.json"),
  path.join(__dirname, "..", "..", "..", "lerna.json"),
]) {
  if (fs.existsSync(candidate)) {
    try {
      lerna = JSON.parse(fs.readFileSync(candidate, "utf-8"));
    } catch (e) {
      console.warn("WARN: could not read lerna.json:", e.message);
    }
    break;
  }
}

let commitId = "unknown";
try {
  commitId = execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
} catch (e) {
  console.warn("WARN: could not determine commitId:", e.message);
}

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
