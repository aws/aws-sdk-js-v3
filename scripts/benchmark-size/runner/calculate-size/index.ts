import { promises as fsPromise } from "fs";
import { join } from "path";

import { SizeReportContext } from "../index";
import { PackageContext } from "../load-test-scope";
import { getEsbuildSize, getRollupSize, getWebpackSize } from "./bundlers-size.js";
import { generateProject } from "./generate-project.js";
import { calculateNpmSize } from "./npm-size.js";

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

export const generatePackageSizeReport = async (options: PackageSizeReportOptions) => {
  const { packageName } = options;
  try {
    console.info(`[${packageName}] preparing...`);
    const projectDir = join(options.tmpDir, options.packageName.replace("/", "_"));
    await fsPromise.mkdir(projectDir);
    const entryPoint = join(projectDir, "index.js");
    const bundlersContext = { ...options, entryPoint, projectDir };

    console.info(`[${packageName}] generating project and installing dependencies`);
    await generateProject(projectDir, options);

    console.info(`[${packageName}] calculating npm size`);
    const npmSizeResult = calculateNpmSize(projectDir, options.packageName);

    const skipBundlerTests = bundlersContext.packageContext.skipBundlerTests;

    console.info(`[${packageName}] calculating webpack 5 full bundle size`);
    const webpackSize = skipBundlerTests ? undefined : await getWebpackSize(bundlersContext);

    console.info(`[${packageName}] calculating rollup full bundle size`);
    const rollupSize = skipBundlerTests ? undefined : await getRollupSize(bundlersContext);

    console.info(`[${packageName}] calculating esbuild full bundle size`);
    const esbuildSize = skipBundlerTests ? undefined : await getEsbuildSize(bundlersContext);

    console.info(`[${packageName}] output results`);
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
    e.message = `[${options.packageName}] ` + e.message;
  }
};
