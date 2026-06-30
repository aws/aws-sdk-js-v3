// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/69deca1a5ef0c842bbbf482ec9afe0d7e70eaaf4...a6271ea1682fb1315dba6c4df952d9b1769cc6aa
  SMITHY_TS_COMMIT: "a6271ea1682fb1315dba6c4df952d9b1769cc6aa",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
