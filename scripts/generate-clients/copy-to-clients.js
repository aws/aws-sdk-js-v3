// @ts-check
const { join } = require("path");
const { copySync, removeSync } = require("fs-extra");
const prettier = require("prettier");
const semver = require("semver");
const { readdirSync, lstatSync, readFileSync, existsSync, writeFileSync } = require("fs");

const getOverwritableDirectories = (subDirectories, packageName) => {
  const additionalOverwritablePaths = {
    "@aws-sdk/client-sts": ["defaultRoleAssumers.ts", "defaultStsRoleAssumers.ts", "defaultRoleAssumers.spec.ts"],
  };
  const unoverwritablePaths = {
    "@aws-sdk/client-transcribe-streaming": ["README.md"],
  };
  const overwritablePaths = [
    "src", // contains all source files
    "LICENCE",
    "README.md",
  ];
  return subDirectories.filter((path) => {
    const isUnoverwritablePaths = unoverwritablePaths[packageName]?.indexOf(path) >= 0;
    const isProtocolTestFolder = packageName.startsWith("@aws-sdk/aws-") && path === "test";
    const isOverwritableDirectory = overwritablePaths.indexOf(path) >= 0;
    const isAdditionalOverwritablePaths = additionalOverwritablePaths[packageName]?.indexOf(path) >= 0;
    return !isUnoverwritablePaths && (isOverwritableDirectory || isProtocolTestFolder || isAdditionalOverwritablePaths);
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
const mergeManifest = (fromContent = {}, toContent = {}, parentKey = "root") => {
  const merged = {};
  for (const name of Object.keys(fromContent)) {
    if (fromContent[name].constructor.name === "Object") {
      if (name === "devDependencies") {
        // Use same versions of devDependencies across all workspaces.
        // After moving to yarn modern, we'll use constraints feature to enforce
        // consistency in dependency versions https://yarnpkg.com/features/constraints
        const devDepToVersionHash = {
          "@tsconfig/node14": "1.0.3",
          concurrently: "7.0.0",
          "downlevel-dts": "0.10.1",
          rimraf: "3.0.2",
          typedoc: "0.23.23",
          typescript: "~4.9.5",
        };
        fromContent[name] = Object.keys(fromContent[name])
          .filter((dep) => Object.keys(devDepToVersionHash).includes(dep))
          .reduce((acc, dep) => ({ ...acc, [dep]: devDepToVersionHash[dep] }), fromContent[name]);
      }
      if (name === "scripts" && !fromContent[name]["build:include:deps"]) {
        fromContent[name]["build:include:deps"] = "lerna run --scope $npm_package_name --include-dependencies build";
      }

      merged[name] = mergeManifest(fromContent[name], toContent[name], name);

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
      merged[name] = toContent[name] || "*";
    } else {
      // If key (say dependency) is present in both codegen and
      // package.json, we prefer latter
      merged[name] = toContent[name] || fromContent[name];

      // use the higher version dependency.
      if (parentKey === "dependencies" || parentKey === "devDependencies") {
        const toSemver = semver.coerce(toContent[name]);
        const fromSemver = semver.coerce(fromContent[name]);
        if (semver.valid(toSemver) && semver.valid(fromSemver)) {
          const useToContentVersion = semver.gt(toSemver, fromSemver);
          if (useToContentVersion) {
            merged[name] = toContent[name];
          } else {
            merged[name] = fromContent[name];
          }
        } else {
          if (toContent[name] === "*" && fromContent[name] !== "*") {
            merged[name] = fromContent[name];
          }
        }
      }
    }
  }
  return merged;
};

const copyToClients = async (sourceDir, destinationDir, solo) => {
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

    if (solo && clientName !== `client-${solo}`) {
      continue;
    }

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
        // no need for the default prepack script
        delete mergedManifest.scripts.prepack;

        if (mergedManifest.private) {
          // don't generate documentation for private packages
          delete mergedManifest.scripts["build:docs"];
        } else {
          mergedManifest.scripts["extract:docs"] = "api-extractor run --local";
        }

        const serviceName = clientName.replace("client-", "");
        const modelFile = join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models", serviceName + ".json");

        if (existsSync(modelFile)) {
          mergedManifest.scripts[
            "generate:client"
          ] = `node ../../scripts/generate-clients/single-service --solo ${serviceName}`;
        }

        writeFileSync(destSubPath, prettier.format(JSON.stringify(mergedManifest), { parser: "json-stringify" }));
      } else if (packageSub === "typedoc.json") {
        const typedocJson = {
          extends: ["../../typedoc.client.json"],
          entryPoints: ["src/index.ts"],
          out: "docs",
          readme: "README.md",
        };
        writeFileSync(destSubPath, prettier.format(JSON.stringify(typedocJson), { parser: "json" }));
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
        if (!mergedManifest.scripts.test) {
          mergedManifest.scripts.test = "jest --coverage --passWithNoTests";
        }
        if (mergedManifest.private) {
          // don't generate documentation for private packages
          delete mergedManifest.scripts["build:docs"];
        }
        writeFileSync(destSubPath, prettier.format(JSON.stringify(mergedManifest), { parser: "json-stringify" }));
      } else if (overWritableSubs.includes(packageSub) || !existsSync(destSubPath)) {
        if (lstatSync(packageSubPath).isDirectory()) removeSync(destSubPath);
        copySync(packageSubPath, destSubPath, {
          overwrite: true,
        });
      }
      const jestConfigPath = join(destPath, "jest.config.js");
      writeFileSync(
        jestConfigPath,
        'const base = require("../../jest.config.base.js");\n' +
          "\n" +
          "module.exports = {\n" +
          "  ...base,\n" +
          "  globals: {\n" +
          '    "ts-jest": {\n' +
          "      isolatedModules: true,\n" +
          "    },\n" +
          "  },\n" +
          "};\n"
      );
    }
  }
};

module.exports = {
  copyToClients,
  copyServerTests,
};
