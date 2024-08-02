const fs = require("fs");
const { spawnProcess } = require("../utils/spawn-process");
const path = require("path");

// Fetch Secrets In CI Environments
const fetchSecret = async (secretName) => {
  const account = process.env.TURBO_CACHE_AWS_ACCOUNT_ID;
  if (!account) {
    return null;
  }
  try {
    if (!fs.existsSync(path.join(__dirname, "node_modules/"))) {
      await installDeps();
    }
    const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
    const partialArn = `arn:aws:secretsmanager:us-west-2:${account}:secret:${secretName}`;
    const secretsManager = new SecretsManagerClient({ region: "us-west-2" });
    const command = new GetSecretValueCommand({ SecretId: partialArn });

    const response = await secretsManager.send(command);
    return response.SecretString;
  } catch (error) {
    console.error("Error fetching turbo remote cache secret:", error);
    return null;
  }
};

const installDeps = async () => {
  return spawnProcess("npm", ["install"], { stdio: "inherit", cwd: __dirname });
};

const runTurbo = async (task, args, apiSecret, apiEndpoint) => {
  let command = ["turbo", "run", task];
  if (apiSecret && apiEndpoint) {
    command = command.concat([
      `--api=${apiEndpoint}`,
      `--team=aws-sdk-js`,
      `--token=${apiSecret}`,
      "--concurrency=100%",
    ]);
  }
  command = command.concat(args);
  const turboRoot = path.join(__dirname, "..", "..");
  try {
    return spawnProcess("npx", command, { stdio: "inherit", cwd: turboRoot });
  } catch (error) {
    console.error("Error running turbo:", error);
  }
};

const main = async () => {
  const apiSecret = process.env.AWS_JS3_TURBO_CACHE_API_SECRET || (await fetchSecret("TURBO_CACHE_API_SECRET"));
  const apiEndpoint = process.env.AWS_JS3_TURBO_CACHE_API_ENDPOINT || (await fetchSecret("TURBO_CACHE_API_ENDPOINT"));

  const args = process.argv.slice(2);

  if (!apiSecret || !apiEndpoint) {
    await runTurbo(args[0], args.slice(1));
  } else {
    await runTurbo(args[0], args.slice(1), apiSecret, apiEndpoint);
  }
};

main();
