const yargs = require("yargs");
const { normalize, join, basename } = require("node:path");
const { generateClient } = require("./code-gen");
const { copyToClients } = require("./copy-to-clients");

const SDK_CLIENTS_DIR = normalize(join(__dirname, "..", "..", "clients"));

const { solo: soloArg } = yargs(process.argv.slice(2))
  .string("solo")
  .describe("solo", "The service name of the service to codegen (defaults to caller directory name)")
  .help().argv;

const solo = soloArg || basename(process.cwd()).replace(/^client-/, "");

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
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
