const fs = require("fs");
const path = require("path");

const RemoveWhitespace = require("../endpoints-ruleset/compression-algorithms/RemoveWhitespace");
const PatternDetection = require("../endpoints-ruleset/compression-algorithms/PatternDetection");
const { getPrunedModelObject } = require("./getPrunedModelObject");

/**
 * Run compression on model objects for SDK clients.
 */
const main = (singleModel = "lambda") => {
  const root = path.join(__dirname, "..", "..");
  const modelsFolder = path.join(root, "codegen", "sdk-codegen", "aws-models");
  const modelsList = singleModel ? [`${singleModel}.json`] : fs.readdirSync(modelsFolder);

  /**
   * The first algorithm which passes self-verification will be used.
   */
  const compressionAlgorithms = [(data) => new PatternDetection(data), (data) => new RemoveWhitespace(data)];

  for (const modelJsonFilename of modelsList) {
    const client = modelJsonFilename.replace(".json", "");
    const serviceJson = path.join(modelsFolder, modelJsonFilename);

    const service = require(serviceJson);

    const data = getPrunedModelObject(service);

    let selectedAlgorithm = null;
    for (const factory of compressionAlgorithms) {
      const algo = factory(data);
      try {
        algo.verifyImplementation();
        selectedAlgorithm = factory(data);
        break;
      } catch (e) {
        const sample = factory(data).toCodeString("module.exports = $;");
        fs.writeFileSync(
          path.join(path.join(__dirname, "temp", client + `-failed-${factory(data).constructor.name}.js`)),
          sample,
          "utf-8"
        );
        console.warn(`WARN: Algorithm ${algo.constructor.name} failed for ${client}.`);
      }
    }

    if (!selectedAlgorithm) {
      throw new Error(`No viable algorithm for ${client}`);
    }

    const modifiedSource = `// @ts-nocheck
// generated code, do not edit
/* This file is a compressed version of ./codegen/sdk-codegen/aws-models/${client}.json */

${selectedAlgorithm.toCodeString("module.exports = $;")}
`;

    fs.writeFileSync(path.join(__dirname, "temp", `${client}.min.js`), modifiedSource, "utf-8");
    console.log(client, `OK - ${selectedAlgorithm.constructor.name}`);
  }

  return 0;
};

main();
