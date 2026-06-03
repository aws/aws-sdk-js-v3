const fs = require("node:fs");
const path = require("node:path");
const { spawnProcess } = require("./../utils/spawn-process");
const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");

const root = path.join(__dirname, "..", "..");

/**
 * Inline a package as one dist-cjs/index.js file.
 * All non-relative imports are externals.
 */
module.exports = class Inliner {
  constructor(pkg) {
    this.package = pkg;
    this.isInternalPackage = fs.existsSync(path.join(root, "packages-internal", pkg));
    this.isPackage = !this.isInternalPackage && fs.existsSync(path.join(root, "packages", pkg));
    this.isLib = fs.existsSync(path.join(root, "lib", pkg));
    this.submodulePackages = ["core", "nested-clients", "config"];
    this.hasSubmodules = this.submodulePackages.includes(pkg);
    this.subfolder = (() => {
      if (this.isInternalPackage) return "packages-internal";
      if (this.isPackage) return "packages";
      if (this.isLib) return "lib";
      return "clients";
    })();
    this.verbose = process.env.DEBUG || process.argv.includes("--debug");
    this.packageDirectory = path.join(root, this.subfolder, pkg);
    this.outfile = path.join(root, this.subfolder, pkg, "dist-cjs", "index.js");
    this.pkgJson = require(path.join(root, this.subfolder, this.package, "package.json"));
    this.bailout = typeof this.pkgJson["react-native"] === "string";
  }

  async clean() {
    await spawnProcess("yarn", ["premove", "./dist-cjs", "tsconfig.cjs.tsbuildinfo"], { cwd: this.packageDirectory });
    return this;
  }

  async tsc() {
    // No-op: tsc step removed. Rollup reads directly from dist-es.
    return this;
  }

  async discoverVariants() {
    // No-op: variant system removed.
    this.variantExternals = [];
    this.variantMap = {};
    this.transitiveVariants = [];
    return this;
  }

  async bundle() {
    if (this.bailout) return this;

    const entryPoint = path.join(root, this.subfolder, this.package, "dist-es", "index.js");

    const makeInputOptions = (entry) => {
      const externalityAssessments = {};
      return {
        input: [entry],
        plugins: [nodeResolve(), json()],
        onwarn(warning) {
          if (warning.code === "CIRCULAR_DEPENDENCY") throw Error(warning.message);
        },
        external: (id) => {
          if (externalityAssessments[id] !== undefined) return externalityAssessments[id];

          const relative = !!id.match(/^\.?\.?\//);
          if (!relative) {
            this.verbose && console.log("EXTERN (pkg)", id);
            return (externalityAssessments[id] = true);
          }

          if (id === entry) return (externalityAssessments[id] = false);

          // Treat resolved paths from other workspace packages as external.
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
      format: "cjs",
      exports: "named",
      preserveModules: false,
      externalLiveBindings: false,
    });

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

        if (fs.existsSync(submoduleOutDir)) fs.rmSync(submoduleOutDir, { recursive: true });
        fs.mkdirSync(submoduleOutDir, { recursive: true });

        const nodeBundle = await rollup.rollup(makeInputOptions(path.join(distEsSubmoduleDir, "index.js")));
        await nodeBundle.write(outputOptions(submoduleOutDir));
        await nodeBundle.close();

        const browserEntry = path.join(distEsSubmoduleDir, "index.browser.js");
        if (fs.existsSync(browserEntry)) {
          const browserBundle = await rollup.rollup(makeInputOptions(browserEntry));
          await browserBundle.write({ ...outputOptions(submoduleOutDir), entryFileNames: "index.browser.js" });
          await browserBundle.close();
        }

        const nativeEntry = path.join(distEsSubmoduleDir, "index.native.js");
        if (fs.existsSync(nativeEntry)) {
          const nativeBundle = await rollup.rollup(makeInputOptions(nativeEntry));
          await nativeBundle.write({ ...outputOptions(submoduleOutDir), entryFileNames: "index.native.js" });
          await nativeBundle.close();
        }
      }
    }

    return this;
  }

  async rewriteStubs() {
    // No-op: no stubs to rewrite without variant system.
    return this;
  }

  async fixVariantImportPaths() {
    // No-op: no variant imports to fix.
    return this;
  }

  async validate() {
    if (this.bailout) return this;

    // Validate requireable.
    try {
      require(this.outfile);
    } catch (e) {
      console.error(`File ${this.outfile} has import errors.`);
      throw e;
    }

    if (this.hasSubmodules) {
      const submodulesDir = path.join(this.packageDirectory, "dist-cjs", "submodules");
      for (const submodule of fs.readdirSync(submodulesDir)) {
        const submoduleDir = path.join(submodulesDir, submodule);
        for (const file of fs.readdirSync(submoduleDir)) {
          if (!file.endsWith(".js")) continue;
          try {
            require(path.join(submoduleDir, file));
          } catch (e) {
            console.error(`File ${path.join(submoduleDir, file)} has import errors.`);
            throw e;
          }
        }
      }
    }

    await this.#validateImportResolution();

    // ESM compat check.
    this.canonicalExports = Object.keys(require(this.outfile));
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
              "AWSSDKSigV4Signer",
              "resolveAWSSDKSigV4Config",
              "__Client",
              "$Command",
              "getDefaultClientConfiguration",
              "generateIdempotencyToken",
              "defaultUserAgent",
              "getSigV4AuthPlugin",
              "NumberValueImpl",
              "WorkSpacesThin",
              "HostResolver",
              "expectInt",
              "handleFloat",
              "limitedParseFloat",
              "strictParseFloat",
              "strictParseInt",
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
    fs.rmSync(path.join(__dirname, "tmp", this.package + ".mjs"));

    return this;
  }

  async #validateImportResolution() {
    const { validateImportResolution } = require("./validate-imports");
    await validateImportResolution(path.join(this.packageDirectory, "dist-cjs"), { verbose: this.verbose });
  }
};
