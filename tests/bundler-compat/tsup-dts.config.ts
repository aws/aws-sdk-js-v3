import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/dts-check.ts"],
  outDir: "dist/dts",
  format: ["esm"],
  platform: "browser",
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "bundler",
    },
  },
  external: [/^node:/, /^@smithy/],
  tsconfig: "tsconfig.json",
});
