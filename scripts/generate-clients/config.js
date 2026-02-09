// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/64d983af799e3ae348cb46fb7542c5de688636a7...f88ac6fbc9f82c14a2ad3cb76b2d5520ff73e8e6
  SMITHY_TS_COMMIT: "f88ac6fbc9f82c14a2ad3cb76b2d5520ff73e8e6",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
