/**
 *
 * Sets a \@ts-nocheck comment in the dist-types folder if present in the source file.
 *
 */

const fs = require("fs");
const path = require("path");
const walk = require("../utils/walk");

const root = path.join(__dirname, "..", "..");

const pkg = process.argv[2];

if (pkg) {
  const packageRoot = path.join(root, "packages", pkg);

  (async () => {
    for await (const f of walk(path.join(packageRoot, "src"))) {
      const sourceFileContents = fs.readFileSync(f, "utf-8");
      if (sourceFileContents.includes("// @ts-nocheck")) {
        const distFile = f.replace("/src/", "/dist-types/").replace(/\.ts$/, ".d.ts");
        const distFileContents = fs.readFileSync(distFile);
        if (!distFileContents.includes("@ts-nocheck")) {
          fs.writeFileSync(distFile, `// @ts-nocheck` + "\n" + distFileContents);
        }
        console.log("Set @ts-nocheck in", distFile);
      }
    }
  })();
}
