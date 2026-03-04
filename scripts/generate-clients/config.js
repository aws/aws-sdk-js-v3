// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/9660941247202ad47cdaf60f0fb3c9ec315c000a...a4d95e6967ac79514ad6a7659c0b400e3c3d94d1
  SMITHY_TS_COMMIT: "a4d95e6967ac79514ad6a7659c0b400e3c3d94d1",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
