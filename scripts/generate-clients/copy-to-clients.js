// @ts-check
const { normalize, join } = require("path");
const { copySync, removeSync } = require("fs-extra");
const { readdirSync, lstatSync, readFileSync, existsSync, writeFileSync } = require("fs");

const getOverwritablePredicate = (packageName) => (pathName) => {
  const overwritablePathnames = [
    "commands",
    "models",
    "protocols",
    "pagination",
    "tests",
    "LICENCE",
    "runtimeConfig.ts",
    "runtimeConfig.browser.ts",
    "runtimeConfig.shared.ts",
    "runtimeConfig.native.ts",
    "index.ts",
    "endpoints.ts",
    "README.md",
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
const mergeManifest = (fromContent = {}, toContent = {}) => {
  const merged = {};
  for (const name of Object.keys(fromContent)) {
    if (fromContent[name].constructor.name === "Object") {
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
    } else if (name.indexOf("@aws-sdk/") === 0) {
      // If it's internal dependency, use current version in the repo if not
      // present in package.json
      merged[name] = toContent[name] || getInternalDepVersion(name);
    } else {
      // If key (say dependency) is present in both codegen and
      // package.json, we prefer latter
      merged[name] = toContent[name] || fromContent[name];
    }
  }
  return merged;
};

/**
 * Returns current version number of the internal dependency version passed.
 */
const getInternalDepVersion = (depName) => {
  if (depName.indexOf("@aws-sdk/") !== 0) {
    throw new Error(`getInternalDepVersion called for external dep: "${depName}"`);
  }

  const packageName = depName.substr(9);
  const packagesDir = normalize(join(__dirname, "..", "..", "packages"));
  const clientsDir = normalize(join(__dirname, "..", "..", "clients"));

  if (existsSync(`${packagesDir}/${packageName}`)) {
    return require(`${packagesDir}/${packageName}/package.json`).version;
  } else if (existsSync(`${clientsDir}/${packageName}`)) {
    return require(`${clientsDir}/${packageName}/package.json`).version;
  }

  throw new Error(`Internal dependency "${packageName}" not found`);
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
    const clientName = packageName.replace("@aws-sdk/", "");

    console.log(`copying ${packageName} from ${artifactPath} to ${destinationDir}`);
    const destPath = join(destinationDir, clientName);
    const overwritablePredicate = getOverwritablePredicate(packageName);

    for (const packageSub of readdirSync(artifactPath)) {
      const packageSubPath = join(artifactPath, packageSub);
      const destSubPath = join(destPath, packageSub);

      if (packageSub === "package.json") {
        //copy manifest file
        const destManifest = existsSync(destSubPath) ? JSON.parse(readFileSync(destSubPath).toString()) : {};
        const mergedManifest = {
          ...mergeManifest(packageManifest, destManifest),
          homepage: `https://github.com/aws/aws-sdk-js-v3/tree/main/clients/${clientName}`,
          repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: `clients/${clientName}`,
          },
        };
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
