// @ts-check
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";
import { isPublished } from "./registry.mjs";

const CONCURRENCY = 16;

/**
 * @typedef {{ name: string, version: string, dir: string, deps: string[] }} WorkspacePackage
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
    packages.push({ name: pkg.name, version: pkg.version, dir, deps });
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
