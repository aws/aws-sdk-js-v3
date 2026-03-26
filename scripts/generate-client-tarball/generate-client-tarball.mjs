#!/usr/bin/env node

/**
 * @example
 * ```
 * yarn generate:client:tarball client-dynamodb
 * ```
 *
 * The script generates a tarball containing all the client's
 * transitive dependencies (closure) into the client's folder (./clients/client-dynamodb).
 * For \@aws-sdk/* dependencies, the distribution files are replaced with the ones built
 * in the monorepo at the time of invoking the script. This ensures the build is up to date without
 * needing a release to be cut.
 */

import { execFileSync as _execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const execFileSync = (cmd, args, opts) => {
  console.log("executing:", [cmd, ...args].join(" "));
  return _execFileSync(cmd, args, opts);
};

const clientName = process.argv[2];
if (!clientName) {
  throw new Error("Usage: yarn generate:client:tarball <client-name> (e.g. client-s3)");
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");
const clientDir = join(rootDir, "clients", clientName);

const tmpDir = join(rootDir, "temp-tarball", clientName);
mkdirSync(tmpDir, { recursive: true });

const cleanup = () => {
  rmSync(tmpDir, { recursive: true, force: true });
};
process.on("exit", cleanup);

// copy the original client folder into the temp working directory.
cpSync(clientDir, tmpDir, { recursive: true });
const pkgJsonPath = join(tmpDir, "package.json");
const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));

// replace yarn workspace: dependency prefixes.
for (const deps of [pkgJson.dependencies, pkgJson.devDependencies]) {
  if (!deps) {
    continue;
  }
  for (const [name, version] of Object.entries(deps)) {
    if (String(version).startsWith("workspace:")) {
      deps[name] = version.replace("workspace:", "");
    }
  }
}

writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n");

// Copy production dependencies from root node_modules (no symlinks, no npm install).
const rootNodeModules = join(rootDir, "node_modules");
const nodeModulesDir = join(tmpDir, "node_modules");

const copied = new Set();

function copyDep(name) {
  if (copied.has(name)) return;
  copied.add(name);

  const src = join(rootNodeModules, name);
  if (!existsSync(src)) {
    throw new Error(`${name} not found in root node_modules, unable to copy to tarball workspace.`);
  }

  const dest = join(nodeModulesDir, name);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, { recursive: true, dereference: true, force: true });

  // recurse into this dependency's own production dependencies
  const depPkgPath = join(dest, "package.json");
  if (existsSync(depPkgPath)) {
    const depPkg = JSON.parse(readFileSync(depPkgPath, "utf-8"));
    for (const child of Object.keys(depPkg.dependencies || {})) {
      copyDep(child);
    }
  }
}

for (const dep of Object.keys(pkgJson.dependencies || {})) {
  copyDep(dep);
}

// overwrite the temp working directory's client node_modules with ones built in this repo workspace.
const workspaceDirs = ["clients", "lib", "packages", "packages-internal"];
const filesToCopy = ["dist-cjs", "dist-es", "dist-types", "package.json", "README.md", "LICENSE"];

const monorepoDependencies = readdirSync(join(nodeModulesDir, "@aws-sdk")).map((name) => `@aws-sdk/${name}`);

for (const dependency of monorepoDependencies) {
  const unscoped = dependency.replace("@aws-sdk/", "");
  for (const wsDir of workspaceDirs) {
    const localPkgDir = join(rootDir, wsDir, unscoped);
    if (!existsSync(localPkgDir)) {
      continue;
    }
    const targetDir = join(nodeModulesDir, dependency);
    for (const entry of filesToCopy) {
      const src = join(localPkgDir, entry);
      if (!existsSync(src)) {
        continue;
      }
      const dest = join(targetDir, entry);
      if (entry === "package.json") {
        writeFileSync(dest, readFileSync(src, "utf-8").replaceAll("workspace:", ""));
      } else {
        cpSync(src, dest, { recursive: true, force: true });
      }
    }
    console.debug(`Replaced ${dependency} for ${clientName} tarball.`);
    break;
  }
}

// tell NPM pack to include all dependencies in the tarball.
pkgJson.bundleDependencies = true;
writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n");

execFileSync("npm", ["pack", "--pack-destination", clientDir], { cwd: tmpDir, stdio: "inherit" });

// Smoke test: install the tarball in an isolated dir and verify the package can be required.
const tarballName = `${pkgJson.name.replace("@", "").replace("/", "-")}-${pkgJson.version}.tgz`;
const tarballPath = join(clientDir, tarballName);
const smokeDir = join(tmpDir, "smoke-test");
mkdirSync(smokeDir, { recursive: true });
writeFileSync(join(smokeDir, "package.json"), JSON.stringify({ private: true }));
execFileSync("npm", ["install", "--offline", tarballPath], { cwd: smokeDir, stdio: "inherit" });
writeFileSync(
  join(smokeDir, "test.mjs"),
  `import "${pkgJson.name}";\nconsole.log("smoke test passed: ${pkgJson.name}");\n`
);
execFileSync("node", ["test.mjs"], { cwd: smokeDir, stdio: "inherit" });

cleanup();
