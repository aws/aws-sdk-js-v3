const _B = "Bucket";
const _C = "Contents";
const _CP = "CommonPrefix";
const _CPL = "CommonPrefixList";
const _CPo = "CommonPrefixes";
const _CT = "ContinuationToken";
const _D = "Delimiter";
const _DN = "DisplayName";
const _DOT = "DeleteObjectTagging";
const _DOTO = "DeleteObjectTaggingOutput";
const _DOTR = "DeleteObjectTaggingRequest";
const _EBO = "ExpectedBucketOwner";
const _ET = "EncodingType";
const _ETa = "ETag";
const _FO = "FetchOwner";
const _GBL = "GetBucketLocation";
const _GBLO = "GetBucketLocationOutput";
const _GBLR = "GetBucketLocationRequest";
const _GO = "GetObject";
const _GOO = "GetObjectOutput";
const _GOR = "GetObjectRequest";
const _ID = "ID";
const _IT = "IsTruncated";
const _K = "Key";
const _KC = "KeyCount";
const _LC = "LocationConstraint";
const _LM = "LastModified";
const _LOV = "ListObjectsV2";
const _LOVO = "ListObjectsV2Output";
const _LOVR = "ListObjectsV2Request";
const _MK = "MaxKeys";
const _N = "Name";
const _NCT = "NextContinuationToken";
const _NSB = "NoSuchBucket";
const _O = "Object";
const _OL = "ObjectList";
const _Ow = "Owner";
const _P = "Prefix";
const _RP = "RequestPayer";
const _S = "Size";
const _SA = "StartAfter";
const _SC = "StorageClass";
const _VI = "VersionId";
const _c = "client";
const _ct = "continuation-token";
const _d = "delimiter";
const _e = "error";
const _et = "encoding-type";
const _fo = "fetch-owner";
const _h = "http";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _mk = "max-keys";
const _p = "prefix";
const _sa = "start-after";
const _vI = "versionId";
const _xF = "xmlFlattened";
const _xN = "xmlName";
const _xaebo = "x-amz-expected-bucket-owner";
const _xarp = "x-amz-request-payer";
const _xavi = "x-amz-version-id";
const n0 = "com.amazonaws.s3";

// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NoSuchBucket as __NoSuchBucket } from "../models/index";
import { S3ServiceException as __S3ServiceException } from "../models/S3ServiceException";

/* eslint no-var: 0 */

export var CommonPrefix = struct(n0, _CP, 0, [_P], [0]);
export var DeleteObjectTaggingOutput = struct(
  n0,
  _DOTO,
  0,
  [_VI],
  [
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
  ]
);
export var DeleteObjectTaggingRequest = struct(
  n0,
  _DOTR,
  0,
  [_B, _K, _VI, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetBucketLocationOutput = struct(
  n0,
  _GBLO,
  {
    [_xN]: _LC,
  },
  [_LC],
  [0]
);
export var GetBucketLocationRequest = struct(n0, _GBLR, 0, [_B], [[0, 1]]);
export var GetObjectOutput = struct(n0, _GOO, 0, [], []);
export var GetObjectRequest = struct(
  n0,
  _GOR,
  0,
  [_B, _K],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListObjectsV2Output = struct(
  n0,
  _LOVO,
  0,
  [_IT, _C, _N, _P, _D, _MK, _CPo, _ET, _KC, _CT, _NCT, _SA],
  [
    2,
    [
      () => ObjectList,
      {
        [_xF]: 1,
      },
    ],
    0,
    0,
    0,
    1,
    [
      () => CommonPrefixList,
      {
        [_xF]: 1,
      },
    ],
    0,
    1,
    0,
    0,
    0,
  ]
);
export var ListObjectsV2Request = struct(
  n0,
  _LOVR,
  0,
  [_B, _D, _ET, _MK, _P, _CT, _FO, _SA, _RP, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _et,
      },
    ],
    [
      1,
      {
        [_hQ]: _mk,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
    [
      0,
      {
        [_hQ]: _sa,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var NoSuchBucket = error(
  n0,
  _NSB,
  {
    [_e]: _c,
  },
  [],
  [],

  __NoSuchBucket
);
export var _Object = struct(n0, _O, 0, [_K, _LM, _ETa, _S, _SC, _Ow], [0, 4, 0, 1, 0, () => Owner]);
export var Owner = struct(n0, _Ow, 0, [_DN, _ID], [0, 0]);
export var Unit = "unit" as const;

export var S3ServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.s3",
  "S3ServiceException",
  0,
  [],
  [],
  __S3ServiceException
);
export var CommonPrefixList = list(n0, _CPL, 0, () => CommonPrefix);
export var ObjectList = list(n0, _OL, 0, () => _Object);
export var DeleteObjectTagging = op(
  n0,
  _DOT,
  {
    [_h]: ["DELETE", "/{Bucket}/{Key+}?tagging", 204],
  },
  () => DeleteObjectTaggingRequest,
  () => DeleteObjectTaggingOutput
);
export var GetBucketLocation = op(
  n0,
  _GBL,
  {
    [_h]: ["GET", "/{Bucket}?location", 200],
  },
  () => GetBucketLocationRequest,
  () => GetBucketLocationOutput
);
export var GetObject = op(
  n0,
  _GO,
  {
    [_h]: ["GET", "/{Bucket}/{Key+}", 200],
  },
  () => GetObjectRequest,
  () => GetObjectOutput
);
export var ListObjectsV2 = op(
  n0,
  _LOV,
  {
    [_h]: ["GET", "/{Bucket}?list-type=2", 200],
  },
  () => ListObjectsV2Request,
  () => ListObjectsV2Output
);
