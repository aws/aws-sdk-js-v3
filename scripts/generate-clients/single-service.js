const yargs = require("yargs");
const { normalize, join } = require("path");
const { generateClient } = require("./code-gen");
const { codeOrdering } = require("./code-ordering");
const { copyToClients } = require("./copy-to-clients");
const { spawnProcess } = require("../utils/spawn-process");

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

    // post-generation transforms
    const clientFolder = join(SDK_CLIENTS_DIR, `client-${solo}`);
    const libFolder = join(SDK_CLIENTS_DIR, "..", "lib", `lib-${solo}`);

    // examples merging
    require("../api-examples/get-examples");
    require("../api-examples/merge-examples").merge(void 0, solo);

    console.log("================ starting eslint ================", "\n", new Date().toString(), solo);
    try {
      await spawnProcess("npx", ["eslint", "--quiet", "--fix", `${clientFolder}/src/**/*`]);
    } catch (ignored) {}

    if (solo === "dynamodb") {
      try {
        await spawnProcess("npx", ["eslint", "--quiet", "--fix", `${libFolder}/src/**/*`]);
      } catch (ignored) {}
    }

    console.log("================ starting prettier ================", "\n", new Date().toString(), solo);
    await spawnProcess("npx", [
      "prettier",
      "--write",
      "--loglevel",
      "warn",
      `${clientFolder}/src/**/*.{md,js,ts,json}`,
    ]);
    await spawnProcess("npx", ["prettier", "--write", "--loglevel", "warn", `${clientFolder}/README.md`]);
    if (solo === "dynamodb") {
      await spawnProcess("npx", ["prettier", "--write", "--loglevel", "warn", `${libFolder}/src/**/*.{md,js,ts,json}`]);
    }

    const compress = require("../endpoints-ruleset/compress");
    compress(solo);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
