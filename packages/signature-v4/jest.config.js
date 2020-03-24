const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  //only test cjs dist, avoid testing the package twice
  testPathIgnorePatterns: ["/node_modules/", "/es/"]
};
