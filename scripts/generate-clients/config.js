// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/74516bb871b0f65b4eca3af8b280ed217e4f217f...31358fa7bc02721b54a02fb0ece52064abe29143
  SMITHY_TS_COMMIT: "31358fa7bc02721b54a02fb0ece52064abe29143",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
