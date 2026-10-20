#!/usr/bin/env node
// @ts-check

/**
 * Assembles the node_modules tree that AWS Lambda pre-provisions for customer
 * functions, and zips it for publication as a GitHub release asset.
 *
 * Output layout, which consumers depend on and which must not change:
 *
 *   node_modules/
 *     @aws-sdk/
 *       client-s3/ ...                  every publishable @aws-sdk package
 *       node_modules/                   everything that is NOT @aws-sdk, nested here
 *         @smithy/ @aws-crypto/ tslib/ ...
 *     @smithy -> ./@aws-sdk/node_modules/@smithy
 */

import { execFileSync as _execFileSync } from "node:child_process";
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";
import {
  smokeTest,
  verifyMainEntries,
  verifyShimExports,
  verifySubpathExports,
  verifyTreeComplete,
} from "./verify-payload.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");
const rootNodeModules = join(rootDir, "node_modules");

// ---------------------------------------------------------------- options

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const option = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 || !argv[i + 1] ? fallback : argv[i + 1];
};

const outDir = option("out", join(rootDir, "lambda-provided-sdk"));
const zipName = option("zip-name", "lambda-provided-js-sdk.zip");
/** Skip the registry install of the deprecated shims. Produces an incomplete tree. */
const skipLegacy = flag("skip-legacy");
/** Skip zip + checksum, leaving just the assembled tree. Useful when iterating. */
const treeOnly = flag("tree-only");

const nodeModulesDir = join(outDir, "node_modules");
// Declares the registry packages the payload needs but nothing in this workspace imports.
const legacyDepsManifest = join(rootDir, "private", "aws-lambda-provided-sdk-deps", "package.json");
const legacyDepsPackage = relative(rootDir, dirname(legacyDepsManifest));

// Publishable packages kept out of the payload.
const EXCLUDED = new Set([]);

// Workspace folders kept out of the payload.
const EXCLUDED_WORKSPACES = new Set(["preview"]);

// npm ships these regardless of the `files` field.
const ALWAYS_INCLUDED = [/^package\.json$/, /^README(\..*)?$/i, /^LICEN[CS]E(\..*)?$/i];

const execFileSync = (cmd, args, opts) => {
  console.log(`executing: ${[cmd, ...args].join(" ")}`);
  return _execFileSync(cmd, args, opts);
};

const log = (...args) => console.log(...args);

// ---------------------------------------------------------------- manifests

/**
 * Strip yarn's `workspace:` protocol from local interdependencies, e.g.
 * "@aws-sdk/core": "workspace:^3.977.6" — invalid semver outside this workspace,
 * which the registry would normally rewrite on publish.
 */
const stripWorkspaceProtocol = (manifestPath) => {
  const raw = readFileSync(manifestPath, "utf-8");
  if (!raw.includes("workspace:")) {
    return false;
  }
  writeFileSync(manifestPath, raw.replaceAll("workspace:", ""));
  return true;
};

// ---------------------------------------------------------------- files field

/**
 * Translate one `files` entry into a matcher. Patterns in this repo are either
 * "dist-*&#47;**" or a root-level shim like "./client.js"
 */
const patternToRegExp = (pattern) => {
  let p = pattern.replace(/^\.\//, "").replace(/\/+$/, "");
  // A bare directory name means the whole directory.
  if (!p.includes("*") && !p.includes(".")) {
    p = `${p}/**`;
  }
  const source = p
    .split("/")
    .map((segment) =>
      segment === "**" ? "(?:.*)" : segment.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]*")
    )
    .join("/")
    // "a/**" should also match "a" itself
    .replace(/\/\(\?:\.\*\)$/, "(?:/.*)?");
  return new RegExp(`^${source}$`);
};

/** Every file under dir, as paths relative to dir, skipping nested node_modules. */
const listFiles = (dir, prefix = "") => {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") {
      continue;
    }
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...listFiles(join(dir, entry.name), rel));
    } else {
      out.push(rel);
    }
  }
  return out;
};

