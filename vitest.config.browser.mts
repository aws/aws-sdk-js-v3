import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts"],
    include: [
      "packages/util-user-agent-browser/src/index.spec.ts",
      "packages/util-user-agent-browser/src/index.native.spec.ts",
      "packages/credential-provider-cognito-identity/src/localStorage-inmemoryStorage.spec.ts",
      "packages/body-checksum-browser/src/index.spec.ts",
      "packages/middleware-websocket/src/get-event-signing-stream.spec.ts",
      "packages/middleware-websocket/src/EventStreamPayloadHandler.spec.ts",
      "packages/credential-provider-cognito-identity/src/localStorage.spec.ts",
      "packages/signature-v4-multi-region/src/SignatureV4MultiRegion.browser.spec.ts",
      "packages/xml-builder/src/xml-parser.spec.ts",
    ],
    environment: "happy-dom",
  },
});
