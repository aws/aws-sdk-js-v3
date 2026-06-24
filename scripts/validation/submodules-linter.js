const fs = require("node:fs");
const path = require("node:path");
const walk = require("../utils/walk");

const singlePkg =
  process.argv.indexOf("--pkg") !== -1 ? process.argv[process.argv.indexOf("--pkg") + 1] : path.basename(process.cwd());

const submodulePackages = process.argv.includes("--all")
  ? [
      ...fs.readdirSync(path.join(__dirname, "..", "..", "packages")),
      ...fs.readdirSync(path.join(__dirname, "..", "..", "packages-internal")),
      ...fs.readdirSync(path.join(__dirname, "..", "..", "lib")),
    ].filter((pkg) => {
      const [a, b, c] = [
        path.join(__dirname, "..", "..", "packages", pkg),
        path.join(__dirname, "..", "..", "packages-internal", pkg),
        path.join(__dirname, "..", "..", "lib", pkg),
      ];
      const dir = fs.existsSync(path.join(a, "package.json"))
        ? a
        : fs.existsSync(path.join(b, "package.json"))
        ? b
        : fs.existsSync(path.join(c, "package.json"))
        ? c
        : null;
      if (!dir) return false;
      return (
        fs.existsSync(path.join(dir, "src", "submodules")) &&
        "exports" in JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf-8"))
      );
    })
  : [singlePkg];

