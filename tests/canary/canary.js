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
const { fork } = require("child_process");
const { spawnProcess } = require("../../scripts/utils/spawn-process");

let verdaccioFork;

const jsv3_root = path.join(__dirname, "..", "..");
const testWorkspace = path.join(jsv3_root, "..", "canary-aws-sdk-js-v3");

(async () => {
  if (fs.existsSync(testWorkspace)) {
    await spawnProcess("rm", ["-rf", testWorkspace], {});
  }
  fs.mkdirSync(testWorkspace);

  fs.writeFileSync(path.join(testWorkspace, "dir-check.js"), fs.readFileSync(path.join(__dirname, "canary-test-1.js")));
  await spawnProcess("node", ["dir-check.js"], {
    cwd: testWorkspace,
  });

  verdaccioFork = await runRegistry(["-c", path.join(jsv3_root, "verdaccio", "config.yaml")]);
  await localPublishChangedPackages(jsv3_root);

  await spawnProcess("npm", ["init", "-y"], { cwd: testWorkspace });
  await spawnProcess("npm", ["install", `@aws-sdk/client-sts@ci`, "--registry", "http://localhost:4873/"], {
    cwd: testWorkspace,
  });
  await spawnProcess("npm", ["install", `@aws-sdk/client-s3@ci`, "--registry", "http://localhost:4873/"], {
    cwd: testWorkspace,
  });
  await spawnProcess("npm", ["install", `@aws-sdk/client-lambda@ci`, "--registry", "http://localhost:4873/"], {
    cwd: testWorkspace,
  });

  fs.writeFileSync(path.join(testWorkspace, "app.js"), fs.readFileSync(path.join(__dirname, "canary-test-2.js")));

  await spawnProcess("node", ["app.js"], {
    cwd: testWorkspace,
  });
})().finally(async () => {
  if (verdaccioFork) {
    verdaccioFork.kill();
  }
  await spawnProcess("git", ["checkout", "--", "."], {
    cwd: jsv3_root,
  });
});

function runRegistry(args = [], childOptions = {}) {
  return new Promise((resolve, reject) => {
    const childFork = fork(require.resolve("verdaccio/bin/verdaccio"), args, childOptions);
    childFork.on("message", (msg) => {
      if (msg.verdaccio_started) {
        resolve(childFork);
      }
    });
    childFork.on("error", (err) => reject([err]));
    childFork.on("disconnect", (err) => reject([err]));
  });
}

async function localPublishChangedPackages(root) {
  await spawnProcess("rm", ["-rf", "verdaccio/storage"], { cwd: root, stdio: "inherit" });

  const args = [
    "lerna",
    "publish",
    "prerelease",
    "--force-publish",
    "--preid",
    "ci",
    "--exact",
    "--registry",
    "http://localhost:4873/",
    "--yes",
    "--no-changelog",
    "--no-git-tag-version",
    "--no-push",
    "--no-git-reset",
    "--ignore-scripts",
    "--no-verify-access",
    "--concurrency",
    "4",
    "--dist-tag",
    "ci",
  ];
  await spawnProcess("npx", args, { cwd: root, stdio: "inherit" });
}
