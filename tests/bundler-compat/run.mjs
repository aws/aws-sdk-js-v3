/**
 * Bundler compatibility tests.
 *
 * Verifies that @aws-sdk packages can be successfully processed
 * by Metro (react-native) and tsup bundlers.
 */
import { execFileSync, execSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;

let failed = false;

function run(label, fn) {
  try {
    fn();
    console.log(`  ✅ ${label}`);
  } catch (e) {
    console.error(`  ❌ ${label}: ${e.message.split("\n").slice(0, 3).join("\n")}`);
    failed = true;
  }
}

function validateBundle(bundler, filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const nodeImports = content.match(/["']node:[^"']+["']/g) || [];
  const nodeRequires = content.match(/require\(["']node:[^"']+["']\)/g) || [];
  const allNodeRefs = [...new Set([...nodeImports, ...nodeRequires])];
  if (allNodeRefs.length > 0) {
    console.error(`  ${bundler}: ❌ node: protocol references: ${allNodeRefs.join(", ")}`);
    failed = true;
  } else {
    console.log(`  ${bundler}: ✅ No node: protocol references`);
  }
}

fs.rmSync(path.join(root, "dist"), { recursive: true, force: true });

// ─── tsup ───────────────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(60));
console.log("tsup");
console.log("=".repeat(60));

run("JS bundle (ESM)", () => {
  execSync(
    "npx tsup src/sample-app.ts --format esm --platform browser --outDir dist/js --silent --tsconfig tsconfig.json",
    { cwd: root, stdio: "pipe", env: { ...process.env, NODE_OPTIONS: "" } }
  );
  const out = path.join(root, "dist/js/sample-app.js");
  if (!fs.existsSync(out)) throw new Error("output file not created");
  if (fs.statSync(out).size === 0) throw new Error("output file is empty");
  validateBundle("tsup", out);
});

// ─── metro ──────────────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(60));
console.log("metro");
console.log("=".repeat(60));

run("metro bundle", () => {
  fs.mkdirSync(path.join(root, "dist/metro"), { recursive: true });
  execFileSync("node", [path.join(root, "metro-build.cjs")], {
    cwd: root,
    stdio: "pipe",
    timeout: 60_000,
  });
  const out = path.join(root, "dist/metro/bundle.js");
  if (!fs.existsSync(out)) throw new Error("output file not created");
  validateBundle("metro", out);
});

// ─── Summary ────────────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(60));
if (failed) {
  console.error("❌ Bundler compatibility check FAILED");
  process.exit(1);
} else {
  console.log("✅ Bundler compatibility check PASSED");
}
