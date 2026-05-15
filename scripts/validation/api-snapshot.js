#!/usr/bin/env node

/**
 This script uses the JSON file api-snapshot/api.json to validate that previously present symbols
 are still exported by the packages within the assessed group.

 Data may only be deleted from api.json in an intentional backwards-incompatible change.
 */

const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const updateLibDynamodb = process.argv.includes("--update-lib-dynamodb");

const root = path.join(__dirname, "..", "..");
const dataPath = path.join(root, "scripts", "validation", "api.json");
const api = require(dataPath);

api.$schema = "https://json-schema.org/draft/2020-12/schema";

const packageDirs = [
  ...fs.readdirSync(path.join(root, "packages")).map((f) => path.join(root, "packages", f)),
  ...fs.readdirSync(path.join(root, "packages-internal")).map((f) => path.join(root, "packages-internal", f)),
  ...fs.readdirSync(path.join(root, "lib")).map((f) => path.join(root, "lib", f)),
];
const errors = [];

// Collect all .d.ts entry points upfront.
const dtsEntries = []; // { dtsPath, name, version, cjsPath, exportConfig? }

for (const packageRoot of packageDirs) {
  const pkgJsonPath = path.join(packageRoot, "package.json");
  const cjsPath = path.join(packageRoot, "dist-cjs", "index.js");

  if (fs.existsSync(pkgJsonPath) && fs.existsSync(cjsPath)) {
    const packageJson = require(pkgJsonPath);
    const { name, version } = packageJson;

    const dtsPath = path.join(packageRoot, packageJson.types || "dist-types/index.d.ts");
    if (fs.existsSync(dtsPath)) {
      dtsEntries.push({ dtsPath, name, version, cjsPath });
    }

    if (packageJson.exports) {
      for (const [exportPath, exportConfig] of Object.entries(packageJson.exports)) {
        if (exportPath === "." || exportPath === "./package.json") continue;
        const subCjsPath = path.join(packageRoot, exportConfig.require || exportConfig.node);
        const subDtsPath = path.join(packageRoot, exportConfig.types || "");
        if (fs.existsSync(subCjsPath) && fs.existsSync(subDtsPath)) {
          const subName = `${name}/${exportPath.replace("./", "")}`;
          dtsEntries.push({ dtsPath: subDtsPath, name: subName, version, cjsPath: subCjsPath });
        }
      }
    }
  }
}

// Create a single TypeScript program with all entry points.
const submodulePaths = {};

// @smithy/core submodules (from node_modules, special case)
const smithyCoreDir = path.join("node_modules", "@smithy", "core");
const smithyCoreSubmodules = path.join(root, smithyCoreDir, "dist-types", "submodules");
if (fs.existsSync(smithyCoreSubmodules)) {
  for (const entry of fs.readdirSync(smithyCoreSubmodules, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      submodulePaths[`@smithy/core/${entry.name}`] = [
        `${smithyCoreDir}/dist-types/submodules/${entry.name}/index.d.ts`,
      ];
    }
  }
}

// Discover @aws-sdk submodule packages dynamically.
for (const folder of ["packages", "packages-internal"]) {
  const folderPath = path.join(root, folder);
  for (const pkg of fs.readdirSync(folderPath)) {
    const pkgDir = path.join(folderPath, pkg);
    if (!fs.existsSync(path.join(pkgDir, "src", "submodules"))) continue;
    try {
      const pkgJson = require(path.join(pkgDir, "package.json"));
      if (!pkgJson.exports) continue;
    } catch {
      continue;
    }
    const submodulesDir = path.join(pkgDir, "src", "submodules");
    for (const entry of fs.readdirSync(submodulesDir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        submodulePaths[`@aws-sdk/${pkg}/${entry.name}`] = [
          `${folder}/${pkg}/dist-types/submodules/${entry.name}/index.d.ts`,
        ];
      }
    }
  }
}

const allDtsPaths = dtsEntries.map((e) => e.dtsPath);
const program = ts.createProgram(allDtsPaths, {
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  baseUrl: root,
  paths: {
    ...submodulePaths,
    "@smithy/*": ["node_modules/@smithy/*/dist-types"],
    "@aws-sdk/*": ["packages/*/dist-types", "packages-internal/*/dist-types"],
  },
});
const checker = program.getTypeChecker();

