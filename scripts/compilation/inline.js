/**
 *
 * Inline a package as one dist file.
 *
 */

const fs = require("fs");
const path = require("path");
const Inliner = require("./Inliner");
const { listFolders } = require("../utils/list-folders");

const root = path.join(__dirname, "..", "..");

const _package = process.argv[2];

if (!_package) {
  /**
   * If no package is selected, this script sets build:cjs scripts to
   * use this inliner script instead of only tsc.
   */
  const packages = listFolders(path.join(root, "packages")).map((pkg) => ({
    pkgJsonFilePath: path.join(root, "packages", pkg, "package.json"),
    pkg,
  }));

  packages.push(
    ...["dynamodb", "storage"].map((lib) => ({
      pkg: `lib-${lib}`,
      pkgJsonFilePath: path.join(root, "lib", `lib-${lib}`, "package.json"),
    }))
  );

  packages.push(
    ...listFolders(path.join(root, "clients")).map((pkg) => ({
      pkgJsonFilePath: path.join(root, "clients", pkg, "package.json"),
      pkg,
    }))
  );

  for (const { pkg, pkgJsonFilePath } of packages) {
    const pkgJson = require(pkgJsonFilePath);
    pkgJson.scripts["build:cjs"] = `node ../../scripts/compilation/inline ${pkg}`;
    fs.writeFileSync(pkgJsonFilePath, JSON.stringify(pkgJson, null, 2));
  }
} else {
  (async () => {
    const inliner = new Inliner(_package);
    await inliner.clean();
    await inliner.tsc();
    await inliner.discoverVariants();
    await inliner.bundle();
    await inliner.rewriteStubs();
    await inliner.fixVariantImportPaths();
    await inliner.validate();
  })();
}
