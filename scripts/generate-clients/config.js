// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/29ccd13ee98634d1c6449f3b50ab377d1a515297...7e4bbf64112652f6bb5171ce2c14eebfc6aab964
  SMITHY_TS_COMMIT: "7e4bbf64112652f6bb5171ce2c14eebfc6aab964",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
