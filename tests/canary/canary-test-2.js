const { STS } = require("@aws-sdk/client-sts");
const { S3 } = require("@aws-sdk/client-s3");
const { Lambda } = require("@aws-sdk/client-lambda");

/**
 * This test checks that a simple request to S3 (XML) and Lambda (JSON)
 * work correctly.
 */

(async () => {
  const id = await new STS().getCallerIdentity().catch((e) => {
    console.error("Failed STS::getCallerIdentity");
    throw e;
  });
  console.log("STS::getCallerIdentity", id.$metadata.httpStatusCode);

  const buckets = await new S3().listBuckets().catch((e) => {
    console.error("Failed S3::listBuckets");
    throw e;
  });
  console.log("S3::listBuckets", buckets.$metadata.httpStatusCode);

  const functions = await new Lambda().listFunctions().catch((e) => {
    console.error("Failed Lambda::listFunctions");
    throw e;
  });
  console.log("Lambda::listFunctions", functions.$metadata.httpStatusCode);
})();
