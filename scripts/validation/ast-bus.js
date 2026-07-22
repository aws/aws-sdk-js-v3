#!/usr/bin/env node

/**
 * AST Bus — single-pass file walker and parser that dispatches to registered
 * validators. Each file is read once, parsed once, and all registered
 * callbacks fire against the shared parse result.
 *
 * Validators register which file sets (targets) they need and which callbacks
 * they implement. The bus only walks targets that at least one validator requested,
 * and only enables expensive AST features when a validator needs them.
 *
 * @example
 * const { createBus } = require("./ast-bus");
 * const bus = createBus({ packages });
 * bus.register(myValidator);
 * await bus.run();
 * const errors = bus.getErrors();
 */

const fs = require("node:fs");
const path = require("node:path");
const { parse } = require("acorn");

/**
 * Targets:
 *   "dist-cjs" — walk dist-cjs/*.js
 *   "dist-es"  — walk dist-es/*.js
 *   "src"      — walk src/*.ts (regex scan only)
 *   "dist-types" — walk dist-types/*.d.ts (regex scan only)
 *
 * Features:
 *   "esm-detection" — full AST tree walk to find ESM nodes (ImportDeclaration,
 *                     ExportNamedDeclaration, ExportAllDeclaration,
 *                     ExportDefaultDeclaration, ImportExpression) in dist-cjs files
 *
 * Callbacks:
 *   onImport(specifier, file, context)       — static import/require with literal specifier
 *   onNonLiteralImportSpecifier(node, file, context) — import()/require() with non-literal argument
 *   onExportAll(node, file, context)         — ExportAllDeclaration
 *   onESMNode(node, file, context)           — ESM syntax node (feature-gated)
 *   onDtsImport(specifier, file, context)    — import in .d.ts file (regex-extracted)
 *   onFile(file, context)                    — fires for every file visited (before parse)
 *   onWalkComplete(graph)                    — fires after all files walked
 *   getErrors()                              — returns array of error strings
 *   getWarnings()                            — returns array of warning strings
 *
 * Context object passed to callbacks:
 *   { packageDir, packageJson, target, generated }
 */

const DTS_IMPORT_RE = /from\s+["']([^"']+)["']/g;

/**
 * @param {{ packages: Array<{dir: string, generated: boolean}> }} options
 */
