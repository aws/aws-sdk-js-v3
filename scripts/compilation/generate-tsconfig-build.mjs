#!/usr/bin/env node

/**
 * Generates a single tsconfig.build.json per package that emits both
 * ES modules (dist-es/) and declarations (dist-types/) in one pass,
 * enabling TypeScript 7's `tsc --build --builders N` for parallel
 * composite project reference builds.
 *
 * Usage: node scripts/compilation/generate-tsconfig-build.mjs
 *
 * Then:  npx tsc --build tsconfig.build.json --builders 8
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../..", import.meta.url).pathname.replace(/\/$/, "");

// Directories containing packages
const PACKAGE_DIRS = ["packages", "packages-internal", "lib", "clients", "private"];

// ─── Step 1: Build a map of package name -> directory path ───────────────────

const pkgNameToDir = new Map();
const allPackageDirs = [];

for (const parentDir of PACKAGE_DIRS) {
  const absParent = join(ROOT, parentDir);
  if (!existsSync(absParent)) continue;

  for (const entry of readdirSync(absParent, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const pkgDir = join(absParent, entry.name);
    const pkgJsonPath = join(pkgDir, "package.json");
    if (!existsSync(pkgJsonPath)) continue;

    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
    if (!pkgJson.name) continue;

    // Only include packages that have both tsconfig.types.json and tsconfig.es.json
    if (!existsSync(join(pkgDir, "tsconfig.types.json"))) continue;
    if (!existsSync(join(pkgDir, "tsconfig.es.json"))) continue;

    pkgNameToDir.set(pkgJson.name, pkgDir);
    allPackageDirs.push(pkgDir);
  }
}

console.log(`Found ${allPackageDirs.length} packages`);

// ─── Step 2: Generate tsconfig.build.json for each package ───────────────────

let generated = 0;

for (const pkgDir of allPackageDirs) {
  const pkgJson = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));
  const typesConfig = JSON.parse(readFileSync(join(pkgDir, "tsconfig.types.json"), "utf8"));
  const esConfig = JSON.parse(readFileSync(join(pkgDir, "tsconfig.es.json"), "utf8"));

  // Resolve workspace deps + peers as project references
  const deps = { ...(pkgJson.dependencies || {}), ...(pkgJson.peerDependencies || {}) };
  const references = [];

  for (const [depName, depVersion] of Object.entries(deps)) {
    if (!depVersion.startsWith("workspace:")) continue;
    const depDir = pkgNameToDir.get(depName);
    if (!depDir) continue;
    const relPath = relative(pkgDir, depDir).replace(/\\/g, "/");
    references.push({ path: `${relPath}/tsconfig.build.json` });
  }

  // Use the ES config's extends as the base (it has module/moduleResolution for ESM output)
  const extendsValue = esConfig.extends || "../../tsconfig.es.json";

  // Compute a unique buildinfo filename based on the package's relative path
  const relPkgPath = relative(ROOT, pkgDir).replace(/\//g, "--");
  const relToRoot = relative(pkgDir, ROOT).replace(/\\/g, "/");

  const compilerOptions = {
    composite: true,
    outDir: "dist-es",
    rootDir: "src",
    declaration: true,
    declarationDir: "dist-types",
    tsBuildInfoFile: `${relToRoot}/.tsbuildinfo/${relPkgPath}.tsbuildinfo`,
  };

  // Merge paths from either config (types config tends to have more)
  const paths = {
    ...(esConfig.compilerOptions?.paths || {}),
    ...(typesConfig.compilerOptions?.paths || {}),
  };
  if (Object.keys(paths).length > 0) {
    compilerOptions.paths = paths;
  }

  // Merge lib overrides
  if (esConfig.compilerOptions?.lib) {
    compilerOptions.lib = esConfig.compilerOptions.lib;
  } else if (typesConfig.compilerOptions?.lib) {
    compilerOptions.lib = typesConfig.compilerOptions.lib;
  }

  // For clients that extend ./tsconfig, set the full ES + types options
  if (extendsValue === "./tsconfig") {
    compilerOptions.lib = compilerOptions.lib || ["dom"];
    compilerOptions.module = "esnext";
    compilerOptions.moduleResolution = "bundler";
    compilerOptions.removeComments = false;
    compilerOptions.strict = true;
    compilerOptions.isolatedModules = true;
  }

  // Build the config object
  const buildConfig = {
    extends: extendsValue,
    compilerOptions,
    include: esConfig.include || typesConfig.include || ["src/"],
  };

  // Exclude spec + fixture files
  const excludeSet = new Set(["src/**/*.spec.ts"]);
  for (const cfg of [typesConfig, esConfig]) {
    if (cfg.exclude) {
      for (const pattern of cfg.exclude) {
        excludeSet.add(pattern);
      }
    }
  }
  buildConfig.exclude = [...excludeSet];

  if (references.length > 0) {
    buildConfig.references = references;
  }

  writeFileSync(join(pkgDir, "tsconfig.build.json"), JSON.stringify(buildConfig, null, 2) + "\n");
  generated++;
}

console.log(`Generated ${generated} tsconfig.build.json files`);

// ─── Step 3: Generate root tsconfig.build.json ───────────────────────────────

const rootReferences = allPackageDirs.map((dir) => {
  const relPath = relative(ROOT, dir).replace(/\\/g, "/");
  return { path: `${relPath}/tsconfig.build.json` };
});

writeFileSync(
  join(ROOT, "tsconfig.build.json"),
  JSON.stringify({ files: [], references: rootReferences }, null, 2) + "\n"
);
console.log(`Generated root tsconfig.build.json with ${rootReferences.length} references`);
