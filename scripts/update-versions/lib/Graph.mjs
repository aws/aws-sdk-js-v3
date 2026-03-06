import fs from "node:fs";
import path from "node:path";

import { graphTest } from "./Graph.test.mjs";
import { root } from "./release.mjs";
/**
 * Dependency graph used to increment package versions.
 */
export class Graph {
  constructor() {
    this.registry = {};
    this.up = {};
    this.down = {};
  }

  /**
   * @param _list - of items having package name and location relative to the root.
   * @returns sorted list.
   */
  static toposort(_list) {
    const list = [..._list].sort((a, b) => {
      return a.name < b.name;
    });

    const graph = new Graph();
    for (const { location } of list) {
      const pkgJson = JSON.parse(fs.readFileSync(path.join(root, location, "package.json"), "utf-8"));
      graph.register(pkgJson);
    }

    const byName = Object.fromEntries(list.map((item) => [item.name, item]));

    const visited = new Set();
    const sorted = [];

    const visit = (name) => {
      if (visited.has(name)) {
        return;
      }
      visited.add(name);

      for (const dep of graph.up[name] ?? []) {
        if (dep in byName) {
          visit(dep);
        }
      }
      sorted.push(byName[name]);
    };

    for (const { name } of list) {
      visit(name);
    }

    return sorted;
  }

  /**
   * @param {string} name - of dependency to register.
   * @param {Record<string, string>} dependencies - its dependencies.
   */
  register({ name, dependencies = {} }) {
    this.registry[name] = true;
    const deps = Object.keys(dependencies);
    const up = (this.up[name] = this.up[name] ?? new Set());
    for (const dep of deps) {
      up.add(dep);
      const down = (this.down[dep] = this.down[dep] ?? new Set());
      down.add(name);
    }
  }

  /**
   * @param {string[]} names - packages that are directly updated.
   * @returns {Set<string>} inputs with the addition of all consumers (incl. transitive).
   */
  getTransitiveDependencySet(names) {
    const out = new Set();
    const q = [...names];
    const visited = {};
    while (q.length) {
      const next = q.shift();
      if (visited[next]) {
        continue;
      }
      visited[next] = true;
      if (next in this.registry) {
        out.add(next);
        const down = (this.down[next] = this.down[next] ?? new Set());
        for (const _next of down) {
          if (_next in this.registry) {
            q.push(_next);
          }
        }
      }
    }
    return out;
  }
}

graphTest();
