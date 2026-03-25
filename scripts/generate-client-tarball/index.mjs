import { execSync } from "node:child_process";
import { cpSync, existsSync, lstatSync, readFileSync, realpathSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clientName = process.argv[2];
if (!clientName) {
  throw new Error("Usage: yarn generate:client:tarball <client-name> (e.g. client-s3)");
}

const rootDir = join(import.meta.dirname, "..", "..");
const clientDir = join(rootDir, "clients", clientName);
const pkgJsonPath = join(clientDir, "package.json");

const newPkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));

// This configuration change is for yarn to install dependencies in node_modules
newPkgJson.installConfig = {
  hoistingLimits: "workspaces",
};
writeFileSync(pkgJsonPath, JSON.stringify(newPkgJson, null, 2) + "\n");
delete newPkgJson.installConfig;

try {
  // Running yarn will install dependencies in workspace `node_modules` folder.
  execSync("yarn workspaces focus --production", { cwd: clientDir, stdio: "inherit" });

  // Resolve all transitive dependencies: replace symlinks with real copies
  // and copy missing deps from monorepo root node_modules.
  const nodeModulesDir = join(clientDir, "node_modules");
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
  execSync("yarn", { cwd: rootDir, stdio: "inherit" });
  // This is for removing yarn specific version numbers, like `workspace:`
  execSync("yarn update:versions:current", { cwd: rootDir, stdio: "inherit" });
  // Start from client's own dependencies.
  const clientDeps = Object.keys(JSON.parse(readFileSync(pkgJsonPath, "utf-8")).dependencies || {});
  for (const dep of clientDeps) {
    ensureDep(dep);
  }

  // This configuration is for npm pack to bundle dependencies.
  newPkgJson.bundleDependencies = true;

  // Running `npm pack` will ensure bundleDependencies are included in node_modules.
  execSync("npm pack", { cwd: clientDir, stdio: "inherit" });
} finally {
  rmSync(join(clientDir, "node_modules"), { recursive: true });
  execSync("git checkout .", { cwd: rootDir, stdio: "inherit" });
  execSync("yarn", { cwd: rootDir, stdio: "inherit" });
}
