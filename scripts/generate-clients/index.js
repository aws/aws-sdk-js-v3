const yargs = require("yargs");
const path = require("path");
const { emptyDirSync } = require("fs-extra");
const { generateClients, CODE_GEN_INPUT_DIR } = require("./code-gen");
const { copyToClients, CODE_GEN_OUTPUT_DIR } = require("./copy-to-clients");

const CLIENTS_DIR = path.normalize(path.join(__dirname, "..", "..", "clients"));

const { models, output: clientsDir } = yargs
  .alias("m", "models")
  .string("m")
  .describe("m", "the directory of models")
  .required("m")
  .alias("o", "output")
  .string("o")
  .describe("o", "the output directory for built clients")
  .default("o", CLIENTS_DIR)
  .help().argv;

(async () => {
  try {
    await generateClients(models);
    await copyToClients(clientsDir);
    emptyDirSync(CODE_GEN_INPUT_DIR);
    emptyDirSync(CODE_GEN_OUTPUT_DIR);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
