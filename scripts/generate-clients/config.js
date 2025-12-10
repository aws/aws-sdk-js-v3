// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/bbdb09131e307af317f3a6a6ee09e895749ea749...27f444b8aa045e37abfa811577fa3ed7d921516a
  SMITHY_TS_COMMIT: "27f444b8aa045e37abfa811577fa3ed7d921516a",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
