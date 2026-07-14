#!/usr/bin/env node

/**
 * For every .js file in dist-cjs and dist-es, validates that it is reachable
 * from the package's declared entry points via BFS over AST-extracted imports.
 *
 * Usage: node unreachable-files.js
 */

const fs = require("node:fs");
const path = require("node:path");
const { createBus } = require("./ast-bus");
const { resolveRelative, getPackageDirs } = require("./validation-shared");

/**
 * Collects entry point paths for a dist directory from package.json fields:
 * main, module, exports, browser, react-native.
 */
function getEntryPoints(pkgJson, packageDir, distName) {
  const entries = [];

  if (distName === "dist-cjs" && pkgJson.main) {
    entries.push(path.resolve(packageDir, pkgJson.main));
  }
  if (distName === "dist-es" && pkgJson.module) {
    entries.push(path.resolve(packageDir, pkgJson.module));
  }

  if (pkgJson.exports) {
    for (const config of Object.values(pkgJson.exports)) {
      if (typeof config === "string") {
        if (config.includes(distName)) {
          entries.push(path.resolve(packageDir, config));
        }
      } else if (typeof config === "object" && config !== null) {
        for (const val of Object.values(config)) {
          if (typeof val === "string" && val.includes(distName)) {
            entries.push(path.resolve(packageDir, val));
          } else if (typeof val === "object" && val !== null) {
            for (const v of Object.values(val)) {
              if (typeof v === "string" && v.includes(distName)) {
                entries.push(path.resolve(packageDir, v));
              }
            }
          }
        }
      }
    }
  }

  // Browser and react-native replacement targets are also entry points.
  for (const field of ["browser", "react-native"]) {
    const mapping = pkgJson[field];
    if (typeof mapping === "object" && mapping !== null) {
      for (const target of Object.values(mapping)) {
        if (typeof target === "string" && target.includes(distName)) {
          entries.push(path.resolve(packageDir, target.endsWith(".js") ? target : target + ".js"));
        }
      }
    } else if (typeof mapping === "string" && mapping.includes(distName)) {
      entries.push(path.resolve(packageDir, mapping));
    }
  }

  return [...new Set(entries)];
}

/**
 * BFS from entry points, following relative imports using the graph.
 */
function collectReachable(entryPoints, graph) {
  const visited = new Set();
  const queue = [...entryPoints];

  while (queue.length) {
    const file = queue.shift();
    if (visited.has(file) || !fs.existsSync(file)) {
      continue;
    }
    visited.add(file);

    const imports = graph.get(file);
    if (!imports) {
      continue;
    }
    for (let i = 0; i < imports.length; ++i) {
      const specifier = imports[i];
      if (!specifier.startsWith(".")) {
        continue;
      }
      const target = resolveRelative(file, specifier);
      if (target && !visited.has(target)) {
        queue.push(target);
      }
    }
  }
  return visited;
}

/**
 * Creates the unreachable-files validator.
 */
function createValidator() {
  // Collect file lists during the walk so we can diff against reachability in onWalkComplete.
  // Key format: `${packageDir}::${target}` → Set<filePath>
  const filesByPkgTarget = new Map();
  const pkgJsonByDir = new Map();
  const errors = [];

  // Packages exempt entirely.
  const EXEMPT_PACKAGES = new Set(["@aws-sdk/aws-client-api-test", "@aws-sdk/aws-client-retry-test"]);

  // Package-specific file exemptions (relative paths from package root).
  const EXEMPT_FILES = new Map([
    [
      "@aws-sdk/core",
      new Set([
        "dist-es/submodules/client/util-user-agent-browser/defaultUserAgent.browser.js",
        "dist-es/submodules/protocols/json/experimental/SinglePassJsonShapeSerializer.js",
        "dist-es/submodules/protocols/xml/simpleFormatXml.js",
      ]),
    ],
    [
      "@aws-sdk/nested-clients",
      new Set([
        "dist-es/submodules/cognito-identity/runtimeConfig.native.js",
        "dist-es/submodules/signin/runtimeConfig.native.js",
        "dist-es/submodules/sso/runtimeConfig.native.js",
        "dist-es/submodules/sso-oidc/runtimeConfig.native.js",
        "dist-es/submodules/sts/runtimeConfig.native.js",
      ]),
    ],
    ["@aws-sdk/util-dns", new Set(["dist-es/archive/NodeDnsResolveHostResolver.js"])],
    [
      "@aws-sdk/lib-transfer-manager",
      new Set([
        "dist-es/submodules/transfer-manager/join-streams.browser.js",
        "dist-es/submodules/transfer-manager/worker-http-handler.browser.js",
      ]),
    ],
  ]);

  return {
    name: "unreachable-files",
    targets: ["dist-cjs", "dist-es"],

    onFile(file, context) {
      if (!file.endsWith(".js")) {
        return;
      }
      const key = `${context.packageDir}::${context.target}`;
      if (!filesByPkgTarget.has(key)) {
        filesByPkgTarget.set(key, new Set());
        pkgJsonByDir.set(context.packageDir, context.packageJson);
      }
      filesByPkgTarget.get(key).add(file);
    },

    onWalkComplete(graph) {
      for (const [key, files] of filesByPkgTarget) {
        const [packageDir, target] = key.split("::");
        const pkgJson = pkgJsonByDir.get(packageDir);
        if (!pkgJson) {
          continue;
        }
        if (EXEMPT_PACKAGES.has(pkgJson.name)) {
          continue;
        }

        const entryPoints = getEntryPoints(pkgJson, packageDir, target);
        if (!entryPoints.length) {
          continue;
        }

        const reachable = collectReachable(entryPoints, graph);
        const pkgExemptions = EXEMPT_FILES.get(pkgJson.name);

        for (const file of files) {
          if (reachable.has(file)) {
            continue;
          }
          // Type-only files compile to just "export {};".
          const content = fs.readFileSync(file, "utf-8").trim();
          if (content === "export {};" || content === '"use strict";') {
            continue;
          }
          const rel = path.relative(packageDir, file);
          // Skip known browser/native runtimeConfig alternates.
          if (rel === `${target}/runtimeConfig.browser.js` || rel === `${target}/runtimeConfig.native.js`) {
            continue;
          }
          // Skip package-specific exemptions.
          if (pkgExemptions && pkgExemptions.has(rel)) {
            continue;
          }
          errors.push(`[${pkgJson.name}] unreachable file: ${rel}`);
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
    console.error(`❌ ${errors.length} unreachable file(s):\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ All dist files are reachable from entry points. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
