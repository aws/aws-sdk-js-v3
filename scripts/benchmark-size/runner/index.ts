import filePlugin from "@size-limit/file";
import webpackPlugin from "@size-limit/webpack";
import exec from "execa";
import { mkdirSync, promises as fsPromise, readdirSync, readFileSync } from "fs";
import { ensureDir, ensureDirSync, rmdirSync } from "fs-extra";
import hbs from "handlebars";
import Listr from "listr";
import { tmpdir } from "os";
import { dirname, join } from "path";
import prettier from "prettier";
import sizeLimit from "size-limit";

import { calculateNpmSize } from "./npm-size";

const DEFAULT_TEST_SCOPE = join(__dirname, "..", "scope.json");
const DEFAULT_BUNDLERS_CONFIG = join(__dirname, "..", "bundlers.json");
const PROJECT_TEMPLATES_DIR = join(__dirname, "..", "bundlers", "templates");
const PROJECT_ROOT = join(__dirname, "..", "..", "..");
const OUTPUT_DIR = join(PROJECT_ROOT, "benchmark");

type PackageTestScope = {
  package: string;
  artifacts: string[] | null;
  dependencies?: { name: string; version: string }[];
} | null;

type TestScope = PackageTestScope[];

// TODO: throw when duplicate packages
const loadTestScope = (scopeConfigPath: string = DEFAULT_TEST_SCOPE): TestScope => {
  console.info(`loading test scopes from ${scopeConfigPath}`);
  const rawConfig = JSON.parse(readFileSync(scopeConfigPath, "utf8"));
  if (!Array.isArray(rawConfig)) {
    throw new Error(`test scope config is invalid, expect array`);
  }
  return (rawConfig as Array<unknown>)
    .filter((pkgScope) => (pkgScope as any).artifacts !== null)
    .map((pkgScope: Partial<PackageTestScope>) => {
      if (!Array.isArray(pkgScope.artifacts)) {
        throw new Error(`package ${pkgScope.package} scope artifacts is invalid, expect array`);
      }
      if (pkgScope.dependencies && !Array.isArray(pkgScope.dependencies)) {
        throw new Error(`package ${pkgScope.package} scope dependencies is invalid, expect array`);
      }
      return {
        package: pkgScope.package,
        artifacts: pkgScope.artifacts,
        dependencies: pkgScope.dependencies,
      };
    });
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
const localPublishChangedPackages = async (): Promise<string> => {
  console.info(`publishing locally the changed package since last release.`);
  console.info(`the package versions will be the actual version up with a patch version and preid "ci".`);
  await exec("yarn", ["local-publish"], {
    cwd: PROJECT_ROOT,
  });
  console.info(`published ${readdirSync(join(PROJECT_ROOT, "verdaccio", "storage", "@aws-sdk")).length} packages`);
  return join(PROJECT_ROOT, "verdaccio", "config.yaml");
};

type WorkspacePackages = { name: string; location: string; version: string; private: boolean }[];
const loadWorkspacePackages = async (): Promise<WorkspacePackages> => {
  const { stdout } = await exec("./node_modules/.bin/lerna", ["list", "--json"], {
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
  console.info(`found ${packages.length} packages in workspace`);
  return packages;
};

interface SizeReportContext {
  localRegistry: string;
  outputDir: string;
  tmpDir: string;
  npmCacheDir: string;
  workspacePackages: WorkspacePackages;
  templates: {
    [name: string]: hbs.TemplateDelegate;
  };
}

interface SizeReportOptions extends SizeReportContext {
  packageName: string;
  packageScope: PackageTestScope;
}

const getSizeReportRunner =
  (options: SizeReportOptions) =>
  async (context: Listr.ListrContext, task: Listr.ListrTaskWrapper<Listr.ListrTaskWrapper>) => {
    task.output = "preparing...";
    const tmpDir = join(options.tmpDir, options.packageName.replace("/", "_"));
    await fsPromise.rmdir(tmpDir, { recursive: true });
    await fsPromise.mkdir(tmpDir);

    task.output = "generating project";
    for (const [name, template] of Object.entries(options.templates)) {
      const filePath = join(tmpDir, name);
      const file = prettier.format(template(options.packageScope), {
        filepath: filePath,
      });
      await fsPromise.writeFile(filePath, file);
    }

    task.output = "installing";
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
        cwd: tmpDir,
        env: {
          npm_config_registry: options.localRegistry,
        },
      }
    );

    task.output = "npm size";
    const npmSizeResult = calculateNpmSize(tmpDir, options.packageName);

    task.output = "webpack 5 size";
    const webpackRes = await sizeLimit([filePlugin, webpackPlugin], [join(tmpDir, "index.js")]);
    const webpackSize = webpackRes[0].size;

    task.output = "output results";
    const outputPath = `${join(options.outputDir, ...options.packageName.split("/"))}.json`;
    await ensureDir(dirname(outputPath));

    const packageVersion = JSON.parse(
      readFileSync(
        join(options.workspacePackages.filter((pkg) => pkg.name === options.packageName)[0].location, "package.json"),
        "utf8"
      )
    ).version;
    fsPromise.writeFile(
      outputPath,
      JSON.stringify({
        name: options.packageName,
        version: packageVersion,
        ...npmSizeResult,
        webpackSize,
      })
    );

    task.output = "clean temp project";
    await fsPromise.rmdir(tmpDir, { recursive: true });
  };

const getSizeReportContext = async (options: { port: number }): Promise<SizeReportContext> => {
  const tmpDir = join(tmpdir(), `npm_size_${Date.now()}`);
  // const tmpDir = join(PROJECT_ROOT, "tmp");
  ensureDirSync(tmpDir);
  const cacheDir = join(tmpDir, "npm-cache");
  mkdirSync(cacheDir);
  ensureDir(OUTPUT_DIR);
  return {
    localRegistry: `http://localhost:${options.port}/`,
    tmpDir,
    outputDir: OUTPUT_DIR,
    npmCacheDir: cacheDir,
    templates: await loadProjectTemplates(),
    workspacePackages: await loadWorkspacePackages(),
  };
};

const validateRuntime = async () => {
  try {
    await exec("yarn", ["--version"]);
  } catch (e) {
    console.error("yarn is not available, please install yarn globally");
  }
};

const spawnLocalRegistry = (port: number) =>
  exec("npx", ["verdaccio", "-c", "verdaccio/config.yaml", "-l", "" + port], {
    cwd: PROJECT_ROOT,
  });

const loadProjectTemplates = async (
  projectTemplatesPath: string = PROJECT_TEMPLATES_DIR
): Promise<{
  [name: string]: hbs.TemplateDelegate;
}> => {
  const templateFiles = await fsPromise.readdir(projectTemplatesPath);
  return templateFiles.reduce(
    (acc, templateFile) => ({
      ...acc,
      [templateFile.replace(/.hbs$/g, "")]: hbs.compile(
        readFileSync(join(projectTemplatesPath, templateFile), { encoding: "utf8" })
      ),
    }),
    {}
  );
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, ms);
  });

const sizeReport = async (options?: {
  scopeConfigPath?: string;
  bundlersConfigPath?: string;
  skipLocalPublish?: boolean;
}) => {
  await validateRuntime();
  console.info("starting generating size report for changed packages");
  if (!options?.skipLocalPublish ?? false) {
    await localPublishChangedPackages();
  }
  const testScope = loadTestScope(options?.scopeConfigPath);
  loadBundlerConfigs(options?.bundlersConfigPath);
  const port = 4873;
  const localRegistryProcess = spawnLocalRegistry(port);

  // Wait for the register to spin up.
  await sleep(1000);
  const sizeReportContext = await getSizeReportContext({ port });
  const tasks = new Listr(
    testScope.map((packageScope) => ({
      title: packageScope.package,
      task: getSizeReportRunner({
        ...sizeReportContext,
        packageName: packageScope.package,
        packageScope,
      }),
    }))
  );
  try {
    await tasks.run();
  } finally {
    localRegistryProcess.kill();
    rmdirSync(sizeReportContext.tmpDir, { recursive: true });
  }
};

(async () => {
  try {
    await sizeReport({
      // skipLocalPublish: true,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
