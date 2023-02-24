// @ts-check
const { basename, join, relative } = require("path");
const { copySync, emptyDirSync, rmSync, copyFileSync } = require("fs-extra");
const { spawnProcess } = require("../utils/spawn-process");
const {
  CODE_GEN_ROOT,
  CODE_GEN_SDK_ROOT,
  CODE_GEN_SDK_OUTPUT_DIR,
  DEFAULT_CODE_GEN_INPUT_DIR,
  TEMP_CODE_GEN_INPUT_DIR,
  TEMP_CODE_GEN_SDK_OUTPUT_DIR,
} = require("./code-gen-dir");
const { getModelFilepaths } = require("./get-model-filepaths");

const generateClient = async (clientName) => {
  const retryable = async () => {
    const TEMP_CODE_GEN_INPUT_DIR_SERVICE = join(TEMP_CODE_GEN_INPUT_DIR, clientName);

    const options = [
      ":sdk-codegen:build",
      "--stacktrace",
      "--no-rebuild", // prevent dependency smithy-aws-typescript-codegen files from being rebuilt and possibly missing during multi-process
      `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR_SERVICE)}`,
      `-PclientNameProp=${clientName}`,
    ];

    emptyDirSync(TEMP_CODE_GEN_INPUT_DIR_SERVICE);

    const filename = `${clientName}.json`;
    copyFileSync(join(DEFAULT_CODE_GEN_INPUT_DIR, filename), join(TEMP_CODE_GEN_INPUT_DIR_SERVICE, filename));

    await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
  };
  let attemptsRemaining = 3;

  /**
   * Retries are used here because multi-process codegen can be flaky.
   */
  while (attemptsRemaining-- > 0) {
    try {
      await retryable();
      attemptsRemaining = 0;
    } catch (e) {
      if (attemptsRemaining <= 0) {
        throw new Error(`Unable to complete codegen for ${clientName}: ` + e);
      }
      console.warn(`Retrying codegen for ${clientName} with ${attemptsRemaining} attempts remaining.`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  rmSync(join(__dirname, "..", "..", "codegen", "sdk-codegen", `smithy-build-${clientName}.json`));
};

const generateClients = async (models, batchSize) => {
  const filepaths = getModelFilepaths(models);
  const options = [
    ":sdk-codegen:clean",
    ":sdk-codegen:build",
    "--stacktrace",
    `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR)}`,
  ];

  while (filepaths.length > 0) {
    emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
    const filepathsToCopy = filepaths.splice(0, batchSize);
    for (const filepath of filepathsToCopy) {
      const filename = basename(filepath);
      copyFileSync(filepath, join(TEMP_CODE_GEN_INPUT_DIR, filename));
    }
    await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
    // We're copying generated code to temporary directory as it's cleans
    // codegen directory in every run.
    // Refs: https://github.com/aws/aws-sdk-js-v3/issues/3321
    copySync(CODE_GEN_SDK_OUTPUT_DIR, TEMP_CODE_GEN_SDK_OUTPUT_DIR);
  }
  copySync(TEMP_CODE_GEN_SDK_OUTPUT_DIR, CODE_GEN_SDK_OUTPUT_DIR);
  emptyDirSync(TEMP_CODE_GEN_SDK_OUTPUT_DIR);
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
  generateClient,
  generateClients,
  generateGenericClient,
  generateProtocolTests,
};
