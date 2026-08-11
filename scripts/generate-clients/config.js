// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/4097414f695596cae768d37ed1a2439d26bf519c...ec9b4b2b302629bd2fb17b2df6cd2268f041e569
  SMITHY_TS_COMMIT: "ec9b4b2b302629bd2fb17b2df6cd2268f041e569",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
