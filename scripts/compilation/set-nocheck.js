const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");

for (const packageFolder of [
  ...fs.readdirSync(path.join(root, "lib")).map((f) => path.join(root, "lib", f)),
  ...fs.readdirSync(path.join(root, "packages")).map((f) => path.join(root, "packages", f)),
  ...fs.readdirSync(path.join(root, "clients")).map((f) => path.join(root, "clients", f)),
  ...fs.readdirSync(path.join(root, "private")).map((f) => path.join(root, "private", f)),
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
