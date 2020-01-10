const { join } = require("path");
const { copySync, ensureDirSync } = require("fs-extra");
const { readdirSync, lstatSync, readFileSync, existsSync } = require("fs");
const { CODE_GEN_OUTPUT_DIR } = require("./code-gen-dir");

const getOverwritablePredicate = packageName => pathName => {
  const overwritablePathnames = [
    "commands",
    "lib",
    "models",
    "protocols",
    "LICENCE",
    "runtimeConfig.ts",
    "runtimeConfig.browser.ts",
    "runtimeConfig.shared.ts",
    "index.ts"
  ];
  return (
    pathName.toLowerCase().indexOf(
      packageName
        .toLowerCase()
        .replace("@aws-sdk/client-", "")
        .replace("-", "")
    ) >= 0 || overwritablePathnames.indexOf(pathName) >= 0
  );
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
      if (overwritablePredicate(packageSub) || !existsSync(destSubPath)) {
        //Overwrite the directories and files that are overwritable, or not yet exists
        if (lstatSync(packageSubPath).isDirectory()) ensureDirSync(destSubPath);
        copySync(packageSubPath, destSubPath, { overwrite: true });
      }
    }
  }
}

module.exports = { copyToClients };
