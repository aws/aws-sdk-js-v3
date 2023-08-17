import commonjsPlugin from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import resolvePlugin from "@rollup/plugin-node-resolve";
import { build as esbuild } from "esbuild";
import fsExtra from "fs-extra";
import { join } from "path";
import { rollup } from "rollup";
import { terser as terserPlugin } from "rollup-plugin-terser";
import { promisify } from "util";
import webpack from "webpack";

import type { SizeReportContext } from "../index";

const { lstat } = fsExtra;

export interface BundlerSizeReportContext extends SizeReportContext {
  projectDir: string;
  entryPoint: string;
}

export const getWebpackSize = async (context: BundlerSizeReportContext): Promise<number> => {
  const webpackOutputDir = join(context.projectDir, "webpack-dist");
  const webpackInstance = webpack({
    entry: context.entryPoint,
    output: { path: webpackOutputDir, filename: "index.js" },
  });
  const run = promisify(webpackInstance.run);
  const webpackStats = await run.call(webpackInstance);
  if (webpackStats.hasErrors()) {
    throw new Error(webpackStats.toString());
  }
  return (await lstat(join(webpackOutputDir, "index.js"))).size;
};

export const getRollupSize = async (context: BundlerSizeReportContext): Promise<number> => {
  const rollupOutputDir = join(context.projectDir, "rollup-dist");
  const bundle = await rollup({
    input: context.entryPoint,
    treeshake: true,
    plugins: [
      resolvePlugin({
        // Unlike webpack, nodejs plugin provides built-in polyfills for "events" in packages like lib-storage
        preferBuiltins: true,
      }),
      commonjsPlugin(),
      jsonPlugin(),
      terserPlugin(),
    ],
    // Omit circular dependency warning: Circular dependency: node_modules/@aws-crypto/crc32/build/index.js ->
    // node_modules/@aws-crypto/crc32/build/aws_crc32.js -> node_modules/@aws-crypto/crc32/build/index.js
    onwarn: (warning, defaultHandler) => {
      if (warning.code !== "CIRCULAR_DEPENDENCY") {
        defaultHandler(warning);
      }
    },
  });
  await bundle.write({
    file: join(rollupOutputDir, "index.js"),
  });
  await bundle.close();
  return (await lstat(join(rollupOutputDir, "index.js"))).size;
};

export const getEsbuildSize = async (context: BundlerSizeReportContext): Promise<number> => {
  const esbuildOutputDir = join(context.projectDir, "esbuild-dist");
  await esbuild({
    entryPoints: [context.entryPoint],
    outbase: context.projectDir,
    outdir: esbuildOutputDir,
    bundle: true,
    minify: true,
    treeShaking: true,
  });
  return (await lstat(join(esbuildOutputDir, "index.js"))).size;
};
