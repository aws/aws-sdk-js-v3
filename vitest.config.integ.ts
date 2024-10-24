import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["node_modules", "**/*.{e2e,browser}.spec.ts"],
    include: ["{clients,lib,packages,private}/**/*.integ.spec.ts"],
    environment: "node",
  },
});
