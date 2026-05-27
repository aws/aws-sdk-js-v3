#!/usr/bin/env node

/**
 * Detects cyclical dependencies at two levels:
 * 1. Module-level: cycles among @aws-sdk/* package imports across all packages.
 * 2. File-level: cycles among relative imports within each dist-cjs and dist-es folder.
 *
 * Usage: node cycles.js
 */

const fs = require("node:fs");
const path = require("node:path");
const walk = require("../utils/walk");
const { extractImports, getPackageName, resolveRelative, getPackageDirs } = require("./validation-shared");

/**
 * Finds all cycles in a directed graph using Tarjan's algorithm.
 *
 * @param graph - adjacency list (Map of node -> Set of neighbors).
 * @returns array of { cycle, sccSize } objects.
 */
function findAllCycles(graph) {
  const discoveryIndex = new Map();
  const lowlink = new Map();
  const onStack = new Set();
  const stack = [];
  let i = 0;
  const connectedComponents = [];

  function visit(node) {
    discoveryIndex.set(node, i);
    lowlink.set(node, i);
    i++;
    stack.push(node);
    onStack.add(node);

    for (const neighbor of graph.get(node) || []) {
      if (!discoveryIndex.has(neighbor)) {
        visit(neighbor);
        lowlink.set(node, Math.min(lowlink.get(node), lowlink.get(neighbor)));
      } else if (onStack.has(neighbor)) {
        lowlink.set(node, Math.min(lowlink.get(node), discoveryIndex.get(neighbor)));
      }
    }

    if (lowlink.get(node) === discoveryIndex.get(node)) {
      const component = [];
      let popped;
      do {
        popped = stack.pop();
        onStack.delete(popped);
        component.push(popped);
      } while (popped !== node);
      if (component.length > 1) {
        connectedComponents.push(component);
      }
    }
  }

  for (const node of graph.keys()) {
    if (!discoveryIndex.has(node)) {
      visit(node);
    }
  }

  const cycles = [];
  for (const component of connectedComponents) {
    const componentSet = new Set(component);
    const start = component[0];
    const tracePath = [];
    const visited = new Set();

    function traceBackToStart(node) {
      if (node === start && tracePath.length > 0) {
        cycles.push({ cycle: [...tracePath, start], sccSize: component.length });
        return true;
      }
      if (visited.has(node)) {
        return false;
      }
      visited.add(node);
      tracePath.push(node);
      for (const neighbor of graph.get(node) || []) {
        if (!componentSet.has(neighbor)) {
          continue;
        }
        if (neighbor === start && tracePath.length > 1) {
          cycles.push({ cycle: [...tracePath, start], sccSize: component.length });
          return true;
        }
        if (!visited.has(neighbor)) {
          if (traceBackToStart(neighbor)) {
            return true;
          }
        }
      }
      tracePath.pop();
      return false;
    }

    visited.add(start);
    tracePath.push(start);
    for (const neighbor of graph.get(start) || []) {
      if (!componentSet.has(neighbor)) {
        continue;
      }
      if (neighbor === start) {
        continue;
      }
      visited.delete(neighbor);
      if (traceBackToStart(neighbor)) {
        break;
      }
    }
  }

  return cycles;
}

/**
 * Builds a module-level dependency graph from @aws-sdk/* imports across packages.
 *
 * @param packageDirs - list of package root paths.
 * @returns adjacency list of package name -> Set of @aws-sdk/* dependency names.
 */
