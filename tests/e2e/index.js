const { join } = require("path");

const { getIntegTestResources } = require("./get-integ-test-resources");
const { spawnProcess } = require("../../scripts/utils/spawn-process");

const run = async () => {
  try {
    const integTestResourcesEnv = await getIntegTestResources();
    await spawnProcess("lerna", ["run", "test:e2e", "--concurrency", "1"], {
      cwd: join(__dirname, "..", ".."),
      env: {
        ...process.env,
        ...integTestResourcesEnv,
      },
    });
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

run();
