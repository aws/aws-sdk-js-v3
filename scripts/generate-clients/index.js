// @ts-check
const yargs = require("yargs");
const path = require("path");
const { emptyDirSync, rmdirSync } = require("fs-extra");
const { generateClients, generateGenericClient, generateProtocolTests } = require("./code-gen");
const { codeOrdering } = require("./code-ordering");
const { copyToClients, copyServerTests } = require("./copy-to-clients");
const {
  CODE_GEN_SDK_OUTPUT_DIR,
  CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR,
  CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR,
  DEFAULT_CODE_GEN_INPUT_DIR,
  TEMP_CODE_GEN_INPUT_DIR,
} = require("./code-gen-dir");
const { prettifyCode } = require("./code-prettify");
const { eslintFixCode } = require("./code-eslint-fix");
const { buildSmithyTypeScript } = require("./build-smithy-typescript");
const { SMITHY_TS_COMMIT } = require("./config");

const SMITHY_TS_DIR = path.normalize(path.join(__dirname, "..", "..", "..", "smithy-typescript"));
const SDK_CLIENTS_DIR = path.normalize(path.join(__dirname, "..", "..", "clients"));
const PRIVATE_CLIENTS_DIR = path.normalize(path.join(__dirname, "..", "..", "private"));

const {
  models,
  globs,
  output: clientsDir,
  noPrivateClients,
  s: serverOnly,
  batchSize,
  keepFiles,
  repo,
  commit,
} = yargs(process.argv.slice(2))
  .alias("m", "models")
  .string("m")
  .describe("m", "The path to directory with models.")
  .alias("g", "globs")
  .array("g")
  .describe("g", "A list of smithy model globs")
  .conflicts("models", "globs") //either models(path) or globs is accepted
  .alias("o", "output")
  .string("o")
  .describe("o", "The output directory for built clients")
  .default("o", SDK_CLIENTS_DIR)
  .alias("n", "noPrivateClients")
  .boolean("n")
  .describe("n", "Disable generating private clients")
  .alias("s", "server-artifacts")
  .boolean("s")
  .describe("s", "Generate server artifacts instead of client ones")
  .boolean("keepFiles")
  .describe("keepFiles", "Don't clean up temp files")
  .conflicts("s", ["m", "g", "n"])
  .describe("b", "Batchsize for generating clients")
  .number("b")
  .alias("b", "batch-size")
  .default("b", 50)
  .describe("r", "The location where smithy-typescript is cloned.")
  .string("r")
  .alias("r", "repo")
  .default("r", SMITHY_TS_DIR)
  .describe("c", "The smithy-typescript commit to be used for codegen.")
  .string("c")
  .alias("c", "commit")
  .default("c", SMITHY_TS_COMMIT)
  .help().argv;

(async () => {
  try {
    require("../runtime-dependency-version-check/runtime-dep-version-check");
    await buildSmithyTypeScript(repo, commit);

    if (serverOnly === true) {
      await generateProtocolTests();
      await eslintFixCode();
      await prettifyCode(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR);
      await copyServerTests(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR, PRIVATE_CLIENTS_DIR);

      if (!keepFiles) {
        emptyDirSync(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR);
        emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
        rmdirSync(TEMP_CODE_GEN_INPUT_DIR);
      }
      return;
    }

    await generateClients(models || globs || DEFAULT_CODE_GEN_INPUT_DIR, batchSize);

    if (!noPrivateClients) {
      await generateGenericClient();
      await generateProtocolTests();
    }

    await codeOrdering(CODE_GEN_SDK_OUTPUT_DIR);
    await eslintFixCode();
    await prettifyCode(CODE_GEN_SDK_OUTPUT_DIR);

    if (!noPrivateClients) {
      await codeOrdering(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR);
      await prettifyCode(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR);
      await prettifyCode(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR);
    }

    await copyToClients(CODE_GEN_SDK_OUTPUT_DIR, clientsDir);
    if (!noPrivateClients) {
      await copyToClients(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR, PRIVATE_CLIENTS_DIR);
      await copyToClients(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR, PRIVATE_CLIENTS_DIR);
      await copyServerTests(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR, PRIVATE_CLIENTS_DIR);
    }

    require("../api-examples/get-examples");
    await require("../api-examples/merge-examples").merge();
    const compress = require("../endpoints-ruleset/compress");
    compress();

    if (!keepFiles) {
      emptyDirSync(CODE_GEN_SDK_OUTPUT_DIR);
      if (!noPrivateClients) {
        emptyDirSync(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR);
        emptyDirSync(CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR);
      }
      emptyDirSync(TEMP_CODE_GEN_INPUT_DIR);
      rmdirSync(TEMP_CODE_GEN_INPUT_DIR);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
