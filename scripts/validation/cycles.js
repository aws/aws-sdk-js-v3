#!/usr/bin/env node

/**
 * Detects cyclical dependencies at two levels:
 * 1. Module-level: cycles among @aws-sdk/* package imports across all packages.
 * 2. File-level: cycles among relative imports within each dist-cjs and dist-es folder.
 *
 * Usage: node cycles.js
 */

const path = require("node:path");
const { createBus } = require("./ast-bus");
const { getPackageName, resolveRelative, getPackageDirs } = require("./validation-shared");

/**
 * Finds all cycles in a directed graph using Tarjan's algorithm.
 * Returns one representative cycle per strongly connected component.
 */
function findAllCycles(graph) {
  const discoveryIndex = new Map();
  const lowlink = new Map();
  const onStack = new Set();
  const stack = [];
  let idx = 0;
  const connectedComponents = [];

  function visit(node) {
    discoveryIndex.set(node, idx);
    lowlink.set(node, idx);
    ++idx;
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
 * Resolves a self-referencing package import (e.g. "@aws-sdk/core/client")
 * to a file path within the package using the exports map.
 */
function resolveSelfImport(specifier, pkgJson, packageDir, target) {
  const pkg = getPackageName(specifier);
  if (pkg !== pkgJson.name) {
    return null;
  }
  const subpath = "./" + specifier.slice(pkg.length + 1);
  const exportConfig = pkgJson.exports?.[subpath];
  if (!exportConfig) {
    return null;
  }
  const conditionKeys = target === "dist-es" ? ["module", "import"] : ["node", "require"];
  for (const key of conditionKeys) {
    const val = typeof exportConfig === "string" ? exportConfig : exportConfig[key];
    if (typeof val === "string" && val.includes(target)) {
      return path.resolve(packageDir, val);
    }
  }
  return null;
}

/**
 * Creates the cycles validator.
 */
function createValidator() {
  // Module-level graph: packageName → Set<packageName>
  const moduleGraph = new Map();
  // File-level graph: filePath → Set<filePath>
  const fileGraph = new Map();
  // Track which package owns which file for error reporting.
  const filePkgInfo = new Map();

  const errors = [];

  return {
    name: "cycles",
    targets: ["dist-cjs", "dist-es"],

    onImport(specifier, file, context) {
      const { packageJson, packageDir, target } = context;
      const pkgName = packageJson.name;

      // Module-level: track @aws-sdk/* cross-package imports.
      if (!specifier.startsWith(".") && !specifier.startsWith("node:")) {
        const importedPkg = getPackageName(specifier);
        if (importedPkg.startsWith("@aws-sdk/") && importedPkg !== pkgName) {
          if (!moduleGraph.has(pkgName)) {
            moduleGraph.set(pkgName, new Set());
          }
          moduleGraph.get(pkgName).add(importedPkg);
        }

        // Self-referencing subpath imports create file-level edges.
        const selfTarget = resolveSelfImport(specifier, packageJson, packageDir, target);
        if (selfTarget) {
          if (!fileGraph.has(file)) {
            fileGraph.set(file, new Set());
          }
          fileGraph.get(file).add(selfTarget);
        }
      }

      // File-level: track relative imports.
      if (specifier.startsWith(".")) {
        const resolved = resolveRelative(file, specifier);
        if (resolved) {
          if (!fileGraph.has(file)) {
            fileGraph.set(file, new Set());
          }
          fileGraph.get(file).add(resolved);
        }
      }
    },

    onFile(file, context) {
      filePkgInfo.set(file, {
        packageDir: context.packageDir,
        packageJson: context.packageJson,
        target: context.target,
      });
      if (!fileGraph.has(file)) {
        fileGraph.set(file, new Set());
      }
    },

    onWalkComplete() {
      // Module-level cycle detection.
      const moduleCycles = findAllCycles(moduleGraph);
      for (const { cycle, sccSize } of moduleCycles) {
        const sccNote = sccSize > cycle.length - 1 ? ` (${sccSize} packages in cycle group)` : "";
        errors.push(`module-level cycle${sccNote}:\n    ${cycle.join(" →\n    ")}`);
      }

      // File-level cycle detection — partition file graph by package+target.
      const partitions = new Map();
      for (const [file, info] of filePkgInfo) {
        const key = `${info.packageDir}::${info.target}`;
        if (!partitions.has(key)) {
          partitions.set(key, {
            packageDir: info.packageDir,
            packageJson: info.packageJson,
            target: info.target,
            files: new Set(),
          });
        }
        partitions.get(key).files.add(file);
      }

      for (const { packageDir, packageJson, target, files } of partitions.values()) {
        // Build a subgraph restricted to files within this package+target.
        const subgraph = new Map();
        for (const file of files) {
          const edges = fileGraph.get(file);
          if (edges) {
            const filtered = new Set();
            for (const neighbor of edges) {
              if (files.has(neighbor)) {
                filtered.add(neighbor);
              }
            }
            if (filtered.size) {
              subgraph.set(file, filtered);
            }
          }
        }

        const fileCycles = findAllCycles(subgraph);
        for (const { cycle, sccSize } of fileCycles) {
          const relCycle = cycle.map((f) => path.relative(packageDir, f));
          const sccNote = sccSize > cycle.length - 1 ? ` (${sccSize} files in cycle group)` : "";
          errors.push(`[${packageJson.name}/${target}] file-level cycle${sccNote}:\n    ${relCycle.join(" →\n    ")}`);
        }
      }
    },

    getErrors() {
      return errors;
    },
  };
}

async function main() {
  const packages = getPackageDirs();
  const validator = createValidator();
  const bus = createBus({ packages });
  bus.register(validator);
  await bus.run();

  const errors = validator.getErrors();
  if (errors.length) {
    console.error(`❌ ${errors.length} cycle(s) detected:\n  ${errors.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`✅ No cyclical file or package dependencies. (${bus.getSummary()})`);
  console.log(`    [${(validator.inspects || validator.targets).join(", ")}]`);
}

if (require.main === module) {
  main();
}

module.exports = { createValidator };
