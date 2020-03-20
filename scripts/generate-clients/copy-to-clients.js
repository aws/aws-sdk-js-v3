const { join } = require("path");
const { copySync, ensureDirSync } = require("fs-extra");
const {
  readdirSync,
  lstatSync,
  readFileSync,
  existsSync,
  writeFileSync
} = require("fs");
const { CODE_GEN_OUTPUT_DIR } = require("./code-gen-dir");

const getOverwritablePredicate = packageName => pathName => {
  const overwritablePathnames = [
    "commands",
    "models",
    "protocols",
    "LICENCE",
    "runtimeConfig.ts",
    "runtimeConfig.browser.ts",
    "runtimeConfig.shared.ts",
    "runtimeConfig.native.ts",
    "index.ts",
    "endpoints.ts"
  ];
  return (
    pathName.toLowerCase().indexOf(
      packageName
        .toLowerCase()
        .replace("@aws-sdk/client-", "")
        .replace(/-/g, "")
    ) >= 0 || overwritablePathnames.indexOf(pathName) >= 0
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
const mergeManifest = (fromContent, toContent) => {
  const merged = {};
  const fromNames = Object.keys(fromContent);
  for (const name of fromNames) {
    if (typeof toContent[name] === "object") {
      merged[name] = mergeManifest(fromContent[name], toContent[name]);
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

async function copyToClients(clientsDir) {
  for (const modelName of readdirSync(CODE_GEN_OUTPUT_DIR)) {
    if (modelName === "source") continue;
    const artifactPath = join(
      CODE_GEN_OUTPUT_DIR,
      modelName,
      "typescript-codegen"
    );
    const packageManifestPath = join(artifactPath, "package.json");
    if (!existsSync(packageManifestPath)) {
      console.error(`${modelName} generates empty client, skip.`);
      continue;
    }

    const packageManifest = JSON.parse(
      readFileSync(packageManifestPath).toString()
    );
    const packageName = packageManifest.name;
    console.log(`copying ${packageName} from ${artifactPath} to ${clientsDir}`);
    const destPath = join(clientsDir, packageName.replace("@aws-sdk/", ""));
    const overwritablePredicate = getOverwritablePredicate(packageName);
    for (const packageSub of readdirSync(artifactPath)) {
      const packageSubPath = join(artifactPath, packageSub);
      const destSubPath = join(destPath, packageSub);
      if (packageSub === "package.json") {
        //copy manifest file
        const destManifest = existsSync(destSubPath)
          ? JSON.parse(readFileSync(destSubPath).toString())
          : {};
        const mergedManifest = mergeManifest(packageManifest, destManifest);
        writeFileSync(
          destSubPath,
          JSON.stringify(mergedManifest, null, 2).concat(`\n`)
        );
      } else if (
        overwritablePredicate(packageSub) ||
        !existsSync(destSubPath)
      ) {
        //Overwrite the directories and files that are overwritable, or not yet exists
        if (lstatSync(packageSubPath).isDirectory()) ensureDirSync(destSubPath);
        copySync(packageSubPath, destSubPath, {
          overwrite: true
        });
      }
    }
  }
}

module.exports = {
  copyToClients
};
