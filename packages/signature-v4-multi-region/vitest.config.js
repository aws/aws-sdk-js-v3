import { defineConfig } from "vitest/config";
import baseConfig from "../../vitest.config.base.js";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    exclude: ["**/node_modules/**", "**/*.e2e.spec.ts", "**/browser.spec.ts"],
  },
});
