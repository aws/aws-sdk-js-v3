#!/usr/bin/env node

/**
 * Bans import() and require() calls with non-string-literal arguments
 * in dist-cjs and dist-es.
 *
 * Usage: node static-import-names.js
 */

const path = require("node:path");
const { createBus } = require("./ast-bus");
const { getPackageDirs } = require("./validation-shared");

/**
 * Creates the static-import-names validator.
 */
function createValidator() {
  const errors = [];

  return {
    name: "static-import-names",
    targets: ["dist-cjs", "dist-es"],

    onNonLiteralImportSpecifier(node, file, context) {
      const { packageJson, packageDir } = context;
      errors.push(
        `[${packageJson.name}] ${node.type} with non-literal argument at ${path.relative(packageDir, file)}:${
          node.line
        }`
      );
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
    console.error(`❌ ${errors.length} dynamic import(s) with non-literal specifier:\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ No dynamic imports with non-literal specifiers. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
