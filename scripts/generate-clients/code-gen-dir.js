const { join, normalize } = require("path");

const CODE_GEN_ROOT = normalize(join(__dirname, "..", "..", "codegen"));

const CODE_GEN_TASK_ROOT = join(CODE_GEN_ROOT, "sdk-codegen");

const TEMP_CODE_GEN_INPUT_DIR = normalize(join(__dirname, ".aws-models"));

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
  CODE_GEN_TASK_ROOT,
  CODE_GEN_OUTPUT_DIR,
  TEMP_CODE_GEN_INPUT_DIR
};
