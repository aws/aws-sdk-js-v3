#!/usr/bin/env node

/**
 * Runs oxlint in validation mode on package source.
 * Covers packages/, packages-internal/, lib/, and clients/.
 * Skips private/ (protocol test fixtures).
 *
 * Usage: node oxlint.js
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { getPackageDirs, summarizePackages } = require("./validation-shared");

const root = path.join(__dirname, "..", "..");
const oxlintConfig = path.join(root, ".oxlintrc.json");

function main() {
  const packages = getPackageDirs();

  const validated = [];
  const paths = [];
  for (const pkg of packages) {
    if (pkg.generated && !pkg.dir.includes("/clients/")) {
      continue;
    }
    const srcDir = path.join(pkg.dir, "src");
    if (fs.existsSync(srcDir)) {
      validated.push(pkg);
      paths.push(srcDir);
    }
  }

  if (!paths.length) {
    console.log("✅ Oxlint passed (no source found).");
    return;
  }

  try {
    execFileSync("npx", ["oxlint", "-c", oxlintConfig, ...paths], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
    });
    console.log(`✅ Oxlint passed. (${summarizePackages(validated)})`);
  } catch (e) {
    const output = e.stdout || e.stderr || e.message;
    // Check if it's actual lint errors or just a crash.
    if (output.includes("Found 0 warnings and 0 errors")) {
      console.log(`✅ Oxlint passed. (${summarizePackages(validated)})`);
      return;
    }
    console.error(`❌ Oxlint failed:\n${output}`);
    process.exit(1);
  }
}

main();
