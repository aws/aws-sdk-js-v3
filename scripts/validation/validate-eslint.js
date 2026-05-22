#!/usr/bin/env node

/**
 * Runs eslint in validation mode (no --fix) on package source.
 * Only applies to packages/, packages-internal/, and lib/ directories.
 * Clients/ and private/ are excluded (they use validate-banned-imports.js instead).
 *
 * Usage: node validate-eslint.js <packageDir> [<packageDir> ...]
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const eslintConfig = path.join(root, ".eslintrc.js");

function isGeneratedDir(dir) {
  const rel = path.relative(root, path.resolve(dir));
  return rel.startsWith("clients/") || rel.startsWith("private/");
}

function main() {
  const dirs = process.argv.slice(2);
  if (!dirs.length) {
    console.error("Usage: validate-eslint.js <packageDir> [...]");
    process.exit(1);
  }

  const globs = [];
  for (const dir of dirs) {
    if (isGeneratedDir(dir)) {
      continue;
    }
    const srcDir = path.join(path.resolve(dir), "src");
    if (fs.existsSync(srcDir)) {
      globs.push(`${srcDir}/**/*.ts`);
    }
  }

  if (!globs.length) {
    console.log("✅ ESLint passed (no source found).");
    return;
  }

  try {
    execFileSync("npx", ["eslint", "-c", eslintConfig, ...globs], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
    });
    console.log(`✅ ESLint passed.`);
  } catch (e) {
    console.error(`❌ ESLint failed:\n${e.stdout || e.stderr || e.message}`);
    process.exit(1);
  }
}

main();
