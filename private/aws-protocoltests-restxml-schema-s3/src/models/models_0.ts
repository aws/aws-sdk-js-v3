// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * @public
 */
export interface DeleteObjectTaggingOutput {
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectTaggingRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string | undefined;
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BucketLocationConstraint = {
  us_west_2: "us-west-2",
} as const;
/**
 * @public
 */
export type BucketLocationConstraint = (typeof BucketLocationConstraint)[keyof typeof BucketLocationConstraint];

/**
 * @public
 */
export interface GetBucketLocationOutput {
  LocationConstraint?: BucketLocationConstraint | undefined;
}

/**
 * @public
 */
export interface GetBucketLocationRequest {
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetObjectOutput {}

/**
 * @public
 */
export interface GetObjectRequest {
  Bucket: string | undefined;
  Key: string | undefined;
}

/**
 * @public
 */
export interface CommonPrefix {
  Prefix?: string | undefined;
}

/**
 * @public
 */
export interface Owner {
  DisplayName?: string | undefined;
  ID?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ObjectStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;
/**
 * @public
 */
export type ObjectStorageClass = (typeof ObjectStorageClass)[keyof typeof ObjectStorageClass];

/**
 * @public
 */
export interface _Object {
  Key?: string | undefined;
  LastModified?: Date | undefined;
  ETag?: string | undefined;
  Size?: number | undefined;
  StorageClass?: ObjectStorageClass | undefined;
  Owner?: Owner | undefined;
}

/**
 * @public
 * @enum
 */
export const EncodingType = {
  url: "url",
} as const;
/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 */
export interface ListObjectsV2Output {
  IsTruncated?: boolean | undefined;
  Contents?: _Object[] | undefined;
  Name?: string | undefined;
  Prefix?: string | undefined;
  Delimiter?: string | undefined;
  MaxKeys?: number | undefined;
  CommonPrefixes?: CommonPrefix[] | undefined;
  EncodingType?: EncodingType | undefined;
  KeyCount?: number | undefined;
  ContinuationToken?: string | undefined;
  NextContinuationToken?: string | undefined;
  StartAfter?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RequestPayer = {
  requester: "requester",
} as const;
/**
 * @public
 */
export type RequestPayer = (typeof RequestPayer)[keyof typeof RequestPayer];

/**
 * @public
 */
export interface ListObjectsV2Request {
  Bucket: string | undefined;
  Delimiter?: string | undefined;
  EncodingType?: EncodingType | undefined;
  MaxKeys?: number | undefined;
  Prefix?: string | undefined;
  ContinuationToken?: string | undefined;
  FetchOwner?: boolean | undefined;
  StartAfter?: string | undefined;
  RequestPayer?: RequestPayer | undefined;
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export class NoSuchBucket extends __BaseException {
  readonly name: "NoSuchBucket" = "NoSuchBucket";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchBucket, __BaseException>) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchBucket.prototype);
  }
}
