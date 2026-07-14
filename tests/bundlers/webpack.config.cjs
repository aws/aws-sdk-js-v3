const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./web-application-sample.ts",
  output: {
    path: path.resolve(__dirname, "dist/webpack"),
    filename: "bundle.js",
    library: { type: "umd", name: "AwsSdkCanary" },
  },
  optimization: { minimize: false, usedExports: true },
  externals: [
    ({ request }, callback) => {
      if (/^node:/.test(request)) return callback(null, "commonjs " + request);
      callback();
    },
  ],
  resolve: {
    extensions: [".ts", ".js"],
    conditionNames: ["browser", "import", "default"],
    fallback: {
      fs: false,
      path: false,
      os: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      net: false,
      tls: false,
      child_process: false,
      dns: false,
      util: false,
      buffer: false,
    },
  },
  module: { rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }] },
};
