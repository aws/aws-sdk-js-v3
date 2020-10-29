module.exports = {
  readme: "README.md",
  mode: "modules",
  out: "docs",
  exclude: ["**/node_modules/**", "**/*.spec.ts"],
  name: "AWS SDK v3",
  ignoreCompilerErrors: true,
  theme: "minimal",
  json: "docs/docs.json",
  excludePrivate: true,
  excludeNotExported: true,
  hideGenerator: true,
  plugin: "typedoc-plugin-lerna-packages",
};
