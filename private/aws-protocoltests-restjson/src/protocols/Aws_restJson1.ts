// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import { FractionalSecondsCommandInput, FractionalSecondsCommandOutput } from "../commands/FractionalSecondsCommand";
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
import {
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
} from "../commands/HttpPayloadWithUnionCommand";
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
import {
  OmitsSerializingEmptyListsCommandInput,
  OmitsSerializingEmptyListsCommandOutput,
} from "../commands/OmitsSerializingEmptyListsCommand";
import { PostPlayerActionCommandInput, PostPlayerActionCommandOutput } from "../commands/PostPlayerActionCommand";
import {
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
} from "../commands/PostUnionWithJsonNameCommand";
import {
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "../commands/PutWithContentEncodingCommand";
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
  UnionPayload,
  UnionWithJsonName,
  Unit,
} from "../models/models_0";
import { RestJsonProtocolServiceException as __BaseException } from "../models/RestJsonProtocolServiceException";

/**
 * serializeAws_restJson1AllQueryStringTypesCommand
 */
export const se_AllQueryStringTypesCommand = async (
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/AllQueryStringTypesInput");
  const query: any = map({
    ...convertMap(input.queryParamsMapOfStringList),
    [_S]: [, input[_qS]!],
    [_SL]: [() => input.queryStringList !== void 0, () => (input[_qSL]! || []).map((_entry) => _entry as any)],
    [_SS]: [() => input.queryStringSet !== void 0, () => (input[_qSS]! || []).map((_entry) => _entry as any)],
    [_B]: [() => input.queryByte !== void 0, () => input[_qB]!.toString()],
    [_Sh]: [() => input.queryShort !== void 0, () => input[_qSu]!.toString()],
    [_I]: [() => input.queryInteger !== void 0, () => input[_qI]!.toString()],
    [_IL]: [
      () => input.queryIntegerList !== void 0,
      () => (input[_qIL]! || []).map((_entry) => _entry.toString() as any),
    ],
    [_IS]: [
      () => input.queryIntegerSet !== void 0,
      () => (input[_qIS]! || []).map((_entry) => _entry.toString() as any),
    ],
    [_L]: [() => input.queryLong !== void 0, () => input[_qL]!.toString()],
    [_F]: [
      () => input.queryFloat !== void 0,
      () => (input[_qF]! % 1 == 0 ? input[_qF]! + ".0" : input[_qF]!.toString()),
    ],
    [_D]: [
      () => input.queryDouble !== void 0,
      () => (input[_qD]! % 1 == 0 ? input[_qD]! + ".0" : input[_qD]!.toString()),
    ],
    [_DL]: [
      () => input.queryDoubleList !== void 0,
      () => (input[_qDL]! || []).map((_entry) => (_entry % 1 == 0 ? _entry + ".0" : _entry.toString()) as any),
    ],
    [_Bo]: [() => input.queryBoolean !== void 0, () => input[_qBu]!.toString()],
    [_BL]: [
      () => input.queryBooleanList !== void 0,
      () => (input[_qBL]! || []).map((_entry) => _entry.toString() as any),
    ],
    [_T]: [() => input.queryTimestamp !== void 0, () => (input[_qT]!.toISOString().split(".")[0] + "Z").toString()],
    [_TL]: [
      () => input.queryTimestampList !== void 0,
      () => (input[_qTL]! || []).map((_entry) => (_entry.toISOString().split(".")[0] + "Z").toString() as any),
    ],
    [_E]: [, input[_qE]!],
    [_EL]: [() => input.queryEnumList !== void 0, () => (input[_qEL]! || []).map((_entry) => _entry as any)],
    [_IE]: [() => input.queryIntegerEnum !== void 0, () => input[_qIE]!.toString()],
    [_IEL]: [
      () => input.queryIntegerEnumList !== void 0,
      () => (input[_qIEL]! || []).map((_entry) => _entry.toString() as any),
    ],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConstantAndVariableQueryStringCommand
 */
export const se_ConstantAndVariableQueryStringCommand = async (
  input: ConstantAndVariableQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ConstantAndVariableQueryString");
  const query: any = map({
    [_f]: [, "bar"],
    [_b]: [, input[_b]!],
    [_mS]: [, input[_mS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConstantQueryStringCommand
 */
export const se_ConstantQueryStringCommand = async (
  input: ConstantQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ConstantQueryString/{hello}");
  b.p("hello", () => input.hello!, "{hello}", false);
  const query: any = map({
    [_f]: [, "bar"],
    [_h]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DatetimeOffsetsCommand
 */
export const se_DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DatetimeOffsets");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DocumentTypeCommand
 */
export const se_DocumentTypeCommand = async (
  input: DocumentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DocumentType");
  let body: any;
  body = JSON.stringify(
    take(input, {
      documentValue: (_) => se_Document(_, context),
      stringValue: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DocumentTypeAsPayloadCommand
 */
export const se_DocumentTypeAsPayloadCommand = async (
  input: DocumentTypeAsPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DocumentTypeAsPayload");
  let body: any;
  if (input.documentValue !== undefined) {
    if (input.documentValue === null) {
      body = "null";
    } else {
      body = input.documentValue;
    }
  }
  body = JSON.stringify(body);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EmptyInputAndEmptyOutputCommand
 */
export const se_EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/EmptyInputAndEmptyOutput");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/EndpointOperation");
  let body: any;
  body = "";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "foo." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/EndpointWithHostLabelOperation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      label: [],
    })
  );
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
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1FractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/FractionalSeconds");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GreetingWithErrors");
  let body: any;
  body = "";
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HostWithPathOperationCommand
 */
export const se_HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/HostWithPathOperation");
  let body: any;
  body = "";
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpChecksumRequiredCommand
 */
export const se_HttpChecksumRequiredCommand = async (
  input: HttpChecksumRequiredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/HttpChecksumRequired");
  let body: any;
  body = JSON.stringify(
    take(input, {
      foo: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpEnumPayloadCommand
 */
export const se_HttpEnumPayloadCommand = async (
  input: HttpEnumPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "text/plain",
  };
  b.bp("/EnumPayload");
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpPayloadTraitsCommand
 */
export const se_HttpPayloadTraitsCommand = async (
  input: HttpPayloadTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_xf]: input[_f]!,
  });
  b.bp("/HttpPayloadTraits");
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand
 */
export const se_HttpPayloadTraitsWithMediaTypeCommand = async (
  input: HttpPayloadTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    [_xf]: input[_f]!,
  });
  b.bp("/HttpPayloadTraitsWithMediaType");
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpPayloadWithStructureCommand
 */
export const se_HttpPayloadWithStructureCommand = async (
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/HttpPayloadWithStructure");
  let body: any;
  if (input.nested !== undefined) {
    body = _json(input.nested);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpPayloadWithUnionCommand
 */
export const se_HttpPayloadWithUnionCommand = async (
  input: HttpPayloadWithUnionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/HttpPayloadWithUnion");
  let body: any;
  if (input.nested !== undefined) {
    body = _json(input.nested);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpPrefixHeadersCommand
 */
export const se_HttpPrefixHeadersCommand = async (
  input: HttpPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xf]: input[_f]!,
    ...(input.fooMap !== undefined &&
      Object.keys(input.fooMap).reduce((acc: any, suffix: string) => {
        acc[`x-foo-${suffix.toLowerCase()}`] = input.fooMap![suffix];
        return acc;
      }, {})),
  });
  b.bp("/HttpPrefixHeaders");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpPrefixHeadersInResponseCommand
 */
export const se_HttpPrefixHeadersInResponseCommand = async (
  input: HttpPrefixHeadersInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/HttpPrefixHeadersResponse");
  let body: any;
  body = "";
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpRequestWithFloatLabelsCommand
 */
export const se_HttpRequestWithFloatLabelsCommand = async (
  input: HttpRequestWithFloatLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/FloatHttpLabels/{float}/{double}");
  b.p("float", () => (input.float! % 1 == 0 ? input.float! + ".0" : input.float!.toString()), "{float}", false);
  b.p("double", () => (input.double! % 1 == 0 ? input.double! + ".0" : input.double!.toString()), "{double}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpRequestWithGreedyLabelInPathCommand
 */
export const se_HttpRequestWithGreedyLabelInPathCommand = async (
  input: HttpRequestWithGreedyLabelInPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/HttpRequestWithGreedyLabelInPath/foo/{foo}/baz/{baz+}");
  b.p("foo", () => input.foo!, "{foo}", false);
  b.p("baz", () => input.baz!, "{baz+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpRequestWithLabelsCommand
 */
export const se_HttpRequestWithLabelsCommand = async (
  input: HttpRequestWithLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/HttpRequestWithLabels/{string}/{short}/{integer}/{long}/{float}/{double}/{boolean}/{timestamp}");
  b.p("string", () => input.string!, "{string}", false);
  b.p("short", () => input.short!.toString(), "{short}", false);
  b.p("integer", () => input.integer!.toString(), "{integer}", false);
  b.p("long", () => input.long!.toString(), "{long}", false);
  b.p("float", () => (input.float! % 1 == 0 ? input.float! + ".0" : input.float!.toString()), "{float}", false);
  b.p("double", () => (input.double! % 1 == 0 ? input.double! + ".0" : input.double!.toString()), "{double}", false);
  b.p("boolean", () => input.boolean!.toString(), "{boolean}", false);
  b.p("timestamp", () => (input.timestamp!.toISOString().split(".")[0] + "Z").toString(), "{timestamp}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand
 */
export const se_HttpRequestWithLabelsAndTimestampFormatCommand = async (
  input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/HttpRequestWithLabelsAndTimestampFormat/{memberEpochSeconds}/{memberHttpDate}/{memberDateTime}/{defaultFormat}/{targetEpochSeconds}/{targetHttpDate}/{targetDateTime}"
  );
  b.p(
    "memberEpochSeconds",
    () => Math.round(input.memberEpochSeconds!.getTime() / 1000).toString(),
    "{memberEpochSeconds}",
    false
  );
  b.p("memberHttpDate", () => __dateToUtcString(input.memberHttpDate!).toString(), "{memberHttpDate}", false);
  b.p(
    "memberDateTime",
    () => (input.memberDateTime!.toISOString().split(".")[0] + "Z").toString(),
    "{memberDateTime}",
    false
  );
  b.p(
    "defaultFormat",
    () => (input.defaultFormat!.toISOString().split(".")[0] + "Z").toString(),
    "{defaultFormat}",
    false
  );
  b.p(
    "targetEpochSeconds",
    () => Math.round(input.targetEpochSeconds!.getTime() / 1000).toString(),
    "{targetEpochSeconds}",
    false
  );
  b.p("targetHttpDate", () => __dateToUtcString(input.targetHttpDate!).toString(), "{targetHttpDate}", false);
  b.p(
    "targetDateTime",
    () => (input.targetDateTime!.toISOString().split(".")[0] + "Z").toString(),
    "{targetDateTime}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpRequestWithRegexLiteralCommand
 */
export const se_HttpRequestWithRegexLiteralCommand = async (
  input: HttpRequestWithRegexLiteralCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ReDosLiteral/{str}/(a+)+");
  b.p("str", () => input.str!, "{str}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpResponseCodeCommand
 */
export const se_HttpResponseCodeCommand = async (
  input: HttpResponseCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/HttpResponseCode");
  let body: any;
  body = "";
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1HttpStringPayloadCommand
 */
export const se_HttpStringPayloadCommand = async (
  input: HttpStringPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "text/plain",
  };
  b.bp("/StringPayload");
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1IgnoreQueryParamsInResponseCommand
 */
export const se_IgnoreQueryParamsInResponseCommand = async (
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/IgnoreQueryParamsInResponse");
  let body: any;
  body = "";
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InputAndOutputWithHeadersCommand
 */
export const se_InputAndOutputWithHeadersCommand = async (
  input: InputAndOutputWithHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xs]: input[_hS]!,
    [_xb]: [() => isSerializableHeaderValue(input[_hB]), () => input[_hB]!.toString()],
    [_xs_]: [() => isSerializableHeaderValue(input[_hSe]), () => input[_hSe]!.toString()],
    [_xi]: [() => isSerializableHeaderValue(input[_hI]), () => input[_hI]!.toString()],
    [_xl]: [() => isSerializableHeaderValue(input[_hL]), () => input[_hL]!.toString()],
    [_xf_]: [
      () => isSerializableHeaderValue(input[_hF]),
      () => (input[_hF]! % 1 == 0 ? input[_hF]! + ".0" : input[_hF]!.toString()),
    ],
    [_xd]: [
      () => isSerializableHeaderValue(input[_hD]),
      () => (input[_hD]! % 1 == 0 ? input[_hD]! + ".0" : input[_hD]!.toString()),
    ],
    [_xb_]: [() => isSerializableHeaderValue(input[_hTB]), () => input[_hTB]!.toString()],
    [_xb__]: [() => isSerializableHeaderValue(input[_hFB]), () => input[_hFB]!.toString()],
    [_xs__]: [
      () => isSerializableHeaderValue(input[_hSL]),
      () => (input[_hSL]! || []).map((_entry) => _entry as any).join(", "),
    ],
    [_xs___]: [
      () => isSerializableHeaderValue(input[_hSS]),
      () => (input[_hSS]! || []).map((_entry) => _entry as any).join(", "),
    ],
    [_xi_]: [
      () => isSerializableHeaderValue(input[_hIL]),
      () => (input[_hIL]! || []).map((_entry) => _entry.toString() as any).join(", "),
    ],
    [_xb___]: [
      () => isSerializableHeaderValue(input[_hBL]),
      () => (input[_hBL]! || []).map((_entry) => _entry.toString() as any).join(", "),
    ],
    [_xt]: [
      () => isSerializableHeaderValue(input[_hTL]),
      () => (input[_hTL]! || []).map((_entry) => __dateToUtcString(_entry).toString() as any).join(", "),
    ],
    [_xe]: input[_hE]!,
    [_xe_]: [
      () => isSerializableHeaderValue(input[_hEL]),
      () => (input[_hEL]! || []).map((_entry) => _entry as any).join(", "),
    ],
    [_xi__]: [() => isSerializableHeaderValue(input[_hIE]), () => input[_hIE]!.toString()],
    [_xi___]: [
      () => isSerializableHeaderValue(input[_hIEL]),
      () => (input[_hIEL]! || []).map((_entry) => _entry.toString() as any).join(", "),
    ],
  });
  b.bp("/InputAndOutputWithHeaders");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonBlobsCommand
 */
export const se_JsonBlobsCommand = async (
  input: JsonBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonBlobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      data: (_) => context.base64Encoder(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonEnumsCommand
 */
export const se_JsonEnumsCommand = async (
  input: JsonEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonEnums");
  let body: any;
  body = JSON.stringify(
    take(input, {
      fooEnum1: [],
      fooEnum2: [],
      fooEnum3: [],
      fooEnumList: (_) => _json(_),
      fooEnumMap: (_) => _json(_),
      fooEnumSet: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonIntEnumsCommand
 */
export const se_JsonIntEnumsCommand = async (
  input: JsonIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonIntEnums");
  let body: any;
  body = JSON.stringify(
    take(input, {
      integerEnum1: [],
      integerEnum2: [],
      integerEnum3: [],
      integerEnumList: (_) => _json(_),
      integerEnumMap: (_) => _json(_),
      integerEnumSet: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonListsCommand
 */
export const se_JsonListsCommand = async (
  input: JsonListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonLists");
  let body: any;
  body = JSON.stringify(
    take(input, {
      booleanList: (_) => _json(_),
      enumList: (_) => _json(_),
      intEnumList: (_) => _json(_),
      integerList: (_) => _json(_),
      nestedStringList: (_) => _json(_),
      sparseStringList: (_) => se_SparseStringList(_, context),
      stringList: (_) => _json(_),
      stringSet: (_) => _json(_),
      myStructureList: [, (_) => se_StructureList(_, context), `structureList`],
      timestampList: (_) => se_TimestampList(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonMapsCommand
 */
export const se_JsonMapsCommand = async (
  input: JsonMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonMaps");
  let body: any;
  body = JSON.stringify(
    take(input, {
      denseBooleanMap: (_) => _json(_),
      denseNumberMap: (_) => _json(_),
      denseSetMap: (_) => _json(_),
      denseStringMap: (_) => _json(_),
      denseStructMap: (_) => _json(_),
      sparseBooleanMap: (_) => se_SparseBooleanMap(_, context),
      sparseNumberMap: (_) => se_SparseNumberMap(_, context),
      sparseSetMap: (_) => se_SparseSetMap(_, context),
      sparseStringMap: (_) => se_SparseStringMap(_, context),
      sparseStructMap: (_) => se_SparseStructMap(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonTimestampsCommand
 */
export const se_JsonTimestampsCommand = async (
  input: JsonTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonTimestamps");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1JsonUnionsCommand
 */
export const se_JsonUnionsCommand = async (
  input: JsonUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/JsonUnions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      contents: (_) => se_MyUnion(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedAcceptWithBodyCommand
 */
export const se_MalformedAcceptWithBodyCommand = async (
  input: MalformedAcceptWithBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedAcceptWithBody");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedAcceptWithGenericStringCommand
 */
export const se_MalformedAcceptWithGenericStringCommand = async (
  input: MalformedAcceptWithGenericStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedAcceptWithGenericString");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedAcceptWithPayloadCommand
 */
export const se_MalformedAcceptWithPayloadCommand = async (
  input: MalformedAcceptWithPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedAcceptWithPayload");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedBlobCommand
 */
export const se_MalformedBlobCommand = async (
  input: MalformedBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedBlob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blob: (_) => context.base64Encoder(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedBooleanCommand
 */
export const se_MalformedBooleanCommand = async (
  input: MalformedBooleanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_bo]: [() => isSerializableHeaderValue(input[_bIH]), () => input[_bIH]!.toString()],
  });
  b.bp("/MalformedBoolean/{booleanInPath}");
  b.p("booleanInPath", () => input.booleanInPath!.toString(), "{booleanInPath}", false);
  const query: any = map({
    [_bIQ]: [() => input.booleanInQuery !== void 0, () => input[_bIQ]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      booleanInBody: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedByteCommand
 */
export const se_MalformedByteCommand = async (
  input: MalformedByteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_by]: [() => isSerializableHeaderValue(input[_bIHy]), () => input[_bIHy]!.toString()],
  });
  b.bp("/MalformedByte/{byteInPath}");
  b.p("byteInPath", () => input.byteInPath!.toString(), "{byteInPath}", false);
  const query: any = map({
    [_bIQy]: [() => input.byteInQuery !== void 0, () => input[_bIQy]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      byteInBody: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedContentTypeWithBodyCommand
 */
export const se_MalformedContentTypeWithBodyCommand = async (
  input: MalformedContentTypeWithBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedContentTypeWithBody");
  let body: any;
  body = JSON.stringify(
    take(input, {
      hi: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedContentTypeWithGenericStringCommand
 */
export const se_MalformedContentTypeWithGenericStringCommand = async (
  input: MalformedContentTypeWithGenericStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "text/plain",
  };
  b.bp("/MalformedContentTypeWithGenericString");
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedContentTypeWithoutBodyCommand
 */
export const se_MalformedContentTypeWithoutBodyCommand = async (
  input: MalformedContentTypeWithoutBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedContentTypeWithoutBody");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedContentTypeWithPayloadCommand
 */
export const se_MalformedContentTypeWithPayloadCommand = async (
  input: MalformedContentTypeWithPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "image/jpeg",
  };
  b.bp("/MalformedContentTypeWithPayload");
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedDoubleCommand
 */
export const se_MalformedDoubleCommand = async (
  input: MalformedDoubleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_d]: [
      () => isSerializableHeaderValue(input[_dIH]),
      () => (input[_dIH]! % 1 == 0 ? input[_dIH]! + ".0" : input[_dIH]!.toString()),
    ],
  });
  b.bp("/MalformedDouble/{doubleInPath}");
  b.p(
    "doubleInPath",
    () => (input.doubleInPath! % 1 == 0 ? input.doubleInPath! + ".0" : input.doubleInPath!.toString()),
    "{doubleInPath}",
    false
  );
  const query: any = map({
    [_dIQ]: [
      () => input.doubleInQuery !== void 0,
      () => (input[_dIQ]! % 1 == 0 ? input[_dIQ]! + ".0" : input[_dIQ]!.toString()),
    ],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      doubleInBody: (_) => __serializeFloat(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedFloatCommand
 */
export const se_MalformedFloatCommand = async (
  input: MalformedFloatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_fl]: [
      () => isSerializableHeaderValue(input[_fIH]),
      () => (input[_fIH]! % 1 == 0 ? input[_fIH]! + ".0" : input[_fIH]!.toString()),
    ],
  });
  b.bp("/MalformedFloat/{floatInPath}");
  b.p(
    "floatInPath",
    () => (input.floatInPath! % 1 == 0 ? input.floatInPath! + ".0" : input.floatInPath!.toString()),
    "{floatInPath}",
    false
  );
  const query: any = map({
    [_fIQ]: [
      () => input.floatInQuery !== void 0,
      () => (input[_fIQ]! % 1 == 0 ? input[_fIQ]! + ".0" : input[_fIQ]!.toString()),
    ],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      floatInBody: (_) => __serializeFloat(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedIntegerCommand
 */
export const se_MalformedIntegerCommand = async (
  input: MalformedIntegerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_i]: [() => isSerializableHeaderValue(input[_iIH]), () => input[_iIH]!.toString()],
  });
  b.bp("/MalformedInteger/{integerInPath}");
  b.p("integerInPath", () => input.integerInPath!.toString(), "{integerInPath}", false);
  const query: any = map({
    [_iIQ]: [() => input.integerInQuery !== void 0, () => input[_iIQ]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      integerInBody: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedListCommand
 */
export const se_MalformedListCommand = async (
  input: MalformedListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedList");
  let body: any;
  body = JSON.stringify(
    take(input, {
      bodyList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedLongCommand
 */
export const se_MalformedLongCommand = async (
  input: MalformedLongCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_l]: [() => isSerializableHeaderValue(input[_lIH]), () => input[_lIH]!.toString()],
  });
  b.bp("/MalformedLong/{longInPath}");
  b.p("longInPath", () => input.longInPath!.toString(), "{longInPath}", false);
  const query: any = map({
    [_lIQ]: [() => input.longInQuery !== void 0, () => input[_lIQ]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      longInBody: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedMapCommand
 */
export const se_MalformedMapCommand = async (
  input: MalformedMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedMap");
  let body: any;
  body = JSON.stringify(
    take(input, {
      bodyMap: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedRequestBodyCommand
 */
export const se_MalformedRequestBodyCommand = async (
  input: MalformedRequestBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedRequestBody");
  let body: any;
  body = JSON.stringify(
    take(input, {
      float: (_) => __serializeFloat(_),
      int: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedShortCommand
 */
export const se_MalformedShortCommand = async (
  input: MalformedShortCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_s]: [() => isSerializableHeaderValue(input[_sIH]), () => input[_sIH]!.toString()],
  });
  b.bp("/MalformedShort/{shortInPath}");
  b.p("shortInPath", () => input.shortInPath!.toString(), "{shortInPath}", false);
  const query: any = map({
    [_sIQ]: [() => input.shortInQuery !== void 0, () => input[_sIQ]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      shortInBody: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedStringCommand
 */
export const se_MalformedStringCommand = async (
  input: MalformedStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_amth]: [
      () => isSerializableHeaderValue(input[_bl]),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input[_bl]!))),
    ],
  });
  b.bp("/MalformedString");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampBodyDateTimeCommand
 */
export const se_MalformedTimestampBodyDateTimeCommand = async (
  input: MalformedTimestampBodyDateTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedTimestampBodyDateTime");
  let body: any;
  body = JSON.stringify(
    take(input, {
      timestamp: (_) => _.toISOString().split(".")[0] + "Z",
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampBodyDefaultCommand
 */
export const se_MalformedTimestampBodyDefaultCommand = async (
  input: MalformedTimestampBodyDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedTimestampBodyDefault");
  let body: any;
  body = JSON.stringify(
    take(input, {
      timestamp: (_) => Math.round(_.getTime() / 1000),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampBodyHttpDateCommand
 */
export const se_MalformedTimestampBodyHttpDateCommand = async (
  input: MalformedTimestampBodyHttpDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedTimestampBodyHttpDate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      timestamp: (_) => __dateToUtcString(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampHeaderDateTimeCommand
 */
export const se_MalformedTimestampHeaderDateTimeCommand = async (
  input: MalformedTimestampHeaderDateTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_t]: [() => isSerializableHeaderValue(input[_t]), () => (input[_t]!.toISOString().split(".")[0] + "Z").toString()],
  });
  b.bp("/MalformedTimestampHeaderDateTime");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampHeaderDefaultCommand
 */
export const se_MalformedTimestampHeaderDefaultCommand = async (
  input: MalformedTimestampHeaderDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_t]: [() => isSerializableHeaderValue(input[_t]), () => __dateToUtcString(input[_t]!).toString()],
  });
  b.bp("/MalformedTimestampHeaderDefault");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampHeaderEpochCommand
 */
export const se_MalformedTimestampHeaderEpochCommand = async (
  input: MalformedTimestampHeaderEpochCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_t]: [() => isSerializableHeaderValue(input[_t]), () => Math.round(input[_t]!.getTime() / 1000).toString()],
  });
  b.bp("/MalformedTimestampHeaderEpoch");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampPathDefaultCommand
 */
export const se_MalformedTimestampPathDefaultCommand = async (
  input: MalformedTimestampPathDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/MalformedTimestampPathDefault/{timestamp}");
  b.p("timestamp", () => (input.timestamp!.toISOString().split(".")[0] + "Z").toString(), "{timestamp}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampPathEpochCommand
 */
export const se_MalformedTimestampPathEpochCommand = async (
  input: MalformedTimestampPathEpochCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/MalformedTimestampPathEpoch/{timestamp}");
  b.p("timestamp", () => Math.round(input.timestamp!.getTime() / 1000).toString(), "{timestamp}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampPathHttpDateCommand
 */
export const se_MalformedTimestampPathHttpDateCommand = async (
  input: MalformedTimestampPathHttpDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/MalformedTimestampPathHttpDate/{timestamp}");
  b.p("timestamp", () => __dateToUtcString(input.timestamp!).toString(), "{timestamp}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampQueryDefaultCommand
 */
export const se_MalformedTimestampQueryDefaultCommand = async (
  input: MalformedTimestampQueryDefaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/MalformedTimestampQueryDefault");
  const query: any = map({
    [_t]: [
      __expectNonNull(input.timestamp, `timestamp`) != null,
      () => (input[_t]!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampQueryEpochCommand
 */
export const se_MalformedTimestampQueryEpochCommand = async (
  input: MalformedTimestampQueryEpochCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/MalformedTimestampQueryEpoch");
  const query: any = map({
    [_t]: [
      __expectNonNull(input.timestamp, `timestamp`) != null,
      () => Math.round(input[_t]!.getTime() / 1000).toString(),
    ],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedTimestampQueryHttpDateCommand
 */
export const se_MalformedTimestampQueryHttpDateCommand = async (
  input: MalformedTimestampQueryHttpDateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/MalformedTimestampQueryHttpDate");
  const query: any = map({
    [_t]: [__expectNonNull(input.timestamp, `timestamp`) != null, () => __dateToUtcString(input[_t]!).toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MalformedUnionCommand
 */
export const se_MalformedUnionCommand = async (
  input: MalformedUnionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/MalformedUnion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      union: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MediaTypeHeaderCommand
 */
export const se_MediaTypeHeaderCommand = async (
  input: MediaTypeHeaderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xj]: [
      () => isSerializableHeaderValue(input[_j]),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input[_j]!))),
    ],
  });
  b.bp("/MediaTypeHeader");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1NoInputAndNoOutputCommand
 */
export const se_NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/NoInputAndNoOutput");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1NoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/NoInputAndOutputOutput");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1NullAndEmptyHeadersClientCommand
 */
export const se_NullAndEmptyHeadersClientCommand = async (
  input: NullAndEmptyHeadersClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xa]: input[_a]!,
    [_xb____]: input[_b_]!,
    [_xc]: [
      () => isSerializableHeaderValue(input[_c]),
      () => (input[_c]! || []).map((_entry) => _entry as any).join(", "),
    ],
  });
  b.bp("/NullAndEmptyHeadersClient");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1NullAndEmptyHeadersServerCommand
 */
export const se_NullAndEmptyHeadersServerCommand = async (
  input: NullAndEmptyHeadersServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xa]: input[_a]!,
    [_xb____]: input[_b_]!,
    [_xc]: [
      () => isSerializableHeaderValue(input[_c]),
      () => (input[_c]! || []).map((_entry) => _entry as any).join(", "),
    ],
  });
  b.bp("/NullAndEmptyHeadersServer");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OmitsNullSerializesEmptyStringCommand
 */
export const se_OmitsNullSerializesEmptyStringCommand = async (
  input: OmitsNullSerializesEmptyStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OmitsNullSerializesEmptyString");
  const query: any = map({
    [_N]: [, input[_nV]!],
    [_Em]: [, input[_eS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OmitsSerializingEmptyListsCommand
 */
export const se_OmitsSerializingEmptyListsCommand = async (
  input: OmitsSerializingEmptyListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OmitsSerializingEmptyLists");
  const query: any = map({
    [_SL]: [() => input.queryStringList !== void 0, () => (input[_qSL]! || []).map((_entry) => _entry as any)],
    [_IL]: [
      () => input.queryIntegerList !== void 0,
      () => (input[_qIL]! || []).map((_entry) => _entry.toString() as any),
    ],
    [_DL]: [
      () => input.queryDoubleList !== void 0,
      () => (input[_qDL]! || []).map((_entry) => (_entry % 1 == 0 ? _entry + ".0" : _entry.toString()) as any),
    ],
    [_BL]: [
      () => input.queryBooleanList !== void 0,
      () => (input[_qBL]! || []).map((_entry) => _entry.toString() as any),
    ],
    [_TL]: [
      () => input.queryTimestampList !== void 0,
      () => (input[_qTL]! || []).map((_entry) => (_entry.toISOString().split(".")[0] + "Z").toString() as any),
    ],
    [_EL]: [() => input.queryEnumList !== void 0, () => (input[_qEL]! || []).map((_entry) => _entry as any)],
    [_IEL]: [
      () => input.queryIntegerEnumList !== void 0,
      () => (input[_qIEL]! || []).map((_entry) => _entry.toString() as any),
    ],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostPlayerActionCommand
 */
export const se_PostPlayerActionCommand = async (
  input: PostPlayerActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PostPlayerAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostUnionWithJsonNameCommand
 */
export const se_PostUnionWithJsonNameCommand = async (
  input: PostUnionWithJsonNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PostUnionWithJsonName");
  let body: any;
  body = JSON.stringify(
    take(input, {
      value: (_) => se_UnionWithJsonName(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_ce]: input[_e]!,
  });
  b.bp("/requestcompression/putcontentwithencoding");
  let body: any;
  body = JSON.stringify(
    take(input, {
      data: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1QueryIdempotencyTokenAutoFillCommand
 */
export const se_QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/QueryIdempotencyTokenAutoFill");
  const query: any = map({
    [_to]: [, input[_to] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1QueryParamsAsStringListMapCommand
 */
export const se_QueryParamsAsStringListMapCommand = async (
  input: QueryParamsAsStringListMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StringListMap");
  const query: any = map({
    ...convertMap(input.foo),
    [_co]: [, input[_q]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1QueryPrecedenceCommand
 */
export const se_QueryPrecedenceCommand = async (
  input: QueryPrecedenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/Precedence");
  const query: any = map({
    ...convertMap(input.baz),
    [_ba]: [, input[_f]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RecursiveShapesCommand
 */
export const se_RecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/RecursiveShapes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      nested: (_) => se_RecursiveShapesInputOutputNested1(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SimpleScalarPropertiesCommand
 */
export const se_SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xf]: input[_f]!,
  });
  b.bp("/SimpleScalarProperties");
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
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StreamingTraitsCommand
 */
export const se_StreamingTraitsCommand = async (
  input: StreamingTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_xf]: input[_f]!,
  });
  b.bp("/StreamingTraits");
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StreamingTraitsRequireLengthCommand
 */
export const se_StreamingTraitsRequireLengthCommand = async (
  input: StreamingTraitsRequireLengthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_xf]: input[_f]!,
  });
  b.bp("/StreamingTraitsRequireLength");
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StreamingTraitsWithMediaTypeCommand
 */
export const se_StreamingTraitsWithMediaTypeCommand = async (
  input: StreamingTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    [_xf]: input[_f]!,
  });
  b.bp("/StreamingTraitsWithMediaType");
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestBodyStructureCommand
 */
export const se_TestBodyStructureCommand = async (
  input: TestBodyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xati]: input[_tI]!,
  });
  b.bp("/body");
  let body: any;
  body = JSON.stringify(
    take(input, {
      testConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestNoPayloadCommand
 */
export const se_TestNoPayloadCommand = async (
  input: TestNoPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xati]: input[_tI]!,
  });
  b.bp("/no_payload");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestPayloadBlobCommand
 */
export const se_TestPayloadBlobCommand = async (
  input: TestPayloadBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT]! || "application/octet-stream",
  });
  b.bp("/blob_payload");
  let body: any;
  if (input.data !== undefined) {
    body = input.data;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestPayloadStructureCommand
 */
export const se_TestPayloadStructureCommand = async (
  input: TestPayloadStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xati]: input[_tI]!,
  });
  b.bp("/payload");
  let body: any;
  if (input.payloadConfig !== undefined) {
    body = _json(input.payloadConfig);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TimestampFormatHeadersCommand
 */
export const se_TimestampFormatHeadersCommand = async (
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xm]: [() => isSerializableHeaderValue(input[_mES]), () => Math.round(input[_mES]!.getTime() / 1000).toString()],
    [_xm_]: [() => isSerializableHeaderValue(input[_mHD]), () => __dateToUtcString(input[_mHD]!).toString()],
    [_xm__]: [
      () => isSerializableHeaderValue(input[_mDT]),
      () => (input[_mDT]!.toISOString().split(".")[0] + "Z").toString(),
    ],
    [_xd_]: [() => isSerializableHeaderValue(input[_dF]), () => __dateToUtcString(input[_dF]!).toString()],
    [_xt_]: [() => isSerializableHeaderValue(input[_tES]), () => Math.round(input[_tES]!.getTime() / 1000).toString()],
    [_xt__]: [() => isSerializableHeaderValue(input[_tHD]), () => __dateToUtcString(input[_tHD]!).toString()],
    [_xt___]: [
      () => isSerializableHeaderValue(input[_tDT]),
      () => (input[_tDT]!.toISOString().split(".")[0] + "Z").toString(),
    ],
  });
  b.bp("/TimestampFormatHeaders");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UnitInputAndOutputCommand
 */
export const se_UnitInputAndOutputCommand = async (
  input: UnitInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UnitInputAndOutput");
  let body: any;
  body = "";
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AllQueryStringTypesCommand
 */
export const de_AllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AllQueryStringTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AllQueryStringTypesCommandError
 */
const de_AllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ConstantAndVariableQueryStringCommand
 */
export const de_ConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConstantAndVariableQueryStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ConstantAndVariableQueryStringCommandError
 */
const de_ConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ConstantQueryStringCommand
 */
export const de_ConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConstantQueryStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ConstantQueryStringCommandError
 */
const de_ConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DatetimeOffsetsCommand
 */
export const de_DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DatetimeOffsetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datetime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DatetimeOffsetsCommandError
 */
const de_DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DocumentTypeCommand
 */
export const de_DocumentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DocumentTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    documentValue: (_) => de_Document(_, context),
    stringValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DocumentTypeCommandError
 */
const de_DocumentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DocumentTypeAsPayloadCommand
 */
export const de_DocumentTypeAsPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DocumentTypeAsPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.documentValue = data;
  contents.documentValue = JSON.parse(data);
  return contents;
};

/**
 * deserializeAws_restJson1DocumentTypeAsPayloadCommandError
 */
const de_DocumentTypeAsPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1EmptyInputAndEmptyOutputCommand
 */
export const de_EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EmptyInputAndEmptyOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EmptyInputAndEmptyOutputCommandError
 */
const de_EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1EndpointOperationCommand
 */
export const de_EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EndpointOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EndpointOperationCommandError
 */
const de_EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1EndpointWithHostLabelOperationCommand
 */
export const de_EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EndpointWithHostLabelOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EndpointWithHostLabelOperationCommandError
 */
const de_EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1FractionalSecondsCommand
 */
export const de_FractionalSecondsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_FractionalSecondsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datetime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1FractionalSecondsCommandError
 */
const de_FractionalSecondsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1GreetingWithErrorsCommand
 */
export const de_GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GreetingWithErrorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_g]: [, output.headers[_xg]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GreetingWithErrorsCommandError
 */
const de_GreetingWithErrorsCommandError = async (
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
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "FooError":
    case "aws.protocoltests.restjson#FooError":
      throw await de_FooErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.restjson#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1HostWithPathOperationCommand
 */
export const de_HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HostWithPathOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1HostWithPathOperationCommandError
 */
const de_HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpChecksumRequiredCommand
 */
export const de_HttpChecksumRequiredCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpChecksumRequiredCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpChecksumRequiredCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    foo: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1HttpChecksumRequiredCommandError
 */
const de_HttpChecksumRequiredCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpChecksumRequiredCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpEnumPayloadCommand
 */
export const de_HttpEnumPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpEnumPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restJson1HttpEnumPayloadCommandError
 */
const de_HttpEnumPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpPayloadTraitsCommand
 */
export const de_HttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadTraitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1HttpPayloadTraitsCommandError
 */
const de_HttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand
 */
export const de_HttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommandError
 */
const de_HttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpPayloadWithStructureCommand
 */
export const de_HttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadWithStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1HttpPayloadWithStructureCommandError
 */
const de_HttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpPayloadWithUnionCommand
 */
export const de_HttpPayloadWithUnionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithUnionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadWithUnionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectUnion(await parseBody(output.body, context));
  contents.nested = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1HttpPayloadWithUnionCommandError
 */
const de_HttpPayloadWithUnionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithUnionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpPrefixHeadersCommand
 */
export const de_HttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPrefixHeadersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
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

/**
 * deserializeAws_restJson1HttpPrefixHeadersCommandError
 */
const de_HttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpPrefixHeadersInResponseCommand
 */
export const de_HttpPrefixHeadersInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPrefixHeadersInResponseCommandError(output, context);
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

/**
 * deserializeAws_restJson1HttpPrefixHeadersInResponseCommandError
 */
const de_HttpPrefixHeadersInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpRequestWithFloatLabelsCommand
 */
export const de_HttpRequestWithFloatLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpRequestWithFloatLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1HttpRequestWithFloatLabelsCommandError
 */
const de_HttpRequestWithFloatLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommand
 */
export const de_HttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpRequestWithGreedyLabelInPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommandError
 */
const de_HttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpRequestWithLabelsCommand
 */
export const de_HttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpRequestWithLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1HttpRequestWithLabelsCommandError
 */
const de_HttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand
 */
export const de_HttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpRequestWithLabelsAndTimestampFormatCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommandError
 */
const de_HttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpRequestWithRegexLiteralCommand
 */
export const de_HttpRequestWithRegexLiteralCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithRegexLiteralCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpRequestWithRegexLiteralCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1HttpRequestWithRegexLiteralCommandError
 */
const de_HttpRequestWithRegexLiteralCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithRegexLiteralCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpResponseCodeCommand
 */
export const de_HttpResponseCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpResponseCodeCommandError(output, context);
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

/**
 * deserializeAws_restJson1HttpResponseCodeCommandError
 */
const de_HttpResponseCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1HttpStringPayloadCommand
 */
export const de_HttpStringPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpStringPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restJson1HttpStringPayloadCommandError
 */
const de_HttpStringPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1IgnoreQueryParamsInResponseCommand
 */
export const de_IgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_IgnoreQueryParamsInResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baz: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1IgnoreQueryParamsInResponseCommandError
 */
const de_IgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1InputAndOutputWithHeadersCommand
 */
export const de_InputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InputAndOutputWithHeadersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_hS]: [, output.headers[_xs]],
    [_hB]: [() => void 0 !== output.headers[_xb], () => __strictParseByte(output.headers[_xb])],
    [_hSe]: [() => void 0 !== output.headers[_xs_], () => __strictParseShort(output.headers[_xs_])],
    [_hI]: [() => void 0 !== output.headers[_xi], () => __strictParseInt32(output.headers[_xi])],
    [_hL]: [() => void 0 !== output.headers[_xl], () => __strictParseLong(output.headers[_xl])],
    [_hF]: [() => void 0 !== output.headers[_xf_], () => __strictParseFloat(output.headers[_xf_])],
    [_hD]: [() => void 0 !== output.headers[_xd], () => __strictParseDouble(output.headers[_xd])],
    [_hTB]: [() => void 0 !== output.headers[_xb_], () => __parseBoolean(output.headers[_xb_])],
    [_hFB]: [() => void 0 !== output.headers[_xb__], () => __parseBoolean(output.headers[_xb__])],
    [_hSL]: [
      () => void 0 !== output.headers[_xs__],
      () => (output.headers[_xs__] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
    [_hSS]: [
      () => void 0 !== output.headers[_xs___],
      () => (output.headers[_xs___] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
    [_hIL]: [
      () => void 0 !== output.headers[_xi_],
      () => (output.headers[_xi_] || "").split(",").map((_entry) => __strictParseInt32(_entry.trim()) as any),
    ],
    [_hBL]: [
      () => void 0 !== output.headers[_xb___],
      () => (output.headers[_xb___] || "").split(",").map((_entry) => __parseBoolean(_entry.trim()) as any),
    ],
    [_hTL]: [
      () => void 0 !== output.headers[_xt],
      () =>
        __splitEvery(output.headers[_xt] || "", ",", 2).map(
          (_entry) => __expectNonNull(__parseRfc7231DateTime(_entry.trim())) as any
        ),
    ],
    [_hE]: [, output.headers[_xe]],
    [_hEL]: [
      () => void 0 !== output.headers[_xe_],
      () => (output.headers[_xe_] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
    [_hIE]: [() => void 0 !== output.headers[_xi__], () => __strictParseInt32(output.headers[_xi__])],
    [_hIEL]: [
      () => void 0 !== output.headers[_xi___],
      () => (output.headers[_xi___] || "").split(",").map((_entry) => __strictParseInt32(_entry.trim()) as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1InputAndOutputWithHeadersCommandError
 */
const de_InputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonBlobsCommand
 */
export const de_JsonBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonBlobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    data: context.base64Decoder,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonBlobsCommandError
 */
const de_JsonBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonEnumsCommand
 */
export const de_JsonEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonEnumsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fooEnum1: __expectString,
    fooEnum2: __expectString,
    fooEnum3: __expectString,
    fooEnumList: _json,
    fooEnumMap: _json,
    fooEnumSet: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonEnumsCommandError
 */
const de_JsonEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonIntEnumsCommand
 */
export const de_JsonIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonIntEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonIntEnumsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    integerEnum1: __expectInt32,
    integerEnum2: __expectInt32,
    integerEnum3: __expectInt32,
    integerEnumList: _json,
    integerEnumMap: _json,
    integerEnumSet: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonIntEnumsCommandError
 */
const de_JsonIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonListsCommand
 */
export const de_JsonListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    booleanList: _json,
    enumList: _json,
    intEnumList: _json,
    integerList: _json,
    nestedStringList: _json,
    sparseStringList: (_) => de_SparseStringList(_, context),
    stringList: _json,
    stringSet: _json,
    structureList: [, (_) => de_StructureList(_, context), `myStructureList`],
    timestampList: (_) => de_TimestampList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonListsCommandError
 */
const de_JsonListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonMapsCommand
 */
export const de_JsonMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    denseBooleanMap: _json,
    denseNumberMap: _json,
    denseSetMap: _json,
    denseStringMap: _json,
    denseStructMap: _json,
    sparseBooleanMap: (_) => de_SparseBooleanMap(_, context),
    sparseNumberMap: (_) => de_SparseNumberMap(_, context),
    sparseSetMap: (_) => de_SparseSetMap(_, context),
    sparseStringMap: (_) => de_SparseStringMap(_, context),
    sparseStructMap: (_) => de_SparseStructMap(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonMapsCommandError
 */
const de_JsonMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonTimestampsCommand
 */
export const de_JsonTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonTimestampsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dateTimeOnTarget: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    epochSeconds: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    epochSecondsOnTarget: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    httpDate: (_) => __expectNonNull(__parseRfc7231DateTime(_)),
    httpDateOnTarget: (_) => __expectNonNull(__parseRfc7231DateTime(_)),
    normal: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonTimestampsCommandError
 */
const de_JsonTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1JsonUnionsCommand
 */
export const de_JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_JsonUnionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contents: (_) => de_MyUnion(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1JsonUnionsCommandError
 */
const de_JsonUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedAcceptWithBodyCommand
 */
export const de_MalformedAcceptWithBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedAcceptWithBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    hi: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedAcceptWithBodyCommandError
 */
const de_MalformedAcceptWithBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedAcceptWithGenericStringCommand
 */
export const de_MalformedAcceptWithGenericStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithGenericStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedAcceptWithGenericStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedAcceptWithGenericStringCommandError
 */
const de_MalformedAcceptWithGenericStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithGenericStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedAcceptWithPayloadCommand
 */
export const de_MalformedAcceptWithPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedAcceptWithPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1MalformedAcceptWithPayloadCommandError
 */
const de_MalformedAcceptWithPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedAcceptWithPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedBlobCommand
 */
export const de_MalformedBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBlobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedBlobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedBlobCommandError
 */
const de_MalformedBlobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBlobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedBooleanCommand
 */
export const de_MalformedBooleanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBooleanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedBooleanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedBooleanCommandError
 */
const de_MalformedBooleanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedBooleanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedByteCommand
 */
export const de_MalformedByteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedByteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedByteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedByteCommandError
 */
const de_MalformedByteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedByteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithBodyCommand
 */
export const de_MalformedContentTypeWithBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedContentTypeWithBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithBodyCommandError
 */
const de_MalformedContentTypeWithBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithGenericStringCommand
 */
export const de_MalformedContentTypeWithGenericStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithGenericStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedContentTypeWithGenericStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithGenericStringCommandError
 */
const de_MalformedContentTypeWithGenericStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithGenericStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithoutBodyCommand
 */
export const de_MalformedContentTypeWithoutBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithoutBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedContentTypeWithoutBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithoutBodyCommandError
 */
const de_MalformedContentTypeWithoutBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithoutBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithPayloadCommand
 */
export const de_MalformedContentTypeWithPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedContentTypeWithPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedContentTypeWithPayloadCommandError
 */
const de_MalformedContentTypeWithPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedContentTypeWithPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedDoubleCommand
 */
export const de_MalformedDoubleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedDoubleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedDoubleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedDoubleCommandError
 */
const de_MalformedDoubleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedDoubleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedFloatCommand
 */
export const de_MalformedFloatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedFloatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedFloatCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedFloatCommandError
 */
const de_MalformedFloatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedFloatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedIntegerCommand
 */
export const de_MalformedIntegerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedIntegerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedIntegerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedIntegerCommandError
 */
const de_MalformedIntegerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedIntegerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedListCommand
 */
export const de_MalformedListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedListCommandError
 */
const de_MalformedListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedLongCommand
 */
export const de_MalformedLongCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedLongCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedLongCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedLongCommandError
 */
const de_MalformedLongCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedLongCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedMapCommand
 */
export const de_MalformedMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedMapCommandError
 */
const de_MalformedMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedRequestBodyCommand
 */
export const de_MalformedRequestBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedRequestBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedRequestBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedRequestBodyCommandError
 */
const de_MalformedRequestBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedRequestBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedShortCommand
 */
export const de_MalformedShortCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedShortCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedShortCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedShortCommandError
 */
const de_MalformedShortCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedShortCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedStringCommand
 */
export const de_MalformedStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedStringCommandError
 */
const de_MalformedStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampBodyDateTimeCommand
 */
export const de_MalformedTimestampBodyDateTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDateTimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampBodyDateTimeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampBodyDateTimeCommandError
 */
const de_MalformedTimestampBodyDateTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDateTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampBodyDefaultCommand
 */
export const de_MalformedTimestampBodyDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampBodyDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampBodyDefaultCommandError
 */
const de_MalformedTimestampBodyDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampBodyHttpDateCommand
 */
export const de_MalformedTimestampBodyHttpDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyHttpDateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampBodyHttpDateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampBodyHttpDateCommandError
 */
const de_MalformedTimestampBodyHttpDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampBodyHttpDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommand
 */
export const de_MalformedTimestampHeaderDateTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDateTimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampHeaderDateTimeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampHeaderDateTimeCommandError
 */
const de_MalformedTimestampHeaderDateTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDateTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampHeaderDefaultCommand
 */
export const de_MalformedTimestampHeaderDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampHeaderDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampHeaderDefaultCommandError
 */
const de_MalformedTimestampHeaderDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampHeaderEpochCommand
 */
export const de_MalformedTimestampHeaderEpochCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderEpochCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampHeaderEpochCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampHeaderEpochCommandError
 */
const de_MalformedTimestampHeaderEpochCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampHeaderEpochCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampPathDefaultCommand
 */
export const de_MalformedTimestampPathDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampPathDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampPathDefaultCommandError
 */
const de_MalformedTimestampPathDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampPathEpochCommand
 */
export const de_MalformedTimestampPathEpochCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathEpochCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampPathEpochCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampPathEpochCommandError
 */
const de_MalformedTimestampPathEpochCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathEpochCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampPathHttpDateCommand
 */
export const de_MalformedTimestampPathHttpDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathHttpDateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampPathHttpDateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampPathHttpDateCommandError
 */
const de_MalformedTimestampPathHttpDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampPathHttpDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampQueryDefaultCommand
 */
export const de_MalformedTimestampQueryDefaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryDefaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampQueryDefaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampQueryDefaultCommandError
 */
const de_MalformedTimestampQueryDefaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryDefaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampQueryEpochCommand
 */
export const de_MalformedTimestampQueryEpochCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryEpochCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampQueryEpochCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampQueryEpochCommandError
 */
const de_MalformedTimestampQueryEpochCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryEpochCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedTimestampQueryHttpDateCommand
 */
export const de_MalformedTimestampQueryHttpDateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryHttpDateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedTimestampQueryHttpDateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedTimestampQueryHttpDateCommandError
 */
const de_MalformedTimestampQueryHttpDateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedTimestampQueryHttpDateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MalformedUnionCommand
 */
export const de_MalformedUnionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedUnionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MalformedUnionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MalformedUnionCommandError
 */
const de_MalformedUnionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MalformedUnionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1MediaTypeHeaderCommand
 */
export const de_MediaTypeHeaderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MediaTypeHeaderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MediaTypeHeaderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_j]: [
      () => void 0 !== output.headers[_xj],
      () => new __LazyJsonString(Buffer.from(context.base64Decoder(output.headers[_xj])).toString("utf8")),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1MediaTypeHeaderCommandError
 */
const de_MediaTypeHeaderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MediaTypeHeaderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1NoInputAndNoOutputCommand
 */
export const de_NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NoInputAndNoOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1NoInputAndNoOutputCommandError
 */
const de_NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1NoInputAndOutputCommand
 */
export const de_NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NoInputAndOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1NoInputAndOutputCommandError
 */
const de_NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1NullAndEmptyHeadersClientCommand
 */
export const de_NullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NullAndEmptyHeadersClientCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_a]: [, output.headers[_xa]],
    [_b_]: [, output.headers[_xb____]],
    [_c]: [
      () => void 0 !== output.headers[_xc],
      () => (output.headers[_xc] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1NullAndEmptyHeadersClientCommandError
 */
const de_NullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1NullAndEmptyHeadersServerCommand
 */
export const de_NullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NullAndEmptyHeadersServerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_a]: [, output.headers[_xa]],
    [_b_]: [, output.headers[_xb____]],
    [_c]: [
      () => void 0 !== output.headers[_xc],
      () => (output.headers[_xc] || "").split(",").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1NullAndEmptyHeadersServerCommandError
 */
const de_NullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1OmitsNullSerializesEmptyStringCommand
 */
export const de_OmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_OmitsNullSerializesEmptyStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OmitsNullSerializesEmptyStringCommandError
 */
const de_OmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1OmitsSerializingEmptyListsCommand
 */
export const de_OmitsSerializingEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsSerializingEmptyListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_OmitsSerializingEmptyListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OmitsSerializingEmptyListsCommandError
 */
const de_OmitsSerializingEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsSerializingEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1PostPlayerActionCommand
 */
export const de_PostPlayerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostPlayerActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PostPlayerActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PostPlayerActionCommandError
 */
const de_PostPlayerActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostPlayerActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1PostUnionWithJsonNameCommand
 */
export const de_PostUnionWithJsonNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostUnionWithJsonNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PostUnionWithJsonNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    value: (_) => de_UnionWithJsonName(__expectUnion(_), context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PostUnionWithJsonNameCommandError
 */
const de_PostUnionWithJsonNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostUnionWithJsonNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1PutWithContentEncodingCommand
 */
export const de_PutWithContentEncodingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutWithContentEncodingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutWithContentEncodingCommandError
 */
const de_PutWithContentEncodingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommand
 */
export const de_QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_QueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommandError
 */
const de_QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1QueryParamsAsStringListMapCommand
 */
export const de_QueryParamsAsStringListMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_QueryParamsAsStringListMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1QueryParamsAsStringListMapCommandError
 */
const de_QueryParamsAsStringListMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1QueryPrecedenceCommand
 */
export const de_QueryPrecedenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_QueryPrecedenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1QueryPrecedenceCommandError
 */
const de_QueryPrecedenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1RecursiveShapesCommand
 */
export const de_RecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RecursiveShapesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nested: (_) => de_RecursiveShapesInputOutputNested1(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RecursiveShapesCommandError
 */
const de_RecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1SimpleScalarPropertiesCommand
 */
export const de_SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SimpleScalarPropertiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
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

/**
 * deserializeAws_restJson1SimpleScalarPropertiesCommandError
 */
const de_SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1StreamingTraitsCommand
 */
export const de_StreamingTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<StreamingTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StreamingTraitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1StreamingTraitsCommandError
 */
const de_StreamingTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1StreamingTraitsRequireLengthCommand
 */
export const de_StreamingTraitsRequireLengthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StreamingTraitsRequireLengthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StreamingTraitsRequireLengthCommandError
 */
const de_StreamingTraitsRequireLengthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand
 */
export const de_StreamingTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<StreamingTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StreamingTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1StreamingTraitsWithMediaTypeCommandError
 */
const de_StreamingTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1TestBodyStructureCommand
 */
export const de_TestBodyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestBodyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestBodyStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_tI]: [, output.headers[_xati]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    testConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TestBodyStructureCommandError
 */
const de_TestBodyStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestBodyStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1TestNoPayloadCommand
 */
export const de_TestNoPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestNoPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestNoPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_tI]: [, output.headers[_xati]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TestNoPayloadCommandError
 */
const de_TestNoPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestNoPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1TestPayloadBlobCommand
 */
export const de_TestPayloadBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadBlobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestPayloadBlobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.data = data;
  return contents;
};

/**
 * deserializeAws_restJson1TestPayloadBlobCommandError
 */
const de_TestPayloadBlobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadBlobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1TestPayloadStructureCommand
 */
export const de_TestPayloadStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestPayloadStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_tI]: [, output.headers[_xati]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.payloadConfig = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1TestPayloadStructureCommandError
 */
const de_TestPayloadStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestPayloadStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1TimestampFormatHeadersCommand
 */
export const de_TimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TimestampFormatHeadersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_mES]: [() => void 0 !== output.headers[_xm], () => __expectNonNull(__parseEpochTimestamp(output.headers[_xm]))],
    [_mHD]: [
      () => void 0 !== output.headers[_xm_],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers[_xm_])),
    ],
    [_mDT]: [
      () => void 0 !== output.headers[_xm__],
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers[_xm__])),
    ],
    [_dF]: [() => void 0 !== output.headers[_xd_], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_xd_]))],
    [_tES]: [() => void 0 !== output.headers[_xt_], () => __expectNonNull(__parseEpochTimestamp(output.headers[_xt_]))],
    [_tHD]: [
      () => void 0 !== output.headers[_xt__],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers[_xt__])),
    ],
    [_tDT]: [
      () => void 0 !== output.headers[_xt___],
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers[_xt___])),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TimestampFormatHeadersCommandError
 */
const de_TimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UnitInputAndOutputCommand
 */
export const de_UnitInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnitInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnitInputAndOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UnitInputAndOutputCommandError
 */
const de_UnitInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnitInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const contents: any = map({
    [_H]: [, parsedOutput.headers[_xh]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Nested: (_) => de_ComplexNestedErrorData(_, context),
    TopLevel: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FooErrorRes
 */
const de_FooErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<FooError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new FooError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidGreetingRes
 */
const de_InvalidGreetingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidGreeting> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DenseBooleanMap omitted.

// se_DenseNumberMap omitted.

// se_DenseSetMap omitted.

// se_DenseStringMap omitted.

// se_DenseStructMap omitted.

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
    listValue: (value) => ({ listValue: _json(value) }),
    mapValue: (value) => ({ mapValue: _json(value) }),
    numberValue: (value) => ({ numberValue: value }),
    renamedStructureValue: (value) => ({ renamedStructureValue: _json(value) }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: _json(value) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_NestedPayload omitted.

// se_PayloadConfig omitted.

// se_PlayerAction omitted.

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

// se_SimpleList omitted.

// se_SimpleMap omitted.

// se_SimpleUnion omitted.

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
    acc[key] = _json(value);
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
    acc[key] = _json(value);
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

// se_TestConfig omitted.

// se_UnionPayload omitted.

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

// se_RenamedGreeting omitted.

// se_BooleanList omitted.

// se_FooEnumList omitted.

// se_FooEnumMap omitted.

// se_FooEnumSet omitted.

// se_GreetingStruct omitted.

// se_IntegerEnumList omitted.

// se_IntegerEnumMap omitted.

// se_IntegerEnumSet omitted.

// se_IntegerList omitted.

// se_NestedStringList omitted.

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

// se_StringList omitted.

// se_StringMap omitted.

// se_StringSet omitted.

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

// se_Unit omitted.

/**
 * deserializeAws_restJson1ComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  return take(output, {
    Foo: [, __expectString, `Fooooo`],
  }) as any;
};

// de_DenseBooleanMap omitted.

// de_DenseNumberMap omitted.

// de_DenseSetMap omitted.

// de_DenseStringMap omitted.

// de_DenseStructMap omitted.

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
      listValue: _json(output.listValue),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: _json(output.mapValue),
    };
  }
  if (__expectInt32(output.numberValue) !== undefined) {
    return { numberValue: __expectInt32(output.numberValue) as any };
  }
  if (output.renamedStructureValue != null) {
    return {
      renamedStructureValue: _json(output.renamedStructureValue),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structureValue != null) {
    return {
      structureValue: _json(output.structureValue),
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue))),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_NestedPayload omitted.

// de_PayloadConfig omitted.

// de_PlayerAction omitted.

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
    acc[key as string] = _json(value);
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
    acc[key as string] = _json(value);
    return acc;
  }, {} as Record<string, GreetingStruct>);
};

/**
 * deserializeAws_restJson1StructureList
 */
const de_StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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

// de_TestConfig omitted.

// de_UnionPayload omitted.

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

// de_RenamedGreeting omitted.

// de_BooleanList omitted.

// de_FooEnumList omitted.

// de_FooEnumMap omitted.

// de_FooEnumSet omitted.

// de_GreetingStruct omitted.

// de_IntegerEnumList omitted.

// de_IntegerEnumMap omitted.

// de_IntegerEnumSet omitted.

// de_IntegerList omitted.

// de_NestedStringList omitted.

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

// de_StringList omitted.

// de_StringMap omitted.

// de_StringSet omitted.

/**
 * deserializeAws_restJson1TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

// de_Unit omitted.

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

const _B = "Byte";
const _BL = "BooleanList";
const _Bo = "Boolean";
const _D = "Double";
const _DL = "DoubleList";
const _E = "Enum";
const _EL = "EnumList";
const _Em = "Empty";
const _F = "Float";
const _H = "Header";
const _I = "Integer";
const _IE = "IntegerEnum";
const _IEL = "IntegerEnumList";
const _IL = "IntegerList";
const _IS = "IntegerSet";
const _L = "Long";
const _N = "Null";
const _S = "String";
const _SL = "StringList";
const _SS = "StringSet";
const _Sh = "Short";
const _T = "Timestamp";
const _TL = "TimestampList";
const _a = "a";
const _amth = "amz-media-typed-header";
const _b = "baz";
const _bIH = "booleanInHeader";
const _bIHy = "byteInHeader";
const _bIQ = "booleanInQuery";
const _bIQy = "byteInQuery";
const _b_ = "b";
const _ba = "bar";
const _bl = "blob";
const _bo = "booleaninheader";
const _by = "byteinheader";
const _c = "c";
const _cT = "contentType";
const _ce = "content-encoding";
const _co = "corge";
const _ct = "content-type";
const _d = "doubleinheader";
const _dF = "defaultFormat";
const _dIH = "doubleInHeader";
const _dIQ = "doubleInQuery";
const _e = "encoding";
const _eS = "emptyString";
const _f = "foo";
const _fIH = "floatInHeader";
const _fIQ = "floatInQuery";
const _fl = "floatinheader";
const _g = "greeting";
const _h = "hello";
const _hB = "headerByte";
const _hBL = "headerBooleanList";
const _hD = "headerDouble";
const _hE = "headerEnum";
const _hEL = "headerEnumList";
const _hF = "headerFloat";
const _hFB = "headerFalseBool";
const _hI = "headerInteger";
const _hIE = "headerIntegerEnum";
const _hIEL = "headerIntegerEnumList";
const _hIL = "headerIntegerList";
const _hL = "headerLong";
const _hS = "headerString";
const _hSL = "headerStringList";
const _hSS = "headerStringSet";
const _hSe = "headerShort";
const _hTB = "headerTrueBool";
const _hTL = "headerTimestampList";
const _i = "integerinheader";
const _iIH = "integerInHeader";
const _iIQ = "integerInQuery";
const _j = "json";
const _l = "longinheader";
const _lIH = "longInHeader";
const _lIQ = "longInQuery";
const _mDT = "memberDateTime";
const _mES = "memberEpochSeconds";
const _mHD = "memberHttpDate";
const _mS = "maybeSet";
const _nV = "nullValue";
const _q = "qux";
const _qB = "queryByte";
const _qBL = "queryBooleanList";
const _qBu = "queryBoolean";
const _qD = "queryDouble";
const _qDL = "queryDoubleList";
const _qE = "queryEnum";
const _qEL = "queryEnumList";
const _qF = "queryFloat";
const _qI = "queryInteger";
const _qIE = "queryIntegerEnum";
const _qIEL = "queryIntegerEnumList";
const _qIL = "queryIntegerList";
const _qIS = "queryIntegerSet";
const _qL = "queryLong";
const _qS = "queryString";
const _qSL = "queryStringList";
const _qSS = "queryStringSet";
const _qSu = "queryShort";
const _qT = "queryTimestamp";
const _qTL = "queryTimestampList";
const _s = "shortinheader";
const _sIH = "shortInHeader";
const _sIQ = "shortInQuery";
const _t = "timestamp";
const _tDT = "targetDateTime";
const _tES = "targetEpochSeconds";
const _tHD = "targetHttpDate";
const _tI = "testId";
const _to = "token";
const _xa = "x-a";
const _xati = "x-amz-test-id";
const _xb = "x-byte";
const _xb_ = "x-boolean1";
const _xb__ = "x-boolean2";
const _xb___ = "x-booleanlist";
const _xb____ = "x-b";
const _xc = "x-c";
const _xd = "x-double";
const _xd_ = "x-defaultformat";
const _xe = "x-enum";
const _xe_ = "x-enumlist";
const _xf = "x-foo";
const _xf_ = "x-float";
const _xg = "x-greeting";
const _xh = "x-header";
const _xi = "x-integer";
const _xi_ = "x-integerlist";
const _xi__ = "x-integerenum";
const _xi___ = "x-integerenumlist";
const _xj = "x-json";
const _xl = "x-long";
const _xm = "x-memberepochseconds";
const _xm_ = "x-memberhttpdate";
const _xm__ = "x-memberdatetime";
const _xs = "x-string";
const _xs_ = "x-short";
const _xs__ = "x-stringlist";
const _xs___ = "x-stringset";
const _xt = "x-timestamplist";
const _xt_ = "x-targetepochseconds";
const _xt__ = "x-targethttpdate";
const _xt___ = "x-targetdatetime";

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
