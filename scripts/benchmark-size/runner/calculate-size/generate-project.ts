import { execa as exec } from "execa";
import { promises as fsPromise } from "fs";
import { join } from "path";

import { PackageContext } from "../load-test-scope";
import type { PackageSizeReportOptions } from "./index";

export const generateProject = async (projectDir: string, options: PackageSizeReportOptions) => {
  const peerDependencies = await getPeerDependencies(options);
  const contextWithPeerDep: PackageContext = {
    ...options.packageContext,
    dependencies: [...peerDependencies, ...(options.packageContext?.dependencies ?? [])],
  };
  for (const [name, template] of Object.entries(options.templates)) {
    const filePath = join(projectDir, name);
    const { formatCode } = await import("../../../biome/biome.mjs");
    const file = await formatCode(template(contextWithPeerDep), filePath);

    await fsPromise.writeFile(filePath, file);
  }

  await exec(
    "npm",
    [
      "install",
      "--cache",
      options.npmCacheDir,
      "--no-audit",
      "--no-update-notifier",
      "--no-package-lock",
      "--no-progress",
      "--production",
      "--silent",
    ],
    {
      cwd: projectDir,
      env: {
        npm_config_registry: options.localRegistry,
      },
    }
  );
};

type PeerDependencies = { name: string; version: string }[];

/**
 * Reads the peer dependencies from the package.json. These dependencies will be added to the
 * generated project's dependencies.
 */
const getPeerDependencies = async (options: PackageSizeReportOptions): Promise<PeerDependencies> => {
  // console.error("||||||||NAME: ", options.packageName);
  const packageInfo = options.workspacePackages.find((pkg) => pkg.name === options.packageName);
  if (!packageInfo) {
    throw new Error(`Cannot find package ${options.packageName} from the workspace`);
  }
  const packageJsonPath = join(packageInfo.location, "package.json");
  let peerDependencies: PeerDependencies;
  try {
    peerDependencies = JSON.parse(await fsPromise.readFile(packageJsonPath, "utf-8"))["peerDependencies"] ?? {};
  } catch (e) {
    throw new Error(`Cannot load the package.json file from ${packageJsonPath}`);
  }
  // Change the peer dependencies' version to "ci", referring to the current local package.
  // console.error("|||||PD: ", peerDependencies);
  // console.error("|||||PI: ", packageInfo);
  return Object.entries(peerDependencies).map(([key]) => ({ name: key, version: "ci" }));
};
