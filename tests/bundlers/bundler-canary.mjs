import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const { findGlobalBufferRefs } = require("./bundler-output-analysis.cjs");

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist");

// Clean and prepare
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

// Install dependencies with retry
function npmInstallWithRetry(cmd, label) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      console.log(`${label} (attempt ${attempt}/4)...`);
      execSync(cmd, { cwd: __dirname, stdio: "inherit" });
      return true;
    } catch (e) {
      if (attempt < 4) {
        console.warn(`  npm install failed, retrying in 10s...`);
        execSync("sleep 10");
      }
    }
  }
  return false;
}

if (!npmInstallWithRetry("npm install", "Installing dependencies")) {
  console.log("npm install failed after 4 attempts, skipping test.");
  process.exit(0);
}

if (
  !npmInstallWithRetry(
    "npm install --no-save vite webpack webpack-cli ts-loader typescript@~5 esbuild",
    "Installing bundlers"
  )
) {
  console.log("npm install (bundlers) failed after 4 attempts, skipping test.");
  process.exit(0);
}

// --- Vite ---
console.log("\nBundling with Vite...");
execSync("npx vite build", { cwd: __dirname, stdio: "inherit" });

// --- esbuild ---
console.log("\nBundling with esbuild...");
mkdirSync(join(distDir, "esbuild"), { recursive: true });
execSync(
  [
    "npx esbuild web-application-sample.ts",
    "--bundle --format=esm --platform=browser",
    "--outfile=dist/esbuild/bundle.mjs",
    "--tree-shaking=true",
    "--main-fields=browser,module,main",
    "--conditions=browser,import",
    "--external:node:*",
  ].join(" "),
  { cwd: __dirname, stdio: "inherit" }
);

// --- Webpack ---
console.log("\nBundling with Webpack...");
execSync("npx webpack --config webpack.config.cjs", { cwd: __dirname, stdio: "inherit" });

// --- Validation ---
console.log("\n--- Validating bundles ---");

const bundlerDirs = [
  { name: "vite", dir: join(distDir, "vite") },
  { name: "esbuild", dir: join(distDir, "esbuild") },
  { name: "webpack", dir: join(distDir, "webpack") },
];

let failed = false;

for (const { name, dir } of bundlerDirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".js") || f.endsWith(".mjs"));
  for (const file of files) {
    const filePath = join(dir, file);
    console.log(`\nChecking ${name}/${file}...`);
    const content = readFileSync(filePath, "utf-8");

    // Check for node: protocol imports
    const nodeImports = content.match(/["']node:[^"']+["']/g) || [];
    const nodeRequires = content.match(/require\(["']node:[^"']+["']\)/g) || [];
    const allNodeRefs = [...nodeImports, ...nodeRequires];

    if (allNodeRefs.length > 0) {
      console.error(`  ❌ FAIL: Found node: protocol references:`);
      for (const ref of allNodeRefs) console.error(`    ${ref}`);
      failed = true;
    } else {
      console.log(`  ✅ PASS: No node: protocol references`);
    }

    // Check for node-only code marker (informational)
    const nodeOnlyMatches = content.match(/\w+\s*=\s*Symbol\.for\(["']node-only["']\)/g) || [];
    if (nodeOnlyMatches.length > 0) {
      console.log(`  ⚠️  ${nodeOnlyMatches.length} Symbol.for("node-only") — node-only code not fully tree-shaken`);
    }

    // Check for unguarded global Buffer usage via AST scope analysis
    const globalBufferRefs = findGlobalBufferRefs(content);

    if (globalBufferRefs.length > 0) {
      console.error(`  ❌ FAIL: Found ${globalBufferRefs.length} global Buffer reference(s):`);
      for (const ref of globalBufferRefs.slice(0, 5)) {
        const line = content.split("\n")[ref.line - 1]?.trim().slice(0, 120);
        console.error(`    L${ref.line}: ${line}`);
      }
      if (globalBufferRefs.length > 5) {
        console.error(`    ... and ${globalBufferRefs.length - 5} more`);
      }
      failed = true;
    } else {
      console.log(`  ✅ PASS: No global Buffer references`);
    }

    // Check that toStream uses ReadableStream (browser) and not Readable.from (node)
    const toStreamMatch =
      content.match(/(?:function\s+toStream|(?:var|let|const)\s+toStream\s*=)\s*\(?[^)]*\)?\s*(?:=>)?\s*\{[^}]*\}/g) ||
      [];
    for (const fn of toStreamMatch) {
      if (!fn.includes("ReadableStream")) {
        console.error(`  ❌ FAIL: toStream does not use ReadableStream`);
        failed = true;
      } else if (fn.includes("Readable.from")) {
        console.error(`  ❌ FAIL: toStream contains Readable.from (node-only code in browser bundle)`);
        failed = true;
      } else {
        console.log(`  ✅ PASS: toStream uses ReadableStream, no Readable.from`);
      }
    }
  }
}

if (failed) {
  console.error("\n❌ Bundle canary FAILED");
  process.exit(1);
} else {
  console.log("\n✅ Bundle canary PASSED");
}
