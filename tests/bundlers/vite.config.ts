import { defineConfig } from "vite";
import * as path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.join(__dirname, "source.ts"),
      name: "dist",
      // the proper extensions will be added
      fileName: "vite-dist",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
    minify: false,
    terserOptions: {
      mangle: false,
    },
  },
});
