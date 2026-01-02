// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/eb9d0c639845ff9e8e94aa32ec97a3de315bc55a...29ccd13ee98634d1c6449f3b50ab377d1a515297
  SMITHY_TS_COMMIT: "29ccd13ee98634d1c6449f3b50ab377d1a515297",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
