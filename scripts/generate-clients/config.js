// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/08e3b88680fec11b216b8bffaa4a44dba76eee8b...3926fd725e854af32d47c41fbb4cbafccebfa117
  SMITHY_TS_COMMIT: "3926fd725e854af32d47c41fbb4cbafccebfa117",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
