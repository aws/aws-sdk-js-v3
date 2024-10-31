import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["node_modules", "**/*.browser.e2e.spec.ts"],
    include: ["**/*.e2e.spec.ts"],
    environment: "node",
    env: process.env as Record<string, string>,
  },
});