/**
 * Copy a workspace package the way `npm publish` would, honouring its `files` field.
 */
const copyPublishedFiles = (pkgDir, destDir, pkgJson) => {
  const patterns = (pkgJson.files ?? ["dist-*/**"]).map(patternToRegExp);
  const matches = (rel) => ALWAYS_INCLUDED.some((re) => re.test(rel)) || patterns.some((re) => re.test(rel));

  let copied = 0;
  for (const rel of listFiles(pkgDir)) {
    if (!matches(rel)) {
      continue;
    }
    const dest = join(destDir, ...rel.split("/"));
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(join(pkgDir, ...rel.split("/")), dest, {
      dereference: true,
      force: true,
    });
    copied += 1;
  }
  return copied;
};

// ---------------------------------------------------------------- dependencies

/**
 * Copy a dependency and its own runtime dependency closure out of the root
 * node_modules, dereferencing yarn's workspace symlinks so the tree contains real
 * directories.
 *
 * Only `dependencies` is walked. No publishable package in this repo declares
 * optionalDependencies, and the three peerDependencies all point at clients that are
 * copied anyway.
 */
/** Every package.json beneath `dir`'s nested node_modules, at any depth. */
const nestedManifests = (dir) => {
  const found = [];
  const walk = (current) => {
    const modules = join(current, "node_modules");
    if (!existsSync(modules)) {
      return;
    }
    for (const entry of readdirSync(modules, { withFileTypes: true })) {
      if (!entry.isDirectory()) {
        continue;
      }
      const full = join(modules, entry.name);
      if (entry.name.startsWith("@")) {
        for (const scoped of readdirSync(full, { withFileTypes: true })) {
          if (!scoped.isDirectory()) {
            continue;
          }
          const scopedDir = join(full, scoped.name);
          if (existsSync(join(scopedDir, "package.json"))) {
            found.push(join(scopedDir, "package.json"));
            walk(scopedDir);
          }
        }
        continue;
      }
      if (existsSync(join(full, "package.json"))) {
        found.push(join(full, "package.json"));
        walk(full);
      }
    }
  };
  walk(dir);
  return found;
};

const copyExternalDependency = (name, seen, workspacePackages) => {
  if (seen.has(name) || workspacePackages.has(name)) {
    return;
  }
  seen.add(name);

  const src = join(rootNodeModules, name);
  if (!existsSync(src)) {
    // Loud on purpose. A silently omitted dependency is a runtime failure for a
    // customer function, discovered long after the release.
    throw new Error(`${name} not found in root node_modules — run yarn install before assembling.`);
  }

  const dest = join(nodeModulesDir, name);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, { recursive: true, dereference: true, force: true });

  const manifestPath = join(dest, "package.json");
  if (!existsSync(manifestPath)) {
    return;
  }
  stripWorkspaceProtocol(manifestPath);
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  for (const child of Object.keys(manifest.dependencies ?? {})) {
    copyExternalDependency(child, seen, workspacePackages);
  }

  // Collect the requirements of any nested node_modules the cpSync above brought along.
  // `seen` is keyed on name, so the hoisted copy marks a name done and a nested copy of
  // it is never revisited — leaving that copy's own dependencies uncopied.
  for (const nestedPath of nestedManifests(dest)) {
    let nested;
    try {
      nested = JSON.parse(readFileSync(nestedPath, "utf-8"));
    } catch {
      continue;
    }
    for (const child of Object.keys(nested.dependencies ?? {})) {
      copyExternalDependency(child, seen, workspacePackages);
    }
  }
};

// ---------------------------------------------------------------- layout

/**
 * Move everything that is not @aws-sdk down into @aws-sdk/node_modules, then create
 * the root @smithy symlink.
 */
