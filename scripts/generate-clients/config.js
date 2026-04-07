// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/dfec1b6f4a49745b2f4873e8cc03ab3f150ba96b...8776710ac30f9ed4fcb322d2dec0ade3f0f7de5e
  SMITHY_TS_COMMIT: "8776710ac30f9ed4fcb322d2dec0ade3f0f7de5e",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
