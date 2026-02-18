// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/57b3119cdf42b7d9d6f6f879fdd243c8dd7c6eba...0076b3f7bb55ad1656178f8cfad890b006c92c1a
  SMITHY_TS_COMMIT: "0076b3f7bb55ad1656178f8cfad890b006c92c1a",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
