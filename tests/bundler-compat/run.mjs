/**
 * Bundler compatibility tests.
 *
 * These tests verify that @aws-sdk packages can be successfully processed
 * by bundlers that are not covered by the primary bundle-size tests
 * (webpack, esbuild, vite). The focus is on compatibility, not output size.
 */
import { execFileSync, execSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const require = createRequire(import.meta.url);
const { findGlobalBufferRefs } = require("../bundlers/bundler-output-analysis.cjs");

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

function validateBundle(bundler, filePath, { checkBuffer = true } = {}) {
  const content = fs.readFileSync(filePath, "utf-8");

  const nodeImports = content.match(/["']node:[^"']+["']/g) || [];
  const nodeRequires = content.match(/require\(["']node:[^"']+["']\)/g) || [];
  const allNodeRefs = [...new Set([...nodeImports, ...nodeRequires])];
  if (allNodeRefs.length > 0) {
    console.error(`    ${bundler}: ❌ node: protocol references: ${allNodeRefs.join(", ")}`);
    failed = true;
  } else {
    console.log(`    ${bundler}: ✅ No node: protocol references`);
  }

  const nodeOnlyMatches = content.match(/\w+\s*=\s*Symbol\.for\(["']node-only["']\)/g) || [];
  if (nodeOnlyMatches.length > 0) {
    console.log(
      `    ${bundler}: ⚠️ ${nodeOnlyMatches.length} Symbol.for("node-only") — node-only code not fully tree-shaken`
    );
  }

  if (checkBuffer) {
    const globalBufferRefs = findGlobalBufferRefs(content);
    if (globalBufferRefs.length > 0) {
      console.error(`    ${bundler}: ❌ ${globalBufferRefs.length} unguarded global Buffer reference(s)`);
      failed = true;
    } else {
      console.log(`    ${bundler}: ✅ No unguarded global Buffer references`);
    }
  }
}

fs.rmSync(path.join(root, "dist"), { recursive: true, force: true });

// ─── tsup ────────────────────────────────────────────────────────────────────

console.log("\n" + "=".repeat(60));
console.log("tsup");
console.log("=".repeat(60));

run("JS bundle (ESM)", () => {
  execSync(
    "npx tsup src/sample-app.ts --format esm --platform browser --outDir dist/js --silent --tsconfig tsconfig.json",
    {
      cwd: root,
      stdio: "pipe",
      env: { ...process.env, NODE_OPTIONS: "" },
    }
  );
  const out = path.join(root, "dist/js/sample-app.js");
  if (!fs.existsSync(out)) {
    throw new Error("output file not created");
  }
  if (fs.statSync(out).size === 0) {
    throw new Error("output file is empty");
  }
  validateBundle("tsup", out);
});

run("DTS bundle (all types inlined)", () => {
  execSync("npx tsup --config tsup-dts.config.ts --silent", {
    cwd: root,
    stdio: "pipe",
    env: { ...process.env, NODE_OPTIONS: "--max-old-space-size=8192" },
  });
  const out = path.join(root, "dist/dts/dts-check.d.ts");
  if (!fs.existsSync(out)) {
    throw new Error("output .d.ts not created");
  }
  const content = fs.readFileSync(out, "utf-8");
  if (content.length < 3000) {
    throw new Error("output .d.ts too small — types not inlined");
  }
  // Verify key types from @aws-sdk/core submodule carriers were inlined (not just re-exported)
  if (!content.includes("interface AwsSdkSigV4AuthInputConfig")) {
    throw new Error("AwsSdkSigV4AuthInputConfig not inlined from @aws-sdk/core/httpAuthSchemes");
  }
  if (!content.includes("class AwsSmithyRpcV2CborProtocol")) {
    throw new Error("AwsSmithyRpcV2CborProtocol not inlined from @aws-sdk/core/protocols");
  }
});

// ─── metro ───────────────────────────────────────────────────────────────────

console.log("\n" + "=".repeat(60));
console.log("metro");
console.log("=".repeat(60));

run("metro resolution", () => {
  const req = createRequire(path.join(root, "src/sample-app.ts"));
  const resolved = req.resolve("@aws-sdk/client-s3");
  if (!resolved) {
    throw new Error("Failed to resolve @aws-sdk/client-s3");
  }
});

run("metro bundle", () => {
  fs.mkdirSync(path.join(root, "dist/metro"), { recursive: true });
  execFileSync("node", [path.join(root, "metro-build.cjs")], { cwd: root, stdio: "pipe", timeout: 60_000 });
  const out = path.join(root, "dist/metro/bundle.js");
  if (!fs.existsSync(out)) {
    throw new Error("output file not created");
  }
  validateBundle("metro", out, { checkBuffer: false });
});

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log("\n" + "=".repeat(60));
if (failed) {
  console.error("❌ Bundler compatibility check FAILED");
  process.exit(1);
} else {
  console.log("✅ Bundler compatibility check PASSED");
}
