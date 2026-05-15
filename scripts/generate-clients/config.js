// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/15506ee5b2adffb423789063363476ade1d5bda6...396de9c6de6020bdc353e338d60afdbe196e6bc1
  SMITHY_TS_COMMIT: "396de9c6de6020bdc353e338d60afdbe196e6bc1",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
