// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/f8bed213e93a537ea1e26cc0a1dba8d45501bf3d...716bf8eb08f5b4b3f2bf5ddf120542a3c95ff3f3
  SMITHY_TS_COMMIT: "716bf8eb08f5b4b3f2bf5ddf120542a3c95ff3f3",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
