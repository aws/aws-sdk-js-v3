// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/c077b47b045f90382003cab83b3bec14cbc1ec29...4c4d986d91629c8a9184b2b6c8655180a836db67
  SMITHY_TS_COMMIT: "4c4d986d91629c8a9184b2b6c8655180a836db67",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
