// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const prettifyCode = async (dir) =>
  spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "pprettier"), [
    "--write",
    `${dir}/*/typescript-codegen/**/*.{ts,js,md,json}`,
  ]);

module.exports = {
  prettifyCode,
};
