import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: "./source.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist-min"),
    filename: "webpack-dist.min.js",
    library: "dist",
  },
  optimization: {},
  stats: {},
};
