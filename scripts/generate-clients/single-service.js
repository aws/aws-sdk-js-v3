const yargs = require("yargs");
const path = require("path");
const { generateClient } = require("./code-gen");
const { codeOrdering } = require("./code-ordering");
const { copyToClients } = require("./copy-to-clients");
const { CODE_GEN_SDK_OUTPUT_DIR } = require("./code-gen-dir");
const { spawnProcess } = require("../utils/spawn-process");

const SDK_CLIENTS_DIR = path.normalize(path.join(__dirname, "..", "..", "clients"));

const { solo } = yargs(process.argv.slice(2))
  .string("solo")
  .describe("solo", "The service name of the service to codegen")
  .help().argv;

(async () => {
  try {
    // generation and copy
    await generateClient(solo);
    await copyToClients(CODE_GEN_SDK_OUTPUT_DIR, SDK_CLIENTS_DIR);

    // post-generation transforms
    const clientFolder = path.join(SDK_CLIENTS_DIR, `client-${solo}`);
    await codeOrdering(clientFolder);

    console.log("================ starting eslint ================", "\n", new Date().toString(), solo);
    try {
      await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "eslint"), [
        "--fix",
        "--quiet",
        `${clientFolder}/src/**/*.{ts,js,json}`,
      ]);
    } catch (ignored) {}

    console.log("================ starting prettier ================", "\n", new Date().toString(), solo);
    await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "prettier"), [
      "--write",
      `${clientFolder}/src/**/*.{ts,js,md,json}`,
    ]);
    await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "prettier"), [
      "--write",
      `${clientFolder}/README.md`,
    ]);

    const compress = require("../endpoints-ruleset/compress");
    compress(solo);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
