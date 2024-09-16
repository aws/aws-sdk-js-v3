// Build script to handle Turborepo build execution
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

const runTurbo = async (task, args, apiSecret, apiEndpoint) => {
  const command = ["turbo", "run", task, "--concurrency=100%", "--output-logs=hash-only"];
  command.push(...args);
  const turboRoot = path.join(__dirname, "..", "..");
  try {
    return await spawnProcess("yarn", command, {
      stdio: "inherit",
      cwd: turboRoot,
      env: {
        ...process.env,
        TURBO_TELEMETRY_DISABLED: "1",
        ...(apiSecret &&
          apiEndpoint && {
            TURBO_API: apiEndpoint,
            TURBO_TOKEN: apiSecret,
            TURBO_TEAM: "aws-sdk-js",
          }),
        ...(!process.env.CODEBUILD_BUILD_ARN && {
          TURBO_REMOTE_CACHE_READ_ONLY: "1",
        }),
      },
    });
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
