#!/usr/bin/env node

const { join } = require("path");
const { readdirSync, statSync, rmSync } = require("fs");
const { removeSync } = require("fs-extra");
const { spawnProcess } = require("../utils/spawn-process");
const walk = require("../utils/walk");
const assert = require("assert");

/**
 *
 * Counts packed byte size for clients with only dist-cjs included.
 *
 */

const locations = {};

locations.root = join(__dirname, "..", "..");
locations.clients = join(locations.root, "clients");

(async () => {
  const packs = [];

  for await (const clientFolderName of readdirSync(locations.clients)) {
    const clientLocation = join(locations.clients, clientFolderName);
    removeSync(join(clientLocation, "dist-types"));
    removeSync(join(clientLocation, "dist-es"));

    packs.push(
      spawnProcess("npm", ["pack"], {
        cwd: clientLocation,
      })
    );
  }

  await Promise.all(packs);

  let bytes = 0;
  const packFiles = [];

  for await (file of walk(locations.clients)) {
    if (file.includes("aws-sdk-client-") && file.endsWith(".tgz")) {
      bytes += statSync(file).size;
      packFiles.push(file);
    }
  }

  assert(6_000_000 < bytes, "byte count expected to be more than 6 million");
  assert(bytes < 20_000_000, "byte count expected to be less than 20 million");

  console.log("all clients dist-cjs total bytes:", bytes);

  for (const packFile of packFiles) {
    rmSync(packFile);
  }
})();
