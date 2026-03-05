// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/a4d95e6967ac79514ad6a7659c0b400e3c3d94d1...215d2542830dd323d1c38dd0c75c52f72b94105e
  SMITHY_TS_COMMIT: "215d2542830dd323d1c38dd0c75c52f72b94105e",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
