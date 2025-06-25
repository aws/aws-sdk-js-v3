const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..", "..");
const modelsDir = path.join(root, "codegen", "sdk-codegen", "aws-models");

function rulesetHasher(ruleset) {
  return ruleset.rules
    .map((r) => {
      if (r.type === "error") {
        return "error";
      }
      return `${r?.conditions?.[0]?.fn}(${r?.conditions?.[0]?.argv?.[0]?.ref})`;
    })
    .join("-");
}

const data = {};

for (const modelFile of fs.readdirSync(modelsDir)) {
  const model = require(path.join(modelsDir, modelFile));

  const serviceShape = Object.values(model.shapes).find((s) => s.type === "service");

  const serviceTrait = serviceShape.traits["aws.api#service"];
  const ruleset = serviceShape.traits["smithy.rules#endpointRuleSet"];

  const hash = rulesetHasher(ruleset);
  data[hash] = data[hash] ?? {};
  data[hash][serviceTrait.endpointPrefix] = 1;
}

console.log(data);
