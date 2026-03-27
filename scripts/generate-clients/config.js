// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/9328be266ad3326901032b94df2eab0482be2769...e4f9b83a545b23ca0135012990331efd551c76e7
  SMITHY_TS_COMMIT: "e4f9b83a545b23ca0135012990331efd551c76e7",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
