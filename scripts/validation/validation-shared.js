/**
 * Shared utilities for dist validation scripts.
 */

const fs = require("node:fs");
const path = require("node:path");
const { parse } = require("acorn");

const NODE_BUILTINS = new Set([
  "assert",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "dns",
  "dns/promises",
  "domain",
  "events",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "inspector",
  "module",
  "net",
  "os",
  "path",
  "path/posix",
  "path/win32",
  "perf_hooks",
  "process",
  "punycode",
  "querystring",
  "readline",
  "repl",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "sys",
  "timers",
  "timers/promises",
  "tls",
  "trace_events",
  "tty",
  "url",
  "util",
  "v8",
  "vm",
  "wasi",
  "worker_threads",
  "zlib",
]);

/**
 * @param specifier - e.g. "@scope/pkg/foo" or "pkg/foo".
 * @returns the bare package name.
 */
function getPackageName(specifier) {
  if (specifier.startsWith("@")) {
    return specifier.split("/").slice(0, 2).join("/");
  }
  return specifier.split("/")[0];
}

/**
 * Parses JS with acorn and extracts all import information in a single pass.
 *
 * @param code - JS file contents.
 * @returns imports (static literal specifiers) and dynamicImports (non-literal violations).
 */
function analyzeImports(code) {
  const imports = [];
  const dynamicImports = [];

  let ast;
  try {
    ast = parse(code, { ecmaVersion: "latest", sourceType: "module", allowHashBang: true, locations: true });
  } catch {
    try {
      ast = parse(code, { ecmaVersion: "latest", sourceType: "script", allowHashBang: true, locations: true });
    } catch {
      return { imports, dynamicImports };
    }
  }

  for (const node of ast.body) {
    if (
      (node.type === "ImportDeclaration" ||
        node.type === "ExportNamedDeclaration" ||
        node.type === "ExportAllDeclaration") &&
      node.source
    ) {
      imports.push(node.source.value);
    }
  }

  // Walk all nodes for require() and dynamic import().
  const queue = [ast];
  while (queue.length) {
    const n = queue.pop();
    if (!n || typeof n !== "object") {
      continue;
    }

    if (n.type === "CallExpression" && n.callee && n.callee.name === "require" && n.arguments.length) {
      if (n.arguments[0].type === "Literal") {
        imports.push(n.arguments[0].value);
      } else {
        dynamicImports.push({ line: n.loc?.start?.line ?? 0, type: "require()" });
      }
    }

    if (n.type === "ImportExpression" && n.source) {
      if (n.source.type === "Literal") {
        imports.push(n.source.value);
      } else {
        dynamicImports.push({ line: n.loc?.start?.line ?? 0, type: "import()" });
      }
    }

    for (const key of Object.keys(n)) {
      if (key === "type") {
        continue;
      }
      const val = n[key];
      if (Array.isArray(val)) {
        queue.push(...val);
      } else if (val && typeof val === "object" && val.type) {
        queue.push(val);
      }
    }
  }

  return { imports, dynamicImports };
}

/**
 * @param code - JS file contents.
 * @returns static import specifiers only.
 */
function extractImports(code) {
  return analyzeImports(code).imports;
}

/**
 * Resolves a relative specifier from a file, trying exact path, .js, and /index.js.
 *
 * @param fromFile - absolute path of the importing file.
 * @param specifier - relative specifier.
 * @returns resolved absolute path, or null.
 */
function resolveRelative(fromFile, specifier) {
  const dir = path.dirname(fromFile);
  const resolved = path.resolve(dir, specifier);
  if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
    return resolved;
  }
  if (fs.existsSync(resolved + ".js")) {
    return resolved + ".js";
  }
  if (fs.existsSync(path.join(resolved, "index.js"))) {
    return path.join(resolved, "index.js");
  }
  return null;
}

module.exports = {
  NODE_BUILTINS,
  getPackageName,
  analyzeImports,
  extractImports,
  resolveRelative,
};
