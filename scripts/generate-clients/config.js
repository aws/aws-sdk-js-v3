// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/6becc8717266e52c5c5a044894db36645553c0a9...2e3e68027f01062149daf520997e99effcd56699
  SMITHY_TS_COMMIT: "2e3e68027f01062149daf520997e99effcd56699",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
