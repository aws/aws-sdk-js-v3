const { error } = require("node:console");
const fs = require("node:fs");
const path = require("node:path");

/**
 * This enforcement is not here to prevent adoption of newer
 * package standards such as "exports". It is to ensure consistency in the
 * monorepo until the time comes for those changes.
 * ----
 *
 * The script will enforce several things on a package json object:
 *
 * - main and module must be defined.
 *   In the future this may change. Browser is more standard than module, and
 *   exports may be used for ESM (.mjs) support.
 *
 * - If a react-native entry exists, browser and react native entries must be of the
 *   same type (object replacement directives or string entry point).
 *   If either is not defined, both must not be defined.
 *
 * - when react-native has file replacement directives, it must include both
 *   CJS and ESM dist replacements.
 *
 * - exports must not be defined unless the package is a submodule carrier.
 */
module.exports = function (pkgJsonFilePath, overwrite = false) {
  const errors = [];

  const pkgJson = require(pkgJsonFilePath);
  const submoduleCarriers = ["@aws-sdk/core", "@aws-sdk/config", "@aws-sdk/nested-clients"];
  if (!submoduleCarriers.includes(pkgJson.name)) {
    if ("exports" in pkgJson) {
      errors.push(`${pkgJson.name} must not have an 'exports' field.`);
      if (overwrite) {
        delete pkgJson.exports;
      }
    }
  }

  for (const requiredField of ["main", "module"]) {
    if (!(requiredField in pkgJson)) {
      errors.push(`${requiredField} field missing in ${pkgJson.name}`);
      if (overwrite) {
        switch (requiredField) {
          case "main":
            pkgJson[requiredField] = "./dist-cjs/index.js";
            break;
          case "module":
            pkgJson[requiredField] = pkgJson.main.replace("dist-cjs", "dist-es");
            break;
        }
      }
    }
  }

  if (typeof pkgJson.browser !== typeof pkgJson["react-native"]) {
    errors.push(`browser and react-native fields are different in ${pkgJson.name}`);
  }

  if (!pkgJson.files) {
    errors.push(`no files entry in ${pkgJson.name}`);
  }

  // For submodule carriers, ensure browser and react-native fields exist as objects
  // so that variant enforcement can populate them.
  if (submoduleCarriers.includes(pkgJson.name)) {
    const pkgDirCheck = path.dirname(pkgJsonFilePath);
    const submodulesDirCheck = path.join(pkgDirCheck, "src", "submodules");
    if (fs.existsSync(submodulesDirCheck)) {
      const hasAnyVariant = fs.readdirSync(submodulesDirCheck).some((sub) => {
        const subPath = path.join(submodulesDirCheck, sub);
        return (
          fs.lstatSync(subPath).isDirectory() &&
          (fs.existsSync(path.join(subPath, "index.browser.ts")) ||
            fs.existsSync(path.join(subPath, "index.native.ts")))
        );
      });
      if (hasAnyVariant) {
        if (typeof pkgJson.browser !== "object") {
          if (overwrite) {
            pkgJson.browser = {};
          }
          errors.push(`${pkgJson.name} browser field should be an object (has submodule variants)`);
        }
        if (typeof pkgJson["react-native"] !== "object") {
          if (overwrite) {
            pkgJson["react-native"] = {};
          }
          errors.push(`${pkgJson.name} react-native field should be an object (has submodule variants)`);
        }
      }
    }
  }

  if (typeof pkgJson.browser === "object" && typeof pkgJson["react-native"] === "object") {
    // Skip canonicalization for packages with submodules — they manage their own fields.
    const pkgDirEarly = path.dirname(pkgJsonFilePath);
    const hasSubmodulesEarly = fs.existsSync(path.join(pkgDirEarly, "src", "submodules"));
    if (!hasSubmodulesEarly) {
      const browserCanonical = Object.entries(pkgJson.browser).reduce((acc, [k, v]) => {
        if (!k.includes("dist-cjs/") || typeof v === "boolean") {
          acc[k] = v;
        }
        return acc;
      }, {});

      if (Object.keys(browserCanonical).length !== Object.keys(pkgJson.browser).length) {
        errors.push(`${pkgJson.name} browser field is incomplete.`);
        if (overwrite) {
          pkgJson.browser = browserCanonical;
        }
      }

      const reactNativeCanonical = [
        ...new Set([
          ...Object.entries(pkgJson["react-native"]).map(([k, v]) => [
            k.replace("dist-cjs", "dist-es"),
            typeof v === "string" ? v.replace("dist-cjs", "dist-es") : v,
          ]),
          ...Object.entries(pkgJson["react-native"]).map(([k, v]) => [
            k.replace("dist-es", "dist-cjs"),
            typeof v === "string" ? v.replace("dist-es", "dist-cjs") : v,
          ]),
        ]),
      ].reduce((acc, [k, v]) => {
        acc[k] = v;
        return acc;
      }, {});

      if (Object.keys(reactNativeCanonical).length !== Object.keys(pkgJson["react-native"]).length) {
        errors.push(`${pkgJson.name} react-native field is incomplete.`);
        if (overwrite) {
          pkgJson["react-native"] = reactNativeCanonical;
        }
      }
    } else {
      // For submodule packages, validate that index.browser.ts/index.native.ts are declared.
      const submodulesDir = path.join(pkgDirEarly, "src", "submodules");
      const browserField = pkgJson.browser || {};
      const reactNativeField = pkgJson["react-native"] || {};
      let didModify = false;

      for (const sub of fs.readdirSync(submodulesDir)) {
        const subPath = path.join(submodulesDir, sub);
        if (!fs.lstatSync(subPath).isDirectory()) {
          continue;
        }

        const esIndex = `./dist-es/submodules/${sub}/index.js`;
        const cjsIndex = `./dist-cjs/submodules/${sub}/index.js`;

        if (fs.existsSync(path.join(subPath, "index.browser.ts"))) {
          const esBrowserExpected = `./dist-es/submodules/${sub}/index.browser.js`;

          // browser field: re-path dist-es only.
          if (browserField[esIndex] !== esBrowserExpected) {
            errors.push(`${pkgJson.name} browser["${esIndex}"] should be "${esBrowserExpected}"`);
            if (overwrite) {
              browserField[esIndex] = esBrowserExpected;
              didModify = true;
            }
          }

          // Conditional exports must have "browser" condition pointing to dist-es.
          const exportEntry = pkgJson.exports?.[`./${sub}`];
          if (exportEntry) {
            const esBrowser = esBrowserExpected;
            const cjsBrowser = esBrowser.replace("dist-es", "dist-cjs");
            const expectedBrowser = { import: esBrowser, require: cjsBrowser };
            if (JSON.stringify(exportEntry.browser) !== JSON.stringify(expectedBrowser)) {
              errors.push(`${pkgJson.name} exports["./${sub}"].browser should be ${JSON.stringify(expectedBrowser)}`);
              if (overwrite) {
                exportEntry.browser = expectedBrowser;
              }
            }
            // react-native condition: native variant if exists, otherwise browser fallback.
            const hasNative = fs.existsSync(path.join(subPath, "index.native.ts"));
            const esRn = hasNative ? `./dist-es/submodules/${sub}/index.native.js` : esBrowser;
            const cjsRn = esRn.replace("dist-es", "dist-cjs");
            const expectedRn = { import: esRn, require: cjsRn };
            if (JSON.stringify(exportEntry["react-native"]) !== JSON.stringify(expectedRn)) {
              errors.push(
                `${pkgJson.name} exports["./${sub}"]["react-native"] should be ${JSON.stringify(expectedRn)}`
              );
              if (overwrite) {
                exportEntry["react-native"] = expectedRn;
              }
            }
          }
        }

        if (fs.existsSync(path.join(subPath, "index.native.ts"))) {
          const esNativeExpected = `./dist-es/submodules/${sub}/index.native.js`;
          const cjsNativeExpected = `./dist-cjs/submodules/${sub}/index.native.js`;

          // react-native field: re-path both dist-es and dist-cjs.
          if (reactNativeField[esIndex] !== esNativeExpected) {
            errors.push(`${pkgJson.name} react-native["${esIndex}"] should be "${esNativeExpected}"`);
            if (overwrite) {
              reactNativeField[esIndex] = esNativeExpected;
              didModify = true;
            }
          }
          if (reactNativeField[cjsIndex] !== cjsNativeExpected) {
            errors.push(`${pkgJson.name} react-native["${cjsIndex}"] should be "${cjsNativeExpected}"`);
            if (overwrite) {
              reactNativeField[cjsIndex] = cjsNativeExpected;
              didModify = true;
            }
          }
        } else if (fs.existsSync(path.join(subPath, "index.browser.ts"))) {
          // No native variant — react-native falls back to browser for both dist-es and dist-cjs.
          const esBrowserExpected = `./dist-es/submodules/${sub}/index.browser.js`;
          const cjsBrowserExpected = `./dist-cjs/submodules/${sub}/index.browser.js`;

          if (reactNativeField[esIndex] !== esBrowserExpected) {
            errors.push(
              `${pkgJson.name} react-native["${esIndex}"] should be "${esBrowserExpected}" (fallback to browser)`
            );
            if (overwrite) {
              reactNativeField[esIndex] = esBrowserExpected;
              didModify = true;
            }
          }
          if (reactNativeField[cjsIndex] !== cjsBrowserExpected) {
            errors.push(
              `${pkgJson.name} react-native["${cjsIndex}"] should be "${cjsBrowserExpected}" (fallback to browser)`
            );
            if (overwrite) {
              reactNativeField[cjsIndex] = cjsBrowserExpected;
              didModify = true;
            }
          }
        }
      }

      // Enforce condition key ordering in exports.
      const expectedOrder = ["types", "react-native", "browser", "module", "node", "import", "require", "default"];
      for (const [exportPath, exportEntry] of Object.entries(pkgJson.exports)) {
        if (typeof exportEntry !== "object" || exportEntry === null) {
          continue;
        }
        const keys = Object.keys(exportEntry);
        const ordered = keys.slice().sort((a, b) => {
          const ai = expectedOrder.indexOf(a);
          const bi = expectedOrder.indexOf(b);
          return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        });
        if (JSON.stringify(keys) !== JSON.stringify(ordered)) {
          errors.push(`${pkgJson.name} exports["${exportPath}"] keys should be ordered: ${ordered.join(", ")}`);
          if (overwrite) {
            const reordered = {};
            for (const k of ordered) {
              reordered[k] = exportEntry[k];
            }
            pkgJson.exports[exportPath] = reordered;
          }
        }
      }

      if (didModify) {
        pkgJson.browser = browserField;
        pkgJson["react-native"] = reactNativeField;
      }
    }
  }

  // Validate variant replacement directives match source files.
  // Skip for packages with submodules — they use index-level variant files instead.
  const pkgDir = path.dirname(pkgJsonFilePath);
  const srcDir = path.join(pkgDir, "src");
  const hasSubmodules = fs.existsSync(path.join(srcDir, "submodules"));
  if (fs.existsSync(srcDir) && !hasSubmodules) {
    const browserField = pkgJson.browser || {};
    const reactNativeField = pkgJson["react-native"] || {};
    let didModify = false;

    // Check that every .browser.ts / .native.ts source file has directives.
    const walkSync = (dir) => {
      const results = [];
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          results.push(...walkSync(fullPath));
        } else {
          results.push(fullPath);
        }
      }
      return results;
    };

    for (const file of walkSync(srcDir)) {
      if (file.match(/\.(browser|native)\.ts$/) && !file.match(/\.spec\.|\.integ\./)) {
        const relativePath = file.replace(srcDir, "").replace(/\.ts$/, "");
        const canonicalPath = relativePath.replace(/\.(browser|native)$/, "");
        const variant = relativePath.match(/\.(browser|native)$/)[1];

        const esCanonical = `./dist-es${canonicalPath}`;
        const esVariant = `./dist-es${relativePath}`;
        const cjsCanonical = `./dist-cjs${canonicalPath}`;
        const cjsVariant = `./dist-cjs${relativePath}`;

        // For react-native, .native takes precedence over .browser.
        const hasNativeVariant = variant === "browser" && fs.existsSync(file.replace(/\.browser\.ts$/, ".native.ts"));

        if (variant === "browser") {
          if (browserField[esCanonical] !== esVariant) {
            errors.push(`${pkgJson.name} browser["${esCanonical}"] should be "${esVariant}"`);
            if (overwrite) {
              browserField[esCanonical] = esVariant;
              didModify = true;
            }
          }
          if (!hasNativeVariant) {
            if (reactNativeField[esCanonical] !== esVariant) {
              errors.push(`${pkgJson.name} react-native["${esCanonical}"] should be "${esVariant}"`);
              if (overwrite) {
                reactNativeField[esCanonical] = esVariant;
                didModify = true;
              }
            }
            if (reactNativeField[cjsCanonical] !== cjsVariant) {
              errors.push(`${pkgJson.name} react-native["${cjsCanonical}"] should be "${cjsVariant}"`);
              if (overwrite) {
                reactNativeField[cjsCanonical] = cjsVariant;
                didModify = true;
              }
            }
          }
        } else if (variant === "native") {
          if (reactNativeField[esCanonical] !== esVariant) {
            errors.push(`${pkgJson.name} react-native["${esCanonical}"] should be "${esVariant}"`);
            if (overwrite) {
              reactNativeField[esCanonical] = esVariant;
              didModify = true;
            }
          }
          if (reactNativeField[cjsCanonical] !== cjsVariant) {
            errors.push(`${pkgJson.name} react-native["${cjsCanonical}"] should be "${cjsVariant}"`);
            if (overwrite) {
              reactNativeField[cjsCanonical] = cjsVariant;
              didModify = true;
            }
          }
        }
      }
    }

    if (didModify) {
      if (Object.keys(browserField).length) {
        pkgJson.browser = browserField;
      }
      if (Object.keys(reactNativeField).length) {
        pkgJson["react-native"] = reactNativeField;
      }
    }

    // Verify each existing directive points to an actual source file.
    for (const [field, directives] of [
      ["browser", pkgJson.browser],
      ["react-native", pkgJson["react-native"]],
    ]) {
      if (typeof directives !== "object" || directives === null) {
        continue;
      }
      for (const [canonical, variant] of Object.entries(directives)) {
        if (typeof variant === "boolean") {
          continue;
        }
        if (!variant.startsWith("./")) {
          continue;
        }
        const variantSrcFile = path.join(
          pkgDir,
          variant.replace(/^\.\/dist-(es|cjs)/, "src").replace(/(\.js)?$/, ".ts")
        );
        if (!fs.existsSync(variantSrcFile)) {
          errors.push(
            `${pkgJson.name} ${field}["${canonical}"] -> "${variant}" has no corresponding source file (expected ${variantSrcFile})`
          );
        }
      }
    }
  }

  if (overwrite && errors.length) {
    fs.writeFileSync(pkgJsonFilePath, JSON.stringify(pkgJson, null, 2) + "\n");
  }

  return errors;
};
