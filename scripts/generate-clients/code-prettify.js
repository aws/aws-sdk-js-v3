const path = require("path");
const { readdirSync } = require("fs");
const { spawnProcess } = require("./spawn-process");
const { CODE_GEN_OUTPUT_DIR } = require("./code-gen-dir");

const prettifyCode = async () => {
  const spawnPromiseArray = [];
  for (const modelName of readdirSync(CODE_GEN_OUTPUT_DIR)) {
    if (modelName === "source") continue;
    const artifactPath = path.join(
      CODE_GEN_OUTPUT_DIR,
      modelName,
      "typescript-codegen"
    );
    spawnPromiseArray.push(
      spawnProcess("./node_modules/.bin/prettier", [
        "--write",
        `${artifactPath}/**/*.{ts,md,json}`
      ])
    );
  }
  await Promise.all(spawnPromiseArray);
};

module.exports = {
  prettifyCode
};
