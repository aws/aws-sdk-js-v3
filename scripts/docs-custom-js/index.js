#!/usr/bin/env node

/**
 * This script moves client docs pages up a directory to match historic urls
 */

const fs = require("node:fs/promises");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

(async () => {
  try {
    const clients = await fs.readdir("./clientDocs/clients");

    await Promise.all(
      clients.map((client) => {
        if (client === "assets") {
          return;
        }
        return exec(
          `cp -r ./clientDocs/clients/${client}/docs/* ./clientDocs/clients/${client}/ && rm -rf ./clientDocs/clients/${client}/docs`
        );
      })
    );

    // WORKAROUND: copy first client's asset folder to fix
    //    TypeDoc asset loading error
    await exec(`cp -r ./clientDocs/clients/${clients[0]}/assets ./clientDocs/clients`);
  } catch (e) {
    throw e;
  }
})();
