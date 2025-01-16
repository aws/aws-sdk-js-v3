const fs = require("fs");
const path = require("path");
const { spawnProcess } = require("./../utils/spawn-process");
const walk = require("./../utils/walk");
const esbuild = require("esbuild");

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
    this.isPackage = fs.existsSync(path.join(root, "packages", pkg));
    this.isLib = fs.existsSync(path.join(root, "lib", pkg));
    this.isClient = !this.isPackage && !this.isLib;
    this.submodules = ["core", "nested-clients"];
    this.hasSubmodules = this.submodules.includes(pkg);
    this.reExportStubs = false;
    this.subfolder = this.isPackage ? "packages" : this.isLib ? "lib" : "clients";
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
    await spawnProcess("yarn", ["rimraf", "./dist-cjs", "tsconfig.cjs.tsbuildinfo"], { cwd: this.packageDirectory });
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
   * step 2: detect all variant files and their transitive local imports.
   * these files will not be inlined, in order to preserve the react-native dist-cjs file replacement behavior.
   */
  async discoverVariants() {
    if (this.bailout) {
      console.log("Inliner bailout.");
      return this;
    }
    this.variantEntries = Object.entries(this.pkgJson["react-native"] ?? {});

    for await (const file of walk(path.join(this.packageDirectory, "dist-cjs"))) {
      if (file.endsWith(".js") && fs.existsSync(file.replace(/\.js$/, ".native.js"))) {
        console.log("detected undeclared auto-variant", file);
        const canonical = file.replace(/(.*?)dist-cjs\//, "./dist-cjs/").replace(/\.js$/, "");
        const variant = canonical.replace(/(.*?)(\.js)?$/, "$1.native$2");

        this.variantEntries.push([canonical, variant]);
      }
      if (fs.existsSync(file.replace(/\.js$/, ".browser.js"))) {
        // not applicable to CJS?
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

    return this;
  }

  /**
   * step 3: bundle the package index into dist-cjs/index.js except for node_modules
   * and also excluding any local files that have variants for react-native.
   */
  async bundle() {
    if (this.bailout) {
      return this;
    }

    this.variantExternalsForEsBuild = this.variantExternals.map(
      (variant) => "*/" + path.basename(variant).replace(/.js$/, "")
    );

    const buildOptions = {
      platform: this.platform,
      target: ["node18"],
      bundle: true,
      format: "cjs",
      mainFields: ["main"],
      allowOverwrite: true,
      entryPoints: [path.join(root, this.subfolder, this.package, "src", "index.ts")],
      supported: {
        "dynamic-import": false,
      },
      outfile: this.outfile,
      keepNames: true,
      packages: "external",
      external: ["@smithy/*", "@aws-sdk/*", "node_modules/*", ...this.variantExternalsForEsBuild],
    };

    if (!this.hasSubmodules) {
      await esbuild.build(buildOptions);
    }

    if (this.hasSubmodules) {
      const submodules = fs.readdirSync(path.join(root, this.subfolder, this.package, "src", "submodules"));
      for (const submodule of submodules) {
        if (
          !fs.lstatSync(path.join(root, this.subfolder, this.package, "src", "submodules", submodule)).isDirectory()
        ) {
          continue;
        }

        // remove invariant files.
        for await (const file of walk(
          path.join(root, this.subfolder, this.package, "dist-cjs", "submodules", submodule)
        )) {
          const stat = fs.lstatSync(file);
          if (this.variantExternals.find((ext) => file.endsWith(ext))) {
            continue;
          }
          if (stat.isDirectory()) {
            if (fs.readdirSync(file).length === 0) {
              fs.rmdirSync(file);
            }
          } else {
            fs.rmSync(file);
          }
        }

        await esbuild.build({
          ...buildOptions,
          entryPoints: [path.join(root, this.subfolder, this.package, "src", "submodules", submodule, "index.ts")],
          outfile: path.join(root, this.subfolder, this.package, "dist-cjs", "submodules", submodule, "index.js"),
        });
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

      const depth = relativePath.split("/").length - 1;
      const indexRelativePath =
        (depth === 0
          ? "."
          : Array.from({ length: depth })
              .map(() => "..")
              .join("/")) + "/index.js";

      if (!this.reExportStubs) {
        fs.rmSync(file);
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
   * these externalized variants use relative imports for transitive variant files
   * which need to be rewritten when in the index.js file.
   */
  async fixVariantImportPaths() {
    if (this.bailout) {
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
    this.indexContents = fixImportsForFile(this.indexContents);
    fs.writeFileSync(this.outfile, this.indexContents, "utf-8");
    if (this.hasSubmodules) {
      const submodules = fs.readdirSync(path.join(path.dirname(this.outfile), "submodules"));
      for (const submodule of submodules) {
        const submoduleIndexPath = path.join(path.dirname(this.outfile), "submodules", submodule, "index.js");
        const submoduleIndexContents = fs.readFileSync(submoduleIndexPath, "utf-8");
        fs.writeFileSync(submoduleIndexPath, fixImportsForFile(submoduleIndexContents, `/submodules/${submodule}`));
      }
    }
    return this;
  }

  /**
   * Step 5.5, dedupe imported externals.
   */
  async dedupeExternals() {
    if (this.bailout) {
      return this;
    }
    const redundantRequireStatements = this.indexContents.matchAll(
      /var import_([a-z_]+)(\d+) = require\("([@a-z\/-0-9]+)"\);/g
    );
    for (const requireStatement of redundantRequireStatements) {
      const variableSuffix = requireStatement[1];
      const packageName = requireStatement[3].replace("/", "\\/");

      const original = this.indexContents.match(
        new RegExp(`var (import_${variableSuffix}(\d+)?) = require\\(\"${packageName}\"\\);`)
      );

      if (original) {
        let redundancyIndex = 0;
        let misses = 0;
        const originalVariable = original[1];

        // perform an incremental replacement instead of a global (\d+) replacement
        // to be safe.
        while (true) {
          const redundantRequire = `var import_${variableSuffix}${redundancyIndex} = require\\("${packageName}"\\);`;
          const redundantVariable = `import_${variableSuffix}${redundancyIndex}(\\.)`;

          if (this.indexContents.match(new RegExp(redundantRequire))) {
            this.indexContents = this.indexContents
              .replace(new RegExp(redundantRequire, "g"), "")
              .replace(new RegExp(redundantVariable, "g"), `${originalVariable}$1`);
          } else if (misses++ > 10) {
            break;
          }
          redundancyIndex++;
        }
      }
    }
    fs.writeFileSync(this.outfile, this.indexContents, "utf-8");
    return this;
  }

  /**
   * Step 6: "Annotate the CommonJS export names for ESM import in node",
   * except, correctly.
   */
  async annotateCjsExportNames() {
    if (this.bailout) {
      return this;
    }
    const exportNames = Object.keys(require(this.outfile));
    /* (find and replace the following)
    0 && (module.exports = {
      ...
    });
    */
    this.indexContents = this.indexContents.replace(
      /0 && \(module\.exports = \{((.|\n)*?)\}\);/,
      `
0 && (module.exports = {
  ${exportNames.join(",\n  ")}
});
`
    );
    fs.writeFileSync(this.outfile, this.indexContents, "utf-8");
    return this;
  }

  /**
   * step 7: we validate that the index.js file has a require statement
   * for any variant files, to ensure they are not in the inlined (bundled) index.
   */
  async validate() {
    if (this.bailout) {
      return this;
    }
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

    if (this.hasSubmodules) {
      const submodules = fs.readdirSync(path.join(path.dirname(this.outfile), "submodules"));
      for (const submodule of submodules) {
        const submoduleIndexContents = fs.readFileSync(
          path.join(path.dirname(this.outfile), "submodules", submodule, "index.js"),
          "utf-8"
        );
        inspect(submoduleIndexContents);
      }
    }

    if (externalsToCheck.size) {
      throw new Error(
        "require() statements for the following variant externals: " +
          [...externalsToCheck].join(", ") +
          " were not found in the index."
      );
    }

    // check ESM compat.
    const tmpFileContents = this.canonicalExports
      .filter((sym) => !sym.includes(":"))
      .map((sym) => `import { ${sym} } from "${this.pkgJson.name}";`)
      .join("\n");
    fs.writeFileSync(path.join(__dirname, "tmp", this.package + ".mjs"), tmpFileContents, "utf-8");
    await spawnProcess("node", [path.join(__dirname, "tmp", this.package + ".mjs")]);
    if (this.verbose) {
      console.log("ESM compatibility verified.");
    }
    fs.rmSync(path.join(__dirname, "tmp", this.package + ".mjs"));

    return this;
  }
};
