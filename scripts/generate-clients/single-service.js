const yargs = require("yargs");
const { normalize, join } = require("path");
const { generateClient } = require("./code-gen");
const { codeOrdering } = require("./code-ordering");
const { copyToClients } = require("./copy-to-clients");
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");
const fs = require("fs");

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

    // examples merging
    require("../api-examples/get-examples");
    require("../api-examples/merge-examples").merge(void 0, solo);

    console.log("================ starting dprint ================", "\n", new Date().toString(), solo);
    const dprintConfig = path.join(__dirname, "..", "..", "dprint.json");
    const dprintJson = require(dprintConfig);
    fs.writeFileSync(
      dprintConfig,
      JSON.stringify(
        {
          ...dprintJson,
          includes: [`{lib,packages,clients,private}/{client-${solo},lib-${solo}}/**/*.{ts,tsx,js,jsx,json}`],
        },
        null,
        2
      )
    );
    await spawnProcess("npx", ["dprint", "fmt"]);
    fs.writeFileSync(dprintConfig, JSON.stringify(dprintJson, null, 2));

    const compress = require("../endpoints-ruleset/compress");
    compress(solo);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
