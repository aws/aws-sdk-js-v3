// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/754a468623a453d9bf9ad8a056192cc8a5627303...8591ae75092354fd90549b459c7166cb76388eb4
  SMITHY_TS_COMMIT: "8591ae75092354fd90549b459c7166cb76388eb4",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
