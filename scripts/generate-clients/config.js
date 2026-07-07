// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/29ad40ae33b8e2e242b33fcd6e6dfeda7fcec2c6...3c14866b08c9527b6262000f4194b84ce35a3e80
  SMITHY_TS_COMMIT: "3c14866b08c9527b6262000f4194b84ce35a3e80",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
