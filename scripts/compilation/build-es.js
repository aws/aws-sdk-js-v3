/**
 * Fast ES module transpilation using oxc-transform.
 * Replaces `tsc -p tsconfig.es.json` (which uses noCheck, i.e. transpile-only).
 *
 * Usage: node ../../scripts/compilation/build-es.js
 *   (run from a package directory)
 */
const { transformSync } = require("oxc-transform");
const { parseSync } = require("oxc-parser");
const { readdirSync, readFileSync, writeFileSync, mkdirSync } = require("node:fs");
const path = require("node:path");

const packageDir = process.cwd();
const srcDir = path.join(packageDir, "src");
const outDir = path.join(packageDir, "dist-es");

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

function processDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (
      entry.name.endsWith(".ts") &&
      !entry.name.endsWith(".d.ts") &&
      !entry.name.endsWith(".spec.ts") &&
      !entry.name.startsWith("vitest.")
    ) {
      const relPath = path.relative(srcDir, fullPath);
      const outPath = path.join(outDir, relPath.replace(/\.ts$/, ".js"));
      mkdirSync(path.dirname(outPath), { recursive: true });
      const source = readFileSync(fullPath, "utf-8");
      const { code, errors } = transformSync(fullPath, source, { sourcemap: false });
      if (errors.length) {
        console.error(`Errors in ${fullPath}:`, errors);
        process.exit(1);
      }
      writeFileSync(outPath, stripComments(code));
    }
  }
}

processDir(srcDir);
