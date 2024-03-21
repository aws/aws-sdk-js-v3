#!/usr/bin/env node

/**
 *
 * This script is a canary test.
 *
 * It creates an isolated small application to test
 * the latest version of the SDK published on NPM.
 *
 */

const fs = require("fs");
const path = require("path");
const { spawnProcess } = require("../../scripts/utils/spawn-process");

(async () => {
  const jsv3_root = path.join(__dirname, "..", "..");
  const testWorkspace = path.join(jsv3_root, "..", "canary-aws-sdk-js-v3");

  if (fs.existsSync(testWorkspace)) {
    await spawnProcess("rm", ["-rf", testWorkspace], {});
  }
  fs.mkdirSync(testWorkspace);

  fs.writeFileSync(path.join(testWorkspace, "dir-check.js"), fs.readFileSync(path.join(__dirname, "canary-test-1.js")));
  await spawnProcess("node", ["dir-check.js"], {
    cwd: testWorkspace,
  });

  await spawnProcess("npm", ["init", "-y"], { cwd: testWorkspace });
  await spawnProcess("npm", ["install", `@aws-sdk/client-sts@latest`], { cwd: testWorkspace });
  await spawnProcess("npm", ["install", `@aws-sdk/client-s3@latest`], { cwd: testWorkspace });
  await spawnProcess("npm", ["install", `@aws-sdk/client-lambda@latest`], { cwd: testWorkspace });

  fs.writeFileSync(path.join(testWorkspace, "app.js"), fs.readFileSync(path.join(__dirname, "canary-test-2.js")));

  await spawnProcess("node", ["app.js"], {
    cwd: testWorkspace,
  });
})();
