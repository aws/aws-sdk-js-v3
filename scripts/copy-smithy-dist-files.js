/**
 * This script copies the dist-es, cjs, and types artifacts
 * from a co-located smithy-typescript repo folder to this workspace.
 */

const fs = require("fs");
const path = require("path");
const { spawnProcess } = require("./utils/spawn-process");

const aws = path.join(__dirname, "..", "..");

const smithyPackages = path.join(aws, "smithy-typescript", "packages");
const node_modules = path.join(__dirname, "..", "node_modules");

const localSmithyPkgs = fs.readdirSync(path.join(node_modules, "@smithy"));
const adjacentSmithyPkgs = fs.readdirSync(smithyPackages);

(async () => {
  for (const smithyPkg of [...localSmithyPkgs, ...adjacentSmithyPkgs]) {
    if (!fs.existsSync(path.join(smithyPackages, smithyPkg, "dist-cjs"))) {
      continue;
    }
    await Promise.all([
      spawnProcess("cp", [
        "-r",
        path.join(smithyPackages, smithyPkg, "dist-cjs"),
        path.join(node_modules, "@smithy", smithyPkg),
      ]),
      spawnProcess("cp", [
        "-r",
        path.join(smithyPackages, smithyPkg, "dist-types"),
        path.join(node_modules, "@smithy", smithyPkg),
      ]),
      spawnProcess("cp", [
        "-r",
        path.join(smithyPackages, smithyPkg, "dist-es"),
        path.join(node_modules, "@smithy", smithyPkg),
      ]),
      spawnProcess("cp", [
        "-r",
        path.join(smithyPackages, smithyPkg, "package.json"),
        path.join(node_modules, "@smithy", smithyPkg),
      ]),
    ]);
  }
})();
