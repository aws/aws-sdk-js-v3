// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/5eab7ea1c099488605ff3e442e26a7e5c1902d7f...4c6296a745389da66f03bfd9f455592099439c52
  SMITHY_TS_COMMIT: "4c6296a745389da66f03bfd9f455592099439c52",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
