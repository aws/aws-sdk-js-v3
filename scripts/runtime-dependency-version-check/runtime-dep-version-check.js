#!/usr/bin/env node

/**
 * This script checks the declared dependencies throughout the entire repo
 * and throws an error if there is are more than one version of a dependency.
 *
 * @example
 * ```
 * There is more than one version of a declared runtime dependency
 * @smithy/middleware-endpoint {
 *   '^1.0.2': '350 locations',
 *   '^1.0.1': [
 *     '@aws-sdk/lib-storage',
 *     '@aws-sdk/middleware-sdk-ec2',
 *     '@aws-sdk/middleware-sdk-rds',
 *     '@aws-sdk/s3-presigned-post',
 *     '@aws-sdk/s3-request-presigner'
 *   ]
 * }
 * ```
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");

const clients = fs.readdirSync(path.join(root, "clients"));
const lib = fs.readdirSync(path.join(root, "lib"));
const packages = fs.readdirSync(path.join(root, "packages"));
const _private = fs.readdirSync(path.join(root, "private"));

const allPackages = [
  ...clients.map((c) => path.join(root, "clients", c)),
  ...lib.map((l) => path.join(root, "lib", l)),
  ...packages.map((p) => path.join(root, "packages", p)),
  ..._private.map((p) => path.join(root, "private", p)),
];

const runtimeDependencies = {
  /* @namespace/name: {
    [version]: [location, location]
  } */
};

const nonRuntimeDependencies = {
  /* @namespace/name: {
    [version]: [location, location]
  } */
};

for (const pkg of allPackages) {
  const pkgJson = require(path.join(pkg, "package.json"));
  const { dependencies = {}, devDependencies = {} } = pkgJson;

  for (const [name, version] of Object.entries(dependencies)) {
    if (version.startsWith("file:")) {
      continue;
    }
    runtimeDependencies[name] = runtimeDependencies[name] ?? {};
    runtimeDependencies[name][version] = runtimeDependencies[name][version] ?? [];
    runtimeDependencies[name][version].push(pkgJson.name);
  }

  for (const [name, version] of Object.entries(devDependencies)) {
    if (version.startsWith("file:")) {
      continue;
    }
    nonRuntimeDependencies[name] = nonRuntimeDependencies[name] ?? {};
    nonRuntimeDependencies[name][version] = nonRuntimeDependencies[name][version] ?? [];
    nonRuntimeDependencies[name][version].push(pkgJson.name);
  }
}

let errors = [];

for (const [pkg, versions] of Object.entries(runtimeDependencies)) {
  const versionCount = Object.keys(versions).length;
  if (versionCount > 1) {
    console.error("There is more than one version of a declared runtime dependency.");
    console.error(
      pkg,
      Object.entries(versions).reduce((acc, [version, locations]) => {
        acc[version] = locations.length > 20 ? `${locations.length} locations` : locations;
        return acc;
      }, {})
    );
    errors.push(pkg);
  }
}

for (const [pkg, versions] of Object.entries(nonRuntimeDependencies)) {
  const versionCount = Object.keys(versions).length;
  if (versionCount > 1) {
    console.error("There is more than one version of a declared dev dependency.");
    console.error(
      pkg,
      Object.entries(versions).reduce((acc, [version, locations]) => {
        acc[version] = locations.length > 20 ? `${locations.length} locations` : locations;
        return acc;
      }, {})
    );
    errors.push(pkg);
  }
}

if (errors.length) {
  const violations = errors.join(", ");
  throw new Error(violations + " have inconsistent declared versions.");
}
