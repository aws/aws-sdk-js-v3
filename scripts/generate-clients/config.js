// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/4c4d986d91629c8a9184b2b6c8655180a836db67...2b5dd18207c11dc05fa180288510ee3c327ee905
  SMITHY_TS_COMMIT: "2b5dd18207c11dc05fa180288510ee3c327ee905",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
