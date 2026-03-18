/**
 * Correctness assertions on the sdk-s3-single-command bundle.
 * Verifies tree-shaking is working as expected across all 3 bundlers.
 * Runs before results.json is emitted — exits non-zero on failure.
 * Prints nothing on success; prints to stderr on failure.
 */
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist-perf");

const bundles = [
  { name: "rollup", file: "rollup-sdk-s3-single-command.ts.js" },
  { name: "webpack", file: "webpack-sdk-s3-single-command.ts.js" },
  { name: "esbuild", file: "esbuild-sdk-s3-single-command.ts.js" },
];

for (const { name, file } of bundles) {
  const filePath = path.join(DIST_DIR, file);
  if (!fs.existsSync(filePath)) {
    process.stderr.write(`ERROR: bundle not found for spec check: ${filePath}\n`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const contentSize = content.replaceAll(/\s+/g, "").length;
  const callsToClassBuilder = content.match(/\.classBuilder\(\)/g) || [];

  assert(contentSize < 1_000_000, `[${name}] content size should be under 1M chars, got ${contentSize.toLocaleString()}`);
  assert(callsToClassBuilder.length <= 2, `[${name}] tree-shaking failure: expected <=2 classBuilder calls, got ${callsToClassBuilder.length}`);
}
