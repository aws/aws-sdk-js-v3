import {
  ComplexError,
  ComplexNestedErrorData,
  FooEnum,
  FooError,
  GreetingStruct,
  InvalidGreeting,
  MyUnion,
  NestedPayload,
  RecursiveShapesInputOutputNested1,
  RecursiveShapesInputOutputNested2,
  RenamedGreeting,
  StructureListMember,
} from "../models/models_0";
import {
  AllQueryStringTypesServerInput,
  AllQueryStringTypesServerOutput,
} from "../server/operations/AllQueryStringTypes";
import {
  ConstantAndVariableQueryStringServerInput,
  ConstantAndVariableQueryStringServerOutput,
} from "../server/operations/ConstantAndVariableQueryString";
import {
  ConstantQueryStringServerInput,
  ConstantQueryStringServerOutput,
} from "../server/operations/ConstantQueryString";
import { DocumentTypeServerInput, DocumentTypeServerOutput } from "../server/operations/DocumentType";
import {
  DocumentTypeAsPayloadServerInput,
  DocumentTypeAsPayloadServerOutput,
} from "../server/operations/DocumentTypeAsPayload";
import {
  EmptyInputAndEmptyOutputServerInput,
  EmptyInputAndEmptyOutputServerOutput,
} from "../server/operations/EmptyInputAndEmptyOutput";
import { EndpointOperationServerInput, EndpointOperationServerOutput } from "../server/operations/EndpointOperation";
import {
  EndpointWithHostLabelOperationServerInput,
  EndpointWithHostLabelOperationServerOutput,
} from "../server/operations/EndpointWithHostLabelOperation";
import { GreetingWithErrorsServerInput, GreetingWithErrorsServerOutput } from "../server/operations/GreetingWithErrors";
import { HttpEnumPayloadServerInput, HttpEnumPayloadServerOutput } from "../server/operations/HttpEnumPayload";
import { HttpPayloadTraitsServerInput, HttpPayloadTraitsServerOutput } from "../server/operations/HttpPayloadTraits";
import {
  HttpPayloadTraitsWithMediaTypeServerInput,
  HttpPayloadTraitsWithMediaTypeServerOutput,
} from "../server/operations/HttpPayloadTraitsWithMediaType";
import {
  HttpPayloadWithStructureServerInput,
  HttpPayloadWithStructureServerOutput,
} from "../server/operations/HttpPayloadWithStructure";
import { HttpPrefixHeadersServerInput, HttpPrefixHeadersServerOutput } from "../server/operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersResponseServerInput,
  HttpPrefixHeadersResponseServerOutput,
} from "../server/operations/HttpPrefixHeadersResponse";
import {
  HttpRequestWithFloatLabelsServerInput,
  HttpRequestWithFloatLabelsServerOutput,
} from "../server/operations/HttpRequestWithFloatLabels";
import {
  HttpRequestWithGreedyLabelInPathServerInput,
  HttpRequestWithGreedyLabelInPathServerOutput,
} from "../server/operations/HttpRequestWithGreedyLabelInPath";
import {
  HttpRequestWithLabelsServerInput,
  HttpRequestWithLabelsServerOutput,
} from "../server/operations/HttpRequestWithLabels";
import {
  HttpRequestWithLabelsAndTimestampFormatServerInput,
  HttpRequestWithLabelsAndTimestampFormatServerOutput,
} from "../server/operations/HttpRequestWithLabelsAndTimestampFormat";
import { HttpResponseCodeServerInput, HttpResponseCodeServerOutput } from "../server/operations/HttpResponseCode";
import { HttpStringPayloadServerInput, HttpStringPayloadServerOutput } from "../server/operations/HttpStringPayload";
import {
  IgnoreQueryParamsInResponseServerInput,
  IgnoreQueryParamsInResponseServerOutput,
} from "../server/operations/IgnoreQueryParamsInResponse";
import {
  InputAndOutputWithHeadersServerInput,
  InputAndOutputWithHeadersServerOutput,
} from "../server/operations/InputAndOutputWithHeaders";
import { JsonBlobsServerInput, JsonBlobsServerOutput } from "../server/operations/JsonBlobs";
import { JsonEnumsServerInput, JsonEnumsServerOutput } from "../server/operations/JsonEnums";
import { JsonListsServerInput, JsonListsServerOutput } from "../server/operations/JsonLists";
import { JsonMapsServerInput, JsonMapsServerOutput } from "../server/operations/JsonMaps";
import { JsonTimestampsServerInput, JsonTimestampsServerOutput } from "../server/operations/JsonTimestamps";
import { JsonUnionsServerInput, JsonUnionsServerOutput } from "../server/operations/JsonUnions";
import { MediaTypeHeaderServerInput, MediaTypeHeaderServerOutput } from "../server/operations/MediaTypeHeader";
import { NoInputAndNoOutputServerInput, NoInputAndNoOutputServerOutput } from "../server/operations/NoInputAndNoOutput";
import { NoInputAndOutputServerInput, NoInputAndOutputServerOutput } from "../server/operations/NoInputAndOutput";
import {
  NullAndEmptyHeadersClientServerInput,
  NullAndEmptyHeadersClientServerOutput,
} from "../server/operations/NullAndEmptyHeadersClient";
import {
  NullAndEmptyHeadersServerServerInput,
  NullAndEmptyHeadersServerServerOutput,
} from "../server/operations/NullAndEmptyHeadersServer";
import {
  OmitsNullSerializesEmptyStringServerInput,
  OmitsNullSerializesEmptyStringServerOutput,
} from "../server/operations/OmitsNullSerializesEmptyString";
import {
  QueryIdempotencyTokenAutoFillServerInput,
  QueryIdempotencyTokenAutoFillServerOutput,
} from "../server/operations/QueryIdempotencyTokenAutoFill";
import {
  QueryParamsAsStringListMapServerInput,
  QueryParamsAsStringListMapServerOutput,
} from "../server/operations/QueryParamsAsStringListMap";
import { QueryPrecedenceServerInput, QueryPrecedenceServerOutput } from "../server/operations/QueryPrecedence";
import { RecursiveShapesServerInput, RecursiveShapesServerOutput } from "../server/operations/RecursiveShapes";
import {
  SimpleScalarPropertiesServerInput,
  SimpleScalarPropertiesServerOutput,
} from "../server/operations/SimpleScalarProperties";
import { StreamingTraitsServerInput, StreamingTraitsServerOutput } from "../server/operations/StreamingTraits";
import {
  StreamingTraitsRequireLengthServerInput,
  StreamingTraitsRequireLengthServerOutput,
} from "../server/operations/StreamingTraitsRequireLength";
import {
  StreamingTraitsWithMediaTypeServerInput,
  StreamingTraitsWithMediaTypeServerOutput,
} from "../server/operations/StreamingTraitsWithMediaType";
import {
  TimestampFormatHeadersServerInput,
  TimestampFormatHeadersServerOutput,
} from "../server/operations/TimestampFormatHeaders";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  DocumentType as __DocumentType,
  LazyJsonString as __LazyJsonString,
  dateToUtcString as __dateToUtcString,
  expectBoolean as __expectBoolean,
  expectNumber as __expectNumber,
  expectString as __expectString,
  handleFloat as __handleFloat,
  parseBoolean as __parseBoolean,
  serializeFloat as __serializeFloat,
  splitEvery as __splitEvery,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import {
  ServerSerdeContext,
  SerializationException as __SerializationException,
  SmithyFrameworkException as __SmithyFrameworkException,
} from "@aws-smithy/server-common";

export const deserializeAllQueryStringTypesRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<AllQueryStringTypesServerInput> => {
  const contents: AllQueryStringTypesServerInput = {
    queryBoolean: undefined,
    queryBooleanList: undefined,
    queryByte: undefined,
    queryDouble: undefined,
    queryDoubleList: undefined,
    queryEnum: undefined,
    queryEnumList: undefined,
    queryFloat: undefined,
    queryInteger: undefined,
    queryIntegerList: undefined,
    queryIntegerSet: undefined,
    queryLong: undefined,
    queryParamsMapOfStringList: undefined,
    queryShort: undefined,
    queryString: undefined,
    queryStringList: undefined,
    queryStringSet: undefined,
    queryTimestamp: undefined,
    queryTimestampList: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
    if (query["String"] !== undefined) {
      if (Array.isArray(query["String"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["String"] as string);
      contents.queryString = decoded;
    }
    if (query["StringList"] !== undefined) {
      const decoded = Array.isArray(query["StringList"])
        ? (query["StringList"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["StringList"] as string)];
      contents.queryStringList = decoded.map((_entry) => _entry.trim());
    }
    if (query["StringSet"] !== undefined) {
      const decoded = Array.isArray(query["StringSet"])
        ? (query["StringSet"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["StringSet"] as string)];
      contents.queryStringSet = decoded.map((_entry) => _entry.trim());
    }
    if (query["Byte"] !== undefined) {
      if (Array.isArray(query["Byte"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Byte"] as string);
      contents.queryByte = parseInt(decoded, 10);
    }
    if (query["Short"] !== undefined) {
      if (Array.isArray(query["Short"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Short"] as string);
      contents.queryShort = parseInt(decoded, 10);
    }
    if (query["Integer"] !== undefined) {
      if (Array.isArray(query["Integer"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Integer"] as string);
      contents.queryInteger = parseInt(decoded, 10);
    }
    if (query["IntegerList"] !== undefined) {
      const decoded = Array.isArray(query["IntegerList"])
        ? (query["IntegerList"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["IntegerList"] as string)];
      contents.queryIntegerList = decoded.map((_entry) => parseInt(_entry.trim(), 10));
    }
    if (query["IntegerSet"] !== undefined) {
      const decoded = Array.isArray(query["IntegerSet"])
        ? (query["IntegerSet"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["IntegerSet"] as string)];
      contents.queryIntegerSet = decoded.map((_entry) => parseInt(_entry.trim(), 10));
    }
    if (query["Long"] !== undefined) {
      if (Array.isArray(query["Long"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Long"] as string);
      contents.queryLong = parseInt(decoded, 10);
    }
    if (query["Float"] !== undefined) {
      if (Array.isArray(query["Float"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Float"] as string);
      contents.queryFloat = parseFloat(decoded);
    }
    if (query["Double"] !== undefined) {
      if (Array.isArray(query["Double"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Double"] as string);
      contents.queryDouble = parseFloat(decoded);
    }
    if (query["DoubleList"] !== undefined) {
      const decoded = Array.isArray(query["DoubleList"])
        ? (query["DoubleList"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["DoubleList"] as string)];
      contents.queryDoubleList = decoded.map((_entry) => parseFloat(_entry.trim()));
    }
    if (query["Boolean"] !== undefined) {
      if (Array.isArray(query["Boolean"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Boolean"] as string);
      contents.queryBoolean = __parseBoolean(decoded);
    }
    if (query["BooleanList"] !== undefined) {
      const decoded = Array.isArray(query["BooleanList"])
        ? (query["BooleanList"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["BooleanList"] as string)];
      contents.queryBooleanList = decoded.map((_entry) => __parseBoolean(_entry.trim()));
    }
    if (query["Timestamp"] !== undefined) {
      if (Array.isArray(query["Timestamp"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Timestamp"] as string);
      contents.queryTimestamp = new Date(decoded);
    }
    if (query["TimestampList"] !== undefined) {
      const decoded = Array.isArray(query["TimestampList"])
        ? (query["TimestampList"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["TimestampList"] as string)];
      contents.queryTimestampList = decoded.map((_entry) => new Date(_entry.trim()));
    }
    if (query["Enum"] !== undefined) {
      if (Array.isArray(query["Enum"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Enum"] as string);
      contents.queryEnum = decoded;
    }
    if (query["EnumList"] !== undefined) {
      const decoded = Array.isArray(query["EnumList"])
        ? (query["EnumList"] as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(query["EnumList"] as string)];
      contents.queryEnumList = decoded.map((_entry) => _entry.trim());
    }
    let parsedQuery: { [key: string]: string[] } = {};
    for (const [key, value] of Object.entries(query)) {
      const decoded = Array.isArray(value)
        ? (value as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(value as string)];
      parsedQuery[decodeURIComponent(key)] = decoded.map((_entry) => _entry.trim());
    }
    contents.queryParamsMapOfStringList = parsedQuery;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeConstantAndVariableQueryStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringServerInput> => {
  const contents: ConstantAndVariableQueryStringServerInput = {
    baz: undefined,
    maybeSet: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
    if (query["baz"] !== undefined) {
      if (Array.isArray(query["baz"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["baz"] as string);
      contents.baz = decoded;
    }
    if (query["maybeSet"] !== undefined) {
      if (Array.isArray(query["maybeSet"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["maybeSet"] as string);
      contents.maybeSet = decoded;
    }
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeConstantQueryStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ConstantQueryStringServerInput> => {
  const contents: ConstantQueryStringServerInput = {
    hello: undefined,
  };
  const pathRegex = new RegExp("/ConstantQueryString/(?<hello>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.hello = decodeURIComponent(parsedPath.groups.hello);
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeDocumentTypeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<DocumentTypeServerInput> => {
  const contents: DocumentTypeServerInput = {
    documentValue: undefined,
    stringValue: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.documentValue !== undefined && data.documentValue !== null) {
    contents.documentValue = deserializeAws_restJson1Document(data.documentValue, context);
  }
  if (data.stringValue !== undefined && data.stringValue !== null) {
    contents.stringValue = __expectString(data.stringValue);
  }
  return Promise.resolve(contents);
};

export const deserializeDocumentTypeAsPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadServerInput> => {
  const contents: DocumentTypeAsPayloadServerInput = {
    documentValue: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.documentValue = data;
  contents.documentValue = JSON.parse(data);
  return Promise.resolve(contents);
};

export const deserializeEmptyInputAndEmptyOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputServerInput> => {
  const contents: EmptyInputAndEmptyOutputServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeEndpointOperationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<EndpointOperationServerInput> => {
  const contents: EndpointOperationServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeEndpointWithHostLabelOperationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationServerInput> => {
  const contents: EndpointWithHostLabelOperationServerInput = {
    label: undefined,
  };
  const hostRegex = new RegExp("^foo\\.(?<label>.*)\\.");
  const parsedHost = output.path.match(hostRegex);
  if (parsedHost?.groups !== undefined) {
    contents.label = parsedHost.groups.label;
  }
  const data: any = await parseBody(output.body, context);
  if (data.label !== undefined && data.label !== null) {
    contents.label = __expectString(data.label);
  }
  return Promise.resolve(contents);
};

export const deserializeGreetingWithErrorsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GreetingWithErrorsServerInput> => {
  const contents: GreetingWithErrorsServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpEnumPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpEnumPayloadServerInput> => {
  const contents: HttpEnumPayloadServerInput = {
    payload: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return Promise.resolve(contents);
};

export const deserializeHttpPayloadTraitsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadTraitsServerInput> => {
  const contents: HttpPayloadTraitsServerInput = {
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return Promise.resolve(contents);
};

export const deserializeHttpPayloadTraitsWithMediaTypeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeServerInput> => {
  const contents: HttpPayloadTraitsWithMediaTypeServerInput = {
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return Promise.resolve(contents);
};

export const deserializeHttpPayloadWithStructureRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureServerInput> => {
  const contents: HttpPayloadWithStructureServerInput = {
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restJson1NestedPayload(data, context);
  return Promise.resolve(contents);
};

export const deserializeHttpPrefixHeadersRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPrefixHeadersServerInput> => {
  const contents: HttpPrefixHeadersServerInput = {
    foo: undefined,
    fooMap: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  Object.keys(output.headers).forEach((header) => {
    if (contents.fooMap === undefined) {
      contents.fooMap = {};
    }
    if (header.startsWith("x-foo-")) {
      contents.fooMap[header.substring(6)] = output.headers[header];
    }
  });
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpPrefixHeadersResponseRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPrefixHeadersResponseServerInput> => {
  const contents: HttpPrefixHeadersResponseServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpRequestWithFloatLabelsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsServerInput> => {
  const contents: HttpRequestWithFloatLabelsServerInput = {
    double: undefined,
    float: undefined,
  };
  const pathRegex = new RegExp("/FloatHttpLabels/(?<float>[^/]+)/(?<double>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.float = parseFloat(decodeURIComponent(parsedPath.groups.float));
    contents.double = parseFloat(decodeURIComponent(parsedPath.groups.double));
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpRequestWithGreedyLabelInPathRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathServerInput> => {
  const contents: HttpRequestWithGreedyLabelInPathServerInput = {
    baz: undefined,
    foo: undefined,
  };
  const pathRegex = new RegExp("/HttpRequestWithGreedyLabelInPath/foo/(?<foo>[^/]+)/baz/(?<baz>.+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.foo = decodeURIComponent(parsedPath.groups.foo);
    contents.baz = decodeURIComponent(parsedPath.groups.baz);
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpRequestWithLabelsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsServerInput> => {
  const contents: HttpRequestWithLabelsServerInput = {
    boolean: undefined,
    double: undefined,
    float: undefined,
    integer: undefined,
    long: undefined,
    short: undefined,
    string: undefined,
    timestamp: undefined,
  };
  const pathRegex = new RegExp(
    "/HttpRequestWithLabels/(?<string>[^/]+)/(?<short>[^/]+)/(?<integer>[^/]+)/(?<long>[^/]+)/(?<float>[^/]+)/(?<double>[^/]+)/(?<boolean>[^/]+)/(?<timestamp>[^/]+)"
  );
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.string = decodeURIComponent(parsedPath.groups.string);
    contents.short = parseInt(decodeURIComponent(parsedPath.groups.short), 10);
    contents.integer = parseInt(decodeURIComponent(parsedPath.groups.integer), 10);
    contents.long = parseInt(decodeURIComponent(parsedPath.groups.long), 10);
    contents.float = parseFloat(decodeURIComponent(parsedPath.groups.float));
    contents.double = parseFloat(decodeURIComponent(parsedPath.groups.double));
    contents.boolean = __parseBoolean(decodeURIComponent(parsedPath.groups.boolean));
    contents.timestamp = new Date(decodeURIComponent(parsedPath.groups.timestamp));
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpRequestWithLabelsAndTimestampFormatRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatServerInput> => {
  const contents: HttpRequestWithLabelsAndTimestampFormatServerInput = {
    defaultFormat: undefined,
    memberDateTime: undefined,
    memberEpochSeconds: undefined,
    memberHttpDate: undefined,
    targetDateTime: undefined,
    targetEpochSeconds: undefined,
    targetHttpDate: undefined,
  };
  const pathRegex = new RegExp(
    "/HttpRequestWithLabelsAndTimestampFormat/(?<memberEpochSeconds>[^/]+)/(?<memberHttpDate>[^/]+)/(?<memberDateTime>[^/]+)/(?<defaultFormat>[^/]+)/(?<targetEpochSeconds>[^/]+)/(?<targetHttpDate>[^/]+)/(?<targetDateTime>[^/]+)"
  );
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.memberEpochSeconds = new Date(
      Math.round(parseInt(decodeURIComponent(parsedPath.groups.memberEpochSeconds), 10) * 1000)
    );
    contents.memberHttpDate = new Date(decodeURIComponent(parsedPath.groups.memberHttpDate));
    contents.memberDateTime = new Date(decodeURIComponent(parsedPath.groups.memberDateTime));
    contents.defaultFormat = new Date(decodeURIComponent(parsedPath.groups.defaultFormat));
    contents.targetEpochSeconds = new Date(
      Math.round(parseInt(decodeURIComponent(parsedPath.groups.targetEpochSeconds), 10) * 1000)
    );
    contents.targetHttpDate = new Date(decodeURIComponent(parsedPath.groups.targetHttpDate));
    contents.targetDateTime = new Date(decodeURIComponent(parsedPath.groups.targetDateTime));
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpResponseCodeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpResponseCodeServerInput> => {
  const contents: HttpResponseCodeServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeHttpStringPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpStringPayloadServerInput> => {
  const contents: HttpStringPayloadServerInput = {
    payload: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return Promise.resolve(contents);
};

export const deserializeIgnoreQueryParamsInResponseRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseServerInput> => {
  const contents: IgnoreQueryParamsInResponseServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeInputAndOutputWithHeadersRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersServerInput> => {
  const contents: InputAndOutputWithHeadersServerInput = {
    headerBooleanList: undefined,
    headerByte: undefined,
    headerDouble: undefined,
    headerEnum: undefined,
    headerEnumList: undefined,
    headerFalseBool: undefined,
    headerFloat: undefined,
    headerInteger: undefined,
    headerIntegerList: undefined,
    headerLong: undefined,
    headerShort: undefined,
    headerString: undefined,
    headerStringList: undefined,
    headerStringSet: undefined,
    headerTimestampList: undefined,
    headerTrueBool: undefined,
  };
  if (output.headers["x-string"] !== undefined) {
    contents.headerString = output.headers["x-string"];
  }
  if (output.headers["x-byte"] !== undefined) {
    contents.headerByte = parseInt(output.headers["x-byte"], 10);
  }
  if (output.headers["x-short"] !== undefined) {
    contents.headerShort = parseInt(output.headers["x-short"], 10);
  }
  if (output.headers["x-integer"] !== undefined) {
    contents.headerInteger = parseInt(output.headers["x-integer"], 10);
  }
  if (output.headers["x-long"] !== undefined) {
    contents.headerLong = parseInt(output.headers["x-long"], 10);
  }
  if (output.headers["x-float"] !== undefined) {
    contents.headerFloat = parseFloat(output.headers["x-float"]);
  }
  if (output.headers["x-double"] !== undefined) {
    contents.headerDouble = parseFloat(output.headers["x-double"]);
  }
  if (output.headers["x-boolean1"] !== undefined) {
    contents.headerTrueBool = __parseBoolean(output.headers["x-boolean1"]);
  }
  if (output.headers["x-boolean2"] !== undefined) {
    contents.headerFalseBool = __parseBoolean(output.headers["x-boolean2"]);
  }
  if (output.headers["x-stringlist"] !== undefined) {
    contents.headerStringList = (output.headers["x-stringlist"] || "").split(",").map((_entry) => _entry.trim());
  }
  if (output.headers["x-stringset"] !== undefined) {
    contents.headerStringSet = (output.headers["x-stringset"] || "").split(",").map((_entry) => _entry.trim());
  }
  if (output.headers["x-integerlist"] !== undefined) {
    contents.headerIntegerList = (output.headers["x-integerlist"] || "")
      .split(",")
      .map((_entry) => parseInt(_entry.trim(), 10));
  }
  if (output.headers["x-booleanlist"] !== undefined) {
    contents.headerBooleanList = (output.headers["x-booleanlist"] || "")
      .split(",")
      .map((_entry) => __parseBoolean(_entry.trim()));
  }
  if (output.headers["x-timestamplist"] !== undefined) {
    contents.headerTimestampList = __splitEvery(output.headers["x-timestamplist"] || "", ",", 2).map(
      (_entry) => new Date(_entry.trim())
    );
  }
  if (output.headers["x-enum"] !== undefined) {
    contents.headerEnum = output.headers["x-enum"];
  }
  if (output.headers["x-enumlist"] !== undefined) {
    contents.headerEnumList = (output.headers["x-enumlist"] || "").split(",").map((_entry) => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeJsonBlobsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonBlobsServerInput> => {
  const contents: JsonBlobsServerInput = {
    data: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.data !== undefined && data.data !== null) {
    contents.data = context.base64Decoder(data.data);
  }
  return Promise.resolve(contents);
};

export const deserializeJsonEnumsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonEnumsServerInput> => {
  const contents: JsonEnumsServerInput = {
    fooEnum1: undefined,
    fooEnum2: undefined,
    fooEnum3: undefined,
    fooEnumList: undefined,
    fooEnumMap: undefined,
    fooEnumSet: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.fooEnum1 !== undefined && data.fooEnum1 !== null) {
    contents.fooEnum1 = __expectString(data.fooEnum1);
  }
  if (data.fooEnum2 !== undefined && data.fooEnum2 !== null) {
    contents.fooEnum2 = __expectString(data.fooEnum2);
  }
  if (data.fooEnum3 !== undefined && data.fooEnum3 !== null) {
    contents.fooEnum3 = __expectString(data.fooEnum3);
  }
  if (data.fooEnumList !== undefined && data.fooEnumList !== null) {
    contents.fooEnumList = deserializeAws_restJson1FooEnumList(data.fooEnumList, context);
  }
  if (data.fooEnumMap !== undefined && data.fooEnumMap !== null) {
    contents.fooEnumMap = deserializeAws_restJson1FooEnumMap(data.fooEnumMap, context);
  }
  if (data.fooEnumSet !== undefined && data.fooEnumSet !== null) {
    contents.fooEnumSet = deserializeAws_restJson1FooEnumSet(data.fooEnumSet, context);
  }
  return Promise.resolve(contents);
};

export const deserializeJsonListsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonListsServerInput> => {
  const contents: JsonListsServerInput = {
    booleanList: undefined,
    enumList: undefined,
    integerList: undefined,
    nestedStringList: undefined,
    sparseStringList: undefined,
    stringList: undefined,
    stringSet: undefined,
    structureList: undefined,
    timestampList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.booleanList !== undefined && data.booleanList !== null) {
    contents.booleanList = deserializeAws_restJson1BooleanList(data.booleanList, context);
  }
  if (data.enumList !== undefined && data.enumList !== null) {
    contents.enumList = deserializeAws_restJson1FooEnumList(data.enumList, context);
  }
  if (data.integerList !== undefined && data.integerList !== null) {
    contents.integerList = deserializeAws_restJson1IntegerList(data.integerList, context);
  }
  if (data.nestedStringList !== undefined && data.nestedStringList !== null) {
    contents.nestedStringList = deserializeAws_restJson1NestedStringList(data.nestedStringList, context);
  }
  if (data.sparseStringList !== undefined && data.sparseStringList !== null) {
    contents.sparseStringList = deserializeAws_restJson1SparseStringList(data.sparseStringList, context);
  }
  if (data.stringList !== undefined && data.stringList !== null) {
    contents.stringList = deserializeAws_restJson1StringList(data.stringList, context);
  }
  if (data.stringSet !== undefined && data.stringSet !== null) {
    contents.stringSet = deserializeAws_restJson1StringSet(data.stringSet, context);
  }
  if (data.myStructureList !== undefined && data.myStructureList !== null) {
    contents.structureList = deserializeAws_restJson1StructureList(data.myStructureList, context);
  }
  if (data.timestampList !== undefined && data.timestampList !== null) {
    contents.timestampList = deserializeAws_restJson1TimestampList(data.timestampList, context);
  }
  return Promise.resolve(contents);
};

export const deserializeJsonMapsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonMapsServerInput> => {
  const contents: JsonMapsServerInput = {
    denseBooleanMap: undefined,
    denseNumberMap: undefined,
    denseSetMap: undefined,
    denseStringMap: undefined,
    denseStructMap: undefined,
    sparseBooleanMap: undefined,
    sparseNumberMap: undefined,
    sparseSetMap: undefined,
    sparseStringMap: undefined,
    sparseStructMap: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.denseBooleanMap !== undefined && data.denseBooleanMap !== null) {
    contents.denseBooleanMap = deserializeAws_restJson1DenseBooleanMap(data.denseBooleanMap, context);
  }
  if (data.denseNumberMap !== undefined && data.denseNumberMap !== null) {
    contents.denseNumberMap = deserializeAws_restJson1DenseNumberMap(data.denseNumberMap, context);
  }
  if (data.denseSetMap !== undefined && data.denseSetMap !== null) {
    contents.denseSetMap = deserializeAws_restJson1DenseSetMap(data.denseSetMap, context);
  }
  if (data.denseStringMap !== undefined && data.denseStringMap !== null) {
    contents.denseStringMap = deserializeAws_restJson1DenseStringMap(data.denseStringMap, context);
  }
  if (data.denseStructMap !== undefined && data.denseStructMap !== null) {
    contents.denseStructMap = deserializeAws_restJson1DenseStructMap(data.denseStructMap, context);
  }
  if (data.sparseBooleanMap !== undefined && data.sparseBooleanMap !== null) {
    contents.sparseBooleanMap = deserializeAws_restJson1SparseBooleanMap(data.sparseBooleanMap, context);
  }
  if (data.sparseNumberMap !== undefined && data.sparseNumberMap !== null) {
    contents.sparseNumberMap = deserializeAws_restJson1SparseNumberMap(data.sparseNumberMap, context);
  }
  if (data.sparseSetMap !== undefined && data.sparseSetMap !== null) {
    contents.sparseSetMap = deserializeAws_restJson1SparseSetMap(data.sparseSetMap, context);
  }
  if (data.sparseStringMap !== undefined && data.sparseStringMap !== null) {
    contents.sparseStringMap = deserializeAws_restJson1SparseStringMap(data.sparseStringMap, context);
  }
  if (data.sparseStructMap !== undefined && data.sparseStructMap !== null) {
    contents.sparseStructMap = deserializeAws_restJson1SparseStructMap(data.sparseStructMap, context);
  }
  return Promise.resolve(contents);
};

export const deserializeJsonTimestampsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonTimestampsServerInput> => {
  const contents: JsonTimestampsServerInput = {
    dateTime: undefined,
    epochSeconds: undefined,
    httpDate: undefined,
    normal: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dateTime !== undefined && data.dateTime !== null) {
    contents.dateTime = new Date(Math.round(data.dateTime * 1000));
  }
  if (data.epochSeconds !== undefined && data.epochSeconds !== null) {
    contents.epochSeconds = new Date(Math.round(data.epochSeconds * 1000));
  }
  if (data.httpDate !== undefined && data.httpDate !== null) {
    contents.httpDate = new Date(Math.round(data.httpDate * 1000));
  }
  if (data.normal !== undefined && data.normal !== null) {
    contents.normal = new Date(Math.round(data.normal * 1000));
  }
  return Promise.resolve(contents);
};

export const deserializeJsonUnionsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonUnionsServerInput> => {
  const contents: JsonUnionsServerInput = {
    contents: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contents !== undefined && data.contents !== null) {
    contents.contents = deserializeAws_restJson1MyUnion(data.contents, context);
  }
  return Promise.resolve(contents);
};

export const deserializeMediaTypeHeaderRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MediaTypeHeaderServerInput> => {
  const contents: MediaTypeHeaderServerInput = {
    json: undefined,
  };
  if (output.headers["x-json"] !== undefined) {
    contents.json = new __LazyJsonString(Buffer.from(output.headers["x-json"], "base64").toString("ascii"));
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeNoInputAndNoOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NoInputAndNoOutputServerInput> => {
  const contents: NoInputAndNoOutputServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeNoInputAndOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NoInputAndOutputServerInput> => {
  const contents: NoInputAndOutputServerInput = {};
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeNullAndEmptyHeadersClientRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientServerInput> => {
  const contents: NullAndEmptyHeadersClientServerInput = {
    a: undefined,
    b: undefined,
    c: undefined,
  };
  if (output.headers["x-a"] !== undefined) {
    contents.a = output.headers["x-a"];
  }
  if (output.headers["x-b"] !== undefined) {
    contents.b = output.headers["x-b"];
  }
  if (output.headers["x-c"] !== undefined) {
    contents.c = (output.headers["x-c"] || "").split(",").map((_entry) => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeNullAndEmptyHeadersServerRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerServerInput> => {
  const contents: NullAndEmptyHeadersServerServerInput = {
    a: undefined,
    b: undefined,
    c: undefined,
  };
  if (output.headers["x-a"] !== undefined) {
    contents.a = output.headers["x-a"];
  }
  if (output.headers["x-b"] !== undefined) {
    contents.b = output.headers["x-b"];
  }
  if (output.headers["x-c"] !== undefined) {
    contents.c = (output.headers["x-c"] || "").split(",").map((_entry) => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeOmitsNullSerializesEmptyStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringServerInput> => {
  const contents: OmitsNullSerializesEmptyStringServerInput = {
    emptyString: undefined,
    nullValue: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
    if (query["Null"] !== undefined) {
      if (Array.isArray(query["Null"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Null"] as string);
      contents.nullValue = decoded;
    }
    if (query["Empty"] !== undefined) {
      if (Array.isArray(query["Empty"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["Empty"] as string);
      contents.emptyString = decoded;
    }
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeQueryIdempotencyTokenAutoFillRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillServerInput> => {
  const contents: QueryIdempotencyTokenAutoFillServerInput = {
    token: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
    if (query["token"] !== undefined) {
      if (Array.isArray(query["token"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["token"] as string);
      contents.token = decoded;
    }
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeQueryParamsAsStringListMapRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapServerInput> => {
  const contents: QueryParamsAsStringListMapServerInput = {
    foo: undefined,
    qux: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
    if (query["corge"] !== undefined) {
      if (Array.isArray(query["corge"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["corge"] as string);
      contents.qux = decoded;
    }
    let parsedQuery: { [key: string]: string[] } = {};
    for (const [key, value] of Object.entries(query)) {
      const decoded = Array.isArray(value)
        ? (value as string[]).map((e) => decodeURIComponent(e))
        : [decodeURIComponent(value as string)];
      parsedQuery[decodeURIComponent(key)] = decoded.map((_entry) => _entry.trim());
    }
    contents.foo = parsedQuery;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeQueryPrecedenceRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<QueryPrecedenceServerInput> => {
  const contents: QueryPrecedenceServerInput = {
    baz: undefined,
    foo: undefined,
  };
  const query = output.query;
  if (query !== undefined && query !== null) {
    if (query["bar"] !== undefined) {
      if (Array.isArray(query["bar"])) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(query["bar"] as string);
      contents.foo = decoded;
    }
    let parsedQuery: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(query)) {
      if (Array.isArray(value)) {
        throw new __SerializationException();
      }
      const decoded = decodeURIComponent(value as string);
      parsedQuery[decodeURIComponent(key)] = decoded;
    }
    contents.baz = parsedQuery;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const deserializeRecursiveShapesRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<RecursiveShapesServerInput> => {
  const contents: RecursiveShapesServerInput = {
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nested !== undefined && data.nested !== null) {
    contents.nested = deserializeAws_restJson1RecursiveShapesInputOutputNested1(data.nested, context);
  }
  return Promise.resolve(contents);
};

export const deserializeSimpleScalarPropertiesRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesServerInput> => {
  const contents: SimpleScalarPropertiesServerInput = {
    byteValue: undefined,
    doubleValue: undefined,
    falseBooleanValue: undefined,
    floatValue: undefined,
    foo: undefined,
    integerValue: undefined,
    longValue: undefined,
    shortValue: undefined,
    stringValue: undefined,
    trueBooleanValue: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.byteValue !== undefined && data.byteValue !== null) {
    contents.byteValue = __expectNumber(data.byteValue);
  }
  if (data.DoubleDribble !== undefined && data.DoubleDribble !== null) {
    contents.doubleValue = __handleFloat(data.DoubleDribble);
  }
  if (data.falseBooleanValue !== undefined && data.falseBooleanValue !== null) {
    contents.falseBooleanValue = __expectBoolean(data.falseBooleanValue);
  }
  if (data.floatValue !== undefined && data.floatValue !== null) {
    contents.floatValue = __handleFloat(data.floatValue);
  }
  if (data.integerValue !== undefined && data.integerValue !== null) {
    contents.integerValue = __expectNumber(data.integerValue);
  }
  if (data.longValue !== undefined && data.longValue !== null) {
    contents.longValue = __expectNumber(data.longValue);
  }
  if (data.shortValue !== undefined && data.shortValue !== null) {
    contents.shortValue = __expectNumber(data.shortValue);
  }
  if (data.stringValue !== undefined && data.stringValue !== null) {
    contents.stringValue = __expectString(data.stringValue);
  }
  if (data.trueBooleanValue !== undefined && data.trueBooleanValue !== null) {
    contents.trueBooleanValue = __expectBoolean(data.trueBooleanValue);
  }
  return Promise.resolve(contents);
};

export const deserializeStreamingTraitsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<StreamingTraitsServerInput> => {
  const contents: StreamingTraitsServerInput = {
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = output.body;
  contents.blob = data;
  return Promise.resolve(contents);
};

export const deserializeStreamingTraitsRequireLengthRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthServerInput> => {
  const contents: StreamingTraitsRequireLengthServerInput = {
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = output.body;
  contents.blob = data;
  return Promise.resolve(contents);
};

export const deserializeStreamingTraitsWithMediaTypeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<StreamingTraitsWithMediaTypeServerInput> => {
  const contents: StreamingTraitsWithMediaTypeServerInput = {
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = output.body;
  contents.blob = data;
  return Promise.resolve(contents);
};

export const deserializeTimestampFormatHeadersRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<TimestampFormatHeadersServerInput> => {
  const contents: TimestampFormatHeadersServerInput = {
    defaultFormat: undefined,
    memberDateTime: undefined,
    memberEpochSeconds: undefined,
    memberHttpDate: undefined,
    targetDateTime: undefined,
    targetEpochSeconds: undefined,
    targetHttpDate: undefined,
  };
  if (output.headers["x-memberepochseconds"] !== undefined) {
    contents.memberEpochSeconds = new Date(Math.round(parseInt(output.headers["x-memberepochseconds"], 10) * 1000));
  }
  if (output.headers["x-memberhttpdate"] !== undefined) {
    contents.memberHttpDate = new Date(output.headers["x-memberhttpdate"]);
  }
  if (output.headers["x-memberdatetime"] !== undefined) {
    contents.memberDateTime = new Date(output.headers["x-memberdatetime"]);
  }
  if (output.headers["x-defaultformat"] !== undefined) {
    contents.defaultFormat = new Date(output.headers["x-defaultformat"]);
  }
  if (output.headers["x-targetepochseconds"] !== undefined) {
    contents.targetEpochSeconds = new Date(Math.round(parseInt(output.headers["x-targetepochseconds"], 10) * 1000));
  }
  if (output.headers["x-targethttpdate"] !== undefined) {
    contents.targetHttpDate = new Date(output.headers["x-targethttpdate"]);
  }
  if (output.headers["x-targetdatetime"] !== undefined) {
    contents.targetDateTime = new Date(output.headers["x-targetdatetime"]);
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

export const serializeAllQueryStringTypesResponse = async (
  input: AllQueryStringTypesServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeConstantAndVariableQueryStringResponse = async (
  input: ConstantAndVariableQueryStringServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeConstantQueryStringResponse = async (
  input: ConstantQueryStringServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeDocumentTypeResponse = async (
  input: DocumentTypeServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.documentValue !== undefined &&
      input.documentValue !== null && { documentValue: serializeAws_restJson1Document(input.documentValue, context) }),
    ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeDocumentTypeAsPayloadResponse = async (
  input: DocumentTypeAsPayloadServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  if (input.documentValue !== undefined) {
    if (input.documentValue === null) {
      body = "null";
    } else {
      body = input.documentValue;
    }
  }
  body = JSON.stringify(body);
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeEmptyInputAndEmptyOutputResponse = async (
  input: EmptyInputAndEmptyOutputServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeEndpointOperationResponse = async (
  input: EndpointOperationServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeEndpointWithHostLabelOperationResponse = async (
  input: EndpointWithHostLabelOperationServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeGreetingWithErrorsResponse = async (
  input: GreetingWithErrorsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.greeting) && { "x-greeting": input.greeting! }),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpEnumPayloadResponse = async (
  input: HttpEnumPayloadServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "text/plain",
  };
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpPayloadTraitsResponse = async (
  input: HttpPayloadTraitsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpPayloadTraitsWithMediaTypeResponse = async (
  input: HttpPayloadTraitsWithMediaTypeServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpPayloadWithStructureResponse = async (
  input: HttpPayloadWithStructureServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  if (input.nested !== undefined) {
    body = serializeAws_restJson1NestedPayload(input.nested, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpPrefixHeadersResponse = async (
  input: HttpPrefixHeadersServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
    ...(input.fooMap !== undefined &&
      Object.keys(input.fooMap).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`x-foo-${suffix.toLowerCase()}`]: input.fooMap![suffix],
        }),
        {}
      )),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpPrefixHeadersResponseResponse = async (
  input: HttpPrefixHeadersResponseServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(input.prefixHeaders !== undefined &&
      Object.keys(input.prefixHeaders).reduce(
        (acc: any, suffix: string) => ({
          ...acc,
          [`${suffix.toLowerCase()}`]: input.prefixHeaders![suffix],
        }),
        {}
      )),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpRequestWithFloatLabelsResponse = async (
  input: HttpRequestWithFloatLabelsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpRequestWithGreedyLabelInPathResponse = async (
  input: HttpRequestWithGreedyLabelInPathServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpRequestWithLabelsResponse = async (
  input: HttpRequestWithLabelsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpRequestWithLabelsAndTimestampFormatResponse = async (
  input: HttpRequestWithLabelsAndTimestampFormatServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpResponseCodeResponse = async (
  input: HttpResponseCodeServerOutput,
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
  let statusCode: number = 200;
  if (input.Status !== undefined) {
    statusCode = input.Status;
  }
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeHttpStringPayloadResponse = async (
  input: HttpStringPayloadServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "text/plain",
  };
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeIgnoreQueryParamsInResponseResponse = async (
  input: IgnoreQueryParamsInResponseServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.baz !== undefined && input.baz !== null && { baz: input.baz }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeInputAndOutputWithHeadersResponse = async (
  input: InputAndOutputWithHeadersServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.headerString) && { "x-string": input.headerString! }),
    ...(isSerializableHeaderValue(input.headerByte) && { "x-byte": input.headerByte!.toString() }),
    ...(isSerializableHeaderValue(input.headerShort) && { "x-short": input.headerShort!.toString() }),
    ...(isSerializableHeaderValue(input.headerInteger) && { "x-integer": input.headerInteger!.toString() }),
    ...(isSerializableHeaderValue(input.headerLong) && { "x-long": input.headerLong!.toString() }),
    ...(isSerializableHeaderValue(input.headerFloat) && {
      "x-float": input.headerFloat! % 1 == 0 ? input.headerFloat! + ".0" : input.headerFloat!.toString(),
    }),
    ...(isSerializableHeaderValue(input.headerDouble) && {
      "x-double": input.headerDouble! % 1 == 0 ? input.headerDouble! + ".0" : input.headerDouble!.toString(),
    }),
    ...(isSerializableHeaderValue(input.headerTrueBool) && { "x-boolean1": input.headerTrueBool!.toString() }),
    ...(isSerializableHeaderValue(input.headerFalseBool) && { "x-boolean2": input.headerFalseBool!.toString() }),
    ...(isSerializableHeaderValue(input.headerStringList) && {
      "x-stringlist": (input.headerStringList! || []).map((_entry) => _entry).join(", "),
    }),
    ...(isSerializableHeaderValue(input.headerStringSet) && {
      "x-stringset": (Array.from(input.headerStringSet!.values()) || []).map((_entry) => _entry).join(", "),
    }),
    ...(isSerializableHeaderValue(input.headerIntegerList) && {
      "x-integerlist": (input.headerIntegerList! || []).map((_entry) => _entry.toString()).join(", "),
    }),
    ...(isSerializableHeaderValue(input.headerBooleanList) && {
      "x-booleanlist": (input.headerBooleanList! || []).map((_entry) => _entry.toString()).join(", "),
    }),
    ...(isSerializableHeaderValue(input.headerTimestampList) && {
      "x-timestamplist": (input.headerTimestampList! || [])
        .map((_entry) => __dateToUtcString(_entry).toString())
        .join(", "),
    }),
    ...(isSerializableHeaderValue(input.headerEnum) && { "x-enum": input.headerEnum! }),
    ...(isSerializableHeaderValue(input.headerEnumList) && {
      "x-enumlist": (input.headerEnumList! || []).map((_entry) => _entry).join(", "),
    }),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeJsonBlobsResponse = async (
  input: JsonBlobsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeJsonEnumsResponse = async (
  input: JsonEnumsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.fooEnum1 !== undefined && input.fooEnum1 !== null && { fooEnum1: input.fooEnum1 }),
    ...(input.fooEnum2 !== undefined && input.fooEnum2 !== null && { fooEnum2: input.fooEnum2 }),
    ...(input.fooEnum3 !== undefined && input.fooEnum3 !== null && { fooEnum3: input.fooEnum3 }),
    ...(input.fooEnumList !== undefined &&
      input.fooEnumList !== null && { fooEnumList: serializeAws_restJson1FooEnumList(input.fooEnumList, context) }),
    ...(input.fooEnumMap !== undefined &&
      input.fooEnumMap !== null && { fooEnumMap: serializeAws_restJson1FooEnumMap(input.fooEnumMap, context) }),
    ...(input.fooEnumSet !== undefined &&
      input.fooEnumSet !== null && { fooEnumSet: serializeAws_restJson1FooEnumSet(input.fooEnumSet, context) }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeJsonListsResponse = async (
  input: JsonListsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.booleanList !== undefined &&
      input.booleanList !== null && { booleanList: serializeAws_restJson1BooleanList(input.booleanList, context) }),
    ...(input.enumList !== undefined &&
      input.enumList !== null && { enumList: serializeAws_restJson1FooEnumList(input.enumList, context) }),
    ...(input.integerList !== undefined &&
      input.integerList !== null && { integerList: serializeAws_restJson1IntegerList(input.integerList, context) }),
    ...(input.nestedStringList !== undefined &&
      input.nestedStringList !== null && {
        nestedStringList: serializeAws_restJson1NestedStringList(input.nestedStringList, context),
      }),
    ...(input.sparseStringList !== undefined &&
      input.sparseStringList !== null && {
        sparseStringList: serializeAws_restJson1SparseStringList(input.sparseStringList, context),
      }),
    ...(input.stringList !== undefined &&
      input.stringList !== null && { stringList: serializeAws_restJson1StringList(input.stringList, context) }),
    ...(input.stringSet !== undefined &&
      input.stringSet !== null && { stringSet: serializeAws_restJson1StringSet(input.stringSet, context) }),
    ...(input.structureList !== undefined &&
      input.structureList !== null && {
        myStructureList: serializeAws_restJson1StructureList(input.structureList, context),
      }),
    ...(input.timestampList !== undefined &&
      input.timestampList !== null && {
        timestampList: serializeAws_restJson1TimestampList(input.timestampList, context),
      }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeJsonMapsResponse = async (
  input: JsonMapsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.denseBooleanMap !== undefined &&
      input.denseBooleanMap !== null && {
        denseBooleanMap: serializeAws_restJson1DenseBooleanMap(input.denseBooleanMap, context),
      }),
    ...(input.denseNumberMap !== undefined &&
      input.denseNumberMap !== null && {
        denseNumberMap: serializeAws_restJson1DenseNumberMap(input.denseNumberMap, context),
      }),
    ...(input.denseSetMap !== undefined &&
      input.denseSetMap !== null && { denseSetMap: serializeAws_restJson1DenseSetMap(input.denseSetMap, context) }),
    ...(input.denseStringMap !== undefined &&
      input.denseStringMap !== null && {
        denseStringMap: serializeAws_restJson1DenseStringMap(input.denseStringMap, context),
      }),
    ...(input.denseStructMap !== undefined &&
      input.denseStructMap !== null && {
        denseStructMap: serializeAws_restJson1DenseStructMap(input.denseStructMap, context),
      }),
    ...(input.sparseBooleanMap !== undefined &&
      input.sparseBooleanMap !== null && {
        sparseBooleanMap: serializeAws_restJson1SparseBooleanMap(input.sparseBooleanMap, context),
      }),
    ...(input.sparseNumberMap !== undefined &&
      input.sparseNumberMap !== null && {
        sparseNumberMap: serializeAws_restJson1SparseNumberMap(input.sparseNumberMap, context),
      }),
    ...(input.sparseSetMap !== undefined &&
      input.sparseSetMap !== null && { sparseSetMap: serializeAws_restJson1SparseSetMap(input.sparseSetMap, context) }),
    ...(input.sparseStringMap !== undefined &&
      input.sparseStringMap !== null && {
        sparseStringMap: serializeAws_restJson1SparseStringMap(input.sparseStringMap, context),
      }),
    ...(input.sparseStructMap !== undefined &&
      input.sparseStructMap !== null && {
        sparseStructMap: serializeAws_restJson1SparseStructMap(input.sparseStructMap, context),
      }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeJsonTimestampsResponse = async (
  input: JsonTimestampsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.dateTime !== undefined &&
      input.dateTime !== null && { dateTime: input.dateTime.toISOString().split(".")[0] + "Z" }),
    ...(input.epochSeconds !== undefined &&
      input.epochSeconds !== null && { epochSeconds: Math.round(input.epochSeconds.getTime() / 1000) }),
    ...(input.httpDate !== undefined && input.httpDate !== null && { httpDate: __dateToUtcString(input.httpDate) }),
    ...(input.normal !== undefined && input.normal !== null && { normal: Math.round(input.normal.getTime() / 1000) }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeJsonUnionsResponse = async (
  input: JsonUnionsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.contents !== undefined &&
      input.contents !== null && { contents: serializeAws_restJson1MyUnion(input.contents, context) }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeMediaTypeHeaderResponse = async (
  input: MediaTypeHeaderServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.json) && {
      "x-json": Buffer.from(__LazyJsonString.fromObject(input.json!)).toString("base64"),
    }),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeNoInputAndNoOutputResponse = async (
  input: NoInputAndNoOutputServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeNoInputAndOutputResponse = async (
  input: NoInputAndOutputServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeNullAndEmptyHeadersClientResponse = async (
  input: NullAndEmptyHeadersClientServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.a) && { "x-a": input.a! }),
    ...(isSerializableHeaderValue(input.b) && { "x-b": input.b! }),
    ...(isSerializableHeaderValue(input.c) && { "x-c": (input.c! || []).map((_entry) => _entry).join(", ") }),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeNullAndEmptyHeadersServerResponse = async (
  input: NullAndEmptyHeadersServerServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.a) && { "x-a": input.a! }),
    ...(isSerializableHeaderValue(input.b) && { "x-b": input.b! }),
    ...(isSerializableHeaderValue(input.c) && { "x-c": (input.c! || []).map((_entry) => _entry).join(", ") }),
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeOmitsNullSerializesEmptyStringResponse = async (
  input: OmitsNullSerializesEmptyStringServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeQueryIdempotencyTokenAutoFillResponse = async (
  input: QueryIdempotencyTokenAutoFillServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeQueryParamsAsStringListMapResponse = async (
  input: QueryParamsAsStringListMapServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeQueryPrecedenceResponse = async (
  input: QueryPrecedenceServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {};
  let body: any;
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeRecursiveShapesResponse = async (
  input: RecursiveShapesServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.nested !== undefined &&
      input.nested !== null && {
        nested: serializeAws_restJson1RecursiveShapesInputOutputNested1(input.nested, context),
      }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeSimpleScalarPropertiesResponse = async (
  input: SimpleScalarPropertiesServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.byteValue !== undefined && input.byteValue !== null && { byteValue: input.byteValue }),
    ...(input.doubleValue !== undefined &&
      input.doubleValue !== null && { DoubleDribble: __serializeFloat(input.doubleValue) }),
    ...(input.falseBooleanValue !== undefined &&
      input.falseBooleanValue !== null && { falseBooleanValue: input.falseBooleanValue }),
    ...(input.floatValue !== undefined &&
      input.floatValue !== null && { floatValue: __serializeFloat(input.floatValue) }),
    ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
    ...(input.longValue !== undefined && input.longValue !== null && { longValue: input.longValue }),
    ...(input.shortValue !== undefined && input.shortValue !== null && { shortValue: input.shortValue }),
    ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    ...(input.trueBooleanValue !== undefined &&
      input.trueBooleanValue !== null && { trueBooleanValue: input.trueBooleanValue }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeStreamingTraitsResponse = async (
  input: StreamingTraitsServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeStreamingTraitsRequireLengthResponse = async (
  input: StreamingTraitsRequireLengthServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeStreamingTraitsWithMediaTypeResponse = async (
  input: StreamingTraitsWithMediaTypeServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeTimestampFormatHeadersResponse = async (
  input: TimestampFormatHeadersServerOutput,
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
  let statusCode: number = 200;
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.memberEpochSeconds) && {
      "x-memberepochseconds": Math.round(input.memberEpochSeconds!.getTime() / 1000).toString(),
    }),
    ...(isSerializableHeaderValue(input.memberHttpDate) && {
      "x-memberhttpdate": __dateToUtcString(input.memberHttpDate!).toString(),
    }),
    ...(isSerializableHeaderValue(input.memberDateTime) && {
      "x-memberdatetime": (input.memberDateTime!.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(isSerializableHeaderValue(input.defaultFormat) && {
      "x-defaultformat": __dateToUtcString(input.defaultFormat!).toString(),
    }),
    ...(isSerializableHeaderValue(input.targetEpochSeconds) && {
      "x-targetepochseconds": Math.round(input.targetEpochSeconds!.getTime() / 1000).toString(),
    }),
    ...(isSerializableHeaderValue(input.targetHttpDate) && {
      "x-targethttpdate": __dateToUtcString(input.targetHttpDate!).toString(),
    }),
    ...(isSerializableHeaderValue(input.targetDateTime) && {
      "x-targetdatetime": (input.targetDateTime!.toISOString().split(".")[0] + "Z").toString(),
    }),
  };
  let body: any;
  body = "{}";
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
      const statusCode: number = 500;
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
    case "SerializationException": {
      const statusCode: number = 400;
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
      const statusCode: number = 404;
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
  }
};

export const serializeComplexErrorError = async (
  input: ComplexError,
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
  const statusCode: number = 403;
  const headers: any = {
    "content-type": "application/json",
    "x-amzn-errortype": "ComplexError",
    ...(isSerializableHeaderValue(input.Header) && { "x-header": input.Header! }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Nested !== undefined &&
      input.Nested !== null && { Nested: serializeAws_restJson1ComplexNestedErrorData(input.Nested, context) }),
    ...(input.TopLevel !== undefined && input.TopLevel !== null && { TopLevel: input.TopLevel }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeFooErrorError = async (input: FooError, ctx: ServerSerdeContext): Promise<__HttpResponse> => {
  const context: __SerdeContext = {
    ...ctx,
    endpoint: () =>
      Promise.resolve({
        protocol: "",
        hostname: "",
        path: "",
      }),
  };
  const statusCode: number = 500;
  const headers: any = {
    "content-type": "application/json",
    "x-amzn-errortype": "FooError",
  };
  let body: any;
  body = "{}";
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

export const serializeInvalidGreetingError = async (
  input: InvalidGreeting,
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
  const statusCode: number = 400;
  const headers: any = {
    "content-type": "application/json",
    "x-amzn-errortype": "InvalidGreeting",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
  });
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

const serializeAws_restJson1ComplexNestedErrorData = (input: ComplexNestedErrorData, context: __SerdeContext): any => {
  return {
    ...(input.Foo !== undefined && input.Foo !== null && { Fooooo: input.Foo }),
  };
};

const serializeAws_restJson1DenseBooleanMap = (input: { [key: string]: boolean }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1DenseNumberMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1DenseSetMap = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1StringSet(value, context),
    };
  }, {});
};

const serializeAws_restJson1DenseStringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1DenseStructMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1GreetingStruct(value, context),
    };
  }, {});
};

const serializeAws_restJson1Document = (input: __DocumentType.Value, context: __SerdeContext): any => {
  return input;
};

const serializeAws_restJson1MyUnion = (input: MyUnion, context: __SerdeContext): any => {
  return MyUnion.visit(input, {
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    enumValue: (value) => ({ enumValue: value }),
    listValue: (value) => ({ listValue: serializeAws_restJson1StringList(value, context) }),
    mapValue: (value) => ({ mapValue: serializeAws_restJson1StringMap(value, context) }),
    numberValue: (value) => ({ numberValue: value }),
    renamedStructureValue: (value) => ({
      renamedStructureValue: serializeAws_restJson1RenamedGreeting(value, context),
    }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: serializeAws_restJson1GreetingStruct(value, context) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NestedPayload = (input: NestedPayload, context: __SerdeContext): any => {
  return {
    ...(input.greeting !== undefined && input.greeting !== null && { greeting: input.greeting }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  return {
    ...(input.foo !== undefined && input.foo !== null && { foo: input.foo }),
    ...(input.nested !== undefined &&
      input.nested !== null && {
        nested: serializeAws_restJson1RecursiveShapesInputOutputNested2(input.nested, context),
      }),
  };
};

const serializeAws_restJson1RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  return {
    ...(input.bar !== undefined && input.bar !== null && { bar: input.bar }),
    ...(input.recursiveMember !== undefined &&
      input.recursiveMember !== null && {
        recursiveMember: serializeAws_restJson1RecursiveShapesInputOutputNested1(input.recursiveMember, context),
      }),
  };
};

const serializeAws_restJson1SparseBooleanMap = (input: { [key: string]: boolean }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1SparseNumberMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1SparseSetMap = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1StringSet(value, context),
    };
  }, {});
};

const serializeAws_restJson1SparseStructMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1GreetingStruct(value, context),
    };
  }, {});
};

const serializeAws_restJson1StructureList = (input: StructureListMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StructureListMember(entry, context);
    });
};

const serializeAws_restJson1StructureListMember = (input: StructureListMember, context: __SerdeContext): any => {
  return {
    ...(input.a !== undefined && input.a !== null && { value: input.a }),
    ...(input.b !== undefined && input.b !== null && { other: input.b }),
  };
};

const serializeAws_restJson1RenamedGreeting = (input: RenamedGreeting, context: __SerdeContext): any => {
  return {
    ...(input.salutation !== undefined && input.salutation !== null && { salutation: input.salutation }),
  };
};

const serializeAws_restJson1BooleanList = (input: boolean[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FooEnumMap = (input: { [key: string]: FooEnum | string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1FooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return {
    ...(input.hi !== undefined && input.hi !== null && { hi: input.hi }),
  };
};

const serializeAws_restJson1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1NestedStringList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StringList(entry, context);
    });
};

const serializeAws_restJson1SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    if (entry === null) {
      return null as any;
    }
    return entry;
  });
};

const serializeAws_restJson1SparseStringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1StringSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return Math.round(entry.getTime() / 1000);
    });
};

const deserializeAws_restJson1DenseBooleanMap = (output: any, context: __SerdeContext): { [key: string]: boolean } => {
  return Object.entries(output).reduce((acc: { [key: string]: boolean }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectBoolean(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1DenseNumberMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectNumber(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1DenseSetMap = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1StringSet(value, context),
    };
  }, {});
};

const deserializeAws_restJson1DenseStringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1DenseStructMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  return Object.entries(output).reduce((acc: { [key: string]: GreetingStruct }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1GreetingStruct(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Document = (output: any, context: __SerdeContext): __DocumentType.Value => {
  return output;
};

const deserializeAws_restJson1MyUnion = (output: any, context: __SerdeContext): MyUnion => {
  if (output.blobValue !== undefined && output.blobValue !== null) {
    return {
      blobValue: context.base64Decoder(output.blobValue),
    };
  }
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any };
  }
  if (__expectString(output.enumValue) !== undefined) {
    return { enumValue: __expectString(output.enumValue) as any };
  }
  if (output.listValue !== undefined && output.listValue !== null) {
    return {
      listValue: deserializeAws_restJson1StringList(output.listValue, context),
    };
  }
  if (output.mapValue !== undefined && output.mapValue !== null) {
    return {
      mapValue: deserializeAws_restJson1StringMap(output.mapValue, context),
    };
  }
  if (__expectNumber(output.numberValue) !== undefined) {
    return { numberValue: __expectNumber(output.numberValue) as any };
  }
  if (output.renamedStructureValue !== undefined && output.renamedStructureValue !== null) {
    return {
      renamedStructureValue: deserializeAws_restJson1RenamedGreeting(output.renamedStructureValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structureValue !== undefined && output.structureValue !== null) {
    return {
      structureValue: deserializeAws_restJson1GreetingStruct(output.structureValue, context),
    };
  }
  if (output.timestampValue !== undefined && output.timestampValue !== null) {
    return {
      timestampValue: new Date(Math.round(output.timestampValue * 1000)),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NestedPayload = (output: any, context: __SerdeContext): NestedPayload => {
  return {
    greeting: __expectString(output.greeting),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1RecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  return {
    foo: __expectString(output.foo),
    nested:
      output.nested !== undefined && output.nested !== null
        ? deserializeAws_restJson1RecursiveShapesInputOutputNested2(output.nested, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  return {
    bar: __expectString(output.bar),
    recursiveMember:
      output.recursiveMember !== undefined && output.recursiveMember !== null
        ? deserializeAws_restJson1RecursiveShapesInputOutputNested1(output.recursiveMember, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SparseBooleanMap = (output: any, context: __SerdeContext): { [key: string]: boolean } => {
  return Object.entries(output).reduce((acc: { [key: string]: boolean }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: __expectBoolean(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1SparseNumberMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: __expectNumber(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1SparseSetMap = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1StringSet(value, context),
    };
  }, {});
};

const deserializeAws_restJson1SparseStructMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  return Object.entries(output).reduce((acc: { [key: string]: GreetingStruct }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1GreetingStruct(value, context),
    };
  }, {});
};

const deserializeAws_restJson1StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StructureListMember(entry, context);
    });
};

const deserializeAws_restJson1StructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
  return {
    a: __expectString(output.value),
    b: __expectString(output.other),
  } as any;
};

const deserializeAws_restJson1RenamedGreeting = (output: any, context: __SerdeContext): RenamedGreeting => {
  return {
    salutation: __expectString(output.salutation),
  } as any;
};

const deserializeAws_restJson1BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectBoolean(entry) as any;
    });
};

const deserializeAws_restJson1FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1FooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  return Object.entries(output).reduce((acc: { [key: string]: FooEnum | string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return {
    hi: __expectString(output.hi),
  } as any;
};

const deserializeAws_restJson1IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNumber(entry) as any;
    });
};

const deserializeAws_restJson1NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StringList(entry, context);
    });
};

const deserializeAws_restJson1SparseStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
};

const deserializeAws_restJson1SparseStringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1StringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TimestampList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return new Date(Math.round(entry * 1000));
    });
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
