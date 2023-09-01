// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
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
import { XMLParser } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "../commands/DeleteObjectTaggingCommand";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "../commands/GetBucketLocationCommand";
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Bucket}/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    tagging: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketLocationCommand
 */
export const se_GetBucketLocationCommand = async (
  input: GetBucketLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Bucket}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    location: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListObjectsV2Command
 */
export const se_ListObjectsV2Command = async (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Bucket}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "list-type": [, "2"],
    delimiter: [, input.Delimiter!],
    "encoding-type": [, input.EncodingType!],
    "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys!.toString()],
    prefix: [, input.Prefix!],
    "continuation-token": [, input.ContinuationToken!],
    "fetch-owner": [() => input.FetchOwner !== void 0, () => input.FetchOwner!.toString()],
    "start-after": [, input.StartAfter!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restXmlDeleteObjectTaggingCommand
 */
export const de_DeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectTaggingCommandError
 */
const de_DeleteObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketLocationCommand
 */
export const de_GetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["LocationConstraint"] !== undefined) {
    contents.LocationConstraint = __expectString(data["LocationConstraint"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLocationCommandError
 */
const de_GetBucketLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListObjectsV2Command
 */
export const de_ListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectsV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = de_CommonPrefixList(__getArrayIfSingleItem(data["CommonPrefixes"]), context);
  }
  if (data.Contents === "") {
    contents.Contents = [];
  } else if (data["Contents"] !== undefined) {
    contents.Contents = de_ObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = __expectString(data["ContinuationToken"]);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(data["Delimiter"]);
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = __expectString(data["EncodingType"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["KeyCount"] !== undefined) {
    contents.KeyCount = __strictParseInt32(data["KeyCount"]) as number;
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = __strictParseInt32(data["MaxKeys"]) as number;
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = __expectString(data["Prefix"]);
  }
  if (data["StartAfter"] !== undefined) {
    contents.StartAfter = __expectString(data["StartAfter"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectsV2CommandError
 */
const de_ListObjectsV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
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
      });
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
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
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
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseInt32(output["Size"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = de_Owner(output["Owner"], context);
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
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data?.Code !== undefined) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
