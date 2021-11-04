import { spawnSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";

const DEFAULT_TEST_SCOPE = join(__dirname, "..", "scope.json");
const DEFAULT_BUNDLERS_CONFIG = join(__dirname, "..", "bundlers.json");
const PROJECT_ROOT = join(__dirname, "..", "..", "..");

type TestScope = {
  [pkg: string]: {
    artifacts: string[];
    dependencies?: string[];
  } | null;
};

const loadTestScope = (scopeConfigPath: string = DEFAULT_TEST_SCOPE): TestScope => {
  console.info(`loading test scopes from ${scopeConfigPath}`);
  const rawConfig = JSON.parse(readFileSync(scopeConfigPath, "utf8"));
  const scope: TestScope = {};
  for (const pkg of Object.keys(rawConfig)) {
    const pkgScope = rawConfig[pkg];
    if (pkgScope === null) {
      scope[pkg] = null;
    } else if (!Array.isArray(pkgScope.artifacts)) {
      throw new Error(`package ${pkg} scope artifacts is invalid, expect array`);
    } else {
      scope[pkg] = {
        artifacts: pkgScope.artifacts as string[],
        dependencies: pkgScope.dependencies,
      };
    }
  }
  return scope;
};

const loadBundlerConfigs = (bundlersConfigPath: string = DEFAULT_BUNDLERS_CONFIG) => {
  console.info(`loading bundlers configurations from ${bundlersConfigPath}`);
  //TODO
};

/**
 * Publish the changed packages locally using Verdaccio. Return the path containing
 * the Verdaccio published packages cache.
 * The published packages will be up by a patch version and with 'ci' preid. For
 * example, package version 3.30.0 will be published as 3.30.1-ci.0
 *
 * @returns path to the
 */
const localPublishChangedPackages = (): string => {
  console.info(`publishing locally the changed package since last release.`);
  console.info(`the package versions will be the actual version up with a patch version and preid "ci".`);
  const { stderr, error } = spawnSync("yarn", ["local-publish"], {
    cwd: PROJECT_ROOT,
    stdio: ["ignore", "ignore", "pipe"],
  });
  if (error) {
    console.error(stderr);
    throw error;
  }
  return join(PROJECT_ROOT, "verdaccio", "config.yaml");
};

const loadChangedPackages = (): { name: string; location: string; version: string; private: boolean }[] => {
  const { stdout } = spawnSync("./node_modules/.bin/lerna", ["list", "--json"], {
    cwd: PROJECT_ROOT,
    encoding: "utf8",
  });
  const resp = JSON.parse(stdout);
  if (!Array.isArray(resp)) {
    throw new Error("Cannot load changed packages list. Expect array");
  }
  const changedPackages = (resp as Array<unknown>).map((packageInfo) => ({
    name: packageInfo["name"] as string,
    version: packageInfo["version"] as string,
    private: Boolean(packageInfo["private"]),
    location: packageInfo["location"] as string,
  }));
  console.info(`found ${changedPackages.length} packages since last release`);
  return changedPackages;
};

const sizeReport = (options?: { scopeConfigPath?: string; bundlersConfigPath?: string }) => {
  console.info("starting generating size report for changed packages");
  // localPublishChangedPackages();
  const testScope = loadTestScope(options.scopeConfigPath);
  loadBundlerConfigs(options.bundlersConfigPath);
};

// sizeReport();
loadChangedPackages();
