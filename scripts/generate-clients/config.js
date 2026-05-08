// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/ffa66773c40741dfe9aef8dd43dbe683e9253f55...0793fa0a578e99c0749f6a59b6898c8c4cfd2aaa
  SMITHY_TS_COMMIT: "0793fa0a578e99c0749f6a59b6898c8c4cfd2aaa",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
