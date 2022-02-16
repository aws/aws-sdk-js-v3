// @ts-check
const { basename, join, relative } = require("path");
const { emptyDirSync } = require("fs-extra");
const { copyFileSync } = require("fs");
const { spawnProcess } = require("../utils/spawn-process");
const {
  CODE_GEN_ROOT,
  CODE_GEN_SDK_ROOT,
  DEFAULT_CODE_GEN_INPUT_DIR,
  TEMP_CODE_GEN_INPUT_DIR,
} = require("./code-gen-dir");
const { getModelFilepaths } = require("./get-model-filepaths");

const generateClients = async (models) => {
  if (!models) {
    // Models not defined. Choose default input directory
    models = DEFAULT_CODE_GEN_INPUT_DIR;
  }

  const filepaths = getModelFilepaths(models);

  const options = [
    ":sdk-codegen:clean",
    ":sdk-codegen:build",
    `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR)}`,
  ];

  const batchSize = 50;
  while (filepaths.length > 0) {
    emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
    const filepathsToCopy = filepaths.splice(0, batchSize);
    for (const filepath of filepathsToCopy) {
      const filename = basename(filepath);
      copyFileSync(filepath, join(TEMP_CODE_GEN_INPUT_DIR, filename));
    }
    await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
  }
};

const generateProtocolTests = async () => {
  await spawnProcess("./gradlew", [":protocol-test-codegen:clean", ":protocol-test-codegen:build"], {
    cwd: CODE_GEN_ROOT,
  });
};

const generateGenericClient = async () => {
  await spawnProcess("./gradlew", [":smithy-aws-typescript-codegen:clean", ":generic-client-test-codegen:build"], {
    cwd: CODE_GEN_ROOT,
  });
};

module.exports = {
  generateClients,
  generateGenericClient,
  generateProtocolTests,
};
