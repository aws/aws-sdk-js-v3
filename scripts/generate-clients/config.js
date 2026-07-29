// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/5458500fc2776717fe64f27b709b660f7a3ff7b3...bcff71dba309446910f7a23b050350d3be77200d
  SMITHY_TS_COMMIT: "bcff71dba309446910f7a23b050350d3be77200d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
