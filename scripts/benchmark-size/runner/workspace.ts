import exec from "execa";
import { lstatSync, readFileSync } from "fs";
import { join } from "path";

import { PROJECT_ROOT } from "./constants";

export interface WorkspacePackage {
  name: string;
  location: string;
  version: string;
  private: boolean;
}

export type SinceOption = "last_release" | "main" | "all";

/**
 * Load the workspace packages with given scopes. If option omitted, it returns
 * every package within the workspace.
 * @param options
 * @param options.scope A list of package names. The package name can be wildcards like `@aws-sdk/client-*`.
 * @param options.since Only include packages that have been changed since the specified ref. If omit, it's
 *                        the same to 'all'
 */
export const loadWorkspacePackages = async (options?: {
  scope?: string[];
  since?: SinceOption;
}): Promise<WorkspacePackage[]> => {
  const args = ["list", "--json"];
  if (options?.scope) {
    options.scope.forEach((scope) => {
      args.push(...["--scope", scope]);
    });
  }
  if (options?.since) {
    if (options.since === "all") {
      // Skip.
    } else if (options.since === "last_release") {
      args.push("--since"); // lerna defaults to last tag
    } else if (options.since === "main") {
      args.push(...["--since", "main"]);
    } else {
      throw new Error(`Invalid since option, expect last_release or main or all, got ${options.since}`);
    }
  }

  const { stdout } = await exec("./node_modules/.bin/lerna", args, {
    cwd: PROJECT_ROOT,
    encoding: "utf8",
  });
  const resp = JSON.parse(stdout);
  if (!Array.isArray(resp)) {
    throw new Error("Cannot load changed packages list. Expect array");
  }
  const packages = (resp as Array<unknown>).map((packageInfo) => ({
    name: packageInfo["name"] as string,
    version: packageInfo["version"] as string,
    private: Boolean(packageInfo["private"]),
    location: packageInfo["location"] as string,
  }));
  return packages;
};

/**
 * Validate whether given list of workspace packages are fully built and ready to be published.
 */
export const validatePackagesAlreadyBuilt = (packages: WorkspacePackage[]): void => {
  const isBuild = (packageDir: string): boolean => {
    let packageJson: { [key: string]: any };
    try {
      const packageJsonFile = join(packageDir, "package.json");
      packageJson = JSON.parse(readFileSync(packageJsonFile, { encoding: "utf8" }));
    } catch (e) {
      console.error(`Enable to read package.json file of package ${packageDir}`);
      return false;
    }
    const { main, module: mod, types } = packageJson;
    if (main && !lstatSync(join(packageDir, main)).isFile()) {
      return false;
    }
    if (mod && !lstatSync(join(packageDir, mod)).isFile()) {
      return false;
    }
    if (types && !lstatSync(join(packageDir, types)).isFile()) {
      return false;
    }
    return true;
  };

  const notBuilt = packages.filter((pkg) => !isBuild(pkg.location)).map((pkg) => pkg.name);
  if (notBuilt?.length > 0) {
    throw new Error(`Please make sure these packages are fully built: ${notBuilt.join(", ")}`);
  }
};
