import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/*/node_modules/**/*.spec.ts",
      "**/*.{integ,e2e,browser}.spec.ts",
      "private/aws-restjson-server/**/*.spec.ts",
      "private/aws-restjson-validation-server/**/*.spec.ts",
    ],
    include: ["private/**/*.spec.ts"],
    environment: "node",
    globals: true,
  },
});
