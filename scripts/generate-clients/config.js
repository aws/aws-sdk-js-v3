// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/cb65d39b6c223608ad7752b0ffe7dc9cf997a8e6...4af0688b4e4ca53b1c370393cf492440c3bb0d69
  SMITHY_TS_COMMIT: "4af0688b4e4ca53b1c370393cf492440c3bb0d69",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
