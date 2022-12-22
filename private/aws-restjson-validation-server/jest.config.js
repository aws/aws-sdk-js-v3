const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
