// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7e4bbf64112652f6bb5171ce2c14eebfc6aab964...837c4d05cca85a32971da061d6606832691dbd24
  SMITHY_TS_COMMIT: "837c4d05cca85a32971da061d6606832691dbd24",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
