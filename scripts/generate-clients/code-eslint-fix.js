// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const eslintFixCode = async (dir) => {
  await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "eslint"), [
    "--fix",
    "--quiet",
    "--rule",
    `{'prefer-const': 'off'}`,
    `${dir}/*/typescript-codegen/**/*.ts`,
  ]);
};

module.exports = {
  eslintFixCode,
};
