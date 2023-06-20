const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  testPathIgnorePatterns: ["(.*).browser.spec.js"],
};
