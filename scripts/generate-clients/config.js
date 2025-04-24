// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  SMITHY_TS_COMMIT: "7af8ef9daa0f7f6525dbd5039d166e716fdc2b52",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
