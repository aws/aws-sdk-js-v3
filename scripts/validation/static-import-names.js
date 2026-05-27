#!/usr/bin/env node

/**
 * Bans import() and require() calls with non-string-literal arguments
 * in dist-cjs and dist-es.
 *
 * Usage: node static-import-names.js
 */

const fs = require("node:fs");
const path = require("node:path");
const walk = require("../utils/walk");
const { analyzeImports, getPackageDirs } = require("./validation-shared");

/**
 * @param packageDir - package root.
 * @param pkgJson - parsed package.json.
 * @param distName - "dist-cjs" or "dist-es".
 * @returns error messages with file and line.
 */
async function validateDist(packageDir, pkgJson, distName) {
  const distDir = path.join(packageDir, distName);
  if (!fs.existsSync(distDir)) {
    return [];
  }

  const errors = [];
  for await (const file of walk(distDir, ["node_modules"])) {
    if (!file.endsWith(".js")) {
      continue;
    }
    const code = fs.readFileSync(file, "utf-8");
    const { dynamicImports } = analyzeImports(code);
    for (const { line, type } of dynamicImports) {
      errors.push(`${type} with non-literal argument at ${path.relative(packageDir, file)}:${line}`);
    }
  }
  return errors;
}

/**
 * @param packageDir - package root.
 * @returns formatted error messages.
 */
async function validate(packageDir) {
  const pkgJsonPath = path.join(packageDir, "package.json");
  if (!fs.existsSync(pkgJsonPath)) {
    return [];
  }
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
  const errors = [];
  for (const dist of ["dist-cjs", "dist-es"]) {
    errors.push(...(await validateDist(packageDir, pkgJson, dist)));
  }
  return errors.map((e) => `[${pkgJson.name}] ${e}`);
}

async function main() {
  const packages = getPackageDirs();
  const errors = [];
  for (const { dir } of packages) {
    errors.push(...(await validate(dir)));
  }
  if (errors.length) {
    console.error(`❌ ${errors.length} dynamic import(s) with non-literal specifier:\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log("✅ No dynamic imports with non-literal specifiers.");
}

main();
