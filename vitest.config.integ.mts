import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts", "**/*.e2e.spec.ts", "**/snapshots.integ.spec.ts"],
    include: ["{clients,lib,packages,packages-internal,private}/**/*.integ.spec.ts"],
    environment: "node",
    globalSetup: ["./packages-internal/core/scripts/browser-build/esbuild.js"],
  },
});
