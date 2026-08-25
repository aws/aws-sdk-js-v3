// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/6815d3e96f3abc32e238bf6d806523aab81c6a8e...ba65259ff1d5cd084445dd0d274c3716470c8588
  SMITHY_TS_COMMIT: "ba65259ff1d5cd084445dd0d274c3716470c8588",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
