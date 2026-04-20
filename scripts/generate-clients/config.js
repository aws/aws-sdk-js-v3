// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/af3363fd5e03e63e6b737ff9a361454de79d2e3c...c077b47b045f90382003cab83b3bec14cbc1ec29
  SMITHY_TS_COMMIT: "c077b47b045f90382003cab83b3bec14cbc1ec29",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
