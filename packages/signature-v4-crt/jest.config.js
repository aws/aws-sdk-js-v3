const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@smithy/core/(.+)$": "<rootDir>/../../node_modules/@smithy/core/dist-cjs/submodules/$1/index.js",
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { diagnostics: false }],
  },
};
