/**
 * Validate the tslib and tsc version is consistent and corresponds to each other.
 */
import { execSync } from "child_process";
import { readFileSync } from "fs";

import * as expectedVersions from "./versions.json";

type PackageInfo = {
  name: string;
  version: string;
  private: boolean;
  location: string;
};

console.log("Validating the tslib and tsc version is consistent within workspace.");
const packagesInfo: PackageInfo[] = JSON.parse(execSync("./node_modules/.bin/lerna list -l --json").toString());
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
