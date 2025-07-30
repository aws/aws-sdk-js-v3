// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  SMITHY_TS_COMMIT: "55751d0f920307e8f08071365c4e64c3e2e78009",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
