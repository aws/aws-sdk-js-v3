const fs = require("node:fs");
const path = require("node:path");
const { spawnProcess } = require("./../utils/spawn-process");
const walk = require("./../utils/walk");
const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");

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
    this.reExportStubs = false;
    this.standaloneFiles = [];
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
    /**
     * Files that must remain as separate output files in dist-cjs and not bundled.
     */
    this.standaloneFiles = (this.pkgJson.standaloneFiles || []).map((f) => (f.endsWith(".js") ? f : f + ".js"));
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
   * step 1: build the default tsc dist-cjs output with dispersed files.
   * we will need the files to be in place for stubbing.
   */
  async tsc() {
    await spawnProcess("yarn", ["tsc", "-p", "tsconfig.cjs.json"], { cwd: this.packageDirectory });
    if (this.verbose) {
      console.log("Finished recompiling ./dist-cjs in " + this.package);
    }
    this.canonicalExports = Object.keys(require(this.outfile));
    return this;
  }

  /**
   * step 2: detect all variant files.
   * For submodule packages, we collect variant mappings per submodule to produce
   * fully-inlined browser/native bundles.
   * For non-submodule packages, we collect variant externals as before.
   */
  async discoverVariants() {
    if (this.bailout) {
      console.log("Inliner bailout.");
      return this;
    }

    if (this.hasSubmodules) {
      // Submodule variant indexes are source files (index.browser.ts, index.native.ts).
      // No variant externals needed.
      this.variantExternals = [];
      this.variantMap = {};
      return this;
    }

    // Non-submodule packages: original behavior.
    this.variantEntries = Object.entries(this.pkgJson["react-native"] ?? {});

    for await (const file of walk(path.join(this.packageDirectory, "dist-cjs"))) {
      if (file.endsWith(".js") && fs.existsSync(file.replace(/\.js$/, ".native.js"))) {
        console.log("detected undeclared auto-variant", file);
        const canonical = file.replace(/(.*?)dist-cjs\//, "./dist-cjs/").replace(/\.js$/, "");
        const variant = canonical.replace(/(.*?)(\.js)?$/, "$1.native$2");

        this.variantEntries.push([canonical, variant]);
      }
      if (
        file.endsWith(".js") &&
        !file.endsWith(".browser.js") &&
        fs.existsSync(file.replace(/\.js$/, ".browser.js"))
      ) {
        const canonical = file.replace(/(.*?)dist-cjs\//, "./dist-cjs/").replace(/\.js$/, "");
        const variant = canonical.replace(/(.*?)(\.js)?$/, "$1.browser$2");
        this.variantEntries.push([canonical, variant]);
      }
    }

    this.transitiveVariants = [];

    for (const [k, v] of this.variantEntries) {
      for (const variantFile of [k, String(v)]) {
        if (!variantFile.includes("dist-cjs/")) {
          continue;
        }
        const keyFile = path.join(
          this.packageDirectory,
          "dist-cjs",
          variantFile.replace(/(.*?)dist-cjs\//, "") + (variantFile.endsWith(".js") ? "" : ".js")
        );
        const keyFileContents = fs.readFileSync(keyFile, "utf-8");
        const requireStatements = keyFileContents.matchAll(/require\("(.*?)"\)/g);
        for (const requireStatement of requireStatements) {
          if (requireStatement[1]?.startsWith(".")) {
            // is relative import.
            const key = path
              .normalize(path.join(path.dirname(keyFile), requireStatement[1]))
              .replace(/(.*?)dist-cjs\//, "./dist-cjs/");
            if (this.verbose) {
              console.log("Transitive variant file:", key);
            }

            const transitiveVariant = key.replace(/(.*?)dist-cjs\//, "").replace(/(\.js)?$/, "");

            if (!this.transitiveVariants.includes(transitiveVariant)) {
              this.variantEntries.push([key, key]);
              this.transitiveVariants.push(transitiveVariant);
            }
          }
        }
      }
    }

    this.variantExternals = [];
    this.variantMap = {};

    for (const [k, v] of this.variantEntries) {
      const prefix = "dist-cjs/";
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
   * step 3: bundle the package index into dist-cjs/index.js except for node_modules
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
      format: "cjs",
      exports: "named",
      preserveModules: false,
      externalLiveBindings: false,
    });

    // Bundle main index.js (no variants externalized for submodule packages).
    const standaloneExternals = this.standaloneFiles.map((f) => f.replace(/.js$/, ""));
    const mainExternals = this.hasSubmodules ? [] : [...variantExternalsForRollup, ...standaloneExternals];
    const bundle = await rollup.rollup(makeInputOptions(entryPoint, mainExternals));
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

        // Remove all tsc-generated files in this submodule's dist-cjs folder.
        if (fs.existsSync(submoduleOutDir)) {
          fs.rmSync(submoduleOutDir, { recursive: true });
        }
        fs.mkdirSync(submoduleOutDir, { recursive: true });

        // Bundle index.js (node/default).
        const nodeBundle = await rollup.rollup(makeInputOptions(path.join(distEsSubmoduleDir, "index.js"), []));
        await nodeBundle.write(outputOptions(submoduleOutDir));
        await nodeBundle.close();

        // Bundle index.browser.js if the source file exists.
        const browserEntry = path.join(distEsSubmoduleDir, "index.browser.js");
        if (fs.existsSync(browserEntry)) {
          const browserBundle = await rollup.rollup(makeInputOptions(browserEntry, []));
          await browserBundle.write({
            ...outputOptions(submoduleOutDir),
            entryFileNames: "index.browser.js",
          });
          await browserBundle.close();
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
        }
      }
    }

    return this;
  }

  /**
   * step 4: rewrite all existing dist-cjs files except the index.js file.
   * These now become re-exports of the index to preserve deep-import behavior.
   */
  async rewriteStubs() {
    if (this.bailout || this.hasSubmodules) {
      return this;
    }

    // Collect files that are targets of dynamic import() from variant externals.
    const dynamicImportTargets = new Set();
    for (const external of this.variantExternals) {
      const externalFile = path.join(this.packageDirectory, "dist-cjs", external);
      if (fs.existsSync(externalFile)) {
        const contents = fs.readFileSync(externalFile, "utf-8");
        for (const match of contents.matchAll(/import\("(\.[^"]*?)"\)/g)) {
          const resolved = path.normalize(path.join(path.dirname(external), match[1]));
          dynamicImportTargets.add(resolved.endsWith(".js") ? resolved : resolved + ".js");
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

      if (this.standaloneFiles.find((standalone) => relativePath === standalone)) {
        if (this.verbose) {
          console.log("Not rewriting.", relativePath, "is standalone file.");
        }
        continue;
      }

      if (dynamicImportTargets.has(relativePath)) {
        if (this.verbose) {
          console.log("Not rewriting.", relativePath, "is a dynamic import target.");
        }
        continue;
      }

      const depth = relativePath.split("/").length - 1;
      const indexRelativePath =
        (depth === 0
          ? "."
          : Array.from({ length: depth })
              .map(() => "..")
              .join("/")) + "/index.js";

      if (!this.reExportStubs) {
        if (fs.readFileSync(file, "utf-8").includes(`Object.defineProperty(exports, "__esModule", { value: true });`)) {
          fs.rmSync(file);
        }
        const files = fs.readdirSync(path.dirname(file));
        if (files.length === 0) {
          fs.rmdirSync(path.dirname(file));
        }
      } else {
        fs.writeFileSync(file, `module.exports = require("${indexRelativePath}");`);
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
        const replace = `require("./${dirname}/${basename}")`.replace(remove, "");

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
   * For submodule packages, validates that each submodule index.js is requireable
   * and that variant bundles exist where expected.
   */
  async validate() {
    if (this.bailout) {
      return this;
    }

    if (this.hasSubmodules) {
      const submodulesDir = path.join(this.packageDirectory, "dist-cjs", "submodules");
      const submodules = fs.readdirSync(submodulesDir);

      for (const submodule of submodules) {
        const submoduleDir = path.join(submodulesDir, submodule);
        for (const file of fs.readdirSync(submoduleDir)) {
          if (!file.endsWith(".js")) continue;
          const filePath = path.join(submoduleDir, file);
          try {
            require(filePath);
          } catch (e) {
            console.error(`File ${filePath} has import errors.`);
            throw e;
          }
        }
      }

      // Validate main index.js is requireable.
      try {
        require(this.outfile);
      } catch (e) {
        console.error(`File ${this.outfile} has import errors.`);
        throw e;
      }

      await this.#validateImportResolution();

      return this;
    }

    // Non-submodule validation (original behavior).
    this.indexContents = fs.readFileSync(this.outfile, "utf-8");

    const externalsToCheck = new Set(
      Object.keys(this.variantMap)
        .filter((variant) => !this.transitiveVariants.includes(variant) && !variant.endsWith("index"))
        .map((variant) => path.basename(variant).replace(/.js$/, ""))
    );

    const inspect = (contents) => {
      for (const line of contents.split("\n")) {
        // we expect to see a line with require() and the variant external in it
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
    };

    inspect(this.indexContents);

    if (externalsToCheck.size) {
      throw new Error(
        "require() statements for the following variant externals: " +
          [...externalsToCheck].join(", ") +
          " were not found in the index."
      );
    }

    await this.#validateImportResolution();

    // check ESM compat.
    const tmpFileContents =
      `import assert from "node:assert";
      
      const namingExceptions = [
        "paginateOperation" // name for all paginators.
      ];
      ` +
      this.canonicalExports
        .filter((sym) => !sym.includes(":"))
        .map((sym) => {
          if (
            [
              "AWSSDKSigV4Signer", // deprecated alias for AwsSdkSigV4Signer
              "resolveAWSSDKSigV4Config", // deprecated alias for resolveAwsSdkSigV4Config
              "__Client", // base Client in SDK clients
              "$Command", // base Command in SDK clients
              "getDefaultClientConfiguration", // renamed to getDefaultExtensionConfiguration
              "generateIdempotencyToken", // sometimes called v4
              "defaultUserAgent", // renamed to createDefaultUserAgentProvider
              "getSigV4AuthPlugin", // legacy auth, getAwsAuthPlugin
              "NumberValueImpl", // name of NumberValue

              "WorkSpacesThin", // alias of WorkSpacesThinClient

              "HostResolver", // alias of NodeDnsLookupHostResolver
              "expectInt", // aliased to expectLong
              "handleFloat", // aliased to limitedParseDouble
              "limitedParseFloat", // aliased to limitedParseDouble
              "strictParseFloat", // aliased to strictParseDouble
              "strictParseInt", // aliased to strictParseLong
            ].includes(sym)
          ) {
            return `import { ${sym} } from "${this.pkgJson.name}";`;
          }
          return `import { ${sym} } from "${this.pkgJson.name}";
if (typeof ${sym} === "function") {
  if (${sym}.name !== "${sym}" && !namingExceptions.includes(${sym}.name)) {
    throw new Error(${sym}.name + " does not equal expected ${sym}.")
  }
} 
        `;
        })
        .join("\n");
    fs.writeFileSync(path.join(__dirname, "tmp", this.package + ".mjs"), tmpFileContents, "utf-8");
    await spawnProcess("node", [path.join(__dirname, "tmp", this.package + ".mjs")]);
    if (this.verbose) {
      console.log("ESM compatibility verified.");
    }
    fs.rmSync(path.join(__dirname, "tmp", this.package + ".mjs"));

    return this;
  }

  /**
   * Validates that all require() and import() calls in dist-cjs files
   * use string literals and resolve successfully from their file's directory.
   */
  async #validateImportResolution() {
    const { validateImportResolution } = require("./validate-imports");
    await validateImportResolution(path.join(this.packageDirectory, "dist-cjs"), { verbose: this.verbose });
  }
};
