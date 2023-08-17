// smithy-typescript generated code
import {
  acceptMatches as __acceptMatches,
  NotAcceptableException as __NotAcceptableException,
  SerializationException as __SerializationException,
  ServerSerdeContext,
  ServiceException as __BaseException,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnsupportedMediaTypeException as __UnsupportedMediaTypeException,
} from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  expectBoolean as __expectBoolean,
  expectByte as __expectByte,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectShort as __expectShort,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  take,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-node";

import {
  EnumString,
  EnumUnion,
  FooEnum,
  FooUnion,
  GreetingStruct,
  IntegerEnum,
  MissingKeyStructure,
  PatternUnion,
  PatternUnionOverride,
  RecursiveUnionOne,
  RecursiveUnionTwo,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { MalformedEnumServerInput, MalformedEnumServerOutput } from "../server/operations/MalformedEnum";
import { MalformedLengthServerInput, MalformedLengthServerOutput } from "../server/operations/MalformedLength";
import {
  MalformedLengthOverrideServerInput,
  MalformedLengthOverrideServerOutput,
} from "../server/operations/MalformedLengthOverride";
import {
  MalformedLengthQueryStringServerInput,
  MalformedLengthQueryStringServerOutput,
} from "../server/operations/MalformedLengthQueryString";
import { MalformedPatternServerInput, MalformedPatternServerOutput } from "../server/operations/MalformedPattern";
import {
  MalformedPatternOverrideServerInput,
  MalformedPatternOverrideServerOutput,
} from "../server/operations/MalformedPatternOverride";
import { MalformedRangeServerInput, MalformedRangeServerOutput } from "../server/operations/MalformedRange";
import {
  MalformedRangeOverrideServerInput,
  MalformedRangeOverrideServerOutput,
} from "../server/operations/MalformedRangeOverride";
import { MalformedRequiredServerInput, MalformedRequiredServerOutput } from "../server/operations/MalformedRequired";
import {
  MalformedUniqueItemsServerInput,
  MalformedUniqueItemsServerOutput,
} from "../server/operations/MalformedUniqueItems";
import {
  RecursiveStructuresServerInput,
  RecursiveStructuresServerOutput,
} from "../server/operations/RecursiveStructures";
import {
  SensitiveValidationServerInput,
  SensitiveValidationServerOutput,
} from "../server/operations/SensitiveValidation";

export const deserializeMalformedEnumRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedEnumServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    list: (_) => de_EnumList(_, context),
    map: (_) => de_EnumMap(_, context),
    string: __expectString,
    stringWithEnumTrait: __expectString,
    union: (_) => de_EnumUnion(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedLengthRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLengthServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blob: context.base64Decoder,
    list: (_) => de_LengthList(_, context),
    map: (_) => de_LengthMap(_, context),
    maxString: __expectString,
    minString: __expectString,
    string: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedLengthOverrideRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLengthOverrideServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blob: context.base64Decoder,
    list: (_) => de_LengthList(_, context),
    map: (_) => de_LengthMap(_, context),
    maxString: __expectString,
    minString: __expectString,
    string: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedLengthQueryStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLengthQueryStringServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const query = output.query;
  if (query != null) {
    if (query["string"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["string"])) {
        if (query["string"].length === 1) {
          queryValue = query["string"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["string"] as string;
      }
      contents.string = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedPatternRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedPatternServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evilString: __expectString,
    list: (_) => de_PatternList(_, context),
    map: (_) => de_PatternMap(_, context),
    string: __expectString,
    union: (_) => de_PatternUnion(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedPatternOverrideRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedPatternOverrideServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    list: (_) => de_PatternListOverride(_, context),
    map: (_) => de_PatternMapOverride(_, context),
    string: __expectString,
    union: (_) => de_PatternUnionOverride(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedRangeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRangeServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    byte: __expectByte,
    float: __limitedParseFloat32,
    integer: __expectInt32,
    long: __expectLong,
    maxByte: __expectByte,
    maxFloat: __limitedParseFloat32,
    maxInteger: __expectInt32,
    maxLong: __expectLong,
    maxShort: __expectShort,
    minByte: __expectByte,
    minFloat: __limitedParseFloat32,
    minInteger: __expectInt32,
    minLong: __expectLong,
    minShort: __expectShort,
    short: __expectShort,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedRangeOverrideRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRangeOverrideServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    byte: __expectByte,
    float: __limitedParseFloat32,
    integer: __expectInt32,
    long: __expectLong,
    maxByte: __expectByte,
    maxFloat: __limitedParseFloat32,
    maxInteger: __expectInt32,
    maxLong: __expectLong,
    maxShort: __expectShort,
    minByte: __expectByte,
    minFloat: __limitedParseFloat32,
    minInteger: __expectInt32,
    minLong: __expectLong,
    minShort: __expectShort,
    short: __expectShort,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedRequiredRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRequiredServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({
    stringInHeader: [, output.headers["string-in-headers"]],
  });
  const query = output.query;
  if (query != null) {
    if (query["stringInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["stringInQuery"])) {
        if (query["stringInQuery"].length === 1) {
          queryValue = query["stringInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["stringInQuery"] as string;
      }
      contents.stringInQuery = queryValue;
    }
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    string: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedUniqueItemsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedUniqueItemsServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blobList: (_) => de_BlobSet(_, context),
    booleanList: (_) => de_BooleanSet(_, context),
    byteList: (_) => de_ByteSet(_, context),
    dateTimeList: (_) => de_DateTimeSet(_, context),
    enumList: (_) => de_FooEnumSet(_, context),
    httpDateList: (_) => de_HttpDateSet(_, context),
    intEnumList: (_) => de_IntegerEnumSet(_, context),
    integerList: (_) => de_IntegerSet(_, context),
    listList: (_) => de_ListSet(_, context),
    longList: (_) => de_LongSet(_, context),
    shortList: (_) => de_ShortSet(_, context),
    stringList: (_) => de_StringSet(_, context),
    structureList: (_) => de_StructureSet(_, context),
    structureListWithNoKey: (_) => de_StructureSetWithNoKey(_, context),
    timestampList: (_) => de_TimestampSet(_, context),
    unionList: (_) => de_UnionSet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeRecursiveStructuresRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<RecursiveStructuresServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    union: (_) => de_RecursiveUnionOne(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeSensitiveValidationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SensitiveValidationServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    string: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const serializeMalformedEnumResponse = async (
  input: MalformedEnumServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedLengthResponse = async (
  input: MalformedLengthServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedLengthOverrideResponse = async (
  input: MalformedLengthOverrideServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedLengthQueryStringResponse = async (
  input: MalformedLengthQueryStringServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedPatternResponse = async (
  input: MalformedPatternServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedPatternOverrideResponse = async (
  input: MalformedPatternOverrideServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedRangeResponse = async (
  input: MalformedRangeServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedRangeOverrideResponse = async (
  input: MalformedRangeOverrideServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedRequiredResponse = async (
  input: MalformedRequiredServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMalformedUniqueItemsResponse = async (
  input: MalformedUniqueItemsServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeRecursiveStructuresResponse = async (
  input: RecursiveStructuresServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeSensitiveValidationResponse = async (
  input: SensitiveValidationServerOutput,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {});
  let body: any;
  if (
    body &&
    Object.keys(headers)
      .map((str) => str.toLowerCase())
      .indexOf("content-length") === -1
  ) {
    const length = calculateBodyLength(body);
    if (length !== undefined) {
      headers = { ...headers, "content-length": String(length) };
    }
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeFrameworkException = async (
  input: __SmithyFrameworkException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  switch (input.name) {
    case "InternalFailure": {
      const statusCode = 500;
      const headers: any = map({}, isSerializableHeaderValue, {
        "x-amzn-errortype": "InternalFailure",
        "content-type": "application/json",
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "NotAcceptableException": {
      const statusCode = 406;
      const headers: any = map({}, isSerializableHeaderValue, {
        "x-amzn-errortype": "NotAcceptableException",
        "content-type": "application/json",
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "SerializationException": {
      const statusCode = 400;
      const headers: any = map({}, isSerializableHeaderValue, {
        "x-amzn-errortype": "SerializationException",
        "content-type": "application/json",
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "UnknownOperationException": {
      const statusCode = 404;
      const headers: any = map({}, isSerializableHeaderValue, {
        "x-amzn-errortype": "UnknownOperationException",
        "content-type": "application/json",
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
    case "UnsupportedMediaTypeException": {
      const statusCode = 415;
      const headers: any = map({}, isSerializableHeaderValue, {
        "x-amzn-errortype": "UnsupportedMediaTypeException",
        "content-type": "application/json",
      });
      let body: any;
      body = "{}";
      return new __HttpResponse({
        headers,
        body,
        statusCode,
      });
    }
  }
};

export const serializeValidationExceptionError = async (
  input: ValidationException,
  ctx: ServerSerdeContext
): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode = 400;
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-errortype": "ValidationException",
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      fieldList: (_) => se_ValidationExceptionFieldList(_, context),
      message: [],
    })
  );
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

/**
 * serializeAws_restJson1ValidationExceptionField
 */
const se_ValidationExceptionField = (input: ValidationExceptionField, context: __SerdeContext): any => {
  return take(input, {
    message: [],
    path: [],
  });
};

/**
 * serializeAws_restJson1ValidationExceptionFieldList
 */
const se_ValidationExceptionFieldList = (input: ValidationExceptionField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ValidationExceptionField(entry, context);
    });
};

/**
 * deserializeAws_restJson1EnumList
 */
const de_EnumList = (output: any, context: __SerdeContext): (EnumString | string)[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson.validation#EnumList" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1EnumMap
 */
const de_EnumMap = (output: any, context: __SerdeContext): Record<string, EnumString | string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, EnumString | string>, [key, value]: [EnumString | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1EnumUnion
 */
const de_EnumUnion = (output: any, context: __SerdeContext): EnumUnion => {
  if (__expectString(output.first) !== undefined) {
    return { first: __expectString(output.first) as any };
  }
  if (__expectString(output.second) !== undefined) {
    return { second: __expectString(output.second) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1LengthList
 */
const de_LengthList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson.validation#LengthList" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1LengthMap
 */
const de_LengthMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_LengthList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MissingKeyStructure
 */
const de_MissingKeyStructure = (output: any, context: __SerdeContext): MissingKeyStructure => {
  return take(output, {
    hi: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PatternList
 */
const de_PatternList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson.validation#PatternList" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1PatternListOverride
 */
const de_PatternListOverride = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson.validation#PatternListOverride" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1PatternMap
 */
const de_PatternMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PatternMapOverride
 */
const de_PatternMapOverride = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PatternUnion
 */
const de_PatternUnion = (output: any, context: __SerdeContext): PatternUnion => {
  if (__expectString(output.first) !== undefined) {
    return { first: __expectString(output.first) as any };
  }
  if (__expectString(output.second) !== undefined) {
    return { second: __expectString(output.second) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PatternUnionOverride
 */
const de_PatternUnionOverride = (output: any, context: __SerdeContext): PatternUnionOverride => {
  if (__expectString(output.first) !== undefined) {
    return { first: __expectString(output.first) as any };
  }
  if (__expectString(output.second) !== undefined) {
    return { second: __expectString(output.second) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RecursiveUnionOne
 */
const de_RecursiveUnionOne = (output: any, context: __SerdeContext): RecursiveUnionOne => {
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  if (output.union != null) {
    return {
      union: de_RecursiveUnionTwo(__expectUnion(output.union), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RecursiveUnionTwo
 */
const de_RecursiveUnionTwo = (output: any, context: __SerdeContext): RecursiveUnionTwo => {
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  if (output.union != null) {
    return {
      union: de_RecursiveUnionOne(__expectUnion(output.union), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1StructureSetWithNoKey
 */
const de_StructureSetWithNoKey = (output: any, context: __SerdeContext): MissingKeyStructure[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson.validation#StructureSetWithNoKey" must be non-null.'
      );
    }
    return de_MissingKeyStructure(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1BlobSet
 */
const de_BlobSet = (output: any, context: __SerdeContext): Uint8Array[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#BlobSet" must be non-null.');
    }
    return context.base64Decoder(entry);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1BooleanSet
 */
const de_BooleanSet = (output: any, context: __SerdeContext): boolean[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#BooleanSet" must be non-null.'
      );
    }
    return __expectBoolean(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1ByteSet
 */
const de_ByteSet = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#ByteSet" must be non-null.');
    }
    return __expectByte(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1DateTimeSet
 */
const de_DateTimeSet = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#DateTimeSet" must be non-null.'
      );
    }
    return __expectNonNull(__parseRfc3339DateTime(entry));
  });
  return retVal;
};

/**
 * deserializeAws_restJson1FooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#FooEnumSet" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1FooUnion
 */
const de_FooUnion = (output: any, context: __SerdeContext): FooUnion => {
  if (__expectInt32(output.integer) !== undefined) {
    return { integer: __expectInt32(output.integer) as any };
  }
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GreetingStruct
 */
const de_GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return take(output, {
    hi: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HttpDateSet
 */
const de_HttpDateSet = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#HttpDateSet" must be non-null.'
      );
    }
    return __expectNonNull(__parseRfc7231DateTime(entry));
  });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegerEnumSet
 */
const de_IntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#IntegerEnumSet" must be non-null.'
      );
    }
    return __expectInt32(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegerSet
 */
const de_IntegerSet = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#IntegerSet" must be non-null.'
      );
    }
    return __expectInt32(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSet
 */
const de_ListSet = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#ListSet" must be non-null.');
    }
    return de_StringList(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1LongSet
 */
const de_LongSet = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#LongSet" must be non-null.');
    }
    return __expectLong(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1ShortSet
 */
const de_ShortSet = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#ShortSet" must be non-null.');
    }
    return __expectShort(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#StringList" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1StringSet
 */
const de_StringSet = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#StringSet" must be non-null.');
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1StructureSet
 */
const de_StructureSet = (output: any, context: __SerdeContext): GreetingStruct[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#StructureSet" must be non-null.'
      );
    }
    return de_GreetingStruct(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1TimestampSet
 */
const de_TimestampSet = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#TimestampSet" must be non-null.'
      );
    }
    return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
  });
  return retVal;
};

/**
 * deserializeAws_restJson1UnionSet
 */
const de_UnionSet = (output: any, context: __SerdeContext): FooUnion[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError('All elements of the non-sparse list "aws.protocoltests.shared#UnionSet" must be non-null.');
    }
    return de_FooUnion(__expectUnion(entry), context);
  });
  return retVal;
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
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
