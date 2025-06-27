const fs = require("node:fs");
const path = require("node:path");

/**
 * @param dir - directory.
 * @param basenameOnly - if true, return only the basename of the subdirectories
 * @returns {string[]} list of full-paths of subdirectories (not files) in the given directory.
 */
function listFolders(dir, basenameOnly = true) {
  const folders = [];
  for (const fileSystemEntry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (fileSystemEntry.isDirectory()) {
      if (basenameOnly) {
        folders.push(fileSystemEntry.name);
      } else {
        folders.push(path.join(dir, fileSystemEntry.name));
      }
    }
  }
  return folders;
}

module.exports = {
  listFolders,
};
