const { readdirSync, lstatSync } = require("fs");
const Glob = require("glob");
const { join } = require("path");

/**
 * @returns {string[]}
 */
const getModelFilepaths = (models) => {
  if (typeof models === "string") {
    //`models` is a folder path
    console.log(`preparing models from ${models}...`);
    return readdirSync(models)
      .map((modelFileName) => join(models, modelFileName))
      .filter((modelFilepath) => lstatSync(modelFilepath).isFile());
  } else if (Array.isArray(models)) {
    //`models` is a list of globs
    console.log(`preparing models from ${models}...`);
    return models
      .map((pattern) =>
        Glob.sync(pattern, {
          realpath: true,
          absolute: true,
        })
      )
      .flat()
      .filter((modelFilepath) => lstatSync(modelFilepath).isFile());
  }
};

module.exports = { getModelFilepaths };
