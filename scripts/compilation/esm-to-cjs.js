/**
 * ESM-to-CJS transpiler using acorn AST.
 *
 * Statement-level equivalency:
 *   import { N } from "n"      -> const { N } = require("n")
 *   import N from "n"          -> const N = require("n")
 *   import * as N from "n"     -> const N = require("n")
 *   import "n"                 -> require("n")
 *   export { A, B }            -> exports.A = A; exports.B = B;
 *   export { A as B }          -> exports.B = A;
 *   export { A } from "n"      -> const { A } = require("n"); exports.A = A;
 *   export * from "n"          -> Object.assign(exports, require("n"))
 *   export default X           -> ERROR (not supported)
 *   export class/function X    -> class/function X ...; exports.X = X
 *   export const/let/var X = V -> const/let/var X = V; exports.X = X
 *   await import("n")          -> require("n")
 *   import("n") (not awaited)  -> ERROR (not supported)
 *
 * @internal
 */

const acorn = require("acorn");

const ERR_DEFAULT_EXPORT = "default exports are not supported";
const ERR_STRING_EXPORT = "string-literal export names are not supported";
const ERR_DYNAMIC_IMPORT = "dynamic await import() with non-literal source is not supported";
const ERR_NON_AWAITED_IMPORT = "non-awaited dynamic import() is not supported";

const ImportDeclaration = "ImportDeclaration";
const ExportNamedDeclaration = "ExportNamedDeclaration";
const ExportDefaultDeclaration = "ExportDefaultDeclaration";
const ExportAllDeclaration = "ExportAllDeclaration";
const ImportDefaultSpecifier = "ImportDefaultSpecifier";
const ImportNamespaceSpecifier = "ImportNamespaceSpecifier";
const ImportSpecifier = "ImportSpecifier";
const VariableDeclaration = "VariableDeclaration";
const AwaitExpression = "AwaitExpression";
const ImportExpression = "ImportExpression";
const Literal = "Literal";

// Keys that are never AST child nodes — skip during traversal to avoid
// descending into primitives.
const SKIP_KEYS = new Set(["type", "start", "end", "raw", "sourceType"]);

/**
 * @param {string} esmCode - ESM code.
 * @returns {string} CJS code, without correctness edge cases.
 */
function transpile(esmCode) {
  const ast = acorn.parse(esmCode, { ecmaVersion: 2022, sourceType: "module" });

  // Collect await-import edits first so they can be applied within export declarations.
  const awaitImportEdits = [];
  collectAwaitImports(ast, awaitImportEdits, esmCode);

  const edits = [];
  let hasExportStar = false;
  const importedSymbols = new Set();

  for (let i = 0; i < ast.body.length; i++) {
    const node = ast.body[i];
    switch (node.type) {
      case ImportDeclaration:
        edits.push({ start: node.start, end: node.end, replacement: transformImport(node) });
        for (const s of node.specifiers) {
          importedSymbols.add(s.local.name);
        }
        break;
      case ExportNamedDeclaration: {
        const inner = awaitImportEdits.filter((e) => e.start >= node.start && e.end <= node.end);
        edits.push({
          start: node.start,
          end: node.end,
          replacement: transformExportNamed(node, esmCode, inner, importedSymbols),
        });
        break;
      }
      case ExportDefaultDeclaration:
        throw new Error(ERR_DEFAULT_EXPORT);
      case ExportAllDeclaration:
        hasExportStar = true;
        edits.push({
          start: node.start,
          end: node.end,
          replacement: `__exportStar(require(${JSON.stringify(node.source.value)}), exports);`,
        });
        break;
    }
  }

  // Add await-import edits not inside any export declaration.
  for (const ae of awaitImportEdits) {
    const insideExport = ast.body.some(
      (n) =>
        (n.type === ExportNamedDeclaration || n.type === ExportAllDeclaration) && ae.start >= n.start && ae.end <= n.end
    );
    if (!insideExport) {
      edits.push(ae);
    }
  }

  // Apply edits back-to-front so indices remain valid.
  edits.sort((a, b) => b.start - a.start);
  let output = esmCode;
  for (let i = 0; i < edits.length; i++) {
    output = output.slice(0, edits[i].start) + edits[i].replacement + output.slice(edits[i].end);
  }
  if (hasExportStar) {
    output = `var __exportStar = (m, e) => { Object.assign(e, m); };\n` + output;
  }
  return output;
}

