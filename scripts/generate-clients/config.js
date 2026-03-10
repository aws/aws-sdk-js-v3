// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/7eeec947f7cd26b1bdb644d0b1acf321907e1b00...6a0fd69fff1fe145d3ae7b1d4911f34e01b9c467
  SMITHY_TS_COMMIT: "6a0fd69fff1fe145d3ae7b1d4911f34e01b9c467",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
