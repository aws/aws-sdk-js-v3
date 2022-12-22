const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const awsFooter = path.join(root, "scripts", "docs-custom-js", "aws-footer.js");
const docsMainScript = (() => {
  const defaultPath = path.join(root, "docs", "assets", "js", "main.js");
  const outPathIndex = process.argv.indexOf("--out") + 1;
  if (outPathIndex !== 0) {
    return path.join(process.argv[outPathIndex], "assets", "js", "main.js");
  }
  return defaultPath;
})();

if (!fs.existsSync(docsMainScript)) {
  throw new Error(`docs main script not present at ${docsMainScript}`);
}

const fileContents = fs.readFileSync(docsMainScript, "utf-8");
const awsFooterContents = fs.readFileSync(awsFooter, "utf-8");

if (fileContents.indexOf(awsFooterContents) === -1) {
  fs.writeFileSync(docsMainScript, awsFooterContents + "\n" + fileContents, "utf-8");
  console.log(`Modified docs script with AWS footer script at ${docsMainScript}.`);
} else {
  console.log("Docs main script already modified, exiting.");
}
