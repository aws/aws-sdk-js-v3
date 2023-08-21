/**
 * Merge C2J examples into the Smithy models.
 * Due to a backlogged issue, these examples are not available via Smithy.
 *
 * @see https://smithy.io/1.0/spec/core/documentation-traits.html#examples-trait
 */

const { readdirSync, lstatSync, writeFileSync, existsSync, readFileSync } = require("fs");
const { join, dirname } = require("path");
const walk = require("../utils/walk");

module.exports = {
  /**
   * @param {string} clientsFolder - location of the client source files into which to merge examples.
   * @param {string} [serviceParam] - a specific service sdk id for which to merge examples.
   *                                  When not provided, all services receive merged examples.
   */
  async merge(clientsFolder = join(__dirname, "..", "..", "clients"), serviceParam) {
    /**
     * key - sdkId (Smithy).
     * value - examples (C2J).
     */
    const sdkIdToExamples = {};

    /**
     * key - sdkId (Smithy) normalized lower case.
     * value - generated sources, commands folder.
     */
    const sdkIdToCommandsFolder = {};

    const location = join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models-examples");
    const serviceFolders = readdirSync(location);

    for (const folder of serviceFolders) {
      let sdkId;
      if (!lstatSync(join(location, folder)).isDirectory()) {
        continue;
      }
      try {
        const smithyModel = require(join(location, folder, "smithy", "model.json"));
        sdkId = Object.values(smithyModel.shapes).find((s) => s.type === "service").traits["aws.api#service"].sdkId;
      } catch (e) {
        console.error(`${folder} does not have a Smithy model.`);
        continue;
      }
      const modelFolders = readdirSync(join(location, folder)).filter(name => !name.startsWith("."));
      for (const c2jFolder of modelFolders.filter((name) => name !== "smithy")) {
        const c2jFiles = readdirSync(join(location, folder, c2jFolder));
        for (const examples of c2jFiles.filter((file) => file.includes("examples"))) {
          sdkIdToExamples[sdkId] = require(join(location, folder, c2jFolder, examples));
        }
      }
    }

    const smithyModelsLocation = join(__dirname, "..", "..", "codegen", "sdk-codegen", "aws-models");

    for (const smithyModelFile of readdirSync(smithyModelsLocation)) {
      /**
       * This is an example of how to merge/map the examples into the Smithy model
       * as the Smithy trait "examples". However, the examples do not work
       * because some of them contain incorrect types and fail Smithy
       * validation.
       */
      continue;

      const model = require(join(smithyModelsLocation, smithyModelFile));
      sdkId = Object.values(model.shapes).find((s) => s.type === "service").traits["aws.api#service"].sdkId;

      if (sdkId in sdkIdToExamples) {
        const examples = sdkIdToExamples[sdkId];
        const operations = Object.entries(model.shapes).filter(([, s]) => s.type === "operation");
        for ([name, operation] of operations) {
          const [, simpleName] = name.split("#");
          const matchingExample = Object.entries(examples.examples).find(([name]) => name === simpleName);
          if (matchingExample) {
            const [, examples] = matchingExample;

            if (!operation.traits["smithy.api#examples"]) {
              operation.traits["smithy.api#examples"] = examples.map((example) => {
                return {
                  title: example.title,
                  documentation: example.description,
                  input: example.input,
                  output: example.output,
                };
              });
            }
          }
        }
      }

      writeFileSync(join(smithyModelsLocation, smithyModelFile), JSON.stringify(model, null, 2), "utf-8");
    }

    for (const [sdkId, examplesFile] of Object.entries(sdkIdToExamples)) {
      const id = sdkId.replaceAll(" ", "-").toLowerCase();
      if (serviceParam && id !== serviceParam) {
        continue;
      }
      console.log("processing examples for", id);

      const commandsFolder = await (async () => {
        if (sdkIdToCommandsFolder[id]) {
          return sdkIdToCommandsFolder[id];
        }
        if (clientsFolder.endsWith("clients")) {
          if (existsSync(join(clientsFolder, `client-${id}`, "src", "commands"))) {
            return (sdkIdToCommandsFolder[id] = join(clientsFolder, `client-${id}`, "src", "commands"));
          }
        }
        for await (const file of walk(clientsFolder)) {
          if (/package\.json$/.test(file) && !file.includes("node_modules")) {
            const pkg = require(file);
            const clientId = pkg.name.split("@aws-sdk/client-").pop();
            if (clientId === id) {
              return (sdkIdToCommandsFolder[id] = join(dirname(file), "src", "commands"));
            }
          }
        }
      })();

      if (!commandsFolder) {
        console.error("unable to find commands folder for", id);
        continue;
      }

      for (const [operation, examples] of Object.entries(examplesFile.examples)) {
        const commandFile = join(commandsFolder, operation + "Command.ts");
        if (existsSync(commandFile)) {
          for (const example of examples) {
            let buffer = [];
            buffer.push(
              ...`@example ${example.title}
\`\`\`javascript
${(example.description || "")
  .split("\n")
  .map((line) => `// ${line}`)
  .join("\n")}
const input = ${JSON.stringify(example.input, null, 2)};
const command = new ${operation}Command(input);
${
  Object.keys(example.output || {}).length > 0
    ? `const response = await client.send(command);
/* response ==
${JSON.stringify(example.output, null, 2)} 
*\\/`
    : `await client.send(command);`
}
// example id: ${example.id}
\`\`\`
`.split("\n")
            );

            const final = `${buffer.map((line) => " " + `* ${line}`.trim()).join("\n")}
 */`;
            const file = readFileSync(commandFile, "utf-8");

            if (file.includes(example.id)) {
              continue;
            } else {
              const contents = file.replace(
                ` */\nexport class ${operation}Command`,
                `${final}
export class ${operation}Command`
              );
              writeFileSync(commandFile, contents, "utf-8");
            }
          }
        }
      }
    }
  },
};

if (process.argv.includes("--service")) {
  module.exports.merge(void 0, process.argv[process.argv.indexOf("--service") + 1]);
}

if (process.argv.includes("--all")) {
  module.exports.merge(void 0);
}
