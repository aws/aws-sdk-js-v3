#!/usr/bin/env node

import { spawnProcessReturnValue } from "../utils/spawn-process.js";

// Add independent package names here
const independentPackages = [
  // "@aws-sdk/some-independent-package"
];

for (const pkg of independentPackages) {
  try {
    const version = await spawnProcessReturnValue("npm", ["view", pkg, "version"], { returnOutput: true });
    if (version) {
      console.log(`npm dist-tag add ${pkg}@${version.trim()} latest`);
    }
  } catch (e) {
    console.log(`# ${pkg} not found in registry`);
  }
}