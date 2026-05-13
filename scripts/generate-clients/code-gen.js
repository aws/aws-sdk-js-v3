// @ts-check
const { basename, join, relative, normalize } = require("node:path");
const { copySync, emptyDirSync, rmSync, copyFileSync, existsSync } = require("fs-extra");
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

/**
 * Remove only the smithyprojections output dir for sdk-codegen.
 * This avoids a full `:sdk-codegen:clean` which would also force
 * a rebuild of the smithy-aws-typescript-codegen dependency.
 */
const cleanSdkCodegenOutput = () => {
  const outputDir = join(CODE_GEN_ROOT, "sdk-codegen", "build", "smithyprojections");
  if (existsSync(outputDir)) {
    emptyDirSync(outputDir);
  }
};

const generateClient = async (clientName) => {
  const TEMP_CODE_GEN_INPUT_DIR_SERVICE = join(TEMP_CODE_GEN_INPUT_DIR, clientName);

  emptyDirSync(normalize(join(__dirname, "..", "..", "codegen", "sdk-codegen", "build-single", clientName)));

  cleanSdkCodegenOutput();

  // Ensure the dependency is built before using --no-rebuild.
  const depJar = join(CODE_GEN_ROOT, "smithy-aws-typescript-codegen", "build", "libs");
  if (!existsSync(depJar)) {
    await spawnProcess("./gradlew", [":smithy-aws-typescript-codegen:build"], { cwd: CODE_GEN_ROOT });
  }

  const options = [
    ":sdk-codegen:build",
    "--no-rebuild",
    "--stacktrace",
    `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR_SERVICE)}`,
    `-PclientNameProp=${clientName}`,
  ];

  emptyDirSync(TEMP_CODE_GEN_INPUT_DIR_SERVICE);

  const filename = `${clientName}.json`;
  copyFileSync(join(DEFAULT_CODE_GEN_INPUT_DIR, filename), join(TEMP_CODE_GEN_INPUT_DIR_SERVICE, filename));

  await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
  rmSync(join(__dirname, "..", "..", "codegen", "sdk-codegen", `smithy-build-${clientName}.json`));
};

const generateClients = async (models, batchSize) => {
  const filepaths = getModelFilepaths(models);

  // Build the smithy-aws-typescript-codegen dependency once upfront.
  // Subsequent batches use --no-rebuild to skip recompiling it.
  await spawnProcess("./gradlew", [":smithy-aws-typescript-codegen:build"], { cwd: CODE_GEN_ROOT });

  while (filepaths.length > 0) {
    emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
    const filepathsToCopy = filepaths.splice(0, batchSize);
    for (const filepath of filepathsToCopy) {
      const filename = basename(filepath);
      copyFileSync(filepath, join(TEMP_CODE_GEN_INPUT_DIR, filename));
    }

    // Remove only the smithyprojections output (not the full clean which
    // would force smithy-aws-typescript-codegen to recompile).
    cleanSdkCodegenOutput();

    const options = [
      ":sdk-codegen:build",
      "--no-rebuild",
      "--stacktrace",
      `-PmodelsDirProp=${relative(CODE_GEN_SDK_ROOT, TEMP_CODE_GEN_INPUT_DIR)}`,
    ];

    await spawnProcess("./gradlew", options, { cwd: CODE_GEN_ROOT });
    // Copy generated code to temporary directory since the output dir
    // is overwritten on each batch run.
    // Refs: https://github.com/aws/aws-sdk-js-v3/issues/3321
    copySync(CODE_GEN_SDK_OUTPUT_DIR, TEMP_CODE_GEN_SDK_OUTPUT_DIR);
  }
  copySync(TEMP_CODE_GEN_SDK_OUTPUT_DIR, CODE_GEN_SDK_OUTPUT_DIR);
  emptyDirSync(TEMP_CODE_GEN_SDK_OUTPUT_DIR);
};

const generateProtocolTests = async () => {
  await spawnProcess("./gradlew", [":protocol-test-codegen:clean", ":protocol-test-codegen:build", "--no-rebuild"], {
    cwd: CODE_GEN_ROOT,
  });
};

const generateGenericClient = async () => {
  await spawnProcess(
    "./gradlew",
    [":generic-client-test-codegen:clean", ":generic-client-test-codegen:build", "--no-rebuild"],
    {
      cwd: CODE_GEN_ROOT,
    }
  );
};

module.exports = {
  generateClient,
  generateClients,
  generateGenericClient,
  generateProtocolTests,
};
