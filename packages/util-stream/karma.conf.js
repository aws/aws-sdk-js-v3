process.env.CHROME_BIN = require("puppeteer").executablePath();
module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "src/getAwsChunkedBody.ts",
      "src/asyncIterableToReadable.browser.ts",
      "src/readableToAsyncIterable.browser.ts",
      "src/getAwsChunkedBody.browser.spec.ts",
    ],
    exclude: ["**/*.d.ts"],
    preprocessors: {
      "**/*.ts": "karma-typescript",
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        addNodeGlobals: true,
      },
    },
    singleRun: true,
  });
};
