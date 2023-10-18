// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
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
  dateToUtcString as __dateToUtcString,
  expectBoolean as __expectBoolean,
  expectByte as __expectByte,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectShort as __expectShort,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  serializeFloat as __serializeFloat,
  splitEvery as __splitEvery,
  strictParseByte as __strictParseByte,
  strictParseDouble as __strictParseDouble,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  strictParseShort as __strictParseShort,
  take,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-node";

import {
  ComplexError,
  ComplexNestedErrorData,
  FooEnum,
  FooError,
  GreetingStruct,
  IntegerEnum,
  InvalidGreeting,
  MyUnion,
  NestedPayload,
  PayloadConfig,
  PlayerAction,
  RecursiveShapesInputOutputNested1,
  RecursiveShapesInputOutputNested2,
  RenamedGreeting,
  SimpleUnion,
  StructureListMember,
  TestConfig,
  UnionPayload,
  UnionWithJsonName,
  Unit,
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
import { DatetimeOffsetsServerInput, DatetimeOffsetsServerOutput } from "../server/operations/DatetimeOffsets";
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
import { FractionalSecondsServerInput, FractionalSecondsServerOutput } from "../server/operations/FractionalSeconds";
import { GreetingWithErrorsServerInput, GreetingWithErrorsServerOutput } from "../server/operations/GreetingWithErrors";
import {
  HostWithPathOperationServerInput,
  HostWithPathOperationServerOutput,
} from "../server/operations/HostWithPathOperation";
import {
  HttpChecksumRequiredServerInput,
  HttpChecksumRequiredServerOutput,
} from "../server/operations/HttpChecksumRequired";
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
import {
  HttpPayloadWithUnionServerInput,
  HttpPayloadWithUnionServerOutput,
} from "../server/operations/HttpPayloadWithUnion";
import { HttpPrefixHeadersServerInput, HttpPrefixHeadersServerOutput } from "../server/operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersInResponseServerInput,
  HttpPrefixHeadersInResponseServerOutput,
} from "../server/operations/HttpPrefixHeadersInResponse";
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
import {
  HttpRequestWithRegexLiteralServerInput,
  HttpRequestWithRegexLiteralServerOutput,
} from "../server/operations/HttpRequestWithRegexLiteral";
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
import { JsonIntEnumsServerInput, JsonIntEnumsServerOutput } from "../server/operations/JsonIntEnums";
import { JsonListsServerInput, JsonListsServerOutput } from "../server/operations/JsonLists";
import { JsonMapsServerInput, JsonMapsServerOutput } from "../server/operations/JsonMaps";
import { JsonTimestampsServerInput, JsonTimestampsServerOutput } from "../server/operations/JsonTimestamps";
import { JsonUnionsServerInput, JsonUnionsServerOutput } from "../server/operations/JsonUnions";
import {
  MalformedAcceptWithBodyServerInput,
  MalformedAcceptWithBodyServerOutput,
} from "../server/operations/MalformedAcceptWithBody";
import {
  MalformedAcceptWithGenericStringServerInput,
  MalformedAcceptWithGenericStringServerOutput,
} from "../server/operations/MalformedAcceptWithGenericString";
import {
  MalformedAcceptWithPayloadServerInput,
  MalformedAcceptWithPayloadServerOutput,
} from "../server/operations/MalformedAcceptWithPayload";
import { MalformedBlobServerInput, MalformedBlobServerOutput } from "../server/operations/MalformedBlob";
import { MalformedBooleanServerInput, MalformedBooleanServerOutput } from "../server/operations/MalformedBoolean";
import { MalformedByteServerInput, MalformedByteServerOutput } from "../server/operations/MalformedByte";
import {
  MalformedContentTypeWithBodyServerInput,
  MalformedContentTypeWithBodyServerOutput,
} from "../server/operations/MalformedContentTypeWithBody";
import {
  MalformedContentTypeWithGenericStringServerInput,
  MalformedContentTypeWithGenericStringServerOutput,
} from "../server/operations/MalformedContentTypeWithGenericString";
import {
  MalformedContentTypeWithoutBodyServerInput,
  MalformedContentTypeWithoutBodyServerOutput,
} from "../server/operations/MalformedContentTypeWithoutBody";
import {
  MalformedContentTypeWithPayloadServerInput,
  MalformedContentTypeWithPayloadServerOutput,
} from "../server/operations/MalformedContentTypeWithPayload";
import { MalformedDoubleServerInput, MalformedDoubleServerOutput } from "../server/operations/MalformedDouble";
import { MalformedFloatServerInput, MalformedFloatServerOutput } from "../server/operations/MalformedFloat";
import { MalformedIntegerServerInput, MalformedIntegerServerOutput } from "../server/operations/MalformedInteger";
import { MalformedListServerInput, MalformedListServerOutput } from "../server/operations/MalformedList";
import { MalformedLongServerInput, MalformedLongServerOutput } from "../server/operations/MalformedLong";
import { MalformedMapServerInput, MalformedMapServerOutput } from "../server/operations/MalformedMap";
import {
  MalformedRequestBodyServerInput,
  MalformedRequestBodyServerOutput,
} from "../server/operations/MalformedRequestBody";
import { MalformedShortServerInput, MalformedShortServerOutput } from "../server/operations/MalformedShort";
import { MalformedStringServerInput, MalformedStringServerOutput } from "../server/operations/MalformedString";
import {
  MalformedTimestampBodyDateTimeServerInput,
  MalformedTimestampBodyDateTimeServerOutput,
} from "../server/operations/MalformedTimestampBodyDateTime";
import {
  MalformedTimestampBodyDefaultServerInput,
  MalformedTimestampBodyDefaultServerOutput,
} from "../server/operations/MalformedTimestampBodyDefault";
import {
  MalformedTimestampBodyHttpDateServerInput,
  MalformedTimestampBodyHttpDateServerOutput,
} from "../server/operations/MalformedTimestampBodyHttpDate";
import {
  MalformedTimestampHeaderDateTimeServerInput,
  MalformedTimestampHeaderDateTimeServerOutput,
} from "../server/operations/MalformedTimestampHeaderDateTime";
import {
  MalformedTimestampHeaderDefaultServerInput,
  MalformedTimestampHeaderDefaultServerOutput,
} from "../server/operations/MalformedTimestampHeaderDefault";
import {
  MalformedTimestampHeaderEpochServerInput,
  MalformedTimestampHeaderEpochServerOutput,
} from "../server/operations/MalformedTimestampHeaderEpoch";
import {
  MalformedTimestampPathDefaultServerInput,
  MalformedTimestampPathDefaultServerOutput,
} from "../server/operations/MalformedTimestampPathDefault";
import {
  MalformedTimestampPathEpochServerInput,
  MalformedTimestampPathEpochServerOutput,
} from "../server/operations/MalformedTimestampPathEpoch";
import {
  MalformedTimestampPathHttpDateServerInput,
  MalformedTimestampPathHttpDateServerOutput,
} from "../server/operations/MalformedTimestampPathHttpDate";
import {
  MalformedTimestampQueryDefaultServerInput,
  MalformedTimestampQueryDefaultServerOutput,
} from "../server/operations/MalformedTimestampQueryDefault";
import {
  MalformedTimestampQueryEpochServerInput,
  MalformedTimestampQueryEpochServerOutput,
} from "../server/operations/MalformedTimestampQueryEpoch";
import {
  MalformedTimestampQueryHttpDateServerInput,
  MalformedTimestampQueryHttpDateServerOutput,
} from "../server/operations/MalformedTimestampQueryHttpDate";
import { MalformedUnionServerInput, MalformedUnionServerOutput } from "../server/operations/MalformedUnion";
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
  OmitsSerializingEmptyListsServerInput,
  OmitsSerializingEmptyListsServerOutput,
} from "../server/operations/OmitsSerializingEmptyLists";
import { PostPlayerActionServerInput, PostPlayerActionServerOutput } from "../server/operations/PostPlayerAction";
import {
  PostUnionWithJsonNameServerInput,
  PostUnionWithJsonNameServerOutput,
} from "../server/operations/PostUnionWithJsonName";
import {
  PutWithContentEncodingServerInput,
  PutWithContentEncodingServerOutput,
} from "../server/operations/PutWithContentEncoding";
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
import { TestBodyStructureServerInput, TestBodyStructureServerOutput } from "../server/operations/TestBodyStructure";
import { TestNoPayloadServerInput, TestNoPayloadServerOutput } from "../server/operations/TestNoPayload";
import { TestPayloadBlobServerInput, TestPayloadBlobServerOutput } from "../server/operations/TestPayloadBlob";
import {
  TestPayloadStructureServerInput,
  TestPayloadStructureServerOutput,
} from "../server/operations/TestPayloadStructure";
import {
  TimestampFormatHeadersServerInput,
  TimestampFormatHeadersServerOutput,
} from "../server/operations/TimestampFormatHeaders";
import { UnitInputAndOutputServerInput, UnitInputAndOutputServerOutput } from "../server/operations/UnitInputAndOutput";

export const deserializeAllQueryStringTypesRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<AllQueryStringTypesServerInput> => {
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
    if (query["String"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["String"])) {
        if (query["String"].length === 1) {
          queryValue = query["String"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["String"] as string;
      }
      contents.queryString = queryValue;
    }
    if (query["StringList"] !== undefined) {
      const queryValue = Array.isArray(query["StringList"])
        ? (query["StringList"] as string[])
        : [query["StringList"] as string];
      contents.queryStringList = queryValue.map((_entry) => _entry as any);
    }
    if (query["StringSet"] !== undefined) {
      const queryValue = Array.isArray(query["StringSet"])
        ? (query["StringSet"] as string[])
        : [query["StringSet"] as string];
      contents.queryStringSet = queryValue.map((_entry) => _entry as any);
    }
    if (query["Byte"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Byte"])) {
        if (query["Byte"].length === 1) {
          queryValue = query["Byte"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Byte"] as string;
      }
      contents.queryByte = __strictParseByte(queryValue);
    }
    if (query["Short"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Short"])) {
        if (query["Short"].length === 1) {
          queryValue = query["Short"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Short"] as string;
      }
      contents.queryShort = __strictParseShort(queryValue);
    }
    if (query["Integer"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Integer"])) {
        if (query["Integer"].length === 1) {
          queryValue = query["Integer"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Integer"] as string;
      }
      contents.queryInteger = __strictParseInt32(queryValue);
    }
    if (query["IntegerList"] !== undefined) {
      const queryValue = Array.isArray(query["IntegerList"])
        ? (query["IntegerList"] as string[])
        : [query["IntegerList"] as string];
      contents.queryIntegerList = queryValue.map((_entry) => __strictParseInt32(_entry) as any);
    }
    if (query["IntegerSet"] !== undefined) {
      const queryValue = Array.isArray(query["IntegerSet"])
        ? (query["IntegerSet"] as string[])
        : [query["IntegerSet"] as string];
      contents.queryIntegerSet = queryValue.map((_entry) => __strictParseInt32(_entry) as any);
    }
    if (query["Long"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Long"])) {
        if (query["Long"].length === 1) {
          queryValue = query["Long"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Long"] as string;
      }
      contents.queryLong = __strictParseLong(queryValue);
    }
    if (query["Float"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Float"])) {
        if (query["Float"].length === 1) {
          queryValue = query["Float"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Float"] as string;
      }
      contents.queryFloat = __strictParseFloat(queryValue);
    }
    if (query["Double"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Double"])) {
        if (query["Double"].length === 1) {
          queryValue = query["Double"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Double"] as string;
      }
      contents.queryDouble = __strictParseDouble(queryValue);
    }
    if (query["DoubleList"] !== undefined) {
      const queryValue = Array.isArray(query["DoubleList"])
        ? (query["DoubleList"] as string[])
        : [query["DoubleList"] as string];
      contents.queryDoubleList = queryValue.map((_entry) => __strictParseDouble(_entry) as any);
    }
    if (query["Boolean"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Boolean"])) {
        if (query["Boolean"].length === 1) {
          queryValue = query["Boolean"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Boolean"] as string;
      }
      contents.queryBoolean = __parseBoolean(queryValue);
    }
    if (query["BooleanList"] !== undefined) {
      const queryValue = Array.isArray(query["BooleanList"])
        ? (query["BooleanList"] as string[])
        : [query["BooleanList"] as string];
      contents.queryBooleanList = queryValue.map((_entry) => __parseBoolean(_entry) as any);
    }
    if (query["Timestamp"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Timestamp"])) {
        if (query["Timestamp"].length === 1) {
          queryValue = query["Timestamp"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Timestamp"] as string;
      }
      contents.queryTimestamp = __expectNonNull(__parseRfc3339DateTime(queryValue));
    }
    if (query["TimestampList"] !== undefined) {
      const queryValue = Array.isArray(query["TimestampList"])
        ? (query["TimestampList"] as string[])
        : [query["TimestampList"] as string];
      contents.queryTimestampList = queryValue.map((_entry) => __expectNonNull(__parseRfc3339DateTime(_entry)) as any);
    }
    if (query["Enum"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Enum"])) {
        if (query["Enum"].length === 1) {
          queryValue = query["Enum"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Enum"] as string;
      }
      contents.queryEnum = queryValue;
    }
    if (query["EnumList"] !== undefined) {
      const queryValue = Array.isArray(query["EnumList"])
        ? (query["EnumList"] as string[])
        : [query["EnumList"] as string];
      contents.queryEnumList = queryValue.map((_entry) => _entry as any);
    }
    if (query["IntegerEnum"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["IntegerEnum"])) {
        if (query["IntegerEnum"].length === 1) {
          queryValue = query["IntegerEnum"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["IntegerEnum"] as string;
      }
      contents.queryIntegerEnum = __strictParseInt32(queryValue);
    }
    if (query["IntegerEnumList"] !== undefined) {
      const queryValue = Array.isArray(query["IntegerEnumList"])
        ? (query["IntegerEnumList"] as string[])
        : [query["IntegerEnumList"] as string];
      contents.queryIntegerEnumList = queryValue.map((_entry) => __strictParseInt32(_entry) as any);
    }
    const parsedQuery: Record<string, string[]> = {};
    for (const [key, value] of Object.entries(query)) {
      let queryValue: string;
      const valueArray = Array.isArray(value) ? (value as string[]) : [value as string];
      parsedQuery[key] = valueArray.map((_entry) => _entry as any);
    }
    contents.queryParamsMapOfStringList = parsedQuery;
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeConstantAndVariableQueryStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringServerInput> => {
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
    if (query["baz"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["baz"])) {
        if (query["baz"].length === 1) {
          queryValue = query["baz"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["baz"] as string;
      }
      contents.baz = queryValue;
    }
    if (query["maybeSet"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["maybeSet"])) {
        if (query["maybeSet"].length === 1) {
          queryValue = query["maybeSet"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["maybeSet"] as string;
      }
      contents.maybeSet = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeConstantQueryStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<ConstantQueryStringServerInput> => {
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
  const pathRegex = new RegExp("/ConstantQueryString/(?<hello>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.hello = decodeURIComponent(parsedPath.groups.hello);
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeDatetimeOffsetsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<DatetimeOffsetsServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeDocumentTypeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<DocumentTypeServerInput> => {
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
    documentValue: (_) => de_Document(_, context),
    stringValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeDocumentTypeAsPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadServerInput> => {
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
  const data: any = await collectBodyString(output.body, context);
  contents.documentValue = data;
  contents.documentValue = JSON.parse(data);
  return contents;
};

export const deserializeEmptyInputAndEmptyOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputServerInput> => {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeEndpointOperationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<EndpointOperationServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeEndpointWithHostLabelOperationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationServerInput> => {
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
  const hostRegex = new RegExp("^foo\\.(?<label>.*)\\.");
  const parsedHost = output.path.match(hostRegex);
  if (parsedHost?.groups !== undefined) {
    contents.label = parsedHost.groups.label;
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    label: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeFractionalSecondsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<FractionalSecondsServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeGreetingWithErrorsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<GreetingWithErrorsServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHostWithPathOperationRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HostWithPathOperationServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpChecksumRequiredRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpChecksumRequiredServerInput> => {
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
    foo: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeHttpEnumPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpEnumPayloadServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "text/plain") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "text/plain")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

export const deserializeHttpPayloadTraitsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadTraitsServerInput> => {
  const contents: any = map({
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

export const deserializeHttpPayloadTraitsWithMediaTypeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "text/plain") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "text/plain")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

export const deserializeHttpPayloadWithStructureRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureServerInput> => {
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_NestedPayload(data, context);
  return contents;
};

export const deserializeHttpPayloadWithUnionRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPayloadWithUnionServerInput> => {
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
  const data: Record<string, any> | undefined = __expectUnion(await parseBody(output.body, context));
  contents.nested = de_UnionPayload(data, context);
  return contents;
};

export const deserializeHttpPrefixHeadersRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPrefixHeadersServerInput> => {
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
    foo: [, output.headers["x-foo"]],
    fooMap: [
      ,
      Object.keys(output.headers)
        .filter((header) => header.startsWith("x-foo-"))
        .reduce((acc, header) => {
          acc[header.substring(6)] = output.headers[header];
          return acc;
        }, {} as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpPrefixHeadersInResponseRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpPrefixHeadersInResponseServerInput> => {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpRequestWithFloatLabelsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsServerInput> => {
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
  const pathRegex = new RegExp("/FloatHttpLabels/(?<float>[^/]+)/(?<double>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.float = __strictParseFloat(decodeURIComponent(parsedPath.groups.float));
    contents.double = __strictParseDouble(decodeURIComponent(parsedPath.groups.double));
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpRequestWithGreedyLabelInPathRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathServerInput> => {
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
  const pathRegex = new RegExp("/HttpRequestWithGreedyLabelInPath/foo/(?<foo>[^/]+)/baz/(?<baz>.+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.foo = decodeURIComponent(parsedPath.groups.foo);
    contents.baz = decodeURIComponent(parsedPath.groups.baz);
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpRequestWithLabelsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsServerInput> => {
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
  const pathRegex = new RegExp(
    "/HttpRequestWithLabels/(?<string>[^/]+)/(?<short>[^/]+)/(?<integer>[^/]+)/(?<long>[^/]+)/(?<float>[^/]+)/(?<double>[^/]+)/(?<boolean>[^/]+)/(?<timestamp>[^/]+)"
  );
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.string = decodeURIComponent(parsedPath.groups.string);
    contents.short = __strictParseShort(decodeURIComponent(parsedPath.groups.short));
    contents.integer = __strictParseInt32(decodeURIComponent(parsedPath.groups.integer));
    contents.long = __strictParseLong(decodeURIComponent(parsedPath.groups.long));
    contents.float = __strictParseFloat(decodeURIComponent(parsedPath.groups.float));
    contents.double = __strictParseDouble(decodeURIComponent(parsedPath.groups.double));
    contents.boolean = __parseBoolean(decodeURIComponent(parsedPath.groups.boolean));
    contents.timestamp = __expectNonNull(__parseRfc3339DateTime(decodeURIComponent(parsedPath.groups.timestamp)));
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpRequestWithLabelsAndTimestampFormatRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatServerInput> => {
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
  const pathRegex = new RegExp(
    "/HttpRequestWithLabelsAndTimestampFormat/(?<memberEpochSeconds>[^/]+)/(?<memberHttpDate>[^/]+)/(?<memberDateTime>[^/]+)/(?<defaultFormat>[^/]+)/(?<targetEpochSeconds>[^/]+)/(?<targetHttpDate>[^/]+)/(?<targetDateTime>[^/]+)"
  );
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.memberEpochSeconds = __expectNonNull(
      __parseEpochTimestamp(decodeURIComponent(parsedPath.groups.memberEpochSeconds))
    );
    contents.memberHttpDate = __expectNonNull(
      __parseRfc7231DateTime(decodeURIComponent(parsedPath.groups.memberHttpDate))
    );
    contents.memberDateTime = __expectNonNull(
      __parseRfc3339DateTime(decodeURIComponent(parsedPath.groups.memberDateTime))
    );
    contents.defaultFormat = __expectNonNull(
      __parseRfc3339DateTime(decodeURIComponent(parsedPath.groups.defaultFormat))
    );
    contents.targetEpochSeconds = __expectNonNull(
      __parseEpochTimestamp(decodeURIComponent(parsedPath.groups.targetEpochSeconds))
    );
    contents.targetHttpDate = __expectNonNull(
      __parseRfc7231DateTime(decodeURIComponent(parsedPath.groups.targetHttpDate))
    );
    contents.targetDateTime = __expectNonNull(
      __parseRfc3339DateTime(decodeURIComponent(parsedPath.groups.targetDateTime))
    );
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpRequestWithRegexLiteralRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpRequestWithRegexLiteralServerInput> => {
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
  const pathRegex = new RegExp("/ReDosLiteral/(?<str>[^/]+)/\\(a\\+\\)\\+");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.str = decodeURIComponent(parsedPath.groups.str);
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpResponseCodeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpResponseCodeServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeHttpStringPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<HttpStringPayloadServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "text/plain") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "text/plain")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

export const deserializeIgnoreQueryParamsInResponseRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeInputAndOutputWithHeadersRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersServerInput> => {
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
    headerString: [, output.headers["x-string"]],
    headerByte: [() => void 0 !== output.headers["x-byte"], () => __strictParseByte(output.headers["x-byte"])],
    headerShort: [() => void 0 !== output.headers["x-short"], () => __strictParseShort(output.headers["x-short"])],
    headerInteger: [
      () => void 0 !== output.headers["x-integer"],
      () => __strictParseInt32(output.headers["x-integer"]),
    ],
    headerLong: [() => void 0 !== output.headers["x-long"], () => __strictParseLong(output.headers["x-long"])],
    headerFloat: [() => void 0 !== output.headers["x-float"], () => __strictParseFloat(output.headers["x-float"])],
    headerDouble: [() => void 0 !== output.headers["x-double"], () => __strictParseDouble(output.headers["x-double"])],
    headerTrueBool: [() => void 0 !== output.headers["x-boolean1"], () => __parseBoolean(output.headers["x-boolean1"])],
    headerFalseBool: [
      () => void 0 !== output.headers["x-boolean2"],
      () => __parseBoolean(output.headers["x-boolean2"]),
    ],
    headerStringList: [
      () => void 0 !== output.headers["x-stringlist"],
      () => (output.headers["x-stringlist"] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
    headerStringSet: [
      () => void 0 !== output.headers["x-stringset"],
      () => (output.headers["x-stringset"] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
    headerIntegerList: [
      () => void 0 !== output.headers["x-integerlist"],
      () =>
        (output.headers["x-integerlist"] || "").split(",").map((_entry) => __strictParseInt32(_entry.trim()) as any),
    ],
    headerBooleanList: [
      () => void 0 !== output.headers["x-booleanlist"],
      () => (output.headers["x-booleanlist"] || "").split(",").map((_entry) => __parseBoolean(_entry.trim()) as any),
    ],
    headerTimestampList: [
      () => void 0 !== output.headers["x-timestamplist"],
      () =>
        __splitEvery(output.headers["x-timestamplist"] || "", ",", 2).map(
          (_entry) => __expectNonNull(__parseRfc7231DateTime(_entry.trim())) as any
        ),
    ],
    headerEnum: [, output.headers["x-enum"]],
    headerEnumList: [
      () => void 0 !== output.headers["x-enumlist"],
      () => (output.headers["x-enumlist"] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
    headerIntegerEnum: [
      () => void 0 !== output.headers["x-integerenum"],
      () => __strictParseInt32(output.headers["x-integerenum"]),
    ],
    headerIntegerEnumList: [
      () => void 0 !== output.headers["x-integerenumlist"],
      () =>
        (output.headers["x-integerenumlist"] || "")
          .split(",")
          .map((_entry) => __strictParseInt32(_entry.trim()) as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeJsonBlobsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonBlobsServerInput> => {
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
    data: context.base64Decoder,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeJsonEnumsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonEnumsServerInput> => {
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
    fooEnum1: __expectString,
    fooEnum2: __expectString,
    fooEnum3: __expectString,
    fooEnumList: (_) => de_FooEnumList(_, context),
    fooEnumMap: (_) => de_FooEnumMap(_, context),
    fooEnumSet: (_) => de_FooEnumSet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeJsonIntEnumsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonIntEnumsServerInput> => {
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
    integerEnum1: __expectInt32,
    integerEnum2: __expectInt32,
    integerEnum3: __expectInt32,
    integerEnumList: (_) => de_IntegerEnumList(_, context),
    integerEnumMap: (_) => de_IntegerEnumMap(_, context),
    integerEnumSet: (_) => de_IntegerEnumSet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeJsonListsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonListsServerInput> => {
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
    booleanList: (_) => de_BooleanList(_, context),
    enumList: (_) => de_FooEnumList(_, context),
    intEnumList: (_) => de_IntegerEnumList(_, context),
    integerList: (_) => de_IntegerList(_, context),
    nestedStringList: (_) => de_NestedStringList(_, context),
    sparseStringList: (_) => de_SparseStringList(_, context),
    stringList: (_) => de_StringList(_, context),
    stringSet: (_) => de_StringSet(_, context),
    structureList: [, (_) => de_StructureList(_, context), `myStructureList`],
    timestampList: (_) => de_TimestampList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeJsonMapsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonMapsServerInput> => {
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
    denseBooleanMap: (_) => de_DenseBooleanMap(_, context),
    denseNumberMap: (_) => de_DenseNumberMap(_, context),
    denseSetMap: (_) => de_DenseSetMap(_, context),
    denseStringMap: (_) => de_DenseStringMap(_, context),
    denseStructMap: (_) => de_DenseStructMap(_, context),
    sparseBooleanMap: (_) => de_SparseBooleanMap(_, context),
    sparseNumberMap: (_) => de_SparseNumberMap(_, context),
    sparseSetMap: (_) => de_SparseSetMap(_, context),
    sparseStringMap: (_) => de_SparseStringMap(_, context),
    sparseStructMap: (_) => de_SparseStructMap(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeJsonTimestampsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonTimestampsServerInput> => {
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
    dateTime: (_) => __expectNonNull(__parseRfc3339DateTime(_)),
    dateTimeOnTarget: (_) => __expectNonNull(__parseRfc3339DateTime(_)),
    epochSeconds: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    epochSecondsOnTarget: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    httpDate: (_) => __expectNonNull(__parseRfc7231DateTime(_)),
    httpDateOnTarget: (_) => __expectNonNull(__parseRfc7231DateTime(_)),
    normal: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeJsonUnionsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<JsonUnionsServerInput> => {
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
    contents: (_) => de_MyUnion(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedAcceptWithBodyRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedAcceptWithBodyServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedAcceptWithGenericStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedAcceptWithGenericStringServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "text/plain")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedAcceptWithPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedAcceptWithPayloadServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "image/jpeg")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({});
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedBlobRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedBlobServerInput> => {
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
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedBooleanRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedBooleanServerInput> => {
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
    booleanInHeader: [
      () => void 0 !== output.headers["booleaninheader"],
      () => __parseBoolean(output.headers["booleaninheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["booleanInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["booleanInQuery"])) {
        if (query["booleanInQuery"].length === 1) {
          queryValue = query["booleanInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["booleanInQuery"] as string;
      }
      contents.booleanInQuery = __parseBoolean(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedBoolean/(?<booleanInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.booleanInPath = __parseBoolean(decodeURIComponent(parsedPath.groups.booleanInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    booleanInBody: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedByteRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedByteServerInput> => {
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
    byteInHeader: [
      () => void 0 !== output.headers["byteinheader"],
      () => __strictParseByte(output.headers["byteinheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["byteInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["byteInQuery"])) {
        if (query["byteInQuery"].length === 1) {
          queryValue = query["byteInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["byteInQuery"] as string;
      }
      contents.byteInQuery = __strictParseByte(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedByte/(?<byteInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.byteInPath = __strictParseByte(decodeURIComponent(parsedPath.groups.byteInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    byteInBody: __expectByte,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedContentTypeWithBodyRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedContentTypeWithBodyServerInput> => {
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
    hi: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedContentTypeWithGenericStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedContentTypeWithGenericStringServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "text/plain") {
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
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

export const deserializeMalformedContentTypeWithoutBodyRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedContentTypeWithoutBodyServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedContentTypeWithPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedContentTypeWithPayloadServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "image/jpeg") {
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
  const data: any = await collectBody(output.body, context);
  contents.payload = data;
  return contents;
};

export const deserializeMalformedDoubleRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedDoubleServerInput> => {
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
    doubleInHeader: [
      () => void 0 !== output.headers["doubleinheader"],
      () => __strictParseDouble(output.headers["doubleinheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["doubleInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["doubleInQuery"])) {
        if (query["doubleInQuery"].length === 1) {
          queryValue = query["doubleInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["doubleInQuery"] as string;
      }
      contents.doubleInQuery = __strictParseDouble(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedDouble/(?<doubleInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.doubleInPath = __strictParseDouble(decodeURIComponent(parsedPath.groups.doubleInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    doubleInBody: __limitedParseDouble,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedFloatRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedFloatServerInput> => {
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
    floatInHeader: [
      () => void 0 !== output.headers["floatinheader"],
      () => __strictParseFloat(output.headers["floatinheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["floatInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["floatInQuery"])) {
        if (query["floatInQuery"].length === 1) {
          queryValue = query["floatInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["floatInQuery"] as string;
      }
      contents.floatInQuery = __strictParseFloat(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedFloat/(?<floatInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.floatInPath = __strictParseFloat(decodeURIComponent(parsedPath.groups.floatInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    floatInBody: __limitedParseFloat32,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedIntegerRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedIntegerServerInput> => {
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
    integerInHeader: [
      () => void 0 !== output.headers["integerinheader"],
      () => __strictParseInt32(output.headers["integerinheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["integerInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["integerInQuery"])) {
        if (query["integerInQuery"].length === 1) {
          queryValue = query["integerInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["integerInQuery"] as string;
      }
      contents.integerInQuery = __strictParseInt32(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedInteger/(?<integerInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.integerInPath = __strictParseInt32(decodeURIComponent(parsedPath.groups.integerInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    integerInBody: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedListRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedListServerInput> => {
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
    bodyList: (_) => de_SimpleList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedLongRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedLongServerInput> => {
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
    longInHeader: [
      () => void 0 !== output.headers["longinheader"],
      () => __strictParseLong(output.headers["longinheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["longInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["longInQuery"])) {
        if (query["longInQuery"].length === 1) {
          queryValue = query["longInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["longInQuery"] as string;
      }
      contents.longInQuery = __strictParseLong(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedLong/(?<longInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.longInPath = __strictParseLong(decodeURIComponent(parsedPath.groups.longInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    longInBody: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedMapRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedMapServerInput> => {
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
    bodyMap: (_) => de_SimpleMap(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedRequestBodyRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedRequestBodyServerInput> => {
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
    float: __limitedParseFloat32,
    int: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedShortRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedShortServerInput> => {
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
    shortInHeader: [
      () => void 0 !== output.headers["shortinheader"],
      () => __strictParseShort(output.headers["shortinheader"]),
    ],
  });
  const query = output.query;
  if (query != null) {
    if (query["shortInQuery"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["shortInQuery"])) {
        if (query["shortInQuery"].length === 1) {
          queryValue = query["shortInQuery"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["shortInQuery"] as string;
      }
      contents.shortInQuery = __strictParseShort(queryValue);
    }
  }
  const pathRegex = new RegExp("/MalformedShort/(?<shortInPath>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.shortInPath = __strictParseShort(decodeURIComponent(parsedPath.groups.shortInPath));
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    shortInBody: __expectShort,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedStringServerInput> => {
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
    blob: [
      () => void 0 !== output.headers["amz-media-typed-header"],
      () =>
        new __LazyJsonString(
          Buffer.from(context.base64Decoder(output.headers["amz-media-typed-header"])).toString("utf8")
        ),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampBodyDateTimeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDateTimeServerInput> => {
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
    timestamp: (_) => __expectNonNull(__parseRfc3339DateTime(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedTimestampBodyDefaultRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDefaultServerInput> => {
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
    timestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedTimestampBodyHttpDateRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampBodyHttpDateServerInput> => {
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
    timestamp: (_) => __expectNonNull(__parseRfc7231DateTime(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMalformedTimestampHeaderDateTimeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDateTimeServerInput> => {
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
    timestamp: [
      () => void 0 !== output.headers["timestamp"],
      () => __expectNonNull(__parseRfc3339DateTime(output.headers["timestamp"])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampHeaderDefaultRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDefaultServerInput> => {
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
    timestamp: [
      () => void 0 !== output.headers["timestamp"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["timestamp"])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampHeaderEpochRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderEpochServerInput> => {
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
    timestamp: [
      () => void 0 !== output.headers["timestamp"],
      () => __expectNonNull(__parseEpochTimestamp(output.headers["timestamp"])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampPathDefaultRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampPathDefaultServerInput> => {
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
  const pathRegex = new RegExp("/MalformedTimestampPathDefault/(?<timestamp>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.timestamp = __expectNonNull(__parseRfc3339DateTime(decodeURIComponent(parsedPath.groups.timestamp)));
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampPathEpochRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampPathEpochServerInput> => {
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
  const pathRegex = new RegExp("/MalformedTimestampPathEpoch/(?<timestamp>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.timestamp = __expectNonNull(__parseEpochTimestamp(decodeURIComponent(parsedPath.groups.timestamp)));
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampPathHttpDateRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampPathHttpDateServerInput> => {
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
  const pathRegex = new RegExp("/MalformedTimestampPathHttpDate/(?<timestamp>[^/]+)");
  const parsedPath = output.path.match(pathRegex);
  if (parsedPath?.groups !== undefined) {
    contents.timestamp = __expectNonNull(__parseRfc7231DateTime(decodeURIComponent(parsedPath.groups.timestamp)));
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampQueryDefaultRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampQueryDefaultServerInput> => {
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
    if (query["timestamp"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["timestamp"])) {
        if (query["timestamp"].length === 1) {
          queryValue = query["timestamp"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["timestamp"] as string;
      }
      contents.timestamp = __expectNonNull(__parseRfc3339DateTime(queryValue));
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampQueryEpochRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampQueryEpochServerInput> => {
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
    if (query["timestamp"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["timestamp"])) {
        if (query["timestamp"].length === 1) {
          queryValue = query["timestamp"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["timestamp"] as string;
      }
      contents.timestamp = __expectNonNull(__parseEpochTimestamp(queryValue));
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedTimestampQueryHttpDateRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedTimestampQueryHttpDateServerInput> => {
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
    if (query["timestamp"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["timestamp"])) {
        if (query["timestamp"].length === 1) {
          queryValue = query["timestamp"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["timestamp"] as string;
      }
      contents.timestamp = __expectNonNull(__parseRfc7231DateTime(queryValue));
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeMalformedUnionRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MalformedUnionServerInput> => {
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
    union: (_) => de_SimpleUnion(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeMediaTypeHeaderRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<MediaTypeHeaderServerInput> => {
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
    json: [
      () => void 0 !== output.headers["x-json"],
      () => new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-json"])).toString("utf8")),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeNoInputAndNoOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NoInputAndNoOutputServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeNoInputAndOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NoInputAndOutputServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
};

export const deserializeNullAndEmptyHeadersClientRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientServerInput> => {
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
    a: [, output.headers["x-a"]],
    b: [, output.headers["x-b"]],
    c: [
      () => void 0 !== output.headers["x-c"],
      () => (output.headers["x-c"] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeNullAndEmptyHeadersServerRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerServerInput> => {
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
    a: [, output.headers["x-a"]],
    b: [, output.headers["x-b"]],
    c: [
      () => void 0 !== output.headers["x-c"],
      () => (output.headers["x-c"] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeOmitsNullSerializesEmptyStringRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringServerInput> => {
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
    if (query["Null"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Null"])) {
        if (query["Null"].length === 1) {
          queryValue = query["Null"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Null"] as string;
      }
      contents.nullValue = queryValue;
    }
    if (query["Empty"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["Empty"])) {
        if (query["Empty"].length === 1) {
          queryValue = query["Empty"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["Empty"] as string;
      }
      contents.emptyString = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeOmitsSerializingEmptyListsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<OmitsSerializingEmptyListsServerInput> => {
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
    if (query["StringList"] !== undefined) {
      const queryValue = Array.isArray(query["StringList"])
        ? (query["StringList"] as string[])
        : [query["StringList"] as string];
      contents.queryStringList = queryValue.map((_entry) => _entry as any);
    }
    if (query["IntegerList"] !== undefined) {
      const queryValue = Array.isArray(query["IntegerList"])
        ? (query["IntegerList"] as string[])
        : [query["IntegerList"] as string];
      contents.queryIntegerList = queryValue.map((_entry) => __strictParseInt32(_entry) as any);
    }
    if (query["DoubleList"] !== undefined) {
      const queryValue = Array.isArray(query["DoubleList"])
        ? (query["DoubleList"] as string[])
        : [query["DoubleList"] as string];
      contents.queryDoubleList = queryValue.map((_entry) => __strictParseDouble(_entry) as any);
    }
    if (query["BooleanList"] !== undefined) {
      const queryValue = Array.isArray(query["BooleanList"])
        ? (query["BooleanList"] as string[])
        : [query["BooleanList"] as string];
      contents.queryBooleanList = queryValue.map((_entry) => __parseBoolean(_entry) as any);
    }
    if (query["TimestampList"] !== undefined) {
      const queryValue = Array.isArray(query["TimestampList"])
        ? (query["TimestampList"] as string[])
        : [query["TimestampList"] as string];
      contents.queryTimestampList = queryValue.map((_entry) => __expectNonNull(__parseRfc3339DateTime(_entry)) as any);
    }
    if (query["EnumList"] !== undefined) {
      const queryValue = Array.isArray(query["EnumList"])
        ? (query["EnumList"] as string[])
        : [query["EnumList"] as string];
      contents.queryEnumList = queryValue.map((_entry) => _entry as any);
    }
    if (query["IntegerEnumList"] !== undefined) {
      const queryValue = Array.isArray(query["IntegerEnumList"])
        ? (query["IntegerEnumList"] as string[])
        : [query["IntegerEnumList"] as string];
      contents.queryIntegerEnumList = queryValue.map((_entry) => __strictParseInt32(_entry) as any);
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializePostPlayerActionRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<PostPlayerActionServerInput> => {
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
    action: (_) => de_PlayerAction(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializePostUnionWithJsonNameRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<PostUnionWithJsonNameServerInput> => {
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
    value: (_) => de_UnionWithJsonName(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializePutWithContentEncodingRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<PutWithContentEncodingServerInput> => {
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
    encoding: [, output.headers["content-encoding"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    data: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeQueryIdempotencyTokenAutoFillRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillServerInput> => {
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
    if (query["token"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["token"])) {
        if (query["token"].length === 1) {
          queryValue = query["token"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["token"] as string;
      }
      contents.token = queryValue;
    }
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeQueryParamsAsStringListMapRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapServerInput> => {
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
    if (query["corge"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["corge"])) {
        if (query["corge"].length === 1) {
          queryValue = query["corge"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["corge"] as string;
      }
      contents.qux = queryValue;
    }
    const parsedQuery: Record<string, string[]> = {};
    for (const [key, value] of Object.entries(query)) {
      let queryValue: string;
      const valueArray = Array.isArray(value) ? (value as string[]) : [value as string];
      parsedQuery[key] = valueArray.map((_entry) => _entry as any);
    }
    contents.foo = parsedQuery;
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeQueryPrecedenceRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<QueryPrecedenceServerInput> => {
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
    if (query["bar"] !== undefined) {
      let queryValue: string;
      if (Array.isArray(query["bar"])) {
        if (query["bar"].length === 1) {
          queryValue = query["bar"][0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = query["bar"] as string;
      }
      contents.foo = queryValue;
    }
    const parsedQuery: Record<string, string> = {};
    for (const [key, value] of Object.entries(query)) {
      let queryValue: string;
      if (Array.isArray(value)) {
        if (value.length === 1) {
          queryValue = value[0];
        } else {
          throw new __SerializationException();
        }
      } else {
        queryValue = value as string;
      }
      parsedQuery[key] = queryValue;
    }
    contents.baz = parsedQuery;
  }
  await collectBody(output.body, context);
  return contents;
};

export const deserializeRecursiveShapesRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<RecursiveShapesServerInput> => {
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
    nested: (_) => de_RecursiveShapesInputOutputNested1(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeSimpleScalarPropertiesRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesServerInput> => {
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
    foo: [, output.headers["x-foo"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    byteValue: __expectByte,
    doubleValue: [, __limitedParseDouble, `DoubleDribble`],
    falseBooleanValue: __expectBoolean,
    floatValue: __limitedParseFloat32,
    integerValue: __expectInt32,
    longValue: __expectLong,
    shortValue: __expectShort,
    stringValue: __expectString,
    trueBooleanValue: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeStreamingTraitsRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<StreamingTraitsServerInput> => {
  const contents: any = map({
    foo: [, output.headers["x-foo"]],
  });
  const data: any = output.body;
  contents.blob = data;
  return contents;
};

export const deserializeStreamingTraitsRequireLengthRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthServerInput> => {
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "application/json")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({
    foo: [, output.headers["x-foo"]],
  });
  const data: any = output.body;
  contents.blob = data;
  return contents;
};

export const deserializeStreamingTraitsWithMediaTypeRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<StreamingTraitsWithMediaTypeServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined && contentType !== "text/plain") {
      throw new __UnsupportedMediaTypeException();
    }
  }
  const acceptHeaderKey: string | undefined = Object.keys(output.headers).find((key) => key.toLowerCase() === "accept");
  if (acceptHeaderKey != null) {
    const accept = output.headers[acceptHeaderKey];
    if (!__acceptMatches(accept, "text/plain")) {
      throw new __NotAcceptableException();
    }
  }
  const contents: any = map({
    foo: [, output.headers["x-foo"]],
  });
  const data: any = output.body;
  contents.blob = data;
  return contents;
};

export const deserializeTestBodyStructureRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<TestBodyStructureServerInput> => {
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
    testId: [, output.headers["x-amz-test-id"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testConfig: (_) => de_TestConfig(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

export const deserializeTestNoPayloadRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<TestNoPayloadServerInput> => {
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
    testId: [, output.headers["x-amz-test-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeTestPayloadBlobRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<TestPayloadBlobServerInput> => {
  const contents: any = map({
    contentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.data = data;
  return contents;
};

export const deserializeTestPayloadStructureRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<TestPayloadStructureServerInput> => {
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
    testId: [, output.headers["x-amz-test-id"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.payloadConfig = de_PayloadConfig(data, context);
  return contents;
};

export const deserializeTimestampFormatHeadersRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<TimestampFormatHeadersServerInput> => {
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
    memberEpochSeconds: [
      () => void 0 !== output.headers["x-memberepochseconds"],
      () => __expectNonNull(__parseEpochTimestamp(output.headers["x-memberepochseconds"])),
    ],
    memberHttpDate: [
      () => void 0 !== output.headers["x-memberhttpdate"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["x-memberhttpdate"])),
    ],
    memberDateTime: [
      () => void 0 !== output.headers["x-memberdatetime"],
      () => __expectNonNull(__parseRfc3339DateTime(output.headers["x-memberdatetime"])),
    ],
    defaultFormat: [
      () => void 0 !== output.headers["x-defaultformat"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["x-defaultformat"])),
    ],
    targetEpochSeconds: [
      () => void 0 !== output.headers["x-targetepochseconds"],
      () => __expectNonNull(__parseEpochTimestamp(output.headers["x-targetepochseconds"])),
    ],
    targetHttpDate: [
      () => void 0 !== output.headers["x-targethttpdate"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["x-targethttpdate"])),
    ],
    targetDateTime: [
      () => void 0 !== output.headers["x-targetdatetime"],
      () => __expectNonNull(__parseRfc3339DateTime(output.headers["x-targetdatetime"])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

export const deserializeUnitInputAndOutputRequest = async (
  output: __HttpRequest,
  context: __SerdeContext
): Promise<UnitInputAndOutputServerInput> => {
  const contentTypeHeaderKey: string | undefined = Object.keys(output.headers).find(
    (key) => key.toLowerCase() === "content-type"
  );
  if (contentTypeHeaderKey != null) {
    const contentType = output.headers[contentTypeHeaderKey];
    if (contentType !== undefined) {
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
  await collectBody(output.body, context);
  return contents;
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

export const serializeDatetimeOffsetsResponse = async (
  input: DatetimeOffsetsServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      datetime: (_) => _.toISOString().split(".")[0] + "Z",
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      documentValue: (_) => se_Document(_, context),
      stringValue: [],
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  if (input.documentValue !== undefined) {
    if (input.documentValue === null) {
      body = "null";
    } else {
      body = input.documentValue;
    }
  }
  body = JSON.stringify(body);
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = "{}";
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

export const serializeFractionalSecondsResponse = async (
  input: FractionalSecondsServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      datetime: (_) => _.toISOString().split(".")[0] + "Z",
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-greeting": input.greeting!,
  });
  let body: any;
  body = "{}";
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

export const serializeHostWithPathOperationResponse = async (
  input: HostWithPathOperationServerOutput,
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

export const serializeHttpChecksumRequiredResponse = async (
  input: HttpChecksumRequiredServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      foo: [],
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-foo": input.foo!,
  });
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    "x-foo": input.foo!,
  });
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  if (input.nested !== undefined) {
    body = se_NestedPayload(input.nested, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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

export const serializeHttpPayloadWithUnionResponse = async (
  input: HttpPayloadWithUnionServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  if (input.nested !== undefined) {
    body = se_UnionPayload(input.nested, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-foo": input.foo!,
    ...(input.fooMap !== undefined &&
      Object.keys(input.fooMap).reduce((acc: any, suffix: string) => {
        acc[`x-foo-${suffix.toLowerCase()}`] = input.fooMap![suffix];
        return acc;
      }, {})),
  });
  let body: any;
  body = "{}";
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

export const serializeHttpPrefixHeadersInResponseResponse = async (
  input: HttpPrefixHeadersInResponseServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    ...(input.prefixHeaders !== undefined &&
      Object.keys(input.prefixHeaders).reduce((acc: any, suffix: string) => {
        acc[`${suffix.toLowerCase()}`] = input.prefixHeaders![suffix];
        return acc;
      }, {})),
  });
  let body: any;
  body = "{}";
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

export const serializeHttpRequestWithRegexLiteralResponse = async (
  input: HttpRequestWithRegexLiteralServerOutput,
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
  let statusCode = 200;
  if (input.Status !== undefined) {
    statusCode = input.Status;
  }
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = "{}";
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      baz: [],
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-string": input.headerString!,
    "x-byte": [() => isSerializableHeaderValue(input.headerByte), () => input.headerByte!.toString()],
    "x-short": [() => isSerializableHeaderValue(input.headerShort), () => input.headerShort!.toString()],
    "x-integer": [() => isSerializableHeaderValue(input.headerInteger), () => input.headerInteger!.toString()],
    "x-long": [() => isSerializableHeaderValue(input.headerLong), () => input.headerLong!.toString()],
    "x-float": [
      () => isSerializableHeaderValue(input.headerFloat),
      () => (input.headerFloat! % 1 == 0 ? input.headerFloat! + ".0" : input.headerFloat!.toString()),
    ],
    "x-double": [
      () => isSerializableHeaderValue(input.headerDouble),
      () => (input.headerDouble! % 1 == 0 ? input.headerDouble! + ".0" : input.headerDouble!.toString()),
    ],
    "x-boolean1": [() => isSerializableHeaderValue(input.headerTrueBool), () => input.headerTrueBool!.toString()],
    "x-boolean2": [() => isSerializableHeaderValue(input.headerFalseBool), () => input.headerFalseBool!.toString()],
    "x-stringlist": [
      () => isSerializableHeaderValue(input.headerStringList),
      () => (input.headerStringList! || []).map((_entry) => _entry as any).join(", "),
    ],
    "x-stringset": [
      () => isSerializableHeaderValue(input.headerStringSet),
      () => (input.headerStringSet! || []).map((_entry) => _entry as any).join(", "),
    ],
    "x-integerlist": [
      () => isSerializableHeaderValue(input.headerIntegerList),
      () => (input.headerIntegerList! || []).map((_entry) => _entry.toString() as any).join(", "),
    ],
    "x-booleanlist": [
      () => isSerializableHeaderValue(input.headerBooleanList),
      () => (input.headerBooleanList! || []).map((_entry) => _entry.toString() as any).join(", "),
    ],
    "x-timestamplist": [
      () => isSerializableHeaderValue(input.headerTimestampList),
      () => (input.headerTimestampList! || []).map((_entry) => __dateToUtcString(_entry).toString() as any).join(", "),
    ],
    "x-enum": input.headerEnum!,
    "x-enumlist": [
      () => isSerializableHeaderValue(input.headerEnumList),
      () => (input.headerEnumList! || []).map((_entry) => _entry as any).join(", "),
    ],
    "x-integerenum": [
      () => isSerializableHeaderValue(input.headerIntegerEnum),
      () => input.headerIntegerEnum!.toString(),
    ],
    "x-integerenumlist": [
      () => isSerializableHeaderValue(input.headerIntegerEnumList),
      () => (input.headerIntegerEnumList! || []).map((_entry) => _entry.toString() as any).join(", "),
    ],
  });
  let body: any;
  body = "{}";
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      data: (_) => context.base64Encoder(_),
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      fooEnum1: [],
      fooEnum2: [],
      fooEnum3: [],
      fooEnumList: (_) => se_FooEnumList(_, context),
      fooEnumMap: (_) => se_FooEnumMap(_, context),
      fooEnumSet: (_) => se_FooEnumSet(_, context),
    })
  );
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

export const serializeJsonIntEnumsResponse = async (
  input: JsonIntEnumsServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      integerEnum1: [],
      integerEnum2: [],
      integerEnum3: [],
      integerEnumList: (_) => se_IntegerEnumList(_, context),
      integerEnumMap: (_) => se_IntegerEnumMap(_, context),
      integerEnumSet: (_) => se_IntegerEnumSet(_, context),
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      booleanList: (_) => se_BooleanList(_, context),
      enumList: (_) => se_FooEnumList(_, context),
      intEnumList: (_) => se_IntegerEnumList(_, context),
      integerList: (_) => se_IntegerList(_, context),
      nestedStringList: (_) => se_NestedStringList(_, context),
      sparseStringList: (_) => se_SparseStringList(_, context),
      stringList: (_) => se_StringList(_, context),
      stringSet: (_) => se_StringSet(_, context),
      myStructureList: [, (_) => se_StructureList(_, context), `structureList`],
      timestampList: (_) => se_TimestampList(_, context),
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      denseBooleanMap: (_) => se_DenseBooleanMap(_, context),
      denseNumberMap: (_) => se_DenseNumberMap(_, context),
      denseSetMap: (_) => se_DenseSetMap(_, context),
      denseStringMap: (_) => se_DenseStringMap(_, context),
      denseStructMap: (_) => se_DenseStructMap(_, context),
      sparseBooleanMap: (_) => se_SparseBooleanMap(_, context),
      sparseNumberMap: (_) => se_SparseNumberMap(_, context),
      sparseSetMap: (_) => se_SparseSetMap(_, context),
      sparseStringMap: (_) => se_SparseStringMap(_, context),
      sparseStructMap: (_) => se_SparseStructMap(_, context),
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      dateTime: (_) => _.toISOString().split(".")[0] + "Z",
      dateTimeOnTarget: (_) => _.toISOString().split(".")[0] + "Z",
      epochSeconds: (_) => Math.round(_.getTime() / 1000),
      epochSecondsOnTarget: (_) => Math.round(_.getTime() / 1000),
      httpDate: (_) => __dateToUtcString(_),
      httpDateOnTarget: (_) => __dateToUtcString(_),
      normal: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      contents: (_) => se_MyUnion(_, context),
    })
  );
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

export const serializeMalformedAcceptWithBodyResponse = async (
  input: MalformedAcceptWithBodyServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      hi: [],
    })
  );
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

export const serializeMalformedAcceptWithGenericStringResponse = async (
  input: MalformedAcceptWithGenericStringServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
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

export const serializeMalformedAcceptWithPayloadResponse = async (
  input: MalformedAcceptWithPayloadServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "image/jpeg",
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
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

export const serializeMalformedBlobResponse = async (
  input: MalformedBlobServerOutput,
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

export const serializeMalformedBooleanResponse = async (
  input: MalformedBooleanServerOutput,
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

export const serializeMalformedByteResponse = async (
  input: MalformedByteServerOutput,
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

export const serializeMalformedContentTypeWithBodyResponse = async (
  input: MalformedContentTypeWithBodyServerOutput,
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

export const serializeMalformedContentTypeWithGenericStringResponse = async (
  input: MalformedContentTypeWithGenericStringServerOutput,
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

export const serializeMalformedContentTypeWithoutBodyResponse = async (
  input: MalformedContentTypeWithoutBodyServerOutput,
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

export const serializeMalformedContentTypeWithPayloadResponse = async (
  input: MalformedContentTypeWithPayloadServerOutput,
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

export const serializeMalformedDoubleResponse = async (
  input: MalformedDoubleServerOutput,
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

export const serializeMalformedFloatResponse = async (
  input: MalformedFloatServerOutput,
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

export const serializeMalformedIntegerResponse = async (
  input: MalformedIntegerServerOutput,
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

export const serializeMalformedListResponse = async (
  input: MalformedListServerOutput,
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

export const serializeMalformedLongResponse = async (
  input: MalformedLongServerOutput,
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

export const serializeMalformedMapResponse = async (
  input: MalformedMapServerOutput,
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

export const serializeMalformedRequestBodyResponse = async (
  input: MalformedRequestBodyServerOutput,
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

export const serializeMalformedShortResponse = async (
  input: MalformedShortServerOutput,
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

export const serializeMalformedStringResponse = async (
  input: MalformedStringServerOutput,
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

export const serializeMalformedTimestampBodyDateTimeResponse = async (
  input: MalformedTimestampBodyDateTimeServerOutput,
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

export const serializeMalformedTimestampBodyDefaultResponse = async (
  input: MalformedTimestampBodyDefaultServerOutput,
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

export const serializeMalformedTimestampBodyHttpDateResponse = async (
  input: MalformedTimestampBodyHttpDateServerOutput,
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

export const serializeMalformedTimestampHeaderDateTimeResponse = async (
  input: MalformedTimestampHeaderDateTimeServerOutput,
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

export const serializeMalformedTimestampHeaderDefaultResponse = async (
  input: MalformedTimestampHeaderDefaultServerOutput,
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

export const serializeMalformedTimestampHeaderEpochResponse = async (
  input: MalformedTimestampHeaderEpochServerOutput,
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

export const serializeMalformedTimestampPathDefaultResponse = async (
  input: MalformedTimestampPathDefaultServerOutput,
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

export const serializeMalformedTimestampPathEpochResponse = async (
  input: MalformedTimestampPathEpochServerOutput,
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

export const serializeMalformedTimestampPathHttpDateResponse = async (
  input: MalformedTimestampPathHttpDateServerOutput,
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

export const serializeMalformedTimestampQueryDefaultResponse = async (
  input: MalformedTimestampQueryDefaultServerOutput,
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

export const serializeMalformedTimestampQueryEpochResponse = async (
  input: MalformedTimestampQueryEpochServerOutput,
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

export const serializeMalformedTimestampQueryHttpDateResponse = async (
  input: MalformedTimestampQueryHttpDateServerOutput,
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

export const serializeMalformedUnionResponse = async (
  input: MalformedUnionServerOutput,
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-json": [
      () => isSerializableHeaderValue(input.json),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.json!))),
    ],
  });
  let body: any;
  body = "{}";
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = "{}";
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-a": input.a!,
    "x-b": input.b!,
    "x-c": [() => isSerializableHeaderValue(input.c), () => (input.c! || []).map((_entry) => _entry as any).join(", ")],
  });
  let body: any;
  body = "{}";
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-a": input.a!,
    "x-b": input.b!,
    "x-c": [() => isSerializableHeaderValue(input.c), () => (input.c! || []).map((_entry) => _entry as any).join(", ")],
  });
  let body: any;
  body = "{}";
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

export const serializeOmitsSerializingEmptyListsResponse = async (
  input: OmitsSerializingEmptyListsServerOutput,
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

export const serializePostPlayerActionResponse = async (
  input: PostPlayerActionServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: (_) => se_PlayerAction(_, context),
    })
  );
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

export const serializePostUnionWithJsonNameResponse = async (
  input: PostUnionWithJsonNameServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      value: (_) => se_UnionWithJsonName(_, context),
    })
  );
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

export const serializePutWithContentEncodingResponse = async (
  input: PutWithContentEncodingServerOutput,
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      nested: (_) => se_RecursiveShapesInputOutputNested1(_, context),
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-foo": input.foo!,
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      byteValue: [],
      DoubleDribble: [, (_) => __serializeFloat(_), `doubleValue`],
      falseBooleanValue: [],
      floatValue: (_) => __serializeFloat(_),
      integerValue: [],
      longValue: [],
      shortValue: [],
      stringValue: [],
      trueBooleanValue: [],
    })
  );
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-foo": input.foo!,
  });
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    "x-foo": input.foo!,
  });
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
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

export const serializeTestBodyStructureResponse = async (
  input: TestBodyStructureServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-test-id": input.testId!,
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      testConfig: (_) => se_TestConfig(_, context),
    })
  );
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

export const serializeTestNoPayloadResponse = async (
  input: TestNoPayloadServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-test-id": input.testId!,
  });
  let body: any;
  body = "{}";
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

export const serializeTestPayloadBlobResponse = async (
  input: TestPayloadBlobServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  let body: any;
  if (input.data !== undefined) {
    body = input.data;
  }
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

export const serializeTestPayloadStructureResponse = async (
  input: TestPayloadStructureServerOutput,
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
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-test-id": input.testId!,
  });
  let body: any;
  if (input.payloadConfig !== undefined) {
    body = se_PayloadConfig(input.payloadConfig, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
  const statusCode = 200;
  let headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-memberepochseconds": [
      () => isSerializableHeaderValue(input.memberEpochSeconds),
      () => Math.round(input.memberEpochSeconds!.getTime() / 1000).toString(),
    ],
    "x-memberhttpdate": [
      () => isSerializableHeaderValue(input.memberHttpDate),
      () => __dateToUtcString(input.memberHttpDate!).toString(),
    ],
    "x-memberdatetime": [
      () => isSerializableHeaderValue(input.memberDateTime),
      () => (input.memberDateTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "x-defaultformat": [
      () => isSerializableHeaderValue(input.defaultFormat),
      () => __dateToUtcString(input.defaultFormat!).toString(),
    ],
    "x-targetepochseconds": [
      () => isSerializableHeaderValue(input.targetEpochSeconds),
      () => Math.round(input.targetEpochSeconds!.getTime() / 1000).toString(),
    ],
    "x-targethttpdate": [
      () => isSerializableHeaderValue(input.targetHttpDate),
      () => __dateToUtcString(input.targetHttpDate!).toString(),
    ],
    "x-targetdatetime": [
      () => isSerializableHeaderValue(input.targetDateTime),
      () => (input.targetDateTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
  let body: any;
  body = "{}";
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

export const serializeUnitInputAndOutputResponse = async (
  input: UnitInputAndOutputServerOutput,
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
  const statusCode = 403;
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-errortype": "ComplexError",
    "content-type": "application/json",
    "x-header": input.Header!,
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Nested: (_) => se_ComplexNestedErrorData(_, context),
      TopLevel: [],
    })
  );
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
  const statusCode = 500;
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-errortype": "FooError",
    "content-type": "application/json",
  });
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
  const statusCode = 400;
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-errortype": "InvalidGreeting",
    "content-type": "application/json",
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Message: [],
    })
  );
  return new __HttpResponse({
    headers,
    body,
    statusCode,
  });
};

/**
 * serializeAws_restJson1ComplexNestedErrorData
 */
const se_ComplexNestedErrorData = (input: ComplexNestedErrorData, context: __SerdeContext): any => {
  return take(input, {
    Fooooo: [, , `Foo`],
  });
};

/**
 * serializeAws_restJson1DenseBooleanMap
 */
const se_DenseBooleanMap = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DenseNumberMap
 */
const se_DenseNumberMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DenseSetMap
 */
const se_DenseSetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_StringSet(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DenseStringMap
 */
const se_DenseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DenseStructMap
 */
const se_DenseStructMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_GreetingStruct(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1MyUnion
 */
const se_MyUnion = (input: MyUnion, context: __SerdeContext): any => {
  return MyUnion.visit(input, {
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    enumValue: (value) => ({ enumValue: value }),
    listValue: (value) => ({ listValue: se_StringList(value, context) }),
    mapValue: (value) => ({ mapValue: se_StringMap(value, context) }),
    numberValue: (value) => ({ numberValue: value }),
    renamedStructureValue: (value) => ({ renamedStructureValue: se_RenamedGreeting(value, context) }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: se_GreetingStruct(value, context) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1NestedPayload
 */
const se_NestedPayload = (input: NestedPayload, context: __SerdeContext): any => {
  return take(input, {
    greeting: [],
    name: [],
  });
};

/**
 * serializeAws_restJson1PayloadConfig
 */
const se_PayloadConfig = (input: PayloadConfig, context: __SerdeContext): any => {
  return take(input, {
    data: [],
  });
};

/**
 * serializeAws_restJson1PlayerAction
 */
const se_PlayerAction = (input: PlayerAction, context: __SerdeContext): any => {
  return PlayerAction.visit(input, {
    quit: (value) => ({ quit: se_Unit(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RecursiveShapesInputOutputNested1
 */
const se_RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  return take(input, {
    foo: [],
    nested: (_) => se_RecursiveShapesInputOutputNested2(_, context),
  });
};

/**
 * serializeAws_restJson1RecursiveShapesInputOutputNested2
 */
const se_RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  return take(input, {
    bar: [],
    recursiveMember: (_) => se_RecursiveShapesInputOutputNested1(_, context),
  });
};

/**
 * serializeAws_restJson1SparseBooleanMap
 */
const se_SparseBooleanMap = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SparseNumberMap
 */
const se_SparseNumberMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SparseSetMap
 */
const se_SparseSetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = se_StringSet(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SparseStructMap
 */
const se_SparseStructMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = se_GreetingStruct(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1StructureList
 */
const se_StructureList = (input: StructureListMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StructureListMember(entry, context);
    });
};

/**
 * serializeAws_restJson1StructureListMember
 */
const se_StructureListMember = (input: StructureListMember, context: __SerdeContext): any => {
  return take(input, {
    value: [, , `a`],
    other: [, , `b`],
  });
};

/**
 * serializeAws_restJson1TestConfig
 */
const se_TestConfig = (input: TestConfig, context: __SerdeContext): any => {
  return take(input, {
    timeout: [],
  });
};

/**
 * serializeAws_restJson1UnionPayload
 */
const se_UnionPayload = (input: UnionPayload, context: __SerdeContext): any => {
  return UnionPayload.visit(input, {
    greeting: (value) => ({ greeting: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1UnionWithJsonName
 */
const se_UnionWithJsonName = (input: UnionWithJsonName, context: __SerdeContext): any => {
  return UnionWithJsonName.visit(input, {
    bar: (value) => ({ bar: value }),
    baz: (value) => ({ _baz: value }),
    foo: (value) => ({ FOO: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RenamedGreeting
 */
const se_RenamedGreeting = (input: RenamedGreeting, context: __SerdeContext): any => {
  return take(input, {
    salutation: [],
  });
};

/**
 * serializeAws_restJson1BooleanList
 */
const se_BooleanList = (input: boolean[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1FooEnumList
 */
const se_FooEnumList = (input: FooEnum[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1FooEnumMap
 */
const se_FooEnumMap = (input: Record<string, FooEnum>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FooEnumSet
 */
const se_FooEnumSet = (input: FooEnum[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1GreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return take(input, {
    hi: [],
  });
};

/**
 * serializeAws_restJson1IntegerEnumList
 */
const se_IntegerEnumList = (input: IntegerEnum[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1IntegerEnumMap
 */
const se_IntegerEnumMap = (input: Record<string, IntegerEnum>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1IntegerEnumSet
 */
const se_IntegerEnumSet = (input: IntegerEnum[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1IntegerList
 */
const se_IntegerList = (input: number[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1NestedStringList
 */
const se_NestedStringList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StringList(entry, context);
    });
};

/**
 * serializeAws_restJson1SparseStringList
 */
const se_SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1SparseStringMap
 */
const se_SparseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1StringSet
 */
const se_StringSet = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

/**
 * serializeAws_restJson1TimestampList
 */
const se_TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return Math.round(entry.getTime() / 1000);
    });
};

/**
 * serializeAws_restJson1Unit
 */
const se_Unit = (input: Unit, context: __SerdeContext): any => {
  return take(input, {});
};

/**
 * deserializeAws_restJson1DenseBooleanMap
 */
const de_DenseBooleanMap = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectBoolean(value) as any;
    return acc;
  }, {} as Record<string, boolean>);
};

/**
 * deserializeAws_restJson1DenseNumberMap
 */
const de_DenseNumberMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectInt32(value) as any;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeAws_restJson1DenseSetMap
 */
const de_DenseSetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_StringSet(value, context);
    return acc;
  }, {} as Record<string, string[]>);
};

/**
 * deserializeAws_restJson1DenseStringMap
 */
const de_DenseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_restJson1DenseStructMap
 */
const de_DenseStructMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return Object.entries(output).reduce((acc: Record<string, GreetingStruct>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_GreetingStruct(value, context);
    return acc;
  }, {} as Record<string, GreetingStruct>);
};

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1MyUnion
 */
const de_MyUnion = (output: any, context: __SerdeContext): MyUnion => {
  if (output.blobValue != null) {
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
  if (output.listValue != null) {
    return {
      listValue: de_StringList(output.listValue, context),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: de_StringMap(output.mapValue, context),
    };
  }
  if (__expectInt32(output.numberValue) !== undefined) {
    return { numberValue: __expectInt32(output.numberValue) as any };
  }
  if (output.renamedStructureValue != null) {
    return {
      renamedStructureValue: de_RenamedGreeting(output.renamedStructureValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structureValue != null) {
    return {
      structureValue: de_GreetingStruct(output.structureValue, context),
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue))),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1NestedPayload
 */
const de_NestedPayload = (output: any, context: __SerdeContext): NestedPayload => {
  return take(output, {
    greeting: __expectString,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PayloadConfig
 */
const de_PayloadConfig = (output: any, context: __SerdeContext): PayloadConfig => {
  return take(output, {
    data: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1PlayerAction
 */
const de_PlayerAction = (output: any, context: __SerdeContext): PlayerAction => {
  if (output.quit != null) {
    return {
      quit: de_Unit(output.quit, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RecursiveShapesInputOutputNested1
 */
const de_RecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  return take(output, {
    foo: __expectString,
    nested: (_: any) => de_RecursiveShapesInputOutputNested2(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RecursiveShapesInputOutputNested2
 */
const de_RecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  return take(output, {
    bar: __expectString,
    recursiveMember: (_: any) => de_RecursiveShapesInputOutputNested1(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SimpleList
 */
const de_SimpleList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson#SimpleList" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1SimpleMap
 */
const de_SimpleMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * deserializeAws_restJson1SimpleUnion
 */
const de_SimpleUnion = (output: any, context: __SerdeContext): SimpleUnion => {
  if (__expectInt32(output.int) !== undefined) {
    return { int: __expectInt32(output.int) as any };
  }
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SparseBooleanMap
 */
const de_SparseBooleanMap = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = __expectBoolean(value) as any;
    return acc;
  }, {} as Record<string, boolean>);
};

/**
 * deserializeAws_restJson1SparseNumberMap
 */
const de_SparseNumberMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = __expectInt32(value) as any;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeAws_restJson1SparseSetMap
 */
const de_SparseSetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = de_StringSet(value, context);
    return acc;
  }, {} as Record<string, string[]>);
};

/**
 * deserializeAws_restJson1SparseStructMap
 */
const de_SparseStructMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return Object.entries(output).reduce((acc: Record<string, GreetingStruct>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = de_GreetingStruct(value, context);
    return acc;
  }, {} as Record<string, GreetingStruct>);
};

/**
 * deserializeAws_restJson1StructureList
 */
const de_StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.restjson#StructureList" must be non-null.'
      );
    }
    return de_StructureListMember(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1StructureListMember
 */
const de_StructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
  return take(output, {
    a: [, __expectString, `value`],
    b: [, __expectString, `other`],
  }) as any;
};

/**
 * deserializeAws_restJson1TestConfig
 */
const de_TestConfig = (output: any, context: __SerdeContext): TestConfig => {
  return take(output, {
    timeout: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1UnionPayload
 */
const de_UnionPayload = (output: any, context: __SerdeContext): UnionPayload => {
  if (__expectString(output.greeting) !== undefined) {
    return { greeting: __expectString(output.greeting) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1UnionWithJsonName
 */
const de_UnionWithJsonName = (output: any, context: __SerdeContext): UnionWithJsonName => {
  if (__expectString(output.bar) !== undefined) {
    return { bar: __expectString(output.bar) as any };
  }
  if (__expectString(output._baz) !== undefined) {
    return { baz: __expectString(output._baz) as any };
  }
  if (__expectString(output.FOO) !== undefined) {
    return { foo: __expectString(output.FOO) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RenamedGreeting
 */
const de_RenamedGreeting = (output: any, context: __SerdeContext): RenamedGreeting => {
  return take(output, {
    salutation: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BooleanList
 */
const de_BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#BooleanList" must be non-null.'
      );
    }
    return __expectBoolean(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1FooEnumList
 */
const de_FooEnumList = (output: any, context: __SerdeContext): FooEnum[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#FooEnumList" must be non-null.'
      );
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1FooEnumMap
 */
const de_FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum> => {
  return Object.entries(output).reduce((acc: Record<string, FooEnum>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, FooEnum>);
};

/**
 * deserializeAws_restJson1FooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): FooEnum[] => {
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
 * deserializeAws_restJson1GreetingStruct
 */
const de_GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return take(output, {
    hi: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IntegerEnumList
 */
const de_IntegerEnumList = (output: any, context: __SerdeContext): IntegerEnum[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#IntegerEnumList" must be non-null.'
      );
    }
    return __expectInt32(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegerEnumMap
 */
const de_IntegerEnumMap = (output: any, context: __SerdeContext): Record<string, IntegerEnum> => {
  return Object.entries(output).reduce((acc: Record<string, IntegerEnum>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectInt32(value) as any;
    return acc;
  }, {} as Record<string, IntegerEnum>);
};

/**
 * deserializeAws_restJson1IntegerEnumSet
 */
const de_IntegerEnumSet = (output: any, context: __SerdeContext): IntegerEnum[] => {
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
 * deserializeAws_restJson1IntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#IntegerList" must be non-null.'
      );
    }
    return __expectInt32(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1NestedStringList
 */
const de_NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#NestedStringList" must be non-null.'
      );
    }
    return de_StringList(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1SparseStringList
 */
const de_SparseStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_restJson1SparseStringMap
 */
const de_SparseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
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
 * deserializeAws_restJson1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
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
 * deserializeAws_restJson1TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      throw new TypeError(
        'All elements of the non-sparse list "aws.protocoltests.shared#TimestampList" must be non-null.'
      );
    }
    return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
  });
  return retVal;
};

/**
 * deserializeAws_restJson1Unit
 */
const de_Unit = (output: any, context: __SerdeContext): Unit => {
  return take(output, {}) as any;
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
