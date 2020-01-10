const { spawnProcess } = require("./spawn-process");
const { CODE_GEN_OUTPUT_DIR } = require("./code-gen-dir");

const prettifyCode = async () => {
  await spawnProcess("./node_modules/.bin/prettier", [
    "--write",
    `${CODE_GEN_OUTPUT_DIR}/**/*.{ts,js,md,json}`
  ]);
};

module.exports = {
  prettifyCode
};
