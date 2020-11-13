module.exports = {
  exclude: ["./protocols/*.ts", "./e2e/*.ts", "./endpoints.ts"],
  excludedNotExported: true,
  excludePrivate: true,
  hideGenerator: true,
  ignoreCompilerErrors: true,
  mode: "file",
  out: "./docs",
  json: "./docs/docs.json",
  theme: "minimal",
  plugin: ["@aws-sdk/client-documentation-generator"],
};
