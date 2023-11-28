const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");

const s3ModelLocation = path.join(root, "codegen", "sdk-codegen", "aws-models", "s3.json");

const s3ModelText = fs.readFileSync(path.join(root, "codegen", "sdk-codegen", "aws-models", "s3.json"), "utf-8");
const s3ModelObject = require(s3ModelLocation);

/**
 * Activates a hack for S3-express Smithy suppression.
 * @returns a function that undoes the hack.
 */
module.exports = function () {
  s3ModelObject.metadata.suppressions = s3ModelObject.metadata.suppressions.filter((suppression) => {
    return suppression.id !== "RuleSetAuthSchemes";
  });
  s3ModelObject.metadata.suppressions.push({
    id: "RuleSetAuthSchemes",
    namespace: "com.amazonaws.s3",
  });

  fs.writeFileSync(s3ModelLocation, JSON.stringify(s3ModelObject, null, 2));

  return () => {
    fs.writeFileSync(s3ModelLocation, s3ModelText);
  };
};
