#!/usr/bin/env node

/**
 * Retrieves aws-models and extracts examples-1.json files for service models.
 * Due to a backlogged issue, these examples are not available via Smithy.
 */

const { existsSync } = require("fs");
const { copySync } = require("fs-extra");
const { execSync } = require("child_process");
const { join } = require("path");

const jsv3Root = join(__dirname, "..", "..");
const location = join(jsv3Root, "codegen", "sdk-codegen", "aws-models-examples");
const colocation = join(jsv3Root, "..", "aws-models");

let pull = true;

if (!existsSync(location)) {
  // check co-located folder (e.g. in automation)
  if (existsSync(colocation)) {
    copySync(colocation, location, { overwrite: true });
    console.log("copied co-located aws-models dir");
    pull = false;
  } else {
    // clone it if not colocated.
    execSync(`git clone git@github.com:aws/aws-models.git ${location}`);
    console.log("cloned aws-models from GitHub");
  }
}

if (pull) {
  execSync(`cd ${location} && git pull`);
}
