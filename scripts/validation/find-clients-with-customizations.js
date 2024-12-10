/**
 *
 * This script generates an ignore pattern for clients that don't have any unique
 * customizations.
 *
 */

const path = require("path");
const fs = require("fs");

const clients = fs.readdirSync(path.join(__dirname, "..", "..", "clients"));

const keep = [
  "api-gateway",
  "apigatewayv2",
  "cloudfront-keyvaluestore",
  "cognito-identity",
  "dynamodb",
  "ec2",
  "glacier",
  "iam",
  "kinesis",
  "kms",
  "lambda",
  "machine-learning",
  "rds",
  "route-53",
  "s3",
  "s3-control",
  "sagemaker",
  "sqs",
  "sts",
  "transcribe-streaming",
];

const commonPackages = {
  "@aws-crypto/sha256-browser": "",
  "@aws-crypto/sha256-js": "",
  "@aws-sdk/client-sso-oidc": "",
  "@aws-sdk/client-sts": "",
  "@aws-sdk/core": "",
  "@aws-sdk/credential-provider-node": "",
  "@aws-sdk/middleware-host-header": "",
  "@aws-sdk/middleware-logger": "",
  "@aws-sdk/middleware-recursion-detection": "",
  "@aws-sdk/middleware-user-agent": "",
  "@aws-sdk/region-config-resolver": "",
  "@aws-sdk/types": "",
  "@aws-sdk/util-endpoints": "",
  "@aws-sdk/util-user-agent-browser": "",
  "@aws-sdk/util-user-agent-node": "",
  "@smithy/config-resolver": "",
  "@smithy/core": "",
  "@smithy/fetch-http-handler": "",
  "@smithy/hash-node": "",
  "@smithy/invalid-dependency": "",
  "@smithy/middleware-content-length": "",
  "@smithy/middleware-endpoint": "",
  "@smithy/middleware-retry": "",
  "@smithy/middleware-serde": "",
  "@smithy/middleware-stack": "",
  "@smithy/node-config-provider": "",
  "@smithy/node-http-handler": "",
  "@smithy/protocol-http": "",
  "@smithy/smithy-client": "",
  "@smithy/types": "",
  "@smithy/url-parser": "",
  "@smithy/util-base64": "",
  "@smithy/util-body-length-browser": "",
  "@smithy/util-body-length-node": "",
  "@smithy/util-defaults-mode-browser": "",
  "@smithy/util-defaults-mode-node": "",
  "@smithy/util-endpoints": "",
  "@smithy/util-middleware": "",
  "@smithy/util-retry": "",
  "@smithy/util-utf8": "",
  "@types/uuid": "",
  tslib: "",
  uuid: "",
  "@smithy/util-waiter": "",
  "@smithy/util-stream": "",
  "@aws-sdk/xml-builder": "",
  "@smithy/eventstream-serde-browser": "",
  "@smithy/eventstream-serde-config-resolver": "",
  "@smithy/eventstream-serde-node": "",
};

let ignore = [];

for (const client of clients) {
  const pkgJson = require(path.join(__dirname, "..", "..", "clients", client, "package.json"));
  const shortName = pkgJson.name.split("@aws-sdk/client-")[1];

  let interesting = false;

  for (const dep in pkgJson.dependencies) {
    if (!(dep in commonPackages)) {
      interesting = true;
    }
  }

  if (pkgJson.scripts.test || pkgJson.scripts["test:integration"] || pkgJson.scripts["test:e2e"]) {
    interesting = true;
  }

  if (interesting && !keep.includes(shortName)) {
    keep.push(shortName);
  } else if (!keep.includes(shortName)) {
    ignore.push(shortName);
  }
}

console.log("keep:", keep);
console.log("ignore:");
console.log(`**/client-{${ignore.join(",")}}`);
