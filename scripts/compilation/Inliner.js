const fs = require("node:fs");
const path = require("node:path");
const { spawnProcess } = require("./../utils/spawn-process");
const walk = require("./../utils/walk");
const { extractImports } = require("./../validation/validation-shared");
const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const { transpile } = require("./esm-to-cjs");

const root = path.join(__dirname, "..", "..");

/**
 *
 * Inline a package as one dist file, preserves other files as re-export stubs,
 * preserves files with react-native variants as externals.
 *
 */
module.exports = class Inliner {
  constructor(pkg) {
    this.package = pkg;
    this.platform = "node";
    this.isInternalPackage = fs.existsSync(path.join(root, "packages-internal", pkg));
    this.isPackage = !this.isInternalPackage && fs.existsSync(path.join(root, "packages", pkg));
    this.isLib = fs.existsSync(path.join(root, "lib", pkg));
    this.isPrivate = fs.existsSync(path.join(root, "private", pkg));
    this.subfolder = (() => {
      if (this.isInternalPackage) {
        return "packages-internal";
      }
      if (this.isPackage) {
        return "packages";
      }
      if (this.isLib) {
        return "lib";
      }
      if (this.isPrivate) {
        return "private";
      }
      return "clients";
    })();
    this.hasSubmodules =
      fs.existsSync(path.join(root, this.subfolder, pkg, "src", "submodules")) &&
      "exports" in require(path.join(root, this.subfolder, pkg, "package.json"));
    this.verbose = process.env.DEBUG || process.argv.includes("--debug");

    this.packageDirectory = path.join(root, this.subfolder, pkg);

    this.outfile = path.join(root, this.subfolder, pkg, "dist-cjs", "index.js");

    this.pkgJson = require(path.join(root, this.subfolder, this.package, "package.json"));
    /**
     * If the react entrypoint is another file entirely, then bail out of inlining.
     */
    this.bailout = typeof this.pkgJson["react-native"] === "string";
  }

  /**
   * step 0: delete the dist-cjs folder.
   */
  async clean() {
    await spawnProcess("yarn", ["premove", "./dist-cjs", "tsconfig.cjs.tsbuildinfo"], { cwd: this.packageDirectory });
    if (this.verbose) {
      console.log("Deleted ./dist-cjs in " + this.package);
    }
    return this;
  }

  /**
   * step 1: detect all variant files.
   * For submodule packages, we collect variant mappings per submodule to produce
   * fully-inlined browser/native bundles.
   * For non-submodule packages, we collect variant externals as before.
   *
   * Walks dist-es to discover variant files (.native.js, .browser.js).
   */
  async discoverVariants() {
    if (this.bailout) {
      console.log("Inliner bailout.");
      return this;
    }

    if (this.hasSubmodules) {
      this.variantExternals = [];
      this.variantMap = {};
      return this;
    }

    this.variantEntries = Object.entries(this.pkgJson["react-native"] ?? {}).map(([k, v]) => [
      k.replace("dist-cjs/", "dist-es/"),
      String(v).replace("dist-cjs/", "dist-es/"),
    ]);

    for await (const file of walk(path.join(this.packageDirectory, "dist-es"))) {
      if (file.endsWith(".js") && fs.existsSync(file.replace(/\.js$/, ".native.js"))) {
        console.log("detected undeclared auto-variant", file);
        const canonical = file.replace(/(.*?)dist-es\//, "./dist-es/").replace(/\.js$/, "");
        const variant = canonical.replace(/(.*?)(\.js)?$/, "$1.native$2");
        this.variantEntries.push([canonical, variant]);
      }
      if (
        file.endsWith(".js") &&
        !file.endsWith(".browser.js") &&
        fs.existsSync(file.replace(/\.js$/, ".browser.js"))
      ) {
        const canonical = file.replace(/(.*?)dist-es\//, "./dist-es/").replace(/\.js$/, "");
        const variant = canonical.replace(/(.*?)(\.js)?$/, "$1.browser$2");
        this.variantEntries.push([canonical, variant]);
      }
    }

    this.transitiveVariants = [];

    for (const [k, v] of this.variantEntries) {
      for (const variantFile of [k, String(v)]) {
        if (!variantFile.includes("dist-es/")) {
          continue;
        }
        const keyFile = path.join(
          this.packageDirectory,
          "dist-es",
          variantFile.replace(/(.*?)dist-es\//, "") + (variantFile.endsWith(".js") ? "" : ".js")
        );
        if (!fs.existsSync(keyFile)) continue;
        const keyFileContents = fs.readFileSync(keyFile, "utf-8");
        const relativeImports = extractImports(keyFileContents).filter((s) => s.startsWith("."));
        for (const dep of relativeImports) {
          const key = path.normalize(path.join(path.dirname(keyFile), dep)).replace(/(.*?)dist-es\//, "./dist-es/");
          if (this.verbose) {
            console.log("Transitive variant file:", key);
          }

          const transitiveVariant = key.replace(/(.*?)dist-es\//, "").replace(/(\.js)?$/, "");

          if (!this.transitiveVariants.includes(transitiveVariant)) {
            this.variantEntries.push([key, key]);
            this.transitiveVariants.push(transitiveVariant);
          }
        }
      }
    }

    this.variantExternals = [];
    this.variantMap = {};

    for (const [k, v] of this.variantEntries) {
      const prefix = "dist-es/";
      const keyPrefixIndex = k.indexOf(prefix);
      if (keyPrefixIndex === -1) {
        continue;
      }
      const keyRelativePath = k.slice(keyPrefixIndex + prefix.length);
      const valuePrefixIndex = String(v).indexOf(prefix);

      const addJsExtension = (file) => (file.endsWith(".js") ? file : file + ".js");

      if (valuePrefixIndex !== -1) {
        const valueRelativePath = String(v).slice(valuePrefixIndex + prefix.length);
        this.variantExternals.push(...[keyRelativePath, valueRelativePath].map(addJsExtension));
        this.variantMap[keyRelativePath] = valueRelativePath;
      } else {
        this.variantExternals.push(addJsExtension(keyRelativePath));
        this.variantMap[keyRelativePath] = v;
      }
    }

    this.variantExternals = [...new Set(this.variantExternals)];

    return this;
  }

  /**
   * step 2: bundle the package index into dist-cjs/index.js except for node_modules
   * and also excluding any local files that have variants for react-native.
   *
   * For submodule packages, produces fully-inlined bundles per submodule:
   * - index.js (node/default)
   * - index.browser.js (with browser variants resolved)
   * - index.native.js (with native variants resolved, only if native variants exist)
   */
  async bundle() {
    if (this.bailout) {
      return this;
    }

    const variantExternalsForRollup = this.variantExternals.map((variant) => variant.replace(/.js$/, ""));

    const entryPoint = path.join(root, this.subfolder, this.package, "dist-es", "index.js");

    const makeInputOptions = (entry, externals, plugins = []) => {
      const externalityAssessments = {};
      return {
        input: [entry],
        plugins: [...plugins, nodeResolve(), json()],
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

          for (const file of externals) {
            const idWithoutExtension = id.replace(/\.[tj]s$/, "");
            const idBasename = path.basename(idWithoutExtension);
            if (idBasename === path.basename(file)) {
              this.verbose && console.log("EXTERN (variant)", id);
              return (externalityAssessments[id] = true);
            }
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

    const transpileFile = (file) => {
      const esm = fs.readFileSync(file, "utf-8");
      fs.writeFileSync(file, transpile(esm));
    };

    // Bundle main index.js (no variants externalized for submodule packages).
    const mainExternals = this.hasSubmodules ? [] : variantExternalsForRollup;
    const bundle = await rollup.rollup(makeInputOptions(entryPoint, mainExternals));
    await bundle.write(outputOptions(path.dirname(this.outfile)));
    await bundle.close();
    transpileFile(this.outfile);

    if (this.hasSubmodules) {
      const submodulesDir = path.join(root, this.subfolder, this.package, "src", "submodules");
      const submodules = fs
        .readdirSync(submodulesDir)
        .filter((d) => fs.lstatSync(path.join(submodulesDir, d)).isDirectory());

      for (const submodule of submodules) {
        const distEsSubmoduleDir = path.join(root, this.subfolder, this.package, "dist-es", "submodules", submodule);
        const submoduleOutDir = path.join(root, this.subfolder, this.package, "dist-cjs", "submodules", submodule);

        // Remove all tsc-generated files in this submodule's dist-cjs folder.
        if (fs.existsSync(submoduleOutDir)) {
          fs.rmSync(submoduleOutDir, { recursive: true });
        }
        fs.mkdirSync(submoduleOutDir, { recursive: true });

        // Bundle index.js (node/default).
        const nodeBundle = await rollup.rollup(makeInputOptions(path.join(distEsSubmoduleDir, "index.js"), []));
        await nodeBundle.write(outputOptions(submoduleOutDir));
        await nodeBundle.close();
        transpileFile(path.join(submoduleOutDir, "index.js"));

        // Bundle index.browser.js if the source file exists.
        const browserEntry = path.join(distEsSubmoduleDir, "index.browser.js");
        if (fs.existsSync(browserEntry)) {
          const browserBundle = await rollup.rollup(makeInputOptions(browserEntry, []));
          await browserBundle.write({
            ...outputOptions(submoduleOutDir),
            entryFileNames: "index.browser.js",
          });
          await browserBundle.close();
          transpileFile(path.join(submoduleOutDir, "index.browser.js"));
        }

        // Bundle index.native.js if the source file exists.
        const nativeEntry = path.join(distEsSubmoduleDir, "index.native.js");
        if (fs.existsSync(nativeEntry)) {
          const nativeBundle = await rollup.rollup(makeInputOptions(nativeEntry, []));
          await nativeBundle.write({
            ...outputOptions(submoduleOutDir),
            entryFileNames: "index.native.js",
          });
          await nativeBundle.close();
          transpileFile(path.join(submoduleOutDir, "index.native.js"));
        }
      }
    }

    return this;
  }

  /**
   * step 3: transform retained variant files from dist-es to dist-cjs.
   */
  async transformVariants() {
    if (this.bailout || this.hasSubmodules) {
      return this;
    }

    const { transpile } = require("./esm-to-cjs");

    for (const variantFile of this.variantExternals) {
      const srcFile = path.join(this.packageDirectory, "dist-es", variantFile);
      if (!fs.existsSync(srcFile)) continue;

      const esmCode = fs.readFileSync(srcFile, "utf-8");
      const outFile = path.join(this.packageDirectory, "dist-cjs", variantFile);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, transpile(esmCode));

      if (this.verbose) {
        console.log("Transformed variant:", variantFile);
      }
    }

    return this;
  }

  /**
   * step 4: delete unreachable dist-cjs files that were not bundled into
   * index.js and are not variant externals or dynamic import targets.
   */
  async deleteUnreachableFiles() {
    if (this.bailout || this.hasSubmodules) {
      return this;
    }

    // Collect files that are targets of dynamic import() from variant externals.
    const dynamicImportTargets = new Set();
    for (const external of this.variantExternals) {
      const externalFile = path.join(this.packageDirectory, "dist-cjs", external);
      if (fs.existsSync(externalFile)) {
        const contents = fs.readFileSync(externalFile, "utf-8");
        for (const specifier of extractImports(contents)) {
          if (specifier.startsWith(".")) {
            const resolved = path.normalize(path.join(path.dirname(external), specifier));
            dynamicImportTargets.add(resolved.endsWith(".js") ? resolved : resolved + ".js");
          }
        }
      }
    }

    for await (const file of walk(path.join(this.packageDirectory, "dist-cjs"))) {
      const relativePath = file.replace(path.join(this.packageDirectory, "dist-cjs"), "").slice(1);

      if (relativePath.includes("submodules")) {
        continue;
      }

      if (!file.endsWith(".js")) {
        if (this.verbose) {
          console.log("Skipping", path.basename(file), "file extension is not .js.");
        }
        continue;
      }

      if (relativePath === "index.js") {
        if (this.verbose) {
          console.log("Skipping index.js");
        }
        continue;
      }

      if (this.variantExternals.find((external) => relativePath.endsWith(external))) {
        if (this.verbose) {
          console.log("Not rewriting.", relativePath, "is variant.");
        }
        continue;
      }

      if (dynamicImportTargets.has(relativePath)) {
        if (this.verbose) {
          console.log("Not rewriting.", relativePath, "is a dynamic import target.");
        }
        continue;
      }

      if (fs.readFileSync(file, "utf-8").includes(`Object.defineProperty(exports, "__esModule", { value: true });`)) {
        fs.rmSync(file);
      }
      const files = fs.readdirSync(path.dirname(file));
      if (files.length === 0) {
        fs.rmdirSync(path.dirname(file));
      }
    }

    return this;
  }

  /**
   * step 5: rewrite variant external imports to correct path.
   * For submodule packages, this is a no-op since all variants are fully inlined.
   */
  async fixVariantImportPaths() {
    if (this.bailout || this.hasSubmodules) {
      return this;
    }
    this.indexContents = fs.readFileSync(this.outfile, "utf-8");
    const fixImportsForFile = (contents, remove = "") => {
      for (const variant of Object.keys(this.variantMap)) {
        const basename = path.basename(variant).replace(/.js$/, "");
        const dirname = path.dirname(variant);

        const find = new RegExp(`require\\("\\.(.*?)/${basename}"\\)`, "g");
        const rel = path.join(dirname, basename);
        const replace = `require("${rel.startsWith(".") ? rel : "./" + rel}")`.replace(remove, "");

        contents = contents.replace(find, replace);

        if (this.verbose) {
          console.log("Replacing", find, "with", replace, "removed=", remove);
        }
      }
      return contents;
    };
    if (this.verbose) {
      console.log("Fixing imports for main file", path.dirname(this.outfile));
    }
    this.indexContents = fixImportsForFile(this.indexContents);
    fs.writeFileSync(this.outfile, this.indexContents, "utf-8");
    return this;
  }

  /**
   * step 6: validate the output.
   * Checks that variant externals are referenced in the bundled index.
   */
  async validate() {
    if (this.bailout || this.hasSubmodules) {
      return this;
    }

    this.indexContents = fs.readFileSync(this.outfile, "utf-8");

    const externalsToCheck = new Set(
      Object.keys(this.variantMap)
        .filter(
          (variant) => !this.transitiveVariants.includes(variant.replace(/\.js$/, "")) && !variant.endsWith("index")
        )
        .map((variant) => path.basename(variant).replace(/.js$/, ""))
    );

    for (const line of this.indexContents.split("\n")) {
      if (line.includes("require(")) {
        const checkOrder = [...externalsToCheck].sort().reverse();
        for (const external of checkOrder) {
          if (line.includes(external)) {
            if (this.verbose) {
              console.log("Inline index confirmed require() for variant external:", external);
            }
            externalsToCheck.delete(external);
          }
        }
      }
    }

    if (externalsToCheck.size) {
      throw new Error(
        "require() statements for the following variant externals: " +
          [...externalsToCheck].join(", ") +
          " were not found in the index."
      );
    }

    return this;
  }
};
