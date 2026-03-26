// This script generates a self-contained npm tarball for a given client package.
import { execFileSync, execSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const clientName = process.argv[2];
if (!clientName) {
  throw new Error("Usage: yarn generate:client:tarball <client-name> (e.g. client-s3)");
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");
const clientDir = join(rootDir, "clients", clientName);

const tmpDir = join(rootDir, "clients", `${clientName}-tarball`);
mkdirSync(tmpDir, { recursive: true });

try {
  // Copy client into temp dir, leaving the repo untouched.
  cpSync(clientDir, tmpDir, { recursive: true });
  const pkgJsonPath = join(tmpDir, "package.json");
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));

  // Rename to avoid duplicate workspace name conflict.
  pkgJson.name = `${pkgJson.name}-tarball`;

  // Strip workspace: prefix from deps in the temp copy.
  for (const deps of [pkgJson.dependencies, pkgJson.devDependencies]) {
    if (!deps) continue;
    for (const [name, version] of Object.entries(deps)) {
      if (String(version).startsWith("workspace:")) {
        deps[name] = version.replace("workspace:", "");
      }
    }
  }

  // This configuration change is for yarn to install dependencies in node_modules.
  pkgJson.installConfig = { hoistingLimits: "workspaces" };
  writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n");

  // Running yarn will install dependencies in workspace `node_modules` folder.
  execSync("yarn workspaces focus --production", { cwd: tmpDir, stdio: "inherit" });

  // Resolve all transitive dependencies: replace symlinks with real copies
  // and copy missing deps from monorepo root node_modules.
  const nodeModulesDir = join(tmpDir, "node_modules");
  const rootNodeModules = join(rootDir, "node_modules");
  const visited = new Set();
  const ensureDep = (depName) => {
    if (visited.has(depName)) return;
    visited.add(depName);
    const localPath = join(nodeModulesDir, depName);
    let isSymlink = false;
    try {
      isSymlink = lstatSync(localPath).isSymbolicLink();
    } catch {}
    if (isSymlink) {
      // Replace symlink with real copy to include it in npm pack.
      const realPath = realpathSync(localPath);
      unlinkSync(localPath);
      cpSync(realPath, localPath, { recursive: true, dereference: true });
    } else if (!existsSync(localPath)) {
      // Copy missing transitive dep from monorepo root.
      const rootPath = join(rootNodeModules, depName);
      if (existsSync(rootPath)) {
        cpSync(rootPath, localPath, { recursive: true, dereference: true });
      }
    }
    // Recurse into this dep's dependencies.
    const pjPath = join(localPath, "package.json");
    if (existsSync(pjPath)) {
      const deps = Object.keys(JSON.parse(readFileSync(pjPath, "utf-8")).dependencies || {});
      for (const dep of deps) {
        ensureDep(dep);
      }
    }
  };

  // Start from client's own dependencies.
  const clientDeps = Object.keys(pkgJson.dependencies ?? {});
  for (const dep of clientDeps) {
    ensureDep(dep);
  }

  // This configuration is for npm pack to bundle dependencies.
  pkgJson.bundleDependencies = true;
  writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n");

  // Running `npm pack` will ensure bundleDependencies are included in node_modules.
  // Move the tarball to the original client directory.
  execFileSync("npm", ["pack", "--pack-destination", clientDir], { cwd: tmpDir, stdio: "inherit" });
} finally {
  // Clean up the temp directory
  rmSync(tmpDir, { recursive: true, force: true });
}