function createBus(options) {
  const { packages } = options;
  const validators = [];

  // Collected state.
  let needTargets = new Set();
  let needEsmDetection = false;
  let visitedPackages = [];
  let hasOnImport = false;
  let hasOnNonLiteralImportSpecifier = false;
  let hasOnExportAll = false;
  let hasOnESMNode = false;
  let hasOnDtsImport = false;
  let hasOnFile = false;
  let hasOnWalkComplete = false;

  function register(validator) {
    validators.push(validator);

    if (validator.targets) {
      for (let i = 0; i < validator.targets.length; ++i) {
        needTargets.add(validator.targets[i]);
      }
    }
    if (validator.features) {
      for (let i = 0; i < validator.features.length; ++i) {
        if (validator.features[i] === "esm-detection") {
          needEsmDetection = true;
        }
      }
    }
    if (validator.onImport) {
      hasOnImport = true;
    }
    if (validator.onNonLiteralImportSpecifier) {
      hasOnNonLiteralImportSpecifier = true;
    }
    if (validator.onExportAll) {
      hasOnExportAll = true;
    }
    if (validator.onESMNode) {
      hasOnESMNode = true;
    }
    if (validator.onDtsImport) {
      hasOnDtsImport = true;
    }
    if (validator.onFile) {
      hasOnFile = true;
    }
    if (validator.onWalkComplete) {
      hasOnWalkComplete = true;
    }
  }

  /**
   * Parse a JS file with acorn. Returns AST or null.
   */
  function parseJS(code) {
    try {
      return parse(code, { ecmaVersion: "latest", sourceType: "module", allowHashBang: true, locations: true });
    } catch {
      return parse(code, { ecmaVersion: "latest", sourceType: "script", allowHashBang: true, locations: true });
    }
  }

  /**
   * Single-pass extraction from a JS AST. Extracts imports, dynamic imports,
   * export-all declarations, and optionally ESM nodes — all in one walk.
   */
  function extractFromAST(ast, needDynamic, needExportAll, needEsm) {
    const imports = [];
    const nonLiteralImports = [];
    const exportAlls = [];
    const esmNodes = [];

    // Top-level statements.
    for (let i = 0; i < ast.body.length; ++i) {
      const node = ast.body[i];
      const type = node.type;

      if (type === "ImportDeclaration" && node.source) {
        imports.push(node.source.value);
        if (needEsm) {
          esmNodes.push(node);
        }
      } else if (type === "ExportNamedDeclaration" && node.source) {
        imports.push(node.source.value);
        if (needEsm) {
          esmNodes.push(node);
        }
      } else if (type === "ExportAllDeclaration") {
        if (node.source) {
          imports.push(node.source.value);
        }
        if (needExportAll) {
          exportAlls.push(node);
        }
        if (needEsm) {
          esmNodes.push(node);
        }
      } else if (type === "ExportDefaultDeclaration") {
        if (needEsm) {
          esmNodes.push(node);
        }
      } else if (type === "ExportNamedDeclaration" && !node.source) {
        if (needEsm) {
          esmNodes.push(node);
        }
      }
    }

    // Deep walk for require(), dynamic import(), and ImportExpression in ESM detection.
    if (needDynamic || needEsm) {
      const stack = [ast];
      while (stack.length) {
        const n = stack.pop();
        if (!n || typeof n !== "object") {
          continue;
        }

        if (n.type === "CallExpression" && n.callee && n.callee.name === "require" && n.arguments.length) {
          if (n.arguments[0].type === "Literal") {
            imports.push(n.arguments[0].value);
          } else if (needDynamic) {
            nonLiteralImports.push({ line: n.loc?.start?.line ?? 0, type: "require()" });
          }
        } else if (n.type === "ImportExpression") {
          if (n.source && n.source.type === "Literal") {
            imports.push(n.source.value);
          } else if (needDynamic) {
            nonLiteralImports.push({ line: n.loc?.start?.line ?? 0, type: "import()" });
          }
          if (needEsm) {
            esmNodes.push(n);
          }
        }

        for (const key of Object.keys(n)) {
          if (key === "type") {
            continue;
          }
          const val = n[key];
          if (Array.isArray(val)) {
            for (let i = 0; i < val.length; ++i) {
              if (val[i] && typeof val[i] === "object" && val[i].type) {
                stack.push(val[i]);
              }
            }
          } else if (val && typeof val === "object" && val.type) {
            stack.push(val);
          }
        }
      }
    } else {
      // Still need require() for imports, but no dynamic import tracking.
      const stack = [ast];
      while (stack.length) {
        const n = stack.pop();
        if (!n || typeof n !== "object") {
          continue;
        }

        if (n.type === "CallExpression" && n.callee && n.callee.name === "require" && n.arguments.length) {
          if (n.arguments[0].type === "Literal") {
            imports.push(n.arguments[0].value);
          }
        } else if (n.type === "ImportExpression" && n.source && n.source.type === "Literal") {
          imports.push(n.source.value);
        }

        for (const key of Object.keys(n)) {
          if (key === "type") {
            continue;
          }
          const val = n[key];
          if (Array.isArray(val)) {
            for (let i = 0; i < val.length; ++i) {
              if (val[i] && typeof val[i] === "object" && val[i].type) {
                stack.push(val[i]);
              }
            }
          } else if (val && typeof val === "object" && val.type) {
            stack.push(val);
          }
        }
      }
    }

    return { imports, nonLiteralImports, exportAlls, esmNodes };
  }

  /**
   * Regex fallback for TypeScript files acorn can't parse.
   * Extracts export * declarations.
   */
  function extractExportStarRegex(code) {
    const hits = [];
    const lines = code.split("\n");
    for (let i = 0; i < lines.length; ++i) {
      const line = lines[i];
      if (/^\s*export\s*\*\s*from\s/.test(line) || /^\s*export\s*\*\s*;/.test(line)) {
        hits.push({ line: i + 1, loc: { start: { line: i + 1 } } });
      }
    }
    return hits;
  }

  /**
   * Walk a directory recursively, yielding file paths.
   */
  async function* walkDir(dir) {
    let entries;
    try {
      entries = await fs.promises.opendir(dir);
    } catch {
      return;
    }
    for await (const d of entries) {
      const entry = path.join(dir, d.name);
      if (d.name === "node_modules") {
        continue;
      }
      if (d.isDirectory()) {
        yield* walkDir(entry);
      } else if (d.isFile()) {
        yield entry;
      }
    }
  }

  /**
   * Dispatch onImport to all validators that have the callback and
   * whose targets include the current target.
   */
  function dispatchImport(specifier, file, context) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onImport && v.targets.includes(context.target)) {
        v.onImport(specifier, file, context);
      }
    }
  }

  function dispatchNonLiteralImportSpecifier(node, file, context) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onNonLiteralImportSpecifier && v.targets.includes(context.target)) {
        v.onNonLiteralImportSpecifier(node, file, context);
      }
    }
  }

  function dispatchExportAll(node, file, context) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onExportAll && v.targets.includes(context.target)) {
        v.onExportAll(node, file, context);
      }
    }
  }

  function dispatchESMNode(node, file, context) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onESMNode && v.targets.includes(context.target)) {
        v.onESMNode(node, file, context);
      }
    }
  }

  function dispatchDtsImport(specifier, file, context) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onDtsImport && v.targets.includes(context.target)) {
        v.onDtsImport(specifier, file, context);
      }
    }
  }

  function dispatchFile(file, context) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onFile && v.targets.includes(context.target)) {
        v.onFile(file, context);
      }
    }
  }

  function dispatchWalkComplete(graph) {
    for (let i = 0; i < validators.length; ++i) {
      const v = validators[i];
      if (v.onWalkComplete) {
        v.onWalkComplete(graph);
      }
    }
  }

  /**
   * Process a single .js file from dist-cjs or dist-es.
   */
  function processJSFile(file, code, context, graph) {
    const isDistCjs = context.target === "dist-cjs";
    const needDynamic = hasOnNonLiteralImportSpecifier;
    const needExportAll = hasOnExportAll;
    const needEsm = needEsmDetection && isDistCjs && hasOnESMNode;

    const ast = parseJS(code);

    const result = extractFromAST(ast, needDynamic, needExportAll, needEsm);

    // Record imports in graph for onWalkComplete consumers.
    if (hasOnWalkComplete) {
      graph.set(file, result.imports);
    }

    // Dispatch imports.
    if (hasOnImport) {
      for (let i = 0; i < result.imports.length; ++i) {
        dispatchImport(result.imports[i], file, context);
      }
    }

    // Dispatch dynamic imports.
    if (needDynamic && result.nonLiteralImports.length) {
      for (let i = 0; i < result.nonLiteralImports.length; ++i) {
        dispatchNonLiteralImportSpecifier(result.nonLiteralImports[i], file, context);
      }
    }

    // Dispatch export-all.
    if (needExportAll && result.exportAlls.length) {
      for (let i = 0; i < result.exportAlls.length; ++i) {
        dispatchExportAll(result.exportAlls[i], file, context);
      }
    }

    // Dispatch ESM nodes.
    if (needEsm && result.esmNodes.length) {
      for (let i = 0; i < result.esmNodes.length; ++i) {
        dispatchESMNode(result.esmNodes[i], file, context);
      }
    }
  }

  /**
   * Process a single .ts file from src (regex-based extraction).
   */
  function processTSFile(file, code, context) {
    if (hasOnExportAll) {
      const hits = extractExportStarRegex(code);
      for (let i = 0; i < hits.length; ++i) {
        dispatchExportAll(hits[i], file, context);
      }
    }
  }

  /**
   * Process a single .d.ts file from dist-types.
   */
  function processDtsFile(file, code, context) {
    DTS_IMPORT_RE.lastIndex = 0;
    let m;
    while ((m = DTS_IMPORT_RE.exec(code)) !== null) {
      dispatchDtsImport(m[1], file, context);
    }
  }

  /**
   * Run the bus — walk all requested targets for all packages, parse files,
   * dispatch to validators.
   */
  async function run() {
    // Import graph: file → array of import specifiers.
    const graph = new Map();
    // Track which packages were visited per target for coverage reporting.
    visitedPackages = [];

    for (let p = 0; p < packages.length; ++p) {
      const pkg = packages[p];
      const pkgJsonPath = path.join(pkg.dir, "package.json");
      if (!fs.existsSync(pkgJsonPath)) {
        continue;
      }
      const packageJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
      let visited = false;

      // Walk dist-cjs and dist-es (.js files).
      for (const target of ["dist-cjs", "dist-es"]) {
        if (!needTargets.has(target)) {
          continue;
        }
        const distDir = path.join(pkg.dir, target);
        if (!fs.existsSync(distDir)) {
          continue;
        }
        visited = true;

        const context = { packageDir: pkg.dir, packageJson, target, generated: pkg.generated };

        for await (const file of walkDir(distDir)) {
          if (!file.endsWith(".js")) {
            continue;
          }
          if (hasOnFile) {
            dispatchFile(file, context);
          }
          const code = fs.readFileSync(file, "utf-8");
          processJSFile(file, code, context, graph);
        }
      }

      // Walk src (.ts files).
      if (needTargets.has("src")) {
        const srcDir = path.join(pkg.dir, "src");
        if (fs.existsSync(srcDir)) {
          visited = true;
          const context = { packageDir: pkg.dir, packageJson, target: "src", generated: pkg.generated };
          for await (const file of walkDir(srcDir)) {
            if (!file.endsWith(".ts") || file.endsWith(".d.ts") || file.endsWith(".spec.ts")) {
              continue;
            }
            if (hasOnFile) {
              dispatchFile(file, context);
            }
            if (hasOnExportAll) {
              const code = fs.readFileSync(file, "utf-8");
              processTSFile(file, code, context);
            }
          }
        }
      }

      // Walk dist-types (.d.ts files).
      if (needTargets.has("dist-types") && hasOnDtsImport) {
        const distTypes = path.join(pkg.dir, "dist-types");
        if (fs.existsSync(distTypes)) {
          visited = true;
          const context = { packageDir: pkg.dir, packageJson, target: "dist-types", generated: pkg.generated };
          for await (const file of walkDir(distTypes)) {
            if (!file.endsWith(".d.ts")) {
              continue;
            }
            if (hasOnFile) {
              dispatchFile(file, context);
            }
            const code = fs.readFileSync(file, "utf-8");
            processDtsFile(file, code, context);
          }
        }
      }

      if (visited) {
        visitedPackages.push(pkg);
      }
    }

    // Fire onWalkComplete with the collected graph.
    if (hasOnWalkComplete) {
      dispatchWalkComplete(graph);
    }
  }

  function getErrors() {
    const errors = [];
    for (let i = 0; i < validators.length; ++i) {
      if (validators[i].getErrors) {
        errors.push(...validators[i].getErrors());
      }
    }
    return errors;
  }

  function getWarnings() {
    const warnings = [];
    for (let i = 0; i < validators.length; ++i) {
      if (validators[i].getWarnings) {
        warnings.push(...validators[i].getWarnings());
      }
    }
    return warnings;
  }

  /**
   * Returns a coverage summary string, e.g. "427 clients, 14 packages, 3 lib".
   */
  function getSummary() {
    const counts = {};
    for (let i = 0; i < visitedPackages.length; ++i) {
      const folder = path.basename(path.dirname(visitedPackages[i].dir));
      counts[folder] = (counts[folder] || 0) + 1;
    }
    return Object.entries(counts)
      .map(([folder, count]) => `${count} ${folder}`)
      .join(", ");
  }

  /**
   * Returns the list of targets that were actually walked.
   */
  function getTargets() {
    return [...needTargets];
  }

  return { register, run, getErrors, getWarnings, getSummary, getTargets };
}

module.exports = { createBus };
