// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7be577c4d67a62cb304470718cc11222c991bcbf...080031a1ab842acf8e9683ffedd394cdf23bd0ce
  SMITHY_TS_COMMIT: "080031a1ab842acf8e9683ffedd394cdf23bd0ce",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
