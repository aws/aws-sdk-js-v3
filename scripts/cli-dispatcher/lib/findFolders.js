const matcher = require("./matcher");
const matchSorter = require("./matchSorter");

/**
 * @param allPackages {Package[]} - list of all packages.
 * @param query {string} - query for the package list.
 * @returns the folders matching the args.
 */
module.exports = function findFolders(allPackages, ...query) {
  const folders = [];
  for (const pkg of allPackages) {
    const { name } = pkg;
    const isMatch = matcher(name, ...query);
    if (isMatch) {
      folders.push(pkg);
    }
  }
  return matchSorter(folders, ...query);
};
