// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/775cd5b119247e544cfa1c51feb89b9e18805725...f8bed213e93a537ea1e26cc0a1dba8d45501bf3d
  SMITHY_TS_COMMIT: "f8bed213e93a537ea1e26cc0a1dba8d45501bf3d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
