const fs = require("node:fs");
const path = require("node:path");
const { listFolders } = require("../utils/list-folders");

const root = path.join(__dirname, "..", "..");
const packages = path.join(root, "packages");
const libs = path.join(root, "lib");
const clients = path.join(root, "clients");

/**
 * Throw and Error if any reserved package is not marked private.
 */
{
  const excluded = [];

  const reservedPackages = path.join(root, "reserved", "packages");
  for (const folder of fs.readdirSync(reservedPackages)) {
    const pkgJsonPath = path.join(reservedPackages, folder, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }
    const pkgJson = require(path.join(reservedPackages, folder, "package.json"));

    if (excluded.includes(pkgJson.name)) {
      continue;
    }

    if (pkgJson.private !== true) {
      throw new Error("package in reserved folder is not marked private:", folder);
    }
  }
}

/**
 * Analyze package dependency graph.
 */
{
  const hasPkgJson = (subfolder, pkg) => fs.existsSync(path.join(subfolder, pkg, "package.json"));
  const packagesData = listFolders(packages)
    .filter(hasPkgJson.bind(null, "packages"))
    .map((pkg) => require(path.join(packages, pkg, "package.json")));
  const libsData = listFolders(libs)
    .filter(hasPkgJson.bind(null, "libs"))
    .map((pkg) => require(path.join(libs, pkg, "package.json")));
  const clientsData = listFolders(clients)
    .filter(hasPkgJson.bind(null, "clients"))
    .map((pkg) => require(path.join(clients, pkg, "package.json")));

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
