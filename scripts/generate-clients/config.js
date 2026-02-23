// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7a2af4d57b06e46a886b71a0c039ecc21774495c...385149a4d9703ea38e2a23d5cbe78018905e3d4b
  SMITHY_TS_COMMIT: "385149a4d9703ea38e2a23d5cbe78018905e3d4b",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
