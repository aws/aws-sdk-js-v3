const { getIntegTestResources } = require("./get-integ-test-resources");
const { runE2ETests } = require("./run-e2e-tests");

const run = async () => {
  try {
    const integTestResourcesEnv = await getIntegTestResources();
    await runE2ETests(integTestResourcesEnv);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

run();
