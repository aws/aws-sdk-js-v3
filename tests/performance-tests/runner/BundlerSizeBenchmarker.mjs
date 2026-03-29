import path from "node:path";
import fs from "node:fs";
import webpack from "webpack";
import { build } from "vite";
import esbuild from "esbuild";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPLICATIONS_DIR = path.resolve(__dirname, "../applications");
const DIST_DIR = path.resolve(__dirname, "../dist-perf");

export class BundlerSizeBenchmarker {
  constructor({ application }) {
    this.application = application;
  }

  async webpack() {
    const outfile = path.resolve(DIST_DIR, `webpack-${this.application}.js`);
    return new Promise((resolve, reject) => {
      webpack(
        {
          mode: "production",
          entry: path.resolve(APPLICATIONS_DIR, this.application),
          target: "web",
          output: { path: DIST_DIR, filename: path.basename(outfile), library: "dist" },
          optimization: { minimize: true, splitChunks: false, runtimeChunk: false, sideEffects: true, usedExports: true },
          stats: "none",
        },
        (err, stats) => {
          if (err) return reject(err);
          if (stats?.hasErrors()) return reject(new Error(stats.toString("errors-only")));
          resolve({ bundler: "webpack", bytes: fs.statSync(outfile).size });
        }
      );
    });
  }

  async rollup() {
    const outfile = path.resolve(DIST_DIR, `rollup-${this.application}.js`);
    await build({
      logLevel: "silent",
      build: {
        outDir: DIST_DIR,
        lib: {
          entry: path.resolve(APPLICATIONS_DIR, this.application),
          name: "dist",
          fileName: () => `rollup-${this.application}.js`,
          formats: ["es"],
        },
        minify: true,
        emptyOutDir: false,
        rollupOptions: { external: [] },
        codeSplitting: false,
      },
    });
    return { bundler: "rollup", bytes: fs.statSync(outfile).size };
  }

  async esbuild() {
    const outfile = path.resolve(DIST_DIR, `esbuild-${this.application}.js`);
    await esbuild.build({
      entryPoints: [path.resolve(APPLICATIONS_DIR, this.application)],
      platform: "browser",
      bundle: true,
      minify: true,
      mainFields: ["browser", "module", "main"],
      outfile,
      format: "esm",
      target: "es2022",
    });
    return { bundler: "esbuild", bytes: fs.statSync(outfile).size };
  }

  async all() {
    return Promise.all([this.rollup(), this.webpack(), this.esbuild()]);
  }
}
