// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/de08d556d19c8500d88249f80b81f71131cc3138...46c6eef6b80338f8acb560ba826519ade474ec5e
  SMITHY_TS_COMMIT: "46c6eef6b80338f8acb560ba826519ade474ec5e",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
