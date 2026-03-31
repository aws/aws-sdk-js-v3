/**
 * Prepares a self-contained performance test artifact directory.
 *
 * Copies into <artifact-dir>:
 *   - runner/ and applications/ from this package
 *   - node_modules/ from this package (bundler tools: esbuild, webpack, vite, etc.)
 *   - non-workspace npm packages from monorepo root node_modules (e.g. @aws-crypto/*, bowser)
 *   - workspace @aws-sdk/* and @smithy/* packages (dist-es, dist-cjs, package.json only)
 *   - lerna.json for sdkVersion
 *
 * Usage: node runner/prepare-artifact.mjs <artifact-dir> <monorepo-root>
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PERF_TESTS_DIR = path.resolve(__dirname, "..");

const artifactDir = process.argv[2];
const monorepoRoot = process.argv[3];

if (!artifactDir || !monorepoRoot) {
  process.stderr.write("Usage: node prepare-artifact.mjs <artifact-dir> <monorepo-root>\n");
  process.exit(1);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const dir of ["runner", "applications"]) {
  copyDir(path.join(PERF_TESTS_DIR, dir), path.join(artifactDir, dir));
}

const monorepoModules = path.join(monorepoRoot, "node_modules");

// Copy bundler node_modules (esbuild, webpack, vite, etc.) — these take precedence
const bundlerModules = path.join(PERF_TESTS_DIR, "node_modules");
if (fs.existsSync(bundlerModules)) {
  copyDir(bundlerModules, path.join(artifactDir, "node_modules"));
}

// Copy non-workspace npm packages needed at bundle time.
const RUNTIME_SCOPES = ["@aws-crypto", "@aws-smithy", "@aws"];
for (const scope of RUNTIME_SCOPES) {
  const scopeDir = path.join(monorepoModules, scope);
  if (!fs.existsSync(scopeDir)) continue;
  copyDir(scopeDir, path.join(artifactDir, "node_modules", scope));
}

// Non-scoped runtime deps referenced by SDK packages
const RUNTIME_PACKAGES = ["bowser", "mnemonist", "obliterator", "fflate", "fast-xml-parser", "tslib", "uuid"];
for (const pkg of RUNTIME_PACKAGES) {
  const src = path.join(monorepoModules, pkg);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(artifactDir, "node_modules", pkg));
  }
}

// Copy workspace @aws-sdk/* and @smithy/* packages into artifact node_modules.
// These are symlinks in the monorepo's node_modules pointing to the actual package dirs.
for (const scope of ["@aws-sdk", "@smithy"]) {
  const scopeDir = path.join(monorepoModules, scope);
  if (!fs.existsSync(scopeDir)) continue;

  for (const entry of fs.readdirSync(scopeDir, { withFileTypes: true })) {
    const realPkgDir = fs.realpathSync(path.join(scopeDir, entry.name));
    const destPkgDir = path.join(artifactDir, "node_modules", scope, entry.name);

    fs.mkdirSync(destPkgDir, { recursive: true });

    const pkgJson = path.join(realPkgDir, "package.json");
    if (fs.existsSync(pkgJson)) {
      fs.copyFileSync(pkgJson, path.join(destPkgDir, "package.json"));
    }
    for (const distDir of ["dist-es", "dist-cjs"]) {
      const src = path.join(realPkgDir, distDir);
      if (fs.existsSync(src)) {
        copyDir(src, path.join(destPkgDir, distDir));
      }
    }
    for (const f of fs.readdirSync(realPkgDir)) {
      if (f.endsWith(".js") || f.endsWith(".d.ts")) {
        fs.copyFileSync(path.join(realPkgDir, f), path.join(destPkgDir, f));
      }
    }
  }
}

const lernaJson = path.join(monorepoRoot, "lerna.json");
if (fs.existsSync(lernaJson)) {
  fs.copyFileSync(lernaJson, path.join(artifactDir, "lerna.json"));
}

process.stdout.write(`Artifact prepared at: ${artifactDir}\n`);
