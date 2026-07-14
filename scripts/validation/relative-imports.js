#!/usr/bin/env node

/**
 * For every relative import/require in dist-cjs and dist-es, validates that
 * the target file exists.
 *
 * Usage: node relative-imports.js
 */

const path = require("node:path");
const { createBus } = require("./ast-bus");
const { resolveRelative, getPackageDirs } = require("./validation-shared");

/**
 * Creates the relative-imports validator.
 */
function createValidator() {
  const errors = [];

  return {
    name: "relative-imports",
    targets: ["dist-cjs", "dist-es"],

    onImport(specifier, file, context) {
      if (!specifier.startsWith(".")) {
        return;
      }
      const { packageJson, packageDir, target } = context;
      if (target === "dist-cjs") {
        try {
          require.resolve(specifier, { paths: [path.dirname(file)] });
        } catch {
          errors.push(
            `[${packageJson.name}/${target}] ${specifier} not found (from ${path.relative(packageDir, file)})`
          );
        }
      } else if (!resolveRelative(file, specifier)) {
        errors.push(`[${packageJson.name}/${target}] ${specifier} not found (from ${path.relative(packageDir, file)})`);
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
    console.error(`❌ ${errors.length} broken relative import(s):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All relative imports resolve to existing files. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
