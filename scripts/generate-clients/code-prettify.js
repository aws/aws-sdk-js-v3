// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const prettifyCode = async (dir) => {
  await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "prettier"), [
    "--write",
    `${dir}/**/*.{ts,js,md,json}`,
  ]);
};

module.exports = {
  prettifyCode,
};
