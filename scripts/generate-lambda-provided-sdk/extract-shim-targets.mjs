#!/usr/bin/env node
// @ts-check
/**
 * Maintenance tool. Rebuilds `shim-targets.json` from this repository's own history.
 * Not part of the build; `index.mjs` only reads what this writes.
 *
 * Commit bb2232f76f4, "chore(packages): re-export from migrated packages", replaced each
 * deprecated package's `src/index.ts` with a single `export * from "<target>"`. Those
 * packages were later moved to `deprecated/packages/` and then deleted, so that commit is
 * the only remaining record in this repository of where each deprecated name forwards to.
 * The mapping cannot be re-derived from the names: 41 of the 47 follow
 * @aws-sdk/X -> @smithy/X and the rest do not, because those packages were consolidated
 * rather than renamed.
 *
 * The export surface each forwarder must provide comes from the Lambda payload's
 * cumulative API snapshot, which lives in the AwsSdkJavaScriptForLambda package. Only the
 * ~7 KB slice covering these packages is copied here, so the assembler can verify them
 * without reaching outside this repo. The full snapshot remains authoritative for the
 * whole tree.
 *
 * @example
 * ```
 * node extract-shim-targets.mjs --snapshot ~/AwsSdkJavaScriptForLambda/lambda-provided-sdk-api-snapshot.json
 * ```
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, "..", "..");
const OUT = join(__dirname, "shim-targets.json");

const argv = process.argv.slice(2);
const option = (/** @type {string} */ n) => {
  const i = argv.indexOf(`--${n}`);
  return i === -1 || !argv[i + 1] ? null : argv[i + 1];
};

const die = (/** @type {string} */ m) => {
  console.error(m);
  process.exit(1);
};

const SNAPSHOT = option("snapshot");
const COMMIT = option("commit") ?? "bb2232f76f4";

if (!SNAPSHOT) {
  die(
    "usage: extract-shim-targets.mjs --snapshot <lambda-provided-sdk-api-snapshot.json> [--commit <sha>]"
  );
}
if (!existsSync(/** @type {string} */ (SNAPSHOT))) die(`no snapshot at ${SNAPSHOT}`);

const git = (/** @type {string[]} */ args) =>
  execFileSync("git", args, {
    cwd: REPO,
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "ignore"],
    maxBuffer: 256 * 1024 * 1024,
  });

try {
  git(["cat-file", "-e", `${COMMIT}^{commit}`]);
} catch {
  die(`commit ${COMMIT} is not in this repository — the mapping cannot be rebuilt without it.`);
}

const snapshot = JSON.parse(readFileSync(/** @type {string} */ (SNAPSHOT), "utf-8"));
const existing = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf-8")).awsSdkShims : {};

// Scoped to the directories the deprecated packages lived in; listing the whole tree at
// that commit is several hundred clients' worth of paths.
const indexFiles = git(["ls-tree", "-r", "--name-only", COMMIT, "packages/", "lib/", "private/"])
  .split("\n")
  .filter((p) => p.endsWith("/src/index.ts"));

// Index by the name the sibling manifest declares, rather than guessing the directory
// from the package name.
const byName = new Map();
for (const indexPath of indexFiles) {
  const manifestPath = indexPath.replace(/src\/index\.ts$/, "package.json");
  try {
    const { name } = JSON.parse(git(["show", `${COMMIT}:${manifestPath}`]));
    if (name) byName.set(name, indexPath);
  } catch {
    // no sibling manifest; not a package root
  }
}

const requiredExports = (/** @type {string} */ name) =>
  Object.keys(snapshot[name] ?? {})
    .filter((k) => k !== "module.exports")
    .sort();

const resolved = {};
const unresolved = [];

for (const [name, previous] of Object.entries(existing)) {
  const version = /** @type {any} */ (previous).version;
  const indexPath = byName.get(name);
  let target = null;
  let note;

  if (indexPath) {
    const src = git(["show", `${COMMIT}:${indexPath}`]);
    const reexports = [...src.matchAll(/export\s+\*\s+from\s+"([^"]+)"/g)].map((m) => m[1]);
    if (reexports.length === 1) [target] = reexports;
    else if (reexports.length > 1) note = `multiple re-exports: ${reexports.join(", ")}`;
    else note = "no `export * from` — not a pure forwarder";
  } else {
    note = `not present at ${COMMIT}`;
  }

  const entry = { version, exports: requiredExports(name) };

  if (target) {
    // Where history and practice disagree, practice wins — the committed target is kept
    // and the historical one recorded, so the difference reads as a known correction
    // rather than a transcription error.
    const committed = /** @type {any} */ (previous);
    if (committed.source === "corrected" && committed.target !== target) {
      resolved[name] = {
        ...entry,
        target: committed.target,
        source: "corrected",
        historicalTarget: target,
        note: committed.note,
      };
    } else {
      resolved[name] = { ...entry, target, source: COMMIT };
    }
  } else {
    // Deprecated before the migration commit, so the automated pass cannot find it.
    // Carry the committed decision forward rather than dropping the entry.
    const committed = /** @type {any} */ (previous);
    resolved[name] = {
      ...entry,
      target: committed.target ?? null,
      source: "manual",
      note: committed.note ?? note,
    };
    unresolved.push({ name, note });
  }
}

writeFileSync(
  OUT,
  `${JSON.stringify(
    {
      _comment: [
        "Re-export targets for the deprecated @aws-sdk packages shipped in the Lambda-provided",
        "SDK payload. Each is a forwarder: its dist-cjs/index.js is a single __exportStar of",
        "`target`, which the assembler generates rather than installing.",
        "",
        `Targets were extracted from ${COMMIT} ("chore(packages): re-export from migrated`,
        'packages"), which replaced each deprecated package\'s src/index.ts with one',
        "`export * from`. Those packages were later deleted from the repo, so that commit is",
        "the only remaining record of the mapping here. Rebuild with extract-shim-targets.mjs.",
        "",
        "`exports` is the symbol set the Lambda payload's cumulative API snapshot requires. It",
        "is a floor, not an exact set: the assembler asserts at least these are present. The",
        "full snapshot lives in AwsSdkJavaScriptForLambda and remains authoritative.",
        "",
        "`source` records how each target was determined: the commit hash for the automated",
        "extraction, `manual` for packages deprecated before it, `corrected` where the",
        "historical target does not satisfy the snapshot.",
      ],
      awsSdkShims: resolved,
    },
    null,
    2
  )}\n`
);

const bySource = {};
for (const e of Object.values(resolved)) {
  const s = /** @type {any} */ (e).source;
  bySource[s] = (bySource[s] ?? 0) + 1;
}
console.log(`wrote ${OUT}`);
console.log(`  entries   : ${Object.keys(resolved).length}`);
console.log(`  by source : ${JSON.stringify(bySource)}`);
console.log(
  `  exports   : ${Object.values(resolved).reduce((a, e) => a + /** @type {any} */ (e).exports.length, 0)}`
);
if (unresolved.length) {
  console.log(`  carried forward from the committed file (not in ${COMMIT}):`);
  unresolved.forEach((u) => console.log(`    ${u.name}  — ${u.note}`));
}
