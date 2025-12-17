// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/46c6eef6b80338f8acb560ba826519ade474ec5e...8d725cc6cb65c18918291f2fed5654e833903d7d
  SMITHY_TS_COMMIT: "8d725cc6cb65c18918291f2fed5654e833903d7d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
