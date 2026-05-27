#!/usr/bin/env node

/**
 * Orchestrator: runs all validation scripts against all packages.
 *
 * Usage:
 *   node validate-all.js
 *   node validate-all.js --skip eslint
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const validationDir = __dirname;

const PACKAGE_ROOTS = ["clients", "packages", "packages-internal", "lib", "private"];

const VALIDATIONS = [
  { name: "imports-declared", label: "all imports are declared in package.json", script: "imports-declared.js" },
  { name: "relative-imports", label: "all relative imports resolve to existing files", script: "relative-imports.js" },
  { name: "deps-used", label: "all declared dependencies are actually imported", script: "deps-used.js" },
  { name: "unreachable-files", label: "no unreachable files in dist bundles", script: "unreachable-files.js" },
  {
    name: "static-import-names",
    label: "no dynamic imports with non-literal specifiers",
    script: "static-import-names.js",
  },
  { name: "banned-imports", label: "no banned imports in dist output", script: "banned-imports.js" },
  { name: "cycles", label: "no cyclical file or package dependencies", script: "cycles.js" },
  { name: "eslint", label: "eslint passes on source", script: "eslint.js" },
];

function parseArgs() {
  const args = process.argv.slice(2);
  const skip = new Set();

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--skip") {
      skip.add(args[++i]);
    }
  }

  return { skip };
}

function main() {
  const { skip } = parseArgs();

  let count = 0;
  for (const pkgRoot of PACKAGE_ROOTS) {
    const dir = path.join(root, pkgRoot);
    if (fs.existsSync(dir)) {
      count += fs.readdirSync(dir).filter((f) => fs.existsSync(path.join(dir, f, "package.json"))).length;
    }
  }

  console.log(`Running validations on ${count} package(s)...\n`);

  const failures = [];
  const warnings = [];

  for (const { name, label, script } of VALIDATIONS) {
    if (skip.has(name)) {
      console.log(`⏭  ${label}`);
      continue;
    }

    try {
      const output = execFileSync("node", [path.join(validationDir, script)], {
        cwd: root,
        stdio: "pipe",
        encoding: "utf-8",
      });
      if (output.includes("⚠️")) {
        console.log(`⚠️  ${label}`);
        warnings.push({ name, output });
      } else {
        console.log(`✅ ${label}`);
      }
    } catch (e) {
      console.log(`❌ ${label}`);
      failures.push({ name, output: e.stdout || e.stderr || e.message });
    }
  }

  if (warnings.length) {
    console.log("");
    for (const { name, output } of warnings) {
      console.log(`--- ${name} ---\n${output}`);
    }
  }

  console.log("");
  if (failures.length) {
    console.error(`${failures.length}/${VALIDATIONS.length - skip.size} validation(s) failed:\n`);
    for (const { name, output } of failures) {
      console.error(`--- ${name} ---\n${output}\n`);
    }
    process.exit(1);
  }

  // Self-test: verify the validators catch known violations.
  try {
    execFileSync("node", [path.join(validationDir, "validate-all.test.js")], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
    });
    console.log(`✅ self-test passed`);
  } catch (e) {
    console.error(`❌ self-test failed:\n${e.stdout || e.stderr || e.message}`);
    process.exit(1);
  }

  console.log(`\nAll validations passed.`);
}

main();
