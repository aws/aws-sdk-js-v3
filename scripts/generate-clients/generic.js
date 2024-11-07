// @ts-check
const path = require("path");
const { emptyDirSync } = require("fs-extra");
const { generateGenericClient } = require("./code-gen");
const { copyToClients } = require("./copy-to-clients");
const { CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR } = require("./code-gen-dir");
const { eslintFixCode } = require("./code-eslint-fix");

const PRIVATE_CLIENTS_DIR = path.normalize(path.join(__dirname, "..", "..", "private"));

// TODO: remove this script when generate-clients code is refactored.
(async () => {
  const { prettifyCode } = await import("./code-prettify.mjs");
  try {
    await generateGenericClient();

    await eslintFixCode();
    await prettifyCode(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR);
    await copyToClients(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR, PRIVATE_CLIENTS_DIR);
    emptyDirSync(CODE_GEN_GENERIC_CLIENT_OUTPUT_DIR);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
