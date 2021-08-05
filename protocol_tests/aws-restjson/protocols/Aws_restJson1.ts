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
  HttpPrefixHeadersResponseCommandInput,
  HttpPrefixHeadersResponseCommandOutput,
} from "../commands/HttpPrefixHeadersResponseCommand";
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
import { JsonBlobsCommandInput, JsonBlobsCommandOutput } from "../commands/JsonBlobsCommand";
import { JsonEnumsCommandInput, JsonEnumsCommandOutput } from "../commands/JsonEnumsCommand";
import { JsonListsCommandInput, JsonListsCommandOutput } from "../commands/JsonListsCommand";
import { JsonMapsCommandInput, JsonMapsCommandOutput } from "../commands/JsonMapsCommand";
import { JsonTimestampsCommandInput, JsonTimestampsCommandOutput } from "../commands/JsonTimestampsCommand";
import { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "../commands/JsonUnionsCommand";
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
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "../commands/TimestampFormatHeadersCommand";
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
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  dateToUtcString as __dateToUtcString,
  expectBoolean as __expectBoolean,
  expectNumber as __expectNumber,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  handleFloat as __handleFloat,
  parseBoolean as __parseBoolean,
  serializeFloat as __serializeFloat,
  splitEvery as __splitEvery,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AllQueryStringTypesCommand = async (
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AllQueryStringTypesInput";
  const query: any = {
    ...(input.queryParamsMapOfStringList !== undefined && input.queryParamsMapOfStringList),
    ...(input.queryString !== undefined && { String: input.queryString }),
    ...(input.queryStringList !== undefined && { StringList: (input.queryStringList || []).map((_entry) => _entry) }),
    ...(input.queryStringSet !== undefined && {
      StringSet: (Array.from(input.queryStringSet.values()) || []).map((_entry) => _entry),
    }),
    ...(input.queryByte !== undefined && { Byte: input.queryByte.toString() }),
    ...(input.queryShort !== undefined && { Short: input.queryShort.toString() }),
    ...(input.queryInteger !== undefined && { Integer: input.queryInteger.toString() }),
    ...(input.queryIntegerList !== undefined && {
      IntegerList: (input.queryIntegerList || []).map((_entry) => _entry.toString()),
    }),
    ...(input.queryIntegerSet !== undefined && {
      IntegerSet: (Array.from(input.queryIntegerSet.values()) || []).map((_entry) => _entry.toString()),
    }),
    ...(input.queryLong !== undefined && { Long: input.queryLong.toString() }),
    ...(input.queryFloat !== undefined && {
      Float: input.queryFloat % 1 == 0 ? input.queryFloat + ".0" : input.queryFloat.toString(),
    }),
    ...(input.queryDouble !== undefined && {
      Double: input.queryDouble % 1 == 0 ? input.queryDouble + ".0" : input.queryDouble.toString(),
    }),
    ...(input.queryDoubleList !== undefined && {
      DoubleList: (input.queryDoubleList || []).map((_entry) => (_entry % 1 == 0 ? _entry + ".0" : _entry.toString())),
    }),
    ...(input.queryBoolean !== undefined && { Boolean: input.queryBoolean.toString() }),
    ...(input.queryBooleanList !== undefined && {
      BooleanList: (input.queryBooleanList || []).map((_entry) => _entry.toString()),
    }),
    ...(input.queryTimestamp !== undefined && {
      Timestamp: (input.queryTimestamp.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.queryTimestampList !== undefined && {
      TimestampList: (input.queryTimestampList || []).map((_entry) =>
        (_entry.toISOString().split(".")[0] + "Z").toString()
      ),
    }),
    ...(input.queryEnum !== undefined && { Enum: input.queryEnum }),
    ...(input.queryEnumList !== undefined && { EnumList: (input.queryEnumList || []).map((_entry) => _entry) }),
  };
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ConstantAndVariableQueryString";
  const query: any = {
    foo: "bar",
    ...(input.baz !== undefined && { baz: input.baz }),
    ...(input.maybeSet !== undefined && { maybeSet: input.maybeSet }),
  };
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
  if (input.hello !== undefined) {
    const labelValue: string = input.hello;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: hello.");
    }
    resolvedPath = resolvedPath.replace("{hello}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: hello.");
  }
  const query: any = {
    foo: "bar",
    hello: "",
  };
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

export const serializeAws_restJson1DocumentTypeCommand = async (
  input: DocumentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DocumentType";
  let body: any;
  body = JSON.stringify({
    ...(input.documentValue !== undefined &&
      input.documentValue !== null && { documentValue: serializeAws_restJson1Document(input.documentValue, context) }),
    ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DocumentTypeAsPayload";
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
  let resolvedPath =
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EndpointOperation";
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EndpointWithHostLabelOperation";
  let body: any;
  body = JSON.stringify({
    ...(input.label !== undefined && input.label !== null && { label: input.label }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GreetingWithErrors";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HostWithPathOperation";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpChecksumRequired";
  let body: any;
  body = JSON.stringify({
    ...(input.foo !== undefined && input.foo !== null && { foo: input.foo }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EnumPayload";
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
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPayloadTraits";
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
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let resolvedPath =
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
  let resolvedPath =
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
  const headers: any = {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpPrefixHeaders";
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

export const serializeAws_restJson1HttpPrefixHeadersResponseCommand = async (
  input: HttpPrefixHeadersResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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
  if (input.float !== undefined) {
    const labelValue: string = input.float % 1 == 0 ? input.float + ".0" : input.float.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: float.");
    }
    resolvedPath = resolvedPath.replace("{float}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: float.");
  }
  if (input.double !== undefined) {
    const labelValue: string = input.double % 1 == 0 ? input.double + ".0" : input.double.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: double.");
    }
    resolvedPath = resolvedPath.replace("{double}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: double.");
  }
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
  if (input.foo !== undefined) {
    const labelValue: string = input.foo;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: foo.");
    }
    resolvedPath = resolvedPath.replace("{foo}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: foo.");
  }
  if (input.baz !== undefined) {
    const labelValue: string = input.baz;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: baz.");
    }
    resolvedPath = resolvedPath.replace(
      "{baz+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: baz.");
  }
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
  if (input.string !== undefined) {
    const labelValue: string = input.string;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: string.");
    }
    resolvedPath = resolvedPath.replace("{string}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: string.");
  }
  if (input.short !== undefined) {
    const labelValue: string = input.short.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: short.");
    }
    resolvedPath = resolvedPath.replace("{short}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: short.");
  }
  if (input.integer !== undefined) {
    const labelValue: string = input.integer.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: integer.");
    }
    resolvedPath = resolvedPath.replace("{integer}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: integer.");
  }
  if (input.long !== undefined) {
    const labelValue: string = input.long.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: long.");
    }
    resolvedPath = resolvedPath.replace("{long}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: long.");
  }
  if (input.float !== undefined) {
    const labelValue: string = input.float % 1 == 0 ? input.float + ".0" : input.float.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: float.");
    }
    resolvedPath = resolvedPath.replace("{float}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: float.");
  }
  if (input.double !== undefined) {
    const labelValue: string = input.double % 1 == 0 ? input.double + ".0" : input.double.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: double.");
    }
    resolvedPath = resolvedPath.replace("{double}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: double.");
  }
  if (input.boolean !== undefined) {
    const labelValue: string = input.boolean.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: boolean.");
    }
    resolvedPath = resolvedPath.replace("{boolean}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: boolean.");
  }
  if (input.timestamp !== undefined) {
    const labelValue: string = (input.timestamp.toISOString().split(".")[0] + "Z").toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: timestamp.");
    }
    resolvedPath = resolvedPath.replace("{timestamp}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: timestamp.");
  }
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
  if (input.memberEpochSeconds !== undefined) {
    const labelValue: string = Math.round(input.memberEpochSeconds.getTime() / 1000).toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: memberEpochSeconds.");
    }
    resolvedPath = resolvedPath.replace("{memberEpochSeconds}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: memberEpochSeconds.");
  }
  if (input.memberHttpDate !== undefined) {
    const labelValue: string = __dateToUtcString(input.memberHttpDate).toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: memberHttpDate.");
    }
    resolvedPath = resolvedPath.replace("{memberHttpDate}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: memberHttpDate.");
  }
  if (input.memberDateTime !== undefined) {
    const labelValue: string = (input.memberDateTime.toISOString().split(".")[0] + "Z").toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: memberDateTime.");
    }
    resolvedPath = resolvedPath.replace("{memberDateTime}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: memberDateTime.");
  }
  if (input.defaultFormat !== undefined) {
    const labelValue: string = (input.defaultFormat.toISOString().split(".")[0] + "Z").toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: defaultFormat.");
    }
    resolvedPath = resolvedPath.replace("{defaultFormat}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: defaultFormat.");
  }
  if (input.targetEpochSeconds !== undefined) {
    const labelValue: string = Math.round(input.targetEpochSeconds.getTime() / 1000).toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: targetEpochSeconds.");
    }
    resolvedPath = resolvedPath.replace("{targetEpochSeconds}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: targetEpochSeconds.");
  }
  if (input.targetHttpDate !== undefined) {
    const labelValue: string = __dateToUtcString(input.targetHttpDate).toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: targetHttpDate.");
    }
    resolvedPath = resolvedPath.replace("{targetHttpDate}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: targetHttpDate.");
  }
  if (input.targetDateTime !== undefined) {
    const labelValue: string = (input.targetDateTime.toISOString().split(".")[0] + "Z").toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: targetDateTime.");
    }
    resolvedPath = resolvedPath.replace("{targetDateTime}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: targetDateTime.");
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/HttpResponseCode";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StringPayload";
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
  let resolvedPath =
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
  const headers: any = {
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
  let resolvedPath =
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonBlobs";
  let body: any;
  body = JSON.stringify({
    ...(input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonEnums";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonLists";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonMaps";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonTimestamps";
  let body: any;
  body = JSON.stringify({
    ...(input.dateTime !== undefined &&
      input.dateTime !== null && { dateTime: input.dateTime.toISOString().split(".")[0] + "Z" }),
    ...(input.epochSeconds !== undefined &&
      input.epochSeconds !== null && { epochSeconds: Math.round(input.epochSeconds.getTime() / 1000) }),
    ...(input.httpDate !== undefined && input.httpDate !== null && { httpDate: __dateToUtcString(input.httpDate) }),
    ...(input.normal !== undefined && input.normal !== null && { normal: Math.round(input.normal.getTime() / 1000) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/JsonUnions";
  let body: any;
  body = JSON.stringify({
    ...(input.contents !== undefined &&
      input.contents !== null && { contents: serializeAws_restJson1MyUnion(input.contents, context) }),
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

export const serializeAws_restJson1MediaTypeHeaderCommand = async (
  input: MediaTypeHeaderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.json) && {
      "x-json": Buffer.from(__LazyJsonString.fromObject(input.json!)).toString("base64"),
    }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/MediaTypeHeader";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NoInputAndNoOutput";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/NoInputAndOutputOutput";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.a) && { "x-a": input.a! }),
    ...(isSerializableHeaderValue(input.b) && { "x-b": input.b! }),
    ...(isSerializableHeaderValue(input.c) && { "x-c": (input.c! || []).map((_entry) => _entry).join(", ") }),
  };
  let resolvedPath =
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.a) && { "x-a": input.a! }),
    ...(isSerializableHeaderValue(input.b) && { "x-b": input.b! }),
    ...(isSerializableHeaderValue(input.c) && { "x-c": (input.c! || []).map((_entry) => _entry).join(", ") }),
  };
  let resolvedPath =
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/OmitsNullSerializesEmptyString";
  const query: any = {
    ...(input.nullValue !== undefined && { Null: input.nullValue }),
    ...(input.emptyString !== undefined && { Empty: input.emptyString }),
  };
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

export const serializeAws_restJson1QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/QueryIdempotencyTokenAutoFill";
  const query: any = {
    ...(input.token !== undefined && { token: input.token }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StringListMap";
  const query: any = {
    ...(input.foo !== undefined && input.foo),
    ...(input.qux !== undefined && { corge: input.qux }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Precedence";
  const query: any = {
    ...(input.baz !== undefined && input.baz),
    ...(input.foo !== undefined && { bar: input.foo }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RecursiveShapes";
  let body: any;
  body = JSON.stringify({
    ...(input.nested !== undefined &&
      input.nested !== null && {
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SimpleScalarProperties";
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
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StreamingTraits";
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
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let resolvedPath =
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
  const headers: any = {
    "content-type": "text/plain",
    ...(isSerializableHeaderValue(input.foo) && { "x-foo": input.foo! }),
  };
  let resolvedPath =
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

export const serializeAws_restJson1TimestampFormatHeadersCommand = async (
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TimestampFormatHeaders";
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

export const deserializeAws_restJson1AllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AllQueryStringTypesCommandError(output, context);
  }
  const contents: AllQueryStringTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConstantAndVariableQueryStringCommandError(output, context);
  }
  const contents: ConstantAndVariableQueryStringCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConstantQueryStringCommandError(output, context);
  }
  const contents: ConstantQueryStringCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DocumentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DocumentTypeCommandError(output, context);
  }
  const contents: DocumentTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1DocumentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DocumentTypeAsPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DocumentTypeAsPayloadCommandError(output, context);
  }
  const contents: DocumentTypeAsPayloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    documentValue: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.documentValue = data;
  contents.documentValue = JSON.parse(data);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DocumentTypeAsPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DocumentTypeAsPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EmptyInputAndEmptyOutputCommandError(output, context);
  }
  const contents: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EndpointOperationCommandError(output, context);
  }
  const contents: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EndpointWithHostLabelOperationCommandError(output, context);
  }
  const contents: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GreetingWithErrorsCommandError(output, context);
  }
  const contents: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    greeting: undefined,
  };
  if (output.headers["x-greeting"] !== undefined) {
    contents.greeting = output.headers["x-greeting"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.restjson#ComplexError":
      response = {
        ...(await deserializeAws_restJson1ComplexErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FooError":
    case "aws.protocoltests.restjson#FooError":
      response = {
        ...(await deserializeAws_restJson1FooErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGreeting":
    case "aws.protocoltests.restjson#InvalidGreeting":
      response = {
        ...(await deserializeAws_restJson1InvalidGreetingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HostWithPathOperationCommandError(output, context);
  }
  const contents: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpChecksumRequiredCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpChecksumRequiredCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpChecksumRequiredCommandError(output, context);
  }
  const contents: HttpChecksumRequiredCommandOutput = {
    $metadata: deserializeMetadata(output),
    foo: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.foo !== undefined && data.foo !== null) {
    contents.foo = __expectString(data.foo);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpChecksumRequiredCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpChecksumRequiredCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpEnumPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpEnumPayloadCommandError(output, context);
  }
  const contents: HttpEnumPayloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    payload: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpEnumPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpEnumPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPayloadTraitsCommandError(output, context);
  }
  const contents: HttpPayloadTraitsCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1HttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: HttpPayloadTraitsWithMediaTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPayloadWithStructureCommandError(output, context);
  }
  const contents: HttpPayloadWithStructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restJson1NestedPayload(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPrefixHeadersCommandError(output, context);
  }
  const contents: HttpPrefixHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1HttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpPrefixHeadersResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpPrefixHeadersResponseCommandError(output, context);
  }
  const contents: HttpPrefixHeadersResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    prefixHeaders: undefined,
  };
  Object.keys(output.headers).forEach((header) => {
    if (contents.prefixHeaders === undefined) {
      contents.prefixHeaders = {};
    }
    if (header.startsWith("")) {
      contents.prefixHeaders[header.substring(0)] = output.headers[header];
    }
  });
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpPrefixHeadersResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpRequestWithFloatLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithFloatLabelsCommandError(output, context);
  }
  const contents: HttpRequestWithFloatLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpRequestWithFloatLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithFloatLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommandError(output, context);
  }
  const contents: HttpRequestWithGreedyLabelInPathCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithLabelsCommandError(output, context);
  }
  const contents: HttpRequestWithLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommandError(output, context);
  }
  const contents: HttpRequestWithLabelsAndTimestampFormatCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpResponseCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpResponseCodeCommandError(output, context);
  }
  const contents: HttpResponseCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Status: undefined,
  };
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpResponseCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpResponseCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1HttpStringPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1HttpStringPayloadCommandError(output, context);
  }
  const contents: HttpStringPayloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    payload: undefined,
  };
  const data: any = await collectBodyString(output.body, context);
  contents.payload = __expectString(data);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1HttpStringPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpStringPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1IgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1IgnoreQueryParamsInResponseCommandError(output, context);
  }
  const contents: IgnoreQueryParamsInResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    baz: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.baz !== undefined && data.baz !== null) {
    contents.baz = __expectString(data.baz);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1IgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InputAndOutputWithHeadersCommandError(output, context);
  }
  const contents: InputAndOutputWithHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1InputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1JsonBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonBlobsCommandError(output, context);
  }
  const contents: JsonBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    data: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.data !== undefined && data.data !== null) {
    contents.data = context.base64Decoder(data.data);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1JsonBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1JsonEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonEnumsCommandError(output, context);
  }
  const contents: JsonEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1JsonEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1JsonListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonListsCommandError(output, context);
  }
  const contents: JsonListsCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1JsonListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1JsonMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonMapsCommandError(output, context);
  }
  const contents: JsonMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1JsonMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1JsonTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonTimestampsCommandError(output, context);
  }
  const contents: JsonTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1JsonTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1JsonUnionsCommandError(output, context);
  }
  const contents: JsonUnionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    contents: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.contents !== undefined && data.contents !== null) {
    contents.contents = deserializeAws_restJson1MyUnion(data.contents, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1JsonUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1MediaTypeHeaderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MediaTypeHeaderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MediaTypeHeaderCommandError(output, context);
  }
  const contents: MediaTypeHeaderCommandOutput = {
    $metadata: deserializeMetadata(output),
    json: undefined,
  };
  if (output.headers["x-json"] !== undefined) {
    contents.json = new __LazyJsonString(Buffer.from(output.headers["x-json"], "base64").toString("ascii"));
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1MediaTypeHeaderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MediaTypeHeaderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NoInputAndNoOutputCommandError(output, context);
  }
  const contents: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NoInputAndOutputCommandError(output, context);
  }
  const contents: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1NullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NullAndEmptyHeadersClientCommandError(output, context);
  }
  const contents: NullAndEmptyHeadersClientCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1NullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1NullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1NullAndEmptyHeadersServerCommandError(output, context);
  }
  const contents: NullAndEmptyHeadersServerCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1NullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1OmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1OmitsNullSerializesEmptyStringCommandError(output, context);
  }
  const contents: OmitsNullSerializesEmptyStringCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1OmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  const contents: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1QueryParamsAsStringListMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryParamsAsStringListMapCommandError(output, context);
  }
  const contents: QueryParamsAsStringListMapCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1QueryParamsAsStringListMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryParamsAsStringListMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1QueryPrecedenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryPrecedenceCommandError(output, context);
  }
  const contents: QueryPrecedenceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1QueryPrecedenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryPrecedenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RecursiveShapesCommandError(output, context);
  }
  const contents: RecursiveShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nested !== undefined && data.nested !== null) {
    contents.nested = deserializeAws_restJson1RecursiveShapesInputOutputNested1(data.nested, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SimpleScalarPropertiesCommandError(output, context);
  }
  const contents: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StreamingTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamingTraitsCommandError(output, context);
  }
  const contents: StreamingTraitsCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1StreamingTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StreamingTraitsRequireLengthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamingTraitsRequireLengthCommandError(output, context);
  }
  const contents: StreamingTraitsRequireLengthCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1StreamingTraitsRequireLengthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsRequireLengthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StreamingTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: StreamingTraitsWithMediaTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1StreamingTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StreamingTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TimestampFormatHeadersCommandError(output, context);
  }
  const contents: TimestampFormatHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
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

const deserializeAws_restJson1TimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const contents: ComplexError = {
    name: "ComplexError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Header: undefined,
    Nested: undefined,
    TopLevel: undefined,
  };
  if (parsedOutput.headers["x-header"] !== undefined) {
    contents.Header = parsedOutput.headers["x-header"];
  }
  const data: any = parsedOutput.body;
  if (data.Nested !== undefined && data.Nested !== null) {
    contents.Nested = deserializeAws_restJson1ComplexNestedErrorData(data.Nested, context);
  }
  if (data.TopLevel !== undefined && data.TopLevel !== null) {
    contents.TopLevel = __expectString(data.TopLevel);
  }
  return contents;
};

const deserializeAws_restJson1FooErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const contents: FooError = {
    name: "FooError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const contents: InvalidGreeting = {
    name: "InvalidGreeting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
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

const deserializeAws_restJson1ComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  return {
    Foo: __expectString(output.Fooooo),
  } as any;
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

const deserializeAws_restJson1Document = (output: any, context: __SerdeContext): __DocumentType => {
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
