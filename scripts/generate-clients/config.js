// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/6b733627f88522b81d2f264a25967752d516b872...15506ee5b2adffb423789063363476ade1d5bda6
  SMITHY_TS_COMMIT: "15506ee5b2adffb423789063363476ade1d5bda6",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