/**
 * Extract type-only exports from a .d.ts entry point using the shared program.
 */
function getTypeExports(dtsPath) {
  const typeExports = new Map();
  const sourceFile = program.getSourceFile(dtsPath);
  if (!sourceFile) return typeExports;

  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
  if (!moduleSymbol) return typeExports;

  const exports = checker.getExportsOfModule(moduleSymbol);
  for (const sym of exports) {
    let resolved = sym;
    if (resolved.flags & ts.SymbolFlags.Alias) {
      resolved = checker.getAliasedSymbol(resolved);
    }
    const flags = resolved.flags;
    const isTypeOnly =
      !!(flags & ts.SymbolFlags.Interface) ||
      !!(flags & ts.SymbolFlags.TypeAlias) ||
      (!!(flags & ts.SymbolFlags.Enum) && !(flags & ts.SymbolFlags.RegularEnum));
    if (isTypeOnly) {
      let kind = "type";
      if (flags & ts.SymbolFlags.Interface) {
        kind = "type(interface)";
      } else if (flags & ts.SymbolFlags.TypeAlias) {
        const type = checker.getDeclaredTypeOfSymbol(resolved);
        if (type.isUnion()) kind = "type(union)";
        else if (type.isIntersection()) kind = "type(intersection)";
        else if (type.flags & ts.TypeFlags.String) kind = "type(string)";
        else if (type.flags & ts.TypeFlags.Number) kind = "type(number)";
        else if (type.flags & ts.TypeFlags.Boolean) kind = "type(boolean)";
        else if (type.flags & ts.TypeFlags.Object) kind = "type(object)";
        else kind = "type(alias)";
      } else {
        kind = "type(?)";
      }
      typeExports.set(sym.getName(), kind);
    }
  }
  return typeExports;
}

// Process each entry.
for (const { dtsPath, name, version, cjsPath } of dtsEntries) {
  const module = require(cjsPath);
  const typeExports = getTypeExports(dtsPath);
  checkModule(name, version, module, typeExports);
}

function checkModule(name, version, module, typeExports) {
  for (const key of Object.keys(module)) {
    if (module[key] === undefined) {
      console.warn(`symbol ${key} in ${name}@${version} has a value of undefined.`);
    }
  }

  // Merge runtime keys and type-only keys into a combined snapshot.
  const allSymbols = new Set([...Object.keys(module), ...typeExports.keys()]);

  if (!api[name]) {
    api[name] = {};
    for (const key of allSymbols) {
      api[name][key] = key in module ? typeof module[key] : typeExports.get(key);
    }
  } else {
    for (const symbol of [...new Set([...Object.keys(api[name]), ...allSymbols])]) {
      const inRuntime = symbol in module;
      const inTypes = typeExports.has(symbol);
      const inSnapshot = symbol in api[name];
      const inCurrent = inRuntime || inTypes;

      if (inCurrent && !inSnapshot) {
        const kind = inRuntime ? typeof module[symbol] : typeExports.get(symbol);
        if (name === "@aws-sdk/lib-dynamodb" && !updateLibDynamodb) {
          console.warn(
            `⚠️  New symbol ${symbol} (${kind}) found in ${name} but not added to api snapshot. Run with --update-lib-dynamodb to update.`
          );
        } else {
          errors.push(`You must commit changes in api.json adding ${symbol} (${kind}) to ${name}.`);
          api[name][symbol] = kind;
        }
      }
      if (!inCurrent && inSnapshot) {
        errors.push(`Symbol [${symbol}] is missing from ${name}, (${api[name][symbol]}).`);
      }
      if (inCurrent && inSnapshot) {
        const expectedKind = api[name][symbol];
        const actualKind = inRuntime ? typeof module[symbol] : typeExports.get(symbol);
        const baseExpectedKind = expectedKind.replace("(node-only)", "");
        if (baseExpectedKind !== actualKind) {
          errors.push(
            `Symbol [${symbol}] has a different type than expected in ${name}, actual=${actualKind} expected=${expectedKind}.`
          );
        }
      }
    }
  }
}

// Validate submodule variant indexes export the same symbols as the node canonical.
const coreDir = path.join(root, "packages-internal", "core");
const coreSubmodulesDir = path.join(coreDir, "src", "submodules");

