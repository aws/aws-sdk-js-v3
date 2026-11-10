// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/fd1d44eb6b90c2cfde82946656d7a2019d1bd3fb...8fa2be29d5c714dc35a1d57049e1cee0cd9b3d8d
  SMITHY_TS_COMMIT: "8fa2be29d5c714dc35a1d57049e1cee0cd9b3d8d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
