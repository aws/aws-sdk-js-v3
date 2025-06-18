const { spawnProcess } = require("../utils/spawn-process");

const path = require("node:path");
const fs = require("node:fs");

const root = path.join(__dirname, "..", "..");

if (fs.existsSync(path.join(root, "node_modules", "@biomejs", ""))) {
  //
}
