const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const packages = path.join(root, "packages");
const libs = path.join(root, "lib");
const clients = path.join(root, "clients");

/**
 * Throw and Error if any deprecated package is not marked private.
 */
{
  const excluded = [];

  const deprecatedPackages = path.join(root, "deprecated", "packages");
  for (const folder of fs.readdirSync(deprecatedPackages)) {
    const pkgJson = require(path.join(deprecatedPackages, folder, "package.json"));

    if (excluded.includes(pkgJson.name)) {
      continue;
    }

    if (pkgJson.private !== true) {
      throw new Error("package in deprecated folder is not marked private:", folder);
    } else {
    }
  }
}

/**
 * Analyze package dependency graph.
 */
{
  const packagesData = fs.readdirSync(packages).map((pkg) => require(path.join(packages, pkg, "package.json")));
  const libsData = fs.readdirSync(libs).map((pkg) => require(path.join(libs, pkg, "package.json")));
  const clientsData = fs.readdirSync(clients).map((pkg) => require(path.join(clients, pkg, "package.json")));

  const allPackages = [...packagesData, ...libsData, ...clientsData];

  const graph = new (class PackageGraph {
    /**
     * @param graph - map of pkg name to pkg.json objects.
     */
    constructor(graph) {
      this.graph = graph;
      for (const md of Object.values(graph)) {
        md.dependents = md.dependents ?? {};
        for (const dependency of Object.keys({ ...md.dependencies, ...md.devDependencies })) {
          if (!graph[dependency]) {
            // is external.
            continue;
          }
          graph[dependency].dependents = graph[dependency].dependents ?? {};
          graph[dependency].dependents[md.name] = 1;
        }
      }
    }

    entryPoints() {
      const { graph } = this;
      return Object.values(graph)
        .filter((p) => {
          if (p.name.startsWith("@aws-sdk/client-")) {
            return false;
          }
          // return Object.keys(p.dependents).length === 0;
          return true;
        })
        .sort((a, b) => {
          return Object.keys(a.dependents).length - Object.keys(b.dependents).length;
        })
        .map((p) => {
          const deps = Object.keys(p.dependents);
          switch (p.name) {
            case "@aws-sdk/karma-credential-loader":
              return p.name + ": -- devtool --";
          }
          if (deps.length === 0) {
            return p.name + ": ---- NONE ----";
          }
          if (deps.length > 100) {
            return p.name + `: ** ${deps.length} packages (clients) **`;
          }
          if (deps.length > 5) {
            return p.name + `: ** ${deps.length} packages **`;
          }
          return p.name + ": \n\t" + deps.join("\n\t");
        });
    }
  })(
    allPackages.reduce((gr, pkg) => {
      gr[pkg.name] = pkg;
      return gr;
    }, {})
  );

  console.log(graph.entryPoints().join("\n"));
}
