#!/usr/bin/env node

/**
 * Retrieves aws-models and extracts examples-1.json files for service models.
 * Due to a backlogged issue, these examples are not available via Smithy.
 */

const { existsSync } = require("fs");
const { execSync } = require("child_process");
const { join } = require("path");

const location = join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models-examples");

if (!existsSync(location)) {
  execSync(`git clone git@github.com:aws/aws-models.git ${location}`);
}

execSync(`cd ${location} && git pull`);
