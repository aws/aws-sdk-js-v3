const yargs = require("yargs");
const { normalize, join } = require("path");
const { generateClient } = require("./code-gen");
const { codeOrdering } = require("./code-ordering");
const { copyToClients } = require("./copy-to-clients");

const SDK_CLIENTS_DIR = normalize(join(__dirname, "..", "..", "clients"));

const { solo } = yargs(process.argv.slice(2))
  .string("solo")
  .describe("solo", "The service name of the service to codegen")
  .help().argv;

(async () => {
  try {
    await generateClient(solo);
    await copyToClients(
      normalize(join(__dirname, "..", "..", "codegen", "sdk-codegen", "build-single", solo)),
      SDK_CLIENTS_DIR,
      solo
    );
    await codeOrdering(join(SDK_CLIENTS_DIR, `client-${solo}`));

    if (solo === "workspaces-thin-client") {
      require("./customizations/workspaces-thin-client")();
    }

    // post-generation transforms
    const clientFolder = join(SDK_CLIENTS_DIR, `client-${solo}`);
    const libFolder = join(SDK_CLIENTS_DIR, "..", "lib", `lib-${solo}`);

    console.log("================ starting biome ================", "\n", new Date().toString(), solo);
    const { checkDir } = await import("../biome/biome.mjs");

    await checkDir(clientFolder);
    if (solo === "dynamodb") {
      await checkDir(libFolder);
    }

    const compress = require("../endpoints-ruleset/compress");
    compress(solo);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
