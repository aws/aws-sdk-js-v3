import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const clientName = process.argv[2];
if (!clientName) {
  throw new Error("Usage: yarn generate:client:tarball <client-name> (e.g. client-s3)");
}

const rootDir = join(import.meta.dirname, "..", "..");
const clientDir = join(rootDir, "clients", clientName);
const pkgJsonPath = join(clientDir, "package.json");

const curPkgJson = readFileSync(pkgJsonPath, "utf-8");
const newPkgJson = JSON.parse(curPkgJson);

// This is for removing yarn specific version numbers, like `^workspace:`
execSync("yarn update:versions:current", { cwd: rootDir, stdio: "inherit" });

// This configuration change is for yarn to install dependencies in node_modules
newPkgJson.installConfig = {
  hoistingLimits: "workspaces",
};
writeFileSync(pkgJsonPath, JSON.stringify(newPkgJson, null, 2) + "\n");
delete newPkgJson.installConfig;

try {
  // Running yarn will install dependencies in workspace `node_modules` folder.
  execSync("yarn workspaces focus --production", { cwd: clientDir, stdio: "inherit" });

  // This configuration is for npm pack to bundle dependencies.
  const nodeModulesDir = join(clientDir, "node_modules");
  newPkgJson.bundleDependencies = readdirSync(nodeModulesDir).flatMap((entry) =>
    entry.startsWith("@") ? readdirSync(join(nodeModulesDir, entry)).map((sub) => `${entry}/${sub}`) : entry
  );
  writeFileSync(pkgJsonPath, JSON.stringify(newPkgJson, null, 2) + "\n");

  // Running `npm pack` will ensure bundleDependencies are included in node_modules.
  execSync("npm pack", { cwd: clientDir, stdio: "inherit" });
} finally {
  rmSync(join(clientDir, "node_modules"), { recursive: true });
  execSync("git checkout .", { cwd: rootDir, stdio: "inherit" });
  execSync("yarn", { cwd: rootDir, stdio: "inherit" });
}
