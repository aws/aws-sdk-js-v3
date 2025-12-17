// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/934fd271bef22c7751e0c59615cf1639dd609c3c...de08d556d19c8500d88249f80b81f71131cc3138
  SMITHY_TS_COMMIT: "de08d556d19c8500d88249f80b81f71131cc3138",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
