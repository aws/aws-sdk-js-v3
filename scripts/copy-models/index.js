// @ts-check
const yargs = require("yargs");

const { promises: fsPromises } = require("fs");
const { join, resolve } = require("path");

const { models, protocols } = yargs(process.argv.slice(2))
  .alias("m", "models")
  .string("m")
  .describe("m", "The path to directory with aws-models.")
  .demandOption(["models"])
  .alias("p", "protocols")
  .string("p")
  .describe(
    "p",
    "List of protocols to copy e.g. awsJson1,restXml, default all, list: \n" +
      `awsJson1_1,
restJson1,
awsJson1_0,
awsQuery,
restXml,
ec2Query`
  )
  .help().argv;

const getSdkId = (model) => {
  const { shapes } = model;
  const service = Object.values(shapes).find((shape) => shape.type === "service") || {};
  const { traits } = service;
  for (const [trait, value] of Object.entries(traits)) {
    if (trait === "aws.api#service") {
      return value.sdkId;
    }
  }
  throw new Error("unable to find SDK ID in model file");
};

const getWireProtocol = (model) => {
  const { shapes } = model;
  const service = Object.values(shapes).find((shape) => shape.type === "service") || {};
  for (const trait of Object.keys(service.traits || {})) {
    if (trait.startsWith("aws.protocols#")) {
      const parts = trait.split("aws.protocols#");
      if (parts.length !== 0) {
        return parts.pop();
      }
    }
  }
  throw new Error("unable to determine wire protocol in model file");
};

(async () => {
  const OUTPUT_DIR = join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models");

  const files = await fsPromises.readdir(models.toString(), {
    withFileTypes: true,
  });

  const smithyModelsFiles = files
    .filter((file) => file.isDirectory())
    .map((dir) => join(models.toString(), dir.name, `smithy/model.json`));

  const observedProtocols = {};

  for (const smithyModelsFile of smithyModelsFiles) {
    try {
      // Test if file exists.
      await fsPromises.stat(smithyModelsFile);
      // File exists, copy it.
      const absolutePath = resolve(smithyModelsFile);

      try {
        const model = require(absolutePath);
        const sdkId = getSdkId(model).toLowerCase().replace(/\s/g, "-");
        const protocol = getWireProtocol(model);

        observedProtocols[protocol] |= 0;
        observedProtocols[protocol]++;

        if (!protocols || protocols.split(",").includes(protocol)) {
          // Copy file.
          const outputFile = join(OUTPUT_DIR, `${sdkId}.json`);
          await fsPromises.writeFile(outputFile, JSON.stringify(model, null, 2));
          console.log("Copied", outputFile);
        }
      } catch (e) {
        // Copy failed, log.
        console.log("Failed to copy", absolutePath);
        console.log(e.message);
      }
    } catch (e) {
      // File doesn't exist, ignore.
      console.log("File not found", e.message);
    }
  }

  console.log("args:", {
    models,
    protocols,
    observedProtocols,
  });
})();
