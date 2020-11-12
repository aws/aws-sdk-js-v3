// @ts-check
const yargs = require("yargs");

const { promises: fsPromises } = require("fs");
const { join } = require("path");
const { spawnProcess } = require("../utils/spawn-process");

const { models } = yargs
  .alias("m", "models")
  .string("m")
  .describe("m", "The path to directory with aws-models.")
  .demandOption(["models"])
  .help().argv;

(async () => {
  const OUTPUT_DIR = join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models");

  const files = await fsPromises.readdir(models.toString(), {
    withFileTypes: true,
  });

  const smithyModelsFiles = files
    .filter((file) => file.isDirectory())
    .map((dir) => join(models.toString(), dir.name, `smithy/model.json`));

  for (const smithyModelsFile of smithyModelsFiles) {
    try {
      // Test if file exists.
      await fsPromises.stat(smithyModelsFile);
      // File exists, copy it.
      try {
        const fileContent = (await fsPromises.readFile(smithyModelsFile))
          .toString()
          // Fix for issue SMITHY-95
          .replace('"smithy.api#authDefinition": {},', "");

        const sdkIdRE = /"sdkId": "([^"]*)"/;
        const sdkId = fileContent.match(sdkIdRE)[1].toLowerCase().replace(/\s/g, "-");

        const versionRE = /"version": "([^"]*)"/;
        const version = fileContent.match(versionRE)[1];

        // Copy file.
        const outputFile = join(OUTPUT_DIR, `${sdkId}.${version}.json`);
        await fsPromises.writeFile(outputFile, fileContent);
      } catch (e) {
        // Copy failed, log.
        console.log(smithyModelsFile);
        console.log(e.message);
      }
    } catch (e) {
      // File doesn't exist, ignore.
      console.log(e.message);
    }
  }

  // Prettify copied models
  await spawnProcess(join(__dirname, "..", "..", "node_modules", ".bin", "prettier"), [
    "--write",
    `${OUTPUT_DIR}/*.json`,
  ]);
})();
