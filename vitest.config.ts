import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e,browser}.spec.{ts,js}"],
    include: [
      "lib/lib-dynamodb/**/*.spec.{ts,js}",
      "lib/lib-storage/**/*.spec.{ts,js}",
      // "packages/body-checksum-browser/**/*.spec.{ts,js}",
      "packages/body-checksum-node/**/*.spec.{ts,js}",
      "packages/chunked-stream-reader-node/**/*.spec.{ts,js}",
      "packages/cloudfront-signer/**/*.spec.{ts,js}",
      "packages/core/**/*.spec.{ts,js}",
      "packages/credential-provider-cognito-identity/**/*.spec.{ts,js}",
      "packages/credential-provider-env/**/*.spec.{ts,js}",
      "packages/credential-provider-http/**/*.spec.{ts,js}",
      "packages/credential-provider-ini/**/*.spec.{ts,js}",
      "packages/credential-provider-node/**/*.spec.{ts,js}",
      "packages/credential-provider-process/**/*.spec.{ts,js}",
      "packages/credential-provider-sso/**/*.spec.{ts,js}",
      "packages/credential-provider-web-identity/**/*.spec.{ts,js}",
      "packages/credential-providers/**/*.spec.{ts,js}",
      "packages/ec2-metadata-service/**/*.spec.{ts,js}",
      "packages/endpoint-cache/**/*.spec.{ts,js}",
      "packages/eventstream-handler-node/**/*.spec.{ts,js}",
    ],
    environment: "node",
  },
});
