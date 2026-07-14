#!/usr/bin/env node

/**
 * For every absolute import in dist-cjs and dist-es, validates that the
 * dependency is declared in package.json (dependencies or peerDependencies).
 *
 * Usage: node imports-declared.js
 */

const path = require("node:path");
const { createBus } = require("./ast-bus");
const { NODE_BUILTINS, getPackageName, getPackageDirs } = require("./validation-shared");

// Packages exempt from undeclared import checks.
const ALLOWLIST = new Set([]);

/**
 * Creates the imports-declared validator.
 */
function createValidator() {
  const errors = [];
  // Cache declared deps per package — avoids rebuilding Sets on every onImport call.
  const declaredCache = new Map();

  function getDeclared(packageJson) {
    let declared = declaredCache.get(packageJson.name);
    if (!declared) {
      declared = new Set([
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
      ]);
      declaredCache.set(packageJson.name, declared);
    }
    return declared;
  }

  return {
    name: "imports-declared",
    targets: ["dist-cjs", "dist-es"],
    inspects: ["dist-cjs", "dist-es", "package.json"],

    onImport(specifier, file, context) {
      if (specifier.startsWith(".") || specifier.startsWith("node:")) {
        return;
      }
      if (NODE_BUILTINS.has(specifier)) {
        return;
      }
      if (specifier === "vitest") {
        return;
      }
      const { packageJson, packageDir, target } = context;
      if (ALLOWLIST.has(packageJson.name)) {
        return;
      }
      const pkg = getPackageName(specifier);
      if (pkg === packageJson.name) {
        return;
      }
      const declared = getDeclared(packageJson);
      if (!declared.has(pkg)) {
        errors.push(`${pkg} imported but not declared in ${packageJson.name} (${path.relative(packageDir, file)})`);
      } else if (target === "dist-cjs") {
        try {
          require.resolve(specifier, { paths: [path.dirname(file)] });
        } catch {
          errors.push(`${specifier} does not resolve in ${packageJson.name} (${path.relative(packageDir, file)})`);
        }
      }
    },

    getErrors() {
      return errors;
    },
  };
}

async function main() {
  const packages = getPackageDirs();
  const validator = createValidator();
  const bus = createBus({ packages });
  bus.register(validator);
  await bus.run();

  const errors = validator.getErrors();
  if (errors.length) {
    console.error(`❌ ${errors.length} undeclared import(s):\n  ${[...new Set(errors)].join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All absolute imports are declared in package.json. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
