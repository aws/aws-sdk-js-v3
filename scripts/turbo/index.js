const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
const { spawnProcess } = require("../utils/spawn-process");

// Fetch Secrets In CI Environments
const fetchSecret = async (secretName) => {
  const account = process.env.TURBO_CACHE_AWS_ACCOUNT_ID;
  if (!account) {
    return null;
  }
  const partialArn = `arn:aws:secretsmanager:us-west-2:${account}:secret:${secretName}`;
  const secretsManager = new SecretsManagerClient({ region: "us-west-2" });
  const command = new GetSecretValueCommand({ partialArn });

  const response = await secretsManager.send(command);
  return response.SecretString;
};

const runTurbo = async (task, args, apiSecret, apiEndpoint) => {
  const command = ["turbo", "run", task];
  if (apiSecret && apiEndpoint) {
    command = command.concat([
      `--api="${apiEndpoint}"`,
      `--team="aws-sdk-js"`,
      `--token=${apiSecret}`,
      "--concurrency=100%",
    ]);
  }
  command = command.concat(args);
  console.info("Running:", "npx turbo run ", task);
  await spawnProcess("npx", command, { stdio: "inherit" });
  return;
};

const main = async () => {
  const apiSecret = process.env.AWS_JS3_TURBO_CACHE_API_SECRET || (await fetchSecret("TURBO_CACHE_API_SECRET"));
  const apiEndpoint = process.env.AWS_JS3_TURBO_CACHE_API_ENDPOINT || (await fetchSecret("TURBO_CACHE_API_ENDPOINT"));

  const args = process.argv.slice(2);

  if (!apiSecret || !apiEndpoint) {
    runTurbo(args[0], args.slice[1]);
  }

  runTurbo(args[0], args.slice[1], apiSecret, apiEndpoint);
};

main();
