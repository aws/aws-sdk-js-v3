#!/usr/bin/env node

/**
 * For every declared dependency in package.json, validates that it is
 * actually imported somewhere in the package's dist-cjs, dist-es, or dist-types.
 *
 * Usage: node deps-used.js
 */

const fs = require("node:fs");
const path = require("node:path");
const { createBus } = require("./ast-bus");
const { getPackageName, getPackageDirs } = require("./validation-shared");

const IMPLICIT_DEPS = new Set(["tslib", "@aws-sdk/types", "@smithy/types", "vitest"]);

/**
 * Browser polyfill packages that are declared as dependencies but imported
 * via their Node.js core module name (without node: prefix) for bundler aliasing.
 */
const BROWSER_POLYFILL_MAP = new Map([["stream-browserify", "stream"]]);

/**
 * Creates the deps-used validator.
 * Needs access to packages list to check declared deps at the end.
 */
function createValidator(packages) {
  // Need both "what's declared" and "what's actually imported" to diff at the end.
  const usedByPackage = new Map();
  const declaredByPackage = new Map();

  // Snapshot declared deps up front so we can diff against usage after the walk.
  for (const { dir } of packages) {
    if (dir.includes("/private/")) {
      continue;
    }
    const pkgJsonPath = path.join(dir, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    declaredByPackage.set(pkgJson.name, new Set(Object.keys(pkgJson.dependencies || {})));
    usedByPackage.set(pkgJson.name, new Set());
  }

  return {
    name: "deps-used",
    targets: ["dist-cjs", "dist-es", "dist-types"],
    inspects: ["dist-cjs", "dist-es", "dist-types", "package.json"],

    onImport(specifier, file, context) {
      if (specifier.startsWith(".") || specifier.startsWith("node:")) {
        return;
      }
      if (context.packageDir.includes("/private/")) {
        return;
      }
      const pkgName = context.packageJson.name;
      const used = usedByPackage.get(pkgName);
      if (used) {
        used.add(getPackageName(specifier));
      }
    },

    onDtsImport(specifier, file, context) {
      if (specifier.startsWith(".") || specifier.startsWith("node:")) {
        return;
      }
      if (context.packageDir.includes("/private/")) {
        return;
      }
      const pkgName = context.packageJson.name;
      const used = usedByPackage.get(pkgName);
      if (used) {
        used.add(getPackageName(specifier));
      }
    },

    getErrors() {
      const errors = [];
      for (const [pkgName, declared] of declaredByPackage) {
        const used = usedByPackage.get(pkgName) || new Set();
        for (const dep of declared) {
          if (IMPLICIT_DEPS.has(dep)) {
            continue;
          }
          if (used.has(dep)) {
            continue;
          }
          // Allow browser polyfill packages imported via core module name.
          const coreModule = BROWSER_POLYFILL_MAP.get(dep);
          if (coreModule && used.has(coreModule)) {
            continue;
          }
          errors.push(`${dep} declared but never imported in ${pkgName}`);
        }
      }
      return errors;
    },
  };
}

async function main() {
  const packages = getPackageDirs();
  const validator = createValidator(packages);
  const bus = createBus({ packages });
  bus.register(validator);
  await bus.run();

  const errors = validator.getErrors();
  if (errors.length) {
    console.error(`❌ ${errors.length} unused dependency declaration(s):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All declared dependencies are imported. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
