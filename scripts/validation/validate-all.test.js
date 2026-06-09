#!/usr/bin/env node

/**
 * Meta-test: creates a temporary package with intentional violations,
 * runs each validator, and asserts that violations are detected.
 *
 * Usage: node scripts/validation/validate-all.test.js
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const validationDir = __dirname;

// Temporary package location.
const tmpPkgDir = path.join(root, "packages-internal", "__test-violations__");
const distCjs = path.join(tmpPkgDir, "dist-cjs");
const distEs = path.join(tmpPkgDir, "dist-es");

function setup() {
  fs.mkdirSync(distCjs, { recursive: true });
  fs.mkdirSync(distEs, { recursive: true });

  // package.json declares "tslib" (implicit, always passes) and "@aws-sdk/util-arn-parser" (unused).
  fs.writeFileSync(
    path.join(tmpPkgDir, "package.json"),
    JSON.stringify(
      {
        name: "@aws-sdk/__test-violations__",
        version: "0.0.0",
        main: "./dist-cjs/index.js",
        module: "./dist-es/index.js",
        dependencies: {
          tslib: "^2",
          "@aws-sdk/util-arn-parser": "^3.0.0",
          "@aws-sdk/util-endpoints": "^3.0.0",
        },
      },
      null,
      2
    )
  );

  // index.js — the entry point, imports blorp.js
  const indexCode = `"use strict";
const { blorp } = require("./blorp");
module.exports = { blorp };
`;
  fs.writeFileSync(path.join(distCjs, "index.js"), indexCode);
  fs.writeFileSync(path.join(distEs, "index.js"), indexCode.replace("require", "import"));

  // blorp.js — violates multiple rules:
  // 1. banned-imports: imports @smithy/util-hex-encoding
  // 2. imports-declared: imports @aws-sdk/client-s3 (not in deps)
  // 3. static-import-names: dynamic require(variable) and import(variable)
  // 4. relative-imports: imports ./nonexistent (broken relative)
  // 5. imports-declared (require.resolve): imports @aws-sdk/util-arn-parser/nonexistent-subpath (declared but unresolvable)
  const blorpCode = `"use strict";
const { toHex } = require("@smithy/util-hex-encoding");
const { S3 } = require("@aws-sdk/client-s3");
const name = "dynamic";
const dyn = require(name);
const dynImport = import(name);
const missing = require("./nonexistent");
import("./also-missing");
const subpath = require("@aws-sdk/util-arn-parser/nonexistent-subpath");
module.exports = { blorp: toHex };
`;
  fs.writeFileSync(path.join(distCjs, "blorp.js"), blorpCode);
  fs.writeFileSync(path.join(distEs, "blorp.js"), blorpCode);

  // orphan.js — unreachable (not imported from index)
  fs.writeFileSync(path.join(distCjs, "orphan.js"), `"use strict";\nmodule.exports = {};\n`);
  fs.writeFileSync(path.join(distEs, "orphan.js"), `"use strict";\nmodule.exports = {};\n`);
}

function teardown() {
  fs.rmSync(tmpPkgDir, { recursive: true, force: true });
}

function runValidator(script, args = []) {
  try {
    const output = execFileSync("node", [path.join(validationDir, script), ...args], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
    });
    return { exitCode: 0, output };
  } catch (e) {
    return { exitCode: e.status || 1, output: (e.stdout || "") + (e.stderr || "") };
  }
}

function assert(condition, message) {
  if (!condition) {
    console.error(`  FAIL: ${message}`);
    return false;
  }
  console.log(`  PASS: ${message}`);
  return true;
}

function runTests() {
  let passed = 0;
  let failed = 0;

  function check(condition, message) {
    if (assert(condition, message)) {
      passed++;
    } else {
      failed++;
    }
  }

  const pkg = tmpPkgDir;

  // 1. banned-imports
  const banned = runValidator("banned-imports.js", [pkg]);
  check(banned.exitCode !== 0, "banned-imports detects @smithy/util-hex-encoding");
  check(banned.output.includes("@smithy/util-hex-encoding"), "banned-imports names the banned package");

  // 2. imports-declared
  const declared = runValidator("imports-declared.js", [pkg]);
  check(declared.exitCode !== 0, "imports-declared detects undeclared @aws-sdk/client-s3");
  check(declared.output.includes("@aws-sdk/client-s3"), "imports-declared names the undeclared package");
  check(
    declared.output.includes("nonexistent-subpath"),
    "imports-declared detects unresolvable subpath via require.resolve"
  );

  // 3. static-import-names
  const dynamic = runValidator("static-import-names.js", [pkg]);
  check(dynamic.exitCode !== 0, "static-import-names detects dynamic require(variable)");
  check(dynamic.output.includes("require()"), "static-import-names identifies require() violation");
  check(dynamic.output.includes("import()"), "static-import-names identifies import() violation");

  // 4. relative-imports
  const relative = runValidator("relative-imports.js", [pkg]);
  check(relative.exitCode !== 0, "relative-imports detects broken ./nonexistent");
  check(relative.output.includes("nonexistent"), "relative-imports names the missing target");
  check(relative.output.includes("also-missing"), 'relative-imports detects broken import("./also-missing")');

  // 5. unreachable-files
  const unreachable = runValidator("unreachable-files.js", [pkg]);
  check(unreachable.output.includes("orphan.js"), "unreachable-files detects orphan.js");

  // 6. deps-used (@aws-sdk/util-endpoints is declared but never imported)
  const deps = runValidator("deps-used.js", [pkg]);
  check(deps.exitCode !== 0, "deps-used detects unused @aws-sdk/util-endpoints");
  check(deps.output.includes("@aws-sdk/util-endpoints"), "deps-used names the unused dependency");

  console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
  return failed === 0;
}

process.on("exit", teardown);

setup();
const success = runTests();
process.exit(success ? 0 : 1);
