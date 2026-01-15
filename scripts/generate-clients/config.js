// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/0e8cc4926dee4e081bfc3fe9945813f7118da73b...26e1588614a429ae676790b974ce2642c52eb736
  SMITHY_TS_COMMIT: "26e1588614a429ae676790b974ce2642c52eb736",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
