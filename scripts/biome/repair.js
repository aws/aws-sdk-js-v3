const { spawnProcess } = require("../utils/spawn-process");

const path = require("node:path");
const fs = require("node:fs");

const root = path.join(__dirname, "..", "..");

/**
 * This script allows Biome CLI to run in AL2 by replacing the linux-x64
 * file with the linux-x64-musl file from GitHub.
 *
 * Except it doesn't work because it hangs indefinitely. Giving up for now.
 */
(async () => {
  const pkgJson = require(path.join(root, "package.json"));
  const biomeVersion = pkgJson.devDependencies["@biomejs/biome"];

  const localTarget = path.join(root, "node_modules", "@biomejs", "cli-linux-x64", "biome");

  if (fs.existsSync(localTarget)) {
    const download = "https://github.com/biomejs/biome/releases/download";
    const githubDistribution = `${download}/%40biomejs%2Fbiome%40${biomeVersion}/biome-linux-x64-musl`;
    console.log(`curl -L ${githubDistribution} -o ${localTarget}`);
    await spawnProcess("curl", ["-L", githubDistribution, "-o", localTarget]);
    console.log(`chmod +x ${localTarget}`);
    await spawnProcess("chmod", ["+x", localTarget]);
  } else {
    console.log("No target", localTarget);
  }

  const npxBin = path.join(root, "node_modules", ".bin", "biome");
  console.log(`chmod +x ${npxBin}`);
  await spawnProcess("chmod", ["+x", npxBin]);
})();
