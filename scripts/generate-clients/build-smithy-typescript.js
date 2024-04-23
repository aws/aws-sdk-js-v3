// @ts-check
const { access, rm } = require("fs/promises");
const { spawnProcess } = require("../utils/spawn-process");

const buildSmithyTypeScript = async (repo, commit) => {
  let deleteSmithyTsRepo = false;

  // Check out smithy-typescript at repo, if it does not exist.
  try {
    await access(repo);
  } catch (error) {
    deleteSmithyTsRepo = true;
    await spawnProcess("git", ["clone", "https://github.com/awslabs/smithy-typescript.git", repo, "--depth=1"]);
  }

  // Checkout commit
  await spawnProcess("git", ["fetch", "origin", commit, "--depth=1"], { cwd: repo });

  // Switch to branch with commit
  const tempBranchName = `temp-${commit}`;
  await spawnProcess("git", ["checkout", "-b", tempBranchName, commit], { cwd: repo });

  // Build smithy-typescript and publish to maven local
  await spawnProcess("./gradlew", ["clean", "publishToMavenLocal"], { cwd: repo });

  if (deleteSmithyTsRepo) {
    await rm(repo, { recursive: true, force: true });
  } else {
    // Delete temp branch
    await spawnProcess("git", ["checkout", "main"], { cwd: repo });
    await spawnProcess("git", ["branch", "-D", tempBranchName], { cwd: repo });
  }
};

module.exports = { buildSmithyTypeScript };
