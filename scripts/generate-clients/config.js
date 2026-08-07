// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/bcff71dba309446910f7a23b050350d3be77200d...eda8e9796c241eef879074440b8fb275e459aa85
  SMITHY_TS_COMMIT: "eda8e9796c241eef879074440b8fb275e459aa85",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
