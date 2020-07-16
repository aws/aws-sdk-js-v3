// @ts-check
const { spawnProcess } = require("./spawn-process");

const prettifyCode = async (dir) => {
  await spawnProcess("./node_modules/.bin/prettier", ["--write", `${dir}/**/*.{ts,js,md,json}`]);
};

module.exports = {
  prettifyCode,
};
