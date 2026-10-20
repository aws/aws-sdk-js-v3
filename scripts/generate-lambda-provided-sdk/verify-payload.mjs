#!/usr/bin/env node
// @ts-check
/**
 * Verification gates over the Lambda-provided-SDK payload. The assembler calls each at
 * its point in the assembly; the four that read a finished tree also run from the CLI.
 */

import { execFileSync as _execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { createRequire, isBuiltin } from "node:module";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

// Local copy: the assembler imports this module, and the echo is part of the run output.
const execFileSync = (cmd, args, opts) => {
  console.log(`executing: ${[cmd, ...args].join(" ")}`);
  return _execFileSync(cmd, args, opts);
};

/**
 * Every package directory in the tree, any depth. Symlinks skipped so the root @smithy
 * link does not duplicate every @smithy package.
 *
 * @param {string} nodeModulesDir
 * @returns {string[]}
 */
const treePackages = (nodeModulesDir) => {
  /** @type {string[]} */
  const packages = [];
  const collect = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isSymbolicLink() || !entry.isDirectory()) {
        continue;
      }
      const full = join(dir, entry.name);
      if (entry.name.startsWith("@") || entry.name === "node_modules") {
        collect(full);
        continue;
      }
      if (!existsSync(join(full, "package.json"))) {
        continue;
      }
      packages.push(full);
      const nested = join(full, "node_modules");
      if (existsSync(nested)) {
        collect(nested);
      }
    }
  };
  collect(nodeModulesDir);
  return packages;
};

/**
 * Assert every `dependencies` entry in the tree resolves inside the tree.
 *
 * Resolution stops at `outDir`: payloads are usually assembled inside this repo, and an
 * unbounded upward walk would find the repo's own node_modules and pass a broken tree.
 *
 * @param {{ outDir: string }} options
 */
export const verifyTreeComplete = ({ outDir }) => {
  const nodeModulesDir = join(outDir, "node_modules");
  const packages = treePackages(nodeModulesDir);

  /** Node's upward node_modules search, stopped at the payload root. */
  const resolves = (fromDir, name) => {
    let dir = fromDir;
    for (;;) {
      if (existsSync(join(dir, "node_modules", name, "package.json"))) {
        return true;
      }
      if (dir === outDir) {
        return false;
      }
      const parent = dirname(dir);
      if (parent === dir || !dir.startsWith(outDir)) {
        return false;
      }
      dir = parent;
    }
  };

  const missing = [];
  let edges = 0;
  for (const pkgDir of packages) {
    let manifest;
    try {
      manifest = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf-8"));
    } catch {
      continue;
    }
    for (const [dep, range] of Object.entries(manifest.dependencies ?? {})) {
      // file:/link:/git: specifiers are not resolved from node_modules.
      if (typeof range === "string" && /^(?:file|link|workspace|git|https?):/.test(range)) {
        continue;
      }
      edges += 1;
      if (!resolves(pkgDir, dep)) {
        missing.push(
          `${manifest.name}@${manifest.version} requires ${dep} (${range}), absent from the tree\n` +
            `      at ${relative(nodeModulesDir, pkgDir)}`
        );
      }
    }
  }

  if (missing.length) {
    throw new Error(
      `the assembled tree is not self-contained — ${missing.length} dependency ` +
        `${missing.length === 1 ? "edge" : "edges"} cannot resolve:\n  ` +
        missing.join("\n  ") +
        `\n\n  A require of the package named on the left will throw MODULE_NOT_FOUND for a ` +
        `customer.\n  Most likely cause: step 3 copied a package whose nested node_modules ` +
        `came along with it,\n  but only the outer package's manifest was walked, so the ` +
        `nested copy's own\n  dependencies were never collected.`
    );
  }

  console.log(`5b. tree is self-contained: ${edges} dependency edges across ${packages.length} packages`);
};

// A CJS `require()` matches only these. An entry offering only `import`/`types`/`module`/
// `browser` is not requirable, so it must not be reported as broken.
const REQUIRE_CONDITIONS = new Set(["node", "require", "default", "node-addons"]);

/**
 * Whether `require()` can reach a string target: recurse require-matched conditions and
 * fallback arrays, where any reachable element wins.
 */
