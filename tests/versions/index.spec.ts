/**
 * Validate the tslib and tsc version is consistent and corresponds to each other.
 */
import { execSync } from "child_process";
import { readFileSync } from "fs";
import JSON from "json5";
import { join } from "path";

type PackageInfo = {
  name: string;
  version: string;
  private: boolean;
  location: string;
};

test("tslib and tsc version should be consistent within workspace.", () => {
  const expectedVersions: { [name: string]: string } = JSON.parse(
    readFileSync(join(__dirname, "versions.jsonc"), "utf8")
  );
  const packagesInfo: PackageInfo[] = JSON.parse(execSync("./node_modules/.bin/lerna list -l --json").toString());
  for (const { name, location } of packagesInfo) {
    const manifest = readFileSync(`${location}/package.json`, "utf8");
    const { dependencies, devDependencies } = JSON.parse(manifest);
    for (const [expectedName, expectedVersion] of Object.entries(expectedVersions)) {
      if (expectedName === name) {
        const actualVersion = dependencies[expectedName] || devDependencies[expectedName];
        if (actualVersion !== expectedVersion) {
          fail(`Expected version ${expectedVersion} for ${name} in ${location}, but got ${actualVersion}`);
        }
      }
    }
  }
});