// Create separate TS programs for browser and native variant type checking.
function createVariantProgram(variant) {
  const variantDtsPaths = [];
  for (const dir of fs.readdirSync(coreSubmodulesDir, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const variantDts = path.join(coreDir, "dist-types", "submodules", dir.name, `index.${variant}.d.ts`);
    const nodeDts = path.join(coreDir, "dist-types", "submodules", dir.name, "index.d.ts");
    variantDtsPaths.push(fs.existsSync(variantDts) ? variantDts : nodeDts);
  }
  return ts.createProgram(variantDtsPaths, {
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    baseUrl: root,
    paths: {
      ...submodulePaths,
      "@smithy/*": ["node_modules/@smithy/*/dist-types"],
      "@aws-sdk/*": ["packages/*/dist-types", "packages-internal/*/dist-types"],
    },
  });
}

const variantPrograms = {
  browser: createVariantProgram("browser"),
  native: createVariantProgram("native"),
};

for (const dir of fs.readdirSync(coreSubmodulesDir, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const sub = dir.name;
  const nodeIndex = path.join(coreDir, "dist-cjs", "submodules", sub, "index.js");
  if (!fs.existsSync(nodeIndex)) continue;

  const nodeModule = require(nodeIndex);
  const snapshotName = `@aws-sdk/core/${sub}`;
  const nodeTypeExports = getTypeExports(path.join(coreDir, "dist-types", "submodules", sub, "index.d.ts"));

  for (const variant of ["browser", "native"]) {
    const variantIndex = path.join(coreDir, "dist-cjs", "submodules", sub, `index.${variant}.js`);
    if (!fs.existsSync(variantIndex)) continue;

    const variantModule = require(variantIndex);

    // Check runtime exports match 1:1.
    for (const key of Object.keys(nodeModule)) {
      if (!(key in variantModule)) {
        errors.push(`Symbol [${key}] is missing from ${snapshotName} index.${variant}.js`);
      }
    }
    for (const key of Object.keys(variantModule)) {
      if (!(key in nodeModule)) {
        errors.push(`Symbol [${key}] in ${snapshotName} index.${variant}.js is not in the node index`);
      }
    }

    // Check type exports match 1:1.
    const variantDts = path.join(coreDir, "dist-types", "submodules", sub, `index.${variant}.d.ts`);
    if (fs.existsSync(variantDts)) {
      const variantChecker = variantPrograms[variant].getTypeChecker();
      const variantSourceFile = variantPrograms[variant].getSourceFile(variantDts);
      if (variantSourceFile) {
        const variantModuleSymbol = variantChecker.getSymbolAtLocation(variantSourceFile);
        const variantTypeNames = new Set(
          variantModuleSymbol ? variantChecker.getExportsOfModule(variantModuleSymbol).map((s) => s.getName()) : []
        );
        for (const [typeName] of nodeTypeExports) {
          if (!variantTypeNames.has(typeName)) {
            errors.push(`Type [${typeName}] is missing from ${snapshotName} index.${variant}.d.ts`);
          }
        }
        for (const typeName of variantTypeNames) {
          if (!nodeTypeExports.has(typeName) && !(typeName in nodeModule)) {
            errors.push(`Type [${typeName}] in ${snapshotName} index.${variant}.d.ts is not in the node index`);
          }
        }
      }
    }

    // Mark node-only symbols (Symbol.for("node-only") in variant) in the snapshot.
    const nodeOnlySymbol = Symbol.for("node-only");
    for (const key of Object.keys(variantModule)) {
      if (variantModule[key] === nodeOnlySymbol && nodeModule[key] != null && api[snapshotName]) {
        const baseKind = typeof nodeModule[key];
        const nodeOnlyKind = `${baseKind}(node-only)`;
        api[snapshotName][key] = nodeOnlyKind;
      }
    }
  }
}

const sorted = Object.fromEntries(
  Object.entries(api)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => [
      k,
      typeof v === "object" && v !== null
        ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)))
        : v,
    ])
);

fs.writeFileSync(dataPath, JSON.stringify(sorted, null, 2) + "\n");

if (errors.length) {
  throw new Error(errors.join("\n"));
} else {
  console.log(`✅ API snapshot test passed.`);
}
