#!/usr/bin/env node

const { join, resolve } = require("path");
const { execSync, spawn } = require("child_process");

const ROOT = resolve(join(__dirname, "..", ".."));
const FEATURES_FOLDER = join(ROOT, "features");
const ROOT_BIN = join(ROOT, "node_modules", ".bin");

const execOptions = {
  ...process,
  cwd: __dirname,
  encoding: "utf-8",
};

const allTags = execSync(`grep -h ^@ ${join(FEATURES_FOLDER, "**", "*.feature")}`, execOptions).split(/[\n ]/g);

console.info(`Looking for changed clients that has the legacy integration test tag: ${allTags}`);

let changedPackages = [];
try {
  changedPackages = execSync(`${join(ROOT_BIN, "lerna")} changed`, execOptions).split("\n");
} catch (e) {
  // Swallow error because Lerna throws if no package changes.
}
const changedPackageTags = changedPackages
  .map((name) => name.replace("@aws-sdk/client-", ""))
  .map((name) => name.replace("-"))
  .map((name) => `@${name}`);

const tagsToTest = changedPackageTags.filter((tag) => allTags.includes(tag));

if (tagsToTest.length === 0) {
  console.info("No clients with integration test cases has changed since last release.");
  return;
}

// Cucumber requires cwd to contain the test cases.
const command = `${join("node_modules", ".bin", "cucumber-js")}`;
const args = ["--fail-fast", "-t", `"${tagsToTest.join(" or ")}"`];
console.info(`Running cucumber test: \n${command} ${args.join(" ")}`);

const cucumber = spawn(command, args, { ...execOptions, cwd: ROOT, shell: true });
cucumber.stdout.pipe(process.stdout);
cucumber.stderr.pipe(process.stderr);
cucumber.on("close", (code) => {
  if (code === 0) process.exit();
  else process.exit(code);
});
