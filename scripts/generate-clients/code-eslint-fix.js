// @ts-check
const { spawnProcess } = require("../utils/spawn-process");

const eslintFixCode = async () => {
  try {
    await spawnProcess("yarn", ["exec", "esprint", "check", "--fix", "--quiet"]);
  } catch (error) {
    // esprint throws error as the clients source code does not follow 'prefer-const' rule.
    // And esprint does not have a way to override rules written in .eslintrc
    // We will still get linted code though.
  }
};

module.exports = {
  eslintFixCode,
};
