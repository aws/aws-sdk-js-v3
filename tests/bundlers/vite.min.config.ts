import { defineConfig } from "vite";
import * as path from "node:path";

export default defineConfig({
  build: {
    outDir: "./dist-min",
    lib: {
      entry: path.join(__dirname, "source.ts"),
      name: "dist-min",
      // the proper extensions will be added
      fileName: "vite-dist.min",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
        // to get an easier aggregate accounting of bundle contents
        inlineDynamicImports: true,
      },
    },
    minify: true,
    terserOptions: {
      mangle: true,
    },
  },
});
