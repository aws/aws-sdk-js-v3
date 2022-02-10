import { promises as fsPromise } from "fs";
import { ListrContext, ListrTaskWrapper } from "listr2";
import { join } from "path";

import { SizeReportContext } from "../index";
import { PackageContext } from "../load-test-scope";
import { getEsbuildSize, getRollupSize, getWebpackSize } from "./bundlers-size";
import { generateProject } from "./generate-project";
import { calculateNpmSize } from "./npm-size";

export interface PackageSizeReportOptions extends SizeReportContext {
  packageName: string;
  packageContext: PackageContext;
}

export interface PackageSizeReportOutput {
  name: string;
  version: string;
  installSize: number;
  publishSize: number;
  webpackSize: number | undefined;
  esbuildSize: number | undefined;
  rollupSize: number | undefined;
}

export const getPackageSizeReportRunner =
  (options: PackageSizeReportOptions) => async (context: ListrContext, task: ListrTaskWrapper<ListrContext, any>) => {
    try {
      task.output = "preparing...";
      const projectDir = join(options.tmpDir, options.packageName.replace("/", "_"));
      await fsPromise.mkdir(projectDir);
      const entryPoint = join(projectDir, "index.js");
      const bundlersContext = { ...options, entryPoint, projectDir };

      task.output = "generating project and installing dependencies";
      await generateProject(projectDir, options);

      task.output = "calculating npm size";
      const npmSizeResult = calculateNpmSize(projectDir, options.packageName);

      const skipBundlerTests = bundlersContext.packageContext.skipBundlerTests;

      task.output = "calculating webpack 5 full bundle size";
      const webpackSize = skipBundlerTests ? undefined : await getWebpackSize(bundlersContext);

      task.output = "calculating rollup full bundle size";
      const rollupSize = skipBundlerTests ? undefined : await getRollupSize(bundlersContext);

      task.output = "calculating esbuild full bundle size";
      const esbuildSize = skipBundlerTests ? undefined : await getEsbuildSize(bundlersContext);

      task.output = "output results";
      const packageVersion = JSON.parse(
        await fsPromise.readFile(
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
    } catch (e) {
      e.message = `[${options.packageName}]` + e.message;
    }
  };
