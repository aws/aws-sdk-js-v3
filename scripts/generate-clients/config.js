// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/8776710ac30f9ed4fcb322d2dec0ade3f0f7de5e...754a468623a453d9bf9ad8a056192cc8a5627303
  SMITHY_TS_COMMIT: "754a468623a453d9bf9ad8a056192cc8a5627303",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
