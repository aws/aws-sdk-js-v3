// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/f9d8d226163457d498648a4039123351b173078e...cb3a25c37bc9455ccb116fe722c544adac981690
  SMITHY_TS_COMMIT: "cb3a25c37bc9455ccb116fe722c544adac981690",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
