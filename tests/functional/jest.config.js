const base = require("../../jest.config.base");
module.exports = {
  ...base,
  testMatch: ["./**/?(*.)+(spec|test).js?(x)"],
};
