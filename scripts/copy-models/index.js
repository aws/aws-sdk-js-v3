// @ts-check
const yargs = require("yargs");

const { models } = yargs
  .alias("m", "models")
  .string("m")
  .describe("m", "The path to directory with aws-models.")
  .demandOption(["models"])
  .help().argv;

(async () => {
  console.log(models);
})();
