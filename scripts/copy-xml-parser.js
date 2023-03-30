const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const source = fs.readFileSync(path.join(root, "clients", "client-s3", "xml-parser.ts"), "utf-8");

for (const dir of fs.readdirSync(path.join(root, "clients"))) {
  try {
    const pkg = require(path.join(root, "clients", dir, "package.json"));
    if (pkg.dependencies["fast-xml-parser"]) {
      if (dir === 'client-s3') {
        pkg.version = "3.6.2";
      } else {
        pkg.version = "3.6.1";
      }
      fs.writeFileSync(path.join(root, "clients", dir, "package.json"), JSON.stringify(pkg, null, 2), "utf-8");
      fs.writeFileSync(path.join(root, "clients", dir, "xml-parser.ts"), source, "utf-8");
    }
  } catch (e) {}
}
