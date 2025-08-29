import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: "./source.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-dist.js",
    library: "dist",
  },
  optimization: {
    minimize: false,
    splitChunks: false,
    runtimeChunk: false,
    sideEffects: true,
    usedExports: true,
  },
  stats: {
    optimizationBailout: false,
  },
};
