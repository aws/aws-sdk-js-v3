import { defineConfig } from "vite";
export default defineConfig({
  build: {
    lib: { entry: "./web-application-sample.ts", formats: ["umd"], name: "AwsSdkCanary" },
    outDir: "./dist/vite",
    minify: false,
    sourcemap: false,
    rollupOptions: {
      output: { entryFileNames: "bundle.js" },
      treeshake: true,
    },
  },
  resolve: { conditions: ["browser", "import"] },
});
