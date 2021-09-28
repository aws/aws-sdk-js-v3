// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const eslintFixCode = async () => {
  try {
    await spawnProcess(path.join(__dirname, "..", "..", "node_modules", ".bin", "esprint"), [
      "check",
      "--fix",
      "--quiet",
    ]);
  } catch (error) {
    // esprint throws error as there's no way to disable 'prefer-const'
    // which fails in clients. We'll still get fixed code though.
  }
};

module.exports = {
  eslintFixCode,
};
