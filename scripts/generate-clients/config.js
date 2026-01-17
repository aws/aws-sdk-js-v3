// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/de8b8250e162b65957dd8c2295aa317d2daf21a1...a028fc557b1df0af2474e435d2fef64fd9244228
  SMITHY_TS_COMMIT: "a028fc557b1df0af2474e435d2fef64fd9244228",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
