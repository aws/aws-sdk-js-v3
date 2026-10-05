#!/usr/bin/env node
// @ts-check
/**
 * Scans an already-assembled Lambda-provided-SDK payload for known vulnerabilities.
 *
 * A thin shim over `trivy rootfs`. The subcommand is the reason this file exists:
 * the payload ships no lockfile, and `trivy fs` reports "0 language-specific files"
 * on it and exits 0 — indistinguishable from a clean result. Only `rootfs` enables
 * the node-pkg analyzer that reads installed package.json files.
 *
 * Trivy's own output and exit code are passed straight through. Any extra arguments
 * are forwarded, so `--severity HIGH,CRITICAL`, `--format json` and friends all work.
 *
 * @example
 * ```
 * node scripts/generate-lambda-provided-sdk/scan-payload.mjs --tree /tmp/out
 * node scripts/generate-lambda-provided-sdk/scan-payload.mjs --tree /tmp/out --severity HIGH,CRITICAL
 * ```
 */

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const argv = process.argv.slice(2);

/** Reads `--name value` and removes both from argv, so the rest can be forwarded. */
const take = (/** @type {string} */ name) => {
  const i = argv.indexOf(`--${name}`);
  if (i === -1 || !argv[i + 1]) return null;
  return argv.splice(i, 2)[1];
};

const treeArg = take("tree");
const trivy = take("trivy") ?? process.env.TRIVY_BIN ?? "trivy";

const die = (/** @type {string} */ message) => {
  console.error(`scan did not run: ${message}`);
  process.exit(1);
};

if (!treeArg) {
  die("--tree <payload dir> is required.\nusage: scan-payload.mjs --tree <dir> [--trivy <path>] [...trivy args]");
}

// Accept either the directory index.mjs was given as --out, or its node_modules.
const tree = /** @type {string} */ (treeArg).replace(/\/+$/, "");
const nodeModules = tree.endsWith("node_modules") ? tree : join(tree, "node_modules");
if (!existsSync(nodeModules)) die(`no node_modules at ${nodeModules}`);

const { status, error } = spawnSync(
  trivy,
  ["rootfs", "--scanners", "vuln", ...argv, nodeModules],
  { stdio: "inherit" }
);

if (error) {
  die(
    `cannot run trivy (tried "${trivy}"). Install it, pass --trivy <path>, or set ` +
      "TRIVY_BIN. See https://trivy.dev/latest/getting-started/installation/"
  );
}

process.exit(status ?? 1);
