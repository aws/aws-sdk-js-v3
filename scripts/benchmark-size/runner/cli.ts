import yargs from "yargs";

import {
  DEFAULT_LIMIT_CONFIG_PATH,
  DEFAULT_RAW_OUTPUT_PATH,
  DEFAULT_REPORT_PATH,
  DEFAULT_TEST_SCOPE,
} from "./constants.js";
import { sizeReport, SizeReportOptions } from "./index.js";

const args = yargs(process.argv.slice(2))
  .option("since", {
    type: "string",
    choices: ["all", "last_release", "main"],
    default: "all",
    description: "Run the size benchmark on changed package since last release or main branch",
  })
  .option("scopeConfigPath", {
    type: "string",
    default: DEFAULT_TEST_SCOPE,
  })
  .option("limitConfigPath", {
    type: "string",
    default: DEFAULT_LIMIT_CONFIG_PATH,
  })
  .option("skipLocalPublish", {
    type: "boolean",
    default: false,
    describe:
      "Skip publishing the packages locally. You can skip it if you didn't change any packages since last execution",
  })
  .option("rawOutputPath", {
    type: "string",
    default: DEFAULT_RAW_OUTPUT_PATH,
  })
  .option("reportPath", {
    type: "string",
    default: DEFAULT_REPORT_PATH,
  })
  .option("skipRawOutput", {
    type: "boolean",
    default: false,
    describe: "Whether to generate the raw benchmark data to configured path",
  })
  .help().argv;
try {
  await sizeReport(args as SizeReportOptions);
} catch (e) {
  console.error(e);
  process.exit(1);
}
