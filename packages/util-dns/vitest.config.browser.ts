import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e}.spec.ts"],
    include: ["**/*.browser.spec.ts"],
    environment: "happy-dom",
  },
});
