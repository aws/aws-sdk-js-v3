const { writeFileSync, unlinkSync } = require("fs");
const { join, normalize } = require("path");
const { spawn } = require("child_process");
const { getIntegTestResources } = require("../../e2e/get-integ-test-resources");
const { spawnPromise } = require("../../e2e/spawn-promise");
const figlet = require("figlet");

const run = async () => {
  const args = process.argv.slice(2);
  const localPublish = args.includes("--local-publish");
  const projectRoot = normalize(join(__dirname, "..", "..", ".."));
  if (localPublish) {
    // Publish all the packages locally before running test
    console.log("Please make sure you have compiled the service clients you want to test!");
    console.log(figlet.textSync("Publishing Packages..."));
    await spawnPromise("yarn", ["local-publish"], { cwd: projectRoot, stdio: "inherit" });
  }

  console.log(figlet.textSync("Starting Local Registry..."));
  const localRegistry = spawn(join("node_modules", ".bin", "verdaccio"), ["-c", join("verdaccio", "config.yaml")], {
    cwd: projectRoot,
    stdio: "inherit",
  });
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  await spawnPromise("yarn", ["--registry", "http://localhost:4873"], { cwd: __dirname });
  const integTestResourcesEnv = await getIntegTestResources();
  const envFile = Object.entries(integTestResourcesEnv)
    .map(([name, key]) => `${name}=${key}`)
    .join("\n");
  writeFileSync(".env", envFile);

  console.log(figlet.textSync("Building App..."));
  await spawnPromise(join("node_modules", ".bin", "detox"), ["build", "--configuration", "ios"], { cwd: __dirname });

  console.log(figlet.textSync("Lauching Tests..."));
  await spawnPromise(
    join("node_modules", ".bin", "detox"),
    ["test", "--configuration", "ios", "--loglevel", "verbose"],
    { cwd: __dirname }
  );
};

(async () => {
  try {
    await run();
  } catch (e) {
    console.log(e);
    process.exit(1);
  } finally {
    unlinkSync(".env");
  }
})();
