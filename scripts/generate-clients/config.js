// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/8af2d330260513d3e51c98f1f137793b5330ceb4...56a65e69af8a8b7a814a92af716009cabe4b0b42
  SMITHY_TS_COMMIT: "56a65e69af8a8b7a814a92af716009cabe4b0b42",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
