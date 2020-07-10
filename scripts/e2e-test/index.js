const { spawn } = require("child_process");
const { readFileSync, unlinkSync } = require("fs");
const { join } = require("path");

const spawnPromise = (command, options, spawnOptions) =>
  new Promise((resolve, reject) => {
    const ps = spawn(command, options, {
      stdio: "inherit",
      ...spawnOptions,
    });
    ps.on("error", reject);
    ps.on("exit", resolve);
  });

const run = async () => {
  const envFile = "env.json";
  await spawnPromise("node", ["get-integ-test-resources.js", envFile], {
    cwd: __dirname,
  });
  const integTestResourcesEnv = JSON.parse(readFileSync(join(__dirname, envFile)).toString());
  try {
    await spawnPromise("node", ["run-e2e-tests.js"], {
      env: { ...process.env, ...integTestResourcesEnv },
      cwd: __dirname,
    });
  } finally {
    unlinkSync(join(__dirname, envFile));
  }
};

run();
