const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const awsFooter = path.join(root, "scripts", "docs-custom-js", "aws-footer.js");
const docsMainScript = path.join(root, "docs", "assets", "js", "main.js");

if (!fs.existsSync(docsMainScript)) {
  throw new Error(`docs main script not present at ${docsMainScript}`);
}

const fileContents = fs.readFileSync(docsMainScript, "utf-8");
const awsFooterContents = fs.readFileSync(awsFooter, "utf-8");

if (fileContents.indexOf(awsFooterContents) === -1) {
  fs.writeFileSync(docsMainScript, awsFooterContents + "\n" + fileContents, "utf-8");
  console.log("Modified docs script with AWS footer script.");
} else {
  console.log("Docs main script already modified, exiting.");
}
