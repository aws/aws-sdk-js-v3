// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/4af0688b4e4ca53b1c370393cf492440c3bb0d69...9af45642642514ad6de40d6536ca357a1a76cc32
  SMITHY_TS_COMMIT: "9af45642642514ad6de40d6536ca357a1a76cc32",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
