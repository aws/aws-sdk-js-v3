// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/945c847626de89e76aef0bf0b65b348aeb35dbfa...df311cf003a5e24c749eaac7f969c22a672e7db4
  SMITHY_TS_COMMIT: "df311cf003a5e24c749eaac7f969c22a672e7db4",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
