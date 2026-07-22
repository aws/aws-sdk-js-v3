#!/usr/bin/env node

/**
 * Bans `export *` (ExportAllDeclaration) in package source files.
 * Enforces explicit named exports for better tree-shaking and API clarity.
 *
 * Usage: node no-export-star.js [<packageDir> ...]
 */

const path = require("node:path");
const { createBus } = require("./ast-bus");
const { getPackageDirs } = require("./validation-shared");

/**
 * Creates the no-export-star validator.
 */
function createValidator() {
  const errors = [];

  // Packages exempt entirely (generated-like structure with barrel re-exports).
  const EXEMPT_PACKAGES = new Set(["@aws-sdk/lib-dynamodb", "@aws-sdk/nested-clients"]);

  // Files exempt by relative path (applies to any package).
  const EXEMPT_FILES = new Set(["src/api-extractor-type-index.ts"]);

  // Package-specific file exemptions.
  const EXEMPT_PACKAGE_FILES = new Map([
    ["@aws-sdk/config", new Set(["src/submodules/credentials/index.ts"])],
    ["@aws-sdk/crt-loader", new Set(["src/index.ts"])],
    ["@aws-sdk/smithy-client", new Set(["src/index.ts"])],
    ["@aws-sdk/undici-http-handler", new Set(["src/index.ts"])],
  ]);

  return {
    name: "no-export-star",
    targets: ["src"],

    onExportAll(node, file, context) {
      // Skip generated packages.
      if (context.generated) {
        return;
      }
      const { packageJson, packageDir } = context;
      if (EXEMPT_PACKAGES.has(packageJson.name)) {
        return;
      }
      const rel = path.relative(packageDir, file);
      if (EXEMPT_FILES.has(rel)) {
        return;
      }
      const pkgExemptions = EXEMPT_PACKAGE_FILES.get(packageJson.name);
      if (pkgExemptions && pkgExemptions.has(rel)) {
        return;
      }
      const line = node.loc?.start?.line ?? 0;
      errors.push(`[${packageJson.name}] ${rel}:${line} - Use explicit named exports instead of 'export *'.`);
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
    console.error(`❌ ${errors.length} 'export *' usage(s) found:\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ No 'export *' found. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
