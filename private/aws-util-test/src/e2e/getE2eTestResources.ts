import { STS } from "@aws-sdk/client-sts";
import { paginateListMultiRegionAccessPoints, S3Control } from "@aws-sdk/client-s3-control";
import { CognitoIdentity, paginateListIdentityPools } from "@aws-sdk/client-cognito-identity";
import { paginateListBuckets, S3 } from "@aws-sdk/client-s3";

const region = "us-west-2";

const s3 = new S3({ region });
const s3Control = new S3Control({ region });
const sts = new STS({ region });
const cognito = new CognitoIdentity({
  region,
});

let identityPoolId: string = "";
let bucketName: string = "";
let mrapAlias = "";

/**
 * @returns cacheable idPool, Bucket, and MRAP used in e2e tests without calling changesets API from cloudformation.
 */
export async function getE2eTestResources() {
  const caller = await sts.getCallerIdentity();

  if (!identityPoolId) {
    for await (const page of paginateListIdentityPools(
      { client: cognito },
      {
        MaxResults: 60,
      }
    )) {
      for (const pool of page.IdentityPools ?? []) {
        if (pool.IdentityPoolName === "IntegTestIdentityPool") {
          identityPoolId = pool.IdentityPoolId!;
          break;
        }
      }
      if (identityPoolId) {
        break;
      }
    }
  }

  if (!identityPoolId) {
    throw new Error("Could not find identity pool id");
  }

  if (!bucketName) {
    for await (const page of paginateListBuckets(
      { client: s3 },
      {
        Prefix: "sdkreleasev3integtest",
        BucketRegion: region,
      }
    )) {
      for (const bucket of page.Buckets ?? []) {
        if (bucket.Name?.includes("v3integtest")) {
          const bucketMetadata = await s3
            .getBucketTagging({
              Bucket: bucket.Name,
            })
            .catch((e) => {
              if (e.name === "NoSuchTagSet") {
                return {
                  TagSet: [],
                };
              }
              throw e;
            });

          if (
            (bucketMetadata.TagSet ?? []).find(
              (tag) => tag.Key === "aws:cloudformation:logical-id" && tag.Value?.includes("IntegTestBucket")
            )
          ) {
            bucketName = bucket.Name;
            break;
          }
        }
      }
      if (bucketName) {
        break;
      }
    }
  }
  if (!bucketName) {
    throw new Error("Could not find e2e test bucket.");
  }

  if (!mrapAlias) {
    for await (const page of paginateListMultiRegionAccessPoints(
      { client: s3Control },
      { AccountId: caller.Account }
    )) {
      for (const mrap of page.AccessPoints ?? []) {
        if (mrap.Name?.includes("v3-sdk-integration-test")) {
          mrapAlias = mrap.Alias!;
          break;
        }
      }
      if (mrapAlias) {
        break;
      }
    }
  }
  if (!mrapAlias) {
    throw new Error("Could not find MRAP.");
  }

  await s3.putBucketCors({
    Bucket: bucketName,
    CORSConfiguration: {
      CORSRules: [
        {
          AllowedOrigins: ["*"],
          AllowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
          AllowedHeaders: ["*"],
          ExposeHeaders: ["ETag"],
        },
      ],
    },
  });

  return {
    AWS_SMOKE_TEST_REGION: region,
    AWS_SMOKE_TEST_IDENTITY_POOL_ID: identityPoolId,
    AWS_SMOKE_TEST_BUCKET: bucketName,
    AWS_SMOKE_TEST_MRAP_ARN: `arn:aws:s3::${caller.Account}:accesspoint/${mrapAlias}`,
  };
}
