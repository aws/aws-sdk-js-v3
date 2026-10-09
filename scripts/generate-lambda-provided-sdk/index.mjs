#!/usr/bin/env node
// @ts-check

/**
 * Assembles the node_modules tree that AWS Lambda pre-provisions for customer
 * functions, and zips it for publication as a GitHub release asset.
 *
 * @example
 * ```
 * yarn generate:lambda-provided-sdk
 * yarn generate:lambda-provided-sdk --out /tmp/lambda-sdk --skip-legacy
 * ```
 *
 * This replaces the previous process, which ran `npm install @aws-sdk/<pkg>@<version>`
 * against the public registry. That cannot run during a release build: packages are
 * published *after* the build stage, so the version being released does not exist on
 * the registry yet. Everything publishable is therefore taken from this workspace.
 *
 * Output layout, which consumers depend on and which must not change:
 *
 *   node_modules/
 *     @aws-sdk/
 *       client-s3/ ...                  every publishable @aws-sdk package
 *       node_modules/                   everything that is NOT @aws-sdk, nested here
 *         @smithy/ @aws-crypto/ tslib/ ...
 *     @smithy -> ./@aws-sdk/node_modules/@smithy
 *
 * The nesting is deliberate: SDK packages resolve their own dependencies by walking up
 * to @aws-sdk/node_modules, while customer code cannot reach tslib or @aws-crypto. The
 * root @smithy symlink is the one intentional exception, because customer code may
 * import @smithy/* directly. It is relative so it survives copying and zipping.
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
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";

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
const vendorDir = join(__dirname, "vendor");

// Documentation generators are published but are build tooling, not runtime SDK.
const EXCLUDED = new Set([
  "@aws-sdk/core-packages-documentation-generator",
  "@aws-sdk/core-theme-documentation-generator",
]);

// npm ships these regardless of the `files` field.
const ALWAYS_INCLUDED = [/^package\.json$/, /^README(\..*)?$/i, /^LICEN[CS]E(\..*)?$/i];

const execFileSync = (cmd, args, opts) => {
  console.log(`executing: ${[cmd, ...args].join(" ")}`);
  return _execFileSync(cmd, args, opts);
};

const log = (...args) => console.log(...args);

// ---------------------------------------------------------------- manifests

/**
 * Yarn writes local interdependencies with its `workspace:` protocol, e.g.
 * "@aws-sdk/core": "workspace:^3.977.6". The registry rewrites those on publish;
 * nothing in this workspace does. Left in place they are invalid semver ranges, so
 * any consumer that installs, resolves or audits the tree breaks. Node itself never
 * reads dependency ranges, which is why this is invisible at runtime.
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
 * "dist-*&#47;**" or a root-level shim like "./client.js", but this handles the
 * general shape so a future pattern does not silently match nothing.
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
      segment === "**"
        ? "(?:.*)"
        : segment.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]*")
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
 *
 * Reading `files` per package matters: 502 of the publishable packages declare exactly
 * ["dist-*&#47;**"], but @aws-sdk/core, config, checksums, nested-clients and
 * middleware-sdk-s3 also ship root-level subpath shims (client.js, credentials.js,
 * sts.js and friends) that back customer-facing subpath imports. A hardcoded dist-*
 * allowlist drops those silently.
 */
