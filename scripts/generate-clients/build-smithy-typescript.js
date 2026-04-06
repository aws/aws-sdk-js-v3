// @ts-check
const { access, rm } = require("node:fs/promises");
const { spawnProcess } = require("../utils/spawn-process");

/**
 * @param {string} repo
 * @param {string} commit
 */
const buildSmithyTypeScript = async (repo, commit) => {
  await runWithSpecificSmithyTypeScriptVersion(repo, commit, async () => {
    // Build smithy-typescript and publish to maven local
    await spawnProcess("./gradlew", ["clean", "publishToMavenLocal"], { cwd: repo });
  });
};

/**
 * @param {string} repo
 * @param {string} commit
 * @param {Function} task
 */
const runWithSpecificSmithyTypeScriptVersion = async (repo, commit, task) => {
  let deleteSmithyTsRepo = false;

  // Check out smithy-typescript at repo, if it does not exist.
  try {
    await access(repo);
  } catch (error) {
    deleteSmithyTsRepo = true;
    await spawnProcess("git", ["clone", "https://github.com/awslabs/smithy-typescript.git", repo, "--depth=1"]);
  }

  // Checkout commit (connect to remote only when necessary)
  try {
    await spawnProcess("git", ["cat-file", "-e", commit], { cwd: repo });
  } catch (error) {
    await spawnProcess("git", ["fetch", "origin", commit, "--depth=1"], { cwd: repo });
  }

  // Switch to branch with commit
  const tempBranchName = `temp-${commit}`;

  // Delete temp branch if it exists
  try {
    await spawnProcess("git", ["branch", "-D", tempBranchName], { cwd: repo });
  } catch (error) {
    // Branch doesn't exist, ignore error
  }
  await spawnProcess("git", ["checkout", "-b", tempBranchName, commit], { cwd: repo });

  await task();

  if (deleteSmithyTsRepo) {
    await rm(repo, { recursive: true, force: true });
  } else {
    // Delete temp branch
    await spawnProcess("git", ["checkout", "main"], { cwd: repo });
    await spawnProcess("git", ["branch", "-D", tempBranchName], { cwd: repo });
  }
};

module.exports = { buildSmithyTypeScript, runWithSpecificSmithyTypeScriptVersion };
