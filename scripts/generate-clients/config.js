// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/c06e9c6ad51fd6a96dd9e493b0b418efa665d80a...d1c41160522320bb5139c31cb92e79a8cdab840e
  SMITHY_TS_COMMIT: "d1c41160522320bb5139c31cb92e79a8cdab840e",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
