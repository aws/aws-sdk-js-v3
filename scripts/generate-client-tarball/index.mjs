import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clientName = process.argv[2];
if (!clientName) {
  throw new Error("Usage: yarn generate:client:tarball <client-name> (e.g. client-s3)");
}

const clientDir = join(import.meta.dirname, "..", "..", "clients", clientName);
const pkgJsonPath = join(clientDir, "package.json");

const curPkgJson = readFileSync(pkgJsonPath, "utf-8");
const newPkgJson = JSON.parse(curPkgJson);
newPkgJson.bundleDependencies = Object.keys(newPkgJson.dependencies ?? {});
writeFileSync(pkgJsonPath, JSON.stringify(newPkgJson, null, 2) + "\n");

try {
  execSync("npm pack", { cwd: clientDir, stdio: "inherit" });
} finally {
  writeFileSync(pkgJsonPath, curPkgJson);
}
