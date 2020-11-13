module.exports = {
  inputFiles: ["./packages", "./lib"],
  readme: "README.md",
  mode: "modules",
  out: "docs",
  exclude: ["**/node_modules/**", "**/*.spec.ts"],
  excludeExternals: true,
  name: "AWS SDK v3",
  ignoreCompilerErrors: true,
  theme: "minimal",
  hideGenerator: true,
  clientsDocPath: "clients/{{CLIENT}}/docs",
  plugin: ["typedoc-plugin-lerna-packages", "@aws-sdk/core-packages-documentation-generator"],
};
