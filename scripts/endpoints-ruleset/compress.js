const fs = require("fs");
const path = require("path");

const RemoveWhitespace = require("./compression-algorithms/RemoveWhitespace");
const PatternDetection = require("./compression-algorithms/PatternDetection");
const { getPrunedRulesetObject } = require("./getPrunedRulesetObject");

/**
 * Run compression on ruleset objects for SDK clients.
 */
const main = (singleModel = undefined) => {
  const root = path.join(__dirname, "..", "..");
  const clientsFolder = path.join(root, "clients");
  const modelsFolder = path.join(root, "codegen", "sdk-codegen", "aws-models");
  const modelsList = singleModel ? [`${singleModel}.json`] : fs.readdirSync(modelsFolder);
  const tempFolder = path.join(__dirname, "temp");

  // clean temp folder.
  for (const tempFile of fs.readdirSync(tempFolder)) {
    if (tempFile !== ".gitignore") {
      fs.rmSync(path.join(tempFolder, tempFile));
    }
  }

  /**
   * The first algorithm which passes self-verification will be used.
   */
  const compressionAlgorithms = [(data) => new PatternDetection(data), (data) => new RemoveWhitespace(data)];

  for (const serviceName of modelsList) {
    const client = serviceName.replace(".json", "");
    const rulesetFolder = path.join(clientsFolder, "client-" + client, "src", "endpoint");
    const rulesetTs = path.join(rulesetFolder, "ruleset.ts");
    const serviceJson = path.join(modelsFolder, serviceName);

    const service = require(serviceJson);
    const rulesetObject = Object.entries(service.shapes).find(([k, v]) => v.type === "service")[1].traits[
      "smithy.rules#endpointRuleSet"
    ];

    const data = getPrunedRulesetObject(rulesetObject);

    let selectedAlgorithm = null;
    for (const factory of compressionAlgorithms) {
      const algo = factory(data);
      try {
        algo.verifyImplementation();
        selectedAlgorithm = factory(data);
        break;
      } catch (e) {
        const sample = factory(data).toCodeString("module.exports = $;");
        fs.writeFileSync(path.join(path.join(__dirname, "temp", client + "-failed.ts")), sample, "utf-8");
        console.warn(`WARN: Algorithm ${algo.constructor.name} failed for ${client}.`);
      }
    }

    if (!selectedAlgorithm) {
      throw new Error(`No viable algorithm for ${client}`);
    }

    const modifiedSource = `// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/${client}.json */

${selectedAlgorithm.toCodeString("export const ruleSet: RuleSetObject = $;")}
`;

    fs.writeFileSync(rulesetTs, modifiedSource, "utf-8");

    if (client === "s3") {
      fs.writeFileSync(
        path.join(tempFolder, "s3.js"),
        new PatternDetection(data).toCodeString("module.exports = $;"),
        "utf-8"
      );
      fs.writeFileSync(path.join(tempFolder, "s3.json"), JSON.stringify(data, null, 2), "utf-8");
    }

    console.log(client, `OK - ${selectedAlgorithm.constructor.name}`);
  }

  return 0;
};

module.exports = main;
