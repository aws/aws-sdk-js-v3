// @ts-check
const yargs = require("yargs");

const { readFileSync, readdirSync, statSync } = require("fs");
const { join } = require("path");
const { cpus } = require("os");
const { downlevelWorkspace } = require("./downlevelWorkspace");
const parallelLimit = require("async/parallelLimit");

// ToDo: Write downlevel-dts as a yargs command, and import yargs in scripts instead.
yargs
  .usage(
    "Runs downlevel-dts npm script (if present) in each workspace of monorepo," +
      " and strips comments from *.d.ts files.\n\n" +
      "Usage: index.js"
  )
  .help()
  .alias("h", "help").argv;

const { packages } = JSON.parse(readFileSync(join(process.cwd(), "package.json")).toString()).workspaces;

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    if (statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const workspaces = packages
  .map((dir) => dir.replace("/*", ""))
  .flatMap((workspacesDir) =>
    readdirSync(join(process.cwd(), workspacesDir), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => ({ workspacesDir, workspaceName: dirent.name }))
  );

const tasks = workspaces.map(({ workspacesDir, workspaceName }) => async () => {
  await downlevelWorkspace(workspacesDir, workspaceName);
});

parallelLimit(tasks, cpus().length, function (err) {
  if (err) {
    throw err;
  }
});
