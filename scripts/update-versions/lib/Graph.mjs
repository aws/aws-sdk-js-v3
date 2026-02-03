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
