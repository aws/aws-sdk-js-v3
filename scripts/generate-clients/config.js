// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/d714b0b39bbf3850b72fdfdbba696e5ef6c35ede...7a2af4d57b06e46a886b71a0c039ecc21774495c
  SMITHY_TS_COMMIT: "7a2af4d57b06e46a886b71a0c039ecc21774495c",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