const applyLayout = () => {
  const nested = join(nodeModulesDir, "@aws-sdk", "node_modules");
  mkdirSync(nested, { recursive: true });

  for (const entry of readdirSync(nodeModulesDir)) {
    if (entry === "@aws-sdk") {
      continue;
    }
    renameSync(join(nodeModulesDir, entry), join(nested, entry));
  }

  if (!existsSync(join(nested, "@smithy"))) {
    throw new Error("@smithy not present in the assembled tree; cannot create the root symlink.");
  }
  symlinkSync(join(".", "@aws-sdk", "node_modules", "@smithy"), join(nodeModulesDir, "@smithy"));
};

/** Byte size of every file beneath `dir`. */
const dirSize = (dir) =>
  readdirSync(dir, { withFileTypes: true }).reduce((total, entry) => {
    const full = join(dir, entry.name);
    return total + (entry.isDirectory() ? dirSize(full) : statSync(full).size);
  }, 0);

/**
 * Delete dist-es and dist-types from every @aws-sdk and @smithy package
 */
const trimScopedBuilds = () => {
  let dirs = 0;
  let bytes = 0;
  const walk = (dir, scope) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isSymbolicLink() || !entry.isDirectory()) {
        continue;
      }
      const full = join(dir, entry.name);
      const scoped = entry.name.startsWith("@");
      if (scoped || entry.name === "node_modules") {
        walk(full, scoped ? entry.name : null);
        continue;
      }
      if (scope === "@aws-sdk" || scope === "@smithy") {
        for (const name of ["dist-es", "dist-types"]) {
          const target = join(full, name);
          if (existsSync(target)) {
            bytes += dirSize(target);
            rmSync(target, { recursive: true, force: true });
            dirs += 1;
          }
        }
      }
      if (existsSync(join(full, "node_modules"))) {
        walk(join(full, "node_modules"), null);
      }
    }
  };
  walk(nodeModulesDir, null);
  return { dirs, bytes };
};

// ---------------------------------------------------------------- assemblePayload

