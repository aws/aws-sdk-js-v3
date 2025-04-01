import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts", "**/*.browser.e2e.spec.ts"],
    include: ["clients/**/*.e2e.spec.ts", "lib/**/*.e2e.spec.ts", "packages/**/*.e2e.spec.ts"],
    environment: "node",
  },
});
