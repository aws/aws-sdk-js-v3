// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/93408430419857fd23bb6d41894a6bb871f05d26...0e8cc4926dee4e081bfc3fe9945813f7118da73b
  SMITHY_TS_COMMIT: "0e8cc4926dee4e081bfc3fe9945813f7118da73b",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
