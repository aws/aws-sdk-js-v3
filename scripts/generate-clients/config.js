// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/40055f6f093357c26caca53cf6e378e0b5a0380b...dfec1b6f4a49745b2f4873e8cc03ab3f150ba96b
  SMITHY_TS_COMMIT: "dfec1b6f4a49745b2f4873e8cc03ab3f150ba96b",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
