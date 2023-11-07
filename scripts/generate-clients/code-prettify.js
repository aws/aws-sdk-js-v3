// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const formatCode = async (dir) => {
  await spawnProcess("yarn", ["dprint", `fmt`], {
    cwd: path.join(__dirname, "..", ".."),
  });
};

module.exports = {
  formatCode,
};