const isRequireReachable = (target) => {
  if (typeof target === "string") {
    return true;
  }
  if (Array.isArray(target)) {
    return target.some(isRequireReachable);
  }
  if (target === null || typeof target !== "object") {
    return false;
  }
  return Object.entries(target).some(
    ([condition, value]) => REQUIRE_CONDITIONS.has(condition) && isRequireReachable(value)
  );
};

/**
 * Where a require of this package copy has to come from: the payload root for a
 * top-level @aws-sdk package, node_modules/@aws-sdk for a copy step 5 pushed down there.
 */
const anchorDir = (pkgDir, name) => {
  let dir = pkgDir;
  for (let up = name.split("/").length; up > 0; up -= 1) {
    dir = dirname(dir);
  }
  return dirname(dir);
};

/**
 * Every require-reachable subpath declared by an `exports` map in the tree, plus tallies
 * of what was skipped.
 *
 * @param {string} nodeModulesDir
 */
const subpathRequests = (nodeModulesDir) => {
  const requests = [];
  let patternKeys = 0;
  let unreachable = 0;

  for (const pkgDir of treePackages(nodeModulesDir)) {
    let manifest;
    try {
      manifest = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf-8"));
    } catch {
      continue;
    }
    const map = manifest.exports;
    if (!manifest.name || map === undefined || map === null) {
      continue;
    }
    // Node's sugar: a string, or an object whose keys are all conditions, is the "." entry.
    const entries =
      typeof map === "object" && !Array.isArray(map) && Object.keys(map).some((key) => key.startsWith("."))
        ? Object.entries(map)
        : [[".", map]];
    const anchor = join(anchorDir(pkgDir, manifest.name), ".subpath-check-anchor.cjs");

    for (const [key, target] of entries) {
      if (!key.startsWith(".") || key === "./package.json") {
        continue;
      }
      // `*` cannot be requested literally; a trailing `/` is a folder mapping Node 17
      // dropped. Counted so the tally is never silently zero.
      if (key.includes("*") || key.endsWith("/")) {
        patternKeys += 1;
        continue;
      }
      if (!isRequireReachable(target)) {
        unreachable += 1;
        continue;
      }
      requests.push({
        package: manifest.name,
        subpath: key,
        request: key === "." ? manifest.name : `${manifest.name}/${key.slice(2)}`,
        anchor,
      });
    }
  }

  return { requests, patternKeys, unreachable };
};

/**
 * Require every subpath an exports map declares. A file removed while the map still
 * names it passes every other gate and throws for a customer. Child process: these
 * requires pull most of the SDK into one heap.
 *
 * @param {{ outDir: string }} options
 */
