import { defineConfig } from "vitest/config";

/**
 * This set differs from browser e2e tests in that tests are shared
 * with Node.js e2e tests.
 */
export default defineConfig({
  resolve: {
    conditions: ["browser", "module", "import", "default"],
    mainFields: ["browser", "module", "main"],
  },
  test: {
    exclude: [
      "**/*/node_modules/**/*.spec.ts",
      "node_modules",
      // doesn't support OPTIONS preflight.
      "clients/client-data-pipeline/**/*.e2e.spec.ts",
      // S3 has a different browser testing setup.
      "clients/client-s3/**/*.e2e.spec.ts",
      // requires Node.js.
      "clients/client-cognito-identity/test/e2e/CognitoIdentity.e2e.spec.ts",
    ],
    include: ["**/*.browser.e2e.spec.ts", "clients/**/*.e2e.spec.ts"],
    environment: "happy-dom",
    setupFiles: ["./vitest.browser.setup.mts"],
  },
});
