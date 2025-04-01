import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts", "node_modules"],
    include: ["**/*.browser.e2e.spec.ts"],
    environment: "happy-dom",
  },
});
