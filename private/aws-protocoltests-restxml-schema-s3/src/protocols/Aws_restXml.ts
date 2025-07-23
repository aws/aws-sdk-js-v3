// smithy-typescript generated code
import { loadRestXmlErrorCode, parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  isSerializableHeaderValue,
  map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "../commands/DeleteObjectTaggingCommand";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "../commands/GetBucketLocationCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "../commands/GetObjectCommand";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "../commands/ListObjectsV2Command";
import { _Object, CommonPrefix, NoSuchBucket, Owner } from "../models/models_0";
import { S3ServiceException as __BaseException } from "../models/S3ServiceException";

/**
 * serializeAws_restXmlDeleteObjectTaggingCommand
 */
export const se_DeleteObjectTaggingCommand = async (
  input: DeleteObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Bucket}/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_t]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketLocationCommand
 */
export const se_GetBucketLocationCommand = async (
  input: GetBucketLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/{Bucket}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_l]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectCommand
 */
export const se_GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/{Bucket}/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListObjectsV2Command
 */
export const se_ListObjectsV2Command = async (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Bucket}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_lt]: [, "2"],
    [_d]: [, input[_D]!],
    [_et]: [, input[_ET]!],
    [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK]!.toString()],
    [_p]: [, input[_P]!],
    [_ct]: [, input[_CT]!],
    [_fo]: [() => input.FetchOwner !== void 0, () => input[_FO]!.toString()],
    [_sa]: [, input[_SA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restXmlDeleteObjectTaggingCommand
 */
export const de_DeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_VI]: [, output.headers[_xavi]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLocationCommand
 */
export const de_GetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_LC] != null) {
    contents[_LC] = __expectString(data[_LC]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectCommand
 */
export const de_GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlListObjectsV2Command
 */
export const de_ListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents[_CP] = [];
  } else if (data[_CP] != null) {
    contents[_CP] = de_CommonPrefixList(__getArrayIfSingleItem(data[_CP]), context);
  }
  if (data.Contents === "") {
    contents[_C] = [];
  } else if (data[_C] != null) {
    contents[_C] = de_ObjectList(__getArrayIfSingleItem(data[_C]), context);
  }
  if (data[_CT] != null) {
    contents[_CT] = __expectString(data[_CT]);
  }
  if (data[_D] != null) {
    contents[_D] = __expectString(data[_D]);
  }
  if (data[_ET] != null) {
    contents[_ET] = __expectString(data[_ET]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_KC] != null) {
    contents[_KC] = __strictParseInt32(data[_KC]) as number;
  }
  if (data[_MK] != null) {
    contents[_MK] = __strictParseInt32(data[_MK]) as number;
  }
  if (data[_N] != null) {
    contents[_N] = __expectString(data[_N]);
  }
  if (data[_NCT] != null) {
    contents[_NCT] = __expectString(data[_NCT]);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  if (data[_SA] != null) {
    contents[_SA] = __expectString(data[_SA]);
  }
  return contents;
};

/**
 * deserialize_Aws_restXmlCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlNoSuchBucketRes
 */
const de_NoSuchBucketRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchBucket> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlCommonPrefix
 */
const de_CommonPrefix = (output: any, context: __SerdeContext): CommonPrefix => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCommonPrefixList
 */
const de_CommonPrefixList = (output: any, context: __SerdeContext): CommonPrefix[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommonPrefix(entry, context);
    });
};

/**
 * deserializeAws_restXml_Object
 */
const de__Object = (output: any, context: __SerdeContext): _Object => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_ETa] != null) {
    contents[_ETa] = __expectString(output[_ETa]);
  }
  if (output[_S] != null) {
    contents[_S] = __strictParseInt32(output[_S]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_O] != null) {
    contents[_O] = de_Owner(output[_O], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectList
 */
const de_ObjectList = (output: any, context: __SerdeContext): _Object[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Object(entry, context);
    });
};

/**
 * deserializeAws_restXmlOwner
 */
const de_Owner = (output: any, context: __SerdeContext): Owner => {
  const contents: any = {};
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __expectString(output[_ID]);
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _C = "Contents";
const _CP = "CommonPrefixes";
const _CT = "ContinuationToken";
const _D = "Delimiter";
const _DN = "DisplayName";
const _EBO = "ExpectedBucketOwner";
const _ET = "EncodingType";
const _ETa = "ETag";
const _FO = "FetchOwner";
const _ID = "ID";
const _IT = "IsTruncated";
const _K = "Key";
const _KC = "KeyCount";
const _LC = "LocationConstraint";
const _LM = "LastModified";
const _MK = "MaxKeys";
const _N = "Name";
const _NCT = "NextContinuationToken";
const _O = "Owner";
const _P = "Prefix";
const _RP = "RequestPayer";
const _S = "Size";
const _SA = "StartAfter";
const _SC = "StorageClass";
const _VI = "VersionId";
const _ct = "continuation-token";
const _d = "delimiter";
const _et = "encoding-type";
const _fo = "fetch-owner";
const _l = "location";
const _lt = "list-type";
const _mk = "max-keys";
const _p = "prefix";
const _sa = "start-after";
const _t = "tagging";
const _vI = "versionId";
const _xaebo = "x-amz-expected-bucket-owner";
const _xarp = "x-amz-request-payer";
const _xavi = "x-amz-version-id";
