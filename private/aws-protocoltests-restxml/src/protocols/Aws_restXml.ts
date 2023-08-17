// smithy-typescript generated code
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
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
  getValueFromTextNode as __getValueFromTextNode,
  map,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  splitEvery as __splitEvery,
  strictParseByte as __strictParseByte,
  strictParseDouble as __strictParseDouble,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  strictParseShort as __strictParseShort,
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
import {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "../commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "../commands/InputAndOutputWithHeadersCommand";
import { NestedXmlMapsCommandInput, NestedXmlMapsCommandOutput } from "../commands/NestedXmlMapsCommand";
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
import { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "../commands/XmlNamespacesCommand";
import { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "../commands/XmlTimestampsCommand";
import { XmlUnionsCommandInput, XmlUnionsCommandOutput } from "../commands/XmlUnionsCommand";
import {
  ComplexError,
  ComplexNestedErrorData,
  FooEnum,
  GreetingStruct,
  IntegerEnum,
  InvalidGreeting,
  NestedPayload,
  PayloadWithXmlName,
  PayloadWithXmlNamespace,
  PayloadWithXmlNamespaceAndPrefix,
  RecursiveShapesInputOutputNested1,
  RecursiveShapesInputOutputNested2,
  StructureListMember,
  XmlAttributesInputOutput,
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AllQueryStringTypesInput";
  const query: any = map({
    ...convertMap(input.queryParamsMapOfStrings),
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

/**
 * serializeAws_restXmlBodyWithXmlNameCommand
 */
export const se_BodyWithXmlNameCommand = async (
  input: BodyWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BodyWithXmlName";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("Ahoy");
  if (input.nested !== undefined) {
    const node = se_PayloadWithXmlName(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlConstantAndVariableQueryStringCommand
 */
export const se_ConstantAndVariableQueryStringCommand = async (
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

/**
 * serializeAws_restXmlConstantQueryStringCommand
 */
export const se_ConstantQueryStringCommand = async (
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

/**
 * serializeAws_restXmlDatetimeOffsetsCommand
 */
export const se_DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlEmptyInputAndEmptyOutputCommand
 */
export const se_EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlEndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlEndpointWithHostLabelHeaderOperationCommand
 */
export const se_EndpointWithHostLabelHeaderOperationCommand = async (
  input: EndpointWithHostLabelHeaderOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.accountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EndpointWithHostLabelHeaderOperation";
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

/**
 * serializeAws_restXmlEndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EndpointWithHostLabelOperation";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("HostLabelInput");
  if (input.label !== undefined) {
    const node = __XmlNode.of("String", input.label).withName("label");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlFlattenedXmlMapCommand
 */
export const se_FlattenedXmlMapCommand = async (
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FlattenedXmlMap";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("FlattenedXmlMapInputOutput");
  if (input.myMap !== undefined) {
    const nodes = se_FooEnumMap(input.myMap, context);
    nodes.map((node: any) => {
      node = node.withName("myMap");
      bodyNode.addChildNode(node);
    });
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand
 */
export const se_FlattenedXmlMapWithXmlNameCommand = async (
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FlattenedXmlMapWithXmlName";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("FlattenedXmlMapWithXmlNameInputOutput");
  if (input.myMap !== undefined) {
    const nodes = se_FlattenedXmlMapWithXmlNameInputOutputMap(input.myMap, context);
    nodes.map((node: any) => {
      node = node.withName("KVP");
      bodyNode.addChildNode(node);
    });
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand
 */
export const se_FlattenedXmlMapWithXmlNamespaceCommand = async (
  input: FlattenedXmlMapWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FlattenedXmlMapWithXmlNamespace";
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

/**
 * serializeAws_restXmlFractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/FractionalSeconds";
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

/**
 * serializeAws_restXmlGreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlHttpPayloadTraitsCommand
 */
export const se_HttpPayloadTraitsCommand = async (
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
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
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

/**
 * serializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand
 */
export const se_HttpPayloadTraitsWithMediaTypeCommand = async (
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
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
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

/**
 * serializeAws_restXmlHttpPayloadWithMemberXmlNameCommand
 */
export const se_HttpPayloadWithMemberXmlNameCommand = async (
  input: HttpPayloadWithMemberXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadWithMemberXmlName";
  let body: any;
  if (input.nested !== undefined) {
    body = se_PayloadWithXmlName(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlName(input.nested, context);
    contents = contents.withName("Hola");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

/**
 * serializeAws_restXmlHttpPayloadWithStructureCommand
 */
export const se_HttpPayloadWithStructureCommand = async (
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadWithStructure";
  let body: any;
  if (input.nested !== undefined) {
    body = se_NestedPayload(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_NestedPayload(input.nested, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

/**
 * serializeAws_restXmlHttpPayloadWithXmlNameCommand
 */
export const se_HttpPayloadWithXmlNameCommand = async (
  input: HttpPayloadWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadWithXmlName";
  let body: any;
  if (input.nested !== undefined) {
    body = se_PayloadWithXmlName(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlName(input.nested, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

/**
 * serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand
 */
export const se_HttpPayloadWithXmlNamespaceCommand = async (
  input: HttpPayloadWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadWithXmlNamespace";
  let body: any;
  if (input.nested !== undefined) {
    body = se_PayloadWithXmlNamespace(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlNamespace(input.nested, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://foo.com");
    body += contents.toString();
  }
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

/**
 * serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand
 */
export const se_HttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadWithXmlNamespaceAndPrefix";
  let body: any;
  if (input.nested !== undefined) {
    body = se_PayloadWithXmlNamespaceAndPrefix(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = se_PayloadWithXmlNamespaceAndPrefix(input.nested, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns:baz", "http://foo.com");
    body += contents.toString();
  }
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

/**
 * serializeAws_restXmlHttpPrefixHeadersCommand
 */
export const se_HttpPrefixHeadersCommand = async (
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

/**
 * serializeAws_restXmlHttpRequestWithFloatLabelsCommand
 */
export const se_HttpRequestWithFloatLabelsCommand = async (
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

/**
 * serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand
 */
export const se_HttpRequestWithGreedyLabelInPathCommand = async (
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

/**
 * serializeAws_restXmlHttpRequestWithLabelsCommand
 */
export const se_HttpRequestWithLabelsCommand = async (
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

/**
 * serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand
 */
export const se_HttpRequestWithLabelsAndTimestampFormatCommand = async (
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

/**
 * serializeAws_restXmlHttpResponseCodeCommand
 */
export const se_HttpResponseCodeCommand = async (
  input: HttpResponseCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlIgnoreQueryParamsInResponseCommand
 */
export const se_IgnoreQueryParamsInResponseCommand = async (
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlInputAndOutputWithHeadersCommand
 */
export const se_InputAndOutputWithHeadersCommand = async (
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

/**
 * serializeAws_restXmlNestedXmlMapsCommand
 */
export const se_NestedXmlMapsCommand = async (
  input: NestedXmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NestedXmlMaps";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("NestedXmlMapsInputOutput");
  if (input.flatNestedMap !== undefined) {
    const nodes = se_NestedMap(input.flatNestedMap, context);
    nodes.map((node: any) => {
      node = node.withName("flatNestedMap");
      bodyNode.addChildNode(node);
    });
  }
  if (input.nestedMap !== undefined) {
    const nodes = se_NestedMap(input.nestedMap, context);
    const containerNode = new __XmlNode("nestedMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlNoInputAndNoOutputCommand
 */
export const se_NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlNoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
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

/**
 * serializeAws_restXmlNullAndEmptyHeadersClientCommand
 */
export const se_NullAndEmptyHeadersClientCommand = async (
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

/**
 * serializeAws_restXmlNullAndEmptyHeadersServerCommand
 */
export const se_NullAndEmptyHeadersServerCommand = async (
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

/**
 * serializeAws_restXmlOmitsNullSerializesEmptyStringCommand
 */
export const se_OmitsNullSerializesEmptyStringCommand = async (
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

/**
 * serializeAws_restXmlPutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-encoding": input.encoding!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/requestcompression/putcontentwithencoding";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutWithContentEncodingInput");
  if (input.data !== undefined) {
    const node = __XmlNode.of("String", input.data).withName("data");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand
 */
export const se_QueryIdempotencyTokenAutoFillCommand = async (
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

/**
 * serializeAws_restXmlQueryParamsAsStringListMapCommand
 */
export const se_QueryParamsAsStringListMapCommand = async (
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

/**
 * serializeAws_restXmlQueryPrecedenceCommand
 */
export const se_QueryPrecedenceCommand = async (
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

/**
 * serializeAws_restXmlRecursiveShapesCommand
 */
export const se_RecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RecursiveShapes";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("RecursiveShapesInputOutput");
  if (input.nested !== undefined) {
    const node = se_RecursiveShapesInputOutputNested1(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlSimpleScalarPropertiesCommand
 */
export const se_SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-foo": input.foo!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SimpleScalarProperties";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("SimpleScalarPropertiesInputOutput");
  if (input.byteValue !== undefined) {
    const node = __XmlNode.of("Byte", String(input.byteValue)).withName("byteValue");
    bodyNode.addChildNode(node);
  }
  if (input.doubleValue !== undefined) {
    const node = __XmlNode.of("Double", String(input.doubleValue)).withName("DoubleDribble");
    bodyNode.addChildNode(node);
  }
  if (input.falseBooleanValue !== undefined) {
    const node = __XmlNode.of("Boolean", String(input.falseBooleanValue)).withName("falseBooleanValue");
    bodyNode.addChildNode(node);
  }
  if (input.floatValue !== undefined) {
    const node = __XmlNode.of("Float", String(input.floatValue)).withName("floatValue");
    bodyNode.addChildNode(node);
  }
  if (input.integerValue !== undefined) {
    const node = __XmlNode.of("Integer", String(input.integerValue)).withName("integerValue");
    bodyNode.addChildNode(node);
  }
  if (input.longValue !== undefined) {
    const node = __XmlNode.of("Long", String(input.longValue)).withName("longValue");
    bodyNode.addChildNode(node);
  }
  if (input.shortValue !== undefined) {
    const node = __XmlNode.of("Short", String(input.shortValue)).withName("shortValue");
    bodyNode.addChildNode(node);
  }
  if (input.stringValue !== undefined) {
    const node = __XmlNode.of("String", input.stringValue).withName("stringValue");
    bodyNode.addChildNode(node);
  }
  if (input.trueBooleanValue !== undefined) {
    const node = __XmlNode.of("Boolean", String(input.trueBooleanValue)).withName("trueBooleanValue");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlTimestampFormatHeadersCommand
 */
export const se_TimestampFormatHeadersCommand = async (
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

/**
 * serializeAws_restXmlXmlAttributesCommand
 */
export const se_XmlAttributesCommand = async (
  input: XmlAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlAttributes";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlAttributesInputOutput");
  if (input.attr !== undefined) {
    bodyNode.addAttribute("test", input.attr);
  }
  if (input.foo !== undefined) {
    const node = __XmlNode.of("String", input.foo).withName("foo");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlAttributesOnPayloadCommand
 */
export const se_XmlAttributesOnPayloadCommand = async (
  input: XmlAttributesOnPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlAttributesOnPayload";
  let body: any;
  if (input.payload !== undefined) {
    body = se_XmlAttributesInputOutput(input.payload, context);
  }
  let contents: any;
  if (input.payload !== undefined) {
    contents = se_XmlAttributesInputOutput(input.payload, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

/**
 * serializeAws_restXmlXmlBlobsCommand
 */
export const se_XmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlBlobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlBlobsInputOutput");
  if (input.data !== undefined) {
    const node = __XmlNode.of("Blob", context.base64Encoder(input.data)).withName("data");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlEmptyBlobsCommand
 */
export const se_XmlEmptyBlobsCommand = async (
  input: XmlEmptyBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlEmptyBlobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlBlobsInputOutput");
  if (input.data !== undefined) {
    const node = __XmlNode.of("Blob", context.base64Encoder(input.data)).withName("data");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlEmptyListsCommand
 */
export const se_XmlEmptyListsCommand = async (
  input: XmlEmptyListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlEmptyLists";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlListsInputOutput");
  if (input.booleanList !== undefined) {
    const nodes = se_BooleanList(input.booleanList, context);
    const containerNode = new __XmlNode("booleanList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.enumList !== undefined) {
    const nodes = se_FooEnumList(input.enumList, context);
    const containerNode = new __XmlNode("enumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.flattenedList !== undefined) {
    const nodes = se_RenamedListMembers(input.flattenedList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedList2 !== undefined) {
    const nodes = se_RenamedListMembers(input.flattenedList2, context);
    nodes.map((node: any) => {
      node = node.withName("customName");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithMemberNamespace !== undefined) {
    const nodes = se_ListWithMemberNamespace(input.flattenedListWithMemberNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithMemberNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithNamespace !== undefined) {
    const nodes = se_ListWithNamespace(input.flattenedListWithNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedStructureList !== undefined) {
    const nodes = se_StructureList(input.flattenedStructureList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedStructureList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.intEnumList !== undefined) {
    const nodes = se_IntegerEnumList(input.intEnumList, context);
    const containerNode = new __XmlNode("intEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.integerList !== undefined) {
    const nodes = se_IntegerList(input.integerList, context);
    const containerNode = new __XmlNode("integerList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.nestedStringList !== undefined) {
    const nodes = se_NestedStringList(input.nestedStringList, context);
    const containerNode = new __XmlNode("nestedStringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.renamedListMembers !== undefined) {
    const nodes = se_RenamedListMembers(input.renamedListMembers, context);
    const containerNode = new __XmlNode("renamed");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringList !== undefined) {
    const nodes = se_StringList(input.stringList, context);
    const containerNode = new __XmlNode("stringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringSet !== undefined) {
    const nodes = se_StringSet(input.stringSet, context);
    const containerNode = new __XmlNode("stringSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.structureList !== undefined) {
    const nodes = se_StructureList(input.structureList, context);
    const containerNode = new __XmlNode("myStructureList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.timestampList !== undefined) {
    const nodes = se_TimestampList(input.timestampList, context);
    const containerNode = new __XmlNode("timestampList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlEmptyMapsCommand
 */
export const se_XmlEmptyMapsCommand = async (
  input: XmlEmptyMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlEmptyMaps";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlMapsInputOutput");
  if (input.myMap !== undefined) {
    const nodes = se_XmlMapsInputOutputMap(input.myMap, context);
    const containerNode = new __XmlNode("myMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlEmptyStringsCommand
 */
export const se_XmlEmptyStringsCommand = async (
  input: XmlEmptyStringsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlEmptyStrings";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlEmptyStringsInputOutput");
  if (input.emptyString !== undefined) {
    const node = __XmlNode.of("String", input.emptyString).withName("emptyString");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlEnumsCommand
 */
export const se_XmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlEnums";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlEnumsInputOutput");
  if (input.fooEnum1 !== undefined) {
    const node = __XmlNode.of("FooEnum", input.fooEnum1).withName("fooEnum1");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnum2 !== undefined) {
    const node = __XmlNode.of("FooEnum", input.fooEnum2).withName("fooEnum2");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnum3 !== undefined) {
    const node = __XmlNode.of("FooEnum", input.fooEnum3).withName("fooEnum3");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnumList !== undefined) {
    const nodes = se_FooEnumList(input.fooEnumList, context);
    const containerNode = new __XmlNode("fooEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.fooEnumMap !== undefined) {
    const nodes = se_FooEnumMap(input.fooEnumMap, context);
    const containerNode = new __XmlNode("fooEnumMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.fooEnumSet !== undefined) {
    const nodes = se_FooEnumSet(input.fooEnumSet, context);
    const containerNode = new __XmlNode("fooEnumSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlIntEnumsCommand
 */
export const se_XmlIntEnumsCommand = async (
  input: XmlIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlIntEnums";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlIntEnumsInputOutput");
  if (input.intEnum1 !== undefined) {
    const node = __XmlNode.of("IntegerEnum", String(input.intEnum1)).withName("intEnum1");
    bodyNode.addChildNode(node);
  }
  if (input.intEnum2 !== undefined) {
    const node = __XmlNode.of("IntegerEnum", String(input.intEnum2)).withName("intEnum2");
    bodyNode.addChildNode(node);
  }
  if (input.intEnum3 !== undefined) {
    const node = __XmlNode.of("IntegerEnum", String(input.intEnum3)).withName("intEnum3");
    bodyNode.addChildNode(node);
  }
  if (input.intEnumList !== undefined) {
    const nodes = se_IntegerEnumList(input.intEnumList, context);
    const containerNode = new __XmlNode("intEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.intEnumMap !== undefined) {
    const nodes = se_IntegerEnumMap(input.intEnumMap, context);
    const containerNode = new __XmlNode("intEnumMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.intEnumSet !== undefined) {
    const nodes = se_IntegerEnumSet(input.intEnumSet, context);
    const containerNode = new __XmlNode("intEnumSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlListsCommand
 */
export const se_XmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlLists";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlListsInputOutput");
  if (input.booleanList !== undefined) {
    const nodes = se_BooleanList(input.booleanList, context);
    const containerNode = new __XmlNode("booleanList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.enumList !== undefined) {
    const nodes = se_FooEnumList(input.enumList, context);
    const containerNode = new __XmlNode("enumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.flattenedList !== undefined) {
    const nodes = se_RenamedListMembers(input.flattenedList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedList2 !== undefined) {
    const nodes = se_RenamedListMembers(input.flattenedList2, context);
    nodes.map((node: any) => {
      node = node.withName("customName");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithMemberNamespace !== undefined) {
    const nodes = se_ListWithMemberNamespace(input.flattenedListWithMemberNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithMemberNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithNamespace !== undefined) {
    const nodes = se_ListWithNamespace(input.flattenedListWithNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedStructureList !== undefined) {
    const nodes = se_StructureList(input.flattenedStructureList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedStructureList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.intEnumList !== undefined) {
    const nodes = se_IntegerEnumList(input.intEnumList, context);
    const containerNode = new __XmlNode("intEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.integerList !== undefined) {
    const nodes = se_IntegerList(input.integerList, context);
    const containerNode = new __XmlNode("integerList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.nestedStringList !== undefined) {
    const nodes = se_NestedStringList(input.nestedStringList, context);
    const containerNode = new __XmlNode("nestedStringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.renamedListMembers !== undefined) {
    const nodes = se_RenamedListMembers(input.renamedListMembers, context);
    const containerNode = new __XmlNode("renamed");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringList !== undefined) {
    const nodes = se_StringList(input.stringList, context);
    const containerNode = new __XmlNode("stringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringSet !== undefined) {
    const nodes = se_StringSet(input.stringSet, context);
    const containerNode = new __XmlNode("stringSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.structureList !== undefined) {
    const nodes = se_StructureList(input.structureList, context);
    const containerNode = new __XmlNode("myStructureList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.timestampList !== undefined) {
    const nodes = se_TimestampList(input.timestampList, context);
    const containerNode = new __XmlNode("timestampList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlMapsCommand
 */
export const se_XmlMapsCommand = async (
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlMaps";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlMapsInputOutput");
  if (input.myMap !== undefined) {
    const nodes = se_XmlMapsInputOutputMap(input.myMap, context);
    const containerNode = new __XmlNode("myMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlMapsXmlNameCommand
 */
export const se_XmlMapsXmlNameCommand = async (
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlMapsXmlName";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlMapsXmlNameInputOutput");
  if (input.myMap !== undefined) {
    const nodes = se_XmlMapsXmlNameInputOutputMap(input.myMap, context);
    const containerNode = new __XmlNode("myMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlNamespacesCommand
 */
export const se_XmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlNamespaces";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlNamespacesInputOutput");
  bodyNode.addAttribute("xmlns", "http://foo.com");
  if (input.nested !== undefined) {
    const node = se_XmlNamespaceNested(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlTimestampsCommand
 */
export const se_XmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlTimestamps";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlTimestampsInputOutput");
  if (input.dateTime !== undefined) {
    const node = __XmlNode
      .of("Timestamp", (input.dateTime.toISOString().split(".")[0] + "Z").toString())
      .withName("dateTime");
    bodyNode.addChildNode(node);
  }
  if (input.dateTimeOnTarget !== undefined) {
    const node = __XmlNode
      .of("DateTime", (input.dateTimeOnTarget.toISOString().split(".")[0] + "Z").toString())
      .withName("dateTimeOnTarget");
    bodyNode.addChildNode(node);
  }
  if (input.epochSeconds !== undefined) {
    const node = __XmlNode
      .of("Timestamp", Math.round(input.epochSeconds.getTime() / 1000).toString())
      .withName("epochSeconds");
    bodyNode.addChildNode(node);
  }
  if (input.epochSecondsOnTarget !== undefined) {
    const node = __XmlNode
      .of("EpochSeconds", Math.round(input.epochSecondsOnTarget.getTime() / 1000).toString())
      .withName("epochSecondsOnTarget");
    bodyNode.addChildNode(node);
  }
  if (input.httpDate !== undefined) {
    const node = __XmlNode.of("Timestamp", __dateToUtcString(input.httpDate).toString()).withName("httpDate");
    bodyNode.addChildNode(node);
  }
  if (input.httpDateOnTarget !== undefined) {
    const node = __XmlNode
      .of("HttpDate", __dateToUtcString(input.httpDateOnTarget).toString())
      .withName("httpDateOnTarget");
    bodyNode.addChildNode(node);
  }
  if (input.normal !== undefined) {
    const node = __XmlNode.of("Timestamp", input.normal.toISOString().split(".")[0] + "Z").withName("normal");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * serializeAws_restXmlXmlUnionsCommand
 */
export const se_XmlUnionsCommand = async (
  input: XmlUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/XmlUnions";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlUnionsInputOutput");
  if (input.unionValue !== undefined) {
    const node = se_XmlUnionShape(input.unionValue, context).withName("unionValue");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

/**
 * deserializeAws_restXmlAllQueryStringTypesCommand
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
 * deserializeAws_restXmlAllQueryStringTypesCommandError
 */
const de_AllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlBodyWithXmlNameCommand
 */
export const de_BodyWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BodyWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BodyWithXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["nested"] !== undefined) {
    contents.nested = de_PayloadWithXmlName(data["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBodyWithXmlNameCommandError
 */
const de_BodyWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BodyWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlConstantAndVariableQueryStringCommand
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
 * deserializeAws_restXmlConstantAndVariableQueryStringCommandError
 */
const de_ConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlConstantQueryStringCommand
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
 * deserializeAws_restXmlConstantQueryStringCommandError
 */
const de_ConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDatetimeOffsetsCommand
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
  if (data["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["datetime"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlDatetimeOffsetsCommandError
 */
const de_DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlEmptyInputAndEmptyOutputCommand
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
 * deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError
 */
const de_EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlEndpointOperationCommand
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
 * deserializeAws_restXmlEndpointOperationCommandError
 */
const de_EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlEndpointWithHostLabelHeaderOperationCommand
 */
export const de_EndpointWithHostLabelHeaderOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EndpointWithHostLabelHeaderOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlEndpointWithHostLabelHeaderOperationCommandError
 */
const de_EndpointWithHostLabelHeaderOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlEndpointWithHostLabelOperationCommand
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
 * deserializeAws_restXmlEndpointWithHostLabelOperationCommandError
 */
const de_EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlFlattenedXmlMapCommand
 */
export const de_FlattenedXmlMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_FlattenedXmlMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined) {
    contents.myMap = de_FooEnumMap(__getArrayIfSingleItem(data["myMap"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFlattenedXmlMapCommandError
 */
const de_FlattenedXmlMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand
 */
export const de_FlattenedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_FlattenedXmlMapWithXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KVP === "") {
    contents.myMap = {};
  } else if (data["KVP"] !== undefined) {
    contents.myMap = de_FlattenedXmlMapWithXmlNameInputOutputMap(__getArrayIfSingleItem(data["KVP"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError
 */
const de_FlattenedXmlMapWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand
 */
export const de_FlattenedXmlMapWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_FlattenedXmlMapWithXmlNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KVP === "") {
    contents.myMap = {};
  } else if (data["KVP"] !== undefined) {
    contents.myMap = de_FlattenedXmlMapWithXmlNamespaceOutputMap(__getArrayIfSingleItem(data["KVP"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommandError
 */
const de_FlattenedXmlMapWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlFractionalSecondsCommand
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
  if (data["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["datetime"]));
  }
  if (data["httpdate"] !== undefined) {
    contents.httpdate = __expectNonNull(__parseRfc7231DateTime(data["httpdate"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlFractionalSecondsCommandError
 */
const de_FractionalSecondsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGreetingWithErrorsCommand
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
    greeting: [, output.headers["x-greeting"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlGreetingWithErrorsCommandError
 */
const de_GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restXmlHttpPayloadTraitsCommand
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
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadTraitsCommandError
 */
const de_HttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand
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
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError
 */
const de_HttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommand
 */
export const de_HttpPayloadWithMemberXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithMemberXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadWithMemberXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlName(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommandError
 */
const de_HttpPayloadWithMemberXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithMemberXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPayloadWithStructureCommand
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
  contents.nested = de_NestedPayload(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithStructureCommandError
 */
const de_HttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNameCommand
 */
export const de_HttpPayloadWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadWithXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlName(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNameCommandError
 */
const de_HttpPayloadWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand
 */
export const de_HttpPayloadWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadWithXmlNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlNamespace(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError
 */
const de_HttpPayloadWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand
 */
export const de_HttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HttpPayloadWithXmlNamespaceAndPrefixCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = de_PayloadWithXmlNamespaceAndPrefix(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError
 */
const de_HttpPayloadWithXmlNamespaceAndPrefixCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpPrefixHeadersCommand
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

/**
 * deserializeAws_restXmlHttpPrefixHeadersCommandError
 */
const de_HttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpRequestWithFloatLabelsCommand
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
 * deserializeAws_restXmlHttpRequestWithFloatLabelsCommandError
 */
const de_HttpRequestWithFloatLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand
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
 * deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError
 */
const de_HttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpRequestWithLabelsCommand
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
 * deserializeAws_restXmlHttpRequestWithLabelsCommandError
 */
const de_HttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand
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
 * deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError
 */
const de_HttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHttpResponseCodeCommand
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
 * deserializeAws_restXmlHttpResponseCodeCommandError
 */
const de_HttpResponseCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlIgnoreQueryParamsInResponseCommand
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
  if (data["baz"] !== undefined) {
    contents.baz = __expectString(data["baz"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError
 */
const de_IgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlInputAndOutputWithHeadersCommand
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
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlInputAndOutputWithHeadersCommandError
 */
const de_InputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlNestedXmlMapsCommand
 */
export const de_NestedXmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedXmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NestedXmlMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flatNestedMap === "") {
    contents.flatNestedMap = {};
  } else if (data["flatNestedMap"] !== undefined) {
    contents.flatNestedMap = de_NestedMap(__getArrayIfSingleItem(data["flatNestedMap"]), context);
  }
  if (data.nestedMap === "") {
    contents.nestedMap = {};
  } else if (data["nestedMap"] !== undefined && data["nestedMap"]["entry"] !== undefined) {
    contents.nestedMap = de_NestedMap(__getArrayIfSingleItem(data["nestedMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlNestedXmlMapsCommandError
 */
const de_NestedXmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedXmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlNoInputAndNoOutputCommand
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
 * deserializeAws_restXmlNoInputAndNoOutputCommandError
 */
const de_NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlNoInputAndOutputCommand
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
 * deserializeAws_restXmlNoInputAndOutputCommandError
 */
const de_NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlNullAndEmptyHeadersClientCommand
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

/**
 * deserializeAws_restXmlNullAndEmptyHeadersClientCommandError
 */
const de_NullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlNullAndEmptyHeadersServerCommand
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

/**
 * deserializeAws_restXmlNullAndEmptyHeadersServerCommandError
 */
const de_NullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand
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
 * deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError
 */
const de_OmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutWithContentEncodingCommand
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
 * deserializeAws_restXmlPutWithContentEncodingCommandError
 */
const de_PutWithContentEncodingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand
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
 * deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError
 */
const de_QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlQueryParamsAsStringListMapCommand
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
 * deserializeAws_restXmlQueryParamsAsStringListMapCommandError
 */
const de_QueryParamsAsStringListMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlQueryPrecedenceCommand
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
 * deserializeAws_restXmlQueryPrecedenceCommandError
 */
const de_QueryPrecedenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlRecursiveShapesCommand
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
  if (data["nested"] !== undefined) {
    contents.nested = de_RecursiveShapesInputOutputNested1(data["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRecursiveShapesCommandError
 */
const de_RecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlSimpleScalarPropertiesCommand
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
    foo: [, output.headers["x-foo"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["byteValue"] !== undefined) {
    contents.byteValue = __strictParseByte(data["byteValue"]) as number;
  }
  if (data["DoubleDribble"] !== undefined) {
    contents.doubleValue = __strictParseFloat(data["DoubleDribble"]) as number;
  }
  if (data["falseBooleanValue"] !== undefined) {
    contents.falseBooleanValue = __parseBoolean(data["falseBooleanValue"]);
  }
  if (data["floatValue"] !== undefined) {
    contents.floatValue = __strictParseFloat(data["floatValue"]) as number;
  }
  if (data["integerValue"] !== undefined) {
    contents.integerValue = __strictParseInt32(data["integerValue"]) as number;
  }
  if (data["longValue"] !== undefined) {
    contents.longValue = __strictParseLong(data["longValue"]) as number;
  }
  if (data["shortValue"] !== undefined) {
    contents.shortValue = __strictParseShort(data["shortValue"]) as number;
  }
  if (data["stringValue"] !== undefined) {
    contents.stringValue = __expectString(data["stringValue"]);
  }
  if (data["trueBooleanValue"] !== undefined) {
    contents.trueBooleanValue = __parseBoolean(data["trueBooleanValue"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSimpleScalarPropertiesCommandError
 */
const de_SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlTimestampFormatHeadersCommand
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

/**
 * deserializeAws_restXmlTimestampFormatHeadersCommandError
 */
const de_TimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlAttributesCommand
 */
export const de_XmlAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["test"] !== undefined) {
    contents.attr = __expectString(data["test"]);
  }
  if (data["foo"] !== undefined) {
    contents.foo = __expectString(data["foo"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlAttributesCommandError
 */
const de_XmlAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlAttributesOnPayloadCommand
 */
export const de_XmlAttributesOnPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlAttributesOnPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.payload = de_XmlAttributesInputOutput(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlXmlAttributesOnPayloadCommandError
 */
const de_XmlAttributesOnPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlBlobsCommand
 */
export const de_XmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlBlobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["data"] !== undefined) {
    contents.data = context.base64Decoder(data["data"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlBlobsCommandError
 */
const de_XmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlEmptyBlobsCommand
 */
export const de_XmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlEmptyBlobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["data"] !== undefined) {
    contents.data = context.base64Decoder(data["data"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyBlobsCommandError
 */
const de_XmlEmptyBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlEmptyListsCommand
 */
export const de_XmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlEmptyListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.booleanList === "") {
    contents.booleanList = [];
  } else if (data["booleanList"] !== undefined && data["booleanList"]["member"] !== undefined) {
    contents.booleanList = de_BooleanList(__getArrayIfSingleItem(data["booleanList"]["member"]), context);
  }
  if (data.enumList === "") {
    contents.enumList = [];
  } else if (data["enumList"] !== undefined && data["enumList"]["member"] !== undefined) {
    contents.enumList = de_FooEnumList(__getArrayIfSingleItem(data["enumList"]["member"]), context);
  }
  if (data.flattenedList === "") {
    contents.flattenedList = [];
  } else if (data["flattenedList"] !== undefined) {
    contents.flattenedList = de_RenamedListMembers(__getArrayIfSingleItem(data["flattenedList"]), context);
  }
  if (data.customName === "") {
    contents.flattenedList2 = [];
  } else if (data["customName"] !== undefined) {
    contents.flattenedList2 = de_RenamedListMembers(__getArrayIfSingleItem(data["customName"]), context);
  }
  if (data.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (data["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = de_ListWithMemberNamespace(
      __getArrayIfSingleItem(data["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (data.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (data["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = de_ListWithNamespace(
      __getArrayIfSingleItem(data["flattenedListWithNamespace"]),
      context
    );
  }
  if (data.flattenedStructureList === "") {
    contents.flattenedStructureList = [];
  } else if (data["flattenedStructureList"] !== undefined) {
    contents.flattenedStructureList = de_StructureList(__getArrayIfSingleItem(data["flattenedStructureList"]), context);
  }
  if (data.intEnumList === "") {
    contents.intEnumList = [];
  } else if (data["intEnumList"] !== undefined && data["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = de_IntegerEnumList(__getArrayIfSingleItem(data["intEnumList"]["member"]), context);
  }
  if (data.integerList === "") {
    contents.integerList = [];
  } else if (data["integerList"] !== undefined && data["integerList"]["member"] !== undefined) {
    contents.integerList = de_IntegerList(__getArrayIfSingleItem(data["integerList"]["member"]), context);
  }
  if (data.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (data["nestedStringList"] !== undefined && data["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = de_NestedStringList(
      __getArrayIfSingleItem(data["nestedStringList"]["member"]),
      context
    );
  }
  if (data.renamed === "") {
    contents.renamedListMembers = [];
  } else if (data["renamed"] !== undefined && data["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = de_RenamedListMembers(__getArrayIfSingleItem(data["renamed"]["item"]), context);
  }
  if (data.stringList === "") {
    contents.stringList = [];
  } else if (data["stringList"] !== undefined && data["stringList"]["member"] !== undefined) {
    contents.stringList = de_StringList(__getArrayIfSingleItem(data["stringList"]["member"]), context);
  }
  if (data.stringSet === "") {
    contents.stringSet = [];
  } else if (data["stringSet"] !== undefined && data["stringSet"]["member"] !== undefined) {
    contents.stringSet = de_StringSet(__getArrayIfSingleItem(data["stringSet"]["member"]), context);
  }
  if (data.myStructureList === "") {
    contents.structureList = [];
  } else if (data["myStructureList"] !== undefined && data["myStructureList"]["item"] !== undefined) {
    contents.structureList = de_StructureList(__getArrayIfSingleItem(data["myStructureList"]["item"]), context);
  }
  if (data.timestampList === "") {
    contents.timestampList = [];
  } else if (data["timestampList"] !== undefined && data["timestampList"]["member"] !== undefined) {
    contents.timestampList = de_TimestampList(__getArrayIfSingleItem(data["timestampList"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyListsCommandError
 */
const de_XmlEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlEmptyMapsCommand
 */
export const de_XmlEmptyMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlEmptyMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = de_XmlMapsInputOutputMap(__getArrayIfSingleItem(data["myMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyMapsCommandError
 */
const de_XmlEmptyMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlEmptyStringsCommand
 */
export const de_XmlEmptyStringsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyStringsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlEmptyStringsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["emptyString"] !== undefined) {
    contents.emptyString = __expectString(data["emptyString"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEmptyStringsCommandError
 */
const de_XmlEmptyStringsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyStringsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlEnumsCommand
 */
export const de_XmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlEnumsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["fooEnum1"] !== undefined) {
    contents.fooEnum1 = __expectString(data["fooEnum1"]);
  }
  if (data["fooEnum2"] !== undefined) {
    contents.fooEnum2 = __expectString(data["fooEnum2"]);
  }
  if (data["fooEnum3"] !== undefined) {
    contents.fooEnum3 = __expectString(data["fooEnum3"]);
  }
  if (data.fooEnumList === "") {
    contents.fooEnumList = [];
  } else if (data["fooEnumList"] !== undefined && data["fooEnumList"]["member"] !== undefined) {
    contents.fooEnumList = de_FooEnumList(__getArrayIfSingleItem(data["fooEnumList"]["member"]), context);
  }
  if (data.fooEnumMap === "") {
    contents.fooEnumMap = {};
  } else if (data["fooEnumMap"] !== undefined && data["fooEnumMap"]["entry"] !== undefined) {
    contents.fooEnumMap = de_FooEnumMap(__getArrayIfSingleItem(data["fooEnumMap"]["entry"]), context);
  }
  if (data.fooEnumSet === "") {
    contents.fooEnumSet = [];
  } else if (data["fooEnumSet"] !== undefined && data["fooEnumSet"]["member"] !== undefined) {
    contents.fooEnumSet = de_FooEnumSet(__getArrayIfSingleItem(data["fooEnumSet"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlEnumsCommandError
 */
const de_XmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlIntEnumsCommand
 */
export const de_XmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlIntEnumsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["intEnum1"] !== undefined) {
    contents.intEnum1 = __strictParseInt32(data["intEnum1"]) as number;
  }
  if (data["intEnum2"] !== undefined) {
    contents.intEnum2 = __strictParseInt32(data["intEnum2"]) as number;
  }
  if (data["intEnum3"] !== undefined) {
    contents.intEnum3 = __strictParseInt32(data["intEnum3"]) as number;
  }
  if (data.intEnumList === "") {
    contents.intEnumList = [];
  } else if (data["intEnumList"] !== undefined && data["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = de_IntegerEnumList(__getArrayIfSingleItem(data["intEnumList"]["member"]), context);
  }
  if (data.intEnumMap === "") {
    contents.intEnumMap = {};
  } else if (data["intEnumMap"] !== undefined && data["intEnumMap"]["entry"] !== undefined) {
    contents.intEnumMap = de_IntegerEnumMap(__getArrayIfSingleItem(data["intEnumMap"]["entry"]), context);
  }
  if (data.intEnumSet === "") {
    contents.intEnumSet = [];
  } else if (data["intEnumSet"] !== undefined && data["intEnumSet"]["member"] !== undefined) {
    contents.intEnumSet = de_IntegerEnumSet(__getArrayIfSingleItem(data["intEnumSet"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlIntEnumsCommandError
 */
const de_XmlIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlListsCommand
 */
export const de_XmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.booleanList === "") {
    contents.booleanList = [];
  } else if (data["booleanList"] !== undefined && data["booleanList"]["member"] !== undefined) {
    contents.booleanList = de_BooleanList(__getArrayIfSingleItem(data["booleanList"]["member"]), context);
  }
  if (data.enumList === "") {
    contents.enumList = [];
  } else if (data["enumList"] !== undefined && data["enumList"]["member"] !== undefined) {
    contents.enumList = de_FooEnumList(__getArrayIfSingleItem(data["enumList"]["member"]), context);
  }
  if (data.flattenedList === "") {
    contents.flattenedList = [];
  } else if (data["flattenedList"] !== undefined) {
    contents.flattenedList = de_RenamedListMembers(__getArrayIfSingleItem(data["flattenedList"]), context);
  }
  if (data.customName === "") {
    contents.flattenedList2 = [];
  } else if (data["customName"] !== undefined) {
    contents.flattenedList2 = de_RenamedListMembers(__getArrayIfSingleItem(data["customName"]), context);
  }
  if (data.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (data["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = de_ListWithMemberNamespace(
      __getArrayIfSingleItem(data["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (data.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (data["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = de_ListWithNamespace(
      __getArrayIfSingleItem(data["flattenedListWithNamespace"]),
      context
    );
  }
  if (data.flattenedStructureList === "") {
    contents.flattenedStructureList = [];
  } else if (data["flattenedStructureList"] !== undefined) {
    contents.flattenedStructureList = de_StructureList(__getArrayIfSingleItem(data["flattenedStructureList"]), context);
  }
  if (data.intEnumList === "") {
    contents.intEnumList = [];
  } else if (data["intEnumList"] !== undefined && data["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = de_IntegerEnumList(__getArrayIfSingleItem(data["intEnumList"]["member"]), context);
  }
  if (data.integerList === "") {
    contents.integerList = [];
  } else if (data["integerList"] !== undefined && data["integerList"]["member"] !== undefined) {
    contents.integerList = de_IntegerList(__getArrayIfSingleItem(data["integerList"]["member"]), context);
  }
  if (data.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (data["nestedStringList"] !== undefined && data["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = de_NestedStringList(
      __getArrayIfSingleItem(data["nestedStringList"]["member"]),
      context
    );
  }
  if (data.renamed === "") {
    contents.renamedListMembers = [];
  } else if (data["renamed"] !== undefined && data["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = de_RenamedListMembers(__getArrayIfSingleItem(data["renamed"]["item"]), context);
  }
  if (data.stringList === "") {
    contents.stringList = [];
  } else if (data["stringList"] !== undefined && data["stringList"]["member"] !== undefined) {
    contents.stringList = de_StringList(__getArrayIfSingleItem(data["stringList"]["member"]), context);
  }
  if (data.stringSet === "") {
    contents.stringSet = [];
  } else if (data["stringSet"] !== undefined && data["stringSet"]["member"] !== undefined) {
    contents.stringSet = de_StringSet(__getArrayIfSingleItem(data["stringSet"]["member"]), context);
  }
  if (data.myStructureList === "") {
    contents.structureList = [];
  } else if (data["myStructureList"] !== undefined && data["myStructureList"]["item"] !== undefined) {
    contents.structureList = de_StructureList(__getArrayIfSingleItem(data["myStructureList"]["item"]), context);
  }
  if (data.timestampList === "") {
    contents.timestampList = [];
  } else if (data["timestampList"] !== undefined && data["timestampList"]["member"] !== undefined) {
    contents.timestampList = de_TimestampList(__getArrayIfSingleItem(data["timestampList"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlListsCommandError
 */
const de_XmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlMapsCommand
 */
export const de_XmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = de_XmlMapsInputOutputMap(__getArrayIfSingleItem(data["myMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlMapsCommandError
 */
const de_XmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlMapsXmlNameCommand
 */
export const de_XmlMapsXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlMapsXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = de_XmlMapsXmlNameInputOutputMap(__getArrayIfSingleItem(data["myMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlMapsXmlNameCommandError
 */
const de_XmlMapsXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlNamespacesCommand
 */
export const de_XmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlNamespacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["nested"] !== undefined) {
    contents.nested = de_XmlNamespaceNested(data["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlNamespacesCommandError
 */
const de_XmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlTimestampsCommand
 */
export const de_XmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlTimestampsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["dateTime"] !== undefined) {
    contents.dateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["dateTime"]));
  }
  if (data["dateTimeOnTarget"] !== undefined) {
    contents.dateTimeOnTarget = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["dateTimeOnTarget"]));
  }
  if (data["epochSeconds"] !== undefined) {
    contents.epochSeconds = __expectNonNull(__parseEpochTimestamp(data["epochSeconds"]));
  }
  if (data["epochSecondsOnTarget"] !== undefined) {
    contents.epochSecondsOnTarget = __expectNonNull(__parseEpochTimestamp(data["epochSecondsOnTarget"]));
  }
  if (data["httpDate"] !== undefined) {
    contents.httpDate = __expectNonNull(__parseRfc7231DateTime(data["httpDate"]));
  }
  if (data["httpDateOnTarget"] !== undefined) {
    contents.httpDateOnTarget = __expectNonNull(__parseRfc7231DateTime(data["httpDateOnTarget"]));
  }
  if (data["normal"] !== undefined) {
    contents.normal = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["normal"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlTimestampsCommandError
 */
const de_XmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlXmlUnionsCommand
 */
export const de_XmlUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlUnionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_XmlUnionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unionValue === "") {
    // Pass empty tags.
  } else if (data["unionValue"] !== undefined) {
    contents.unionValue = de_XmlUnionShape(__expectUnion(data["unionValue"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlUnionsCommandError
 */
const de_XmlUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const contents: any = map({
    Header: [, parsedOutput.headers["x-header"]],
  });
  const data: any = parsedOutput.body.Error;
  if (data["Nested"] !== undefined) {
    contents.Nested = de_ComplexNestedErrorData(data["Nested"], context);
  }
  if (data["TopLevel"] !== undefined) {
    contents.TopLevel = __expectString(data["TopLevel"]);
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
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
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
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("K");
      entryNode.addChildNode(keyNode);
      let node;
      node = __XmlNode.of("String", input[key]);
      entryNode.addChildNode(node.withName("V"));
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
      const node = __XmlNode.of("String", entry);
      node.addAttribute("xmlns", "https://xml-member.example.com");
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlListWithNamespace
 */
const se_ListWithNamespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlNestedMap
 */
const se_NestedMap = (input: Record<string, Record<string, FooEnum | string>>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = se_FooEnumMap(input[key], context);
      entryNode.addChildNode(
        node.reduce((acc: __XmlNode, workingNode: any) => {
          return acc.addChildNode(workingNode);
        }, new __XmlNode("value"))
      );
      return entryNode;
    });
};

/**
 * serializeAws_restXmlNestedPayload
 */
const se_NestedPayload = (input: NestedPayload, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("NestedPayload");
  if (input.greeting != null) {
    const node = __XmlNode.of("String", input.greeting).withName("greeting");
    bodyNode.addChildNode(node);
  }
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPayloadWithXmlName
 */
const se_PayloadWithXmlName = (input: PayloadWithXmlName, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Hello");
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPayloadWithXmlNamespace
 */
const se_PayloadWithXmlNamespace = (input: PayloadWithXmlNamespace, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespace");
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix
 */
const se_PayloadWithXmlNamespaceAndPrefix = (input: PayloadWithXmlNamespaceAndPrefix, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespaceAndPrefix");
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRecursiveShapesInputOutputNested1
 */
const se_RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested1");
  if (input.foo != null) {
    const node = __XmlNode.of("String", input.foo).withName("foo");
    bodyNode.addChildNode(node);
  }
  if (input.nested != null) {
    const node = se_RecursiveShapesInputOutputNested2(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRecursiveShapesInputOutputNested2
 */
const se_RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested2");
  if (input.bar != null) {
    const node = __XmlNode.of("String", input.bar).withName("bar");
    bodyNode.addChildNode(node);
  }
  if (input.recursiveMember != null) {
    const node = se_RecursiveShapesInputOutputNested1(input.recursiveMember, context).withName("recursiveMember");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRenamedListMembers
 */
const se_RenamedListMembers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("item");
    });
};

/**
 * serializeAws_restXmlStructureList
 */
const se_StructureList = (input: StructureListMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_StructureListMember(entry, context);
      return node.withName("item");
    });
};

/**
 * serializeAws_restXmlStructureListMember
 */
const se_StructureListMember = (input: StructureListMember, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StructureListMember");
  if (input.a != null) {
    const node = __XmlNode.of("String", input.a).withName("value");
    bodyNode.addChildNode(node);
  }
  if (input.b != null) {
    const node = __XmlNode.of("String", input.b).withName("other");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlXmlAttributesInputOutput
 */
const se_XmlAttributesInputOutput = (input: XmlAttributesInputOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("XmlAttributesInputOutput");
  if (input.foo != null) {
    const node = __XmlNode.of("String", input.foo).withName("foo");
    bodyNode.addChildNode(node);
  }
  if (input.attr != null) {
    bodyNode.addAttribute("test", input.attr);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlXmlMapsInputOutputMap
 */
const se_XmlMapsInputOutputMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = se_GreetingStruct(input[key], context);
      entryNode.addChildNode(node.withName("value"));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlXmlMapsXmlNameInputOutputMap
 */
const se_XmlMapsXmlNameInputOutputMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("Attribute");
      entryNode.addChildNode(keyNode);
      let node;
      node = se_GreetingStruct(input[key], context);
      entryNode.addChildNode(node.withName("Setting"));
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
      const node = __XmlNode.of("String", entry);
      node.addAttribute("xmlns", "http://bux.com");
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlXmlNamespaceNested
 */
const se_XmlNamespaceNested = (input: XmlNamespaceNested, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("XmlNamespaceNested");
  if (input.foo != null) {
    const node = __XmlNode.of("String", input.foo).withName("foo");
    node.addAttribute("xmlns:baz", "http://baz.com");
    bodyNode.addChildNode(node);
  }
  if (input.values != null) {
    const nodes = se_XmlNamespacedList(input.values, context);
    const containerNode = new __XmlNode("values");
    containerNode.addAttribute("xmlns", "http://qux.com");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlXmlNestedUnionStruct
 */
const se_XmlNestedUnionStruct = (input: XmlNestedUnionStruct, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("XmlNestedUnionStruct");
  if (input.stringValue != null) {
    const node = __XmlNode.of("String", input.stringValue).withName("stringValue");
    bodyNode.addChildNode(node);
  }
  if (input.booleanValue != null) {
    const node = __XmlNode.of("Boolean", String(input.booleanValue)).withName("booleanValue");
    bodyNode.addChildNode(node);
  }
  if (input.byteValue != null) {
    const node = __XmlNode.of("Byte", String(input.byteValue)).withName("byteValue");
    bodyNode.addChildNode(node);
  }
  if (input.shortValue != null) {
    const node = __XmlNode.of("Short", String(input.shortValue)).withName("shortValue");
    bodyNode.addChildNode(node);
  }
  if (input.integerValue != null) {
    const node = __XmlNode.of("Integer", String(input.integerValue)).withName("integerValue");
    bodyNode.addChildNode(node);
  }
  if (input.longValue != null) {
    const node = __XmlNode.of("Long", String(input.longValue)).withName("longValue");
    bodyNode.addChildNode(node);
  }
  if (input.floatValue != null) {
    const node = __XmlNode.of("Float", String(input.floatValue)).withName("floatValue");
    bodyNode.addChildNode(node);
  }
  if (input.doubleValue != null) {
    const node = __XmlNode.of("Double", String(input.doubleValue)).withName("doubleValue");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlXmlUnionShape
 */
const se_XmlUnionShape = (input: XmlUnionShape, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("XmlUnionShape");
  XmlUnionShape.visit(input, {
    stringValue: (value) => {
      const node = __XmlNode.of("String", value).withName("stringValue");
      bodyNode.addChildNode(node);
    },
    booleanValue: (value) => {
      const node = __XmlNode.of("Boolean", String(value)).withName("booleanValue");
      bodyNode.addChildNode(node);
    },
    byteValue: (value) => {
      const node = __XmlNode.of("Byte", String(value)).withName("byteValue");
      bodyNode.addChildNode(node);
    },
    shortValue: (value) => {
      const node = __XmlNode.of("Short", String(value)).withName("shortValue");
      bodyNode.addChildNode(node);
    },
    integerValue: (value) => {
      const node = __XmlNode.of("Integer", String(value)).withName("integerValue");
      bodyNode.addChildNode(node);
    },
    longValue: (value) => {
      const node = __XmlNode.of("Long", String(value)).withName("longValue");
      bodyNode.addChildNode(node);
    },
    floatValue: (value) => {
      const node = __XmlNode.of("Float", String(value)).withName("floatValue");
      bodyNode.addChildNode(node);
    },
    doubleValue: (value) => {
      const node = __XmlNode.of("Double", String(value)).withName("doubleValue");
      bodyNode.addChildNode(node);
    },
    unionValue: (value) => {
      const node = se_XmlUnionShape(value, context).withName("unionValue");
      bodyNode.addChildNode(node);
    },
    structValue: (value) => {
      const node = se_XmlNestedUnionStruct(value, context).withName("structValue");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

/**
 * serializeAws_restXmlBooleanList
 */
const se_BooleanList = (input: boolean[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Boolean", String(entry));
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlFooEnumList
 */
const se_FooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("FooEnum", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlFooEnumMap
 */
const se_FooEnumMap = (input: Record<string, FooEnum | string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = __XmlNode.of("FooEnum", input[key]);
      entryNode.addChildNode(node.withName("value"));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlFooEnumSet
 */
const se_FooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("FooEnum", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlGreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GreetingStruct");
  if (input.hi != null) {
    const node = __XmlNode.of("String", input.hi).withName("hi");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlIntegerEnumList
 */
const se_IntegerEnumList = (input: (IntegerEnum | number)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("IntegerEnum", String(entry));
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlIntegerEnumMap
 */
const se_IntegerEnumMap = (input: Record<string, IntegerEnum | number>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = __XmlNode.of("IntegerEnum", String(input[key]));
      entryNode.addChildNode(node.withName("value"));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlIntegerEnumSet
 */
const se_IntegerEnumSet = (input: (IntegerEnum | number)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("IntegerEnum", String(entry));
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlIntegerList
 */
const se_IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Integer", String(entry));
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlNestedStringList
 */
const se_NestedStringList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_StringList(entry, context);
      return node.reduce((acc: __XmlNode, workingNode: any) => {
        return acc.addChildNode(workingNode);
      }, new __XmlNode("member"));
    });
};

/**
 * serializeAws_restXmlStringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlStringSet
 */
const se_StringSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlTimestampList
 */
const se_TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Timestamp", entry.toISOString().split(".")[0] + "Z");
      return node.withName("member");
    });
};

/**
 * deserializeAws_restXmlComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {};
  if (output["Foo"] !== undefined) {
    contents.Foo = __expectString(output["Foo"]);
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
const de_NestedMap = (output: any, context: __SerdeContext): Record<string, Record<string, FooEnum | string>> => {
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
  if (output["greeting"] !== undefined) {
    contents.greeting = __expectString(output["greeting"]);
  }
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPayloadWithXmlName
 */
const de_PayloadWithXmlName = (output: any, context: __SerdeContext): PayloadWithXmlName => {
  const contents: any = {};
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPayloadWithXmlNamespace
 */
const de_PayloadWithXmlNamespace = (output: any, context: __SerdeContext): PayloadWithXmlNamespace => {
  const contents: any = {};
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
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
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
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
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output["nested"] !== undefined) {
    contents.nested = de_RecursiveShapesInputOutputNested2(output["nested"], context);
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
  if (output["bar"] !== undefined) {
    contents.bar = __expectString(output["bar"]);
  }
  if (output["recursiveMember"] !== undefined) {
    contents.recursiveMember = de_RecursiveShapesInputOutputNested1(output["recursiveMember"], context);
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
  if (output["value"] !== undefined) {
    contents.a = __expectString(output["value"]);
  }
  if (output["other"] !== undefined) {
    contents.b = __expectString(output["other"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlAttributesInputOutput
 */
const de_XmlAttributesInputOutput = (output: any, context: __SerdeContext): XmlAttributesInputOutput => {
  const contents: any = {};
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output["test"] !== undefined) {
    contents.attr = __expectString(output["test"]);
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
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output.values === "") {
    contents.values = [];
  } else if (output["values"] !== undefined && output["values"]["member"] !== undefined) {
    contents.values = de_XmlNamespacedList(__getArrayIfSingleItem(output["values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlNestedUnionStruct
 */
const de_XmlNestedUnionStruct = (output: any, context: __SerdeContext): XmlNestedUnionStruct => {
  const contents: any = {};
  if (output["stringValue"] !== undefined) {
    contents.stringValue = __expectString(output["stringValue"]);
  }
  if (output["booleanValue"] !== undefined) {
    contents.booleanValue = __parseBoolean(output["booleanValue"]);
  }
  if (output["byteValue"] !== undefined) {
    contents.byteValue = __strictParseByte(output["byteValue"]) as number;
  }
  if (output["shortValue"] !== undefined) {
    contents.shortValue = __strictParseShort(output["shortValue"]) as number;
  }
  if (output["integerValue"] !== undefined) {
    contents.integerValue = __strictParseInt32(output["integerValue"]) as number;
  }
  if (output["longValue"] !== undefined) {
    contents.longValue = __strictParseLong(output["longValue"]) as number;
  }
  if (output["floatValue"] !== undefined) {
    contents.floatValue = __strictParseFloat(output["floatValue"]) as number;
  }
  if (output["doubleValue"] !== undefined) {
    contents.doubleValue = __strictParseFloat(output["doubleValue"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlXmlUnionShape
 */
const de_XmlUnionShape = (output: any, context: __SerdeContext): XmlUnionShape => {
  if (output["stringValue"] !== undefined) {
    return {
      stringValue: __expectString(output["stringValue"]) as any,
    };
  }
  if (output["booleanValue"] !== undefined) {
    return {
      booleanValue: __parseBoolean(output["booleanValue"]),
    };
  }
  if (output["byteValue"] !== undefined) {
    return {
      byteValue: __strictParseByte(output["byteValue"]) as number,
    };
  }
  if (output["shortValue"] !== undefined) {
    return {
      shortValue: __strictParseShort(output["shortValue"]) as number,
    };
  }
  if (output["integerValue"] !== undefined) {
    return {
      integerValue: __strictParseInt32(output["integerValue"]) as number,
    };
  }
  if (output["longValue"] !== undefined) {
    return {
      longValue: __strictParseLong(output["longValue"]) as number,
    };
  }
  if (output["floatValue"] !== undefined) {
    return {
      floatValue: __strictParseFloat(output["floatValue"]) as number,
    };
  }
  if (output["doubleValue"] !== undefined) {
    return {
      doubleValue: __strictParseFloat(output["doubleValue"]) as number,
    };
  }
  if (output.unionValue === "") {
    // Pass empty tags.
  } else if (output["unionValue"] !== undefined) {
    return {
      unionValue: de_XmlUnionShape(__expectUnion(output["unionValue"]), context),
    };
  }
  if (output["structValue"] !== undefined) {
    return {
      structValue: de_XmlNestedUnionStruct(output["structValue"], context),
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
const de_FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlFooEnumMap
 */
const de_FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
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
const de_FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
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
  if (output["hi"] !== undefined) {
    contents.hi = __expectString(output["hi"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntegerEnumList
 */
const de_IntegerEnumList = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_restXmlIntegerEnumMap
 */
const de_IntegerEnumMap = (output: any, context: __SerdeContext): Record<string, IntegerEnum | number> => {
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
const de_IntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
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
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
