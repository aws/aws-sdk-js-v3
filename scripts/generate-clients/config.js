// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/650009c4ad66f78a779165db2a44e473e68e114d...eb9d0c639845ff9e8e94aa32ec97a3de315bc55a
  SMITHY_TS_COMMIT: "eb9d0c639845ff9e8e94aa32ec97a3de315bc55a",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