export const verifySubpathExports = ({ outDir }) => {
  const nodeModulesDir = join(outDir, "node_modules");
  const { requests, patternKeys, unreachable } = subpathRequests(nodeModulesDir);
  const consumer = join(outDir, ".subpath-check.cjs");
  const reportPath = join(outDir, ".subpath-check.json");

  // realpath both sides: /home is a symlink on some hosts, and @smithy at the tree root
  // is a symlink into @aws-sdk/node_modules.
  writeFileSync(
    consumer,
    `"use strict";\n` +
      `const { createRequire } = require("node:module");\n` +
      `const { realpathSync, writeFileSync } = require("node:fs");\n` +
      `const requests = ${JSON.stringify(requests)};\n` +
      `const treeRoot = realpathSync(${JSON.stringify(nodeModulesDir)}) + require("node:path").sep;\n` +
      `const requires = new Map();\n` +
      `const failures = [];\n` +
      `for (const request of requests) {\n` +
      `  let requireFrom = requires.get(request.anchor);\n` +
      `  if (!requireFrom) {\n` +
      `    requireFrom = createRequire(request.anchor);\n` +
      `    requires.set(request.anchor, requireFrom);\n` +
      `  }\n` +
      `  try {\n` +
      `    const resolved = realpathSync(requireFrom.resolve(request.request));\n` +
      `    if (!resolved.startsWith(treeRoot)) {\n` +
      `      failures.push({ package: request.package, subpath: request.subpath,\n` +
      `        code: "RESOLVED_OUTSIDE_TREE", detail: resolved });\n` +
      `      continue;\n` +
      `    }\n` +
      `    requireFrom(request.request);\n` +
      `  } catch (error) {\n` +
      `    failures.push({ package: request.package, subpath: request.subpath,\n` +
      `      code: error.code ?? "ERROR", detail: String(error.message).split("\\n")[0] });\n` +
      `  }\n` +
      `}\n` +
      `writeFileSync(process.argv[2], JSON.stringify(failures));\n` +
      `if (failures.length) {\n` +
      `  process.exit(1);\n` +
      `}\n`
  );

  let failures;
  try {
    let childError;
    try {
      execFileSync(process.execPath, [consumer, reportPath], { stdio: "inherit" });
    } catch (error) {
      // Child exits 1 on findings; only a missing report means the gate never ran.
      childError = error;
    }
    try {
      failures = JSON.parse(readFileSync(reportPath, "utf-8"));
    } catch {
      throw new Error(`the subpath gate did not run: ${childError?.message ?? `no report at ${reportPath}`}`);
    }
  } finally {
    rmSync(consumer, { force: true });
    rmSync(reportPath, { force: true });
  }

  if (failures.length) {
    /** @type {Map<string, string[]>} */
    const byPackage = new Map();
    for (const failure of failures) {
      const lines = byPackage.get(failure.package) ?? [];
      lines.push(`  ${failure.subpath} -> ${failure.code}: ${failure.detail}`);
      byPackage.set(failure.package, lines);
    }
    throw new Error(
      `${failures.length} ${failures.length === 1 ? "subpath" : "subpaths"} across ` +
        `${byPackage.size} ${byPackage.size === 1 ? "package" : "packages"} cannot be required ` +
        `from the assembled tree:\n  ` +
        [...byPackage].map(([name, lines]) => `${name}\n  ${lines.join("\n  ")}`).join("\n  ") +
        `\n\n  A customer's require of a subpath named above throws. An exports map is a closed ` +
        `list:\n  Node resolves only the paths it names, so a file removed from the payload ` +
        `without the map\n  being pruned breaks that subpath, and a key pruned from the map ` +
        `while callers remain breaks\n  it from the other direction.`
    );
  }

  const packageCount = new Set(requests.map((request) => request.package)).size;
  console.log(
    `5c. ${requests.length} subpaths across ${packageCount} packages resolve ` +
      `(skipped ${patternKeys} pattern keys, ${unreachable} not require-reachable)`
  );
};

// `.d.ts` only, so no main entry to lose. By name rather than by content, so a trim
// that deletes a real entry still fails.
const TYPES_ONLY_PACKAGES = new Set(["@types/node", "@types/ws", "undici-types"]);

/**
 * The `"."` target of an exports map: a string, or an object with no subpath keys, is
 * itself the `"."` entry.
 */
const exportsDotTarget = (map) => {
  if (map === null || typeof map !== "object" || Array.isArray(map)) {
    return map;
  }
  return Object.keys(map).some((key) => key.startsWith(".")) ? map["."] : map;
};

/**
 * Every package whose bare name must load, plus exempt copies tallied by the rule that
 * excused them. Exemption is decided from the manifest before any require runs, so a
 * package that is not exempt can only pass by actually loading.
 *
 * @param {string} nodeModulesDir
 */
const mainEntryTargets = (nodeModulesDir) => {
  const targets = [];
  const exempt = { builtin: 0, noDot: 0, types: 0 };

  for (const pkgDir of treePackages(nodeModulesDir)) {
    let manifest;
    try {
      manifest = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf-8"));
    } catch {
      continue;
    }
    if (!manifest.name) {
      continue;
    }
    // A bare require of a core-module name can never reach a tree copy: core always wins.
    if (isBuiltin(manifest.name)) {
      exempt.builtin += 1;
      continue;
    }
    // An exports map overrides `main`, so no require-reachable "." means no main entry
    // by design; 5c covers the subpaths it does declare.
    const map = manifest.exports;
    if (map !== undefined && map !== null && !isRequireReachable(exportsDotTarget(map))) {
      exempt.noDot += 1;
      continue;
    }
    if (TYPES_ONLY_PACKAGES.has(manifest.name)) {
      exempt.types += 1;
      continue;
    }
    targets.push({
      package: manifest.name,
      version: manifest.version,
      location: relative(nodeModulesDir, pkgDir),
      request: manifest.name,
      anchor: join(anchorDir(pkgDir, manifest.name), ".main-entry-check-anchor.cjs"),
    });
  }

  return { targets, exempt };
};

/**
 * Require every package by its bare name. 5b proves dependency directories exist and 5c
 * the subpaths a map names; neither opens a package whose `main` points at a missing
 * file. Child process: this runs every package's top-level code.
 *
 * @param {{ outDir: string }} options
 */
