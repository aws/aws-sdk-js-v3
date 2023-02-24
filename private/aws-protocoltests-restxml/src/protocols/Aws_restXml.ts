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
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  map as __map,
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
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
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

export const serializeAws_restXmlAllQueryStringTypesCommand = async (
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

export const serializeAws_restXmlBodyWithXmlNameCommand = async (
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
    const node = serializeAws_restXmlPayloadWithXmlName(input.nested, context).withName("nested");
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

export const serializeAws_restXmlConstantAndVariableQueryStringCommand = async (
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

export const serializeAws_restXmlConstantQueryStringCommand = async (
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

export const serializeAws_restXmlDatetimeOffsetsCommand = async (
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

export const serializeAws_restXmlEmptyInputAndEmptyOutputCommand = async (
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

export const serializeAws_restXmlEndpointOperationCommand = async (
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

export const serializeAws_restXmlEndpointWithHostLabelHeaderOperationCommand = async (
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

export const serializeAws_restXmlEndpointWithHostLabelOperationCommand = async (
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

export const serializeAws_restXmlFlattenedXmlMapCommand = async (
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
    const nodes = serializeAws_restXmlFooEnumMap(input.myMap, context);
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

export const serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand = async (
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
    const nodes = serializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap(input.myMap, context);
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

export const serializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand = async (
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

export const serializeAws_restXmlGreetingWithErrorsCommand = async (
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

export const serializeAws_restXmlHttpPayloadTraitsCommand = async (
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

export const serializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand = async (
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

export const serializeAws_restXmlHttpPayloadWithMemberXmlNameCommand = async (
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
    body = serializeAws_restXmlPayloadWithXmlName(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlName(input.nested, context);
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

export const serializeAws_restXmlHttpPayloadWithStructureCommand = async (
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
    body = serializeAws_restXmlNestedPayload(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlNestedPayload(input.nested, context);
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

export const serializeAws_restXmlHttpPayloadWithXmlNameCommand = async (
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
    body = serializeAws_restXmlPayloadWithXmlName(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlName(input.nested, context);
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

export const serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand = async (
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
    body = serializeAws_restXmlPayloadWithXmlNamespace(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlNamespace(input.nested, context);
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

export const serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand = async (
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
    body = serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(input.nested, context);
  }
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(input.nested, context);
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

export const serializeAws_restXmlHttpPrefixHeadersCommand = async (
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

export const serializeAws_restXmlHttpRequestWithFloatLabelsCommand = async (
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

export const serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand = async (
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

export const serializeAws_restXmlHttpRequestWithLabelsCommand = async (
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

export const serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand = async (
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

export const serializeAws_restXmlHttpResponseCodeCommand = async (
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

export const serializeAws_restXmlIgnoreQueryParamsInResponseCommand = async (
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

export const serializeAws_restXmlInputAndOutputWithHeadersCommand = async (
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

export const serializeAws_restXmlNestedXmlMapsCommand = async (
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
    const nodes = serializeAws_restXmlNestedMap(input.flatNestedMap, context);
    nodes.map((node: any) => {
      node = node.withName("flatNestedMap");
      bodyNode.addChildNode(node);
    });
  }
  if (input.nestedMap !== undefined) {
    const nodes = serializeAws_restXmlNestedMap(input.nestedMap, context);
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

export const serializeAws_restXmlNoInputAndNoOutputCommand = async (
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

export const serializeAws_restXmlNoInputAndOutputCommand = async (
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

export const serializeAws_restXmlNullAndEmptyHeadersClientCommand = async (
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

export const serializeAws_restXmlNullAndEmptyHeadersServerCommand = async (
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

export const serializeAws_restXmlOmitsNullSerializesEmptyStringCommand = async (
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

export const serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand = async (
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

export const serializeAws_restXmlQueryParamsAsStringListMapCommand = async (
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

export const serializeAws_restXmlQueryPrecedenceCommand = async (
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

export const serializeAws_restXmlRecursiveShapesCommand = async (
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
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested1(input.nested, context).withName("nested");
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

export const serializeAws_restXmlSimpleScalarPropertiesCommand = async (
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

export const serializeAws_restXmlTimestampFormatHeadersCommand = async (
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

export const serializeAws_restXmlXmlAttributesCommand = async (
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

export const serializeAws_restXmlXmlAttributesOnPayloadCommand = async (
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
    body = serializeAws_restXmlXmlAttributesInputOutput(input.payload, context);
  }
  let contents: any;
  if (input.payload !== undefined) {
    contents = serializeAws_restXmlXmlAttributesInputOutput(input.payload, context);
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

export const serializeAws_restXmlXmlBlobsCommand = async (
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

export const serializeAws_restXmlXmlEmptyBlobsCommand = async (
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

export const serializeAws_restXmlXmlEmptyListsCommand = async (
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
    const nodes = serializeAws_restXmlBooleanList(input.booleanList, context);
    const containerNode = new __XmlNode("booleanList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.enumList !== undefined) {
    const nodes = serializeAws_restXmlFooEnumList(input.enumList, context);
    const containerNode = new __XmlNode("enumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.flattenedList !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(input.flattenedList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedList2 !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(input.flattenedList2, context);
    nodes.map((node: any) => {
      node = node.withName("customName");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithMemberNamespace !== undefined) {
    const nodes = serializeAws_restXmlListWithMemberNamespace(input.flattenedListWithMemberNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithMemberNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithNamespace !== undefined) {
    const nodes = serializeAws_restXmlListWithNamespace(input.flattenedListWithNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedStructureList !== undefined) {
    const nodes = serializeAws_restXmlStructureList(input.flattenedStructureList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedStructureList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.intEnumList !== undefined) {
    const nodes = serializeAws_restXmlIntegerEnumList(input.intEnumList, context);
    const containerNode = new __XmlNode("intEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.integerList !== undefined) {
    const nodes = serializeAws_restXmlIntegerList(input.integerList, context);
    const containerNode = new __XmlNode("integerList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.nestedStringList !== undefined) {
    const nodes = serializeAws_restXmlNestedStringList(input.nestedStringList, context);
    const containerNode = new __XmlNode("nestedStringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.renamedListMembers !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(input.renamedListMembers, context);
    const containerNode = new __XmlNode("renamed");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringList !== undefined) {
    const nodes = serializeAws_restXmlStringList(input.stringList, context);
    const containerNode = new __XmlNode("stringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringSet !== undefined) {
    const nodes = serializeAws_restXmlStringSet(input.stringSet, context);
    const containerNode = new __XmlNode("stringSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.structureList !== undefined) {
    const nodes = serializeAws_restXmlStructureList(input.structureList, context);
    const containerNode = new __XmlNode("myStructureList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.timestampList !== undefined) {
    const nodes = serializeAws_restXmlTimestampList(input.timestampList, context);
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

export const serializeAws_restXmlXmlEmptyMapsCommand = async (
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
    const nodes = serializeAws_restXmlXmlMapsInputOutputMap(input.myMap, context);
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

export const serializeAws_restXmlXmlEmptyStringsCommand = async (
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

export const serializeAws_restXmlXmlEnumsCommand = async (
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
    const nodes = serializeAws_restXmlFooEnumList(input.fooEnumList, context);
    const containerNode = new __XmlNode("fooEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.fooEnumMap !== undefined) {
    const nodes = serializeAws_restXmlFooEnumMap(input.fooEnumMap, context);
    const containerNode = new __XmlNode("fooEnumMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.fooEnumSet !== undefined) {
    const nodes = serializeAws_restXmlFooEnumSet(input.fooEnumSet, context);
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

export const serializeAws_restXmlXmlIntEnumsCommand = async (
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
    const nodes = serializeAws_restXmlIntegerEnumList(input.intEnumList, context);
    const containerNode = new __XmlNode("intEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.intEnumMap !== undefined) {
    const nodes = serializeAws_restXmlIntegerEnumMap(input.intEnumMap, context);
    const containerNode = new __XmlNode("intEnumMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.intEnumSet !== undefined) {
    const nodes = serializeAws_restXmlIntegerEnumSet(input.intEnumSet, context);
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

export const serializeAws_restXmlXmlListsCommand = async (
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
    const nodes = serializeAws_restXmlBooleanList(input.booleanList, context);
    const containerNode = new __XmlNode("booleanList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.enumList !== undefined) {
    const nodes = serializeAws_restXmlFooEnumList(input.enumList, context);
    const containerNode = new __XmlNode("enumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.flattenedList !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(input.flattenedList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedList2 !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(input.flattenedList2, context);
    nodes.map((node: any) => {
      node = node.withName("customName");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithMemberNamespace !== undefined) {
    const nodes = serializeAws_restXmlListWithMemberNamespace(input.flattenedListWithMemberNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithMemberNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedListWithNamespace !== undefined) {
    const nodes = serializeAws_restXmlListWithNamespace(input.flattenedListWithNamespace, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedListWithNamespace");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedStructureList !== undefined) {
    const nodes = serializeAws_restXmlStructureList(input.flattenedStructureList, context);
    nodes.map((node: any) => {
      node = node.withName("flattenedStructureList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.intEnumList !== undefined) {
    const nodes = serializeAws_restXmlIntegerEnumList(input.intEnumList, context);
    const containerNode = new __XmlNode("intEnumList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.integerList !== undefined) {
    const nodes = serializeAws_restXmlIntegerList(input.integerList, context);
    const containerNode = new __XmlNode("integerList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.nestedStringList !== undefined) {
    const nodes = serializeAws_restXmlNestedStringList(input.nestedStringList, context);
    const containerNode = new __XmlNode("nestedStringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.renamedListMembers !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(input.renamedListMembers, context);
    const containerNode = new __XmlNode("renamed");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringList !== undefined) {
    const nodes = serializeAws_restXmlStringList(input.stringList, context);
    const containerNode = new __XmlNode("stringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.stringSet !== undefined) {
    const nodes = serializeAws_restXmlStringSet(input.stringSet, context);
    const containerNode = new __XmlNode("stringSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.structureList !== undefined) {
    const nodes = serializeAws_restXmlStructureList(input.structureList, context);
    const containerNode = new __XmlNode("myStructureList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.timestampList !== undefined) {
    const nodes = serializeAws_restXmlTimestampList(input.timestampList, context);
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

export const serializeAws_restXmlXmlMapsCommand = async (
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
    const nodes = serializeAws_restXmlXmlMapsInputOutputMap(input.myMap, context);
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

export const serializeAws_restXmlXmlMapsXmlNameCommand = async (
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
    const nodes = serializeAws_restXmlXmlMapsXmlNameInputOutputMap(input.myMap, context);
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

export const serializeAws_restXmlXmlNamespacesCommand = async (
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
    const node = serializeAws_restXmlXmlNamespaceNested(input.nested, context).withName("nested");
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

export const serializeAws_restXmlXmlTimestampsCommand = async (
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

export const serializeAws_restXmlXmlUnionsCommand = async (
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
    const node = serializeAws_restXmlXmlUnionShape(input.unionValue, context).withName("unionValue");
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

export const deserializeAws_restXmlAllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlAllQueryStringTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlAllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlBodyWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BodyWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlBodyWithXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlPayloadWithXmlName(data["nested"], context);
  }
  return contents;
};

const deserializeAws_restXmlBodyWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BodyWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlConstantAndVariableQueryStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlConstantQueryStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDatetimeOffsetsCommandError(output, context);
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

const deserializeAws_restXmlDatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlEmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlEndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlEndpointOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlEndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlEndpointWithHostLabelHeaderOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlEndpointWithHostLabelHeaderOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlEndpointWithHostLabelHeaderOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlEndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlEndpointWithHostLabelOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlEndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlFlattenedXmlMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlFlattenedXmlMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined) {
    contents.myMap = deserializeAws_restXmlFooEnumMap(__getArrayIfSingleItem(data["myMap"]), context);
  }
  return contents;
};

const deserializeAws_restXmlFlattenedXmlMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KVP === "") {
    contents.myMap = {};
  } else if (data["KVP"] !== undefined) {
    contents.myMap = deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap(
      __getArrayIfSingleItem(data["KVP"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KVP === "") {
    contents.myMap = {};
  } else if (data["KVP"] !== undefined) {
    contents.myMap = deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceOutputMap(
      __getArrayIfSingleItem(data["KVP"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGreetingWithErrorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    greeting: [, output.headers["x-greeting"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlGreetingWithErrorsCommandError = async (
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
      throw await deserializeAws_restXmlComplexErrorResponse(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.restxml#InvalidGreeting":
      throw await deserializeAws_restXmlInvalidGreetingResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlHttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadTraitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

const deserializeAws_restXmlHttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    foo: [, output.headers["x-foo"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return contents;
};

const deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithMemberXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = deserializeAws_restXmlPayloadWithXmlName(data, context);
  return contents;
};

const deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithMemberXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadWithStructureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = deserializeAws_restXmlNestedPayload(data, context);
  return contents;
};

const deserializeAws_restXmlHttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPayloadWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadWithXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = deserializeAws_restXmlPayloadWithXmlName(data, context);
  return contents;
};

const deserializeAws_restXmlHttpPayloadWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = deserializeAws_restXmlPayloadWithXmlNamespace(data, context);
  return contents;
};

const deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.nested = deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(data, context);
  return contents;
};

const deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpPrefixHeadersCommandError(output, context);
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

const deserializeAws_restXmlHttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpRequestWithFloatLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpRequestWithFloatLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlHttpRequestWithFloatLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpRequestWithLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlHttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHttpResponseCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHttpResponseCodeCommandError(output, context);
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

const deserializeAws_restXmlHttpResponseCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlIgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError(output, context);
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

const deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlInputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlInputAndOutputWithHeadersCommandError(output, context);
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

const deserializeAws_restXmlInputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlNestedXmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedXmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlNestedXmlMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flatNestedMap === "") {
    contents.flatNestedMap = {};
  } else if (data["flatNestedMap"] !== undefined) {
    contents.flatNestedMap = deserializeAws_restXmlNestedMap(__getArrayIfSingleItem(data["flatNestedMap"]), context);
  }
  if (data.nestedMap === "") {
    contents.nestedMap = {};
  } else if (data["nestedMap"] !== undefined && data["nestedMap"]["entry"] !== undefined) {
    contents.nestedMap = deserializeAws_restXmlNestedMap(__getArrayIfSingleItem(data["nestedMap"]["entry"]), context);
  }
  return contents;
};

const deserializeAws_restXmlNestedXmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedXmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlNoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlNoInputAndNoOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlNoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlNoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlNoInputAndOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlNoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlNullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlNullAndEmptyHeadersClientCommandError(output, context);
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

const deserializeAws_restXmlNullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlNullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlNullAndEmptyHeadersServerCommandError(output, context);
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

const deserializeAws_restXmlNullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlQueryParamsAsStringListMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlQueryParamsAsStringListMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlQueryParamsAsStringListMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlQueryPrecedenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlQueryPrecedenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlQueryPrecedenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlRecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRecursiveShapesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlRecursiveShapesInputOutputNested1(data["nested"], context);
  }
  return contents;
};

const deserializeAws_restXmlRecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlSimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlSimpleScalarPropertiesCommandError(output, context);
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

const deserializeAws_restXmlSimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlTimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlTimestampFormatHeadersCommandError(output, context);
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

const deserializeAws_restXmlTimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlAttributesCommandError(output, context);
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

const deserializeAws_restXmlXmlAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlAttributesOnPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlAttributesOnPayloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.payload = deserializeAws_restXmlXmlAttributesInputOutput(data, context);
  return contents;
};

const deserializeAws_restXmlXmlAttributesOnPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlBlobsCommandError(output, context);
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

const deserializeAws_restXmlXmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlEmptyBlobsCommandError(output, context);
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

const deserializeAws_restXmlXmlEmptyBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlEmptyListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.booleanList === "") {
    contents.booleanList = [];
  } else if (data["booleanList"] !== undefined && data["booleanList"]["member"] !== undefined) {
    contents.booleanList = deserializeAws_restXmlBooleanList(
      __getArrayIfSingleItem(data["booleanList"]["member"]),
      context
    );
  }
  if (data.enumList === "") {
    contents.enumList = [];
  } else if (data["enumList"] !== undefined && data["enumList"]["member"] !== undefined) {
    contents.enumList = deserializeAws_restXmlFooEnumList(__getArrayIfSingleItem(data["enumList"]["member"]), context);
  }
  if (data.flattenedList === "") {
    contents.flattenedList = [];
  } else if (data["flattenedList"] !== undefined) {
    contents.flattenedList = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["flattenedList"]),
      context
    );
  }
  if (data.customName === "") {
    contents.flattenedList2 = [];
  } else if (data["customName"] !== undefined) {
    contents.flattenedList2 = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["customName"]),
      context
    );
  }
  if (data.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (data["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = deserializeAws_restXmlListWithMemberNamespace(
      __getArrayIfSingleItem(data["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (data.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (data["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = deserializeAws_restXmlListWithNamespace(
      __getArrayIfSingleItem(data["flattenedListWithNamespace"]),
      context
    );
  }
  if (data.flattenedStructureList === "") {
    contents.flattenedStructureList = [];
  } else if (data["flattenedStructureList"] !== undefined) {
    contents.flattenedStructureList = deserializeAws_restXmlStructureList(
      __getArrayIfSingleItem(data["flattenedStructureList"]),
      context
    );
  }
  if (data.intEnumList === "") {
    contents.intEnumList = [];
  } else if (data["intEnumList"] !== undefined && data["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = deserializeAws_restXmlIntegerEnumList(
      __getArrayIfSingleItem(data["intEnumList"]["member"]),
      context
    );
  }
  if (data.integerList === "") {
    contents.integerList = [];
  } else if (data["integerList"] !== undefined && data["integerList"]["member"] !== undefined) {
    contents.integerList = deserializeAws_restXmlIntegerList(
      __getArrayIfSingleItem(data["integerList"]["member"]),
      context
    );
  }
  if (data.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (data["nestedStringList"] !== undefined && data["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = deserializeAws_restXmlNestedStringList(
      __getArrayIfSingleItem(data["nestedStringList"]["member"]),
      context
    );
  }
  if (data.renamed === "") {
    contents.renamedListMembers = [];
  } else if (data["renamed"] !== undefined && data["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["renamed"]["item"]),
      context
    );
  }
  if (data.stringList === "") {
    contents.stringList = [];
  } else if (data["stringList"] !== undefined && data["stringList"]["member"] !== undefined) {
    contents.stringList = deserializeAws_restXmlStringList(
      __getArrayIfSingleItem(data["stringList"]["member"]),
      context
    );
  }
  if (data.stringSet === "") {
    contents.stringSet = [];
  } else if (data["stringSet"] !== undefined && data["stringSet"]["member"] !== undefined) {
    contents.stringSet = deserializeAws_restXmlStringSet(__getArrayIfSingleItem(data["stringSet"]["member"]), context);
  }
  if (data.myStructureList === "") {
    contents.structureList = [];
  } else if (data["myStructureList"] !== undefined && data["myStructureList"]["item"] !== undefined) {
    contents.structureList = deserializeAws_restXmlStructureList(
      __getArrayIfSingleItem(data["myStructureList"]["item"]),
      context
    );
  }
  if (data.timestampList === "") {
    contents.timestampList = [];
  } else if (data["timestampList"] !== undefined && data["timestampList"]["member"] !== undefined) {
    contents.timestampList = deserializeAws_restXmlTimestampList(
      __getArrayIfSingleItem(data["timestampList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlEmptyMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlEmptyMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_restXmlXmlMapsInputOutputMap(
      __getArrayIfSingleItem(data["myMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlEmptyMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlEmptyStringsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyStringsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlEmptyStringsCommandError(output, context);
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

const deserializeAws_restXmlXmlEmptyStringsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyStringsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlEnumsCommandError(output, context);
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
    contents.fooEnumList = deserializeAws_restXmlFooEnumList(
      __getArrayIfSingleItem(data["fooEnumList"]["member"]),
      context
    );
  }
  if (data.fooEnumMap === "") {
    contents.fooEnumMap = {};
  } else if (data["fooEnumMap"] !== undefined && data["fooEnumMap"]["entry"] !== undefined) {
    contents.fooEnumMap = deserializeAws_restXmlFooEnumMap(
      __getArrayIfSingleItem(data["fooEnumMap"]["entry"]),
      context
    );
  }
  if (data.fooEnumSet === "") {
    contents.fooEnumSet = [];
  } else if (data["fooEnumSet"] !== undefined && data["fooEnumSet"]["member"] !== undefined) {
    contents.fooEnumSet = deserializeAws_restXmlFooEnumSet(
      __getArrayIfSingleItem(data["fooEnumSet"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlIntEnumsCommandError(output, context);
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
    contents.intEnumList = deserializeAws_restXmlIntegerEnumList(
      __getArrayIfSingleItem(data["intEnumList"]["member"]),
      context
    );
  }
  if (data.intEnumMap === "") {
    contents.intEnumMap = {};
  } else if (data["intEnumMap"] !== undefined && data["intEnumMap"]["entry"] !== undefined) {
    contents.intEnumMap = deserializeAws_restXmlIntegerEnumMap(
      __getArrayIfSingleItem(data["intEnumMap"]["entry"]),
      context
    );
  }
  if (data.intEnumSet === "") {
    contents.intEnumSet = [];
  } else if (data["intEnumSet"] !== undefined && data["intEnumSet"]["member"] !== undefined) {
    contents.intEnumSet = deserializeAws_restXmlIntegerEnumSet(
      __getArrayIfSingleItem(data["intEnumSet"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlListsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.booleanList === "") {
    contents.booleanList = [];
  } else if (data["booleanList"] !== undefined && data["booleanList"]["member"] !== undefined) {
    contents.booleanList = deserializeAws_restXmlBooleanList(
      __getArrayIfSingleItem(data["booleanList"]["member"]),
      context
    );
  }
  if (data.enumList === "") {
    contents.enumList = [];
  } else if (data["enumList"] !== undefined && data["enumList"]["member"] !== undefined) {
    contents.enumList = deserializeAws_restXmlFooEnumList(__getArrayIfSingleItem(data["enumList"]["member"]), context);
  }
  if (data.flattenedList === "") {
    contents.flattenedList = [];
  } else if (data["flattenedList"] !== undefined) {
    contents.flattenedList = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["flattenedList"]),
      context
    );
  }
  if (data.customName === "") {
    contents.flattenedList2 = [];
  } else if (data["customName"] !== undefined) {
    contents.flattenedList2 = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["customName"]),
      context
    );
  }
  if (data.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (data["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = deserializeAws_restXmlListWithMemberNamespace(
      __getArrayIfSingleItem(data["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (data.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (data["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = deserializeAws_restXmlListWithNamespace(
      __getArrayIfSingleItem(data["flattenedListWithNamespace"]),
      context
    );
  }
  if (data.flattenedStructureList === "") {
    contents.flattenedStructureList = [];
  } else if (data["flattenedStructureList"] !== undefined) {
    contents.flattenedStructureList = deserializeAws_restXmlStructureList(
      __getArrayIfSingleItem(data["flattenedStructureList"]),
      context
    );
  }
  if (data.intEnumList === "") {
    contents.intEnumList = [];
  } else if (data["intEnumList"] !== undefined && data["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = deserializeAws_restXmlIntegerEnumList(
      __getArrayIfSingleItem(data["intEnumList"]["member"]),
      context
    );
  }
  if (data.integerList === "") {
    contents.integerList = [];
  } else if (data["integerList"] !== undefined && data["integerList"]["member"] !== undefined) {
    contents.integerList = deserializeAws_restXmlIntegerList(
      __getArrayIfSingleItem(data["integerList"]["member"]),
      context
    );
  }
  if (data.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (data["nestedStringList"] !== undefined && data["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = deserializeAws_restXmlNestedStringList(
      __getArrayIfSingleItem(data["nestedStringList"]["member"]),
      context
    );
  }
  if (data.renamed === "") {
    contents.renamedListMembers = [];
  } else if (data["renamed"] !== undefined && data["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["renamed"]["item"]),
      context
    );
  }
  if (data.stringList === "") {
    contents.stringList = [];
  } else if (data["stringList"] !== undefined && data["stringList"]["member"] !== undefined) {
    contents.stringList = deserializeAws_restXmlStringList(
      __getArrayIfSingleItem(data["stringList"]["member"]),
      context
    );
  }
  if (data.stringSet === "") {
    contents.stringSet = [];
  } else if (data["stringSet"] !== undefined && data["stringSet"]["member"] !== undefined) {
    contents.stringSet = deserializeAws_restXmlStringSet(__getArrayIfSingleItem(data["stringSet"]["member"]), context);
  }
  if (data.myStructureList === "") {
    contents.structureList = [];
  } else if (data["myStructureList"] !== undefined && data["myStructureList"]["item"] !== undefined) {
    contents.structureList = deserializeAws_restXmlStructureList(
      __getArrayIfSingleItem(data["myStructureList"]["item"]),
      context
    );
  }
  if (data.timestampList === "") {
    contents.timestampList = [];
  } else if (data["timestampList"] !== undefined && data["timestampList"]["member"] !== undefined) {
    contents.timestampList = deserializeAws_restXmlTimestampList(
      __getArrayIfSingleItem(data["timestampList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_restXmlXmlMapsInputOutputMap(
      __getArrayIfSingleItem(data["myMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlMapsXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlMapsXmlNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.myMap === "") {
    contents.myMap = {};
  } else if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_restXmlXmlMapsXmlNameInputOutputMap(
      __getArrayIfSingleItem(data["myMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlMapsXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlNamespacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlXmlNamespaceNested(data["nested"], context);
  }
  return contents;
};

const deserializeAws_restXmlXmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlTimestampsCommandError(output, context);
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

const deserializeAws_restXmlXmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlXmlUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlUnionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlXmlUnionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unionValue === "") {
    // Pass empty tags.
  } else if (data["unionValue"] !== undefined) {
    contents.unionValue = deserializeAws_restXmlXmlUnionShape(__expectUnion(data["unionValue"]), context);
  }
  return contents;
};

const deserializeAws_restXmlXmlUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const map = __map;
const deserializeAws_restXmlComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const contents: any = map({
    Header: [, parsedOutput.headers["x-header"]],
  });
  const data: any = parsedOutput.body.Error;
  if (data["Nested"] !== undefined) {
    contents.Nested = deserializeAws_restXmlComplexNestedErrorData(data["Nested"], context);
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

const deserializeAws_restXmlInvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
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

const serializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlListWithMemberNamespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      node.addAttribute("xmlns", "https://xml-member.example.com");
      return node.withName("member");
    });
};

const serializeAws_restXmlListWithNamespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlNestedMap = (
  input: Record<string, Record<string, FooEnum | string>>,
  context: __SerdeContext
): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = serializeAws_restXmlFooEnumMap(input[key], context);
      entryNode.addChildNode(
        node.reduce((acc: __XmlNode, workingNode: any) => {
          return acc.addChildNode(workingNode);
        }, new __XmlNode("value"))
      );
      return entryNode;
    });
};

const serializeAws_restXmlNestedPayload = (input: NestedPayload, context: __SerdeContext): any => {
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

const serializeAws_restXmlPayloadWithXmlName = (input: PayloadWithXmlName, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Hello");
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPayloadWithXmlNamespace = (input: PayloadWithXmlNamespace, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespace");
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix = (
  input: PayloadWithXmlNamespaceAndPrefix,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespaceAndPrefix");
  if (input.name != null) {
    const node = __XmlNode.of("String", input.name).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested1");
  if (input.foo != null) {
    const node = __XmlNode.of("String", input.foo).withName("foo");
    bodyNode.addChildNode(node);
  }
  if (input.nested != null) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested2(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested2");
  if (input.bar != null) {
    const node = __XmlNode.of("String", input.bar).withName("bar");
    bodyNode.addChildNode(node);
  }
  if (input.recursiveMember != null) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested1(input.recursiveMember, context).withName(
      "recursiveMember"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRenamedListMembers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("item");
    });
};

const serializeAws_restXmlStructureList = (input: StructureListMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlStructureListMember(entry, context);
      return node.withName("item");
    });
};

const serializeAws_restXmlStructureListMember = (input: StructureListMember, context: __SerdeContext): any => {
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

const serializeAws_restXmlXmlAttributesInputOutput = (
  input: XmlAttributesInputOutput,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlXmlMapsInputOutputMap = (
  input: Record<string, GreetingStruct>,
  context: __SerdeContext
): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = serializeAws_restXmlGreetingStruct(input[key], context);
      entryNode.addChildNode(node.withName("value"));
      return entryNode;
    });
};

const serializeAws_restXmlXmlMapsXmlNameInputOutputMap = (
  input: Record<string, GreetingStruct>,
  context: __SerdeContext
): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("String", key).withName("Attribute");
      entryNode.addChildNode(keyNode);
      let node;
      node = serializeAws_restXmlGreetingStruct(input[key], context);
      entryNode.addChildNode(node.withName("Setting"));
      return entryNode;
    });
};

const serializeAws_restXmlXmlNamespacedList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      node.addAttribute("xmlns", "http://bux.com");
      return node.withName("member");
    });
};

const serializeAws_restXmlXmlNamespaceNested = (input: XmlNamespaceNested, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("XmlNamespaceNested");
  if (input.foo != null) {
    const node = __XmlNode.of("String", input.foo).withName("foo");
    node.addAttribute("xmlns:baz", "http://baz.com");
    bodyNode.addChildNode(node);
  }
  if (input.values != null) {
    const nodes = serializeAws_restXmlXmlNamespacedList(input.values, context);
    const containerNode = new __XmlNode("values");
    containerNode.addAttribute("xmlns", "http://qux.com");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlXmlNestedUnionStruct = (input: XmlNestedUnionStruct, context: __SerdeContext): any => {
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

const serializeAws_restXmlXmlUnionShape = (input: XmlUnionShape, context: __SerdeContext): any => {
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
      const node = serializeAws_restXmlXmlUnionShape(value, context).withName("unionValue");
      bodyNode.addChildNode(node);
    },
    structValue: (value) => {
      const node = serializeAws_restXmlXmlNestedUnionStruct(value, context).withName("structValue");
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

const serializeAws_restXmlBooleanList = (input: boolean[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Boolean", String(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlFooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("FooEnum", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlFooEnumMap = (input: Record<string, FooEnum | string>, context: __SerdeContext): any => {
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

const serializeAws_restXmlFooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("FooEnum", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlGreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GreetingStruct");
  if (input.hi != null) {
    const node = __XmlNode.of("String", input.hi).withName("hi");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlIntegerEnumList = (input: (IntegerEnum | number)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("IntegerEnum", String(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlIntegerEnumMap = (
  input: Record<string, IntegerEnum | number>,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlIntegerEnumSet = (input: (IntegerEnum | number)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("IntegerEnum", String(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlIntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Integer", String(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlNestedStringList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlStringList(entry, context);
      return node.reduce((acc: __XmlNode, workingNode: any) => {
        return acc.addChildNode(workingNode);
      }, new __XmlNode("member"));
    });
};

const serializeAws_restXmlStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlStringSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("String", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlTimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Timestamp", entry.toISOString().split(".")[0] + "Z");
      return node.withName("member");
    });
};

const deserializeAws_restXmlComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {
    Foo: undefined,
  };
  if (output["Foo"] !== undefined) {
    contents.Foo = __expectString(output["Foo"]);
  }
  return contents;
};

const deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["V"] === null) {
      return acc;
    }
    acc[pair["K"]] = __expectString(pair["V"]) as any;
    return acc;
  }, {});
};

const deserializeAws_restXmlFlattenedXmlMapWithXmlNamespaceOutputMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["V"] === null) {
      return acc;
    }
    acc[pair["K"]] = __expectString(pair["V"]) as any;
    return acc;
  }, {});
};

const deserializeAws_restXmlListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlNestedMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, FooEnum | string>> => {
  return output.reduce((acc: any, pair: any) => {
    if (__getArrayIfSingleItem(pair["value"]["entry"]) === null) {
      return acc;
    }
    acc[pair["key"]] = deserializeAws_restXmlFooEnumMap(__getArrayIfSingleItem(pair["value"]["entry"]), context);
    return acc;
  }, {});
};

const deserializeAws_restXmlNestedPayload = (output: any, context: __SerdeContext): NestedPayload => {
  const contents: any = {
    greeting: undefined,
    name: undefined,
  };
  if (output["greeting"] !== undefined) {
    contents.greeting = __expectString(output["greeting"]);
  }
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
  }
  return contents;
};

const deserializeAws_restXmlPayloadWithXmlName = (output: any, context: __SerdeContext): PayloadWithXmlName => {
  const contents: any = {
    name: undefined,
  };
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
  }
  return contents;
};

const deserializeAws_restXmlPayloadWithXmlNamespace = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespace => {
  const contents: any = {
    name: undefined,
  };
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
  }
  return contents;
};

const deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespaceAndPrefix => {
  const contents: any = {
    name: undefined,
  };
  if (output["name"] !== undefined) {
    contents.name = __expectString(output["name"]);
  }
  return contents;
};

const deserializeAws_restXmlRecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  const contents: any = {
    foo: undefined,
    nested: undefined,
  };
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlRecursiveShapesInputOutputNested2(output["nested"], context);
  }
  return contents;
};

const deserializeAws_restXmlRecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  const contents: any = {
    bar: undefined,
    recursiveMember: undefined,
  };
  if (output["bar"] !== undefined) {
    contents.bar = __expectString(output["bar"]);
  }
  if (output["recursiveMember"] !== undefined) {
    contents.recursiveMember = deserializeAws_restXmlRecursiveShapesInputOutputNested1(
      output["recursiveMember"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlRenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlStructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlStructureListMember(entry, context);
    });
};

const deserializeAws_restXmlStructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
  const contents: any = {
    a: undefined,
    b: undefined,
  };
  if (output["value"] !== undefined) {
    contents.a = __expectString(output["value"]);
  }
  if (output["other"] !== undefined) {
    contents.b = __expectString(output["other"]);
  }
  return contents;
};

const deserializeAws_restXmlXmlAttributesInputOutput = (
  output: any,
  context: __SerdeContext
): XmlAttributesInputOutput => {
  const contents: any = {
    foo: undefined,
    attr: undefined,
  };
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output["test"] !== undefined) {
    contents.attr = __expectString(output["test"]);
  }
  return contents;
};

const deserializeAws_restXmlXmlMapsInputOutputMap = (
  output: any,
  context: __SerdeContext
): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = deserializeAws_restXmlGreetingStruct(pair["value"], context);
    return acc;
  }, {});
};

const deserializeAws_restXmlXmlMapsXmlNameInputOutputMap = (
  output: any,
  context: __SerdeContext
): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Setting"] === null) {
      return acc;
    }
    acc[pair["Attribute"]] = deserializeAws_restXmlGreetingStruct(pair["Setting"], context);
    return acc;
  }, {});
};

const deserializeAws_restXmlXmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlXmlNamespaceNested = (output: any, context: __SerdeContext): XmlNamespaceNested => {
  const contents: any = {
    foo: undefined,
    values: undefined,
  };
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output.values === "") {
    contents.values = [];
  } else if (output["values"] !== undefined && output["values"]["member"] !== undefined) {
    contents.values = deserializeAws_restXmlXmlNamespacedList(
      __getArrayIfSingleItem(output["values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlXmlNestedUnionStruct = (output: any, context: __SerdeContext): XmlNestedUnionStruct => {
  const contents: any = {
    stringValue: undefined,
    booleanValue: undefined,
    byteValue: undefined,
    shortValue: undefined,
    integerValue: undefined,
    longValue: undefined,
    floatValue: undefined,
    doubleValue: undefined,
  };
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

const deserializeAws_restXmlXmlUnionShape = (output: any, context: __SerdeContext): XmlUnionShape => {
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
      unionValue: deserializeAws_restXmlXmlUnionShape(__expectUnion(output["unionValue"]), context),
    };
  }
  if (output["structValue"] !== undefined) {
    return {
      structValue: deserializeAws_restXmlXmlNestedUnionStruct(output["structValue"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlBooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

const deserializeAws_restXmlFooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlFooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_restXmlFooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlGreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  const contents: any = {
    hi: undefined,
  };
  if (output["hi"] !== undefined) {
    contents.hi = __expectString(output["hi"]);
  }
  return contents;
};

const deserializeAws_restXmlIntegerEnumList = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_restXmlIntegerEnumMap = (
  output: any,
  context: __SerdeContext
): Record<string, IntegerEnum | number> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __strictParseInt32(pair["value"]) as number;
    return acc;
  }, {});
};

const deserializeAws_restXmlIntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_restXmlIntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_restXmlNestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlStringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

const deserializeAws_restXmlStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlStringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlTimestampList = (output: any, context: __SerdeContext): Date[] => {
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
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
