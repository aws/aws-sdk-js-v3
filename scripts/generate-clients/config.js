// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/8d725cc6cb65c18918291f2fed5654e833903d7d...521d67c38f8928c514d1fcea3fc08e40c2300513
  SMITHY_TS_COMMIT: "521d67c38f8928c514d1fcea3fc08e40c2300513",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
