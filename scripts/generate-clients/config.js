// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/e65713cdcd25b620166e1acd403d0ba5e87cad3d...b6fd0d1be1f0cf1c42d0e860de04890d66c63281
  SMITHY_TS_COMMIT: "b6fd0d1be1f0cf1c42d0e860de04890d66c63281",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
