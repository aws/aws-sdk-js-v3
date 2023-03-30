const { S3 } = require("@aws-sdk/client-s3");

(async () => {
  return new S3({}).listBuckets({});
})()
  .then(console.log)
  .catch(console.error);
