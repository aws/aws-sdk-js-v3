import { defineConfig } from "vitest/config";

/**
 * AWS SDK for JavaScript test classifications:
 *
 * Unit tests are test scenarios that exercise a single functionality.
 * Ideally, all modules other than the one being tested should be mocked.
 * However, pragmiatically speaking this isn't always the case.
 * Unit tests never communicate with AWS services.
 *
 * Integration tests involve minimal mocking and test multiple modules
 * in concert. The test should use the public interfaces of our modules.
 * Integration tests never communicate with AWS services.
 *
 * E2E tests use only the public interfaces of our code and do
 * communicate with AWS services. No mocking is done for E2E tests.
 * The tests run with cucumber-js are
 * now considered E2E tests in this classification system.
 *
 * Browser tests are a separate category, require alternate configuration,
 * and may be classified as unit or e2e tests.
 */
export default defineConfig({
  test: {
    exclude: [
      "**/*/node_modules/**/*.spec.ts",
      "**/*.{integ,e2e,browser}.spec.ts",
      "packages/signature-v4-crt/**/*.spec.ts",
      "packages/types/**/*.ts",
      "packages/util-user-agent-browser/src/index.spec.ts",
      "packages/util-user-agent-browser/src/index.native.spec.ts",
      "packages/credential-provider-cognito-identity/src/localStorage-inmemoryStorage.spec.ts",
      "packages/body-checksum-browser/src/index.spec.ts",
      "packages/middleware-websocket/src/get-event-signing-stream.spec.ts",
      "packages/middleware-websocket/src/EventStreamPayloadHandler.spec.ts",
      "packages/credential-provider-cognito-identity/src/localStorage.spec.ts",
    ],
    include: ["lib/**/*.spec.ts", "packages/**/*.spec.ts"],
    environment: "node",
  },
});
