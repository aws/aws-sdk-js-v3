// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/76d7994ef3f8373bb866a60e7ef87adca147a2f0...0bfadd0475f6db25a9933b9e4f60de60f133f1a3
  SMITHY_TS_COMMIT: "0bfadd0475f6db25a9933b9e4f60de60f133f1a3",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
