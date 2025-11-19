// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/2cadea188e393e3deab55f5fc4f59d1a4c5da571...7be577c4d67a62cb304470718cc11222c991bcbf
  SMITHY_TS_COMMIT: "7be577c4d67a62cb304470718cc11222c991bcbf",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
