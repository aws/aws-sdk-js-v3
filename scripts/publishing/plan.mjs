// @ts-check
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";
import { isPublished, packageExists } from "./registry.mjs";

const CONCURRENCY = 16;

/**
 * @typedef {{
 *   name: string,
 *   version: string,
 *   dir: string,
 *   deps: string[],
 *   repositoryUrl: string | undefined,
 * }} WorkspacePackage
 */

/**
 * @returns {WorkspacePackage[]} non-private workspace packages.
 */
export const getPublicPackages = () => {
  const packages = [];
  for (const dir of getWorkspacePaths()) {
    let pkg;
    try {
      pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
    } catch {
      continue;
    }
    if (pkg.private || !pkg.name || !pkg.version) {
      continue;
    }
    const deps = [
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.peerDependencies ?? {}),
      ...Object.keys(pkg.optionalDependencies ?? {}),
    ];
    const repositoryUrl = typeof pkg.repository === "string" ? pkg.repository : pkg.repository?.url;
    packages.push({ name: pkg.name, version: pkg.version, dir, deps, repositoryUrl });
  }
  return packages;
};

/**
 * @param {WorkspacePackage[]} packages
 * @returns {Promise<WorkspacePackage[]>} packages whose declared version is not on NPM.
 */
export const filterUnpublished = async (packages) => {
  const unpublished = [];
  const queue = [...packages];
  const worker = async () => {
    for (let pkg = queue.shift(); pkg; pkg = queue.shift()) {
      if (!(await isPublished(pkg))) {
        unpublished.push(pkg);
      }
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return unpublished;
};

/**
 * @param {WorkspacePackage[]} packages
 * @returns {Promise<WorkspacePackage[]>} packages that have never been published to NPM.
 */
export const findMissingPackages = async (packages) => {
  const missing = [];
  const queue = [...packages];
  const worker = async () => {
    for (let pkg = queue.shift(); pkg; pkg = queue.shift()) {
      if (!(await packageExists(pkg))) {
        missing.push(pkg);
      }
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return missing.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Publishing a dependent before its dependency exists on NPM would ship a version that cannot be installed.
 *
 * @param {WorkspacePackage[]} packages
 * @param {WorkspacePackage[]} roots
 * @returns {WorkspacePackage[]} packages in the plan that depend on a root, directly or through other packages.
 */
export const findDependents = (packages, roots) => {
  const blocked = new Set(roots.map(({ name }) => name));
  const dependents = [];
  for (let changed = true; changed;) {
    changed = false;
    for (const pkg of packages) {
      if (!blocked.has(pkg.name) && pkg.deps.some((dep) => blocked.has(dep))) {
        blocked.add(pkg.name);
        dependents.push(pkg);
        changed = true;
      }
    }
  }
  return dependents.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * A package's tier is one more than the highest tier among its dependencies in the plan, so a
 * package is published only after its workspace dependencies are confirmed available.
 *
 * @param {WorkspacePackage[]} packages
 * @returns {WorkspacePackage[][]} tiers in publishing order.
 */
export const tierByDependencies = (packages) => {
  const byName = new Map(packages.map((pkg) => [pkg.name, pkg]));
  /**
   * @type {Map<string, number>}
   */
  const tiers = new Map();
  const visiting = new Set();

  /**
   * @param {WorkspacePackage} pkg
   * @returns {number}
   */
  const tierOf = (pkg) => {
    const known = tiers.get(pkg.name);
    if (known !== undefined) {
      return known;
    }
    if (visiting.has(pkg.name)) {
      throw new Error(`Dependency cycle through ${pkg.name}`);
    }
    visiting.add(pkg.name);
    let highest = 0;
    for (const dep of pkg.deps) {
      const depPkg = byName.get(dep);
      if (depPkg) {
        highest = Math.max(highest, tierOf(depPkg));
      }
    }
    visiting.delete(pkg.name);
    tiers.set(pkg.name, highest + 1);
    return highest + 1;
  };

  /**
   * @type {WorkspacePackage[][]}
   */
  const result = [];
  for (const pkg of packages) {
    (result[tierOf(pkg) - 1] ??= []).push(pkg);
  }
  return result;
};
