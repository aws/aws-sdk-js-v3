#!/usr/bin/env node

/**
 * For every absolute import in dist-cjs and dist-es, validates that the
 * dependency is declared in package.json (dependencies or peerDependencies).
 *
 * Usage: node validate-imports-declared.js <packageDir> [...]
 */

const fs = require("node:fs");
const path = require("node:path");
const walk = require("../utils/walk");
const { NODE_BUILTINS, getPackageName, extractImports } = require("./validation-shared");

/**
 * @param packageDir - package root.
 * @param pkgJson - parsed package.json.
 * @param distName - "dist-cjs" or "dist-es".
 * @returns error messages for undeclared imports.
 */
async function validateDist(packageDir, pkgJson, distName) {
  const distDir = path.join(packageDir, distName);
  if (!fs.existsSync(distDir)) {
    return [];
  }

  const declared = new Set([
    ...Object.keys(pkgJson.dependencies || {}),
    ...Object.keys(pkgJson.peerDependencies || {}),
  ]);

  const errors = [];
  for await (const file of walk(distDir, ["node_modules"])) {
    if (!file.endsWith(".js")) {
      continue;
    }
    const code = fs.readFileSync(file, "utf-8");
    for (const specifier of extractImports(code)) {
      if (specifier.startsWith(".") || specifier.startsWith("node:")) {
        continue;
      }
      if (NODE_BUILTINS.has(specifier)) {
        continue;
      }
      const pkg = getPackageName(specifier);
      if (pkg === pkgJson.name) {
        continue;
      }
      if (!declared.has(pkg)) {
        errors.push(`${pkg} imported but not declared in ${pkgJson.name} (${path.relative(packageDir, file)})`);
      }
    }
  }
  return errors;
}

/**
 * @param packageDir - package root.
 * @returns aggregated errors from both dist directories.
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
  return errors;
}

async function main() {
  const dirs = process.argv.slice(2);
  if (!dirs.length) {
    console.error("Usage: validate-imports-declared.js <packageDir> [...]");
    process.exit(1);
  }
  const root = path.join(__dirname, "..", "..");
  const errors = [];
  for (const dir of dirs) {
    const rel = path.relative(root, path.resolve(dir));
    if (rel.startsWith("private/") || rel.startsWith("private\\")) {
      continue;
    }
    errors.push(...(await validate(path.resolve(dir))));
  }
  if (errors.length) {
    console.error(`❌ ${errors.length} undeclared import(s):\n  ${[...new Set(errors)].join("\n  ")}`);
    process.exit(1);
  }
  console.log("✅ All absolute imports are declared in package.json.");
}

main();