async function buildModuleGraph(packageDirs) {
  const graph = new Map();

  for (const packageDir of packageDirs) {
    const pkgJsonPath = path.join(packageDir, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    const name = pkgJson.name;
    if (!name || !name.startsWith("@aws-sdk/")) {
      continue;
    }
    if (!graph.has(name)) {
      graph.set(name, new Set());
    }

    for (const dist of ["dist-cjs", "dist-es"]) {
      const distDir = path.join(packageDir, dist);
      if (!fs.existsSync(distDir)) {
        continue;
      }
      for await (const file of walk(distDir, ["node_modules"])) {
        if (!file.endsWith(".js")) {
          continue;
        }
        const code = fs.readFileSync(file, "utf-8");
        for (const specifier of extractImports(code)) {
          if (specifier.startsWith(".") || specifier.startsWith("node:")) {
            continue;
          }
          const pkg = getPackageName(specifier);
          if (pkg.startsWith("@aws-sdk/") && pkg !== name) {
            graph.get(name).add(pkg);
          }
        }
      }
    }
  }

  return graph;
}

/**
 * Resolves a self-referencing package import (e.g. "@aws-sdk/core/client")
 * to a file path within the package using the exports map.
 *
 * @param specifier - the import specifier.
 * @param pkgJson - parsed package.json.
 * @param packageDir - package root.
 * @param distName - "dist-cjs" or "dist-es".
 * @returns absolute file path, or null if not a self-reference.
 */
function resolveSelfImport(specifier, pkgJson, packageDir, distName) {
  const pkg = getPackageName(specifier);
  if (pkg !== pkgJson.name) {
    return null;
  }
  const subpath = "./" + specifier.slice(pkg.length + 1);
  const exportConfig = pkgJson.exports?.[subpath];
  if (!exportConfig) {
    return null;
  }
  const conditionKeys = distName === "dist-es" ? ["module", "import"] : ["node", "require"];
  for (const key of conditionKeys) {
    const val = typeof exportConfig === "string" ? exportConfig : exportConfig[key];
    if (typeof val === "string" && val.includes(distName)) {
      return path.resolve(packageDir, val);
    }
  }
  return null;
}

/**
 * Builds a file-level dependency graph within a single dist directory.
 *
 * @param distDir - absolute path to dist-cjs or dist-es.
 * @param pkgJson - parsed package.json.
 * @param packageDir - package root.
 * @param distName - "dist-cjs" or "dist-es".
 * @returns adjacency list of absolute file path -> Set of absolute file paths.
 */
async function buildFileGraph(distDir, pkgJson, packageDir, distName) {
  const graph = new Map();

  for await (const file of walk(distDir, ["node_modules"])) {
    if (!file.endsWith(".js")) {
      continue;
    }
    if (!graph.has(file)) {
      graph.set(file, new Set());
    }
    const code = fs.readFileSync(file, "utf-8");
    for (const specifier of extractImports(code)) {
      let target = null;
      if (specifier.startsWith(".")) {
        target = resolveRelative(file, specifier);
      } else {
        target = resolveSelfImport(specifier, pkgJson, packageDir, distName);
      }
      if (target) {
        graph.get(file).add(target);
      }
    }
  }

  return graph;
}

async function validate(packageDirs) {
  const errors = [];

  // Module-level cycle detection.
  const moduleGraph = await buildModuleGraph(packageDirs);
  const moduleCycles = findAllCycles(moduleGraph);
  for (const { cycle, sccSize } of moduleCycles) {
    const sccNote = sccSize > cycle.length - 1 ? ` (${sccSize} packages in cycle group)` : "";
    errors.push(`module-level cycle${sccNote}:\n    ${cycle.join(" →\n    ")}`);
  }

  // File-level cycle detection per package per dist.
  for (const packageDir of packageDirs) {
    const pkgJsonPath = path.join(packageDir, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

    for (const dist of ["dist-cjs", "dist-es"]) {
      const distDir = path.join(packageDir, dist);
      if (!fs.existsSync(distDir)) {
        continue;
      }
      const fileGraph = await buildFileGraph(distDir, pkgJson, packageDir, dist);
      const fileCycles = findAllCycles(fileGraph);
      for (const { cycle, sccSize } of fileCycles) {
        const relCycle = cycle.map((f) => path.relative(packageDir, f));
        const sccNote = sccSize > cycle.length - 1 ? ` (${sccSize} files in cycle group)` : "";
        errors.push(`[${pkgJson.name}/${dist}] file-level cycle${sccNote}:\n    ${relCycle.join(" →\n    ")}`);
      }
    }
  }

  return errors;
}

async function main() {
  const packages = getPackageDirs();
  const packageDirs = packages.map((p) => p.dir);
  const errors = await validate(packageDirs);
  if (errors.length) {
    console.error(`❌ ${errors.length} cycle(s) detected:\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log("✅ No cyclical file or package dependencies.");
}

main();
