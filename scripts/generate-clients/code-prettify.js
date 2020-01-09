const path = require("path");
const { readdirSync } = require("fs");
const { spawnProcess } = require("./code-gen");
const { CODE_GEN_OUTPUT_DIR } = require("./code-gen-dir");

const prettifyCode = async () => {
  for (const modelName of readdirSync(CODE_GEN_OUTPUT_DIR)) {
    if (modelName === "source") continue;
    const artifactPath = path.join(
      CODE_GEN_OUTPUT_DIR,
      modelName,
      "typescript-codegen"
    );
    await spawnProcess(
      "./node_modules/.bin/prettier",
      ["--write", `${artifactPath}/**/*.{ts,md,json}`]
    );
  }
};

module.exports = { prettifyCode };