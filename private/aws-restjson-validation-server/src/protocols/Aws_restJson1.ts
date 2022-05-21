// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectByte as __expectByte,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseFloat32 as __limitedParseFloat32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import {
  acceptMatches as __acceptMatches,
  NotAcceptableException as __NotAcceptableException,
  SerializationException as __SerializationException,
  ServerSerdeContext,
  ServiceException as __BaseException,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnsupportedMediaTypeException as __UnsupportedMediaTypeException,
} from "@aws-smithy/server-common";

import {
  EnumString,
  EnumUnion,
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
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedEnumServerInput = {
    list: undefined,
    map: undefined,
    string: undefined,
    union: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.list !== undefined && data.list !== null) {
    contents.list = deserializeAws_restJson1EnumList(data.list, context);
  }
  if (data.map !== undefined && data.map !== null) {
    contents.map = deserializeAws_restJson1EnumMap(data.map, context);
  }
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  if (data.union !== undefined && data.union !== null) {
    contents.union = deserializeAws_restJson1EnumUnion(__expectUnion(data.union), context);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedLengthRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLengthServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedLengthServerInput = {
    blob: undefined,
    list: undefined,
    map: undefined,
    maxString: undefined,
    minString: undefined,
    string: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.blob !== undefined && data.blob !== null) {
    contents.blob = context.base64Decoder(data.blob);
  }
  if (data.list !== undefined && data.list !== null) {
    contents.list = deserializeAws_restJson1LengthList(data.list, context);
  }
  if (data.map !== undefined && data.map !== null) {
    contents.map = deserializeAws_restJson1LengthMap(data.map, context);
  }
  if (data.maxString !== undefined && data.maxString !== null) {
    contents.maxString = __expectString(data.maxString);
  }
  if (data.minString !== undefined && data.minString !== null) {
    contents.minString = __expectString(data.minString);
  }
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedLengthOverrideRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLengthOverrideServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedLengthOverrideServerInput = {
    blob: undefined,
    list: undefined,
    map: undefined,
    maxString: undefined,
    minString: undefined,
    string: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.blob !== undefined && data.blob !== null) {
    contents.blob = context.base64Decoder(data.blob);
  }
  if (data.list !== undefined && data.list !== null) {
    contents.list = deserializeAws_restJson1LengthList(data.list, context);
  }
  if (data.map !== undefined && data.map !== null) {
    contents.map = deserializeAws_restJson1LengthMap(data.map, context);
  }
  if (data.maxString !== undefined && data.maxString !== null) {
    contents.maxString = __expectString(data.maxString);
  }
  if (data.minString !== undefined && data.minString !== null) {
    contents.minString = __expectString(data.minString);
  }
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedLengthQueryStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLengthQueryStringServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedLengthQueryStringServerInput = {
    string: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
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
  return Promise.resolve(contents);
};

export const deserializeMalformedPatternRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedPatternServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedPatternServerInput = {
    evilString: undefined,
    list: undefined,
    map: undefined,
    string: undefined,
    union: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evilString !== undefined && data.evilString !== null) {
    contents.evilString = __expectString(data.evilString);
  }
  if (data.list !== undefined && data.list !== null) {
    contents.list = deserializeAws_restJson1PatternList(data.list, context);
  }
  if (data.map !== undefined && data.map !== null) {
    contents.map = deserializeAws_restJson1PatternMap(data.map, context);
  }
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  if (data.union !== undefined && data.union !== null) {
    contents.union = deserializeAws_restJson1PatternUnion(__expectUnion(data.union), context);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedPatternOverrideRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedPatternOverrideServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedPatternOverrideServerInput = {
    list: undefined,
    map: undefined,
    string: undefined,
    union: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.list !== undefined && data.list !== null) {
    contents.list = deserializeAws_restJson1PatternListOverride(data.list, context);
  }
  if (data.map !== undefined && data.map !== null) {
    contents.map = deserializeAws_restJson1PatternMapOverride(data.map, context);
  }
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  if (data.union !== undefined && data.union !== null) {
    contents.union = deserializeAws_restJson1PatternUnionOverride(__expectUnion(data.union), context);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedRangeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRangeServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedRangeServerInput = {
    byte: undefined,
    float: undefined,
    maxByte: undefined,
    maxFloat: undefined,
    minByte: undefined,
    minFloat: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.byte !== undefined && data.byte !== null) {
    contents.byte = __expectByte(data.byte);
  }
  if (data.float !== undefined && data.float !== null) {
    contents.float = __limitedParseFloat32(data.float);
  }
  if (data.maxByte !== undefined && data.maxByte !== null) {
    contents.maxByte = __expectByte(data.maxByte);
  }
  if (data.maxFloat !== undefined && data.maxFloat !== null) {
    contents.maxFloat = __limitedParseFloat32(data.maxFloat);
  }
  if (data.minByte !== undefined && data.minByte !== null) {
    contents.minByte = __expectByte(data.minByte);
  }
  if (data.minFloat !== undefined && data.minFloat !== null) {
    contents.minFloat = __limitedParseFloat32(data.minFloat);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedRangeOverrideRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRangeOverrideServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedRangeOverrideServerInput = {
    byte: undefined,
    float: undefined,
    maxByte: undefined,
    maxFloat: undefined,
    minByte: undefined,
    minFloat: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.byte !== undefined && data.byte !== null) {
    contents.byte = __expectByte(data.byte);
  }
  if (data.float !== undefined && data.float !== null) {
    contents.float = __limitedParseFloat32(data.float);
  }
  if (data.maxByte !== undefined && data.maxByte !== null) {
    contents.maxByte = __expectByte(data.maxByte);
  }
  if (data.maxFloat !== undefined && data.maxFloat !== null) {
    contents.maxFloat = __limitedParseFloat32(data.maxFloat);
  }
  if (data.minByte !== undefined && data.minByte !== null) {
    contents.minByte = __expectByte(data.minByte);
  }
  if (data.minFloat !== undefined && data.minFloat !== null) {
    contents.minFloat = __limitedParseFloat32(data.minFloat);
  }
  return Promise.resolve(contents);
};

export const deserializeMalformedRequiredRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRequiredServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: MalformedRequiredServerInput = {
    string: undefined,
    stringInHeader: undefined,
    stringInQuery: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
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
  if (output.headers["string-in-headers"] !== undefined) {
    contents.stringInHeader = output.headers["string-in-headers"];
  }
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  return Promise.resolve(contents);
};

export const deserializeRecursiveStructuresRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<RecursiveStructuresServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: RecursiveStructuresServerInput = {
    union: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.union !== undefined && data.union !== null) {
    contents.union = deserializeAws_restJson1RecursiveUnionOne(__expectUnion(data.union), context);
  }
  return Promise.resolve(contents);
};

export const deserializeSensitiveValidationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SensitiveValidationServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey !== undefined && contentTypeHeaderKey !== null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "application/json") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey !== undefined && acceptHeaderKey !== null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: SensitiveValidationServerInput = {
    string: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.string !== undefined && data.string !== null) {
    contents.string = __expectString(data.string);
  }
  return Promise.resolve(contents);
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
  let headers: any = {};
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
      const headers: any = {
        "content-type": "application/json",
        "x-amzn-errortype": "InternalFailure",
      };
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
      const headers: any = {
        "content-type": "application/json",
        "x-amzn-errortype": "NotAcceptableException",
      };
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
      const headers: any = {
        "content-type": "application/json",
        "x-amzn-errortype": "SerializationException",
      };
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
      const headers: any = {
        "content-type": "application/json",
        "x-amzn-errortype": "UnknownOperationException",
      };
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
      const headers: any = {
        "content-type": "application/json",
        "x-amzn-errortype": "UnsupportedMediaTypeException",
      };
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
  const headers: any = {
    "content-type": "application/json",
    "x-amzn-errortype": "ValidationException",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.fieldList !== undefined &&
      input.fieldList !== null && {
        fieldList: serializeAws_restJson1ValidationExceptionFieldList(input.fieldList, context),
      }),
    ...(input.message !== undefined && input.message !== null && { message: input.message }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

const serializeAws_restJson1ValidationExceptionField = (
  input: ValidationExceptionField,
  context: __SerdeContext
): any => {
  return {
    ...(input.message !== undefined && input.message !== null && { message: input.message }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
  };
};

const serializeAws_restJson1ValidationExceptionFieldList = (
  input: ValidationExceptionField[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeAws_restJson1EnumList = (output: any, context: __SerdeContext): (EnumString | string)[] => {
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

const deserializeAws_restJson1EnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: EnumString | string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: EnumString | string }, [key, value]: [EnumString | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_restJson1EnumUnion = (output: any, context: __SerdeContext): EnumUnion => {
  if (__expectString(output.first) !== undefined) {
    return { first: __expectString(output.first) as any };
  }
  if (__expectString(output.second) !== undefined) {
    return { second: __expectString(output.second) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1LengthList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LengthMap = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1LengthList(value, context),
    };
  }, {});
};

const deserializeAws_restJson1PatternList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PatternListOverride = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PatternMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1PatternMapOverride = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1PatternUnion = (output: any, context: __SerdeContext): PatternUnion => {
  if (__expectString(output.first) !== undefined) {
    return { first: __expectString(output.first) as any };
  }
  if (__expectString(output.second) !== undefined) {
    return { second: __expectString(output.second) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PatternUnionOverride = (output: any, context: __SerdeContext): PatternUnionOverride => {
  if (__expectString(output.first) !== undefined) {
    return { first: __expectString(output.first) as any };
  }
  if (__expectString(output.second) !== undefined) {
    return { second: __expectString(output.second) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1RecursiveUnionOne = (output: any, context: __SerdeContext): RecursiveUnionOne => {
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  if (output.union !== undefined && output.union !== null) {
    return {
      union: deserializeAws_restJson1RecursiveUnionTwo(__expectUnion(output.union), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1RecursiveUnionTwo = (output: any, context: __SerdeContext): RecursiveUnionTwo => {
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  if (output.union !== undefined && output.union !== null) {
    return {
      union: deserializeAws_restJson1RecursiveUnionOne(__expectUnion(output.union), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