function transformImport(node) {
  const source = JSON.stringify(node.source.value);
  const specs = node.specifiers;
  if (specs.length === 0) {
    return `require(${source});`;
  }

  const parts = [];
  let namedStart = -1;

  for (let i = 0; i < specs.length; i++) {
    const s = specs[i];
    switch (s.type) {
      case ImportDefaultSpecifier:
        parts.push(`const ${s.local.name} = require(${source});`);
        break;
      case ImportNamespaceSpecifier:
        parts.push(`const ${s.local.name} = require(${source});`);
        break;
      case ImportSpecifier:
        if (namedStart === -1) {
          namedStart = parts.length;
        }
        break;
    }
  }

  if (namedStart !== -1) {
    let bindings = "";
    for (let i = 0; i < specs.length; i++) {
      const s = specs[i];
      if (s.type !== ImportSpecifier) {
        continue;
      }
      if (bindings) {
        bindings += ", ";
      }
      bindings += s.imported.name === s.local.name ? s.local.name : `${s.imported.name}: ${s.local.name}`;
    }
    parts.splice(namedStart, 0, `const { ${bindings} } = require(${source});`);
  }

  return parts.join("\n");
}

/**
 * Check if `name` is referenced in `src` outside the range [declStart, declEnd).
 * Uses indexOf + boundary checks to handle names containing $ or other non-word chars.
 */
function isNameUsedOutsideDecl(src, name, declStart, declEnd) {
  let pos = 0;
  while ((pos = src.indexOf(name, pos)) !== -1) {
    if (pos < declStart || pos >= declEnd) {
      // Check boundaries: char before must not be word/$ and char after must not be word/$.
      const before = pos > 0 ? src[pos - 1] : " ";
      const after = pos + name.length < src.length ? src[pos + name.length] : " ";
      const isWordChar = (c) => /[\w$]/.test(c);
      if (!isWordChar(before) && !isWordChar(after)) {
        return true;
      }
    }
    pos += 1;
  }
  return false;
}

function transformExportNamed(node, src, innerEdits, importedSymbols) {
  for (let i = 0; i < node.specifiers.length; i++) {
    const s = node.specifiers[i];
    if (s.exported.type === Literal) {
      throw new Error(ERR_STRING_EXPORT);
    }
    if (s.local.type === Literal) {
      throw new Error(ERR_STRING_EXPORT);
    }
    if (s.exported.name === "default") {
      throw new Error(ERR_DEFAULT_EXPORT);
    }
  }
  if (node.declaration) {
    const decl = node.declaration;
    if (decl.type === VariableDeclaration) {
      const parts = [];
      for (let i = 0; i < decl.declarations.length; i++) {
        const d = decl.declarations[i];
        let init = d.init ? src.slice(d.init.start, d.init.end) : "undefined";
        // Apply any await-import edits within this init, offset relative to d.init.start.
        if (d.init && innerEdits) {
          for (let j = innerEdits.length - 1; j >= 0; j--) {
            const ie = innerEdits[j];
            if (ie.start >= d.init.start && ie.end <= d.init.end) {
              const relStart = ie.start - d.init.start;
              const relEnd = ie.end - d.init.start;
              init = init.slice(0, relStart) + ie.replacement + init.slice(relEnd);
            }
          }
        }
        // If the name is referenced elsewhere in the file, keep as local + export.
        // Otherwise inline directly into exports.
        const name = d.id.name;
        const usedElsewhere = isNameUsedOutsideDecl(src, name, node.start, node.end);
        if (usedElsewhere) {
          parts.push(`const ${name} = ${init};\nexports.${name} = ${name};`);
        } else {
          parts.push(`exports.${name} = ${init};`);
        }
      }
      return parts.join("\n");
    }
    // class or function
    let declText = src.slice(decl.start, decl.end);
    if (innerEdits) {
      for (let j = innerEdits.length - 1; j >= 0; j--) {
        const ie = innerEdits[j];
        if (ie.start >= decl.start && ie.end <= decl.end) {
          const relStart = ie.start - decl.start;
          const relEnd = ie.end - decl.start;
          declText = declText.slice(0, relStart) + ie.replacement + declText.slice(relEnd);
        }
      }
    }
    const name = decl.id.name;
    const usedElsewhere = isNameUsedOutsideDecl(src, name, node.start, node.end);
    if (usedElsewhere) {
      return `${declText}\nexports.${name} = ${name};`;
    }
    return `exports.${name} = ${declText};`;
  }

  if (node.source) {
    const source = JSON.stringify(node.source.value);
    let bindings = "";
    let assignments = "";
    for (let i = 0; i < node.specifiers.length; i++) {
      const s = node.specifiers[i];
      if (importedSymbols.has(s.local.name)) {
        assignments += "\nexports." + s.exported.name + " = " + s.local.name + ";";
      } else {
        if (bindings) {
          bindings += ", ";
        }
        bindings += s.local.name === s.exported.name ? s.local.name : `${s.local.name}: ${s.exported.name}`;
        assignments += "\nexports." + s.exported.name + " = " + s.exported.name + ";";
      }
    }
    if (bindings) {
      return `const { ${bindings} } = require(${source});` + assignments;
    }
    return assignments.slice(1);
  }

  let result = "";
  for (let i = 0; i < node.specifiers.length; i++) {
    const s = node.specifiers[i];
    if (i > 0) {
      result += "\n";
    }
    result += `exports.${s.exported.name} = ${s.local.name};`;
  }
  return result;
}

