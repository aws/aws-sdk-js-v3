import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/endpoints-2.0/**/*.spec.ts"],
    environment: "node",
  },
});
