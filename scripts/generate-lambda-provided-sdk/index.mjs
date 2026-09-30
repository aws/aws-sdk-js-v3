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
  mkdtempSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { tmpdir } from "node:os";
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

  // 4. Add the packages this workspace cannot produce.
  let legacyAdded = 0;
  if (skipLegacy) {
    log(`4. SKIPPED legacy shims — tree is incomplete and will fail the compatibility gates`);
  } else {
    // Both lists are installed together, and the @smithy twins must be named
    // explicitly. The shims' own dependency ranges are from 2023 — for instance
    // @aws-sdk/util-middleware@3.374.0 asks for @smithy/util-middleware@^1.0.1 —
    // so installing the shims alone resolves @smithy 1.x, while the payload that
    // ships today runs them against 4.x. The existing payload has no nested
    // node_modules under any shim, so every re-export resolves up to the modern
    // version, and the recorded API snapshot was captured against those. Letting
    // npm pick drops exports the snapshot requires.
    const { awsSdkShims, smithyTwins, overrides } = JSON.parse(
      readFileSync(join(__dirname, "legacy-packages.json"), "utf-8")
    );
    const specs = Object.entries({ ...awsSdkShims, ...smithyTwins }).map(
      ([name, version]) => `${name}@${version}`
    );
    const staging = mkdtempSync(join(tmpdir(), "lambda-provided-sdk-legacy-"));
    try {
      writeFileSync(join(staging, "package.json"), JSON.stringify({ private: true }) + "\n");
      execFileSync("npm", ["install", "--no-audit", "--no-fund", "--save-exact", ...specs], {
        cwd: staging,
        stdio: "inherit",
      });
      let added = 0;
      const stagedModules = join(staging, "node_modules");
      for (const entry of readdirSync(stagedModules)) {
        if (entry.startsWith(".")) {
          continue;
        }
        const names = entry.startsWith("@")
          ? readdirSync(join(stagedModules, entry)).map((child) => `${entry}/${child}`)
          : [entry];
        for (const name of names) {
          const dest = join(nodeModulesDir, name);
          if (existsSync(dest)) {
            continue; // never shadow something built from this workspace
          }
          mkdirSync(dirname(dest), { recursive: true });
          // Drop nested node_modules. npm creates them for the shims' stale
          // dependency ranges, and copying them would shadow the pinned modern
          // @smithy versions at resolution time. The existing payload has none.
          // The comparison is on the path relative to this package, because
          // stagedModules itself ends in "node_modules".
          const pkgSrc = join(stagedModules, name);
          cpSync(pkgSrc, dest, {
            recursive: true,
            dereference: true,
            filter: (src) => !relative(pkgSrc, src).split(sep).includes("node_modules"),
          });
          added += 1;
        }
      }
      legacyAdded = added;
      log(`4. added ${added} packages from ${specs.length} pinned deprecated shims`);
    } finally {
      rmSync(staging, { recursive: true, force: true });
    }

    // 4b. Redirect the packages whose published contents point at the wrong target.
    //
    // Three of the shims re-export a package that does not have the exports the
    // compatibility snapshot records. @aws-sdk/util-stream-node re-exports
    // @smithy/util-stream-node, but sdkStreamMixin, ChecksumStream, headStream and
    // five others live only in @smithy/util-stream. This is a content problem, not a
    // version problem: no published version of the declared dependency has them.
    //
    // The payload that this build replaces applied the same redirects, so reproducing
    // them keeps its API surface intact. Dropping them silently removes 9 exports that
    // customer functions may already import.
    //
    // All three dist directories are rewritten, not just dist-cjs. These packages have
    // no `exports` map, so resolution falls back to main / module / types — leaving
    // module and types pointing at the wrong package would resolve correctly at
    // runtime and incorrectly for bundlers and TypeScript.
    for (const [name, target] of Object.entries(overrides ?? {})) {
      const pkgDir = join(nodeModulesDir, name);
      if (!existsSync(pkgDir)) {
        throw new Error(`override declared for ${name}, which is not in the tree.`);
      }

      const cjs = join(pkgDir, "dist-cjs", "index.js");
      if (existsSync(cjs)) {
        writeFileSync(
          cjs,
          `"use strict"; // re-export override from AWS SDK custom build.\n` +
            `Object.defineProperty(exports, "__esModule", { value: true });\n` +
            `const tslib_1 = require("tslib");\n` +
            `tslib_1.__exportStar(require("${target}"), exports);\n`
        );
      }

      const es = join(pkgDir, "dist-es", "index.js");
      if (existsSync(es)) {
        writeFileSync(es, `export * from "${target}";\n`);
      }

      const types = join(pkgDir, "dist-types", "index.d.ts");
      if (existsSync(types)) {
        writeFileSync(types, `export * from "${target}";\n`);
      }

      log(`   override: ${name} -> ${target}`);
    }
    if (overrides && Object.keys(overrides).length) {
      log(`4b. applied ${Object.keys(overrides).length} re-export overrides`);
    }
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
    legacyPackagesFrom: skipLegacy ? null : "legacy-packages.json",
  };
  writeFileSync(join(outDir, "metadata.json"), JSON.stringify(metadata, null, 2) + "\n");

  // The pinned list travels with the payload so the deprecated packages it contains
  // are auditable without reading the SDK repo at the matching commit.
  copyFileSync(
    join(__dirname, "legacy-packages.json"),
    join(outDir, "legacy-packages.json")
  );

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
    ["-ryq", zipPath, "node_modules", "metadata.json", "legacy-packages.json"],
    { cwd: outDir }
  );
  const checksum = execFileSync("sha256sum", [zipName], { cwd: outDir, encoding: "utf-8" });
  writeFileSync(join(outDir, `${zipName}.sha256`), checksum);

  log(`7. ${zipName}  ${(statSync(zipPath).size / 1024 / 1024).toFixed(1)} MB`);
  log(`8. ${zipName}.sha256  ${checksum.trim().split(/\s+/)[0]}`);
};

main();
