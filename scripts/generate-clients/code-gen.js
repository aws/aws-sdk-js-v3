const path = require("path");
const { copyFileSync, emptyDirSync } = require("fs-extra");
const { readdirSync, lstatSync } = require("fs");
const { spawnProcess } = require("./spawn-process");
const {
  CODE_GEN_ROOT,
  CODE_GEN_TASK_ROOT,
  TEMP_CODE_GEN_INPUT_DIR
} = require("./code-gen-dir");
const Glob = require("glob");

async function generateClients(models) {
  let designatedModels = false;
  if (typeof models === "string") {
    //`models` is a folder path
    designatedModels = true;
    emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
    console.log(`preparing models from ${models}...`);
    for (const modelFileName of readdirSync(models)) {
      const modelPath = path.join(models, modelFileName);
      if (!lstatSync(modelPath).isFile()) continue;
      console.log(`copying model ${modelFileName}...`);
      copyFileSync(
        modelPath,
        path.join(TEMP_CODE_GEN_INPUT_DIR, modelFileName),
        {
          overwrite: true
        }
      );
    }
  } else if (Array.isArray(models)) {
    //`models` is a list of globs
    designatedModels = true;
    emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
    models.forEach(pattern => {
      const files = Glob.sync(pattern, {
        realpath: true,
        absolute: true
      });
      files.forEach(file => {
        if (!lstatSync(file).isFile()) return;
        const name = path.basename(file);
        console.log(`copying model ${name}...`);
        copyFileSync(file, path.join(TEMP_CODE_GEN_INPUT_DIR, name), {
          overwrite: true
        });
      });
    });
  } else {
    console.log("no model supplied, generating all AWS clients");
  }
  const options = [":sdk-codegen:clean", ":sdk-codegen:build"];
  if (designatedModels) {
    options.push(
      `-PmodelsDirProp=${path.relative(
        CODE_GEN_TASK_ROOT,
        TEMP_CODE_GEN_INPUT_DIR
      )}`
    );
  }
  await spawnProcess("./gradlew", options, {
    cwd: CODE_GEN_ROOT
  });
}

module.exports = {
  generateClients
};
