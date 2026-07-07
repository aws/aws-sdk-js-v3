// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/3c14866b08c9527b6262000f4194b84ce35a3e80...12ba20a9a09d3b68ba222907d1e5a6807adc0c09
  SMITHY_TS_COMMIT: "12ba20a9a09d3b68ba222907d1e5a6807adc0c09",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