export const assemblePayload = () => {
  log(`root   : ${rootDir}`);
  log(`output : ${outDir}\n`);

  if (!existsSync(rootNodeModules)) {
    throw new Error(`no node_modules at ${rootNodeModules} — run yarn install first.`);
  }

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(nodeModulesDir, { recursive: true });

  // 1. Enumerate publishable workspace packages.
  const workspacePackages = new Map();
  for (const pkgDir of getWorkspacePaths()) {
    const manifestPath = join(pkgDir, "package.json");
    if (!existsSync(manifestPath)) {
      continue;
    }
    if (EXCLUDED_WORKSPACES.has(relative(rootDir, pkgDir).split("/")[0])) {
      continue;
    }
    const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
    if (manifest.private || EXCLUDED.has(manifest.name)) {
      continue;
    }
    workspacePackages.set(manifest.name, { dir: pkgDir, manifest });
  }
  log(`1. ${workspacePackages.size} publishable workspace packages`);

  // 2. Copy each one as npm would publish it, then fix its manifest.
  let fileCount = 0;
  let rewritten = 0;
  for (const [name, { dir, manifest }] of workspacePackages) {
    const dest = join(nodeModulesDir, name);
    mkdirSync(dest, { recursive: true });
    fileCount += copyPublishedFiles(dir, dest, manifest);
    if (stripWorkspaceProtocol(join(dest, "package.json"))) {
      rewritten += 1;
    }
  }
  log(`2. copied ${fileCount} published files; stripped workspace: from ${rewritten} manifests`);

  // 3. Copy the runtime dependency closure out of the root node_modules.
  const seen = new Set();
  for (const [, { manifest }] of workspacePackages) {
    for (const dep of Object.keys(manifest.dependencies ?? {})) {
      copyExternalDependency(dep, seen, workspacePackages);
    }
  }
  const external = readdirSync(nodeModulesDir).filter((e) => e !== "@aws-sdk").length;
  log(`3. copied runtime closure: ${external} external entries`);

  // 4. Add the deprecated packages this workspace cannot produce. Two mechanisms:
  //
  //   Generated. Most of the deprecated @aws-sdk packages are forwarders whose entire
  //   content is a re-export of the modern package that replaced it. Targets come from
  //   shim-targets.json; see that file for provenance, and note the mapping is not
  //   mechanical — not every @aws-sdk/X forwards to @smithy/X.
  //
  //   Copied from the root node_modules. The forwarders' re-export targets, plus
  //   @aws-sdk/middleware-sdk-eventbridge, which ships real code. Nothing publishable
  //   declares these, so step 3's walk cannot reach them; they are declared in
  //   private/aws-lambda-provided-sdk-deps, which this step reads the list from.

  let legacyAdded = 0;
  if (skipLegacy) {
    log(`4. SKIPPED legacy packages — tree is incomplete and will fail the compatibility gates`);
  } else {
    const { awsSdkShims } = JSON.parse(readFileSync(join(__dirname, "shim-targets.json"), "utf-8"));

    // Re-export targets first: a generated forwarder cannot be verified until the
    // thing it forwards to is present.
    if (!existsSync(legacyDepsManifest)) {
      throw new Error(
        `no manifest at ${legacyDepsManifest} — the payload cannot be completed.\n` +
          `  ${legacyDepsPackage} is where the payload's registry-sourced packages are declared.`
      );
    }
    const legacyNames = Object.keys(JSON.parse(readFileSync(legacyDepsManifest, "utf-8")).devDependencies ?? {});

    // Reserve every generated name before copying, so the recursive copy cannot fill a
    // forwarder's slot with the package it forwards away from
    for (const [name, entry] of Object.entries(awsSdkShims)) {
      if (entry?.target) {
        seen.add(name);
      }
    }

    // Steps 2 and 3 reach none of these names today, but a future SDK version could
    // depend on one, and that copy has to win.
    const preexisting = legacyNames.filter((name) => existsSync(join(nodeModulesDir, name)));
    for (const name of preexisting) {
      seen.add(name);
    }
    for (const name of legacyNames) {
      copyExternalDependency(name, seen, workspacePackages);
    }

    // A package that reached the root node_modules without its entry point is a broken input
    for (const name of legacyNames) {
      const dest = join(nodeModulesDir, name);
      const entryPoint = JSON.parse(readFileSync(join(dest, "package.json"), "utf-8")).main ?? "index.js";
      if (!existsSync(join(dest, entryPoint))) {
        throw new Error(
          `${name} has no ${entryPoint} — the copy in the root node_modules is incomplete.\n` +
            `  Re-run yarn install, then check the version ${legacyDepsPackage} declares.`
        );
      }
    }
    const copied = legacyNames.length - preexisting.length;

    // Generated forwarders are CommonJS only, matching the payload that ships today.
    // They declare no `exports` map, so a `module` or `types` field would point
    // consumers at files that are never emitted.
    let generated = 0;
    for (const [name, entry] of Object.entries(awsSdkShims)) {
      if (!entry?.version || !Array.isArray(entry.exports)) {
        throw new Error(`shim-targets.json entry for ${name} is incomplete.`);
      }
      if (!entry.target) {
        // Ships real code rather than a forwarder, so only the copy above can supply it.
        if (!existsSync(join(nodeModulesDir, name))) {
          throw new Error(
            `${name} has no re-export target and was not copied — nothing can produce it.\n` +
              `  Declare it in ${legacyDepsPackage} and re-run yarn install.`
          );
        }
        continue;
      }

      const dest = join(nodeModulesDir, name);
      if (existsSync(dest)) {
        continue;
      }
      mkdirSync(join(dest, "dist-cjs"), { recursive: true });

      writeFileSync(
        join(dest, "package.json"),
        JSON.stringify(
          {
            name,
            version: entry.version,
            description: `Deprecated. Re-exports ${entry.target}.`,
            main: "./dist-cjs/index.js",
            license: "Apache-2.0",
            dependencies: { [entry.target]: "*", tslib: "^2.6.2" },
          },
          null,
          2
        ) + "\n"
      );
      writeFileSync(
        join(dest, "dist-cjs", "index.js"),
        `"use strict";\n` +
          `Object.defineProperty(exports, "__esModule", { value: true });\n` +
          `const tslib_1 = require("tslib");\n` +
          `tslib_1.__exportStar(require("${entry.target}"), exports);\n`
      );
      generated += 1;
    }

    legacyAdded = copied + generated;
    log(`4. ${generated} forwarders generated, ${copied} declared packages copied`);

    // 4b. Assert every forwarder delivers what the compatibility snapshot records.
    // Runs before applyLayout(): every package still sits directly under
    // node_modules and resolves from the output root.
    verifyShimExports({ shims: awsSdkShims, outDir, legacyDepsPackage });
  }

  // 5. Rearrange into the layout consumers expect.
  applyLayout();
  log(`5. layout applied (@aws-sdk/node_modules + root @smithy symlink)`);

  // 5a. Drop the ESM and type builds; no CJS consumer in the payload can reach them.
  const { dirs, bytes } = trimScopedBuilds();
  log(`5a. trimmed ${dirs} dist-es/dist-types dirs (${(bytes / 1024 / 1024).toFixed(1)} MB reclaimed)`);

  // 5b. Prove the tree is self-contained.
  // These four run after the layout move: non-@aws-sdk packages are under
  // @aws-sdk/node_modules and @smithy is a root symlink, which is what they anchor on.
  verifyTreeComplete({ outDir });

  // 5c. Prove every subpath an exports map declares can actually be required.
  verifySubpathExports({ outDir });

  // 5d. Prove every package's main entry loads, which 5b and 5c never open.
  verifyMainEntries({ outDir });

  // 6. Prove the result loads before anyone publishes it.
  smokeTest({ outDir });

  if (treeOnly) {
    log(`\ntree at ${nodeModulesDir}`);
    return;
  }

  // 6b. Stamp the payload so a copy of it can be identified.
  const gitOutput = (args, fallback) => {
    try {
      return execFileSync("git", args, {
        cwd: rootDir,
        encoding: "utf-8",
      }).trim();
    } catch {
      return fallback;
    }
  };

  const lernaVersion = JSON.parse(readFileSync(join(rootDir, "lerna.json"), "utf-8")).version;

  const metadata = {
    sdkVersion: lernaVersion,
    gitCommit: gitOutput(["rev-parse", "HEAD"], "unknown"),
    gitTag: gitOutput(["describe", "--tags", "--exact-match"], null),
    builtAt: new Date().toISOString(),
    nodeVersionBuiltWith: process.version,
    packageCounts: {
      workspace: workspacePackages.size,
      external,
      legacy: skipLegacy ? 0 : legacyAdded,
    },
    trimmed: true,
    legacyPackagesFrom: skipLegacy ? null : "shim-targets.json",
  };
  writeFileSync(join(outDir, "metadata.json"), JSON.stringify(metadata, null, 2) + "\n");

  // The pinned list travels with the payload so the deprecated packages it contains
  // are auditable without reading the SDK repo at the matching commit.
  copyFileSync(join(__dirname, "shim-targets.json"), join(outDir, "shim-targets.json"));

  log(`6. metadata.json  sdkVersion ${metadata.sdkVersion}, commit ${metadata.gitCommit.slice(0, 9)}`);

  // 7. Zip, and checksum the exact bytes that will be uploaded.
  const zipPath = join(outDir, zipName);
  execFileSync("zip", ["-ryq", zipPath, "node_modules", "metadata.json", "shim-targets.json"], { cwd: outDir });
  const checksum = execFileSync("sha256sum", [zipName], {
    cwd: outDir,
    encoding: "utf-8",
  });
  writeFileSync(join(outDir, `${zipName}.sha256`), checksum);

  log(`7. ${zipName}  ${(statSync(zipPath).size / 1024 / 1024).toFixed(1)} MB`);
  log(`8. ${zipName}.sha256  ${checksum.trim().split(/\s+/)[0]}`);
};
