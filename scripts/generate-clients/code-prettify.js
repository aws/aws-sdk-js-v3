const { spawnProcess } = require("./spawn-process");
const {
  CODE_GEN_SDK_OUTPUT_DIR,
  CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR
} = require("./code-gen-dir");

const prettifyCode = async () => {
  // Prettify SDK clients
  await spawnProcess("./node_modules/.bin/prettier", [
    "--write",
    `${CODE_GEN_SDK_OUTPUT_DIR}/**/*.{ts,js,md,json}`
  ]);
  // Prettify protocol tests clients
  await spawnProcess("./node_modules/.bin/prettier", [
    "--write",
    `${CODE_GEN_PROTOCOL_TESTS_OUTPUT_DIR}/**/*.{ts,js,md,json}`
  ]);
};

module.exports = {
  prettifyCode
};
