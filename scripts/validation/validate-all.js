#!/usr/bin/env node

/**
 * Orchestrator: runs all validation scripts against all packages.
 * Bus-compatible validators (7) ride a single AST bus for one-pass parsing.
 * Non-bus validators run as subprocesses.
 *
 * Usage:
 *   node validate-all.js
 *   node validate-all.js --skip eslint
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { createBus } = require("./ast-bus");
const { getPackageDirs } = require("./validation-shared");

const root = path.join(__dirname, "..", "..");
const validationDir = __dirname;

const PACKAGE_ROOTS = ["clients", "packages", "packages-internal", "lib", "private"];

// Bus-compatible validators — these ride one bus together.
const BUS_VALIDATIONS = [
  { name: "imports-declared", label: "all imports are declared in package.json", module: "./imports-declared.js" },
  {
    name: "relative-imports",
    label: "all relative imports resolve to existing files",
    module: "./relative-imports.js",
  },
  { name: "deps-used", label: "all declared dependencies are actually imported", module: "./deps-used.js" },
  { name: "unreachable-files", label: "no unreachable files in dist bundles", module: "./unreachable-files.js" },
  {
    name: "static-import-names",
    label: "no dynamic imports with non-literal specifiers",
    module: "./static-import-names.js",
  },
  { name: "banned-imports", label: "no banned imports in dist output", module: "./banned-imports.js" },
  { name: "no-export-star", label: "no export * in source", module: "./no-export-star.js" },
  { name: "cycles", label: "no cyclical file or package dependencies", module: "./cycles.js" },
];

// Non-bus validators — run as subprocesses.
const SUBPROCESS_VALIDATIONS = [
  {
    name: "built",
    label: "all packages have build artifacts",
    script: "built.js",
    inspects: ["dist-cjs", "dist-es", "dist-types"],
  },
  {
    name: "esm-compat",
    label: "dist-cjs exports visible via ESM import()",
    script: "esm-compat.js",
    inspects: ["dist-cjs"],
  },
  {
    name: "export-names",
    label: "export function names match their keys",
    script: "export-names.js",
    inspects: ["dist-cjs"],
  },
  { name: "eslint", label: "eslint passes on source", script: "eslint.js", inspects: ["src"] },
  {
    name: "filenames",
    label: "no suspicious multi-dot filenames in dist",
    script: "filenames.js",
    inspects: ["dist-cjs", "dist-es"],
  },
];

function parseArgs() {
  const args = process.argv.slice(2);
  const skip = new Set();

  for (let i = 0; i < args.length; ++i) {
    if (args[i] === "--skip") {
      skip.add(args[++i]);
    }
  }

  return { skip };
}

async function runBusValidations(skip, packages) {
  const failures = [];
  const warnings = [];

  // Only load validators not being skipped.
  const activeValidations = BUS_VALIDATIONS.filter((v) => !skip.has(v.name));
  if (!activeValidations.length) {
    return { failures, warnings, summary: "" };
  }

  const bus = createBus({ packages });
  const validatorMap = new Map();

  for (const validation of activeValidations) {
    const mod = require(validation.module);
    // deps-used needs the packages list to compare declared deps against usage.
    const validator = validation.name === "deps-used" ? mod.createValidator(packages) : mod.createValidator();
    bus.register(validator);
    validatorMap.set(validation.name, { validation, validator });
  }

  // Single AST pass over all files — each validator fires its callbacks.
  await bus.run();

  for (const { validation, validator } of validatorMap.values()) {
    const errors = validator.getErrors ? validator.getErrors() : [];
    const validatorWarnings = validator.getWarnings ? validator.getWarnings() : [];
    const inspected = validator.inspects || validator.targets;

    if (errors.length) {
      console.log(`❌ ${validation.label}`);
      console.log(`    [${inspected.join(", ")}]`);
      failures.push({ name: validation.name, output: `${errors.length} error(s):\n  ${errors.join("\n  ")}` });
    } else if (validatorWarnings.length) {
      console.log(`⚠️  ${validation.label}`);
      console.log(`    [${inspected.join(", ")}]`);
      warnings.push({
        name: validation.name,
        output: `${validatorWarnings.length} warning(s):\n  ${validatorWarnings.join("\n  ")}`,
      });
    } else {
      console.log(`✅ ${validation.label}`);
      console.log(`    [${inspected.join(", ")}]`);
    }
  }

  return { failures, warnings, summary: bus.getSummary() };
}

function runSubprocessValidations(skip) {
  const failures = [];
  const warnings = [];

  for (const { name, label, script, inspects } of SUBPROCESS_VALIDATIONS) {
    if (skip.has(name)) {
      console.log(`⏭  ${label}`);
      continue;
    }

    try {
      const output = execFileSync("node", [path.join(validationDir, script)], {
        cwd: root,
        stdio: "pipe",
        encoding: "utf-8",
      });
      if (output.includes("⚠️")) {
        console.log(`⚠️  ${label}`);
        console.log(`    [${inspects.join(", ")}]`);
        warnings.push({ name, output });
      } else {
        const counts = output.match(/\(([^)]+)\)/)?.[1] || "";
        console.log(`✅ ${label}${counts ? ` (${counts})` : ""}`);
        console.log(`    [${inspects.join(", ")}]`);
      }
    } catch (e) {
      console.log(`❌ ${label}`);
      console.log(`    [${inspects.join(", ")}]`);
      failures.push({ name, output: e.stdout || e.stderr || e.message });
    }
  }

  return { failures, warnings };
}

async function main() {
  const { skip } = parseArgs();

  const packages = getPackageDirs();
  let count = 0;
  for (const pkgRoot of PACKAGE_ROOTS) {
    const dir = path.join(root, pkgRoot);
    if (fs.existsSync(dir)) {
      count += fs.readdirSync(dir).filter((f) => fs.existsSync(path.join(dir, f, "package.json"))).length;
    }
  }

  const totalValidations = BUS_VALIDATIONS.length + SUBPROCESS_VALIDATIONS.length;
  console.log(`Running validations on ${count} package(s)...\n`);

  // Subprocess validators run first (no AST, fast feedback on missing build artifacts).
  const subprocess = runSubprocessValidations(skip);

  // Bus validators share a single AST walk over all dist files.
  const busResult = await runBusValidations(skip, packages);

  const failures = [...subprocess.failures, ...busResult.failures];
  const warnings = [...subprocess.warnings, ...busResult.warnings];

  if (warnings.length) {
    console.log("");
    for (const { name, output } of warnings) {
      console.log(`--- ${name} ---\n${output}`);
    }
  }

  console.log("");
  if (failures.length) {
    const active = totalValidations - skip.size;
    console.error(`${failures.length}/${active} validation(s) failed:\n`);
    for (const { name, output } of failures) {
      console.error(`--- ${name} ---\n${output}\n`);
    }
    process.exit(1);
  }

  // Self-test: verify the validators catch known violations.
  try {
    execFileSync("node", [path.join(validationDir, "validate-all.test.js")], {
      cwd: root,
      stdio: "pipe",
      encoding: "utf-8",
    });
    console.log(`✅ self-test passed`);
  } catch (e) {
    console.error(`❌ self-test failed:\n${e.stdout || e.stderr || e.message}`);
    process.exit(1);
  }

  console.log(`\nAll validations passed. (${busResult.summary})`);
}

main();
