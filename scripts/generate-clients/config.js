// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/e053c4d10d0ebb52939c32e1156a0a5ed4d9a32f...1f4cc0608b13d8a96b274f93d6e29322ff21d2ac
  SMITHY_TS_COMMIT: "1f4cc0608b13d8a96b274f93d6e29322ff21d2ac",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
