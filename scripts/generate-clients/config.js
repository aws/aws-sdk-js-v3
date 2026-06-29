// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7d72918b3ad4f679eff77dcd451a4d595057bb01...1f65fa78c42e777032371cbc25a8143ae55a1f46
  SMITHY_TS_COMMIT: "1f65fa78c42e777032371cbc25a8143ae55a1f46",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
