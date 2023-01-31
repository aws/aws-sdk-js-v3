// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  convertMap,
  dateToUtcString as __dateToUtcString,
  decorateServiceException as __decorateServiceException,
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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  splitEvery as __splitEvery,
  strictParseByte as __strictParseByte,
  strictParseDouble as __strictParseDouble,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  strictParseShort as __strictParseShort,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "../commands/AllQueryStringTypesCommand";
import {
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
} from "../commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
} from "../commands/ConstantQueryStringCommand";
import { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "../commands/DatetimeOffsetsCommand";
import {
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
} from "../commands/DocumentTypeAsPayloadCommand";
import { DocumentTypeCommandInput, DocumentTypeCommandOutput } from "../commands/DocumentTypeCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "../commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommandInput, EndpointOperationCommandOutput } from "../commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "../commands/EndpointWithHostLabelOperationCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "../commands/GreetingWithErrorsCommand";
import {
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "../commands/HostWithPathOperationCommand";
import {
  HttpChecksumRequiredCommandInput,
  HttpChecksumRequiredCommandOutput,
} from "../commands/HttpChecksumRequiredCommand";
import { HttpEnumPayloadCommandInput, HttpEnumPayloadCommandOutput } from "../commands/HttpEnumPayloadCommand";
import { HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput } from "../commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "../commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "../commands/HttpPayloadWithStructureCommand";
import { HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput } from "../commands/HttpPrefixHeadersCommand";
import {
  HttpPrefixHeadersInResponseCommandInput,
  HttpPrefixHeadersInResponseCommandOutput,
} from "../commands/HttpPrefixHeadersInResponseCommand";
import {
  HttpRequestWithFloatLabelsCommandInput,
  HttpRequestWithFloatLabelsCommandOutput,
} from "../commands/HttpRequestWithFloatLabelsCommand";
import {
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
} from "../commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
} from "../commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
} from "../commands/HttpRequestWithLabelsCommand";
import {
  HttpRequestWithRegexLiteralCommandInput,
  HttpRequestWithRegexLiteralCommandOutput,
} from "../commands/HttpRequestWithRegexLiteralCommand";
import { HttpResponseCodeCommandInput, HttpResponseCodeCommandOutput } from "../commands/HttpResponseCodeCommand";
import { HttpStringPayloadCommandInput, HttpStringPayloadCommandOutput } from "../commands/HttpStringPayloadCommand";
import {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "../commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "../commands/InputAndOutputWithHeadersCommand";
import { JsonBlobsCommandInput, JsonBlobsCommandOutput } from "../commands/JsonBlobsCommand";
import { JsonEnumsCommandInput, JsonEnumsCommandOutput } from "../commands/JsonEnumsCommand";
import { JsonIntEnumsCommandInput, JsonIntEnumsCommandOutput } from "../commands/JsonIntEnumsCommand";
import { JsonListsCommandInput, JsonListsCommandOutput } from "../commands/JsonListsCommand";
import { JsonMapsCommandInput, JsonMapsCommandOutput } from "../commands/JsonMapsCommand";
import { JsonTimestampsCommandInput, JsonTimestampsCommandOutput } from "../commands/JsonTimestampsCommand";
import { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "../commands/JsonUnionsCommand";
import {
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
} from "../commands/MalformedAcceptWithBodyCommand";
import {
  MalformedAcceptWithGenericStringCommandInput,
  MalformedAcceptWithGenericStringCommandOutput,
} from "../commands/MalformedAcceptWithGenericStringCommand";
import {
  MalformedAcceptWithPayloadCommandInput,
  MalformedAcceptWithPayloadCommandOutput,
} from "../commands/MalformedAcceptWithPayloadCommand";
import { MalformedBlobCommandInput, MalformedBlobCommandOutput } from "../commands/MalformedBlobCommand";
import { MalformedBooleanCommandInput, MalformedBooleanCommandOutput } from "../commands/MalformedBooleanCommand";
import { MalformedByteCommandInput, MalformedByteCommandOutput } from "../commands/MalformedByteCommand";
import {
  MalformedContentTypeWithBodyCommandInput,
  MalformedContentTypeWithBodyCommandOutput,
} from "../commands/MalformedContentTypeWithBodyCommand";
import {
  MalformedContentTypeWithGenericStringCommandInput,
  MalformedContentTypeWithGenericStringCommandOutput,
} from "../commands/MalformedContentTypeWithGenericStringCommand";
import {
  MalformedContentTypeWithoutBodyCommandInput,
  MalformedContentTypeWithoutBodyCommandOutput,
} from "../commands/MalformedContentTypeWithoutBodyCommand";
import {
  MalformedContentTypeWithPayloadCommandInput,
  MalformedContentTypeWithPayloadCommandOutput,
} from "../commands/MalformedContentTypeWithPayloadCommand";
import { MalformedDoubleCommandInput, MalformedDoubleCommandOutput } from "../commands/MalformedDoubleCommand";
import { MalformedFloatCommandInput, MalformedFloatCommandOutput } from "../commands/MalformedFloatCommand";
import { MalformedIntegerCommandInput, MalformedIntegerCommandOutput } from "../commands/MalformedIntegerCommand";
import { MalformedListCommandInput, MalformedListCommandOutput } from "../commands/MalformedListCommand";
import { MalformedLongCommandInput, MalformedLongCommandOutput } from "../commands/MalformedLongCommand";
import { MalformedMapCommandInput, MalformedMapCommandOutput } from "../commands/MalformedMapCommand";
import {
  MalformedRequestBodyCommandInput,
  MalformedRequestBodyCommandOutput,
} from "../commands/MalformedRequestBodyCommand";
import { MalformedShortCommandInput, MalformedShortCommandOutput } from "../commands/MalformedShortCommand";
import { MalformedStringCommandInput, MalformedStringCommandOutput } from "../commands/MalformedStringCommand";
import {
  MalformedTimestampBodyDateTimeCommandInput,
  MalformedTimestampBodyDateTimeCommandOutput,
} from "../commands/MalformedTimestampBodyDateTimeCommand";
import {
  MalformedTimestampBodyDefaultCommandInput,
  MalformedTimestampBodyDefaultCommandOutput,
} from "../commands/MalformedTimestampBodyDefaultCommand";
import {
  MalformedTimestampBodyHttpDateCommandInput,
  MalformedTimestampBodyHttpDateCommandOutput,
} from "../commands/MalformedTimestampBodyHttpDateCommand";
import {
  MalformedTimestampHeaderDateTimeCommandInput,
  MalformedTimestampHeaderDateTimeCommandOutput,
} from "../commands/MalformedTimestampHeaderDateTimeCommand";
import {
  MalformedTimestampHeaderDefaultCommandInput,
  MalformedTimestampHeaderDefaultCommandOutput,
} from "../commands/MalformedTimestampHeaderDefaultCommand";
import {
  MalformedTimestampHeaderEpochCommandInput,
  MalformedTimestampHeaderEpochCommandOutput,
} from "../commands/MalformedTimestampHeaderEpochCommand";
import {
  MalformedTimestampPathDefaultCommandInput,
  MalformedTimestampPathDefaultCommandOutput,
} from "../commands/MalformedTimestampPathDefaultCommand";
import {
  MalformedTimestampPathEpochCommandInput,
  MalformedTimestampPathEpochCommandOutput,
} from "../commands/MalformedTimestampPathEpochCommand";
import {
  MalformedTimestampPathHttpDateCommandInput,
  MalformedTimestampPathHttpDateCommandOutput,
} from "../commands/MalformedTimestampPathHttpDateCommand";
import {
  MalformedTimestampQueryDefaultCommandInput,
  MalformedTimestampQueryDefaultCommandOutput,
} from "../commands/MalformedTimestampQueryDefaultCommand";
import {
  MalformedTimestampQueryEpochCommandInput,
  MalformedTimestampQueryEpochCommandOutput,
} from "../commands/MalformedTimestampQueryEpochCommand";
import {
  MalformedTimestampQueryHttpDateCommandInput,
  MalformedTimestampQueryHttpDateCommandOutput,
} from "../commands/MalformedTimestampQueryHttpDateCommand";
import { MalformedUnionCommandInput, MalformedUnionCommandOutput } from "../commands/MalformedUnionCommand";
import { MediaTypeHeaderCommandInput, MediaTypeHeaderCommandOutput } from "../commands/MediaTypeHeaderCommand";
import { NoInputAndNoOutputCommandInput, NoInputAndNoOutputCommandOutput } from "../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput } from "../commands/NoInputAndOutputCommand";
import {
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
} from "../commands/NullAndEmptyHeadersClientCommand";
import {
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
} from "../commands/NullAndEmptyHeadersServerCommand";
import {
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
} from "../commands/OmitsNullSerializesEmptyStringCommand";
import { PostPlayerActionCommandInput, PostPlayerActionCommandOutput } from "../commands/PostPlayerActionCommand";
import {
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
} from "../commands/PostUnionWithJsonNameCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "../commands/QueryIdempotencyTokenAutoFillCommand";
import {
  QueryParamsAsStringListMapCommandInput,
  QueryParamsAsStringListMapCommandOutput,
} from "../commands/QueryParamsAsStringListMapCommand";
import { QueryPrecedenceCommandInput, QueryPrecedenceCommandOutput } from "../commands/QueryPrecedenceCommand";
import { RecursiveShapesCommandInput, RecursiveShapesCommandOutput } from "../commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "../commands/SimpleScalarPropertiesCommand";
import { StreamingTraitsCommandInput, StreamingTraitsCommandOutput } from "../commands/StreamingTraitsCommand";
import {
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
} from "../commands/StreamingTraitsRequireLengthCommand";
import {
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
} from "../commands/StreamingTraitsWithMediaTypeCommand";
import { TestBodyStructureCommandInput, TestBodyStructureCommandOutput } from "../commands/TestBodyStructureCommand";
import { TestNoPayloadCommandInput, TestNoPayloadCommandOutput } from "../commands/TestNoPayloadCommand";
import { TestPayloadBlobCommandInput, TestPayloadBlobCommandOutput } from "../commands/TestPayloadBlobCommand";
import {
  TestPayloadStructureCommandInput,
  TestPayloadStructureCommandOutput,
} from "../commands/TestPayloadStructureCommand";
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "../commands/TimestampFormatHeadersCommand";
import { UnitInputAndOutputCommandInput, UnitInputAndOutputCommandOutput } from "../commands/UnitInputAndOutputCommand";
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
  UnionWithJsonName,
  Unit,
} from "../models/models_0";
import { RestJsonProtocolServiceException as __BaseException } from "../models/RestJsonProtocolServiceException";

export const serializeAws_restJson1AllQueryStringTypesCommand = async (
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AllQueryStringTypesInput";
  const query: any = map({
    ...convertMap(input.queryParamsMapOfStringList),
    String: [, input.queryString!],
    StringList: [
      () => input.queryStringList !== void 0,
      () => (input.queryStringList! || []).map((_entry) => _entry as any),
    ],
    StringSet: [
      () => input.queryStringSet !== void 0,
      () => (input.queryStringSet! || []).map((_entry) => _entry as any),
    ],
    Byte: [() => input.queryByte !== void 0, () => input.queryByte!.toString()],
    Short: [() => input.queryShort !== void 0, () => input.queryShort!.toString()],
    Integer: [() => input.queryInteger !== void 0, () => input.queryInteger!.toString()],
    IntegerList: [
      () => input.queryIntegerList !== void 0,
      () => (input.queryIntegerList! || []).map((_entry) => _entry.toString() as any),
    ],
    IntegerSet: [
      () => input.queryIntegerSet !== void 0,
      () => (input.queryIntegerSet! || []).map((_entry) => _entry.toString() as any),
    ],
    Long: [() => input.queryLong !== void 0, () => input.queryLong!.toString()],
    Float: [
      () => input.queryFloat !== void 0,
      () => (input.queryFloat! % 1 == 0 ? input.queryFloat! + ".0" : input.queryFloat!.toString()),
    ],
    Double: [
      () => input.queryDouble !== void 0,
      () => (input.queryDouble! % 1 == 0 ? input.queryDouble! + ".0" : input.queryDouble!.toString()),
    ],
    DoubleList: [
      () => input.queryDoubleList !== void 0,
      () =>
        (input.queryDoubleList! || []).map((_entry) => (_entry % 1 == 0 ? _entry + ".0" : _entry.toString()) as any),
    ],
    Boolean: [() => input.queryBoolean !== void 0, () => input.queryBoolean!.toString()],
    BooleanList: [
      () => input.queryBooleanList !== void 0,
      () => (input.queryBooleanList! || []).map((_entry) => _entry.toString() as any),
    ],
    Timestamp: [
      () => input.queryTimestamp !== void 0,
      () => (input.queryTimestamp!.toISOString().split(".")[0] + "Z").toString(),
    ],
    TimestampList: [
      () => input.queryTimestampList !== void 0,
      () =>
        (input.queryTimestampList! || []).map((_entry) => (_entry.toISOString().split(".")[0] + "Z").toString() as any),
    ],
    Enum: [, input.queryEnum!],
    EnumList: [() => input.queryEnumList !== void 0, () => (input.queryEnumList! || []).map((_entry) => _entry as any)],
    IntegerEnum: [() => input.queryIntegerEnum !== void 0, () => input.queryIntegerEnum!.toString()],
    IntegerEnumList: [
      () => input.queryIntegerEnumList !== void 0,
      () => (input.queryIntegerEnumList! || []).map((_entry) => _entry.toString() as any),
    ],
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

export const serializeAws_restJson1ConstantAndVariableQueryStringCommand = async (
  input: ConstantAndVariableQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ConstantAndVariableQueryString";
  const query: any = map({
    foo: [, "bar"],
    baz: [, input.baz!],
    maybeSet: [, input.maybeSet!],
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

export const serializeAws_restJson1ConstantQueryStringCommand = async (
  input: ConstantQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ConstantQueryString/{hello}";
  resolvedPath = __resolvedPath(resolvedPath, input, "hello", () => input.hello!, "{hello}", false);
  const query: any = map({
    foo: [, "bar"],
    hello: [, ""],
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

export const serializeAws_restJson1DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DatetimeOffsets";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DocumentTypeCommand = async (
  input: DocumentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DocumentType";
  let body: any;
  body = JSON.stringify({
    ...(input.documentValue != null && { documentValue: serializeAws_restJson1Document(input.documentValue, context) }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DocumentTypeAsPayloadCommand = async (
  input: DocumentTypeAsPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DocumentTypeAsPayload";
  let body: any;
  if (input.documentValue !== undefined) {
    if (input.documentValue === null) {
      body = "null";
    } else {
      body = input.documentValue;
    }
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EmptyInputAndEmptyOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EndpointOperation";
  let body: any;
  body = "";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "foo." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EndpointWithHostLabelOperation";
  let body: any;
  body = JSON.stringify({
    ...(input.label != null && { label: input.label }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "foo.{label}." + resolvedHostname;
    if (input.label === undefined) {
      throw new Error("Empty value provided for input host prefix: label.");
    }
    resolvedHostname = resolvedHostname.replace("{label}", input.label!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GreetingWithErrors";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HostWithPathOperation";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpChecksumRequiredCommand = async (
  input: HttpChecksumRequiredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpChecksumRequired";
  let body: any;
  body = JSON.stringify({
    ...(input.foo != null && { foo: input.foo }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpEnumPayloadCommand = async (
  input: HttpEnumPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "text/plain",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EnumPayload";
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpPayloadTraitsCommand = async (
  input: HttpPayloadTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-foo": input.foo!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadTraits";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand = async (
  input: HttpPayloadTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    "x-foo": input.foo!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadTraitsWithMediaType";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpPayloadWithStructureCommand = async (
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadWithStructure";
  let body: any;
  if (input.nested !== undefined) {
    body = serializeAws_restJson1NestedPayload(input.nested, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpPrefixHeadersCommand = async (
  input: HttpPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-foo": input.foo!,
    ...(input.fooMap !== undefined &&
      Object.keys(input.fooMap).reduce((acc: any, suffix: string) => {
        acc[`x-foo-${suffix.toLowerCase()}`] = input.fooMap![suffix];
        return acc;
      }, {})),
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPrefixHeaders";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpPrefixHeadersInResponseCommand = async (
  input: HttpPrefixHeadersInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPrefixHeadersResponse";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpRequestWithFloatLabelsCommand = async (
  input: HttpRequestWithFloatLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FloatHttpLabels/{float}/{double}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "float",
    () => (input.float! % 1 == 0 ? input.float! + ".0" : input.float!.toString()),
    "{float}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "double",
    () => (input.double! % 1 == 0 ? input.double! + ".0" : input.double!.toString()),
    "{double}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpRequestWithGreedyLabelInPathCommand = async (
  input: HttpRequestWithGreedyLabelInPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/HttpRequestWithGreedyLabelInPath/foo/{foo}/baz/{baz+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "foo", () => input.foo!, "{foo}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "baz", () => input.baz!, "{baz+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpRequestWithLabelsCommand = async (
  input: HttpRequestWithLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/HttpRequestWithLabels/{string}/{short}/{integer}/{long}/{float}/{double}/{boolean}/{timestamp}";
  resolvedPath = __resolvedPath(resolvedPath, input, "string", () => input.string!, "{string}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "short", () => input.short!.toString(), "{short}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "integer", () => input.integer!.toString(), "{integer}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "long", () => input.long!.toString(), "{long}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "float",
    () => (input.float! % 1 == 0 ? input.float! + ".0" : input.float!.toString()),
    "{float}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "double",
    () => (input.double! % 1 == 0 ? input.double! + ".0" : input.double!.toString()),
    "{double}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "boolean", () => input.boolean!.toString(), "{boolean}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "timestamp",
    () => (input.timestamp!.toISOString().split(".")[0] + "Z").toString(),
    "{timestamp}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand = async (
  input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/HttpRequestWithLabelsAndTimestampFormat/{memberEpochSeconds}/{memberHttpDate}/{memberDateTime}/{defaultFormat}/{targetEpochSeconds}/{targetHttpDate}/{targetDateTime}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "memberEpochSeconds",
    () => Math.round(input.memberEpochSeconds!.getTime() / 1000).toString(),
    "{memberEpochSeconds}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "memberHttpDate",
    () => __dateToUtcString(input.memberHttpDate!).toString(),
    "{memberHttpDate}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "memberDateTime",
    () => (input.memberDateTime!.toISOString().split(".")[0] + "Z").toString(),
    "{memberDateTime}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "defaultFormat",
    () => (input.defaultFormat!.toISOString().split(".")[0] + "Z").toString(),
    "{defaultFormat}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "targetEpochSeconds",
    () => Math.round(input.targetEpochSeconds!.getTime() / 1000).toString(),
    "{targetEpochSeconds}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "targetHttpDate",
    () => __dateToUtcString(input.targetHttpDate!).toString(),
    "{targetHttpDate}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "targetDateTime",
    () => (input.targetDateTime!.toISOString().split(".")[0] + "Z").toString(),
    "{targetDateTime}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpRequestWithRegexLiteralCommand = async (
  input: HttpRequestWithRegexLiteralCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ReDosLiteral/{str}/(a+)+";
  resolvedPath = __resolvedPath(resolvedPath, input, "str", () => input.str!, "{str}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpResponseCodeCommand = async (
  input: HttpResponseCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpResponseCode";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1HttpStringPayloadCommand = async (
  input: HttpStringPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "text/plain",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StringPayload";
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1IgnoreQueryParamsInResponseCommand = async (
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/IgnoreQueryParamsInResponse";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1InputAndOutputWithHeadersCommand = async (
  input: InputAndOutputWithHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/InputAndOutputWithHeaders";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonBlobsCommand = async (
  input: JsonBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonBlobs";
  let body: any;
  body = JSON.stringify({
    ...(input.data != null && { data: context.base64Encoder(input.data) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonEnumsCommand = async (
  input: JsonEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonEnums";
  let body: any;
  body = JSON.stringify({
    ...(input.fooEnum1 != null && { fooEnum1: input.fooEnum1 }),
    ...(input.fooEnum2 != null && { fooEnum2: input.fooEnum2 }),
    ...(input.fooEnum3 != null && { fooEnum3: input.fooEnum3 }),
    ...(input.fooEnumList != null && { fooEnumList: serializeAws_restJson1FooEnumList(input.fooEnumList, context) }),
    ...(input.fooEnumMap != null && { fooEnumMap: serializeAws_restJson1FooEnumMap(input.fooEnumMap, context) }),
    ...(input.fooEnumSet != null && { fooEnumSet: serializeAws_restJson1FooEnumSet(input.fooEnumSet, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonIntEnumsCommand = async (
  input: JsonIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonIntEnums";
  let body: any;
  body = JSON.stringify({
    ...(input.integerEnum1 != null && { integerEnum1: input.integerEnum1 }),
    ...(input.integerEnum2 != null && { integerEnum2: input.integerEnum2 }),
    ...(input.integerEnum3 != null && { integerEnum3: input.integerEnum3 }),
    ...(input.integerEnumList != null && {
      integerEnumList: serializeAws_restJson1IntegerEnumList(input.integerEnumList, context),
    }),
    ...(input.integerEnumMap != null && {
      integerEnumMap: serializeAws_restJson1IntegerEnumMap(input.integerEnumMap, context),
    }),
    ...(input.integerEnumSet != null && {
      integerEnumSet: serializeAws_restJson1IntegerEnumSet(input.integerEnumSet, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonListsCommand = async (
  input: JsonListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonLists";
  let body: any;
  body = JSON.stringify({
    ...(input.booleanList != null && { booleanList: serializeAws_restJson1BooleanList(input.booleanList, context) }),
    ...(input.enumList != null && { enumList: serializeAws_restJson1FooEnumList(input.enumList, context) }),
    ...(input.intEnumList != null && {
      intEnumList: serializeAws_restJson1IntegerEnumList(input.intEnumList, context),
    }),
    ...(input.integerList != null && { integerList: serializeAws_restJson1IntegerList(input.integerList, context) }),
    ...(input.nestedStringList != null && {
      nestedStringList: serializeAws_restJson1NestedStringList(input.nestedStringList, context),
    }),
    ...(input.sparseStringList != null && {
      sparseStringList: serializeAws_restJson1SparseStringList(input.sparseStringList, context),
    }),
    ...(input.stringList != null && { stringList: serializeAws_restJson1StringList(input.stringList, context) }),
    ...(input.stringSet != null && { stringSet: serializeAws_restJson1StringSet(input.stringSet, context) }),
    ...(input.structureList != null && {
      myStructureList: serializeAws_restJson1StructureList(input.structureList, context),
    }),
    ...(input.timestampList != null && {
      timestampList: serializeAws_restJson1TimestampList(input.timestampList, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonMapsCommand = async (
  input: JsonMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonMaps";
  let body: any;
  body = JSON.stringify({
    ...(input.denseBooleanMap != null && {
      denseBooleanMap: serializeAws_restJson1DenseBooleanMap(input.denseBooleanMap, context),
    }),
    ...(input.denseNumberMap != null && {
      denseNumberMap: serializeAws_restJson1DenseNumberMap(input.denseNumberMap, context),
    }),
    ...(input.denseSetMap != null && { denseSetMap: serializeAws_restJson1DenseSetMap(input.denseSetMap, context) }),
    ...(input.denseStringMap != null && {
      denseStringMap: serializeAws_restJson1DenseStringMap(input.denseStringMap, context),
    }),
    ...(input.denseStructMap != null && {
      denseStructMap: serializeAws_restJson1DenseStructMap(input.denseStructMap, context),
    }),
    ...(input.sparseBooleanMap != null && {
      sparseBooleanMap: serializeAws_restJson1SparseBooleanMap(input.sparseBooleanMap, context),
    }),
    ...(input.sparseNumberMap != null && {
      sparseNumberMap: serializeAws_restJson1SparseNumberMap(input.sparseNumberMap, context),
    }),
    ...(input.sparseSetMap != null && {
      sparseSetMap: serializeAws_restJson1SparseSetMap(input.sparseSetMap, context),
    }),
    ...(input.sparseStringMap != null && {
      sparseStringMap: serializeAws_restJson1SparseStringMap(input.sparseStringMap, context),
    }),
    ...(input.sparseStructMap != null && {
      sparseStructMap: serializeAws_restJson1SparseStructMap(input.sparseStructMap, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonTimestampsCommand = async (
  input: JsonTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonTimestamps";
  let body: any;
  body = JSON.stringify({
    ...(input.dateTime != null && { dateTime: input.dateTime.toISOString().split(".")[0] + "Z" }),
    ...(input.dateTimeOnTarget != null && {
      dateTimeOnTarget: input.dateTimeOnTarget.toISOString().split(".")[0] + "Z",
    }),
    ...(input.epochSeconds != null && { epochSeconds: Math.round(input.epochSeconds.getTime() / 1000) }),
    ...(input.epochSecondsOnTarget != null && {
      epochSecondsOnTarget: Math.round(input.epochSecondsOnTarget.getTime() / 1000),
    }),
    ...(input.httpDate != null && { httpDate: __dateToUtcString(input.httpDate) }),
    ...(input.httpDateOnTarget != null && { httpDateOnTarget: __dateToUtcString(input.httpDateOnTarget) }),
    ...(input.normal != null && { normal: Math.round(input.normal.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1JsonUnionsCommand = async (
  input: JsonUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonUnions";
  let body: any;
  body = JSON.stringify({
    ...(input.contents != null && { contents: serializeAws_restJson1MyUnion(input.contents, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedAcceptWithBodyCommand = async (
  input: MalformedAcceptWithBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedAcceptWithBody";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedAcceptWithGenericStringCommand = async (
  input: MalformedAcceptWithGenericStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedAcceptWithGenericString";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedAcceptWithPayloadCommand = async (
  input: MalformedAcceptWithPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedAcceptWithPayload";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedBlobCommand = async (
  input: MalformedBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedBlob";
  let body: any;
  body = JSON.stringify({
    ...(input.blob != null && { blob: context.base64Encoder(input.blob) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedBooleanCommand = async (
  input: MalformedBooleanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    booleaninheader: [() => isSerializableHeaderValue(input.booleanInHeader), () => input.booleanInHeader!.toString()],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedBoolean/{booleanInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "booleanInPath",
    () => input.booleanInPath!.toString(),
    "{booleanInPath}",
    false
  );
  const query: any = map({
    booleanInQuery: [() => input.booleanInQuery !== void 0, () => input.booleanInQuery!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.booleanInBody != null && { booleanInBody: input.booleanInBody }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedByteCommand = async (
  input: MalformedByteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    byteinheader: [() => isSerializableHeaderValue(input.byteInHeader), () => input.byteInHeader!.toString()],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedByte/{byteInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "byteInPath",
    () => input.byteInPath!.toString(),
    "{byteInPath}",
    false
  );
  const query: any = map({
    byteInQuery: [() => input.byteInQuery !== void 0, () => input.byteInQuery!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.byteInBody != null && { byteInBody: input.byteInBody }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedContentTypeWithBodyCommand = async (
  input: MalformedContentTypeWithBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedContentTypeWithBody";
  let body: any;
  body = JSON.stringify({
    ...(input.hi != null && { hi: input.hi }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedContentTypeWithGenericStringCommand = async (
  input: MalformedContentTypeWithGenericStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "text/plain",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedContentTypeWithGenericString";
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedContentTypeWithoutBodyCommand = async (
  input: MalformedContentTypeWithoutBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedContentTypeWithoutBody";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedContentTypeWithPayloadCommand = async (
  input: MalformedContentTypeWithPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "image/jpeg",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedContentTypeWithPayload";
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedDoubleCommand = async (
  input: MalformedDoubleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    doubleinheader: [
      () => isSerializableHeaderValue(input.doubleInHeader),
      () => (input.doubleInHeader! % 1 == 0 ? input.doubleInHeader! + ".0" : input.doubleInHeader!.toString()),
    ],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedDouble/{doubleInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "doubleInPath",
    () => (input.doubleInPath! % 1 == 0 ? input.doubleInPath! + ".0" : input.doubleInPath!.toString()),
    "{doubleInPath}",
    false
  );
  const query: any = map({
    doubleInQuery: [
      () => input.doubleInQuery !== void 0,
      () => (input.doubleInQuery! % 1 == 0 ? input.doubleInQuery! + ".0" : input.doubleInQuery!.toString()),
    ],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.doubleInBody != null && { doubleInBody: __serializeFloat(input.doubleInBody) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedFloatCommand = async (
  input: MalformedFloatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    floatinheader: [
      () => isSerializableHeaderValue(input.floatInHeader),
      () => (input.floatInHeader! % 1 == 0 ? input.floatInHeader! + ".0" : input.floatInHeader!.toString()),
    ],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedFloat/{floatInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "floatInPath",
    () => (input.floatInPath! % 1 == 0 ? input.floatInPath! + ".0" : input.floatInPath!.toString()),
    "{floatInPath}",
    false
  );
  const query: any = map({
    floatInQuery: [
      () => input.floatInQuery !== void 0,
      () => (input.floatInQuery! % 1 == 0 ? input.floatInQuery! + ".0" : input.floatInQuery!.toString()),
    ],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.floatInBody != null && { floatInBody: __serializeFloat(input.floatInBody) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedIntegerCommand = async (
  input: MalformedIntegerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    integerinheader: [() => isSerializableHeaderValue(input.integerInHeader), () => input.integerInHeader!.toString()],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedInteger/{integerInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "integerInPath",
    () => input.integerInPath!.toString(),
    "{integerInPath}",
    false
  );
  const query: any = map({
    integerInQuery: [() => input.integerInQuery !== void 0, () => input.integerInQuery!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.integerInBody != null && { integerInBody: input.integerInBody }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedListCommand = async (
  input: MalformedListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedList";
  let body: any;
  body = JSON.stringify({
    ...(input.bodyList != null && { bodyList: serializeAws_restJson1SimpleList(input.bodyList, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedLongCommand = async (
  input: MalformedLongCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    longinheader: [() => isSerializableHeaderValue(input.longInHeader), () => input.longInHeader!.toString()],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedLong/{longInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "longInPath",
    () => input.longInPath!.toString(),
    "{longInPath}",
    false
  );
  const query: any = map({
    longInQuery: [() => input.longInQuery !== void 0, () => input.longInQuery!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.longInBody != null && { longInBody: input.longInBody }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedMapCommand = async (
  input: MalformedMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedMap";
  let body: any;
  body = JSON.stringify({
    ...(input.bodyMap != null && { bodyMap: serializeAws_restJson1SimpleMap(input.bodyMap, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedRequestBodyCommand = async (
  input: MalformedRequestBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedRequestBody";
  let body: any;
  body = JSON.stringify({
    ...(input.float != null && { float: __serializeFloat(input.float) }),
    ...(input.int != null && { int: input.int }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedShortCommand = async (
  input: MalformedShortCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    shortinheader: [() => isSerializableHeaderValue(input.shortInHeader), () => input.shortInHeader!.toString()],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedShort/{shortInPath}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "shortInPath",
    () => input.shortInPath!.toString(),
    "{shortInPath}",
    false
  );
  const query: any = map({
    shortInQuery: [() => input.shortInQuery !== void 0, () => input.shortInQuery!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.shortInBody != null && { shortInBody: input.shortInBody }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedStringCommand = async (
  input: MalformedStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "amz-media-typed-header": [
      () => isSerializableHeaderValue(input.blob),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.blob!))),
    ],
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedString";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampBodyDateTimeCommand = async (
  input: MalformedTimestampBodyDateTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampBodyDateTime";
  let body: any;
  body = JSON.stringify({
    ...(input.timestamp != null && { timestamp: input.timestamp.toISOString().split(".")[0] + "Z" }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampBodyDefaultCommand = async (
  input: MalformedTimestampBodyDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampBodyDefault";
  let body: any;
  body = JSON.stringify({
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampBodyHttpDateCommand = async (
  input: MalformedTimestampBodyHttpDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampBodyHttpDate";
  let body: any;
  body = JSON.stringify({
    ...(input.timestamp != null && { timestamp: __dateToUtcString(input.timestamp) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampHeaderDateTimeCommand = async (
  input: MalformedTimestampHeaderDateTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    timestamp: [
      () => isSerializableHeaderValue(input.timestamp),
      () => (input.timestamp!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampHeaderDateTime";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampHeaderDefaultCommand = async (
  input: MalformedTimestampHeaderDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    timestamp: [() => isSerializableHeaderValue(input.timestamp), () => __dateToUtcString(input.timestamp!).toString()],
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampHeaderDefault";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampHeaderEpochCommand = async (
  input: MalformedTimestampHeaderEpochCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    timestamp: [
      () => isSerializableHeaderValue(input.timestamp),
      () => Math.round(input.timestamp!.getTime() / 1000).toString(),
    ],
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampHeaderEpoch";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampPathDefaultCommand = async (
  input: MalformedTimestampPathDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/MalformedTimestampPathDefault/{timestamp}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "timestamp",
    () => (input.timestamp!.toISOString().split(".")[0] + "Z").toString(),
    "{timestamp}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampPathEpochCommand = async (
  input: MalformedTimestampPathEpochCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampPathEpoch/{timestamp}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "timestamp",
    () => Math.round(input.timestamp!.getTime() / 1000).toString(),
    "{timestamp}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampPathHttpDateCommand = async (
  input: MalformedTimestampPathHttpDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/MalformedTimestampPathHttpDate/{timestamp}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "timestamp",
    () => __dateToUtcString(input.timestamp!).toString(),
    "{timestamp}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampQueryDefaultCommand = async (
  input: MalformedTimestampQueryDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampQueryDefault";
  const query: any = map({
    timestamp: [
      __expectNonNull(input.timestamp, `timestamp`) != null,
      () => (input.timestamp!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampQueryEpochCommand = async (
  input: MalformedTimestampQueryEpochCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampQueryEpoch";
  const query: any = map({
    timestamp: [
      __expectNonNull(input.timestamp, `timestamp`) != null,
      () => Math.round(input.timestamp!.getTime() / 1000).toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedTimestampQueryHttpDateCommand = async (
  input: MalformedTimestampQueryHttpDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedTimestampQueryHttpDate";
  const query: any = map({
    timestamp: [
      __expectNonNull(input.timestamp, `timestamp`) != null,
      () => __dateToUtcString(input.timestamp!).toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1MalformedUnionCommand = async (
  input: MalformedUnionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MalformedUnion";
  let body: any;
  body = JSON.stringify({
    ...(input.union != null && { union: serializeAws_restJson1SimpleUnion(input.union, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1MediaTypeHeaderCommand = async (
  input: MediaTypeHeaderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-json": [
      () => isSerializableHeaderValue(input.json),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.json!))),
    ],
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MediaTypeHeader";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NoInputAndNoOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NoInputAndOutputOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1NullAndEmptyHeadersClientCommand = async (
  input: NullAndEmptyHeadersClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-a": input.a!,
    "x-b": input.b!,
    "x-c": [() => isSerializableHeaderValue(input.c), () => (input.c! || []).map((_entry) => _entry as any).join(", ")],
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NullAndEmptyHeadersClient";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1NullAndEmptyHeadersServerCommand = async (
  input: NullAndEmptyHeadersServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-a": input.a!,
    "x-b": input.b!,
    "x-c": [() => isSerializableHeaderValue(input.c), () => (input.c! || []).map((_entry) => _entry as any).join(", ")],
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NullAndEmptyHeadersServer";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1OmitsNullSerializesEmptyStringCommand = async (
  input: OmitsNullSerializesEmptyStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/OmitsNullSerializesEmptyString";
  const query: any = map({
    Null: [, input.nullValue!],
    Empty: [, input.emptyString!],
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

export const serializeAws_restJson1PostPlayerActionCommand = async (
  input: PostPlayerActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PostPlayerAction";
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: serializeAws_restJson1PlayerAction(input.action, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PostUnionWithJsonNameCommand = async (
  input: PostUnionWithJsonNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PostUnionWithJsonName";
  let body: any;
  body = JSON.stringify({
    ...(input.value != null && { value: serializeAws_restJson1UnionWithJsonName(input.value, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/QueryIdempotencyTokenAutoFill";
  const query: any = map({
    token: [, input.token ?? generateIdempotencyToken()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1QueryParamsAsStringListMapCommand = async (
  input: QueryParamsAsStringListMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StringListMap";
  const query: any = map({
    ...convertMap(input.foo),
    corge: [, input.qux!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1QueryPrecedenceCommand = async (
  input: QueryPrecedenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Precedence";
  const query: any = map({
    ...convertMap(input.baz),
    bar: [, input.foo!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RecursiveShapes";
  let body: any;
  body = JSON.stringify({
    ...(input.nested != null && {
      nested: serializeAws_restJson1RecursiveShapesInputOutputNested1(input.nested, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-foo": input.foo!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SimpleScalarProperties";
  let body: any;
  body = JSON.stringify({
    ...(input.byteValue != null && { byteValue: input.byteValue }),
    ...(input.doubleValue != null && { DoubleDribble: __serializeFloat(input.doubleValue) }),
    ...(input.falseBooleanValue != null && { falseBooleanValue: input.falseBooleanValue }),
    ...(input.floatValue != null && { floatValue: __serializeFloat(input.floatValue) }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.longValue != null && { longValue: input.longValue }),
    ...(input.shortValue != null && { shortValue: input.shortValue }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
    ...(input.trueBooleanValue != null && { trueBooleanValue: input.trueBooleanValue }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StreamingTraitsCommand = async (
  input: StreamingTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-foo": input.foo!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StreamingTraits";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StreamingTraitsRequireLengthCommand = async (
  input: StreamingTraitsRequireLengthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-foo": input.foo!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StreamingTraitsRequireLength";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StreamingTraitsWithMediaTypeCommand = async (
  input: StreamingTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    "x-foo": input.foo!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StreamingTraitsWithMediaType";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TestBodyStructureCommand = async (
  input: TestBodyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-test-id": input.testId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/body";
  let body: any;
  body = JSON.stringify({
    ...(input.testConfig != null && { testConfig: serializeAws_restJson1TestConfig(input.testConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TestNoPayloadCommand = async (
  input: TestNoPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-test-id": input.testId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/no_payload";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TestPayloadBlobCommand = async (
  input: TestPayloadBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/blob_payload";
  let body: any;
  if (input.data !== undefined) {
    body = input.data;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TestPayloadStructureCommand = async (
  input: TestPayloadStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-test-id": input.testId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/payload";
  let body: any;
  if (input.payloadConfig !== undefined) {
    body = serializeAws_restJson1PayloadConfig(input.payloadConfig, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TimestampFormatHeadersCommand = async (
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
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
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TimestampFormatHeaders";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UnitInputAndOutputCommand = async (
  input: UnitInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UnitInputAndOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AllQueryStringTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1ConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConstantAndVariableQueryStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1ConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConstantQueryStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DatetimeOffsetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datetime != null) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.datetime));
  }
  return contents;
};

const deserializeAws_restJson1DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1DocumentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DocumentTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.documentValue != null) {
    contents.documentValue = deserializeAws_restJson1Document(data.documentValue, context);
  }
  if (data.stringValue != null) {
    contents.stringValue = __expectString(data.stringValue);
  }
  return contents;
};

const deserializeAws_restJson1DocumentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1DocumentTypeAsPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DocumentTypeAsPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.documentValue = data;
  contents.documentValue = JSON.parse(data);
  return contents;
};

const deserializeAws_restJson1DocumentTypeAsPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EmptyInputAndEmptyOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EndpointOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EndpointWithHostLabelOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GreetingWithErrorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    greeting: [, output.headers["x-greeting"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.restjson#ComplexError":
      throw await deserializeAws_restJson1ComplexErrorResponse(parsedOutput, context);
    case "FooError":
    case "aws.protocoltests.restjson#FooError":
      throw await deserializeAws_restJson1FooErrorResponse(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.restjson#InvalidGreeting":
      throw await deserializeAws_restJson1InvalidGreetingResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HostWithPathOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpChecksumRequiredCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpChecksumRequiredCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpChecksumRequiredCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.foo != null) {
    contents.foo = __expectString(data.foo);
  }
  return contents;
};

const deserializeAws_restJson1HttpChecksumRequiredCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpChecksumRequiredCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpEnumPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpEnumPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

const deserializeAws_restJson1HttpEnumPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPayloadTraitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

const deserializeAws_restJson1HttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

const deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPayloadWithStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = deserializeAws_restJson1NestedPayload(data, context);
  return contents;
};

const deserializeAws_restJson1HttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPrefixHeadersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1HttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpPrefixHeadersInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPrefixHeadersInResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    prefixHeaders: [
      ,
      Object.keys(output.headers)
        .filter((header) => header.startsWith(""))
        .reduce((acc, header) => {
          acc[header.substring(0)] = output.headers[header];
          return acc;
        }, {} as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpPrefixHeadersInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpRequestWithFloatLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithFloatLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpRequestWithFloatLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpRequestWithRegexLiteralCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithRegexLiteralCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithRegexLiteralCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpRequestWithRegexLiteralCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithRegexLiteralCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpResponseCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpResponseCodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  map(contents, {
    Status: [, output.statusCode],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1HttpResponseCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1HttpStringPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpStringPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

const deserializeAws_restJson1HttpStringPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1IgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1IgnoreQueryParamsInResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.baz != null) {
    contents.baz = __expectString(data.baz);
  }
  return contents;
};

const deserializeAws_restJson1IgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1InputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InputAndOutputWithHeadersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1InputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonBlobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.data != null) {
    contents.data = context.base64Decoder(data.data);
  }
  return contents;
};

const deserializeAws_restJson1JsonBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonEnumsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fooEnum1 != null) {
    contents.fooEnum1 = __expectString(data.fooEnum1);
  }
  if (data.fooEnum2 != null) {
    contents.fooEnum2 = __expectString(data.fooEnum2);
  }
  if (data.fooEnum3 != null) {
    contents.fooEnum3 = __expectString(data.fooEnum3);
  }
  if (data.fooEnumList != null) {
    contents.fooEnumList = deserializeAws_restJson1FooEnumList(data.fooEnumList, context);
  }
  if (data.fooEnumMap != null) {
    contents.fooEnumMap = deserializeAws_restJson1FooEnumMap(data.fooEnumMap, context);
  }
  if (data.fooEnumSet != null) {
    contents.fooEnumSet = deserializeAws_restJson1FooEnumSet(data.fooEnumSet, context);
  }
  return contents;
};

const deserializeAws_restJson1JsonEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonIntEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonIntEnumsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.integerEnum1 != null) {
    contents.integerEnum1 = __expectInt32(data.integerEnum1);
  }
  if (data.integerEnum2 != null) {
    contents.integerEnum2 = __expectInt32(data.integerEnum2);
  }
  if (data.integerEnum3 != null) {
    contents.integerEnum3 = __expectInt32(data.integerEnum3);
  }
  if (data.integerEnumList != null) {
    contents.integerEnumList = deserializeAws_restJson1IntegerEnumList(data.integerEnumList, context);
  }
  if (data.integerEnumMap != null) {
    contents.integerEnumMap = deserializeAws_restJson1IntegerEnumMap(data.integerEnumMap, context);
  }
  if (data.integerEnumSet != null) {
    contents.integerEnumSet = deserializeAws_restJson1IntegerEnumSet(data.integerEnumSet, context);
  }
  return contents;
};

const deserializeAws_restJson1JsonIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.booleanList != null) {
    contents.booleanList = deserializeAws_restJson1BooleanList(data.booleanList, context);
  }
  if (data.enumList != null) {
    contents.enumList = deserializeAws_restJson1FooEnumList(data.enumList, context);
  }
  if (data.intEnumList != null) {
    contents.intEnumList = deserializeAws_restJson1IntegerEnumList(data.intEnumList, context);
  }
  if (data.integerList != null) {
    contents.integerList = deserializeAws_restJson1IntegerList(data.integerList, context);
  }
  if (data.nestedStringList != null) {
    contents.nestedStringList = deserializeAws_restJson1NestedStringList(data.nestedStringList, context);
  }
  if (data.sparseStringList != null) {
    contents.sparseStringList = deserializeAws_restJson1SparseStringList(data.sparseStringList, context);
  }
  if (data.stringList != null) {
    contents.stringList = deserializeAws_restJson1StringList(data.stringList, context);
  }
  if (data.stringSet != null) {
    contents.stringSet = deserializeAws_restJson1StringSet(data.stringSet, context);
  }
  if (data.myStructureList != null) {
    contents.structureList = deserializeAws_restJson1StructureList(data.myStructureList, context);
  }
  if (data.timestampList != null) {
    contents.timestampList = deserializeAws_restJson1TimestampList(data.timestampList, context);
  }
  return contents;
};

const deserializeAws_restJson1JsonListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.denseBooleanMap != null) {
    contents.denseBooleanMap = deserializeAws_restJson1DenseBooleanMap(data.denseBooleanMap, context);
  }
  if (data.denseNumberMap != null) {
    contents.denseNumberMap = deserializeAws_restJson1DenseNumberMap(data.denseNumberMap, context);
  }
  if (data.denseSetMap != null) {
    contents.denseSetMap = deserializeAws_restJson1DenseSetMap(data.denseSetMap, context);
  }
  if (data.denseStringMap != null) {
    contents.denseStringMap = deserializeAws_restJson1DenseStringMap(data.denseStringMap, context);
  }
  if (data.denseStructMap != null) {
    contents.denseStructMap = deserializeAws_restJson1DenseStructMap(data.denseStructMap, context);
  }
  if (data.sparseBooleanMap != null) {
    contents.sparseBooleanMap = deserializeAws_restJson1SparseBooleanMap(data.sparseBooleanMap, context);
  }
  if (data.sparseNumberMap != null) {
    contents.sparseNumberMap = deserializeAws_restJson1SparseNumberMap(data.sparseNumberMap, context);
  }
  if (data.sparseSetMap != null) {
    contents.sparseSetMap = deserializeAws_restJson1SparseSetMap(data.sparseSetMap, context);
  }
  if (data.sparseStringMap != null) {
    contents.sparseStringMap = deserializeAws_restJson1SparseStringMap(data.sparseStringMap, context);
  }
  if (data.sparseStructMap != null) {
    contents.sparseStructMap = deserializeAws_restJson1SparseStructMap(data.sparseStructMap, context);
  }
  return contents;
};

const deserializeAws_restJson1JsonMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonTimestampsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dateTime != null) {
    contents.dateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.dateTime));
  }
  if (data.dateTimeOnTarget != null) {
    contents.dateTimeOnTarget = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.dateTimeOnTarget));
  }
  if (data.epochSeconds != null) {
    contents.epochSeconds = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.epochSeconds)));
  }
  if (data.epochSecondsOnTarget != null) {
    contents.epochSecondsOnTarget = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.epochSecondsOnTarget)));
  }
  if (data.httpDate != null) {
    contents.httpDate = __expectNonNull(__parseRfc7231DateTime(data.httpDate));
  }
  if (data.httpDateOnTarget != null) {
    contents.httpDateOnTarget = __expectNonNull(__parseRfc7231DateTime(data.httpDateOnTarget));
  }
  if (data.normal != null) {
    contents.normal = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.normal)));
  }
  return contents;
};

const deserializeAws_restJson1JsonTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonUnionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contents != null) {
    contents.contents = deserializeAws_restJson1MyUnion(__expectUnion(data.contents), context);
  }
  return contents;
};

const deserializeAws_restJson1JsonUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedAcceptWithBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedAcceptWithBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.hi != null) {
    contents.hi = __expectString(data.hi);
  }
  return contents;
};

const deserializeAws_restJson1MalformedAcceptWithBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedAcceptWithGenericStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithGenericStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedAcceptWithGenericStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

const deserializeAws_restJson1MalformedAcceptWithGenericStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithGenericStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedAcceptWithPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedAcceptWithPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.payload = data;
  return contents;
};

const deserializeAws_restJson1MalformedAcceptWithPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBlobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedBlobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedBlobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBlobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedBooleanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBooleanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedBooleanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedBooleanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBooleanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedByteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedByteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedByteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedByteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedByteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedContentTypeWithBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedContentTypeWithBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedContentTypeWithBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedContentTypeWithGenericStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithGenericStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedContentTypeWithGenericStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedContentTypeWithGenericStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithGenericStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedContentTypeWithoutBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithoutBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedContentTypeWithoutBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedContentTypeWithoutBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithoutBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedContentTypeWithPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedContentTypeWithPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedContentTypeWithPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedDoubleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedDoubleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedDoubleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedDoubleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedDoubleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedFloatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedFloatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedFloatCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedFloatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedFloatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedIntegerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedIntegerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedIntegerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedIntegerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedIntegerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedLongCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedLongCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedLongCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedLongCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedLongCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedRequestBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedRequestBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedRequestBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedRequestBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedRequestBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedShortCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedShortCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedShortCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedShortCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedShortCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampBodyDateTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDateTimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampBodyDateTimeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampBodyDateTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDateTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampBodyDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampBodyDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampBodyDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampBodyHttpDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyHttpDateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampBodyHttpDateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampBodyHttpDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyHttpDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDateTimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDateTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampHeaderDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampHeaderDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampHeaderDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampHeaderEpochCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderEpochCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampHeaderEpochCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampHeaderEpochCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderEpochCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampPathDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampPathDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampPathDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampPathEpochCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathEpochCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampPathEpochCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampPathEpochCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathEpochCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampPathHttpDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathHttpDateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampPathHttpDateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampPathHttpDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathHttpDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampQueryDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampQueryDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampQueryDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampQueryEpochCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryEpochCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampQueryEpochCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampQueryEpochCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryEpochCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedTimestampQueryHttpDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryHttpDateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedTimestampQueryHttpDateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedTimestampQueryHttpDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryHttpDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MalformedUnionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedUnionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MalformedUnionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MalformedUnionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedUnionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1MediaTypeHeaderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MediaTypeHeaderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MediaTypeHeaderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    json: [
      () => void 0 !== output.headers["x-json"],
      () => new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers["x-json"])).toString("utf8")),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1MediaTypeHeaderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MediaTypeHeaderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NoInputAndNoOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NoInputAndOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1NullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NullAndEmptyHeadersClientCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1NullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1NullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NullAndEmptyHeadersServerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1NullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1OmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1OmitsNullSerializesEmptyStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1OmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1PostPlayerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostPlayerActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PostPlayerActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action != null) {
    contents.action = deserializeAws_restJson1PlayerAction(__expectUnion(data.action), context);
  }
  return contents;
};

const deserializeAws_restJson1PostPlayerActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostPlayerActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1PostUnionWithJsonNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostUnionWithJsonNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PostUnionWithJsonNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.value != null) {
    contents.value = deserializeAws_restJson1UnionWithJsonName(__expectUnion(data.value), context);
  }
  return contents;
};

const deserializeAws_restJson1PostUnionWithJsonNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostUnionWithJsonNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1QueryParamsAsStringListMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryParamsAsStringListMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1QueryParamsAsStringListMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1QueryPrecedenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryPrecedenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1QueryPrecedenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1RecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RecursiveShapesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nested != null) {
    contents.nested = deserializeAws_restJson1RecursiveShapesInputOutputNested1(data.nested, context);
  }
  return contents;
};

const deserializeAws_restJson1RecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SimpleScalarPropertiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.byteValue != null) {
    contents.byteValue = __expectByte(data.byteValue);
  }
  if (data.DoubleDribble != null) {
    contents.doubleValue = __limitedParseDouble(data.DoubleDribble);
  }
  if (data.falseBooleanValue != null) {
    contents.falseBooleanValue = __expectBoolean(data.falseBooleanValue);
  }
  if (data.floatValue != null) {
    contents.floatValue = __limitedParseFloat32(data.floatValue);
  }
  if (data.integerValue != null) {
    contents.integerValue = __expectInt32(data.integerValue);
  }
  if (data.longValue != null) {
    contents.longValue = __expectLong(data.longValue);
  }
  if (data.shortValue != null) {
    contents.shortValue = __expectShort(data.shortValue);
  }
  if (data.stringValue != null) {
    contents.stringValue = __expectString(data.stringValue);
  }
  if (data.trueBooleanValue != null) {
    contents.trueBooleanValue = __expectBoolean(data.trueBooleanValue);
  }
  return contents;
};

const deserializeAws_restJson1SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1StreamingTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<StreamingTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamingTraitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.blob = data;
  return contents;
};

const deserializeAws_restJson1StreamingTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1StreamingTraitsRequireLengthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamingTraitsRequireLengthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StreamingTraitsRequireLengthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<StreamingTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamingTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.blob = data;
  return contents;
};

const deserializeAws_restJson1StreamingTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1TestBodyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestBodyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestBodyStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    testId: [, output.headers["x-amz-test-id"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.testConfig != null) {
    contents.testConfig = deserializeAws_restJson1TestConfig(data.testConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1TestBodyStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestBodyStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1TestNoPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestNoPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestNoPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    testId: [, output.headers["x-amz-test-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TestNoPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestNoPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1TestPayloadBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadBlobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestPayloadBlobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.data = data;
  return contents;
};

const deserializeAws_restJson1TestPayloadBlobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadBlobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1TestPayloadStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestPayloadStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    testId: [, output.headers["x-amz-test-id"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.payloadConfig = deserializeAws_restJson1PayloadConfig(data, context);
  return contents;
};

const deserializeAws_restJson1TestPayloadStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1TimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TimestampFormatHeadersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
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
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers["x-memberdatetime"])),
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
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers["x-targetdatetime"])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UnitInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnitInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnitInputAndOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UnitInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnitInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const map = __map;
const deserializeAws_restJson1ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const contents: any = map({
    Header: [, parsedOutput.headers["x-header"]],
  });
  const data: any = parsedOutput.body;
  if (data.Nested != null) {
    contents.Nested = deserializeAws_restJson1ComplexNestedErrorData(data.Nested, context);
  }
  if (data.TopLevel != null) {
    contents.TopLevel = __expectString(data.TopLevel);
  }
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1FooErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new FooError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1DenseBooleanMap = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1DenseNumberMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1DenseSetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1StringSet(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1DenseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1DenseStructMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1GreetingStruct(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1Document = (input: __DocumentType, context: __SerdeContext): any => {
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
    ...(input.greeting != null && { greeting: input.greeting }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1PayloadConfig = (input: PayloadConfig, context: __SerdeContext): any => {
  return {
    ...(input.data != null && { data: input.data }),
  };
};

const serializeAws_restJson1PlayerAction = (input: PlayerAction, context: __SerdeContext): any => {
  return PlayerAction.visit(input, {
    quit: (value) => ({ quit: serializeAws_restJson1Unit(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  return {
    ...(input.foo != null && { foo: input.foo }),
    ...(input.nested != null && {
      nested: serializeAws_restJson1RecursiveShapesInputOutputNested2(input.nested, context),
    }),
  };
};

const serializeAws_restJson1RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  return {
    ...(input.bar != null && { bar: input.bar }),
    ...(input.recursiveMember != null && {
      recursiveMember: serializeAws_restJson1RecursiveShapesInputOutputNested1(input.recursiveMember, context),
    }),
  };
};

const serializeAws_restJson1SimpleList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SimpleMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SimpleUnion = (input: SimpleUnion, context: __SerdeContext): any => {
  return SimpleUnion.visit(input, {
    int: (value) => ({ int: value }),
    string: (value) => ({ string: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1SparseBooleanMap = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SparseNumberMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SparseSetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = serializeAws_restJson1StringSet(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SparseStructMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = serializeAws_restJson1GreetingStruct(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1StructureList = (input: StructureListMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StructureListMember(entry, context);
    });
};

const serializeAws_restJson1StructureListMember = (input: StructureListMember, context: __SerdeContext): any => {
  return {
    ...(input.a != null && { value: input.a }),
    ...(input.b != null && { other: input.b }),
  };
};

const serializeAws_restJson1TestConfig = (input: TestConfig, context: __SerdeContext): any => {
  return {
    ...(input.timeout != null && { timeout: input.timeout }),
  };
};

const serializeAws_restJson1UnionWithJsonName = (input: UnionWithJsonName, context: __SerdeContext): any => {
  return UnionWithJsonName.visit(input, {
    bar: (value) => ({ bar: value }),
    baz: (value) => ({ _baz: value }),
    foo: (value) => ({ FOO: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1RenamedGreeting = (input: RenamedGreeting, context: __SerdeContext): any => {
  return {
    ...(input.salutation != null && { salutation: input.salutation }),
  };
};

const serializeAws_restJson1BooleanList = (input: boolean[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FooEnumMap = (input: Record<string, FooEnum | string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1FooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return {
    ...(input.hi != null && { hi: input.hi }),
  };
};

const serializeAws_restJson1IntegerEnumList = (input: (IntegerEnum | number)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IntegerEnumMap = (
  input: Record<string, IntegerEnum | number>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1IntegerEnumSet = (input: (IntegerEnum | number)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NestedStringList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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

const serializeAws_restJson1SparseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1StringSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return Math.round(entry.getTime() / 1000);
    });
};

const serializeAws_restJson1Unit = (input: Unit, context: __SerdeContext): any => {
  return {};
};

const deserializeAws_restJson1ComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  return {
    Foo: __expectString(output.Fooooo),
  } as any;
};

const deserializeAws_restJson1DenseBooleanMap = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DenseNumberMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DenseSetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1StringSet(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1DenseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DenseStructMap = (
  output: any,
  context: __SerdeContext
): Record<string, GreetingStruct> => {
  return Object.entries(output).reduce((acc: Record<string, GreetingStruct>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1GreetingStruct(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

const deserializeAws_restJson1MyUnion = (output: any, context: __SerdeContext): MyUnion => {
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
      listValue: deserializeAws_restJson1StringList(output.listValue, context),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: deserializeAws_restJson1StringMap(output.mapValue, context),
    };
  }
  if (__expectInt32(output.numberValue) !== undefined) {
    return { numberValue: __expectInt32(output.numberValue) as any };
  }
  if (output.renamedStructureValue != null) {
    return {
      renamedStructureValue: deserializeAws_restJson1RenamedGreeting(output.renamedStructureValue, context),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structureValue != null) {
    return {
      structureValue: deserializeAws_restJson1GreetingStruct(output.structureValue, context),
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue))),
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

const deserializeAws_restJson1PayloadConfig = (output: any, context: __SerdeContext): PayloadConfig => {
  return {
    data: __expectInt32(output.data),
  } as any;
};

const deserializeAws_restJson1PlayerAction = (output: any, context: __SerdeContext): PlayerAction => {
  if (output.quit != null) {
    return {
      quit: deserializeAws_restJson1Unit(output.quit, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1RecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  return {
    foo: __expectString(output.foo),
    nested:
      output.nested != null
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
      output.recursiveMember != null
        ? deserializeAws_restJson1RecursiveShapesInputOutputNested1(output.recursiveMember, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SparseBooleanMap = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SparseNumberMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SparseSetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = deserializeAws_restJson1StringSet(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1SparseStructMap = (
  output: any,
  context: __SerdeContext
): Record<string, GreetingStruct> => {
  return Object.entries(output).reduce((acc: Record<string, GreetingStruct>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = deserializeAws_restJson1GreetingStruct(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StructureListMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
  return {
    a: __expectString(output.value),
    b: __expectString(output.other),
  } as any;
};

const deserializeAws_restJson1TestConfig = (output: any, context: __SerdeContext): TestConfig => {
  return {
    timeout: __expectInt32(output.timeout),
  } as any;
};

const deserializeAws_restJson1UnionWithJsonName = (output: any, context: __SerdeContext): UnionWithJsonName => {
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

const deserializeAws_restJson1RenamedGreeting = (output: any, context: __SerdeContext): RenamedGreeting => {
  return {
    salutation: __expectString(output.salutation),
  } as any;
};

const deserializeAws_restJson1BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectBoolean(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
  return Object.entries(output).reduce((acc: Record<string, FooEnum | string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return {
    hi: __expectString(output.hi),
  } as any;
};

const deserializeAws_restJson1IntegerEnumList = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1IntegerEnumMap = (
  output: any,
  context: __SerdeContext
): Record<string, IntegerEnum | number> => {
  return Object.entries(output).reduce((acc: Record<string, IntegerEnum | number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1IntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1IntegerList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StringList(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SparseStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

const deserializeAws_restJson1SparseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1StringSet = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

const deserializeAws_restJson1Unit = (output: any, context: __SerdeContext): Unit => {
  return {} as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
