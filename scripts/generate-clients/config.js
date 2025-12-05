// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/f9285c3efe3100e0f75b6574c3bb2582ca622ba5...7b82c53d9040ad7a1c7a28ec9f541e937499f374
  SMITHY_TS_COMMIT: "7b82c53d9040ad7a1c7a28ec9f541e937499f374",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
