/**
 * Checks devDependency declarations for runtime packages.
 * They should be moved to the dependencies section even if only imported for types.
 */

const fs = require("node:fs");
const path = require("node:path");
const pkgJsonEnforcement = require("./package-json-enforcement");

const root = path.join(__dirname, "..", "..");
const packages = path.join(root, "packages");
const _private = path.join(root, "private");
const topLevelFolders = [packages, _private];
const packageFolders = [];
const walk = require("../utils/walk");

for (const topLevelFolder of topLevelFolders) {
  packageFolders.push(...fs.readdirSync(topLevelFolder));
}

const node_libraries = [
  "buffer",
  "child_process",
  "crypto",
  "dns",
  "dns/promises",
  "events",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "os",
  "path",
  "path/posix",
  "path/win32",
  "process",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "tls",
  "url",
  "util",
  "zlib",
];

const ignored = [...node_libraries, "vitest"];

(async () => {
  const errors = [];

  for (const packageFolder of packageFolders) {
    if (packageFolder === "util-dynamodb") {
      // exempt
      continue;
    }

    const containingFolder = topLevelFolders.find((f) => fs.existsSync(path.join(f, packageFolder, "package.json")));

    const pkgJsonPath = path.join(containingFolder, packageFolder, "package.json");

    if (containingFolder === packages) {
      errors.push(...pkgJsonEnforcement(pkgJsonPath, true));
    }

    const srcPath = path.join(containingFolder, packageFolder, "src");
    const pkgJson = require(pkgJsonPath);

    if (!pkgJson.dependencies.tslib && pkgJson.name !== "@aws-sdk/all-in-one") {
      errors.push(`Missing tslib in ${pkgJson.name}`);
    }

    for await (const file of walk(srcPath, ["node_modules"])) {
      const contents = fs.readFileSync(file);

      if (file.endsWith(".spec.ts")) {
        continue;
      }

      if (!file.endsWith(".ts")) {
        continue;
      }

      const importedDependencies = [];
      importedDependencies.push(
        ...new Set(
          [...(contents.toString().match(/(from |import\()"(.*?)"\)?;/g) ?? [])]
            .map((_) => _.replace(/(from ")|(import\(")/g, "").replace(/"\)?;$/, ""))
            .filter((_) => !_.startsWith(".") && !ignored.includes(_))
        )
      );

      for (const dependency of importedDependencies) {
        const dependencyPackageName = dependency.startsWith("@")
          ? dependency.split("/").slice(0, 2).join("/")
          : dependency.split("/")[0];

        if (
          !(dependencyPackageName in (pkgJson.dependencies ?? {})) &&
          !(dependencyPackageName in (pkgJson.peerDependencies ?? {})) &&
          dependencyPackageName !== pkgJson.name
        ) {
          if (
            ["@aws-sdk/client-sts", "@aws-sdk/client-sso-oidc"].includes(dependency) &&
            ["@aws-sdk/nested-clients"].includes(pkgJson.name)
          ) {
            continue;
          }
          errors.push(`${dependency} undeclared but imported in ${pkgJson.name} ${file}}`);
        }
      }

      for (const [dep, version] of Object.entries(pkgJson.devDependencies ?? {})) {
        if ((dep.startsWith("@smithy") || dep.startsWith("@aws-sdk")) && contents.includes(`from "${dep}";`)) {
          errors.push(`${dep} incorrectly declared in devDependencies of ${packageFolder}`);
          delete pkgJson.devDependencies[dep];
          if (!pkgJson.dependencies) {
            pkgJson.dependencies = {};
          }
          pkgJson.dependencies[dep] = version;

          fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n");
        }
      }
    }
  }

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
})();
