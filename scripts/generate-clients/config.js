// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/c06e9c6ad51fd6a96dd9e493b0b418efa665d80a...c1f6ba33dfc31e1cd3c89610c8d3c589fa9f21db
  SMITHY_TS_COMMIT: "c1f6ba33dfc31e1cd3c89610c8d3c589fa9f21db",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
