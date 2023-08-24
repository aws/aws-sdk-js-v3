// @ts-check
const { access } = require("fs/promises");
const { spawnProcess } = require("../utils/spawn-process");

const buildSmithyTypeScript = async (repo, commit) => {
  // Check out smithy-typescript at repo, if it does not exist.
  try {
    await access(repo);
  } catch (error) {
    await spawnProcess("git", ["clone", "https://github.com/awslabs/smithy-typescript.git", repo]);
  }

  // Checkout commit
  const tempBranchName = `temp-${commit}`;
  await spawnProcess("git", ["checkout", "-b", tempBranchName, commit], { cwd: repo });

  // Build smithy-typescript and publish to maven local
  await spawnProcess("./gradlew", ["clean", "publishToMavenLocal"], { cwd: repo });

  // Delete temp branch
  await spawnProcess("git", ["checkout", "main"], { cwd: repo });
  await spawnProcess("git", ["branch", "-D", tempBranchName], { cwd: repo });
};

module.exports = { buildSmithyTypeScript };
