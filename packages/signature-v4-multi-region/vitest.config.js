import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    exclude: ["**/node_modules/**", "**/*.e2e.spec.ts", "**/browser.spec.ts"],
  },
});
