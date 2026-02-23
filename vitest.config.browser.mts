import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts"],
    include: [
      "packages-internal/util-user-agent-browser/src/index.spec.ts",
      "packages-internal/util-user-agent-browser/src/index.native.spec.ts",
      "packages-internal/util-user-agent-browser/src/createUserAgentStringParsingProvider.spec.ts",
      "packages-internal/credential-provider-cognito-identity/src/localStorage-inmemoryStorage.spec.ts",
      "packages-internal/body-checksum-browser/src/index.spec.ts",
      "packages-internal/middleware-websocket/src/ws-eventstream/**/*.spec.ts",
      "packages-internal/credential-provider-cognito-identity/src/localStorage.spec.ts",
      "packages-internal/signature-v4-multi-region/src/SignatureV4MultiRegion.browser.spec.ts",
      "packages-internal/xml-builder/src/xml-parser.spec.ts",
    ],
    environment: "happy-dom",
  },
});
