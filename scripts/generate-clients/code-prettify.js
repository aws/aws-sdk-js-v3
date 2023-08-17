// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const prettifyCode = async (dir) => {
  await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "pprettier"), [
    "--write",
    `${dir}/*/typescript-codegen/**/*.{ts,js,md,json}`,
  ]);
  await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "pprettier"), [
    "--write",
    `${dir}/*/typescript-ssdk-codegen/**/*.{ts,js,md,json}`,
  ]);
};

module.exports = {
  prettifyCode,
};
