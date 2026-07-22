#!/usr/bin/env node

/**
 * AST-based banned import checker for dist-cjs and dist-es output.
 * Enforces no-restricted-imports rules via direct AST parsing.
 * Also enforces: dist-cjs must not contain ESM syntax.
 *
 * Usage: node banned-imports.js
 */

const path = require("node:path");
const { createBus } = require("./ast-bus");
const { getPackageDirs } = require("./validation-shared");

// Banned exact-match packages (consolidated into @smithy/core/* or @aws-sdk/core/*).
const BANNED_PACKAGES = new Set([
  "@smithy/util-hex-encoding",
  "@smithy/util-base64",
  "@smithy/util-body-length-browser",
  "@smithy/util-body-length-node",
  "@smithy/util-utf8",
  "@smithy/util-buffer-from",
  "@smithy/is-array-buffer",
  "@smithy/middleware-serde",
  "@smithy/hash-node",
  "@smithy/hash-blob-browser",
  "@smithy/hash-stream-node",
  "@smithy/md5-js",
  "@smithy/chunked-blob-reader",
  "@smithy/chunked-blob-reader-native",
  "@smithy/util-stream",
  "@smithy/uuid",
  "@smithy/smithy-client",
  "@smithy/middleware-stack",
  "@smithy/util-middleware",
  "@smithy/invalid-dependency",
  "@smithy/util-waiter",
  "@smithy/config-resolver",
  "@smithy/util-config-provider",
  "@smithy/node-config-provider",
  "@smithy/shared-ini-file-loader",
  "@smithy/property-provider",
  "@smithy/util-defaults-mode-browser",
  "@smithy/util-defaults-mode-node",
  "@smithy/protocol-http",
  "@smithy/middleware-content-length",
  "@smithy/util-uri-escape",
  "@smithy/querystring-builder",
  "@smithy/querystring-parser",
  "@smithy/url-parser",
  "@smithy/util-retry",
  "@smithy/middleware-retry",
  "@smithy/service-error-classification",
  "@smithy/util-endpoints",
  "@smithy/middleware-endpoint",
  "@smithy/eventstream-codec",
  "@smithy/eventstream-serde-universal",
  "@smithy/eventstream-serde-browser",
  "@smithy/eventstream-serde-node",
  "@smithy/eventstream-serde-config-resolver",
  "@aws-sdk/middleware-host-header",
  "@aws-sdk/middleware-logger",
  "@aws-sdk/middleware-recursion-detection",
  "@aws-sdk/middleware-user-agent",
  "@aws-sdk/util-user-agent-node",
  "@aws-sdk/util-user-agent-browser",
  "@aws-sdk/util-endpoints",
  "@aws-sdk/region-config-resolver",
  "@aws-sdk/util-arn-parser",
  "@aws-sdk/util-format-url",
  "@aws-sdk/crc64-nvme",
  "@aws-sdk/middleware-flexible-checksums",
  "@aws-sdk/middleware-bucket-endpoint",
  "@aws-sdk/middleware-expect-continue",
  "@aws-sdk/middleware-location-constraint",
  "@aws-sdk/middleware-ssec",
  "@aws-sdk/middleware-sdk-s3-control",
]);

// Packages that intentionally re-export a banned package (compatibility shims).
const REEXPORT_ALLOWLIST = {
  "@aws-sdk/smithy-client": new Set(["@smithy/smithy-client"]),
};

/**
 * Checks if a specifier is banned.
 */
function checkBanned(specifier) {
  if (specifier.startsWith(".")) {
    return null;
  }

  // Rule: no src or dist- in import paths (except csrc).
  if ((specifier.includes("src") && !specifier.includes("csrc")) || specifier.includes("dist-")) {
    return `"${specifier}" — imports must not contain src or dist- in their path`;
  }

  // Rule: @aws-sdk/core must use submodule.
  if (specifier === "@aws-sdk/core") {
    return `"${specifier}" — import from a specific submodule like @aws-sdk/core/submodule instead`;
  }

  // Rule: @aws-sdk/checksums must use submodule.
  if (specifier === "@aws-sdk/checksums") {
    return `"${specifier}" — import from a specific submodule like @aws-sdk/checksums/crc, @aws-sdk/checksums/sha, or @aws-sdk/checksums/flexible-checksums instead`;
  }

  // Rule: @aws-sdk/middleware-sdk-s3 must use submodule.
  if (specifier === "@aws-sdk/middleware-sdk-s3") {
    return `"${specifier}" — import from a specific submodule like @aws-sdk/middleware-sdk-s3/s3 or @aws-sdk/middleware-sdk-s3/s3-control instead`;
  }

  // Rule: banned consolidated packages.
  const pkgName = specifier.startsWith("@") ? specifier.split("/").slice(0, 2).join("/") : specifier.split("/")[0];
  if (BANNED_PACKAGES.has(pkgName)) {
    return `"${specifier}" — this package has been consolidated`;
  }

  return null;
}

/**
 * Creates the banned-imports validator.
 */
function createValidator() {
  const errors = [];
  // Deduplicate ESM errors — one per file is enough to avoid noise.
  const esmReportedFiles = new Set();

  return {
    name: "banned-imports",
    targets: ["dist-cjs", "dist-es"],
    features: ["esm-detection"],

    onImport(specifier, file, context) {
      const { packageJson } = context;
      const allowed = REEXPORT_ALLOWLIST[packageJson.name];
      if (allowed && allowed.has(specifier)) {
        return;
      }
      const reason = checkBanned(specifier);
      if (reason) {
        errors.push(`[${packageJson.name}] ${reason} (${path.relative(context.packageDir, file)})`);
      }
    },

    onESMNode(node, file, context) {
      // Only care about ESM in dist-cjs.
      if (context.target !== "dist-cjs") {
        return;
      }
      if (esmReportedFiles.has(file)) {
        return;
      }
      esmReportedFiles.add(file);
      const { packageJson, packageDir } = context;
      errors.push(
        `[${packageJson.name}] ESM including dynamic import is not allowed in dist-cjs (${path.relative(
          packageDir,
          file
        )}:${node.loc?.start?.line ?? 1})`
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
    console.error(`❌ ${errors.length} banned import(s):\n  ${[...new Set(errors)].join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ No banned imports. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
