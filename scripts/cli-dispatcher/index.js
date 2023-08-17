#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const findFolders = require("./lib/findFolders");
const findScripts = require("./lib/findScripts");
const Package = require("./lib/Package");

/**
 * This script takes your command line arguments and infers the
 * package in which to execute them.
 *
 * It is supposed to save time moving among clients/packages/lib folders
 * for building and running other test commands.
 */
async function main() {
  console.log("CLI dispatcher");

  const root = path.join(__dirname, "..", "..");
  const argv = process.argv;

  const clients = fs.readdirSync(path.join(root, "clients"));
  const lib = fs.readdirSync(path.join(root, "lib"));
  const packages = fs.readdirSync(path.join(root, "packages"));
  const private = fs.readdirSync(path.join(root, "private"));

  const allPackages = [
    ...clients.map((c) => new Package(c, path.join(root, "clients", c))),
    ...lib.map((l) => new Package(l, path.join(root, "lib", l))),
    ...packages.map((p) => new Package(p, path.join(root, "packages", p))),
    ...private.map((p) => new Package(p, path.join(root, "private", p))),
  ];

  const [node, dispatcher, ...rest] = argv;
  const flags = rest.filter((f) => f.startsWith("--"));
  const options = {
    dry: flags.includes("--dry"),
    help: flags.includes("--help") || rest.length === 0,
    confirm: flags.includes("--c"),
  };

  if (options.help) {
    console.info(`
    Usage:
      b [package query words] - [command query words]
      b c s3 c - b t

      matches to:
      (cd clients/client-s3-control && yarn build:types)

      Query words are substrings that match against the package name and npm scripts.
      The substrings must appear in order for a match.
      Match priority goes to whole-word matching and initial matching.

    Options:
      --dry
        dry run with no command execution.
      --help
        show this message.
      --c
        ask for confirmation before executing command.
`);
    return 0;
  }

  const nonFlags = rest.filter((_) => !_.startsWith("--"));
  const separatorIndex = rest.indexOf("-") !== -1 ? rest.indexOf("-") : rest.length;
  const query = nonFlags.slice(0, separatorIndex);
  const commands = nonFlags.slice(separatorIndex + 1);

  const matchedPackages = findFolders(allPackages, ...query);

  if (matchedPackages.length === 0) {
    console.error("No matching packages for query:", query);
    return 0;
  }

  console.log("query:", ...query);
  console.log(
    "matches:",
    matchedPackages.map((_) => _.name)
  );

  const [target] = matchedPackages;

  const targetPkgJson = require(path.join(target.location, "package.json"));
  const matchedScripts = findScripts(Object.keys(targetPkgJson.scripts || {}), ...commands);
  const [script] = matchedScripts;

  if (commands.length === 0) {
    console.info("No commands entered");
    return 0;
  }

  if (matchedScripts.length === 0) {
    console.error("No matching scripts for command query:", commands);
    return 0;
  }

  console.log("commands:", ...commands);
  console.log("matched commands:", matchedScripts);

  const command = `yarn ${script} in ${target.location}`;

  if (options.dry) {
    console.log("DRYRUN:", command);
    return 0;
  }

  const execute = async () => {
    const { spawnProcess } = require("../utils/spawn-process");
    console.info("Running:", "yarn", script);
    console.info("Location:", target.location);
    await spawnProcess("yarn", [script], {
      cwd: target.location,
      stdio: "inherit",
    });
    return;
  };

  if (options.confirm) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`run script "${script}" in ${target.location} (y)/n?:`, async (confirm) => {
      if (confirm.toLowerCase().trim() === "y" || confirm === "") {
        await execute();
      }
      rl.close();
    });
    return 0;
  }

  await execute();

  return 0;
}

main().catch(console.error);
