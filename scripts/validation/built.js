#!/usr/bin/env node

/**
 * Validates that all packages have been built (dist artifacts exist).
 * Also validates that dist-types holds at most one ts3.4 directory, located at
 * dist-types/ts3.4 (running downlevel-dts twice nests them).
 *
 * Usage: node built.js
 */

const fs = require("node:fs");
const path = require("node:path");
const { getPackageDirs, summarizePackages } = require("./validation-shared");

const REQUIRED_FILES = ["dist-es/index.js", "dist-cjs/index.js", "dist-types/index.d.ts"];

const SKIP = new Set([
  "@aws-sdk/aws-client-api-test",
  "@aws-sdk/aws-client-retry-test",
  "@aws-sdk/aws-middleware-test",
]);

function findDownlevelDirs(dir, relative = "") {
  const found = [];
  for (const entry of fs.readdirSync(path.join(dir, relative), { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }
    const entryPath = path.join(relative, entry.name);
    if (entry.name === "ts3.4") {
      found.push(entryPath);
    }
    found.push(...findDownlevelDirs(dir, entryPath));
  }
  return found;
}

function main() {
  const packages = getPackageDirs();
  const validated = [];
  const errors = [];
  for (const { dir } of packages) {
    const pkgJsonPath = path.join(dir, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    if (SKIP.has(pkgJson.name)) {
      continue;
    }
    validated.push({ dir });
    for (const file of REQUIRED_FILES) {
      if (!fs.existsSync(path.join(dir, file))) {
        errors.push(`${pkgJson.name} missing ${file}`);
      }
    }

    const typesDir = path.join(dir, "dist-types");
    if (!fs.existsSync(typesDir)) {
      continue;
    }
    const downlevelDirs = findDownlevelDirs(typesDir);
    if (downlevelDirs.length > 1 || (downlevelDirs.length === 1 && downlevelDirs[0] !== "ts3.4")) {
      errors.push(`${pkgJson.name} has nested or misplaced downlevel types: ${downlevelDirs.join(", ")}`);
    }
  }
  if (errors.length) {
    console.error(`❌ ${errors.length} package(s) not built:\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All packages have build artifacts. (${summarizePackages(validated)})`);
}

main();
