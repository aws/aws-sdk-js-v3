const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const source = fs.readFileSync(path.join(root, "clients", "client-s3", "src", "xml-parser.ts"), "utf-8");

const changeSet = ["client-lex-runtime-service", "client-lex-runtime-v2", "client-location", "client-pinpoint"];

for (const dir of fs.readdirSync(path.join(root, "clients"))) {
  try {
    const pkg = require(path.join(root, "clients", dir, "package.json"));
    if (pkg.dependencies["fast-xml-parser"]) {
      pkg.version = "3.186.1";
      if ("@aws-sdk/client-sts" in pkg.dependencies) {
        pkg.dependencies["@aws-sdk/client-sts"] = "3.186.1";
      }
      fs.writeFileSync(path.join(root, "clients", dir, "package.json"), JSON.stringify(pkg, null, 2), "utf-8");
      fs.writeFileSync(path.join(root, "clients", dir, "src", "xml-parser.ts"), source, "utf-8");
    }
    if (changeSet.find((c) => pkg.name.endsWith(c))) {
      pkg.version = "3.186.1";
      if ("@aws-sdk/client-sts" in pkg.dependencies) {
        pkg.dependencies["@aws-sdk/client-sts"] = "3.186.1";
      }
      fs.writeFileSync(path.join(root, "clients", dir, "package.json"), JSON.stringify(pkg, null, 2), "utf-8");
    }
  } catch (e) {}
}
