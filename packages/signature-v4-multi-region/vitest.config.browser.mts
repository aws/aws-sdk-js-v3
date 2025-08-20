import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.browser.integ.spec.ts", "**/*.browser.spec.ts"],
    environment: "happy-dom",
  },
  mode: "development",
});
