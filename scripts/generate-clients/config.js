// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  SMITHY_TS_COMMIT: "05beb5dc0ffb6d00238cfeb93416aca54cd4ca32",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