export const verifyMainEntries = ({ outDir }) => {
  const nodeModulesDir = join(outDir, "node_modules");
  const { targets, exempt } = mainEntryTargets(nodeModulesDir);
  const consumer = join(outDir, ".main-entry-check.cjs");
  const reportPath = join(outDir, ".main-entry-check.json");

  // realpath both sides, as 5c does.
  writeFileSync(
    consumer,
    `"use strict";\n` +
      `const { createRequire } = require("node:module");\n` +
      `const { realpathSync, writeFileSync } = require("node:fs");\n` +
      `const targets = ${JSON.stringify(targets)};\n` +
      `const treeRoot = realpathSync(${JSON.stringify(nodeModulesDir)}) + require("node:path").sep;\n` +
      `const requires = new Map();\n` +
      `const failures = [];\n` +
      `for (const target of targets) {\n` +
      `  let requireFrom = requires.get(target.anchor);\n` +
      `  if (!requireFrom) {\n` +
      `    requireFrom = createRequire(target.anchor);\n` +
      `    requires.set(target.anchor, requireFrom);\n` +
      `  }\n` +
      `  try {\n` +
      `    const resolved = realpathSync(requireFrom.resolve(target.request));\n` +
      `    if (!resolved.startsWith(treeRoot)) {\n` +
      `      failures.push({ package: target.package, version: target.version,\n` +
      `        location: target.location, code: "RESOLVED_OUTSIDE_TREE", detail: resolved });\n` +
      `      continue;\n` +
      `    }\n` +
      `    requireFrom(target.request);\n` +
      `  } catch (error) {\n` +
      `    failures.push({ package: target.package, version: target.version,\n` +
      `      location: target.location, code: error.code ?? "ERROR",\n` +
      `      detail: String(error.message).split("\\n")[0] });\n` +
      `  }\n` +
      `}\n` +
      `writeFileSync(process.argv[2], JSON.stringify(failures));\n` +
      `if (failures.length) {\n` +
      `  process.exit(1);\n` +
      `}\n`
  );

  let failures;
  try {
    let childError;
    try {
      execFileSync(process.execPath, [consumer, reportPath], { stdio: "inherit" });
    } catch (error) {
      // Child exits 1 on findings; only a missing report means the gate never ran.
      childError = error;
    }
    try {
      failures = JSON.parse(readFileSync(reportPath, "utf-8"));
    } catch {
      throw new Error(`the main-entry gate did not run: ${childError?.message ?? `no report at ${reportPath}`}`);
    }
  } finally {
    rmSync(consumer, { force: true });
    rmSync(reportPath, { force: true });
  }

  if (failures.length) {
    throw new Error(
      `${failures.length} ${failures.length === 1 ? "package" : "packages"} cannot be required ` +
        `by name from the assembled tree:\n  ` +
        failures
          .map(
            (failure) =>
              `${failure.package}@${failure.version} -> ${failure.code}: ${failure.detail}\n` +
              `      at ${failure.location}`
          )
          .join("\n  ") +
        `\n\n  A customer's require of a package named above throws. Each one declares a runtime ` +
        `main\n  entry, so the file it names has to be in the payload: the usual cause is a ` +
        `package copied\n  without the dist-cjs its main points at — a workspace that was never ` +
        `built, or a trim that\n  removed what the manifest still promises.`
    );
  }

  const exemptTotal = exempt.builtin + exempt.noDot + exempt.types;
  console.log(
    `5d. ${targets.length} main entries load from the tree (${exemptTotal} exempt: ` +
      `${exempt.builtin} core-module names, ${exempt.noDot} exports maps with no ` +
      `require-reachable ".", ${exempt.types} types-only)`
  );
};

/**
 * Require a few packages as an outside consumer would, including one reachable only
 * through the root @smithy symlink.
 *
 * @param {{ outDir: string }} options
 */
export const smokeTest = ({ outDir }) => {
  const targets = ["@aws-sdk/client-s3", "@aws-sdk/core", "@aws-sdk/credential-provider-node", "@smithy/core"];
  const consumer = join(outDir, ".smoke-test.cjs");
  writeFileSync(
    consumer,
    targets.map((t) => `require(${JSON.stringify(t)});`).join("\n") +
      `\nconsole.log("smoke test passed: ${targets.length} packages");\n`
  );
  try {
    execFileSync(process.execPath, [consumer], { stdio: "inherit" });
  } finally {
    rmSync(consumer, { force: true });
  }
};

