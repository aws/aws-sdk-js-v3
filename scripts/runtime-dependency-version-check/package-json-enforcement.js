const { error } = require("console");
const fs = require("fs");

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
 * - exports must not be defined unless the package name is core.
 */
module.exports = function (pkgJsonFilePath, overwrite = false) {
  const errors = [];

  const pkgJson = require(pkgJsonFilePath);
  if (!pkgJson.name.endsWith("/core") && !pkgJson.name.endsWith("/external")) {
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

  if (typeof pkgJson.browser === "object" && typeof pkgJson["react-native"] === "object") {
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
      const automatic = typeof v === "string" ? v.match(/\.native(\.js)?$/) && k === v.replace(".native", "") : false;
      if (!automatic) {
        acc[k] = v;
      } else {
        errors.push(`${k} -> ${v} is unnecessary in ${pkgJson.name} (automatic in React-Native bundler)`);
      }
      return acc;
    }, {});

    if (Object.keys(reactNativeCanonical).length !== Object.keys(pkgJson["react-native"]).length) {
      errors.push(`${pkgJson.name} react-native field is incomplete.`);
      if (overwrite) {
        pkgJson["react-native"] = reactNativeCanonical;
      }
    }
  }

  if (overwrite && errors.length) {
    fs.writeFileSync(pkgJsonFilePath, JSON.stringify(pkgJson, null, 2) + "\n");
  }

  return errors;
};
