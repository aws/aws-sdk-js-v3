// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/521d67c38f8928c514d1fcea3fc08e40c2300513...ce2697be6df3479d5dd239abb1a19a38093aaeeb
  SMITHY_TS_COMMIT: "ce2697be6df3479d5dd239abb1a19a38093aaeeb",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
