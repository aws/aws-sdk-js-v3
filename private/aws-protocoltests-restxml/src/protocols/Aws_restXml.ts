// smithy-typescript generated code
import { loadRestXmlErrorCode, parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  collectBody,
  convertMap,
  dateToUtcString as __dateToUtcString,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  isSerializableHeaderValue,
  map,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  quoteHeader as __quoteHeader,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  splitEvery as __splitEvery,
  splitHeader as __splitHeader,
  strictParseByte as __strictParseByte,
  strictParseDouble as __strictParseDouble,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  strictParseShort as __strictParseShort,
  withBaseException,
} from "@smithy/smithy-client";
import type {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "../commands/AllQueryStringTypesCommand";
import { BodyWithXmlNameCommandInput, BodyWithXmlNameCommandOutput } from "../commands/BodyWithXmlNameCommand";
import {
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
} from "../commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
} from "../commands/ConstantQueryStringCommand";
import {
  ContentTypeParametersCommandInput,
  ContentTypeParametersCommandOutput,
} from "../commands/ContentTypeParametersCommand";
import { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "../commands/DatetimeOffsetsCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "../commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommandInput, EndpointOperationCommandOutput } from "../commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelHeaderOperationCommandInput,
  EndpointWithHostLabelHeaderOperationCommandOutput,
} from "../commands/EndpointWithHostLabelHeaderOperationCommand";
import {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "../commands/EndpointWithHostLabelOperationCommand";
import { FlattenedXmlMapCommandInput, FlattenedXmlMapCommandOutput } from "../commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
} from "../commands/FlattenedXmlMapWithXmlNameCommand";
import {
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
} from "../commands/FlattenedXmlMapWithXmlNamespaceCommand";
import { FractionalSecondsCommandInput, FractionalSecondsCommandOutput } from "../commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "../commands/GreetingWithErrorsCommand";
import {
  HttpEmptyPrefixHeadersCommandInput,
  HttpEmptyPrefixHeadersCommandOutput,
} from "../commands/HttpEmptyPrefixHeadersCommand";
import { HttpEnumPayloadCommandInput, HttpEnumPayloadCommandOutput } from "../commands/HttpEnumPayloadCommand";
import { HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput } from "../commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "../commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithMemberXmlNameCommandInput,
  HttpPayloadWithMemberXmlNameCommandOutput,
} from "../commands/HttpPayloadWithMemberXmlNameCommand";
import {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "../commands/HttpPayloadWithStructureCommand";
import {
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
} from "../commands/HttpPayloadWithUnionCommand";
import {
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput,
} from "../commands/HttpPayloadWithXmlNameCommand";
import {
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
} from "../commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import {
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput,
} from "../commands/HttpPayloadWithXmlNamespaceCommand";
import { HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput } from "../commands/HttpPrefixHeadersCommand";
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
import { NestedXmlMapsCommandInput, NestedXmlMapsCommandOutput } from "../commands/NestedXmlMapsCommand";
import {
  NestedXmlMapWithXmlNameCommandInput,
  NestedXmlMapWithXmlNameCommandOutput,
} from "../commands/NestedXmlMapWithXmlNameCommand";
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
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "../commands/TimestampFormatHeadersCommand";
import { XmlAttributesCommandInput, XmlAttributesCommandOutput } from "../commands/XmlAttributesCommand";
import {
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput,
} from "../commands/XmlAttributesOnPayloadCommand";
import { XmlBlobsCommandInput, XmlBlobsCommandOutput } from "../commands/XmlBlobsCommand";
import { XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput } from "../commands/XmlEmptyBlobsCommand";
import { XmlEmptyListsCommandInput, XmlEmptyListsCommandOutput } from "../commands/XmlEmptyListsCommand";
import { XmlEmptyMapsCommandInput, XmlEmptyMapsCommandOutput } from "../commands/XmlEmptyMapsCommand";
import { XmlEmptyStringsCommandInput, XmlEmptyStringsCommandOutput } from "../commands/XmlEmptyStringsCommand";
import { XmlEnumsCommandInput, XmlEnumsCommandOutput } from "../commands/XmlEnumsCommand";
import { XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "../commands/XmlIntEnumsCommand";
import { XmlListsCommandInput, XmlListsCommandOutput } from "../commands/XmlListsCommand";
import { XmlMapsCommandInput, XmlMapsCommandOutput } from "../commands/XmlMapsCommand";
import { XmlMapsXmlNameCommandInput, XmlMapsXmlNameCommandOutput } from "../commands/XmlMapsXmlNameCommand";
import {
  XmlMapWithXmlNamespaceCommandInput,
  XmlMapWithXmlNamespaceCommandOutput,
} from "../commands/XmlMapWithXmlNamespaceCommand";
import { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "../commands/XmlNamespacesCommand";
import { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "../commands/XmlTimestampsCommand";
import { XmlUnionsCommandInput, XmlUnionsCommandOutput } from "../commands/XmlUnionsCommand";
import { FooEnum, IntegerEnum } from "../models/enums";
import { ComplexError, InvalidGreeting } from "../models/errors";
import {
  ComplexNestedErrorData,
  GreetingStruct,
  NestedPayload,
  PayloadWithXmlName,
  PayloadWithXmlNamespace,
  PayloadWithXmlNamespaceAndPrefix,
  RecursiveShapesInputOutputNested1,
  RecursiveShapesInputOutputNested2,
  StructureListMember,
  UnionPayload,
  XmlAttributesPayloadRequest,
  XmlAttributesPayloadResponse,
  XmlNamespaceNested,
  XmlNestedUnionStruct,
  XmlUnionShape,
} from "../models/models_0";
import { RestXmlProtocolServiceException as __BaseException } from "../models/RestXmlProtocolServiceException";

/**
 * serializeAws_restXmlAllQueryStringTypesCommand
 */
export const se_AllQueryStringTypesCommand = async (
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/AllQueryStringTypesInput");
  const query: any = map({
    ...convertMap(input.queryParamsMapOfStrings),
    [_S]: [, input[_qS]!],
    [_SL]: [() => input.queryStringList !== void 0, () => input[_qSL]! || []],
    [_SS]: [() => input.queryStringSet !== void 0, () => input[_qSS]! || []],
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
    [_T]: [() => input.queryTimestamp !== void 0, () => __serializeDateTime(input[_qT]!).toString()],
    [_TL]: [
      () => input.queryTimestampList !== void 0,
      () => (input[_qTL]! || []).map((_entry) => __serializeDateTime(_entry).toString() as any),
    ],
    [_E]: [, input[_qE]!],
    [_EL]: [() => input.queryEnumList !== void 0, () => input[_qEL]! || []],
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
 * serializeAws_restXmlBodyWithXmlNameCommand
 */
export const se_BodyWithXmlNameCommand = async (
  input: BodyWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/BodyWithXmlName");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_A);
  if (input[_n] != null) {
    bn.c(se_PayloadWithXmlName(input[_n], context).n(_n));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlConstantAndVariableQueryStringCommand
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
 * serializeAws_restXmlConstantQueryStringCommand
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
 * serializeAws_restXmlContentTypeParametersCommand
 */
export const se_ContentTypeParametersCommand = async (
  input: ContentTypeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/ContentTypeParameters");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_CTPI);
  if (input[_v] != null) {
    bn.c(__XmlNode.of(_I, String(input[_v])).n(_v));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDatetimeOffsetsCommand
 */
export const se_DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DatetimeOffsets");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlEmptyInputAndEmptyOutputCommand
 */
export const se_EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/EmptyInputAndEmptyOutput");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlEndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/EndpointOperation");
  let body: any;
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
 * serializeAws_restXmlEndpointWithHostLabelHeaderOperationCommand
 */
export const se_EndpointWithHostLabelHeaderOperationCommand = async (
  input: EndpointWithHostLabelHeaderOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaai]: input[_aI]!,
  });
  b.bp("/EndpointWithHostLabelHeaderOperation");
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{accountId}." + resolvedHostname;
    if (input.accountId === undefined) {
      throw new Error("Empty value provided for input host prefix: accountId.");
    }
    resolvedHostname = resolvedHostname.replace("{accountId}", input.accountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlEndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/EndpointWithHostLabelOperation");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_EWHLOR);
  if (input[_l] != null) {
    bn.c(__XmlNode.of(_S, input[_l]).n(_l));
  }
  body += bn.toString();
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
 * serializeAws_restXmlFlattenedXmlMapCommand
 */
export const se_FlattenedXmlMapCommand = async (
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/FlattenedXmlMap");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_FXMR);
  bn.l(input, "myMap", "myMap", () => se_FooEnumMap(input[_mM]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand
 */
export const se_FlattenedXmlMapWithXmlNameCommand = async (
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/FlattenedXmlMapWithXmlName");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_FXMWXNR);
  bn.l(input, "myMap", "KVP", () => se_FlattenedXmlMapWithXmlNameInputOutputMap(input[_mM]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand
 */
export const se_FlattenedXmlMapWithXmlNamespaceCommand = async (
  input: FlattenedXmlMapWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/FlattenedXmlMapWithXmlNamespace");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlFractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/FractionalSeconds");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GreetingWithErrors");
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpEmptyPrefixHeadersCommand
 */
export const se_HttpEmptyPrefixHeadersCommand = async (
  input: HttpEmptyPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    ...(input.prefixHeaders !== undefined &&
      Object.keys(input.prefixHeaders).reduce((acc: any, suffix: string) => {
        acc[`${suffix.toLowerCase()}`] = input.prefixHeaders![suffix];
        return acc;
      }, {})),
    [_h]: input[_sH]!,
  });
  b.bp("/HttpEmptyPrefixHeaders");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpEnumPayloadCommand
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
  let contents: any;
  if (input.payload !== undefined) {
    contents = input.payload;
    body = contents;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadTraitsCommand
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
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand
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
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadWithMemberXmlNameCommand
 */
export const se_HttpPayloadWithMemberXmlNameCommand = async (
  input: HttpPayloadWithMemberXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/HttpPayloadWithMemberXmlName");
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlName(input.nested, context);
    contents = contents.n("Hola");
    body = _ve;
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadWithStructureCommand
 */
export const se_HttpPayloadWithStructureCommand = async (
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/HttpPayloadWithStructure");
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_NestedPayload(input.nested, context);
    body = _ve;
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadWithUnionCommand
 */
export const se_HttpPayloadWithUnionCommand = async (
  input: HttpPayloadWithUnionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/HttpPayloadWithUnion");
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_UnionPayload(input.nested, context);
    body = _ve;
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadWithXmlNameCommand
 */
export const se_HttpPayloadWithXmlNameCommand = async (
  input: HttpPayloadWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/HttpPayloadWithXmlName");
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlName(input.nested, context);
    body = _ve;
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand
 */
export const se_HttpPayloadWithXmlNamespaceCommand = async (
  input: HttpPayloadWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/HttpPayloadWithXmlNamespace");
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlNamespace(input.nested, context);
    body = _ve;
    contents.a("xmlns", "http://foo.com");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand
 */
export const se_HttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/HttpPayloadWithXmlNamespaceAndPrefix");
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlNamespaceAndPrefix(input.nested, context);
    body = _ve;
    contents.a("xmlns:baz", "http://foo.com");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpPrefixHeadersCommand
 */
export const se_HttpPrefixHeadersCommand = async (
  input: HttpPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    ...(input.fooMap !== undefined &&
      Object.keys(input.fooMap).reduce((acc: any, suffix: string) => {
        acc[`x-foo-${suffix.toLowerCase()}`] = input.fooMap![suffix];
        return acc;
      }, {})),
    [_xf]: input[_f]!,
  });
  b.bp("/HttpPrefixHeaders");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpRequestWithFloatLabelsCommand
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
 * serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand
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
 * serializeAws_restXmlHttpRequestWithLabelsCommand
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
  b.p("timestamp", () => __serializeDateTime(input.timestamp!).toString(), "{timestamp}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand
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
    () => (input.memberEpochSeconds!.getTime() / 1_000).toString(),
    "{memberEpochSeconds}",
    false
  );
  b.p("memberHttpDate", () => __dateToUtcString(input.memberHttpDate!).toString(), "{memberHttpDate}", false);
  b.p("memberDateTime", () => __serializeDateTime(input.memberDateTime!).toString(), "{memberDateTime}", false);
  b.p("defaultFormat", () => __serializeDateTime(input.defaultFormat!).toString(), "{defaultFormat}", false);
  b.p(
    "targetEpochSeconds",
    () => (input.targetEpochSeconds!.getTime() / 1_000).toString(),
    "{targetEpochSeconds}",
    false
  );
  b.p("targetHttpDate", () => __dateToUtcString(input.targetHttpDate!).toString(), "{targetHttpDate}", false);
  b.p("targetDateTime", () => __serializeDateTime(input.targetDateTime!).toString(), "{targetDateTime}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpResponseCodeCommand
 */
export const se_HttpResponseCodeCommand = async (
  input: HttpResponseCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/HttpResponseCode");
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHttpStringPayloadCommand
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
  let contents: any;
  if (input.payload !== undefined) {
    contents = input.payload;
    body = contents;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlIgnoreQueryParamsInResponseCommand
 */
export const se_IgnoreQueryParamsInResponseCommand = async (
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/IgnoreQueryParamsInResponse");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlInputAndOutputWithHeadersCommand
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
    [_xs__]: [() => isSerializableHeaderValue(input[_hSL]), () => (input[_hSL]! || []).map(__quoteHeader).join(", ")],
    [_xs___]: [() => isSerializableHeaderValue(input[_hSS]), () => (input[_hSS]! || []).map(__quoteHeader).join(", ")],
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
    [_xe_]: [() => isSerializableHeaderValue(input[_hEL]), () => (input[_hEL]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/InputAndOutputWithHeaders");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlNestedXmlMapsCommand
 */
export const se_NestedXmlMapsCommand = async (
  input: NestedXmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/NestedXmlMaps");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_NXMR);
  bn.l(input, "flatNestedMap", "flatNestedMap", () => se_NestedMap(input[_fNM]!, context));
  bn.lc(input, "nestedMap", "nestedMap", () => se_NestedMap(input[_nM]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlNestedXmlMapWithXmlNameCommand
 */
export const se_NestedXmlMapWithXmlNameCommand = async (
  input: NestedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/NestedXmlMapWithXmlName");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_NXMWXNR);
  bn.lc(input, "nestedXmlMapWithXmlNameMap", "nestedXmlMapWithXmlNameMap", () =>
    se_NestedXmlMapWithXmlNameMap(input[_nXMWXNM]!, context)
  );
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlNoInputAndNoOutputCommand
 */
export const se_NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/NoInputAndNoOutput");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlNoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/NoInputAndOutputOutput");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlNullAndEmptyHeadersClientCommand
 */
export const se_NullAndEmptyHeadersClientCommand = async (
  input: NullAndEmptyHeadersClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xa]: input[_a]!,
    [_xb____]: input[_b_]!,
    [_xc]: [() => isSerializableHeaderValue(input[_c]), () => (input[_c]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/NullAndEmptyHeadersClient");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlNullAndEmptyHeadersServerCommand
 */
export const se_NullAndEmptyHeadersServerCommand = async (
  input: NullAndEmptyHeadersServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xa]: input[_a]!,
    [_xb____]: input[_b_]!,
    [_xc]: [() => isSerializableHeaderValue(input[_c]), () => (input[_c]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/NullAndEmptyHeadersServer");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlOmitsNullSerializesEmptyStringCommand
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
 * serializeAws_restXmlPutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_ce]: input[_e]!,
  });
  b.bp("/requestcompression/putcontentwithencoding");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_PWCEI);
  if (input[_d] != null) {
    bn.c(__XmlNode.of(_S, input[_d]).n(_d));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand
 */
export const se_QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/QueryIdempotencyTokenAutoFill");
  const query: any = map({
    [_t]: [, input[_t] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlQueryParamsAsStringListMapCommand
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
 * serializeAws_restXmlQueryPrecedenceCommand
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
 * serializeAws_restXmlRecursiveShapesCommand
 */
export const se_RecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/RecursiveShapes");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_RSR);
  if (input[_n] != null) {
    bn.c(se_RecursiveShapesInputOutputNested1(input[_n], context).n(_n));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlSimpleScalarPropertiesCommand
 */
export const se_SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xf]: input[_f]!,
  });
  b.bp("/SimpleScalarProperties");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_SSPR);
  if (input[_bV] != null) {
    bn.c(__XmlNode.of(_B, String(input[_bV])).n(_bV));
  }
  if (input[_dV] != null) {
    bn.c(__XmlNode.of(_D, String(input[_dV])).n(_DD));
  }
  if (input[_fBV] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_fBV])).n(_fBV));
  }
  if (input[_fV] != null) {
    bn.c(__XmlNode.of(_F, String(input[_fV])).n(_fV));
  }
  if (input[_iV] != null) {
    bn.c(__XmlNode.of(_I, String(input[_iV])).n(_iV));
  }
  if (input[_lV] != null) {
    bn.c(__XmlNode.of(_L, String(input[_lV])).n(_lV));
  }
  if (input[_sV] != null) {
    bn.c(__XmlNode.of(_Sh, String(input[_sV])).n(_sV));
  }
  if (input[_sVt] != null) {
    bn.c(__XmlNode.of(_S, input[_sVt]).n(_sVt));
  }
  if (input[_tBV] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_tBV])).n(_tBV));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlTimestampFormatHeadersCommand
 */
export const se_TimestampFormatHeadersCommand = async (
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xm]: [() => isSerializableHeaderValue(input[_mES]), () => (input[_mES]!.getTime() / 1_000).toString()],
    [_xm_]: [() => isSerializableHeaderValue(input[_mHD]), () => __dateToUtcString(input[_mHD]!).toString()],
    [_xm__]: [() => isSerializableHeaderValue(input[_mDT]), () => __serializeDateTime(input[_mDT]!).toString()],
    [_xd_]: [() => isSerializableHeaderValue(input[_dF]), () => __dateToUtcString(input[_dF]!).toString()],
    [_xt_]: [() => isSerializableHeaderValue(input[_tES]), () => (input[_tES]!.getTime() / 1_000).toString()],
    [_xt__]: [() => isSerializableHeaderValue(input[_tHD]), () => __dateToUtcString(input[_tHD]!).toString()],
    [_xt___]: [() => isSerializableHeaderValue(input[_tDT]), () => __serializeDateTime(input[_tDT]!).toString()],
  });
  b.bp("/TimestampFormatHeaders");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlAttributesCommand
 */
export const se_XmlAttributesCommand = async (
  input: XmlAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlAttributes");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XAR);
  bn.a("test", input[_at]);
  if (input[_f] != null) {
    bn.c(__XmlNode.of(_S, input[_f]).n(_f));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlAttributesOnPayloadCommand
 */
export const se_XmlAttributesOnPayloadCommand = async (
  input: XmlAttributesOnPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlAttributesOnPayload");
  let body: any;
  let contents: any;
  if (input.payload !== undefined) {
    contents = se_XmlAttributesPayloadRequest(input.payload, context);
    body = _ve;
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlBlobsCommand
 */
export const se_XmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlBlobs");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XBR);
  if (input[_d] != null) {
    bn.c(__XmlNode.of(_Bl, context.base64Encoder(input[_d])).n(_d));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlEmptyBlobsCommand
 */
export const se_XmlEmptyBlobsCommand = async (
  input: XmlEmptyBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlEmptyBlobs");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XEBR);
  if (input[_d] != null) {
    bn.c(__XmlNode.of(_Bl, context.base64Encoder(input[_d])).n(_d));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlEmptyListsCommand
 */
export const se_XmlEmptyListsCommand = async (
  input: XmlEmptyListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlEmptyLists");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XELR);
  bn.lc(input, "booleanList", "booleanList", () => se_BooleanList(input[_bL]!, context));
  bn.lc(input, "enumList", "enumList", () => se_FooEnumList(input[_eL]!, context));
  bn.l(input, "flattenedList", "flattenedList", () => se_RenamedListMembers(input[_fL]!, context));
  bn.l(input, "flattenedList2", "customName", () => se_RenamedListMembers(input[_fLl]!, context));
  bn.l(input, "flattenedListWithMemberNamespace", "flattenedListWithMemberNamespace", () =>
    se_ListWithMemberNamespace(input[_fLWMN]!, context)
  );
  bn.l(input, "flattenedListWithNamespace", "flattenedListWithNamespace", () =>
    se_ListWithNamespace(input[_fLWN]!, context)
  );
  bn.l(input, "flattenedStructureList", "flattenedStructureList", () => se_StructureList(input[_fSL]!, context));
  bn.lc(input, "intEnumList", "intEnumList", () => se_IntegerEnumList(input[_iEL]!, context));
  bn.lc(input, "integerList", "integerList", () => se_IntegerList(input[_iL]!, context));
  bn.lc(input, "nestedStringList", "nestedStringList", () => se_NestedStringList(input[_nSL]!, context));
  bn.lc(input, "renamedListMembers", "renamed", () => se_RenamedListMembers(input[_rLM]!, context));
  bn.lc(input, "stringList", "stringList", () => se_StringList(input[_sL]!, context));
  bn.lc(input, "stringSet", "stringSet", () => se_StringSet(input[_sS]!, context));
  bn.lc(input, "structureList", "myStructureList", () => se_StructureList(input[_sLt]!, context));
  bn.lc(input, "timestampList", "timestampList", () => se_TimestampList(input[_tL]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlEmptyMapsCommand
 */
export const se_XmlEmptyMapsCommand = async (
  input: XmlEmptyMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlEmptyMaps");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XEMR);
  bn.lc(input, "myMap", "myMap", () => se_XmlMapsInputOutputMap(input[_mM]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlEmptyStringsCommand
 */
export const se_XmlEmptyStringsCommand = async (
  input: XmlEmptyStringsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlEmptyStrings");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XESR);
  if (input[_eS] != null) {
    bn.c(__XmlNode.of(_S, input[_eS]).n(_eS));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlEnumsCommand
 */
export const se_XmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlEnums");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XER);
  if (input[_fE] != null) {
    bn.c(__XmlNode.of(_FE, input[_fE]).n(_fE));
  }
  if (input[_fEo] != null) {
    bn.c(__XmlNode.of(_FE, input[_fEo]).n(_fEo));
  }
  if (input[_fEoo] != null) {
    bn.c(__XmlNode.of(_FE, input[_fEoo]).n(_fEoo));
  }
  bn.lc(input, "fooEnumList", "fooEnumList", () => se_FooEnumList(input[_fEL]!, context));
  bn.lc(input, "fooEnumMap", "fooEnumMap", () => se_FooEnumMap(input[_fEM]!, context));
  bn.lc(input, "fooEnumSet", "fooEnumSet", () => se_FooEnumSet(input[_fES]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlIntEnumsCommand
 */
export const se_XmlIntEnumsCommand = async (
  input: XmlIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlIntEnums");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XIER);
  if (input[_iE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_iE])).n(_iE));
  }
  if (input[_iEn] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_iEn])).n(_iEn));
  }
  if (input[_iEnt] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_iEnt])).n(_iEnt));
  }
  bn.lc(input, "intEnumList", "intEnumList", () => se_IntegerEnumList(input[_iEL]!, context));
  bn.lc(input, "intEnumMap", "intEnumMap", () => se_IntegerEnumMap(input[_iEM]!, context));
  bn.lc(input, "intEnumSet", "intEnumSet", () => se_IntegerEnumSet(input[_iES]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlListsCommand
 */
export const se_XmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlLists");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XLR);
  bn.lc(input, "booleanList", "booleanList", () => se_BooleanList(input[_bL]!, context));
  bn.lc(input, "enumList", "enumList", () => se_FooEnumList(input[_eL]!, context));
  bn.l(input, "flattenedList", "flattenedList", () => se_RenamedListMembers(input[_fL]!, context));
  bn.l(input, "flattenedList2", "customName", () => se_RenamedListMembers(input[_fLl]!, context));
  bn.l(input, "flattenedListWithMemberNamespace", "flattenedListWithMemberNamespace", () =>
    se_ListWithMemberNamespace(input[_fLWMN]!, context)
  );
  bn.l(input, "flattenedListWithNamespace", "flattenedListWithNamespace", () =>
    se_ListWithNamespace(input[_fLWN]!, context)
  );
  bn.l(input, "flattenedStructureList", "flattenedStructureList", () => se_StructureList(input[_fSL]!, context));
  bn.lc(input, "intEnumList", "intEnumList", () => se_IntegerEnumList(input[_iEL]!, context));
  bn.lc(input, "integerList", "integerList", () => se_IntegerList(input[_iL]!, context));
  bn.lc(input, "nestedStringList", "nestedStringList", () => se_NestedStringList(input[_nSL]!, context));
  bn.lc(input, "renamedListMembers", "renamed", () => se_RenamedListMembers(input[_rLM]!, context));
  bn.lc(input, "stringList", "stringList", () => se_StringList(input[_sL]!, context));
  bn.lc(input, "stringSet", "stringSet", () => se_StringSet(input[_sS]!, context));
  bn.lc(input, "structureList", "myStructureList", () => se_StructureList(input[_sLt]!, context));
  bn.lc(input, "timestampList", "timestampList", () => se_TimestampList(input[_tL]!, context));
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlMapsCommand
 */
export const se_XmlMapsCommand = async (
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlMaps");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XMR);
  bn.lc(input, "myMap", "myMap", () => se_XmlMapsInputOutputMap(input[_mM]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlMapsXmlNameCommand
 */
export const se_XmlMapsXmlNameCommand = async (
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlMapsXmlName");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XMXNR);
  bn.lc(input, "myMap", "myMap", () => se_XmlMapsXmlNameInputOutputMap(input[_mM]!, context));
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlMapWithXmlNamespaceCommand
 */
export const se_XmlMapWithXmlNamespaceCommand = async (
  input: XmlMapWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlMapWithXmlNamespace");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XMWXNR);
  if (input[_mM] != null) {
    const ns = se_XmlMapWithXmlNamespaceInputOutputMap(input[_mM], context);
    const containerNode = new __XmlNode(_KVP);
    containerNode.a("xmlns", "https://the-member.example.com");
    ns.map((n: any) => {
      containerNode.c(n);
    });
    bn.c(containerNode);
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlNamespacesCommand
 */
export const se_XmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlNamespaces");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XNR);
  bn.a("xmlns", "http://foo.com");
  if (input[_n] != null) {
    bn.c(se_XmlNamespaceNested(input[_n], context).n(_n));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlTimestampsCommand
 */
export const se_XmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlTimestamps");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XTR);
  if (input[_dT] != null) {
    bn.c(__XmlNode.of(_T, __serializeDateTime(input[_dT]).toString()).n(_dT));
  }
  if (input[_dTOT] != null) {
    bn.c(__XmlNode.of(_DT, __serializeDateTime(input[_dTOT]).toString()).n(_dTOT));
  }
  if (input[_eSp] != null) {
    bn.c(__XmlNode.of(_T, (input[_eSp].getTime() / 1_000).toString()).n(_eSp));
  }
  if (input[_eSOT] != null) {
    bn.c(__XmlNode.of(_ES, (input[_eSOT].getTime() / 1_000).toString()).n(_eSOT));
  }
  if (input[_hDt] != null) {
    bn.c(__XmlNode.of(_T, __dateToUtcString(input[_hDt]).toString()).n(_hDt));
  }
  if (input[_hDOT] != null) {
    bn.c(__XmlNode.of(_HD, __dateToUtcString(input[_hDOT]).toString()).n(_hDOT));
  }
  if (input[_no] != null) {
    bn.c(__XmlNode.of(_T, __serializeDateTime(input[_no])).n(_no));
  }
  body += bn.toString();
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlXmlUnionsCommand
 */
export const se_XmlUnionsCommand = async (
  input: XmlUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/xml",
  };
  b.bp("/XmlUnions");
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_XUR);
  if (input[_uV] != null) {
    bn.c(se_XmlUnionShape(input[_uV], context).n(_uV));
  }
  body += bn.toString();
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restXmlAllQueryStringTypesCommand
 */
export const de_AllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
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
 * deserializeAws_restXmlBodyWithXmlNameCommand
 */
export const de_BodyWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BodyWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_n] != null) {
    contents[_n] = de_PayloadWithXmlName(data[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlConstantAndVariableQueryStringCommand
 */
export const de_ConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
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
 * deserializeAws_restXmlConstantQueryStringCommand
 */
export const de_ConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
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
 * deserializeAws_restXmlContentTypeParametersCommand
 */
export const de_ContentTypeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContentTypeParametersCommandOutput> => {
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
 * deserializeAws_restXmlDatetimeOffsetsCommand
 */
export const de_DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_da] != null) {
    contents[_da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_da]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlEmptyInputAndEmptyOutputCommand
 */
export const de_EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
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
 * deserializeAws_restXmlEndpointOperationCommand
 */
export const de_EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
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
 * deserializeAws_restXmlEndpointWithHostLabelHeaderOperationCommand
 */
export const de_EndpointWithHostLabelHeaderOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> => {
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
 * deserializeAws_restXmlEndpointWithHostLabelOperationCommand
 */
export const de_EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
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
 * deserializeAws_restXmlFlattenedXmlMapCommand
 */
export const de_FlattenedXmlMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.myMap).trim() === "") {
    contents[_mM] = {};
  } else if (data[_mM] != null) {
    contents[_mM] = de_FooEnumMap(__getArrayIfSingleItem(data[_mM]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand
 */
export const de_FlattenedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.KVP).trim() === "") {
    contents[_mM] = {};
  } else if (data[_KVP] != null) {
    contents[_mM] = de_FlattenedXmlMapWithXmlNameInputOutputMap(__getArrayIfSingleItem(data[_KVP]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand
 */
export const de_FlattenedXmlMapWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.KVP).trim() === "") {
    contents[_mM] = {};
  } else if (data[_KVP] != null) {
    contents[_mM] = de_FlattenedXmlMapWithXmlNamespaceOutputMap(__getArrayIfSingleItem(data[_KVP]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFractionalSecondsCommand
 */
export const de_FractionalSecondsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_da] != null) {
    contents[_da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_da]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlGreetingWithErrorsCommand
 */
export const de_GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_g]: [, output.headers[_xg]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpEmptyPrefixHeadersCommand
 */
export const de_HttpEmptyPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEmptyPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_sH]: [, output.headers[_h]],
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
 * deserializeAws_restXmlHttpEnumPayloadCommand
 */
export const de_HttpEnumPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadTraitsCommand
 */
export const de_HttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand
 */
export const de_HttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommand
 */
export const de_HttpPayloadWithMemberXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithMemberXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlName(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithStructureCommand
 */
export const de_HttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_NestedPayload(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithUnionCommand
 */
export const de_HttpPayloadWithUnionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithUnionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = await parseBody(output.body, context);
  if (Object.keys(data ?? {}).length) {
    contents.nested = __expectUnion(de_UnionPayload(data, context));
  }
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNameCommand
 */
export const de_HttpPayloadWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlName(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand
 */
export const de_HttpPayloadWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlNamespace(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand
 */
export const de_HttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlNamespaceAndPrefix(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPrefixHeadersCommand
 */
export const de_HttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restXmlHttpRequestWithFloatLabelsCommand
 */
export const de_HttpRequestWithFloatLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
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
 * deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand
 */
export const de_HttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
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
 * deserializeAws_restXmlHttpRequestWithLabelsCommand
 */
export const de_HttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
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
 * deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand
 */
export const de_HttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
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
 * deserializeAws_restXmlHttpResponseCodeCommand
 */
export const de_HttpResponseCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restXmlHttpStringPayloadCommand
 */
export const de_HttpStringPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restXmlIgnoreQueryParamsInResponseCommand
 */
export const de_IgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_b] != null) {
    contents[_b] = __expectString(data[_b]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInputAndOutputWithHeadersCommand
 */
export const de_InputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
      () => __splitHeader(output.headers[_xs__] || "").map((_entry) => _entry.trim() as any),
    ],
    [_hSS]: [
      () => void 0 !== output.headers[_xs___],
      () => __splitHeader(output.headers[_xs___] || "").map((_entry) => _entry.trim() as any),
    ],
    [_hIL]: [
      () => void 0 !== output.headers[_xi_],
      () => __splitHeader(output.headers[_xi_] || "").map((_entry) => __strictParseInt32(_entry.trim()) as any),
    ],
    [_hBL]: [
      () => void 0 !== output.headers[_xb___],
      () => __splitHeader(output.headers[_xb___] || "").map((_entry) => __parseBoolean(_entry.trim()) as any),
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
      () => __splitHeader(output.headers[_xe_] || "").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlNestedXmlMapsCommand
 */
export const de_NestedXmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedXmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.flatNestedMap).trim() === "") {
    contents[_fNM] = {};
  } else if (data[_fNM] != null) {
    contents[_fNM] = de_NestedMap(__getArrayIfSingleItem(data[_fNM]), context);
  }
  if (String(data.nestedMap).trim() === "") {
    contents[_nM] = {};
  } else if (data[_nM] != null && data[_nM][_en] != null) {
    contents[_nM] = de_NestedMap(__getArrayIfSingleItem(data[_nM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlNestedXmlMapWithXmlNameCommand
 */
export const de_NestedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.nestedXmlMapWithXmlNameMap).trim() === "") {
    contents[_nXMWXNM] = {};
  } else if (data[_nXMWXNM] != null && data[_nXMWXNM][_en] != null) {
    contents[_nXMWXNM] = de_NestedXmlMapWithXmlNameMap(__getArrayIfSingleItem(data[_nXMWXNM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoInputAndNoOutputCommand
 */
export const de_NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
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
 * deserializeAws_restXmlNoInputAndOutputCommand
 */
export const de_NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
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
 * deserializeAws_restXmlNullAndEmptyHeadersClientCommand
 */
export const de_NullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_a]: [, output.headers[_xa]],
    [_b_]: [, output.headers[_xb____]],
    [_c]: [
      () => void 0 !== output.headers[_xc],
      () => __splitHeader(output.headers[_xc] || "").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlNullAndEmptyHeadersServerCommand
 */
export const de_NullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_a]: [, output.headers[_xa]],
    [_b_]: [, output.headers[_xb____]],
    [_c]: [
      () => void 0 !== output.headers[_xc],
      () => __splitHeader(output.headers[_xc] || "").map((_entry) => _entry.trim() as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand
 */
export const de_OmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
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
 * deserializeAws_restXmlPutWithContentEncodingCommand
 */
export const de_PutWithContentEncodingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
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
 * deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand
 */
export const de_QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
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
 * deserializeAws_restXmlQueryParamsAsStringListMapCommand
 */
export const de_QueryParamsAsStringListMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
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
 * deserializeAws_restXmlQueryPrecedenceCommand
 */
export const de_QueryPrecedenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
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
 * deserializeAws_restXmlRecursiveShapesCommand
 */
export const de_RecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_n] != null) {
    contents[_n] = de_RecursiveShapesInputOutputNested1(data[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSimpleScalarPropertiesCommand
 */
export const de_SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_f]: [, output.headers[_xf]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_bV] != null) {
    contents[_bV] = __strictParseByte(data[_bV]) as number;
  }
  if (data[_DD] != null) {
    contents[_dV] = __strictParseFloat(data[_DD]) as number;
  }
  if (data[_fBV] != null) {
    contents[_fBV] = __parseBoolean(data[_fBV]);
  }
  if (data[_fV] != null) {
    contents[_fV] = __strictParseFloat(data[_fV]) as number;
  }
  if (data[_iV] != null) {
    contents[_iV] = __strictParseInt32(data[_iV]) as number;
  }
  if (data[_lV] != null) {
    contents[_lV] = __strictParseLong(data[_lV]) as number;
  }
  if (data[_sV] != null) {
    contents[_sV] = __strictParseShort(data[_sV]) as number;
  }
  if (data[_sVt] != null) {
    contents[_sVt] = __expectString(data[_sVt]);
  }
  if (data[_tBV] != null) {
    contents[_tBV] = __parseBoolean(data[_tBV]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTimestampFormatHeadersCommand
 */
export const de_TimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restXmlXmlAttributesCommand
 */
export const de_XmlAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_te] != null) {
    contents[_at] = __expectString(data[_te]);
  }
  if (data[_f] != null) {
    contents[_f] = __expectString(data[_f]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlAttributesOnPayloadCommand
 */
export const de_XmlAttributesOnPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.payload = de_XmlAttributesPayloadResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlXmlBlobsCommand
 */
export const de_XmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_d] != null) {
    contents[_d] = context.base64Decoder(data[_d]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyBlobsCommand
 */
export const de_XmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_d] != null) {
    contents[_d] = context.base64Decoder(data[_d]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyListsCommand
 */
export const de_XmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.booleanList).trim() === "") {
    contents[_bL] = [];
  } else if (data[_bL] != null && data[_bL][_m] != null) {
    contents[_bL] = de_BooleanList(__getArrayIfSingleItem(data[_bL][_m]), context);
  }
  if (String(data.enumList).trim() === "") {
    contents[_eL] = [];
  } else if (data[_eL] != null && data[_eL][_m] != null) {
    contents[_eL] = de_FooEnumList(__getArrayIfSingleItem(data[_eL][_m]), context);
  }
  if (String(data.flattenedList).trim() === "") {
    contents[_fL] = [];
  } else if (data[_fL] != null) {
    contents[_fL] = de_RenamedListMembers(__getArrayIfSingleItem(data[_fL]), context);
  }
  if (String(data.customName).trim() === "") {
    contents[_fLl] = [];
  } else if (data[_cN] != null) {
    contents[_fLl] = de_RenamedListMembers(__getArrayIfSingleItem(data[_cN]), context);
  }
  if (String(data.flattenedListWithMemberNamespace).trim() === "") {
    contents[_fLWMN] = [];
  } else if (data[_fLWMN] != null) {
    contents[_fLWMN] = de_ListWithMemberNamespace(__getArrayIfSingleItem(data[_fLWMN]), context);
  }
  if (String(data.flattenedListWithNamespace).trim() === "") {
    contents[_fLWN] = [];
  } else if (data[_fLWN] != null) {
    contents[_fLWN] = de_ListWithNamespace(__getArrayIfSingleItem(data[_fLWN]), context);
  }
  if (String(data.flattenedStructureList).trim() === "") {
    contents[_fSL] = [];
  } else if (data[_fSL] != null) {
    contents[_fSL] = de_StructureList(__getArrayIfSingleItem(data[_fSL]), context);
  }
  if (String(data.intEnumList).trim() === "") {
    contents[_iEL] = [];
  } else if (data[_iEL] != null && data[_iEL][_m] != null) {
    contents[_iEL] = de_IntegerEnumList(__getArrayIfSingleItem(data[_iEL][_m]), context);
  }
  if (String(data.integerList).trim() === "") {
    contents[_iL] = [];
  } else if (data[_iL] != null && data[_iL][_m] != null) {
    contents[_iL] = de_IntegerList(__getArrayIfSingleItem(data[_iL][_m]), context);
  }
  if (String(data.nestedStringList).trim() === "") {
    contents[_nSL] = [];
  } else if (data[_nSL] != null && data[_nSL][_m] != null) {
    contents[_nSL] = de_NestedStringList(__getArrayIfSingleItem(data[_nSL][_m]), context);
  }
  if (String(data.renamed).trim() === "") {
    contents[_rLM] = [];
  } else if (data[_r] != null && data[_r][_i] != null) {
    contents[_rLM] = de_RenamedListMembers(__getArrayIfSingleItem(data[_r][_i]), context);
  }
  if (String(data.stringList).trim() === "") {
    contents[_sL] = [];
  } else if (data[_sL] != null && data[_sL][_m] != null) {
    contents[_sL] = de_StringList(__getArrayIfSingleItem(data[_sL][_m]), context);
  }
  if (String(data.stringSet).trim() === "") {
    contents[_sS] = [];
  } else if (data[_sS] != null && data[_sS][_m] != null) {
    contents[_sS] = de_StringSet(__getArrayIfSingleItem(data[_sS][_m]), context);
  }
  if (String(data.myStructureList).trim() === "") {
    contents[_sLt] = [];
  } else if (data[_mSL] != null && data[_mSL][_i] != null) {
    contents[_sLt] = de_StructureList(__getArrayIfSingleItem(data[_mSL][_i]), context);
  }
  if (String(data.timestampList).trim() === "") {
    contents[_tL] = [];
  } else if (data[_tL] != null && data[_tL][_m] != null) {
    contents[_tL] = de_TimestampList(__getArrayIfSingleItem(data[_tL][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyMapsCommand
 */
export const de_XmlEmptyMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.myMap).trim() === "") {
    contents[_mM] = {};
  } else if (data[_mM] != null && data[_mM][_en] != null) {
    contents[_mM] = de_XmlMapsInputOutputMap(__getArrayIfSingleItem(data[_mM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyStringsCommand
 */
export const de_XmlEmptyStringsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyStringsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_eS] != null) {
    contents[_eS] = __expectString(data[_eS]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEnumsCommand
 */
export const de_XmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_fE] != null) {
    contents[_fE] = __expectString(data[_fE]);
  }
  if (data[_fEo] != null) {
    contents[_fEo] = __expectString(data[_fEo]);
  }
  if (data[_fEoo] != null) {
    contents[_fEoo] = __expectString(data[_fEoo]);
  }
  if (String(data.fooEnumList).trim() === "") {
    contents[_fEL] = [];
  } else if (data[_fEL] != null && data[_fEL][_m] != null) {
    contents[_fEL] = de_FooEnumList(__getArrayIfSingleItem(data[_fEL][_m]), context);
  }
  if (String(data.fooEnumMap).trim() === "") {
    contents[_fEM] = {};
  } else if (data[_fEM] != null && data[_fEM][_en] != null) {
    contents[_fEM] = de_FooEnumMap(__getArrayIfSingleItem(data[_fEM][_en]), context);
  }
  if (String(data.fooEnumSet).trim() === "") {
    contents[_fES] = [];
  } else if (data[_fES] != null && data[_fES][_m] != null) {
    contents[_fES] = de_FooEnumSet(__getArrayIfSingleItem(data[_fES][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlIntEnumsCommand
 */
export const de_XmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_iE] != null) {
    contents[_iE] = __strictParseInt32(data[_iE]) as number;
  }
  if (data[_iEn] != null) {
    contents[_iEn] = __strictParseInt32(data[_iEn]) as number;
  }
  if (data[_iEnt] != null) {
    contents[_iEnt] = __strictParseInt32(data[_iEnt]) as number;
  }
  if (String(data.intEnumList).trim() === "") {
    contents[_iEL] = [];
  } else if (data[_iEL] != null && data[_iEL][_m] != null) {
    contents[_iEL] = de_IntegerEnumList(__getArrayIfSingleItem(data[_iEL][_m]), context);
  }
  if (String(data.intEnumMap).trim() === "") {
    contents[_iEM] = {};
  } else if (data[_iEM] != null && data[_iEM][_en] != null) {
    contents[_iEM] = de_IntegerEnumMap(__getArrayIfSingleItem(data[_iEM][_en]), context);
  }
  if (String(data.intEnumSet).trim() === "") {
    contents[_iES] = [];
  } else if (data[_iES] != null && data[_iES][_m] != null) {
    contents[_iES] = de_IntegerEnumSet(__getArrayIfSingleItem(data[_iES][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlListsCommand
 */
export const de_XmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.booleanList).trim() === "") {
    contents[_bL] = [];
  } else if (data[_bL] != null && data[_bL][_m] != null) {
    contents[_bL] = de_BooleanList(__getArrayIfSingleItem(data[_bL][_m]), context);
  }
  if (String(data.enumList).trim() === "") {
    contents[_eL] = [];
  } else if (data[_eL] != null && data[_eL][_m] != null) {
    contents[_eL] = de_FooEnumList(__getArrayIfSingleItem(data[_eL][_m]), context);
  }
  if (String(data.flattenedList).trim() === "") {
    contents[_fL] = [];
  } else if (data[_fL] != null) {
    contents[_fL] = de_RenamedListMembers(__getArrayIfSingleItem(data[_fL]), context);
  }
  if (String(data.customName).trim() === "") {
    contents[_fLl] = [];
  } else if (data[_cN] != null) {
    contents[_fLl] = de_RenamedListMembers(__getArrayIfSingleItem(data[_cN]), context);
  }
  if (String(data.flattenedListWithMemberNamespace).trim() === "") {
    contents[_fLWMN] = [];
  } else if (data[_fLWMN] != null) {
    contents[_fLWMN] = de_ListWithMemberNamespace(__getArrayIfSingleItem(data[_fLWMN]), context);
  }
  if (String(data.flattenedListWithNamespace).trim() === "") {
    contents[_fLWN] = [];
  } else if (data[_fLWN] != null) {
    contents[_fLWN] = de_ListWithNamespace(__getArrayIfSingleItem(data[_fLWN]), context);
  }
  if (String(data.flattenedStructureList).trim() === "") {
    contents[_fSL] = [];
  } else if (data[_fSL] != null) {
    contents[_fSL] = de_StructureList(__getArrayIfSingleItem(data[_fSL]), context);
  }
  if (String(data.intEnumList).trim() === "") {
    contents[_iEL] = [];
  } else if (data[_iEL] != null && data[_iEL][_m] != null) {
    contents[_iEL] = de_IntegerEnumList(__getArrayIfSingleItem(data[_iEL][_m]), context);
  }
  if (String(data.integerList).trim() === "") {
    contents[_iL] = [];
  } else if (data[_iL] != null && data[_iL][_m] != null) {
    contents[_iL] = de_IntegerList(__getArrayIfSingleItem(data[_iL][_m]), context);
  }
  if (String(data.nestedStringList).trim() === "") {
    contents[_nSL] = [];
  } else if (data[_nSL] != null && data[_nSL][_m] != null) {
    contents[_nSL] = de_NestedStringList(__getArrayIfSingleItem(data[_nSL][_m]), context);
  }
  if (String(data.renamed).trim() === "") {
    contents[_rLM] = [];
  } else if (data[_r] != null && data[_r][_i] != null) {
    contents[_rLM] = de_RenamedListMembers(__getArrayIfSingleItem(data[_r][_i]), context);
  }
  if (String(data.stringList).trim() === "") {
    contents[_sL] = [];
  } else if (data[_sL] != null && data[_sL][_m] != null) {
    contents[_sL] = de_StringList(__getArrayIfSingleItem(data[_sL][_m]), context);
  }
  if (String(data.stringSet).trim() === "") {
    contents[_sS] = [];
  } else if (data[_sS] != null && data[_sS][_m] != null) {
    contents[_sS] = de_StringSet(__getArrayIfSingleItem(data[_sS][_m]), context);
  }
  if (String(data.myStructureList).trim() === "") {
    contents[_sLt] = [];
  } else if (data[_mSL] != null && data[_mSL][_i] != null) {
    contents[_sLt] = de_StructureList(__getArrayIfSingleItem(data[_mSL][_i]), context);
  }
  if (String(data.timestampList).trim() === "") {
    contents[_tL] = [];
  } else if (data[_tL] != null && data[_tL][_m] != null) {
    contents[_tL] = de_TimestampList(__getArrayIfSingleItem(data[_tL][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlMapsCommand
 */
export const de_XmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.myMap).trim() === "") {
    contents[_mM] = {};
  } else if (data[_mM] != null && data[_mM][_en] != null) {
    contents[_mM] = de_XmlMapsInputOutputMap(__getArrayIfSingleItem(data[_mM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlMapsXmlNameCommand
 */
export const de_XmlMapsXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.myMap).trim() === "") {
    contents[_mM] = {};
  } else if (data[_mM] != null && data[_mM][_en] != null) {
    contents[_mM] = de_XmlMapsXmlNameInputOutputMap(__getArrayIfSingleItem(data[_mM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlMapWithXmlNamespaceCommand
 */
export const de_XmlMapWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.KVP).trim() === "") {
    contents[_mM] = {};
  } else if (data[_KVP] != null && data[_KVP][_en] != null) {
    contents[_mM] = de_XmlMapWithXmlNamespaceInputOutputMap(__getArrayIfSingleItem(data[_KVP][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlNamespacesCommand
 */
export const de_XmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_n] != null) {
    contents[_n] = de_XmlNamespaceNested(data[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlTimestampsCommand
 */
export const de_XmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_dT] != null) {
    contents[_dT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_dT]));
  }
  if (data[_dTOT] != null) {
    contents[_dTOT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_dTOT]));
  }
  if (data[_eSp] != null) {
    contents[_eSp] = __expectNonNull(__parseEpochTimestamp(data[_eSp]));
  }
  if (data[_eSOT] != null) {
    contents[_eSOT] = __expectNonNull(__parseEpochTimestamp(data[_eSOT]));
  }
  if (data[_hDt] != null) {
    contents[_hDt] = __expectNonNull(__parseRfc7231DateTime(data[_hDt]));
  }
  if (data[_hDOT] != null) {
    contents[_hDOT] = __expectNonNull(__parseRfc7231DateTime(data[_hDOT]));
  }
  if (data[_no] != null) {
    contents[_no] = __expectNonNull(__parseRfc3339DateTimeWithOffset(data[_no]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlUnionsCommand
 */
export const de_XmlUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlUnionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (String(data.unionValue).trim() === "") {
    // Pass empty tags.
  } else if (data[_uV] != null) {
    contents[_uV] = de_XmlUnionShape(__expectUnion(data[_uV]), context);
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
    case "ComplexError":
    case "aws.protocoltests.restxml#ComplexError":
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.restxml#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const contents: any = map({
    [_H]: [, parsedOutput.headers[_xh]],
  });
  const data: any = parsedOutput.body.Error;
  if (data[_Ne] != null) {
    contents[_Ne] = de_ComplexNestedErrorData(data[_Ne], context);
  }
  if (data[_TLo] != null) {
    contents[_TLo] = __expectString(data[_TLo]);
  }
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidGreetingRes
 */
const de_InvalidGreetingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidGreeting> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data[_M] != null) {
    contents[_M] = __expectString(data[_M]);
  }
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * serializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap
 */
const se_FlattenedXmlMapWithXmlNameInputOutputMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("K");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_S, input[key as keyof typeof input]!);
      entryNode.c(n.n(_V));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlListWithMemberNamespace
 */
const se_ListWithMemberNamespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_S, entry);
      n.a("xmlns", "https://xml-member.example.com");
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlListWithNamespace
 */
const se_ListWithNamespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_S, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlNestedMap
 */
const se_NestedMap = (input: Record<string, Record<string, FooEnum>>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("key");
      entryNode.c(keyNode);
      let n;
      n = se_FooEnumMap(input[key as keyof typeof input]!, context);
      entryNode.c(
        n.reduce((acc: __XmlNode, workingNode: any) => {
          return acc.c(workingNode);
        }, new __XmlNode(_v))
      );
      return entryNode;
    });
};

/**
 * serializeAws_restXmlNestedPayload
 */
const se_NestedPayload = (input: NestedPayload, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NP);
  if (input[_g] != null) {
    bn.c(__XmlNode.of(_S, input[_g]).n(_g));
  }
  if (input[_na] != null) {
    bn.c(__XmlNode.of(_S, input[_na]).n(_na));
  }
  return bn;
};

/**
 * serializeAws_restXmlNestedXmlMapWithXmlNameInnerMap
 */
const se_NestedXmlMapWithXmlNameInnerMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("InnerKey");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_S, input[key as keyof typeof input]!);
      entryNode.c(n.n(_IV));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlNestedXmlMapWithXmlNameMap
 */
const se_NestedXmlMapWithXmlNameMap = (input: Record<string, Record<string, string>>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("OuterKey");
      entryNode.c(keyNode);
      let n;
      n = se_NestedXmlMapWithXmlNameInnerMap(input[key as keyof typeof input]!, context);
      entryNode.c(
        n.reduce((acc: __XmlNode, workingNode: any) => {
          return acc.c(workingNode);
        }, new __XmlNode(_v))
      );
      return entryNode;
    });
};

/**
 * serializeAws_restXmlPayloadWithXmlName
 */
const se_PayloadWithXmlName = (input: PayloadWithXmlName, context: __SerdeContext): any => {
  const bn = new __XmlNode(_He);
  if (input[_na] != null) {
    bn.c(__XmlNode.of(_S, input[_na]).n(_na));
  }
  return bn;
};

/**
 * serializeAws_restXmlPayloadWithXmlNamespace
 */
const se_PayloadWithXmlNamespace = (input: PayloadWithXmlNamespace, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PWXN);
  if (input[_na] != null) {
    bn.c(__XmlNode.of(_S, input[_na]).n(_na));
  }
  return bn;
};

/**
 * serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix
 */
const se_PayloadWithXmlNamespaceAndPrefix = (input: PayloadWithXmlNamespaceAndPrefix, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PWXNAP);
  if (input[_na] != null) {
    bn.c(__XmlNode.of(_S, input[_na]).n(_na));
  }
  return bn;
};

/**
 * serializeAws_restXmlRecursiveShapesInputOutputNested1
 */
const se_RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RSION);
  if (input[_f] != null) {
    bn.c(__XmlNode.of(_S, input[_f]).n(_f));
  }
  if (input[_n] != null) {
    bn.c(se_RecursiveShapesInputOutputNested2(input[_n], context).n(_n));
  }
  return bn;
};

/**
 * serializeAws_restXmlRecursiveShapesInputOutputNested2
 */
const se_RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_RSIONe);
  if (input[_ba] != null) {
    bn.c(__XmlNode.of(_S, input[_ba]).n(_ba));
  }
  if (input[_rM] != null) {
    bn.c(se_RecursiveShapesInputOutputNested1(input[_rM], context).n(_rM));
  }
  return bn;
};

/**
 * serializeAws_restXmlRenamedListMembers
 */
const se_RenamedListMembers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_S, entry);
      return n.n(_i);
    });
};

/**
 * serializeAws_restXmlStructureList
 */
const se_StructureList = (input: StructureListMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_StructureListMember(entry, context);
      return n.n(_i);
    });
};

/**
 * serializeAws_restXmlStructureListMember
 */
const se_StructureListMember = (input: StructureListMember, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SLM);
  if (input[_a] != null) {
    bn.c(__XmlNode.of(_S, input[_a]).n(_v));
  }
  if (input[_b_] != null) {
    bn.c(__XmlNode.of(_S, input[_b_]).n(_o));
  }
  return bn;
};

/**
 * serializeAws_restXmlUnionPayload
 */
const se_UnionPayload = (input: UnionPayload, context: __SerdeContext): any => {
  const bn = new __XmlNode(_UP);
  UnionPayload.visit(input, {
    greeting: (value) => {
      if (input[_g] != null) {
        bn.c(__XmlNode.of(_S, value).n(_g));
      }
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bn.c(new __XmlNode(name).c(value));
    },
  });
  return bn;
};

/**
 * serializeAws_restXmlXmlAttributesPayloadRequest
 */
const se_XmlAttributesPayloadRequest = (input: XmlAttributesPayloadRequest, context: __SerdeContext): any => {
  const bn = new __XmlNode(_XAPR);
  if (input[_f] != null) {
    bn.c(__XmlNode.of(_S, input[_f]).n(_f));
  }
  bn.a("test", input[_at]);
  return bn;
};

/**
 * serializeAws_restXmlXmlMapsInputOutputMap
 */
const se_XmlMapsInputOutputMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("key");
      entryNode.c(keyNode);
      let n;
      n = se_GreetingStruct(input[key as keyof typeof input]!, context);
      entryNode.c(n.n(_v));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlXmlMapsXmlNameInputOutputMap
 */
const se_XmlMapsXmlNameInputOutputMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("Attribute");
      entryNode.c(keyNode);
      let n;
      n = se_GreetingStruct(input[key as keyof typeof input]!, context);
      entryNode.c(n.n(_Se));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlXmlMapWithXmlNamespaceInputOutputMap
 */
const se_XmlMapWithXmlNamespaceInputOutputMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("K");
      keyNode.a("xmlns", "https://the-key.example.com");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_S, input[key as keyof typeof input]!);
      n.a("xmlns", "https://the-value.example.com");
      entryNode.c(n.n(_V));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlXmlNamespacedList
 */
const se_XmlNamespacedList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_S, entry);
      n.a("xmlns", "http://bux.com");
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlXmlNamespaceNested
 */
const se_XmlNamespaceNested = (input: XmlNamespaceNested, context: __SerdeContext): any => {
  const bn = new __XmlNode(_XNN);
  if (input[_f] != null) {
    const n = __XmlNode.of(_S, input[_f]).n(_f);
    n.a("xmlns:baz", "http://baz.com");
    bn.c(n);
  }
  if (input[_va] != null) {
    const ns = se_XmlNamespacedList(input[_va], context);
    const containerNode = new __XmlNode(_va);
    containerNode.a("xmlns", "http://qux.com");
    ns.map((n: any) => {
      containerNode.c(n);
    });
    bn.c(containerNode);
  }
  return bn;
};

/**
 * serializeAws_restXmlXmlNestedUnionStruct
 */
const se_XmlNestedUnionStruct = (input: XmlNestedUnionStruct, context: __SerdeContext): any => {
  const bn = new __XmlNode(_XNUS);
  if (input[_sVt] != null) {
    bn.c(__XmlNode.of(_S, input[_sVt]).n(_sVt));
  }
  if (input[_bVo] != null) {
    bn.c(__XmlNode.of(_Bo, String(input[_bVo])).n(_bVo));
  }
  if (input[_bV] != null) {
    bn.c(__XmlNode.of(_B, String(input[_bV])).n(_bV));
  }
  if (input[_sV] != null) {
    bn.c(__XmlNode.of(_Sh, String(input[_sV])).n(_sV));
  }
  if (input[_iV] != null) {
    bn.c(__XmlNode.of(_I, String(input[_iV])).n(_iV));
  }
  if (input[_lV] != null) {
    bn.c(__XmlNode.of(_L, String(input[_lV])).n(_lV));
  }
  if (input[_fV] != null) {
    bn.c(__XmlNode.of(_F, String(input[_fV])).n(_fV));
  }
  if (input[_dV] != null) {
    bn.c(__XmlNode.of(_D, String(input[_dV])).n(_dV));
  }
  return bn;
};

/**
 * serializeAws_restXmlXmlUnionShape
 */
const se_XmlUnionShape = (input: XmlUnionShape, context: __SerdeContext): any => {
  const bn = new __XmlNode(_XUS);
  XmlUnionShape.visit(input, {
    stringValue: (value) => {
      if (input[_sVt] != null) {
        bn.c(__XmlNode.of(_S, value).n(_sVt));
      }
    },
    booleanValue: (value) => {
      if (input[_bVo] != null) {
        bn.c(__XmlNode.of(_Bo, String(value)).n(_bVo));
      }
    },
    byteValue: (value) => {
      if (input[_bV] != null) {
        bn.c(__XmlNode.of(_B, String(value)).n(_bV));
      }
    },
    shortValue: (value) => {
      if (input[_sV] != null) {
        bn.c(__XmlNode.of(_Sh, String(value)).n(_sV));
      }
    },
    integerValue: (value) => {
      if (input[_iV] != null) {
        bn.c(__XmlNode.of(_I, String(value)).n(_iV));
      }
    },
    longValue: (value) => {
      if (input[_lV] != null) {
        bn.c(__XmlNode.of(_L, String(value)).n(_lV));
      }
    },
    floatValue: (value) => {
      if (input[_fV] != null) {
        bn.c(__XmlNode.of(_F, String(value)).n(_fV));
      }
    },
    doubleValue: (value) => {
      if (input[_dV] != null) {
        bn.c(__XmlNode.of(_D, String(value)).n(_dV));
      }
    },
    unionValue: (value) => {
      if (input[_uV] != null) {
        bn.c(se_XmlUnionShape(value, context).n(_uV));
      }
    },
    structValue: (value) => {
      if (input[_sVtr] != null) {
        bn.c(se_XmlNestedUnionStruct(value, context).n(_sVtr));
      }
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bn.c(new __XmlNode(name).c(value));
    },
  });
  return bn;
};

/**
 * serializeAws_restXmlBooleanList
 */
const se_BooleanList = (input: boolean[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_Bo, String(entry));
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlFooEnumList
 */
const se_FooEnumList = (input: FooEnum[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_FE, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlFooEnumMap
 */
const se_FooEnumMap = (input: Record<string, FooEnum>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("key");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_FE, input[key as keyof typeof input]!);
      entryNode.c(n.n(_v));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlFooEnumSet
 */
const se_FooEnumSet = (input: FooEnum[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_FE, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlGreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const bn = new __XmlNode(_GS);
  if (input[_hi] != null) {
    bn.c(__XmlNode.of(_S, input[_hi]).n(_hi));
  }
  return bn;
};

/**
 * serializeAws_restXmlIntegerEnumList
 */
const se_IntegerEnumList = (input: IntegerEnum[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_IE, String(entry));
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlIntegerEnumMap
 */
const se_IntegerEnumMap = (input: Record<string, IntegerEnum>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of(_S, key).n("key");
      entryNode.c(keyNode);
      let n;
      n = __XmlNode.of(_IE, String(input[key as keyof typeof input]!));
      entryNode.c(n.n(_v));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlIntegerEnumSet
 */
const se_IntegerEnumSet = (input: IntegerEnum[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_IE, String(entry));
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlIntegerList
 */
const se_IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_I, String(entry));
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlNestedStringList
 */
const se_NestedStringList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_StringList(entry, context);
      return n.reduce((acc: __XmlNode, workingNode: any) => {
        return acc.c(workingNode);
      }, new __XmlNode(_m));
    });
};

/**
 * serializeAws_restXmlStringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_S, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlStringSet
 */
const se_StringSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_S, entry);
      return n.n(_m);
    });
};

/**
 * serializeAws_restXmlTimestampList
 */
const se_TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_T, __serializeDateTime(entry));
      return n.n(_m);
    });
};

/**
 * deserializeAws_restXmlComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {};
  if (output[_Fo] != null) {
    contents[_Fo] = __expectString(output[_Fo]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap
 */
const de_FlattenedXmlMapWithXmlNameInputOutputMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["V"] === null) {
      return acc;
    }
    acc[pair["K"]] = __expectString(pair["V"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceOutputMap
 */
const de_FlattenedXmlMapWithXmlNamespaceOutputMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["V"] === null) {
      return acc;
    }
    acc[pair["K"]] = __expectString(pair["V"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlListWithMemberNamespace
 */
const de_ListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlListWithNamespace
 */
const de_ListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlNestedMap
 */
const de_NestedMap = (output: any, context: __SerdeContext): Record<string, Record<string, FooEnum>> => {
  return output.reduce((acc: any, pair: any) => {
    if (__getArrayIfSingleItem(pair["value"]["entry"]) === null) {
      return acc;
    }
    acc[pair["key"]] = de_FooEnumMap(__getArrayIfSingleItem(pair["value"]["entry"]), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlNestedPayload
 */
const de_NestedPayload = (output: any, context: __SerdeContext): NestedPayload => {
  const contents: any = {};
  if (output[_g] != null) {
    contents[_g] = __expectString(output[_g]);
  }
  if (output[_na] != null) {
    contents[_na] = __expectString(output[_na]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlNestedXmlMapWithXmlNameInnerMap
 */
const de_NestedXmlMapWithXmlNameInnerMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["InnerValue"] === null) {
      return acc;
    }
    acc[pair["InnerKey"]] = __expectString(pair["InnerValue"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlNestedXmlMapWithXmlNameMap
 */
const de_NestedXmlMapWithXmlNameMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return output.reduce((acc: any, pair: any) => {
    if (__getArrayIfSingleItem(pair["value"]["entry"]) === null) {
      return acc;
    }
    acc[pair["OuterKey"]] = de_NestedXmlMapWithXmlNameInnerMap(__getArrayIfSingleItem(pair["value"]["entry"]), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlPayloadWithXmlName
 */
const de_PayloadWithXmlName = (output: any, context: __SerdeContext): PayloadWithXmlName => {
  const contents: any = {};
  if (output[_na] != null) {
    contents[_na] = __expectString(output[_na]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPayloadWithXmlNamespace
 */
const de_PayloadWithXmlNamespace = (output: any, context: __SerdeContext): PayloadWithXmlNamespace => {
  const contents: any = {};
  if (output[_na] != null) {
    contents[_na] = __expectString(output[_na]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix
 */
const de_PayloadWithXmlNamespaceAndPrefix = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespaceAndPrefix => {
  const contents: any = {};
  if (output[_na] != null) {
    contents[_na] = __expectString(output[_na]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRecursiveShapesInputOutputNested1
 */
const de_RecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  const contents: any = {};
  if (output[_f] != null) {
    contents[_f] = __expectString(output[_f]);
  }
  if (output[_n] != null) {
    contents[_n] = de_RecursiveShapesInputOutputNested2(output[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRecursiveShapesInputOutputNested2
 */
const de_RecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  const contents: any = {};
  if (output[_ba] != null) {
    contents[_ba] = __expectString(output[_ba]);
  }
  if (output[_rM] != null) {
    contents[_rM] = de_RecursiveShapesInputOutputNested1(output[_rM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRenamedListMembers
 */
const de_RenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStructureList
 */
const de_StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StructureListMember(entry, context);
    });
};

/**
 * deserializeAws_restXmlStructureListMember
 */
const de_StructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
  const contents: any = {};
  if (output[_v] != null) {
    contents[_a] = __expectString(output[_v]);
  }
  if (output[_o] != null) {
    contents[_b_] = __expectString(output[_o]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUnionPayload
 */
const de_UnionPayload = (output: any, context: __SerdeContext): UnionPayload => {
  if (output[_g] != null) {
    return {
      greeting: __expectString(output[_g]) as any,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlXmlAttributesPayloadResponse
 */
const de_XmlAttributesPayloadResponse = (output: any, context: __SerdeContext): XmlAttributesPayloadResponse => {
  const contents: any = {};
  if (output[_f] != null) {
    contents[_f] = __expectString(output[_f]);
  }
  if (output[_te] != null) {
    contents[_at] = __expectString(output[_te]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlMapsInputOutputMap
 */
const de_XmlMapsInputOutputMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_GreetingStruct(pair["value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlXmlMapsXmlNameInputOutputMap
 */
const de_XmlMapsXmlNameInputOutputMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Setting"] === null) {
      return acc;
    }
    acc[pair["Attribute"]] = de_GreetingStruct(pair["Setting"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlXmlMapWithXmlNamespaceInputOutputMap
 */
const de_XmlMapWithXmlNamespaceInputOutputMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["V"] === null) {
      return acc;
    }
    acc[pair["K"]] = __expectString(pair["V"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlXmlNamespacedList
 */
const de_XmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlXmlNamespaceNested
 */
const de_XmlNamespaceNested = (output: any, context: __SerdeContext): XmlNamespaceNested => {
  const contents: any = {};
  if (output[_f] != null) {
    contents[_f] = __expectString(output[_f]);
  }
  if (String(output.values).trim() === "") {
    contents[_va] = [];
  } else if (output[_va] != null && output[_va][_m] != null) {
    contents[_va] = de_XmlNamespacedList(__getArrayIfSingleItem(output[_va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlNestedUnionStruct
 */
const de_XmlNestedUnionStruct = (output: any, context: __SerdeContext): XmlNestedUnionStruct => {
  const contents: any = {};
  if (output[_sVt] != null) {
    contents[_sVt] = __expectString(output[_sVt]);
  }
  if (output[_bVo] != null) {
    contents[_bVo] = __parseBoolean(output[_bVo]);
  }
  if (output[_bV] != null) {
    contents[_bV] = __strictParseByte(output[_bV]) as number;
  }
  if (output[_sV] != null) {
    contents[_sV] = __strictParseShort(output[_sV]) as number;
  }
  if (output[_iV] != null) {
    contents[_iV] = __strictParseInt32(output[_iV]) as number;
  }
  if (output[_lV] != null) {
    contents[_lV] = __strictParseLong(output[_lV]) as number;
  }
  if (output[_fV] != null) {
    contents[_fV] = __strictParseFloat(output[_fV]) as number;
  }
  if (output[_dV] != null) {
    contents[_dV] = __strictParseFloat(output[_dV]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlUnionShape
 */
const de_XmlUnionShape = (output: any, context: __SerdeContext): XmlUnionShape => {
  if (output[_sVt] != null) {
    return {
      stringValue: __expectString(output[_sVt]) as any,
    };
  }
  if (output[_bVo] != null) {
    return {
      booleanValue: __parseBoolean(output[_bVo]),
    };
  }
  if (output[_bV] != null) {
    return {
      byteValue: __strictParseByte(output[_bV]) as number,
    };
  }
  if (output[_sV] != null) {
    return {
      shortValue: __strictParseShort(output[_sV]) as number,
    };
  }
  if (output[_iV] != null) {
    return {
      integerValue: __strictParseInt32(output[_iV]) as number,
    };
  }
  if (output[_lV] != null) {
    return {
      longValue: __strictParseLong(output[_lV]) as number,
    };
  }
  if (output[_fV] != null) {
    return {
      floatValue: __strictParseFloat(output[_fV]) as number,
    };
  }
  if (output[_dV] != null) {
    return {
      doubleValue: __strictParseFloat(output[_dV]) as number,
    };
  }
  if (String(output.unionValue).trim() === "") {
    // Pass empty tags.
  } else if (output[_uV] != null) {
    return {
      unionValue: de_XmlUnionShape(__expectUnion(output[_uV]), context),
    };
  }
  if (output[_sVtr] != null) {
    return {
      structValue: de_XmlNestedUnionStruct(output[_sVtr], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlBooleanList
 */
const de_BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

/**
 * deserializeAws_restXmlFooEnumList
 */
const de_FooEnumList = (output: any, context: __SerdeContext): FooEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlFooEnumMap
 */
const de_FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlFooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): FooEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlGreetingStruct
 */
const de_GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  const contents: any = {};
  if (output[_hi] != null) {
    contents[_hi] = __expectString(output[_hi]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntegerEnumList
 */
const de_IntegerEnumList = (output: any, context: __SerdeContext): IntegerEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_restXmlIntegerEnumMap
 */
const de_IntegerEnumMap = (output: any, context: __SerdeContext): Record<string, IntegerEnum> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __strictParseInt32(pair["value"]) as number;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlIntegerEnumSet
 */
const de_IntegerEnumSet = (output: any, context: __SerdeContext): IntegerEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_restXmlIntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_restXmlNestedStringList
 */
const de_NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

/**
 * deserializeAws_restXmlStringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlStringSet
 */
const de_StringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlTimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
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

const _A = "Ahoy";
const _B = "Byte";
const _BL = "BooleanList";
const _Bl = "Blob";
const _Bo = "Boolean";
const _CTPI = "ContentTypeParametersInput";
const _D = "Double";
const _DD = "DoubleDribble";
const _DL = "DoubleList";
const _DT = "DateTime";
const _E = "Enum";
const _EL = "EnumList";
const _ES = "EpochSeconds";
const _EWHLOR = "EndpointWithHostLabelOperationRequest";
const _Em = "Empty";
const _F = "Float";
const _FE = "FooEnum";
const _FXMR = "FlattenedXmlMapRequest";
const _FXMWXNR = "FlattenedXmlMapWithXmlNameRequest";
const _Fo = "Foo";
const _GS = "GreetingStruct";
const _H = "Header";
const _HD = "HttpDate";
const _He = "Hello";
const _I = "Integer";
const _IE = "IntegerEnum";
const _IEL = "IntegerEnumList";
const _IL = "IntegerList";
const _IS = "IntegerSet";
const _IV = "InnerValue";
const _KVP = "KVP";
const _L = "Long";
const _M = "Message";
const _N = "Null";
const _NP = "NestedPayload";
const _NXMR = "NestedXmlMapsRequest";
const _NXMWXNR = "NestedXmlMapWithXmlNameRequest";
const _Ne = "Nested";
const _PWCEI = "PutWithContentEncodingInput";
const _PWXN = "PayloadWithXmlNamespace";
const _PWXNAP = "PayloadWithXmlNamespaceAndPrefix";
const _RSION = "RecursiveShapesInputOutputNested1";
const _RSIONe = "RecursiveShapesInputOutputNested2";
const _RSR = "RecursiveShapesRequest";
const _S = "String";
const _SL = "StringList";
const _SLM = "StructureListMember";
const _SS = "StringSet";
const _SSPR = "SimpleScalarPropertiesRequest";
const _Se = "Setting";
const _Sh = "Short";
const _T = "Timestamp";
const _TL = "TimestampList";
const _TLo = "TopLevel";
const _UP = "UnionPayload";
const _V = "V";
const _XAPR = "XmlAttributesPayloadRequest";
const _XAR = "XmlAttributesRequest";
const _XBR = "XmlBlobsRequest";
const _XEBR = "XmlEmptyBlobsRequest";
const _XELR = "XmlEmptyListsRequest";
const _XEMR = "XmlEmptyMapsRequest";
const _XER = "XmlEnumsRequest";
const _XESR = "XmlEmptyStringsRequest";
const _XIER = "XmlIntEnumsRequest";
const _XLR = "XmlListsRequest";
const _XMR = "XmlMapsRequest";
const _XMWXNR = "XmlMapWithXmlNamespaceRequest";
const _XMXNR = "XmlMapsXmlNameRequest";
const _XNN = "XmlNamespaceNested";
const _XNR = "XmlNamespacesRequest";
const _XNUS = "XmlNestedUnionStruct";
const _XTR = "XmlTimestampsRequest";
const _XUR = "XmlUnionsRequest";
const _XUS = "XmlUnionShape";
const _a = "a";
const _aI = "accountId";
const _at = "attr";
const _b = "baz";
const _bL = "booleanList";
const _bV = "byteValue";
const _bVo = "booleanValue";
const _b_ = "b";
const _ba = "bar";
const _c = "c";
const _cN = "customName";
const _ce = "content-encoding";
const _co = "corge";
const _d = "data";
const _dF = "defaultFormat";
const _dT = "dateTime";
const _dTOT = "dateTimeOnTarget";
const _dV = "doubleValue";
const _da = "datetime";
const _e = "encoding";
const _eL = "enumList";
const _eS = "emptyString";
const _eSOT = "epochSecondsOnTarget";
const _eSp = "epochSeconds";
const _en = "entry";
const _f = "foo";
const _fBV = "falseBooleanValue";
const _fE = "fooEnum1";
const _fEL = "fooEnumList";
const _fEM = "fooEnumMap";
const _fES = "fooEnumSet";
const _fEo = "fooEnum2";
const _fEoo = "fooEnum3";
const _fL = "flattenedList";
const _fLWMN = "flattenedListWithMemberNamespace";
const _fLWN = "flattenedListWithNamespace";
const _fLl = "flattenedList2";
const _fNM = "flatNestedMap";
const _fSL = "flattenedStructureList";
const _fV = "floatValue";
const _g = "greeting";
const _h = "hello";
const _hB = "headerByte";
const _hBL = "headerBooleanList";
const _hD = "headerDouble";
const _hDOT = "httpDateOnTarget";
const _hDt = "httpDate";
const _hE = "headerEnum";
const _hEL = "headerEnumList";
const _hF = "headerFloat";
const _hFB = "headerFalseBool";
const _hI = "headerInteger";
const _hIL = "headerIntegerList";
const _hL = "headerLong";
const _hS = "headerString";
const _hSL = "headerStringList";
const _hSS = "headerStringSet";
const _hSe = "headerShort";
const _hTB = "headerTrueBool";
const _hTL = "headerTimestampList";
const _hi = "hi";
const _i = "item";
const _iE = "intEnum1";
const _iEL = "intEnumList";
const _iEM = "intEnumMap";
const _iES = "intEnumSet";
const _iEn = "intEnum2";
const _iEnt = "intEnum3";
const _iL = "integerList";
const _iV = "integerValue";
const _l = "label";
const _lV = "longValue";
const _m = "member";
const _mDT = "memberDateTime";
const _mES = "memberEpochSeconds";
const _mHD = "memberHttpDate";
const _mM = "myMap";
const _mS = "maybeSet";
const _mSL = "myStructureList";
const _n = "nested";
const _nM = "nestedMap";
const _nSL = "nestedStringList";
const _nV = "nullValue";
const _nXMWXNM = "nestedXmlMapWithXmlNameMap";
const _na = "name";
const _no = "normal";
const _o = "other";
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
const _r = "renamed";
const _rLM = "renamedListMembers";
const _rM = "recursiveMember";
const _sH = "specificHeader";
const _sL = "stringList";
const _sLt = "structureList";
const _sS = "stringSet";
const _sV = "shortValue";
const _sVt = "stringValue";
const _sVtr = "structValue";
const _t = "token";
const _tBV = "trueBooleanValue";
const _tDT = "targetDateTime";
const _tES = "targetEpochSeconds";
const _tHD = "targetHttpDate";
const _tL = "timestampList";
const _te = "test";
const _uV = "unionValue";
const _v = "value";
const _va = "values";
const _ve = '<?xml version="1.0" encoding="UTF-8"?>';
const _xa = "x-a";
const _xaai = "x-amz-account-id";
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
