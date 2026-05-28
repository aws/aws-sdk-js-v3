// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/63b585dbfa4f5b8aa85168ba425c994829629fa1...35f5e62b35d6d0ba397ef1e1c1bf20530eac552d
  SMITHY_TS_COMMIT: "35f5e62b35d6d0ba397ef1e1c1bf20530eac552d",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
