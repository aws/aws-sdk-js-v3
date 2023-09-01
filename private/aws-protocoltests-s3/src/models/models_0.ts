// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * @public
 */
export interface DeleteObjectTaggingOutput {
  VersionId?: string;
}

/**
 * @public
 */
export interface DeleteObjectTaggingRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  ExpectedBucketOwner?: string;
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
  LocationConstraint?: BucketLocationConstraint | string;
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
export interface CommonPrefix {
  Prefix?: string;
}

/**
 * @public
 */
export interface Owner {
  DisplayName?: string;
  ID?: string;
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
  Key?: string;
  LastModified?: Date;
  ETag?: string;
  Size?: number;
  StorageClass?: ObjectStorageClass | string;
  Owner?: Owner;
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
  IsTruncated?: boolean;
  Contents?: _Object[];
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: CommonPrefix[];
  EncodingType?: EncodingType | string;
  KeyCount?: number;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  StartAfter?: string;
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
  Delimiter?: string;
  EncodingType?: EncodingType | string;
  MaxKeys?: number;
  Prefix?: string;
  ContinuationToken?: string;
  FetchOwner?: boolean;
  StartAfter?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
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
