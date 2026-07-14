// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/c32e88905ba982a9af352ca4b793cee3afc81c90...5fca3a0d37d882fb1836e47f5e75fc53c53b4417
  SMITHY_TS_COMMIT: "5fca3a0d37d882fb1836e47f5e75fc53c53b4417",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
