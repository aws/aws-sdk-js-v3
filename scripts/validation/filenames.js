#!/usr/bin/env node

/**
 * Validates that dist-es and dist-cjs output filenames do not contain
 * multiple dots, which would indicate that test/fixture files leaked
 * into the build output.
 *
 * Allowed multi-dot patterns: *.native.js, *.browser.js, *.shared.js
 *
 * Usage: node filenames.js [package-dir ...]
 */

const fs = require("node:fs");
const path = require("node:path");
const { getPackageDirs } = require("./validation-shared");

const ALLOWED_SUFFIXES = [".native.js", ".browser.js", ".shared.js", ".base.js"];
const IGNORED_PACKAGES = new Set(["@aws-sdk/aws-client-api-test", "@aws-sdk/aws-client-retry-test"]);

function isAllowedMultiDot(fileName) {
  return ALLOWED_SUFFIXES.some((suffix) => fileName.endsWith(suffix));
}

function walkDir(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

function validate(packageDir) {
  const errors = [];

  for (const distDir of ["dist-es", "dist-cjs"]) {
    const dir = path.join(packageDir, distDir);
    if (!fs.existsSync(dir)) continue;

    walkDir(dir, (filePath) => {
      const fileName = path.basename(filePath);
      if (!fileName.endsWith(".js")) return;

      // Count dots (excluding the final .js extension).
      const withoutExt = fileName.slice(0, -3);
      const dotCount = (withoutExt.match(/\./g) || []).length;

      if (dotCount > 0 && !isAllowedMultiDot(fileName)) {
        errors.push(filePath);
      }
    });
  }

  return errors;
}

const packages = getPackageDirs();
let totalErrors = 0;

for (const { dir } of packages) {
  const pkgJsonPath = path.join(dir, "package.json");
  if (!fs.existsSync(pkgJsonPath)) continue;
  const pkgName = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8")).name;
  if (IGNORED_PACKAGES.has(pkgName)) continue;
  const errors = validate(dir);
  if (errors.length) {
    for (const file of errors) {
      console.error(`${pkgName}: suspicious filename "${path.relative(dir, file)}"`);
    }
    totalErrors += errors.length;
  }
}

if (totalErrors > 0) {
  console.error(`\n${totalErrors} file(s) with suspicious multi-dot names found in dist output.`);
  process.exit(1);
} else {
  console.log("filenames: OK");
}
