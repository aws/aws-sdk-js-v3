const yargs = require("yargs");
const { normalize, join } = require("path");
const { generateClient } = require("./code-gen");
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

    if (solo === "workspaces-thin-client") {
      require("./customizations/workspaces-thin-client")();
    }

    if (solo === "sts" || solo === "sso-oidc" || solo === "signin") {
      const generateNestedClients = require("./nested-clients/generate-nested-clients");
      await generateNestedClients();
    }

    const compress = require("../endpoints-ruleset/compress");
    compress(solo);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
