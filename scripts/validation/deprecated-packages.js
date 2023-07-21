const fs = require("node:fs");
const fse = require("fs-extra");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const packages = path.join(root, "packages");

const excluded = ["@aws-sdk/karma-credential-loader"];

for (const folder of fs.readdirSync(packages)) {
  const pkgJson = require(path.join(packages, folder, "package.json"));
  if (excluded.includes(pkgJson.name)) {
    continue;
  }
  if (pkgJson.private === true) {
    fse.moveSync(path.join(packages, folder), path.join(root, "deprecated", "packages", folder));
  }
}

const deprecatedPackages = path.join(root, "deprecated", "packages");
for (const folder of fs.readdirSync(deprecatedPackages)) {
  const pkgJson = require(path.join(deprecatedPackages, folder, "package.json"));

  if (excluded.includes(pkgJson.name)) {
    continue;
  }
  
  if (pkgJson.private !== true) {
    throw new Error("package in deprecated folder is not marked private:", folder);
  } else {
    console.log(`"${pkgJson.name}"`);
  }
}
