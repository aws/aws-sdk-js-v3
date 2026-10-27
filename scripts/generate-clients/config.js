// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/cb3a25c37bc9455ccb116fe722c544adac981690...d44398bfbf7980d897ad1022429bd3b810bfc796
  SMITHY_TS_COMMIT: "d44398bfbf7980d897ad1022429bd3b810bfc796",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
