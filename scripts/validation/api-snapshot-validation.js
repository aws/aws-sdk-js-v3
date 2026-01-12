#!/usr/bin/env node

/**
This script uses the JSON file api-snapshot/api.json to validate that previously present symbols
are still exported by the packages within the assessed group.

Data may only be deleted from api.json in an intentional backwards-incompatible change.
 */

const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const dataPath = path.join(root, "scripts", "validation", "api.json");
const api = require(dataPath);

api.$schema = "https://json-schema.org/draft/2020-12/schema";

const packageDirs = [
  ...fs.readdirSync(path.join(root, "packages")).map((f) => path.join(root, "packages", f)),
  ...fs.readdirSync(path.join(root, "packages-internal")).map((f) => path.join(root, "packages-internal", f)),
  ...fs.readdirSync(path.join(root, "lib")).map((f) => path.join(root, "lib", f)),
];
const errors = [];

for (const packageRoot of packageDirs) {
  const pkgJsonPath = path.join(packageRoot, "package.json");
  const cjsPath = path.join(packageRoot, "dist-cjs", "index.js");

  if (fs.existsSync(pkgJsonPath) && fs.existsSync(cjsPath)) {
    const packageJson = require(pkgJsonPath);
    const { name, version } = packageJson;
    const module = require(cjsPath);

    for (const key of Object.keys(module)) {
      if (module[key] === undefined) {
        console.warn(`symbol ${key} in ${name}@${version} has a value of undefined.`);
      }
    }

    if (!api[name]) {
      api[name] = {};
      for (const key of Object.keys(module)) {
        api[name][key] = [typeof module[key], `<=${version}`].join(", since ");
      }
    } else {
      for (const symbol of [...new Set([...Object.keys(api[name]), ...Object.keys(module)])]) {
        if (symbol in module && !(symbol in api[name])) {
          errors.push(`You must commit changes in api.json.`);
          api[name][symbol] = [typeof module[symbol], version].join(", since ");
        }
        if (!(symbol in module) && symbol in api[name]) {
          errors.push(`Symbol [${symbol}] is missing from ${name}, (${api[name][symbol]}).`);
        }
        if (symbol in module && symbol in api[name]) {
          if (api[name][symbol].split(", ")[0] !== typeof module[symbol]) {
            errors.push(
              `Symbol [${symbol}] has a different type than expected in ${name}, actual=${typeof module[
                symbol
              ]} expected=${api[name][symbol]}.`
            );
          }
        }
      }
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(api, null, 2) + "\n");

if (errors.length) {
  throw new Error(errors.join("\n"));
} else {
  console.log(`✅ API snapshot test passed.`);
}
