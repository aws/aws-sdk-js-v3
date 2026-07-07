/**
 * Batch ES module transpilation using oxc-transform for multiple packages.
 *
 * Usage:
 *   node scripts/compilation/build-es-batch.js client-s3 client-dynamodb core
 *   node scripts/compilation/build-es-batch.js --all
 *   node scripts/compilation/build-es-batch.js --concurrency 8 client-s3 client-dynamodb
 */

const path = require("node:path");
const fs = require("node:fs");
const { transformSync } = require("oxc-transform");
const { parseSync } = require("oxc-parser");
const { listFolders } = require("../utils/list-folders");

const root = path.join(__dirname, "..", "..");

const args = process.argv.slice(2);
const concurrency = (() => {
  const idx = args.indexOf("--concurrency");
  if (idx !== -1) {
    const val = parseInt(args[idx + 1], 10);
    args.splice(idx, 2);
    return val;
  }
  return 6;
})();

const all = args.includes("--all");
if (all) args.splice(args.indexOf("--all"), 1);

function getAllPackages() {
  const packages = [];
  for (const pkg of listFolders(path.join(root, "packages"))) packages.push(pkg);
  for (const pkg of listFolders(path.join(root, "packages-internal"))) packages.push(pkg);
  for (const lib of listFolders(path.join(root, "lib"))) packages.push(`lib-${lib.replace(/^lib-/, "")}`);
  for (const pkg of listFolders(path.join(root, "clients"))) packages.push(pkg);
  return packages;
}

function resolvePackageDir(pkg) {
  const candidates = [
    path.join(root, "clients", pkg),
    path.join(root, "packages", pkg),
    path.join(root, "packages-internal", pkg),
    path.join(root, "lib", pkg),
    path.join(root, "lib", `lib-${pkg}`),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir;
  }
  return null;
}

/**
 * Remove comments using oxc-parser's AST comment positions.
 */
function stripComments(code) {
  const { comments } = parseSync("file.js", code);
  if (!comments.length) return code;
  let result = "";
  let last = 0;
  for (const { start, end } of comments) {
    result += code.slice(last, start);
    last = end;
  }
  result += code.slice(last);
  return result.replace(/^\s*\n/gm, "");
}

function processDir(srcDir, outDir) {
  let count = 0;
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(srcDir, entry.name);
    if (entry.isDirectory()) {
      count += processDir(fullPath, path.join(outDir, entry.name));
    } else if (
      entry.name.endsWith(".ts") &&
      !entry.name.endsWith(".d.ts") &&
      !entry.name.endsWith(".spec.ts") &&
      !entry.name.startsWith("vitest.")
    ) {
      const outPath = path.join(outDir, entry.name.replace(/\.ts$/, ".js"));
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      const source = fs.readFileSync(fullPath, "utf-8");
      const { code, errors } = transformSync(fullPath, source, { sourcemap: false });
      if (errors.length) {
        console.error(`Errors in ${fullPath}:`, errors);
        process.exit(1);
      }
      fs.writeFileSync(outPath, stripComments(code));
      count++;
    }
  }
  return count;
}

function buildPackage(pkg) {
  const packageDir = resolvePackageDir(pkg);
  if (!packageDir) {
    throw new Error(`Package not found: ${pkg}`);
  }
  const srcDir = path.join(packageDir, "src");
  const outDir = path.join(packageDir, "dist-es");

  if (!fs.existsSync(srcDir)) {
    throw new Error(`No src/ directory in ${packageDir}`);
  }

  // Clean dist-es
  fs.rmSync(outDir, { recursive: true, force: true });

  const fileCount = processDir(srcDir, outDir);
  return fileCount;
}

async function runBatch(packages, concurrency) {
  const total = packages.length;
  let completed = 0;
  const start = Date.now();

  async function process(pkg) {
    const t0 = Date.now();
    const fileCount = buildPackage(pkg);
    completed++;
    console.log(`[${completed}/${total}] ${pkg} (${fileCount} files, ${Date.now() - t0}ms)`);
  }

  // Process with bounded concurrency.
  const queue = [...packages];
  const workers = Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length > 0) {
      const pkg = queue.shift();
      await process(pkg);
    }
  });

  await Promise.all(workers);
  console.log(`\nDone: ${total} packages in ${((Date.now() - start) / 1000).toFixed(1)}s (concurrency=${concurrency})`);
}

const packages = all ? getAllPackages() : args;

if (packages.length === 0) {
  console.error("Usage: node build-es-batch.js [--concurrency N] [--all] pkg1 pkg2 ...");
  process.exit(1);
}

runBatch(packages, concurrency);
