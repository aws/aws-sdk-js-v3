#!/usr/bin/env node
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.

// Reference: https://github.com/aws/aws-encryption-sdk-javascript/pull/276

// @ts-check

const { spawn, execSync } = require("child_process");
const pipeStdIo = { stdio: [process.stdin, process.stdout, process.stderr] };

execSync("rm -rf verdaccio/storage");

// Start verdaccio in the background
const verdaccio = spawn("npx", ["verdaccio", "-c", "verdaccio/config.yaml"], pipeStdIo).on("error", (e) => {
  throw e;
});

// Publish all changed packages the local verdaccio server.
// Anything that has not been changed will match what is in npm
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
spawn("npx", args, {
  ...pipeStdIo,
  env: {
    ...process.env,
    HUSKY: "0",
    HUSKY_SKIP_HOOKS: "1",
  },
}).on("close", (code) => {
  // Rollback the changes caused by the version bumping
  execSync("git checkout -- clients/*/package.json");
  execSync("git checkout -- packages/*/package.json");
  execSync("git checkout -- private/*/package.json");
  execSync("git checkout -- lib/*/package.json");
  execSync("git checkout -- lerna.json");

  // Kill the background verdaccio server
  verdaccio.kill();
  if (code !== 0) throw Error(`Exit code: ${code}`);
});
