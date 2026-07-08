// Update this commit when taking up new changes from smithy-typescript.
module.exports = {
  // Use full commit hash as we explicitly fetch it.
  // Comparison link (update with previous hash):
  // https://github.com/smithy-lang/smithy-typescript/compare/12ba20a9a09d3b68ba222907d1e5a6807adc0c09...25370e6fa2bbf46d683e6eef7e2781cd91091de6
  SMITHY_TS_COMMIT: "25370e6fa2bbf46d683e6eef7e2781cd91091de6",
};

if (module.exports.SMITHY_TS_COMMIT.length < 40) {
  throw new Error(`Configured SMITHY_TS_COMMIT=${module.exports.SMITHY_TS_COMMIT} must be long hash (40 char).`);
}
