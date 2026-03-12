// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/6a0fd69fff1fe145d3ae7b1d4911f34e01b9c467...dfdd3600e09c50b3800f0922a57b6c2190eea3db
  SMITHY_TS_COMMIT: "dfdd3600e09c50b3800f0922a57b6c2190eea3db",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
