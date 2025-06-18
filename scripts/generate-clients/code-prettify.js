const prettifyCode = async (dir) => {
  const { checkDir } = await import("../biome/biome.mjs");
  await checkDir(dir);
};

module.exports = {
  prettifyCode,
};
