// @ts-check
const yargs = require("yargs");

const { readFileSync, readdirSync, statSync } = require("fs");
const { access, readFile, writeFile } = require("fs/promises");
const { join } = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const stripComments = require("strip-comments");
const { cpus } = require("os");
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

const downlevelWorkspace = async (workspacesDir, workspaceName) => {
  const workspaceDir = join(workspacesDir, workspaceName);

  const packageJsonPath = join(workspaceDir, "package.json");
  const packageJson = JSON.parse((await readFile(packageJsonPath)).toString());
  if (!packageJson.scripts["downlevel-dts"]) {
    console.error(`The "downlevel-dts" script is not defined for "${workspaceDir}"`);
    return;
  }
  const downlevelArgs = packageJson.scripts["downlevel-dts"].split(" ");
  const downlevelDirname = downlevelArgs[2].replace(`${downlevelArgs[1]}/`, "");

  const tsTypesConfigPath = join(workspaceDir, "tsconfig.types.json");
  const declarationDirname = JSON.parse((await readFile(tsTypesConfigPath)).toString()).compilerOptions.declarationDir;

  if (!declarationDirname) {
    throw new Error(`The declarationDir is not defined in "${tsTypesConfigPath}".`);
  }

  const declarationDir = join(workspaceDir, declarationDirname);
  try {
    await access(declarationDir);
  } catch (error) {
    throw new Error(
      `The types for "${workspaceName}" do not exist.\n` +
        `Please build types for workspace "${workspaceDir}" before running downlevel-dts script.`
    );
  }

  const downlevelDir = join(declarationDir, downlevelDirname);
  // Create downlevel-dts folder if it doesn't exist
  try {
    await access(downlevelDir);
  } catch (error) {
    await exec(["yarn", "downlevel-dts"].join(" "), { cwd: workspaceDir });
  }

  // Strip comments from downlevel-dts files
  try {
    await access(downlevelDir);
    getAllFiles(downlevelDir).forEach(async (downlevelTypesFilepath) => {
      try {
        const content = await readFile(downlevelTypesFilepath, "utf8");
        await writeFile(downlevelTypesFilepath, stripComments(content));
      } catch (error) {
        console.error(`Error while stripping comments from "${downlevelTypesFilepath.replace(process.cwd(), "")}"`);
        console.error(error);
      }
    });
  } catch (error) {}
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
