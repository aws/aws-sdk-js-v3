import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/versions/**/*.spec.ts"],
    environment: "node",
  },
});
