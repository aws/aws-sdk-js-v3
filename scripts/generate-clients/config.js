// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/e9151f3e043a19032caad09b05937a4962c5bd13...6815d3e96f3abc32e238bf6d806523aab81c6a8e
  SMITHY_TS_COMMIT: "6815d3e96f3abc32e238bf6d806523aab81c6a8e",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
