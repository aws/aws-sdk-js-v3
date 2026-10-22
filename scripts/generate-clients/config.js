// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/685cb20baf732a913dc19cfe4c75c98c498440db...f9d8d226163457d498648a4039123351b173078e
  SMITHY_TS_COMMIT: "f9d8d226163457d498648a4039123351b173078e",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
