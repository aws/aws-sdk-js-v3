module.exports = {
  // Custom
  printWidth: 120,
  plugins: ["prettier-plugin-java"],
  overrides: [
    {
      files: "*.java",
      options: {
        tabWidth: 4,
      },
    },
  ],
};
