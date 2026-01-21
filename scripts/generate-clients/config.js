// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/a028fc557b1df0af2474e435d2fef64fd9244228...0e5e5a434b1389c60cb0c52cf7ab03108b598dc2
  SMITHY_TS_COMMIT: "0e5e5a434b1389c60cb0c52cf7ab03108b598dc2",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
