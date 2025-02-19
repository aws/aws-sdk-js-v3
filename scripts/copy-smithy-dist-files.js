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

    const operations = [
      [path.join(smithyPackages, smithyPkg, "dist-cjs"), path.join(node_modules, "@smithy", smithyPkg, "dist-cjs")],
      [path.join(smithyPackages, smithyPkg, "dist-types"), path.join(node_modules, "@smithy", smithyPkg, "dist-types")],
      [path.join(smithyPackages, smithyPkg, "dist-es"), path.join(node_modules, "@smithy", smithyPkg, "dist-es")],
      [
        path.join(smithyPackages, smithyPkg, "package.json"),
        path.join(node_modules, "@smithy", smithyPkg, "package.json"),
      ],
    ];

    for (const [from, to] of operations) {
      fs.cpSync(from, to, { recursive: true, force: true, errorOnExist: false });
    }
    process.stdout.write(".");
  }

  const smithyCoreRoot = path.join(smithyPackages, "core");
  const destination = path.join(node_modules, "@smithy", "core");
  for (const file of fs.readdirSync(smithyCoreRoot)) {
    if (file.endsWith(".js")) {
      fs.cpSync(path.join(smithyCoreRoot, file), path.join(destination, file));
      fs.cpSync(
        path.join(smithyCoreRoot, file.replace(".js", ".d.ts")),
        path.join(destination, file.replace(".js", ".d.ts"))
      );
    }
  }
})();
