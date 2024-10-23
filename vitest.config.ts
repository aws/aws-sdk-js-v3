import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e,browser}.spec.ts"],
    include: [
      // "clients/client-*/**/*.spec.ts",
      // "lib/**/*.spec.ts",
      // "packages/body-checksum-browser/**/*.spec.ts",
      "private/**/*.spec.ts",
    ],
    environment: "node",
  },
});
