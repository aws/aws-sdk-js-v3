// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/a6271ea1682fb1315dba6c4df952d9b1769cc6aa...9e76e52a04da3929c18e5930a2246a8de2099a62
  SMITHY_TS_COMMIT: "9e76e52a04da3929c18e5930a2246a8de2099a62",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
