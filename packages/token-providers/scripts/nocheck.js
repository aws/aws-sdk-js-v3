const fs = require("fs");
const path = require("path");

let root = path.join(__dirname, "..");
try {
  addNoCheck();
} catch (e) {
  // potential ENAMETOOLONG error in CI, we then use the package relative root.
  root = "";
  addNoCheck();
}

function addNoCheck() {
  const browserFile = path.join(root, "dist-types", "bundle", "client-sso-oidc-browser.d.ts");
  const nodeFile = path.join(root, "dist-types", "bundle", "client-sso-oidc-node.d.ts");

  const noCheck = "// @ts-nocheck\n";

  for (const file of [browserFile, nodeFile]) {
    if (fs.existsSync(file)) {
      const contents = fs.readFileSync(file, "utf-8");
      if (!contents.startsWith(noCheck)) {
        fs.writeFileSync(noCheck + contents, "utf-8");
        console.info("Rewriting", file, "with ts-nocheck.");
      } else {
        console.info("No-op: ", file, "already starts with ts-nocheck.");
      }
    } else {
      throw new Error("File not found: " + file);
    }
  }
}
