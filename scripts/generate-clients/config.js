// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/8b90f360df2a5c80c105db732b3c2f6972994854...76d7994ef3f8373bb866a60e7ef87adca147a2f0
  SMITHY_TS_COMMIT: "76d7994ef3f8373bb866a60e7ef87adca147a2f0",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
