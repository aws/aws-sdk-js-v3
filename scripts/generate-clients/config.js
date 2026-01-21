// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/a028fc557b1df0af2474e435d2fef64fd9244228...20de509e2d4d8427791b2c7adf10f318034e2cc0
  SMITHY_TS_COMMIT: "20de509e2d4d8427791b2c7adf10f318034e2cc0",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
