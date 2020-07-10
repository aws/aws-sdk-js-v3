const { execSync, spawn } = require("child_process");
const { join } = require("path");
const { readFileSync, existsSync } = require("fs");

const hasE2Etest = (packagePath) => {
  const path = join(packagePath, "package.json");
  if (!existsSync(path)) return false;
  const pkgJson = JSON.parse(readFileSync(path).toString());
  return Boolean(pkgJson.scripts["test:e2e"]);
};

const run = async () => {
  /**
   * Example output:
   /path/to/package:@aws-sdk/client-accessanalyzer:1.0.0-gamma.3
   /path/to/package:@aws-sdk/client-acm-pca:1.0.0-gamma.3
   /path/to/package:@aws-sdk/client-acm:1.0.0-gamma.3
   */
  const changedPackagesRecord = execSync("npx lerna changed --all --parseable --long --loglevel silent");
  // Get array for changed package's path
  const changedPackages = changedPackagesRecord
    .toString()
    .split("\n")
    .map((record) => record.split(":").slice(0, 2));
  const packagesToTest = changedPackages.filter((changedPackage) => hasE2Etest(changedPackage[0]));
  console.log(`packages to run e2e test:
${packagesToTest.map((package) => package[0]).join("\n")}`);
  const test = spawn(
    "npx",
    [
      "lerna",
      "run",
      "test:e2e",
      "--scope",
      `'{${packagesToTest.map((package) => package[1]).join(",")}}'`, // https://github.com/lerna/lerna/issues/1846#issuecomment-451172783
      "--concurrency",
      "1",
    ],
    {
      env: process.env,
      stdio: "inherit",
    }
  );
  test.on("close", (code) => {
    console.log(`e2e test complete: [${code}]`);
    process.exit(code);
  });
};

run();
