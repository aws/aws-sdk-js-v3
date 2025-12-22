// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/ce2697be6df3479d5dd239abb1a19a38093aaeeb...cb65d39b6c223608ad7752b0ffe7dc9cf997a8e6
  SMITHY_TS_COMMIT: "cb65d39b6c223608ad7752b0ffe7dc9cf997a8e6",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
