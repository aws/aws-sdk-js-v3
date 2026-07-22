/**
 * Batch inline multiple packages in a single process.
 *
 * Usage:
 *   node scripts/compilation/inline-batch.js client-s3 client-dynamodb core
 *   node scripts/compilation/inline-batch.js --all
 *   node scripts/compilation/inline-batch.js --concurrency 4 client-s3 client-dynamodb
 */

const path = require("node:path");
const Inliner = require("./Inliner");
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
  for (const lib of ["dynamodb", "storage"]) packages.push(`lib-${lib}`);
  for (const pkg of listFolders(path.join(root, "clients"))) packages.push(pkg);
  return packages;
}

async function runBatch(packages, concurrency) {
  const total = packages.length;
  let completed = 0;
  const start = Date.now();

  async function process(pkg) {
    const t0 = Date.now();
    const inliner = new Inliner(pkg);
    await inliner.clean();
    await inliner.bundle();
    completed++;
    console.log(`[${completed}/${total}] ${pkg} (${Date.now() - t0}ms)`);
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
  console.error("Usage: node inline-batch.js [--concurrency N] [--all] pkg1 pkg2 ...");
  process.exit(1);
}

runBatch(packages, concurrency);
