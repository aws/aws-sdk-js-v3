const fs = require("fs");
const path = require("path");

const singlePkg = process.argv[process.argv.indexOf("--pkg") + 1];

const submodulePackages = singlePkg ? [singlePkg] : ["core", "nested-clients"];

for (const submodulePackage of submodulePackages) {
  const root = path.join(__dirname, "..", "..", "packages", submodulePackage);
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

  const errors = [];

  for (const submodule of submodules) {
    const submodulePath = path.join(root, "src", "submodules", submodule);
    if (fs.existsSync(submodulePath) && fs.lstatSync(submodulePath).isDirectory()) {
      // package.json metadata.
      if (!pkgJson.exports[`./${submodule}`]) {
        errors.push(`${submodule} submodule is missing exports statement in package.json`);
        pkgJson.exports[`./${submodule}`] = {
          module: `./dist-es/submodules/${submodule}/index.js`,
          node: `./dist-cjs/submodules/${submodule}/index.js`,
          import: `./dist-es/submodules/${submodule}/index.js`,
          require: `./dist-cjs/submodules/${submodule}/index.js`,
          types: `./dist-types/submodules/${submodule}/index.d.ts`,
        };
        fs.writeFileSync(path.join(root, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");
      }
      if (!pkgJson.files.includes(`./${submodule}.js`) || !pkgJson.files.includes(`./${submodule}.d.ts`)) {
        pkgJson.files.push(`./${submodule}.js`);
        pkgJson.files.push(`./${submodule}.d.ts`);
        errors.push(`package.json files array missing ${submodule}.js compatibility redirect file.`);
        pkgJson.files = [...new Set(pkgJson.files)].sort();
        fs.writeFileSync(path.join(root, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");
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
      // compatibility redirect file.
      const compatibilityRedirectFile = path.join(root, `${submodule}.js`);
      if (!fs.existsSync(compatibilityRedirectFile)) {
        errors.push(`${submodule} is missing compatibility redirect file in the package root folder.`);
        fs.writeFileSync(
          compatibilityRedirectFile,
          `
  /**
   * Do not edit:
   * This is a compatibility redirect for contexts that do not understand package.json exports field.
   */
  module.exports = require("./dist-cjs/submodules/${submodule}/index.js");
  `
        );
      }
      // compatibility types file.
      const compatibilityTypesFile = path.join(root, `${submodule}.d.ts`);
      if (!fs.existsSync(compatibilityTypesFile)) {
        errors.push(`${submodule} is missing compatibility types file in the package root folder.`);
        fs.writeFileSync(
          compatibilityTypesFile,
          `
  /**
   * Do not edit:
   * This is a compatibility redirect for contexts that do not understand package.json exports field.
   */
  declare module "@aws-sdk/${submodulePackage}/${submodule}" {
    export * from "@aws-sdk/${submodulePackage}/dist-types/submodules/${submodule}/index.d";
  }
  `
        );
      }
    }
  }

  /**
   * Check for cross-submodule relative imports.
   */

  const walk = require("../../scripts/utils/walk");

  (async () => {
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
              .split("packages/")
              .pop()} crosses submodule boundaries. Use @scope/package/submodule import instead.`
          );
        }
      }
    }
  })().then(() => {
    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
  });
}
