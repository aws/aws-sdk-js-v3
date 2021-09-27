// @ts-check
const yargs = require("yargs");

// ToDo: Write downlevel-dts as a command, and import yargs in scripts instead.
yargs
  .usage(
    "Runs downlevel-dts npm script (if present) in each workspace of monorepo," +
      " and strips comments from *.d.ts files.\n\n" +
      "Usage: index.js"
  )
  .help()
  .alias("h", "help").argv;
