// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/eda8e9796c241eef879074440b8fb275e459aa85...aac2242b3af7ea8c4ddc00b948a1085cb61f7074
  SMITHY_TS_COMMIT: "aac2242b3af7ea8c4ddc00b948a1085cb61f7074",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
