const path = require("path");
const { copyFileSync, emptyDirSync } = require("fs-extra");
const { readdirSync, lstatSync } = require("fs");
const { spawnProcess } = require("./spawn-process");
const { CODE_GEN_ROOT, CODE_GEN_INPUT_DIR } = require("./code-gen-dir");

async function generateClients(models) {
  console.info("models directory: ", models);
  if (models === CODE_GEN_INPUT_DIR) {
    // This script will clean the CODE_GEN_INPUT_DIR in execution.
    // throw to avoid input model being removed
    throw new Error(
      `models directory cannot be the same as ${CODE_GEN_INPUT_DIR}`
    );
  } else {
    console.log(`clearing code gen input folder...`);
    emptyDirSync(CODE_GEN_INPUT_DIR);
    console.log(`copying models from ${models} to ${CODE_GEN_INPUT_DIR}...`);
    for (const modelFileName of readdirSync(models)) {
      const modelPath = path.join(models, modelFileName);
      if (!lstatSync(modelPath).isFile()) continue;
      console.log(`copying model ${modelFileName}...`);
      copyFileSync(modelPath, path.join(CODE_GEN_INPUT_DIR, modelFileName), {
        overwrite: true
      });
    }
  }
  await spawnProcess(
    "./gradlew",
    [":sdk-codegen:clean", ":sdk-codegen:build"],
    {
      cwd: CODE_GEN_ROOT
    }
  );
}

module.exports = {
  generateClients
};
