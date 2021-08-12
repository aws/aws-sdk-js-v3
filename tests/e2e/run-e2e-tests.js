const { execSync, spawn } = require("child_process");
const { join } = require("path");
const { readFileSync, existsSync } = require("fs");
const { spawnPromise } = require("./spawn-promise");

const hasE2Etest = (packagePath) => {
  const path = join(packagePath, "package.json");
  if (!existsSync(path)) return false;
  const pkgJson = JSON.parse(readFileSync(path).toString());
  return Boolean(pkgJson.scripts["test:e2e"]);
};

exports.runE2ETests = async (resourcesEnv) => {
  /**
   * Example output:
   /path/to/package:@aws-sdk/client-accessanalyzer:1.0.0-gamma.3
   /path/to/package:@aws-sdk/client-acm-pca:1.0.0-gamma.3
   /path/to/package:@aws-sdk/client-acm:1.0.0-gamma.3
   */
  const changedPackagesRecord = execSync(
    "./node_modules/.bin/lerna  changed --all --parseable --long --loglevel silent"
  );
  // Get array for changed package's path
  const changedPackages = changedPackagesRecord
    .toString()
    .split("\n")
    .filter((record) => record.includes(":"))
    .map((record) => record.split(":").slice(0, 2));
  console.log(changedPackages);
  const packagesToTest = changedPackages.filter((changedPackage) => hasE2Etest(changedPackage[0]));
  if (packagesToTest?.length === 0) {
    console.log("no changed package contains e2e test.");
    return;
  }
  console.log(`packages to run e2e test:
${packagesToTest.map((package) => package[0]).join("\n")}`);
  await spawnPromise(
    "./node_modules/.bin/lerna",
    [
      "run",
      "test:e2e",
      "--scope",
      `'{${packagesToTest.map((package) => package[1]).join(",")}}'`, // https://github.com/lerna/lerna/issues/1846#issuecomment-451172783
      "--concurrency",
      "1",
    ],
    {
      env: {
        ...process.env,
        ...resourcesEnv,
      },
      stdio: "inherit",
    }
  );
};
