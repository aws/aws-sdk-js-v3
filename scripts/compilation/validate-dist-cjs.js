#!/usr/bin/env node

/**
 * Validates that all require()/import() calls in dist-cjs files resolve successfully.
 *
 * Usage:
 *   node scripts/compilation/validate-dist-cjs.js              # all packages
 *   node scripts/compilation/validate-dist-cjs.js client-s3    # single package
 */

const fs = require("node:fs");
const path = require("node:path");
const { validateImportResolution } = require("./validate-imports");

const root = path.join(__dirname, "..", "..");
const pkg = process.argv[2];

const dirs = ["lib", "packages", "packages-internal", "clients"];

function findPackageDir(name) {
  for (const dir of dirs) {
    const candidate = path.join(root, dir, name);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function getAllPackages() {
  const packages = [];
  for (const dir of dirs) {
    const dirPath = path.join(root, dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const entry of fs.readdirSync(dirPath)) {
      const distCjs = path.join(dirPath, entry, "dist-cjs");
      if (fs.existsSync(distCjs)) {
        packages.push({ name: entry, distCjsDir: distCjs });
      }
    }
  }
  return packages;
}

(async () => {
  if (pkg) {
    const packageDir = findPackageDir(pkg);
    if (!packageDir) {
      console.error(`Package "${pkg}" not found.`);
      process.exit(1);
    }
    const distCjsDir = path.join(packageDir, "dist-cjs");
    if (!fs.existsSync(distCjsDir)) {
      console.error(`No dist-cjs directory at ${distCjsDir}`);
      process.exit(1);
    }
    await validateImportResolution(distCjsDir, { verbose: true });
    console.log(`✅ ${pkg}: all imports resolve successfully.`);
  } else {
    const packages = getAllPackages();
    console.log(`Validating ${packages.length} packages with dist-cjs...\n`);
    const failures = [];

    for (const { name, distCjsDir } of packages) {
      try {
        await validateImportResolution(distCjsDir);
      } catch (e) {
        failures.push({ name, error: e.message });
      }
    }

    if (failures.length === 0) {
      console.log(`✅ All ${packages.length} packages passed import resolution validation.`);
    } else {
      console.error(`❌ ${failures.length}/${packages.length} package(s) failed:\n`);
      for (const { name, error } of failures) {
        console.error(`--- ${name} ---`);
        console.error(error + "\n");
      }
      process.exit(1);
    }
  }
})();
