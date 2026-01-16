// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/06a3fadf96628600436373b8bbba6ce2ebdec8af...de8b8250e162b65957dd8c2295aa317d2daf21a1
  SMITHY_TS_COMMIT: "de8b8250e162b65957dd8c2295aa317d2daf21a1",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
