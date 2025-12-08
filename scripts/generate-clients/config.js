// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7b82c53d9040ad7a1c7a28ec9f541e937499f374...530227c4d3a9a2ae89f739df85310b0d7e0817ce
  SMITHY_TS_COMMIT: "530227c4d3a9a2ae89f739df85310b0d7e0817ce",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
