// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/4c6296a745389da66f03bfd9f455592099439c52...7eeec947f7cd26b1bdb644d0b1acf321907e1b00
  SMITHY_TS_COMMIT: "7eeec947f7cd26b1bdb644d0b1acf321907e1b00",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
