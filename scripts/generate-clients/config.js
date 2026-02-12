// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/1165095e1c178ed8afd8d1e6d78ede6dd272a1ac...57b3119cdf42b7d9d6f6f879fdd243c8dd7c6eba
  SMITHY_TS_COMMIT: "57b3119cdf42b7d9d6f6f879fdd243c8dd7c6eba",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
