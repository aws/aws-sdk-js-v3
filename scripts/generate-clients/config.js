// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/56a65e69af8a8b7a814a92af716009cabe4b0b42...472a5ea035237e10c560ed362c0e0105805ad26f
  SMITHY_TS_COMMIT: "3078a958f1ce563503963eb9492c83610fe1cef5",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
