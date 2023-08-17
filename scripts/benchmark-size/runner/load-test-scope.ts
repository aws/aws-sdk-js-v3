import { readFileSync } from "fs";

import { DEFAULT_TEST_SCOPE } from "./constants.js";
import { loadWorkspacePackages } from "./workspace.js";

export type PackageContext = {
  package: string;
  dependencies?: { name: string; version: string }[];
  skipBundlerTests?: boolean;
};

export const loadPackageContext = async (scopeConfigPath: string = DEFAULT_TEST_SCOPE): Promise<PackageContext[]> => {
  console.info(`loading test scopes from ${scopeConfigPath}`);
  const rawConfig: Array<unknown> = JSON.parse(readFileSync(scopeConfigPath, "utf8"));
  if (!Array.isArray(rawConfig)) {
    throw new Error(`test scope config is invalid, expect array`);
  }
  const scope: PackageContext[] = [];
  for (const pkgScope of rawConfig as Array<Partial<PackageContext>>) {
    if (!pkgScope.package) {
      throw new Error("'package' entry is required for each scope configuration entry");
    }
    if (pkgScope.dependencies && !Array.isArray(pkgScope.dependencies)) {
      throw new Error(`package ${pkgScope.package} scope dependencies is invalid, expect array`);
    }
    const packages = await loadWorkspacePackages({ scope: [pkgScope.package!] });
    const entryScope = packages.map((pkg) => ({
      package: pkg.name,
      dependencies: pkgScope.dependencies,
      skipBundlerTests: pkgScope.skipBundlerTests,
    }));
    scope.push(...entryScope);
  }
  // Later config entry should overwrite the previous config entry
  const packageNames: Set<string> = new Set();
  const deduplicatedScope: PackageContext[] = [];
  scope.reverse().forEach((scope) => {
    if (packageNames.has(scope.package)) {
      return;
    }
    packageNames.add(scope.package);
    deduplicatedScope.unshift(scope);
  });
  console.info(`loaded ${deduplicatedScope.length} local packages within test scope`);
  return deduplicatedScope;
};
