// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/2acebecd260dba2cca593ef65bf262e2eb3ad283...e053c4d10d0ebb52939c32e1156a0a5ed4d9a32f
  SMITHY_TS_COMMIT: "e053c4d10d0ebb52939c32e1156a0a5ed4d9a32f",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
