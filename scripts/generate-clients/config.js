// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/aa4da4d43273809785615573042806d8e8733ef8...2da017f22a370dace914ed17fcb5272571b515f5
  SMITHY_TS_COMMIT: "2da017f22a370dace914ed17fcb5272571b515f5",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
