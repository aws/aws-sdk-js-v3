const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts");

module.exports = class S3ServiceClient {
  static instance = new S3ServiceClient({});

  constructor() {
    this.s3 = new S3Client({});
    this.sts = new STSClient({});

    this.ready = this.sts.send(new GetCallerIdentityCommand({})).then((getCallerIdentityResponse) => {
      if (!getCallerIdentityResponse?.Account) {
        throw new Error("Missing account.");
      }
      this.bucket = `aws-sdk-js-turborepo-remote-cache-${getCallerIdentityResponse.Account}`;
    });
  }

  async write(hash, body) {
    await this.ready;
    lib;
    await this.s3.send(new PutObjectCommand({}));
  }

  async read(hash) {}
};
