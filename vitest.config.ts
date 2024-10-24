import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "node_modules",
      "**/*.{integ,e2e,browser}.spec.ts",
      "private/aws-restjson-server/**/*.spec.ts",
      "private/aws-restjson-validation-server/**/*.spec.ts",
    ],
    include: ["clients/client-*/**/*.spec.ts", "lib/**/*.spec.ts", "packages/**/*.spec.ts", "private/**/*.spec.ts"],
    environment: "node",
    globals: true,
  },
});
