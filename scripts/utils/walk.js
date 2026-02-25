const fs = require("node:fs");
const path = require("node:path");

module.exports = async function* walk(dir, ignore = []) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (ignore.find((ignored) => entry.includes(ignored))) {
      continue;
    }
    if (d.isDirectory()) {
      yield* walk(entry, ignore);
    } else if (d.isFile()) {
      yield entry;
    }
  }
};
