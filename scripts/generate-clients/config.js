// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7b82c53d9040ad7a1c7a28ec9f541e937499f374...bbdb09131e307af317f3a6a6ee09e895749ea749
  SMITHY_TS_COMMIT: "bbdb09131e307af317f3a6a6ee09e895749ea749",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
