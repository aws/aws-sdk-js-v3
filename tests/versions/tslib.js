/**
 * Validate the tslib and tsc version is consistent and corresponds to each other.
 */
const { execSync } = require("child_process");
const { readFileSync } = require("fs");
const JSON = require("json5");
const { join } = require("path");

console.log("Validating the tslib and tsc version is consistent within workspace.");
const expectedVersions = JSON.parse(readFileSync(join(__dirname, "versions.json"), "utf8"));
const packagesInfo = JSON.parse(execSync("./node_modules/.bin/lerna list -l --json").toString());
for (const { name, location } of packagesInfo) {
  const manifest = readFileSync(`${location}/package.json`, "utf8");
  const { dependencies, devDependencies } = JSON.parse(manifest);
  for (const [expectedName, expectedVersion] of Object.entries(expectedVersions)) {
    if (expectedName === name) {
      const actualVersion = dependencies[expectedName] || devDependencies[expectedName];
      if (actualVersion !== expectedVersion) {
        throw new Error(`Expected version ${expectedVersion} for ${name} in ${location}, but got ${actualVersion}`);
      }
    }
  }
}
console.log("succeeded!");
