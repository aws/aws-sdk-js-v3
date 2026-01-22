// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/0e5e5a434b1389c60cb0c52cf7ab03108b598dc2...4ad44b223bb9353cb668ab6b339f781bd817421f
  SMITHY_TS_COMMIT: "4ad44b223bb9353cb668ab6b339f781bd817421f",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
