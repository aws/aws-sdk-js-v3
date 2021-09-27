// @ts-check
const yargs = require("yargs");

const { existsSync, readdirSync, readFileSync, statSync, writeFileSync } = require("fs");
const { join } = require("path");
const { execSync } = require("child_process");
const stripComments = require("strip-comments");

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

packages
  .map((dir) => dir.replace("/*", ""))
  .forEach((workspacesDir) => {
    // Process each workspace in workspace directory
    readdirSync(join(process.cwd(), workspacesDir), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .forEach((workspaceName) => {
        const workspaceDir = join(workspacesDir, workspaceName);

        const packageJsonPath = join(workspaceDir, "package.json");
        const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
        if (!packageJson.scripts["downlevel-dts"]) {
          console.error(`The "downlevel-dts" script is not defined for "${workspaceDir}"`);
          return;
        }
        const downlevelArgs = packageJson.scripts["downlevel-dts"].split(" ");
        const downlevelDirname = downlevelArgs[2].replace(`${downlevelArgs[1]}/`, "");

        const tsTypesConfigPath = join(workspaceDir, "tsconfig.types.json");
        const declarationDirname = JSON.parse(readFileSync(tsTypesConfigPath).toString()).compilerOptions
          .declarationDir;

        if (!declarationDirname) {
          throw new Error(`The declarationDir is not defined in "${tsTypesConfigPath}".`);
        }

        const declarationDir = join(workspaceDir, declarationDirname);
        if (!existsSync(declarationDir)) {
          throw new Error(
            `The types for "${workspaceName}" do not exist.\n` +
              `Please build types for workspace "${workspaceDir}" before running downlevel-dts script.`
          );
        }

        const downlevelDir = join(declarationDir, downlevelDirname);
        // Create downlevel-dts folder if it doesn't exist
        if (!existsSync(downlevelDir)) {
          execSync(["./node_modules/.bin/downlevel-dts", declarationDir, downlevelDir].join(" "));
        }

        // Strip comments from downlevel-dts files
        if (existsSync(downlevelDir)) {
          getAllFiles(downlevelDir).forEach((downlevelTypesFilepath) => {
            try {
              const content = readFileSync(downlevelTypesFilepath, "utf8");
              writeFileSync(downlevelTypesFilepath, stripComments(content));
            } catch (error) {
              console.error(
                `Error while stripping comments from "${downlevelTypesFilepath.replace(process.cwd(), "")}"`
              );
              console.error(error);
            }
          });
        }
      });
  });
