#!/usr/bin/env node
// Restores the version field from a backup package.json to the current one.

const fs = require("fs");

const [oldPkgPath, newPkgPath] = process.argv.slice(2);
const orig = JSON.parse(fs.readFileSync(oldPkgPath));
const curr = JSON.parse(fs.readFileSync(newPkgPath));
curr.version = orig.version;
fs.writeFileSync(newPkgPath, JSON.stringify(curr, null, 2) + "\n");
