#!/usr/bin/env node
// @ts-check
/**
 * Maintenance tool. Rebuilds `vendor/` — the packages the assembler cannot obtain any
 * other way. Not part of the build; `index.mjs` only reads what this writes.
 *
 * Selection is derived, not guessed: assemble a payload with --skip-legacy so it holds
 * only the workspace packages and their dependency closure, then vendor every re-export
 * target missing from it. Presence in the repo's own node_modules is NOT the test —
 * `yarn install` fetches far more than the dependency walk reaches, and using it as the
 * criterion under-selects.
 *
 * Bytes are copied from --source, an existing assembled payload or any node_modules
 * holding the packages at the versions you want frozen. This tool does not fetch: a
 * version choice for a newly-needed package is a decision, not a default.
 *
 * @example
 * ```
 * # what would change, without writing
 * node vendor-populate.mjs --check --baseline /tmp/base/node_modules --source /tmp/payload/node_modules
 *
 * # rewrite vendor/
 * node vendor-populate.mjs --baseline /tmp/base/node_modules --source /tmp/payload/node_modules
 * ```
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const VENDOR = join(__dirname, "vendor");
const SPEC = join(__dirname, "shim-targets.json");

const argv = process.argv.slice(2);
const flag = (/** @type {string} */ n) => argv.includes(`--${n}`);
const option = (/** @type {string} */ n) => {
  const i = argv.indexOf(`--${n}`);
  return i === -1 || !argv[i + 1] ? null : argv[i + 1];
};

const usage =
  "usage: vendor-populate.mjs --baseline <node_modules built with --skip-legacy> " +
  "--source <node_modules holding the packages> [--check]";

const die = (/** @type {string} */ message) => {
  console.error(message);
  process.exit(1);
};

const BASELINE = option("baseline");
const SOURCE = option("source");
const checkOnly = flag("check");

if (!BASELINE || !SOURCE) die(usage);
if (!existsSync(/** @type {string} */ (BASELINE))) die(`no baseline at ${BASELINE}`);
if (!existsSync(/** @type {string} */ (SOURCE))) die(`no source at ${SOURCE}`);

const read = (/** @type {string} */ p) => JSON.parse(readFileSync(p, "utf-8"));
const spec = read(SPEC).awsSdkShims;

// Both trees have the layout applied, so anything outside @aws-sdk sits under
// @aws-sdk/node_modules. Check both locations rather than inferring from the scope.
const locate = (/** @type {string} */ root, /** @type {string} */ name) => {
  const nested = join(root, "@aws-sdk/node_modules", name);
  if (existsSync(nested)) return nested;
  const top = join(root, name);
  return existsSync(top) ? top : null;
};

/** Names the assembler generates, so they never need vendoring. */
const generated = new Set(
  Object.entries(spec)
    .filter(([, e]) => /** @type {any} */ (e).target && !/** @type {any} */ (e).target.startsWith("./"))
    .map(([name]) => name)
);

const needed = new Set();
const missingFromSource = [];
const consider = (/** @type {string} */ name) => {
  if (needed.has(name) || generated.has(name)) return;
  if (locate(/** @type {string} */ (BASELINE), name)) return; // components (a) and (b) deliver it
  needed.add(name);

  // A vendored package is useless without its own dependencies, and those are subject to
  // the same reachability problem — the dependency walk never visits them either.
  const src = locate(/** @type {string} */ (SOURCE), name);
  if (!src) {
    missingFromSource.push(name);
    return;
  }
  for (const dep of Object.keys(read(join(src, "package.json")).dependencies ?? {})) {
    consider(dep);
  }
};

for (const [name, entry] of Object.entries(spec)) {
  const target = /** @type {any} */ (entry).target;
  if (!target || target.startsWith("./")) {
    consider(name); // ships real code rather than forwarding
    continue;
  }
  if (target.startsWith("@aws-sdk/")) continue; // forwards to another generated forwarder
  consider(target);
}

const wanted = [...needed].sort();

// What is in vendor/ today, so --check can report a delta.
const current = new Set();
const walkVendor = (/** @type {string} */ dir) => {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const q = join(dir, e.name);
    if (existsSync(join(q, "package.json"))) current.add(relative(VENDOR, q));
    else walkVendor(q);
  }
};
walkVendor(VENDOR);

const toAdd = wanted.filter((n) => !current.has(n));
const toRemove = [...current].filter((n) => !wanted.includes(n)).sort();

console.log(`baseline : ${BASELINE}`);
console.log(`source   : ${SOURCE}`);
console.log(`required : ${wanted.length} packages`);
console.log(`  already vendored : ${wanted.length - toAdd.length}`);
console.log(`  to add           : ${toAdd.length}${toAdd.length ? `  (${toAdd.join(", ")})` : ""}`);
console.log(`  now unused       : ${toRemove.length}${toRemove.length ? `  (${toRemove.join(", ")})` : ""}`);

if (missingFromSource.length) {
  console.error(
    `\n${missingFromSource.length} required package(s) are not in --source, so they cannot be ` +
      `vendored:\n  ${missingFromSource.join("\n  ")}\n` +
      `Fetch them at the version you want frozen, then point --source at a tree containing them.`
  );
  process.exit(1);
}

if (checkOnly) {
  console.log("\n--check: nothing written");
  process.exit(toAdd.length || toRemove.length ? 2 : 0);
}

// --------------------------------------------------------------------------- write

