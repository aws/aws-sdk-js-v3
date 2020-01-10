const { join, normalize } = require("path");

const CODE_GEN_ROOT = normalize(
  join(__dirname, "..", "..", "codegen")
);

const CODE_GEN_INPUT_DIR = normalize(
  join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models")
);

const CODE_GEN_OUTPUT_DIR = normalize(
  join(
    __dirname,
    "..",
    "..",
    "codegen",
    "sdk-codegen",
    "build",
    "smithyprojections",
    "sdk-codegen"
  )
);

module.exports = {
  CODE_GEN_ROOT,
  CODE_GEN_INPUT_DIR,
  CODE_GEN_OUTPUT_DIR
};