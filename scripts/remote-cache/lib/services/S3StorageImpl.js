const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  HeadBucketCommand,
  CreateBucketCommand,
} = require("@aws-sdk/client-s3");
const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts");
const { ensureDirSync, writeFileSync, readFileSync } = require("fs-extra");
const { join } = require("path");

const fsTempFolder = join(__dirname, "..", "..", "tmp");

module.exports = class S3StorageImpl {
  static instance = new S3StorageImpl({});

  constructor() {
    ensureDirSync(fsTempFolder);
    this.s3 = new S3Client({});
    this.sts = new STSClient({});

    this.ready = this.sts.send(new GetCallerIdentityCommand({})).then((getCallerIdentityResponse) => {
      if (!getCallerIdentityResponse?.Account) {
        throw new Error("Missing account.");
      }
      this.bucket = `aws-sdk-js-turborepo-remote-cache-${getCallerIdentityResponse.Account}`;
      this.s3
        .send(
          new HeadBucketCommand({
            Bucket: this.bucket,
          })
        )
        .catch(() => {
          return this.s3.send(
            new CreateBucketCommand({
              Bucket: this.bucket,
            })
          );
        })
        .catch(() => {});
    });
  }

  async write(hash, body) {
    await this.ready;
    await this.s3
      .send(
        new PutObjectCommand({
          Bucket: this.bucket,
          Key: hash,
          Body: body,
        })
      )
      .catch((err) => {
        writeFileSync(join(fsTempFolder, hash), body);
      });
  }

  async read(hash) {
    await this.ready;
    try {
      const get = await this.s3.send(
        new GetObjectCommand({
          Bucket: this.bucket,
          Key: hash,
        })
      );
    } catch (e) {
      return readFileSync(join(fsTempFolder, hash));
    }
    return get.Body;
  }
};
