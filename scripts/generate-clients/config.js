// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/69fc1e90b9be602b601eccf78d5155e05039a6ed...fd1d44eb6b90c2cfde82946656d7a2019d1bd3fb
  SMITHY_TS_COMMIT: "fd1d44eb6b90c2cfde82946656d7a2019d1bd3fb",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
