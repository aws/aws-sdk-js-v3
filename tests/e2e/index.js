const { getIntegTestResources } = require("./get-integ-test-resources");
const execa = require("execa");

const run = async () => {
  try {
    const integTestResourcesEnv = await getIntegTestResources();
    await execa("yarn", ["lerna", "run", "test:e2e", "--since", "--concurrency", "1"], {
      env: {
        ...integTestResourcesEnv,
        ...process.env,
      },
      stdio: "inherit",
    });
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

run();
