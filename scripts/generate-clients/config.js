// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/1f4cc0608b13d8a96b274f93d6e29322ff21d2ac...9660941247202ad47cdaf60f0fb3c9ec315c000a
  SMITHY_TS_COMMIT: "9660941247202ad47cdaf60f0fb3c9ec315c000a",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
