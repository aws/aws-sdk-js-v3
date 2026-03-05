// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/215d2542830dd323d1c38dd0c75c52f72b94105e...5eab7ea1c099488605ff3e442e26a7e5c1902d7f
  SMITHY_TS_COMMIT: "5eab7ea1c099488605ff3e442e26a7e5c1902d7f",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
