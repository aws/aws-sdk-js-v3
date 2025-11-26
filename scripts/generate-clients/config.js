// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/f8bed213e93a537ea1e26cc0a1dba8d45501bf3d...6161a0479e8fd0891a955e6d1071ed65d2875518
  SMITHY_TS_COMMIT: "6161a0479e8fd0891a955e6d1071ed65d2875518",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
