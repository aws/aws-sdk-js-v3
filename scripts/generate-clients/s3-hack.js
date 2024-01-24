const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");

const s3ModelLocation = path.join(root, "codegen", "sdk-codegen", "aws-models", "s3.json");

const s3ModelText = fs.readFileSync(path.join(root, "codegen", "sdk-codegen", "aws-models", "s3.json"), "utf-8");
const s3ModelObject = require(s3ModelLocation);

/**
 * Activates a hack for S3-express Smithy suppression.
 * And another one for S3 Expires.
 *
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

  const expiresShape = s3ModelObject.shapes["com.amazonaws.s3#Expires"];
  if (expiresShape) {
    // enforce that Expires retains type timestamp.
    expiresShape.type = "timestamp";

    // add the ExpiresString string shape.
    const newShapes = {};
    for (const [shapeId, shape] of Object.entries(s3ModelObject.shapes)) {
      newShapes[shapeId] = shape;
      if (shapeId === "com.amazonaws.s3#Expires") {
        newShapes["com.amazonaws.s3#ExpiresString"] = {
          type: "string",
        };
      }
    }
    s3ModelObject.shapes = newShapes;

    // add ExpiresString alongside output shapes containing Expires.
    for (const [shapeId, shape] of Object.entries(s3ModelObject.shapes)) {
      if (shape?.traits?.["smithy.api#output"]) {
        const newMembers = {};
        for (const [memberName, member] of Object.entries(shape.members)) {
          newMembers[memberName] = member;
          if (member.target === "com.amazonaws.s3#Expires") {
            const existingDoc = member.traits["smithy.api#documentation"];
            if (!member.traits) {
              member.traits = {};
            }

            newMembers.ExpiresString = {
              target: "com.amazonaws.s3#ExpiresString",
              traits: {
                ...member.traits,
                "smithy.api#httpHeader": "ExpiresString",
                "smithy.api#documentation": existingDoc,
              },
            };

            member.traits["smithy.api#deprecated"] = {};
            member.traits["smithy.api#documentation"] = "Deprecated in favor of ExpiresString.";
          }
        }
        shape.members = newMembers;
      }
    }
  }

  fs.writeFileSync(s3ModelLocation, JSON.stringify(s3ModelObject, null, 2));

  return () => {
    fs.writeFileSync(s3ModelLocation, s3ModelText);
  };
};
