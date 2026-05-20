// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/15506ee5b2adffb423789063363476ade1d5bda6...4342743b608d14cd7335078be0aade82b6b2dbf8
  SMITHY_TS_COMMIT: "4342743b608d14cd7335078be0aade82b6b2dbf8",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
