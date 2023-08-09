const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "(.*).browser.spec.js"],
};
