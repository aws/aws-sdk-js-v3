#!/usr/bin/env node

/**
 * This script prepares the repo for api-extraction and executes api-extraction
 */

const fs = require("node:fs/promises");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

require("./prepare-schemas");

(async () => {
  try {
    try {
      await fs.access("./etc");
    } catch (e) {
      await fs.mkdir("./etc");
    }

    try {
      await fs.access("./temp");
    } catch (e) {
      await fs.mkdir("./temp");
    }

    await exec("yarn lerna run extract:docs");
  } catch (e) {
    throw e;
  }
})();
