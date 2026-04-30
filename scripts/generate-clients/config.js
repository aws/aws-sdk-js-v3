// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/31358fa7bc02721b54a02fb0ece52064abe29143...ffa66773c40741dfe9aef8dd43dbe683e9253f55
  SMITHY_TS_COMMIT: "ffa66773c40741dfe9aef8dd43dbe683e9253f55",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
