import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/*.browser.spec.ts"],
    browser: {
      enabled: true,
      name: "chrome",
      headless: true,
    },
  },
});
