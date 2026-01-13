// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/17f8a9c0791d6e7d8bc33c85bda43a7325306b97...948b6b60c44226ce7c3055833bdb34c31e5b6116
  SMITHY_TS_COMMIT: "948b6b60c44226ce7c3055833bdb34c31e5b6116",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
