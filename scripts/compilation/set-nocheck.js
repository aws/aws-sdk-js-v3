const fs = require("node:fs");
const path = require("node:path");
const { listFolders } = require("../utils/list-folders");

const root = path.join(__dirname, "..", "..");

for (const packageFolder of [
  ...listFolders(path.join(root, "lib"), false),
  ...listFolders(path.join(root, "packages"), false),
  ...listFolders(path.join(root, "packages-internal"), false),
  ...listFolders(path.join(root, "clients"), false),
  ...listFolders(path.join(root, "private"), false),
]) {
  console.log(packageFolder);

  const pkgJsonPath = path.join(packageFolder, "package.json");
  if (!fs.existsSync(pkgJsonPath)) {
    continue;
  }

  const tsConfigCjsPath = path.join(packageFolder, "tsconfig.cjs.json");
  const tsConfigEsPath = path.join(packageFolder, "tsconfig.es.json");

  function setNoCheck(path) {
    if (fs.existsSync(path)) {
      const tsConfig = require(path);
      if (!tsConfig.compilerOptions) {
        tsConfig.compilerOptions = {};
      }
      tsConfig.compilerOptions.noCheck = true;
      fs.writeFileSync(path, JSON.stringify(tsConfig, null, 2));
    }
  }

  setNoCheck(tsConfigCjsPath);
  setNoCheck(tsConfigEsPath);
}