// Only the CommonJS build is vendored. Which directory that is varies — @smithy packages
// use dist-cjs, @aws-crypto packages use build/main — so derive it from `main` rather than
// assuming. Entry-point keys pointing outside the kept directory are removed, because they
// would reference build output that is not here. @aws-crypto keeps `types`, whose
// declarations sit inside build/main alongside the JavaScript.
const ENTRY_KEYS = ["module", "types", "typings", "browser", "react-native", "exports"];

rmSync(VENDOR, { recursive: true, force: true });
mkdirSync(VENDOR, { recursive: true });

const records = [];
for (const name of wanted) {
  const src = /** @type {string} */ (locate(/** @type {string} */ (SOURCE), name));
  const dest = join(VENDOR, name);
  mkdirSync(dest, { recursive: true });

  const manifest = read(join(src, "package.json"));
  const main = manifest.main ?? "./index.js";
  const keptDir = main.replace(/^\.\//, "").split("/").slice(0, -1).join("/");
  if (!keptDir || !existsSync(join(src, keptDir))) {
    die(`${name}: cannot tell which directory to vendor from main="${main}"`);
  }

  for (const key of ENTRY_KEYS) {
    if (!(key in manifest)) continue;
    const paths = JSON.stringify(manifest[key]).match(/\.\/[^"]+/g) ?? [];
    const allInside = paths.length > 0 && paths.every((p) => p.startsWith(`./${keptDir}/`));
    if (!allInside) delete manifest[key];
  }
  delete manifest.typesVersions; // remaps into dist-types/ts3.4, never vendored
  writeFileSync(join(dest, "package.json"), `${JSON.stringify(manifest, null, 2)}\n`);

  cpSync(join(src, keptDir), join(dest, keptDir), { recursive: true });
  for (const extra of ["LICENSE", "README.md"]) {
    if (existsSync(join(src, extra))) cpSync(join(src, extra), join(dest, extra));
  }

  let bytes = 0;
  let files = 0;
  const measure = (/** @type {string} */ p) => {
    for (const e of readdirSync(p, { withFileTypes: true })) {
      const q = join(p, e.name);
      if (e.isDirectory()) measure(q);
      else {
        bytes += statSync(q).size;
        files++;
      }
    }
  };
  measure(dest);
  records.push({ name, version: manifest.version, main: manifest.main, bytes, files });
}

const totalBytes = records.reduce((a, r) => a + r.bytes, 0);
const totalFiles = records.reduce((a, r) => a + r.files, 0);
const pinnedOld = records.filter((r) => !r.version.startsWith("4."));

writeFileSync(
  join(VENDOR, "README.md"),
  `# vendor/

Packages the assembler cannot obtain from anywhere else.

Everything else in the payload comes from the release workspace: the publishable
\`@aws-sdk/*\` packages are copied out of the repo, and their runtime dependency closure is
copied out of the root \`node_modules\` that \`yarn install\` produced. These are the
exception, for one of two reasons:

1. The package is the re-export target of a deprecated \`@aws-sdk/*\` package (see
   \`shim-targets.json\`) that nothing in the modern SDK depends on. Because the dependency
   walk never reaches it, it is absent from the assembled tree even when \`yarn install\`
   happened to fetch it. \`@smithy/md5-js\` is typical: the SDK moved to CRC32 and SHA-256
   checksums, but code written against \`@aws-sdk/md5-js\` still has to work.
2. \`@aws-sdk/middleware-sdk-eventbridge\` ships real code rather than a forwarder, so it
   cannot be generated.

Regenerate with \`vendor-populate.mjs\`, which derives the list rather than trusting one.

## This directory is static

These are frozen versions of packages that are themselves deprecated. Nothing refreshes
them, by design. Changing one is a deliberate edit with a reason.

${pinnedOld.length ? `Some are held below the version the workspace carries (${pinnedOld.map((r) => `\`${r.name}\` ${r.version}`).join(", ")}), because those are the versions the payload ships and the recorded API snapshot was captured against them.\n` : ""}
## CommonJS only

Lambda executes CommonJS, and P1 minimization deletes \`dist-es\` and \`dist-types\` from the
payload anyway. Which directory holds the CJS build varies — \`@smithy\` packages use
\`dist-cjs\`, \`@aws-crypto\` packages use \`build/main\` — so it is derived from each
manifest's \`main\`. Entry-point keys pointing outside the kept directory are removed,
because they would reference build output that is not here. \`@aws-crypto\` keeps \`types\`,
whose declarations sit inside \`build/main\`. Manifests are otherwise as published.

## Contents

| package | version | files | bytes |
|---|---|---|---|
${records.map((r) => `| \`${r.name}\` | ${r.version} | ${r.files} | ${r.bytes.toLocaleString()} |`).join("\n")}

**${records.length} packages, ${totalFiles} files, ${(totalBytes / 1024 / 1024).toFixed(2)} MB.**
`
);

console.log(
  `\nwrote ${records.length} packages, ${totalFiles} files, ${(totalBytes / 1024 / 1024).toFixed(2)} MB`
);
const broken = records.filter((r) => !existsSync(join(VENDOR, r.name, r.main ?? "index.js")));
console.log(
  broken.length
    ? `  ${broken.length} package(s) with an unresolvable main: ${broken.map((r) => r.name).join(", ")}`
    : "  all `main` entry points resolve"
);
process.exit(broken.length ? 1 : 0);
