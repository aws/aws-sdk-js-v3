#!/usr/bin/env node

/**
 * AST-based banned import checker for dist-cjs and dist-es output.
 * Enforces no-restricted-imports rules via direct AST parsing.
 *
 * Usage: node banned-imports.js
 */

const fs = require("node:fs");
const path = require("node:path");
const walk = require("../utils/walk");
const { extractImports, getPackageDirs, summarizePackages } = require("./validation-shared");
const { parse } = require("acorn");

const root = path.join(__dirname, "..", "..");

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
]);

/**
 * Checks if a specifier is banned.
 * Rules:
 * 1. Must not contain "src" (unless contains "csrc") or "dist-" in path
 * 2. "@aws-sdk/core" without subpath is banned (must use @aws-sdk/core/submodule)
 * 3. Any import starting with a banned package name is banned
 */
function checkBanned(specifier) {
  if (specifier.startsWith(".")) {
    return null;
  }

  // Rule: no src or dist- in import paths (except csrc)
  if ((specifier.includes("src") && !specifier.includes("csrc")) || specifier.includes("dist-")) {
    return `"${specifier}" — imports must not contain src or dist- in their path`;
  }

  // Rule: @aws-sdk/core must use submodule
  if (specifier === "@aws-sdk/core") {
    return `"${specifier}" — import from a specific submodule like @aws-sdk/core/submodule instead`;
  }

  // Rule: banned consolidated packages
  const pkgName = specifier.startsWith("@") ? specifier.split("/").slice(0, 2).join("/") : specifier.split("/")[0];

  if (BANNED_PACKAGES.has(pkgName)) {
    return `"${specifier}" — this package has been consolidated`;
  }

  return null;
}

// Packages that intentionally re-export a banned package (compatibility shims).
const REEXPORT_ALLOWLIST = {
  "@aws-sdk/smithy-client": ["@smithy/smithy-client"],
};

async function validate(packageDir) {
  const pkgJsonPath = path.join(packageDir, "package.json");
  if (!fs.existsSync(pkgJsonPath)) {
    return [];
  }
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
  const allowed = new Set(REEXPORT_ALLOWLIST[pkgJson.name] || []);

  const errors = [];
  for (const dist of ["dist-cjs", "dist-es"]) {
    const distDir = path.join(packageDir, dist);
    if (!fs.existsSync(distDir)) {
      continue;
    }
    for await (const file of walk(distDir, ["node_modules"])) {
      if (!file.endsWith(".js")) {
        continue;
      }
      const code = fs.readFileSync(file, "utf-8");

      // dist-cjs must not contain any ESM including dynamic import.
      if (dist === "dist-cjs") {
        let ast;
        try {
          ast = parse(code, { ecmaVersion: "latest", sourceType: "module", allowHashBang: true, locations: true });
        } catch {
          ast = null;
        }
        if (ast) {
          for (const node of ast.body) {
            if (
              node.type === "ImportDeclaration" ||
              node.type === "ExportNamedDeclaration" ||
              node.type === "ExportAllDeclaration" ||
              node.type === "ExportDefaultDeclaration"
            ) {
              errors.push(
                `[${pkgJson.name}] ESM including dynamic import is not allowed in dist-cjs (${path.relative(
                  packageDir,
                  file
                )}:${node.loc?.start?.line ?? 1})`
              );
              break;
            }
          }
          // Also check for dynamic import() expressions anywhere in the AST.
          const queue = [ast];
          let foundDynamic = false;
          while (queue.length && !foundDynamic) {
            const n = queue.pop();
            if (!n || typeof n !== "object") continue;
            if (Array.isArray(n)) {
              queue.push(...n);
              continue;
            }
            if (n.type === "ImportExpression") {
              errors.push(
                `[${pkgJson.name}] ESM including dynamic import is not allowed in dist-cjs (${path.relative(
                  packageDir,
                  file
                )}:${n.loc?.start?.line ?? 1})`
              );
              foundDynamic = true;
              break;
            }
            for (const key of Object.keys(n)) {
              if (key === "type") continue;
              const val = n[key];
              if (Array.isArray(val)) queue.push(...val);
              else if (val && typeof val === "object" && val.type) queue.push(val);
            }
          }
        }
      }

      for (const specifier of extractImports(code)) {
        if (allowed.has(specifier)) {
          continue;
        }
        const reason = checkBanned(specifier);
        if (reason) {
          errors.push(`[${pkgJson.name}] ${reason} (${path.relative(packageDir, file)})`);
        }
      }
    }
  }
  return errors;
}

async function main() {
  const packages = getPackageDirs();
  const errors = [];
  for (const { dir } of packages) {
    errors.push(...(await validate(dir)));
  }
  if (errors.length) {
    console.error(`❌ ${errors.length} banned import(s):\n  ${[...new Set(errors)].join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ No banned imports. (${summarizePackages(packages)})`);
}

main();