(async () => {
  const errors = [];
  for (const submodulePackage of submodulePackages) {
    const [a, b, c] = [
      path.join(__dirname, "..", "..", "packages", submodulePackage),
      path.join(__dirname, "..", "..", "packages-internal", submodulePackage),
      path.join(__dirname, "..", "..", "lib", submodulePackage),
    ];
    const root = fs.existsSync(a) ? a : fs.existsSync(b) ? b : c;

    const pkgJson = require(path.join(root, "package.json"));
    if (!pkgJson.exports) {
      pkgJson.exports = {};
    }
    const tsconfigs = {
      cjs: require(path.join(root, "tsconfig.cjs.json")),
      es: require(path.join(root, "tsconfig.es.json")),
      types: require(path.join(root, "tsconfig.types.json")),
    };
    const submodules = fs.readdirSync(path.join(root, "src", "submodules"));

    for (const submodule of submodules) {
      const submodulePath = path.join(root, "src", "submodules", submodule);
      if (fs.existsSync(submodulePath) && fs.lstatSync(submodulePath).isDirectory()) {
        // api extractor type index
        const apiExtractorAggregateTypeIndexPath = path.join(root, "src", "api-extractor-type-index.ts");
        if (fs.existsSync(apiExtractorAggregateTypeIndexPath)) {
          const fileContents = fs.readFileSync(apiExtractorAggregateTypeIndexPath, "utf-8");
          if (!fileContents.includes(`export * from "./submodules/${submodule}/index";`)) {
            fs.writeFileSync(
              apiExtractorAggregateTypeIndexPath,
              fileContents + `export * from "./submodules/${submodule}/index";`
            );
            errors.push(`${submodule} not exported from src/api-extractor-type-index.d.ts`);
          }
        }
        // package.json metadata.
        const pushPkgJson = () => {
          fs.writeFileSync(path.join(root, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");
        };

        if (!pkgJson.exports[`./${submodule}`]) {
          errors.push(`${submodule} submodule is missing exports statement in package.json`);
          pkgJson.exports[`./${submodule}`] = {
            types: `./dist-types/submodules/${submodule}/index.d.ts`,
            module: `./dist-es/submodules/${submodule}/index.js`,
            node: `./dist-cjs/submodules/${submodule}/index.js`,
            import: `./dist-es/submodules/${submodule}/index.js`,
            require: `./dist-cjs/submodules/${submodule}/index.js`,
          };
          pushPkgJson();
        }
        if (submodulePackage === "nested-clients") {
          if (!pkgJson.browser[`./dist-es/submodules/${submodule}/runtimeConfig`]) {
            pkgJson.browser[
              `./dist-es/submodules/${submodule}/runtimeConfig`
            ] = `./dist-es/submodules/${submodule}/runtimeConfig.browser`;
            errors.push(`${submodule} is missing browser replacement directive.`);
          }
          pushPkgJson();
        }
        if (!pkgJson.files.includes(`./${submodule}.js`) || !pkgJson.files.includes(`./${submodule}.d.ts`)) {
          pkgJson.files.push(`./${submodule}.js`);
          pkgJson.files.push(`./${submodule}.d.ts`);
          errors.push(`package.json files array missing ${submodule}.js compatibility redirect file.`);
          pkgJson.files = [...new Set(pkgJson.files)].sort();
          pushPkgJson();
        }
        // tsconfig metadata.
        for (const [kind, tsconfig] of Object.entries(tsconfigs)) {
          if (!tsconfig.compilerOptions?.paths?.[`@aws-sdk/${submodulePackage}/${submodule}`]) {
            errors.push(`${submodule} submodule is missing paths entry in tsconfig.${kind}.json`);
            tsconfig.compilerOptions = tsconfig.compilerOptions ?? {};
            tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths ?? {};

            tsconfig.compilerOptions.paths[`@aws-sdk/${submodulePackage}/${submodule}`] = [
              `./src/submodules/${submodule}/index.ts`,
            ];
            fs.writeFileSync(path.join(root, `tsconfig.${kind}.json`), JSON.stringify(tsconfig, null, 2) + "\n");
          }
        }
        // react-native condition in exports: must point to dist-es (.native.js if it exists, else .browser.js).
        const exportEntry = pkgJson.exports[`./${submodule}`];
        const nativeEs = `./dist-es/submodules/${submodule}/index.native.js`;
        const browserEs = `./dist-es/submodules/${submodule}/index.browser.js`;
        const hasNative = fs.existsSync(path.join(root, nativeEs));
        const hasBrowser = fs.existsSync(path.join(root, browserEs));
        if (hasNative || hasBrowser) {
          const expectedEs = hasNative ? nativeEs : browserEs;
          if (!exportEntry["react-native"] || exportEntry["react-native"] !== expectedEs) {
            errors.push(`${submodule} exports "react-native" condition must point to ${expectedEs}`);
            exportEntry["react-native"] = expectedEs;
            // reorder so react-native comes after types
            const reordered = {};
            if (exportEntry.types) {
              reordered.types = exportEntry.types;
            }
            reordered["react-native"] = exportEntry["react-native"];
            for (const [k, v] of Object.entries(exportEntry)) {
              if (k !== "types" && k !== "react-native") {
                reordered[k] = v;
              }
            }
            pkgJson.exports[`./${submodule}`] = reordered;
            pushPkgJson();
          }
        }
        // compatibility redirect file.
        const compatibilityRedirectFile = path.join(root, `${submodule}.js`);
        if (!fs.existsSync(compatibilityRedirectFile)) {
          errors.push(`${submodule} is missing compatibility redirect file in the package root folder.`);
        }
        fs.writeFileSync(
          compatibilityRedirectFile,
          `/**
 * Do not edit:
 * This is a compatibility redirect for contexts that do not understand package.json exports field.
 */
module.exports = require("./dist-cjs/submodules/${submodule}/index.js");
`
        );
        // compatibility types file.
        const compatibilityTypesFile = path.join(root, `${submodule}.d.ts`);
        if (!fs.existsSync(compatibilityTypesFile)) {
          errors.push(`${submodule} is missing compatibility types file in the package root folder.`);
        }
        fs.writeFileSync(
          compatibilityTypesFile,
          `/**
 * Do not edit:
 * This is a compatibility redirect for contexts that do not understand package.json exports field.
 */
export * from "./dist-types/submodules/${submodule}/index";
`
        );
      }
    }

    /**
     * Root index.ts must not use relative imports — use canonical submodule paths instead.
     * Relative imports bypass conditional exports (browser/react-native resolution).
     */
    const rootIndex = path.join(root, "src", "index.ts");
    if (fs.existsSync(rootIndex)) {
      const rootSource = fs.readFileSync(rootIndex, "utf-8");
      const relImports = (rootSource.match(/from "(\.\.?\/[^"]+)"/g) || []).map((m) => m.match(/"([^"]+)"/)[1]);
      for (const rel of relImports) {
        errors.push(
          `${submodulePackage}/src/index.ts has relative import "${rel}". ` +
            `Use canonical submodule path (e.g. @aws-sdk/${submodulePackage}/submodule) instead.`
        );
      }
    }

    /**
     * If root index uses canonical submodule imports (no src/index.browser.ts),
     * the react-native field should not map root index to a browser variant.
     */
    if (pkgJson["react-native"] && !fs.existsSync(path.join(root, "src", "index.browser.ts"))) {
      let changed = false;
      for (const key of Object.keys(pkgJson["react-native"])) {
        if (key.match(/\.\/dist-(es|cjs)\/index(\.js)?$/)) {
          delete pkgJson["react-native"][key];
          changed = true;
        }
      }
      if (changed) {
        errors.push(`react-native field has stale root index mapping without src/index.browser.ts`);
        fs.writeFileSync(path.join(root, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");
      }
    }

    /**
     * Check that submodules with .browser.ts or .native.ts files have corresponding index variant files.
     * This applies to core and config but not nested-clients.
     */
    if (submodulePackage !== "nested-clients") {
      for (const submodule of submodules) {
        const submodulePath = path.join(root, "src", "submodules", submodule);
        if (!fs.existsSync(submodulePath) || !fs.lstatSync(submodulePath).isDirectory()) continue;

        let hasBrowserVariant = false;
        let hasNativeVariant = false;

        const scanDir = (dir) => {
          for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
              scanDir(path.join(dir, entry.name));
            } else if (!entry.name.includes(".spec.") && !entry.name.includes(".integ.")) {
              if (entry.name.endsWith(".browser.ts")) hasBrowserVariant = true;
              if (entry.name.endsWith(".native.ts")) hasNativeVariant = true;
            }
          }
        };
        scanDir(submodulePath);

        if (hasBrowserVariant && !fs.existsSync(path.join(submodulePath, "index.browser.ts"))) {
          errors.push(`${submodule} has .browser.ts variant files but is missing index.browser.ts`);
        }
        if (hasNativeVariant && !fs.existsSync(path.join(submodulePath, "index.native.ts"))) {
          errors.push(`${submodule} has .native.ts variant files but is missing index.native.ts`);
        }
      }
    }

    /**
     * Check for cross-submodule relative imports.
     */

    for await (const item of walk(path.join(root, "src", "submodules"))) {
      // depth within the submodule where 1 is at the root of the submodule.
      const depth = item.split(`${submodulePackage}/src/submodules/`)[1].split("/").length - 1;
      const sourceCode = fs.readFileSync(item, "utf-8");

      const relativeImports = [];
      relativeImports.push(
        ...new Set(
          [...(sourceCode.toString().match(/(from |import\()"(.*?)";/g) || [])]
            .map((_) => _.replace(/from "/g, "").replace(/";$/, ""))
            .filter((_) => _.startsWith("."))
        )
      );

      for (const i of relativeImports) {
        const relativeImportDepth = i.split("..").length - 1;
        if (relativeImportDepth >= depth && i !== "../../../package.json") {
          errors.push(
            `relative import ${i} in ${item
              .split(/(?:packages|packages-internal|lib)\//)
              .pop()} crosses submodule boundaries. Use @scope/package/submodule import instead.`
          );
        }
      }

      const subModuleImports = [
        ...new Set(
          (sourceCode.toString().match(/(from |import\()"@aws-sdk\/[^/]+\/(.*?)";/g) || [])
            .map((_) => _.match(/@aws-sdk\/[^/]+\/(.*?)"/)?.[1])
            .filter(Boolean)
        ),
      ];
      const ownModule = item.match(/src\/submodules\/(.*?)\//)?.[1];

      if (subModuleImports.includes(ownModule)) {
        errors.push(`self-referencing submodule import found in ${item}`);
      }
    }
  }

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
})();
