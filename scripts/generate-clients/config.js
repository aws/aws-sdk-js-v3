// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/9af45642642514ad6de40d6536ca357a1a76cc32...650009c4ad66f78a779165db2a44e473e68e114d
  SMITHY_TS_COMMIT: "650009c4ad66f78a779165db2a44e473e68e114d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