/**
 * Assert every forwarder delivers what the compatibility snapshot records.
 *
 * Anchored at the payload root, so it only holds before the step 5 layout move. Called
 * after the move it still passes, but asserts the nested resolution rather than the flat
 * one. `shims` is the object the forwarders were generated from, so the asserted surface
 * cannot drift from the tree.
 *
 * @param {{ shims: Record<string, any>, outDir: string, legacyDepsPackage: string }} options
 */
export const verifyShimExports = ({ shims, outDir, legacyDepsPackage }) => {
  // __exportStar copies whatever the target exports, so a forwarder aimed at the wrong
  // package is silently short, not broken. The recorded surface is a floor.
  const requireFromTree = createRequire(join(outDir, "verify-shims.cjs"));
  const shortfalls = [];
  for (const [name, entry] of Object.entries(shims)) {
    if (!entry.exports.length) {
      continue;
    }
    try {
      const actual = new Set(Object.keys(requireFromTree(name)));
      const missing = entry.exports.filter((symbol) => !actual.has(symbol));
      if (missing.length) {
        shortfalls.push(`${name} -> ${entry.target ?? "(copied)"} is missing ${missing.join(", ")}`);
      }
    } catch (error) {
      // Usually a missing package, not a missing symbol — how a version bump breaks this.
      const unresolved =
        error.code === "MODULE_NOT_FOUND" ? /Cannot find module '([^']+)'/.exec(error.message)?.[1] : undefined;
      // Only bare names are declarable, so a relative request gets no remedy sentence.
      const declarable = unresolved !== undefined && /^(?:@[^/:]+\/)?[^@./:][^/:]*$/.test(unresolved);
      if (declarable) {
        shortfalls.push(
          `${name} -> ${entry.target ?? "(copied)"} cannot load: ${unresolved} is not in the ` +
            `assembled tree.\n    Neither this workspace nor its dependency closure provides ` +
            `it, so it has to be declared. Add it to ${legacyDepsPackage} and re-run\n` +
            `    yarn install.`
        );
      } else if (unresolved !== undefined) {
        shortfalls.push(
          `${name} -> ${entry.target ?? "(copied)"} cannot load: ${unresolved} is not ` +
            `resolvable from the assembled tree. It is not a bare package name, so it is a ` +
            `file missing from inside an already-present package rather than a missing package.`
        );
      } else {
        shortfalls.push(`${name} failed to load: ${error.code ?? error.message}`);
      }
    }
  }
  if (shortfalls.length) {
    throw new Error(`deprecated packages are not usable as recorded:\n  ` + shortfalls.join("\n  "));
  }
  console.log(`4b. verified ${Object.keys(shims).length} deprecated packages against their recorded exports`);
};

// ---------------------------------------------------------------- cli

// The assembler imports this module, so a bare CLI body would run on import. realpathSync
// is load-bearing: the ESM loader realpaths import.meta.url, so raw argv never matches.
const isMain =
  process.argv[1] !== undefined &&
  existsSync(process.argv[1]) &&
  realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const argv = process.argv.slice(2);
  const option = (/** @type {string} */ name) => {
    const i = argv.indexOf(`--${name}`);
    return i === -1 || !argv[i + 1] ? null : argv[i + 1];
  };

  const die = (/** @type {string} */ message) => {
    console.error(`verification did not run: ${message}`);
    process.exit(1);
  };

  const treeArg = option("tree");
  if (!treeArg) {
    die(
      "--tree <payload dir> is required.\nusage: verify-payload.mjs --tree <payload dir>\n" +
        "Runs steps 5b, 5c, 5d and the smoke test. Step 4b is not included: it asserts the " +
        "pre-layout tree the assembler builds, which a finished payload is not."
    );
  }

  // Accept either the directory index.mjs was given as --out, or its node_modules.
  const tree = /** @type {string} */ (treeArg).replace(/\/+$/, "");
  const outDir = tree.endsWith("node_modules") ? dirname(tree) : tree;
  if (!existsSync(join(outDir, "node_modules"))) die(`no node_modules at ${join(outDir, "node_modules")}`);

  try {
    verifyTreeComplete({ outDir });
    verifySubpathExports({ outDir });
    verifyMainEntries({ outDir });
    smokeTest({ outDir });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
