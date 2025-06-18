#!/usr/bin/env node
const { join, normalize } = require("path");

const { spawnProcess } = require("../utils/spawn-process");
const { CODE_GEN_ROOT } = require("../generate-clients/code-gen-dir");

const run = async () => {
  await spawnProcess("./gradlew", [":sdk-codegen:generate-default-configs-provider"], {
    cwd: CODE_GEN_ROOT,
  });

  const DEFAULTS_MODE_CONFIG_DIR = normalize(join(__dirname, "..", "..", "packages", "smithy-client", "src"));
  // defaults-mode.ts in smithy-client is generated together with clients
  const { checkDir } = await import("../biome/biome.mjs");
  await checkDir(DEFAULTS_MODE_CONFIG_DIR);
};

(async () => {
  try {
    await run();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
