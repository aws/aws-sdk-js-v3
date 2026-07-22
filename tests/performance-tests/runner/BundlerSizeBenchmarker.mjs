import esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";
import webpack from "webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPLICATIONS_DIR = path.join(__dirname, "..", "applications");
const DIST_DIR = path.join(__dirname, "..", "dist-perf");

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
          optimization: {
            minimize: true,
            splitChunks: false,
            runtimeChunk: false,
            sideEffects: true,
            usedExports: true,
          },
          stats: "none",
        },
        (err, stats) => {
          if (err) return reject(err);
          if (stats?.hasErrors()) return reject(new Error(stats.toString("errors-only")));
          const totalBytes = Object.values(stats.compilation.assets).reduce((sum, a) => sum + a.size(), 0);
          resolve({ bundler: "webpack", bytes: totalBytes });
        }
      );
    });
  }

  async rollup() {
    const outfile = path.resolve(DIST_DIR, `rollup-${this.application}.js`);
    await build({
      logLevel: "silent",
      resolve: {
        conditions: ["browser", "module", "import"],
      },
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
        rollupOptions: { external: [], output: { codeSplitting: false } },
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
