import exec from "execa";
import { promises as fsPromise, readFileSync } from "fs";
import { ListrContext, ListrTaskWrapper } from "listr2";
import { join } from "path";
import prettier from "prettier";

import { SizeReportContext } from "../index";
import { PackageTestScope } from "../load-test-scope";
import { getEsbuildSize, getRollupSize, getWebpackSize } from "./bundlers-size";
import { calculateNpmSize } from "./npm-size";

export interface PackageSizeReportOptions extends SizeReportContext {
  packageName: string;
  packageScope: PackageTestScope;
}

export interface PackageSizeReportOutput {
  name: string;
  version: string;
  installSize: number;
  publishSize: number;
  publishFiles: number;
  installFiles: number;
  webpackSize: number | undefined;
  esbuildSize: number | undefined;
  rollupSize: number | undefined;
}

export const getPackageSizeReportRunner =
  (options: PackageSizeReportOptions) => async (context: ListrContext, task: ListrTaskWrapper<ListrContext, any>) => {
    task.output = "preparing...";
    const projectDir = join(options.tmpDir, options.packageName.replace("/", "_"));
    await fsPromise.rmdir(projectDir, { recursive: true });
    await fsPromise.mkdir(projectDir);
    const entryPoint = join(projectDir, "index.js");
    const bundlersContext = { ...options, entryPoint, projectDir };

    task.output = "generating project";
    for (const [name, template] of Object.entries(options.templates)) {
      const filePath = join(projectDir, name);
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
        cwd: projectDir,
        env: {
          npm_config_registry: options.localRegistry,
        },
      }
    );

    task.output = "calculating npm size";
    const npmSizeResult = calculateNpmSize(projectDir, options.packageName);

    const skipBundlerTests = bundlersContext.packageScope.skipBundlerTests;

    task.output = "calculating webpack 5 full bundle size";
    const webpackSize = skipBundlerTests ? undefined : await getWebpackSize(bundlersContext);

    task.output = "calculating rollup full bundle size";
    const rollupSize = skipBundlerTests ? undefined : await getRollupSize(bundlersContext);

    task.output = "calculating esbuild full bundle size";
    const esbuildSize = skipBundlerTests ? undefined : await getEsbuildSize(bundlersContext);

    task.output = "output results";
    const packageVersion = JSON.parse(
      readFileSync(
        join(options.workspacePackages.filter((pkg) => pkg.name === options.packageName)[0].location, "package.json"),
        "utf8"
      )
    ).version;
    options.output.push({
      name: options.packageName,
      version: packageVersion,
      ...npmSizeResult,
      webpackSize,
      esbuildSize,
      rollupSize,
    });
  };
