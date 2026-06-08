#!/usr/bin/env node

/**
 * Runs eslint in validation mode (no --fix) on package source.
 * Skips generated packages (clients/, private/).
 *
 * Usage: node eslint.js
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { getPackageDirs, summarizePackages } = require("./validation-shared");

const root = path.join(__dirname, "..", "..");
const eslintConfig = path.join(root, ".eslintrc.js");

function main() {
  const packages = getPackageDirs();
  const validated = [];

  const globs = [];
  for (const { dir, generated } of packages) {
    if (generated) {
      continue;
    }
    const srcDir = path.join(dir, "src");
    if (fs.existsSync(srcDir)) {
      validated.push({ dir });
      globs.push(`${srcDir}/**/*.ts`);
    }
  }

  if (!globs.length) {
    console.log("✅ ESLint passed (no source found).");
    return;
  }

  try {
    execFileSync("npx", ["eslint", "--quiet", "-c", eslintConfig, ...globs], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
    });
    console.log(`✅ ESLint passed. (${summarizePackages(validated)})`);
  } catch (e) {
    console.error(`❌ ESLint failed:\n${e.stdout || e.stderr || e.message}`);
    process.exit(1);
  }
}

main();
