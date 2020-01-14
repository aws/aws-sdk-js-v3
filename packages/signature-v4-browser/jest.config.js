const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  //only test build dist, avoid testing the package twice
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};
