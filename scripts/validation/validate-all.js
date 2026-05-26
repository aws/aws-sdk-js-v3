#!/usr/bin/env node

/**
 * Orchestrator: runs all validation scripts against specified package directories.
 *
 * Usage:
 *   node validate-all.js --all
 *   node validate-all.js --skip eslint
 *   node validate-all.js <packageDir> [...]
 *
 * Options:
 *   --all           Run on all packages in clients/, packages/, packages-internal/, lib/, private/
 *   --skip <name>   Skip a validation (repeatable)
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const validationDir = __dirname;

const TOP_LEVEL_DIRS = ["clients", "packages", "packages-internal", "lib", "private"];
const GENERATED_DIRS = new Set(["clients", "private"]);

const VALIDATIONS = [
  { name: "imports-declared", script: "validate-imports-declared.js" },
  { name: "relative-imports", script: "validate-relative-imports.js" },
  { name: "deps-used", script: "validate-deps-used.js" },
  { name: "no-unreachable-files", script: "validate-no-unreachable-files.js" },
  { name: "no-dynamic-imports", script: "validate-no-dynamic-imports.js" },
  { name: "banned-imports", script: "validate-banned-imports.js" },
  { name: "eslint", script: "validate-eslint.js", filter: "non-generated" },
];

function parseArgs() {
  const args = process.argv.slice(2);
  const allDirs = [];
  const skip = new Set();
  let useAll = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--all") {
      useAll = true;
    } else if (args[i] === "--skip") {
      skip.add(args[++i]);
    } else {
      allDirs.push(path.resolve(args[i]));
    }
  }

  if (useAll) {
    for (const topDir of TOP_LEVEL_DIRS) {
      const base = path.join(root, topDir);
      if (!fs.existsSync(base)) {
        continue;
      }
      for (const folder of fs.readdirSync(base)) {
        const pkgDir = path.join(base, folder);
        if (fs.existsSync(path.join(pkgDir, "package.json"))) {
          allDirs.push(pkgDir);
        }
      }
    }
  }

  return { allDirs, skip };
}

function isGenerated(dir) {
  const rel = path.relative(root, path.resolve(dir));
  const topDir = rel.split(path.sep)[0];
  return GENERATED_DIRS.has(topDir);
}

function main() {
  const { allDirs, skip } = parseArgs();

  if (!allDirs.length) {
    console.error("Usage: validate-all.js [--all] [--skip <name>] <packageDir> [...]");
    process.exit(1);
  }

  const generated = allDirs.filter(isGenerated);
  const nonGenerated = allDirs.filter((d) => !isGenerated(d));

  console.log(
    `Running validations on ${allDirs.length} package(s) (${generated.length} generated, ${nonGenerated.length} non-generated)...\n`
  );

  const failures = [];
  const warnings = [];

  for (const { name, script, filter } of VALIDATIONS) {
    if (skip.has(name)) {
      console.log(`⏭  ${name}`);
      continue;
    }

    let dirs;
    if (filter === "generated") {
      dirs = generated;
    } else if (filter === "non-generated") {
      dirs = nonGenerated;
    } else {
      dirs = allDirs;
    }

    if (!dirs.length) {
      console.log(`⏭  ${name} (no matching packages)`);
      continue;
    }

    try {
      const output = execFileSync("node", [path.join(validationDir, script), ...dirs], {
        cwd: root,
        stdio: "pipe",
        encoding: "utf-8",
      });
      if (output.includes("⚠️")) {
        console.log(`⚠️  ${name}`);
        warnings.push({ name, output });
      } else {
        console.log(`✅ ${name}`);
      }
    } catch (e) {
      console.log(`❌ ${name}`);
      failures.push({ name, output: e.stdout || e.stderr || e.message });
    }
  }

  if (warnings.length) {
    console.log("");
    for (const { name, output } of warnings) {
      console.log(`--- ${name} ---\n${output}`);
    }
  }

  console.log("");
  if (failures.length) {
    console.error(`${failures.length}/${VALIDATIONS.length - skip.size} validation(s) failed:\n`);
    for (const { name, output } of failures) {
      console.error(`--- ${name} ---\n${output}\n`);
    }
    process.exit(1);
  }
  console.log(`All validations passed.`);
}

main();
