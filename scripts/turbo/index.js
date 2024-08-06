// Build script to handle Turborepo build execution
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const runTurbo = async (task, args, apiSecret, apiEndpoint) => {
  let command = ["turbo", "run", task];
  if (apiSecret && apiEndpoint) {
    command = command.concat([
      `--api=${apiEndpoint}`,
      "--team=aws-sdk-js",
      `--token=${apiSecret}`,
      "--concurrency=100%",
    ]);
  }
  command = command.concat(args);
  const turboRoot = path.join(__dirname, "..", "..");
  try {
    return await spawnProcess("npx", command, { stdio: "inherit", cwd: turboRoot });
  } catch (error) {
    console.error("Error running turbo:", error);
    if (args?.length > 0) {
      // Retry without additional filters
      return await runTurbo(task, null, apiSecret, apiEndpoint);
    }
  }
};

const main = async () => {
  const apiSecret = process.env.AWS_JSV3_TURBO_CACHE_API_SECRET;
  const apiEndpoint = process.env.AWS_JSV3_TURBO_CACHE_API_ENDPOINT;

  const args = process.argv.slice(2);

  if (!apiSecret || !apiEndpoint) {
    await runTurbo(args[0], args.slice(1));
  } else {
    await runTurbo(args[0], args.slice(1), apiSecret, apiEndpoint);
  }
};

main();
