import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    include: ["packages/signature-v4-crt/src/**/*.spec.ts"],
    environment: "node",
  },
  resolve: {
    alias: [
      {
        find: /^@smithy\/core\/(.+)$/,
        replacement: resolve(__dirname, "../../node_modules/@smithy/core/dist-cjs/submodules/$1/index.js"),
      },
    ],
  },
});
