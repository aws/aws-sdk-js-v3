const path = require("path");
const { copyFileSync, emptyDirSync } = require("fs-extra");
const { readdirSync, lstatSync } = require("fs");
const { spawn } = require("child_process");

const CODE_GEN_INPUT_DIR = path.normalize(
  path.join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models")
);
const CODE_GEN_ROOT = path.normalize(
  path.join(__dirname, "..", "..", "codegen")
);

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

const spawnProcess = (command, args = [], options = {}) =>
  new Promise((resolve, reject) => {
    try {
      const ls = spawn(command, args, options);
      ls.stdout.on("data", data => {
        console.log(data.toString());
      });
      ls.stderr.on("data", data => {
        console.error(`stderr: ${data.toString()}`);
      });

      ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });

module.exports = { generateClients, spawnProcess, CODE_GEN_INPUT_DIR };
