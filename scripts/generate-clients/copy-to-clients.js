// @ts-check
const { normalize, join } = require("path");
const { copySync, removeSync } = require("fs-extra");
const { readdirSync, lstatSync, readFileSync, existsSync, writeFileSync } = require("fs");

const getOverwritableDirectories = (subDirectories, packageName) => {
  const additionalGeneratedFiles = {
    "@aws-sdk/client-sts": ["defaultRoleAssumers.ts", "defaultStsRoleAssumers.ts", "defaultRoleAssumers.spec.ts"],
  };
  const overwritableDirectories = [
    "src", // contains all source files
    "LICENCE",
    "README.md",
  ];
  return subDirectories.filter((subDirectory) => {
    return (
      overwritableDirectories.indexOf(subDirectory) >= 0 ||
      (packageName.startsWith("@aws-sdk/aws-") && subDirectory === "test") ||
      additionalGeneratedFiles[packageName]?.indexOf(subDirectory) >= 0
    );
  });
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
      if (name === "devDependencies") {
        // Remove devDeps defined in monorepo root
        const devDepsInRoot = [
          "@tsconfig/recommended",
          "concurrently",
          "downlevel-dts",
          "rimraf",
          "typedoc",
          "typescript",
        ];
        devDepsInRoot.forEach((devDep) => delete fromContent[name][devDep]);
      }
      merged[name] = mergeManifest(fromContent[name], toContent[name]);
      if (name === "scripts" || name === "devDependencies") {
        // Allow target package.json(toContent) has its own special script or
        // dev dependencies that won't be overwritten in codegen
        merged[name] = { ...toContent[name], ...merged[name] };
      }
      if (name === "scripts" || name === "dependencies" || name === "devDependencies") {
        // Sort by keys to make sure the order is stable
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

    // Code to move files/folders prefixed with `doc-client-` to `lib/lib-dynamodb`
    if (clientName === "client-dynamodb") {
      for (const packageSub of readdirSync(artifactPath)) {
        if (packageSub.startsWith("doc-client-")) {
          const destinationFileName = packageSub.replace("doc-client-", "");
          const docClientArtifactPath = join(artifactPath, packageSub);
          const docClientDestPath = join(destinationDir, "..", "lib", "lib-dynamodb", "src", destinationFileName);
          copySync(docClientArtifactPath, docClientDestPath, { overwrite: true });
          removeSync(docClientArtifactPath);
        }
      }
    }

    const packageSubs = readdirSync(artifactPath);
    const overWritableSubs = getOverwritableDirectories(packageSubs, packageName);
    for (const packageSub of packageSubs) {
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
      } else if (packageSub === "typedoc.json") {
        const typedocJson = {
          extends: "../../typedoc.client.json",
        };
        writeFileSync(destSubPath, JSON.stringify(typedocJson, null, 2).concat(`\n`));
      } else if (overWritableSubs.includes(packageSub) || !existsSync(destSubPath)) {
        if (lstatSync(packageSubPath).isDirectory()) removeSync(destSubPath);
        copySync(packageSubPath, destSubPath, {
          overwrite: true,
        });
      }
    }
  }
};

const copyServerTests = async (sourceDir, destinationDir) => {
  for (const modelName of readdirSync(sourceDir)) {
    if (modelName === "source") continue;

    const artifactPath = join(sourceDir, modelName, "typescript-ssdk-codegen");
    const packageManifestPath = join(artifactPath, "package.json");
    if (!existsSync(packageManifestPath)) {
      console.error(`${modelName} generates empty server, skip.`);
      continue;
    }

    const packageManifest = JSON.parse(readFileSync(packageManifestPath).toString());
    const packageName = packageManifest.name;
    const testName = packageName.replace("@aws-sdk/", "");

    console.log(`copying ${packageName} from ${artifactPath} to ${destinationDir}`);
    const destPath = join(destinationDir, testName);

    const packageSubs = readdirSync(artifactPath);
    const overWritableSubs = getOverwritableDirectories(packageSubs, packageName);
    for (const packageSub of packageSubs) {
      const packageSubPath = join(artifactPath, packageSub);
      const destSubPath = join(destPath, packageSub);

      if (packageSub === "package.json") {
        //copy manifest file
        const destManifest = existsSync(destSubPath) ? JSON.parse(readFileSync(destSubPath).toString()) : {};
        const mergedManifest = {
          ...mergeManifest(packageManifest, destManifest),
          homepage: `https://github.com/aws/aws-sdk-js-v3/tree/main/private/${testName}`,
          repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: `private/${testName}`,
          },
        };
        writeFileSync(destSubPath, JSON.stringify(mergedManifest, null, 2).concat(`\n`));
      } else if (overWritableSubs.includes(packageSub) || !existsSync(destSubPath)) {
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
  copyServerTests,
};
