import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts", "**/*.{e2e,browser}.spec.ts"],
    include: ["{clients,lib,packages,private}/**/*.integ.spec.ts"],
    environment: "node",
  },
});
