// @ts-check
const { join } = require("path");
const { copySync, removeSync } = require("fs-extra");
const { readdirSync, lstatSync, readFileSync, existsSync, writeFileSync } = require("fs");

const getOverwritablePredicate = (packageName) => (pathName) => {
  const overwritablePathnames = [
    "commands",
    "models",
    "protocols",
    "pagination",
    "LICENCE",
    "runtimeConfig.ts",
    "runtimeConfig.browser.ts",
    "runtimeConfig.shared.ts",
    "runtimeConfig.native.ts",
    "index.ts",
    "endpoints.ts",
  ];
  return (
    pathName
      .toLowerCase()
      .startsWith(
        packageName.toLowerCase().replace("@aws-sdk/client-", "").replace("@aws-sdk/aws-", "").replace(/-/g, "")
      ) || overwritablePathnames.indexOf(pathName) >= 0
  );
};

/**
 * Copy the keys from newly-generated package.json to
 * existing package.json. For each keys in new package.json
 * we prefer the new key. Whereas for the values, we prefer
 * the values in the existing package.json.
 *
 * This behavior enables us removing dependencies/scripts
 * from codegen, but maintain the newer dependency versions
 * in existing package.json
 */
const mergeManifest = (fromContent = {}, toContent) => {
  const merged = {};
  const fromNames = Object.keys(fromContent);
  for (const name of fromNames) {
    if (typeof toContent[name] === "object") {
      merged[name] = mergeManifest(fromContent[name], toContent[name]);
      if (name === "scripts" || name === "devDependencies") {
        // Allow target package.json(toContent) has its own special script or
        // dev dependencies that won't be overwritten in codegen
        merged[name] = { ...toContent[name], ...merged[name] };
      }
      if (name === "dependencies" || name === "devDependencies") {
        // Sort dependencies as done by lerna
        merged[name] = Object.fromEntries(Object.entries(merged[name]).sort());
      }
    } else {
      // If key (say dependency) is present in both codegen and
      // package.json, we prefer latter
      merged[name] = toContent[name] || fromContent[name];
    }
  }
  return merged;
};

/**
 * Remove "^" from the the version of dependencies on @aws-sdk packages.
 * e.g. "@aws-sdk/config-resolver": "^1.0.0-gamma.0"
 *      => "@aws-sdk/config-resolver": "1.0.0-gamma.0"
 */
const pinDependencies = (manifest) => {
  const removeRangeVersion = ([name, version]) =>
    name.indexOf("@aws-sdk/") === 0 ? [name, version.replace("^", "")] : [name, version];
  manifest.dependencies = Object.fromEntries(Object.entries(manifest.dependencies).map(removeRangeVersion));
  manifest.devDependencies = Object.fromEntries(Object.entries(manifest.devDependencies).map(removeRangeVersion));
};

const copyToClients = async (sourceDir, destinationDir) => {
  for (const modelName of readdirSync(sourceDir)) {
    if (modelName === "source") continue;
    const artifactPath = join(sourceDir, modelName, "typescript-codegen");
    const packageManifestPath = join(artifactPath, "package.json");
    if (!existsSync(packageManifestPath)) {
      console.error(`${modelName} generates empty client, skip.`);
      continue;
    }

    const packageManifest = JSON.parse(readFileSync(packageManifestPath).toString());
    const packageName = packageManifest.name;
    console.log(`copying ${packageName} from ${artifactPath} to ${destinationDir}`);
    const destPath = join(destinationDir, packageName.replace("@aws-sdk/", ""));
    const overwritablePredicate = getOverwritablePredicate(packageName);
    for (const packageSub of readdirSync(artifactPath)) {
      const packageSubPath = join(artifactPath, packageSub);
      const destSubPath = join(destPath, packageSub);
      if (packageSub === "package.json") {
        //copy manifest file
        const destManifest = existsSync(destSubPath) ? JSON.parse(readFileSync(destSubPath).toString()) : {};
        const mergedManifest = mergeManifest(packageManifest, destManifest);
        pinDependencies(mergedManifest);
        writeFileSync(destSubPath, JSON.stringify(mergedManifest, null, 2).concat(`\n`));
      } else if (overwritablePredicate(packageSub) || !existsSync(destSubPath)) {
        if (lstatSync(packageSubPath).isDirectory()) removeSync(destSubPath);
        copySync(packageSubPath, destSubPath, {
          overwrite: true,
        });
      }
    }
  }
};

module.exports = {
  copyToClients,
};
