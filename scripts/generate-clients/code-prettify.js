// @ts-check
const { spawnProcess } = require("../utils/spawn-process");
const { readdirSync } = require("fs");
const path = require("path");

const prettifyCode = async (dir) => {
  const spawnedProcessArr = [];
  for (const modelName of readdirSync(dir)) {
    if (modelName === "source") continue;
    const artifactPath = path.join(dir, modelName, "typescript-codegen");
    spawnedProcessArr.push(
      spawnProcess("./node_modules/.bin/prettier", ["--write", `${artifactPath}/**/*.{ts,md,json}`])
    );
  }
  await Promise.all(spawnedProcessArr);
};

module.exports = {
  prettifyCode,
};
