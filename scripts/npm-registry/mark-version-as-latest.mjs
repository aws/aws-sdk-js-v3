#!/usr/bin/env node

/**
 * This script will output commands to set a target version as "latest" on the NPM public registry.
 *
 * The canonical list of packages will be generated from this repository's current state (lib/packages/clients),
 * so anything missing from this workspace will not be considered.
 */
//

import { fileURLToPath } from "node:url";
import fs from "fs";
import path, { dirname } from "path";
import readline from "readline";
import { listFolders } from "../utils/list-folders.js";
import { spawnProcessReturnValue } from "../utils/spawn-process.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question + "\n", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

const root = path.join(__dirname, "..", "..");

const packages = [];

function recordPackages(dir) {
  const packageFolders = listFolders(dir);
  for (const packageFolder of packageFolders) {
    const pkgJson = JSON.parse(fs.readFileSync(path.join(dir, packageFolder, "package.json"), "utf-8"));
    packages.push(pkgJson.name);
  }
}

recordPackages(path.join(root, "lib"));
recordPackages(path.join(root, "packages"));
recordPackages(path.join(root, "clients"));

const targetVersion = await ask("What is the version that should become [latest] (e.g. 3.512.0 no v-prefix)?");

for (const pkg of packages) {
  try {
    const viewVersion = await spawnProcessReturnValue("npm", ["view", `${pkg}@<=${targetVersion}`, "version"], {
      returnOutput: true,
    });
    if (viewVersion) {
      const lines = viewVersion.split("\n").filter((s) => !!s.trim());
      const versionMatch = lines[lines.length - 1].match(/'(.*?)'/);
      if (versionMatch?.[1]) {
        // this indicates multiple versions matching.
        const latestBeforeTargetVersion = versionMatch[1];
        console.log(`npm dist-tag add ${pkg}@${latestBeforeTargetVersion} latest`);
      } else {
        // this indicates a single version matching.
        console.log(`npm dist-tag add ${pkg}@${lines} latest`);
      }
    }
  } catch (e) {
    if (e.toString().includes("is not in this registry.")) {
      console.log(`# ${pkg} does not exist at or below ${targetVersion}.`);
    } else {
      throw e;
    }
  }
}