const copyPublishedFiles = (pkgDir, destDir, pkgJson) => {
  const patterns = (pkgJson.files ?? ["dist-*/**"]).map(patternToRegExp);
  const matches = (rel) =>
    ALWAYS_INCLUDED.some((re) => re.test(rel)) || patterns.some((re) => re.test(rel));

  let copied = 0;
  for (const rel of listFiles(pkgDir)) {
    if (!matches(rel)) {
      continue;
    }
    const dest = join(destDir, ...rel.split("/"));
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(join(pkgDir, ...rel.split("/")), dest, { dereference: true, force: true });
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
 * copied anyway. Walking devDependencies would drag in turbo, typescript and vitest.
 */
const copyExternalDependency = (name, seen, workspacePackages) => {
  if (seen.has(name) || workspacePackages.has(name)) {
    return;
  }
  seen.add(name);

  const src = join(rootNodeModules, name);
  if (!existsSync(src)) {
    // Loud on purpose. A silently omitted dependency is a runtime failure for a
    // customer function, discovered long after the release.
    throw new Error(
      `${name} not found in root node_modules — run yarn install before assembling.`
    );
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
};

// ---------------------------------------------------------------- layout

/**
 * Move everything that is not @aws-sdk down into @aws-sdk/node_modules, then create
 * the root @smithy symlink. See the layout note at the top of this file.
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

// ---------------------------------------------------------------- verification

/**
 * Import a few packages from the finished tree as an outside consumer would, including
 * one that is only reachable through the root @smithy symlink.
 */
const smokeTest = () => {
  const targets = [
    "@aws-sdk/client-s3",
    "@aws-sdk/core",
    "@aws-sdk/credential-provider-node",
    "@smithy/core",
  ];
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

// ---------------------------------------------------------------- main

const main = () => {
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

  // 4. Add the deprecated packages this workspace cannot produce.
  //
  // Nothing is installed. Two mechanisms cover the whole set:
  //
  //   Generated. The 47 deprecated @aws-sdk packages are forwarders — the entire
  //   content of each is a re-export of the modern package that replaced it. Their
  //   targets are recorded in shim-targets.json, taken from aws-sdk-js-v3
  //   bb2232f76f4, which rewrote each deprecated package's src/index.ts to a single
  //   `export * from` before the packages were removed from the repo. That commit is
  //   the only remaining record of the mapping, and it cannot be re-derived: 41 of
  //   the 47 follow @aws-sdk/X -> @smithy/X, and the rest do not.
  //
  //   Vendored. 31 packages are copied from vendor/. They are re-export targets the
  //   modern SDK no longer depends on, so yarn install never fetches them and there
  //   is nothing in the workspace to copy, plus @aws-sdk/middleware-sdk-eventbridge,
  //   which ships real code rather than a forwarder. Real implementations cannot be
  //   generated from a list of export names.
  //
  // This replaces an `npm install` of 88 pinned specs, which existed only to fight
  // npm's resolver: the shims' 2023 dependency ranges resolve @smithy to 1.x while
  // the payload runs 4.x, so the twins had to be pinned by hand and nested
  // node_modules filtered out. Writing the forwarders ourselves removes the resolver
  // from the problem, and the export surface each one must provide is asserted
  // directly rather than hoped for.
  let legacyAdded = 0;
  if (skipLegacy) {
    log(`4. SKIPPED legacy packages — tree is incomplete and will fail the compatibility gates`);
  } else {
    const { awsSdkShims } = JSON.parse(
      readFileSync(join(__dirname, "shim-targets.json"), "utf-8")
    );

    // Vendored packages first: a generated forwarder cannot be verified until the
    // thing it forwards to is present.
    let vendored = 0;
    const walkVendor = (dir) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
          continue;
        }
        const from = join(dir, entry.name);
        if (!existsSync(join(from, "package.json"))) {
          walkVendor(from); // a scope directory, not a package
          continue;
        }
        const name = relative(vendorDir, from);
        const dest = join(nodeModulesDir, name);
        if (existsSync(dest)) {
          continue; // never shadow something built from this workspace
        }
        mkdirSync(dirname(dest), { recursive: true });
        cpSync(from, dest, { recursive: true });
        vendored += 1;
      }
    };
    if (!existsSync(vendorDir)) {
      throw new Error(`no vendor directory at ${vendorDir} — the payload cannot be completed.`);
    }
    walkVendor(vendorDir);

    // CommonJS only, matching the payload that ships today: the reference's copy of
    // @aws-sdk/abort-controller has dist-cjs alone, with module and types stripped from
    // its manifest. These packages declare no `exports` map, so resolution falls back to
    // main / module / types — declaring the latter two while emitting only dist-cjs
    // would point consumers at files that do not exist, so they are omitted entirely.
    let generated = 0;
    for (const [name, entry] of Object.entries(awsSdkShims)) {
      if (!entry?.version || !Array.isArray(entry.exports)) {
        throw new Error(`shim-targets.json entry for ${name} is incomplete.`);
      }
      if (!entry.target) {
        // Not a forwarder. It has to be vendored, and the copy above is the only
        // thing that can have supplied it.
        if (!existsSync(join(nodeModulesDir, name))) {
          throw new Error(
            `${name} has no re-export target and is not in vendor/ — nothing can produce it.`
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

    legacyAdded = vendored + generated;
    log(`4. ${generated} forwarders generated, ${vendored} vendored packages copied`);

    // 4b. Assert every forwarder actually delivers what the compatibility snapshot
    // records. __exportStar copies whatever the target exports at require time, so a
    // forwarder pointing at the wrong package, or at one that dropped a symbol, is
    // silently short rather than broken. The recorded export surface is a floor: more
    // is fine, missing anything is not.
    //
    // Run before the layout move, while every package still sits directly under
    // node_modules and resolves from the output root.
    const requireFromTree = createRequire(join(outDir, "verify-shims.cjs"));
    const shortfalls = [];
    for (const [name, entry] of Object.entries(awsSdkShims)) {
      if (!entry.exports.length) {
        continue;
      }
      try {
        const actual = new Set(Object.keys(requireFromTree(name)));
        const missing = entry.exports.filter((symbol) => !actual.has(symbol));
        if (missing.length) {
          shortfalls.push(`${name} -> ${entry.target ?? "(vendored)"} is missing ${missing.join(", ")}`);
        }
      } catch (error) {
        shortfalls.push(`${name} failed to load: ${error.code ?? error.message}`);
      }
    }
    if (shortfalls.length) {
      throw new Error(
        `deprecated packages do not satisfy the recorded API surface:\n  ` +
          shortfalls.join("\n  ")
      );
    }
    log(`4b. verified ${Object.keys(awsSdkShims).length} deprecated packages against their recorded exports`);
  }

  // 5. Rearrange into the layout consumers expect.
  applyLayout();
  log(`5. layout applied (@aws-sdk/node_modules + root @smithy symlink)`);

  // 6. Prove the result loads before anyone publishes it.
  smokeTest();

  if (treeOnly) {
    log(`\ntree at ${nodeModulesDir}`);
    return;
  }

  // 6b. Stamp the payload so a copy of it can be identified.
  //
  // The asset name is fixed, because releases/latest/download/<name> only resolves
  // against a literal name. So the zip itself carries no version, and once it is
  // detached from its release page there is nothing to say which SDK build produced
  // it. metadata.json is that record, and it is what makes bug reports actionable.
  const gitOutput = (args, fallback) => {
    try {
      return execFileSync("git", args, { cwd: rootDir, encoding: "utf-8" }).trim();
    } catch {
      return fallback;
    }
  };

  const lernaVersion = JSON.parse(
    readFileSync(join(rootDir, "lerna.json"), "utf-8")
  ).version;

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
    trimmed: false,
    legacyPackagesFrom: skipLegacy ? null : "shim-targets.json",
  };
  writeFileSync(join(outDir, "metadata.json"), JSON.stringify(metadata, null, 2) + "\n");

  // The pinned list travels with the payload so the deprecated packages it contains
  // are auditable without reading the SDK repo at the matching commit.
  copyFileSync(join(__dirname, "shim-targets.json"), join(outDir, "shim-targets.json"));

  log(`6. metadata.json  sdkVersion ${metadata.sdkVersion}, commit ${metadata.gitCommit.slice(0, 9)}`);

  // 7. Zip, and checksum the exact bytes that will be uploaded.
  //
  // The zip is produced here rather than left for CI to archive. Build systems that
  // zip declared output paths do so after the build finishes, so a checksum computed
  // during the build would not describe the file that actually ships.
  //
  // -y stores the @smithy symlink as a symlink instead of following it.
  const zipPath = join(outDir, zipName);
  execFileSync(
    "zip",
    ["-ryq", zipPath, "node_modules", "metadata.json", "shim-targets.json"],
    { cwd: outDir }
  );
  const checksum = execFileSync("sha256sum", [zipName], { cwd: outDir, encoding: "utf-8" });
  writeFileSync(join(outDir, `${zipName}.sha256`), checksum);

  log(`7. ${zipName}  ${(statSync(zipPath).size / 1024 / 1024).toFixed(1)} MB`);
  log(`8. ${zipName}.sha256  ${checksum.trim().split(/\s+/)[0]}`);
};

main();
