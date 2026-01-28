// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/72cf7e5a3883cf83d0b9c52446846dfadb0ce93a...e65713cdcd25b620166e1acd403d0ba5e87cad3d
  SMITHY_TS_COMMIT: "e65713cdcd25b620166e1acd403d0ba5e87cad3d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
