import { appendFileSync, mkdirSync, promises as fsPromise, readFileSync, rmdirSync } from "fs";
import { ensureDirSync, ensureFile } from "fs-extra";
import hbs from "handlebars";
import { tmpdir } from "os";
import map from "p-map";
import { join } from "path";

import { generatePackageSizeReport, PackageSizeReportOutput } from "./calculate-size/index.js";
import {
  DEFAULT_LIMIT_CONFIG_PATH,
  DEFAULT_RAW_OUTPUT_PATH,
  DEFAULT_REPORT_PATH,
  PORT,
  PROJECT_TEMPLATES_DIR,
} from "./constants.js";
import { loadPackageContext } from "./load-test-scope.js";
import { localPublishChangedPackages, spawnLocalRegistry } from "./local-registry.js";
import { updateReport } from "./reporter/index.js";
import { sleep, validateRuntime } from "./utils.js";
import { loadWorkspacePackages, SinceOption, validatePackagesAlreadyBuilt, WorkspacePackage } from "./workspace.js";

export interface SizeReportContext {
  localRegistry: string;
  output: PackageSizeReportOutput[];
  tmpDir: string;
  npmCacheDir: string;
  workspacePackages: WorkspacePackage[];
  templates: {
    [name: string]: hbs.TemplateDelegate;
  };
}

const getSizeReportContext = async (options: { port: number }): Promise<SizeReportContext> => {
  const tmpDir = join(tmpdir(), `npm_size_${Date.now()}`);
  ensureDirSync(tmpDir);
  const cacheDir = join(tmpDir, "npm-cache");
  mkdirSync(cacheDir);
  return {
    localRegistry: `http://localhost:${options.port}/`,
    tmpDir,
    output: [],
    npmCacheDir: cacheDir,
    templates: await loadProjectTemplates(),
    workspacePackages: await loadWorkspacePackages(),
  };
};

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

export interface SizeReportOptions {
  since?: SinceOption;
  scopeConfigPath?: string;
  skipLocalPublish?: boolean;
  rawOutputPath?: string;
  skipRawOutput?: boolean;
  reportPath?: string;
  limitConfigPath?: string;
}

export const sizeReport = async (options: SizeReportOptions) => {
  // Preparing the runtime.
  await validateRuntime();

  const changedPackages = await loadWorkspacePackages({ since: options.since });
  console.info("starting generating size report for changed packages");
  if (!(options?.skipLocalPublish ?? false)) {
    await validatePackagesAlreadyBuilt(changedPackages);
    await localPublishChangedPackages();
  }
  const testScope = await loadPackageContext(options?.scopeConfigPath);
  const changedPackageNames = changedPackages.map((pkg) => pkg.name);
  const packageContextToTest = testScope.filter((perTestScope) => changedPackageNames.includes(perTestScope.package));
  console.info(`Found ${packageContextToTest.length} packages in the defined scope have size test scope.`);
  const localRegistryProcess = spawnLocalRegistry(PORT);

  // Wait for the register to spin up.
  await sleep(1000);
  const sizeReportContext = await getSizeReportContext({ port: PORT });
  try {
    await map(
      packageContextToTest,
      async (packageContext) => {
        await generatePackageSizeReport({
          ...sizeReportContext,
          packageName: packageContext.package,
          packageContext,
        });
      },
      { concurrency: 10 }
    );
  } finally {
    localRegistryProcess.kill();
    rmdirSync(sizeReportContext.tmpDir, { recursive: true });
  }

  const { output } = sizeReportContext;
  if (!options.skipRawOutput) {
    const rawOutputPath = options?.rawOutputPath ?? DEFAULT_RAW_OUTPUT_PATH;
    await ensureFile(rawOutputPath);
    appendFileSync(rawOutputPath, output.map((report) => JSON.stringify(report) + "\n").join(""));
  }

  updateReport(output, {
    reportPath: options.reportPath ?? DEFAULT_REPORT_PATH,
    limitConfigPath: options.limitConfigPath ?? DEFAULT_LIMIT_CONFIG_PATH,
  });
};