/**
 * Stack-based AST walk. Converts `await import(x)` to `require(x)` and
 * throws on non-awaited dynamic imports.
 */
function collectAwaitImports(ast, edits, src) {
  const stack = [ast];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node || typeof node !== "object") {
      continue;
    }
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        stack.push(node[i]);
      }
      continue;
    }
    if (node.type === AwaitExpression && node.argument && node.argument.type === ImportExpression) {
      const importSource = node.argument.source;
      if (importSource.type !== Literal) {
        throw new Error(ERR_DYNAMIC_IMPORT);
      }
      edits.push({
        start: node.start,
        end: node.end,
        replacement: `require(${src.slice(importSource.start, importSource.end)})`,
      });
      // Don't descend — the import expression is fully consumed.
      continue;
    }
    if (node.type === ImportExpression) {
      throw new Error(ERR_NON_AWAITED_IMPORT);
    }
    for (const key in node) {
      if (SKIP_KEYS.has(key)) {
        continue;
      }
      const child = node[key];
      if (child && typeof child === "object") {
        stack.push(child);
      }
    }
  }
}

module.exports = { transpile };

// Self-test: runs on every load to verify correctness.
(() => {
  const source = [
    `import { A, B } from "named";`,
    `import D from "default-mod";`,
    `import * as N from "ns";`,
    `import "side-effect";`,
    `export * from "barrel";`,
    `export { C } from "reexport";`,
    `export const foo = 1;`,
    `export const run = async () => { const m = await import("dynamic"); return m; };`,
    `export * from "barrel2";`,
    `export const used = () => {};`,
    `const ref = used();`,
  ].join("\n");

  const out = transpile(source);

  const must = (s) => {
    if (!out.includes(s)) throw new Error(`esm-to-cjs self-test: missing ${JSON.stringify(s)}\nin:\n${out}`);
  };
  const mustNot = (s) => {
    if (out.includes(s)) throw new Error(`esm-to-cjs self-test: unexpected ${JSON.stringify(s)}\nin:\n${out}`);
  };

  must(`const { A, B } = require("named");`);
  must(`const D = require("default-mod");`);
  must(`const N = require("ns");`);
  must(`require("side-effect");`);
  must(`__exportStar(require("barrel"), exports);`);
  must(`__exportStar(require("barrel2"), exports);`);
  must(`var __exportStar`);
  must(`const { C } = require("reexport");`);
  must(`exports.C = C;`);
  must(`exports.foo = 1;`);
  must(`exports.run = async () =>`);
  must(`require("dynamic")`);
  mustNot(`await import`);
  mustNot(`export `);
  mustNot(`const foo`);
  mustNot(`const run`);
  // 'used' is referenced elsewhere -> two-line pattern
  must(`const used = () => {};`);
  must(`exports.used = used;`);

  // Non-awaited dynamic import must throw.
  let threw = false;
  try {
    transpile(`const p = import("lazy");`);
  } catch (e) {
    if (e.message === ERR_NON_AWAITED_IMPORT) {
      threw = true;
    }
  }
  if (!threw) {
    throw new Error("esm-to-cjs self-test: non-awaited import() must throw ERR_NON_AWAITED_IMPORT.");
  }

  // await import inside class method must be transformed.
  const classSource = `import { foo } from "bar";
class X { async load() { const { Y } = await import("baz"); return Y; } }
export { X };`;
  const classOut = transpile(classSource);
  const classExpected = `const { foo } = require("bar");
class X { async load() { const { Y } = require("baz"); return Y; } }
exports.X = X;`;
  if (classOut !== classExpected) {
    throw new Error(
      `esm-to-cjs self-test: class method mismatch
  expected:
    ${classExpected}
  got:
    ${classOut}`
    );
  }

  // export-from must not re-declare already-imported symbols.
  const dupSource = `import { A, B } from "pkg";\nexport { A, C } from "pkg";`;
  const dupOut = transpile(dupSource);
  if (dupOut.includes("const { A")) {
    // A should only appear once as a const declaration
    const matches = dupOut.match(/const \{[^}]*A[^}]*\}/g);
    if (matches.length > 1) {
      throw new Error(`esm-to-cjs self-test: duplicate declaration of A\nin:\n${dupOut}`);
    }
  }
  if (!dupOut.includes("exports.A = A;")) {
    throw new Error(`esm-to-cjs self-test: missing exports.A = A\nin:\n${dupOut}`);
  }
  if (!dupOut.includes("exports.C = C;")) {
    throw new Error(`esm-to-cjs self-test: missing exports.C = C\nin:\n${dupOut}`);
  }
})();
