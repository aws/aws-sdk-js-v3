// @ts-check
const { spawnProcess } = require("../utils/spawn-process");

const prettifyCode = async (dir) => {
  await spawnProcess("yarn", ["exec", "prettier", "--write", `${dir}/*/typescript-codegen/**/*.{ts,js,md,json}`]);
  await spawnProcess("yarn", ["exec", "prettier", "--write", `${dir}/*/typescript-ssdk-codegen/**/*.{ts,js,md,json}`]);
};

module.exports = {
  prettifyCode,
};
