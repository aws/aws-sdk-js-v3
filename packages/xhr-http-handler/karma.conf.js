process.env.CHROME_BIN = require("puppeteer").executablePath();
module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/xhr-http-handler.ts", "src/xhr-http-handler.browser.spec.ts", "src/request-timeout.ts"],
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
        addNodeGlobals: false,
      },
    },
    singleRun: true,
  });
};
