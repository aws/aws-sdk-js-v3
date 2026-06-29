const fs = require("node:fs");
const path = require("node:path");
const { spawnProcess } = require("./../utils/spawn-process");
const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const { transpile } = require("./esm-to-cjs");

const root = path.join(__dirname, "..", "..");

/**
 *
 * Inline a package as one dist file.
 * Normal packages produce a single dist-cjs/index.js.
 * Submodule packages produce dist-cjs/index.js plus one
 * dist-cjs/submodules/<name>/index.js per submodule.
 *
 */
module.exports = class Inliner {
  constructor(pkg) {
    this.package = pkg;
    this.isInternalPackage = fs.existsSync(path.join(root, "packages-internal", pkg));
    this.isPackage = !this.isInternalPackage && fs.existsSync(path.join(root, "packages", pkg));
    this.isLib = fs.existsSync(path.join(root, "lib", pkg));
    this.isPrivate = fs.existsSync(path.join(root, "private", pkg));
    this.subfolder = (() => {
      if (this.isInternalPackage) return "packages-internal";
      if (this.isPackage) return "packages";
      if (this.isLib) return "lib";
      if (this.isPrivate) return "private";
      return "clients";
    })();
    this.hasSubmodules =
      fs.existsSync(path.join(root, this.subfolder, pkg, "src", "submodules")) &&
      "exports" in require(path.join(root, this.subfolder, pkg, "package.json"));
    this.verbose = process.env.DEBUG || process.argv.includes("--debug");
    this.packageDirectory = path.join(root, this.subfolder, pkg);
    this.outfile = path.join(root, this.subfolder, pkg, "dist-cjs", "index.js");
    this.pkgJson = require(path.join(root, this.subfolder, this.package, "package.json"));
    this.bailout = typeof this.pkgJson["react-native"] === "string";
  }

  /**
   * step 0: delete the dist-cjs folder.
   */
  async clean() {
    await spawnProcess("yarn", ["premove", "./dist-cjs"], { cwd: this.packageDirectory });
    if (this.verbose) {
      console.log("Deleted ./dist-cjs in " + this.package);
    }
    return this;
  }

  /**
   * step 1: bundle the package index into dist-cjs/index.js.
   * For submodule packages, also produces one index.js per submodule.
   */
  async bundle() {
    if (this.bailout) {
      console.log("Inliner bailout.");
      return this;
    }

    const entryPoint = path.join(root, this.subfolder, this.package, "dist-es", "index.js");

    const makeInputOptions = (entry) => {
      const externalityAssessments = {};
      return {
        input: [entry],
        plugins: [nodeResolve(), json()],
        onwarn(warning) {
          if (warning.code === "CIRCULAR_DEPENDENCY") {
            throw Error(warning.message);
          }
        },
        external: (id) => {
          if (undefined !== externalityAssessments[id]) {
            return externalityAssessments[id];
          }

          const relative = !!id.match(/^\.?\.?\//);
          if (!relative) {
            this.verbose && console.log("EXTERN (pkg)", id);
            return (externalityAssessments[id] = true);
          }

          if (id === entry) {
            return (externalityAssessments[id] = false);
          }

          const local =
            id.includes(`/dist-es/`) &&
            ((id.includes(`/packages/`) && !id.includes(`packages/${this.package}/`)) ||
              (id.includes(`/packages-internal/`) && !id.includes(`packages-internal/${this.package}/`)));
          if (local) {
            this.verbose && console.log("EXTERN (local)", id);
            return (externalityAssessments[id] = true);
          }

          return (externalityAssessments[id] = false);
        },
      };
    };

    const outputOptions = (dir) => ({
      dir,
      format: "es",
      preserveModules: false,
      externalLiveBindings: false,
    });

    const transpileDir = (dir) => {
      for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
          transpileDir(full);
        } else if (file.endsWith(".js")) {
          const esm = fs.readFileSync(full, "utf-8");
          fs.writeFileSync(full, transpile(esm));
        }
      }
    };

    // Bundle main index.js.
    const bundle = await rollup.rollup(makeInputOptions(entryPoint));
    await bundle.write(outputOptions(path.dirname(this.outfile)));
    await bundle.close();

    if (this.hasSubmodules) {
      const submodulesDir = path.join(root, this.subfolder, this.package, "src", "submodules");
      const submodules = fs
        .readdirSync(submodulesDir)
        .filter((d) => fs.lstatSync(path.join(submodulesDir, d)).isDirectory());

      for (const submodule of submodules) {
        const distEsSubmoduleDir = path.join(root, this.subfolder, this.package, "dist-es", "submodules", submodule);
        const submoduleOutDir = path.join(root, this.subfolder, this.package, "dist-cjs", "submodules", submodule);

        if (fs.existsSync(submoduleOutDir)) {
          fs.rmSync(submoduleOutDir, { recursive: true });
        }
        fs.mkdirSync(submoduleOutDir, { recursive: true });

        const subBundle = await rollup.rollup(makeInputOptions(path.join(distEsSubmoduleDir, "index.js")));
        await subBundle.write(outputOptions(submoduleOutDir));
        await subBundle.close();
      }
    }

    transpileDir(path.join(root, this.subfolder, this.package, "dist-cjs"));

    return this;
  }
};
