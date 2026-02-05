// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/b6fd0d1be1f0cf1c42d0e860de04890d66c63281...64d983af799e3ae348cb46fb7542c5de688636a7
  SMITHY_TS_COMMIT: "64d983af799e3ae348cb46fb7542c5de688636a7",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
