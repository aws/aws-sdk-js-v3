import { execa as exec } from "execa";
import { readdirSync } from "fs";
import { join } from "path";

import { PROJECT_ROOT } from "./constants.js";

/**
 * Publish the changed packages locally using Verdaccio. Return the path containing
 * the Verdaccio published packages cache.
 * The published packages will be up by a patch version and with 'ci' preid. For
 * example, package version 3.30.0 will be published as 3.30.1-ci.0
 *
 * @returns path to the
 */
export const localPublishChangedPackages = async (): Promise<string> => {
  console.info(`publishing locally the changed package since last release.`);
  console.info(`the package versions will be the actual version up with a patch version and preid "ci".`);
  await exec("yarn", ["local-publish"], {
    cwd: PROJECT_ROOT,
    stdio: "inherit",
  });
  console.info(`published ${readdirSync(join(PROJECT_ROOT, "verdaccio", "storage", "@aws-sdk")).length} packages`);
  return join(PROJECT_ROOT, "verdaccio", "config.yaml");
};

export const spawnLocalRegistry = (port: number) =>
  exec("npx", ["verdaccio", "-c", "verdaccio/config.yaml", "-l", "" + port], {
    cwd: PROJECT_ROOT,
    stdio: "inherit",
  });
