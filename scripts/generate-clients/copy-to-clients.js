const path = require("path");
const { copySync, ensureDirSync } = require("fs-extra");
const {
  readdirSync,
  lstatSync,
  readFileSync,
  existsSync,
  writeFileSync
} = require("fs");

const CODE_GEN_OUTPUT_DIR = path.normalize(
  path.join(
    __dirname,
    "..",
    "..",
    "codegen",
    "sdk-codegen",
    "build",
    "smithyprojections",
    "sdk-codegen"
  )
);

const unOverridables = [
  "package.json",
  "tsconfig.es.json",
  "tsconfig.json",
  "tsconfig.test.json"
];

async function copyToClients(clientsDir) {
  for (const modelName of readdirSync(CODE_GEN_OUTPUT_DIR)) {
    if (modelName === "source") continue;
    const artifactPath = path.join(
      CODE_GEN_OUTPUT_DIR,
      modelName,
      "typescript-codegen"
    );
    const packageManifestPath = path.join(artifactPath, "package.json");
    if (!existsSync(packageManifestPath)) {
      console.error(`${modelName} generates empty client, skip.`);
      continue;
    }
    const packageManifest = JSON.parse(
      readFileSync(packageManifestPath).toString()
    );
    const packageName = packageManifest.name.replace("@aws-sdk/", "");
    console.log(`copying ${packageName} from ${artifactPath} to ${clientsDir}`);
    const destPath = path.join(clientsDir, packageName);
    for (const packageSub of readdirSync(artifactPath)) {
      const packageSubPath = path.join(artifactPath, packageSub);
      const destSubPath = path.join(destPath, packageSub);
      if (unOverridables.indexOf(packageSub) >= 0) {
        if (!existsSync(destSubPath))
          copySync(packageSubPath, destSubPath, { overwrite: true });
        else if (packageSub === "package.json") {
          /**
           * Copy package.json content in detail.
           * Basically merge the generated package.json and dest package.json
           * but prefer the values from dest when they contain the same key
           * */
          const destManifest = JSON.parse(readFileSync(destSubPath).toString());
          const updatedManifest = {
            ...packageManifest,
            ...destManifest,
            scripts: {
              ...packageManifest.scripts,
              ...destManifest.scripts
            },
            dependencies: {
              ...packageManifest.dependencies,
              ...destManifest.dependencies
            },
            devDependencies: {
              ...packageManifest.devDependencies,
              ...destManifest.devDependencies
            }
          };
          writeFileSync(destSubPath, JSON.stringify(updatedManifest, null, 2));
        }
      } else {
        if (lstatSync(packageSubPath).isDirectory()) ensureDirSync(destSubPath);
        copySync(packageSubPath, destSubPath, { overwrite: true });
      }
    }
  }
}

module.exports = { copyToClients, CODE_GEN_OUTPUT_DIR };
