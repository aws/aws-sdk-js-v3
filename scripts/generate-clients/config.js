// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/4ad44b223bb9353cb668ab6b339f781bd817421f...72cf7e5a3883cf83d0b9c52446846dfadb0ce93a
  SMITHY_TS_COMMIT: "72cf7e5a3883cf83d0b9c52446846dfadb0ce93a",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
