const matcher = require("./matcher");
const matchSorter = require("./matchSorter");

/**
 * @param scripts {string[]} - scripts entry from a package.json file.
 * @param query {string} - query for the script names.
 * @returns the scripts matching the args.
 */
module.exports = function findScripts(scripts, ...query) {
  const matches = [];
  for (const script of scripts) {
    const isMatch = matcher(script, ...query);
    if (isMatch) {
      matches.push(script);
    }
  }
  return matchSorter(matches, ...query);
};
