// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/27f444b8aa045e37abfa811577fa3ed7d921516a...a0318e29da3a4ea61aeba98c8a28a4a9065919a6
  SMITHY_TS_COMMIT: "a0318e29da3a4ea61aeba98c8a28a4a9065919a6",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
