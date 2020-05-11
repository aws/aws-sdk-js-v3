import {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput
} from "../commands/AllQueryStringTypesCommand";
import {
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput
} from "../commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput
} from "../commands/ConstantQueryStringCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput
} from "../commands/EmptyInputAndEmptyOutputCommand";
import {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput
} from "../commands/GreetingWithErrorsCommand";
import {
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput
} from "../commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput
} from "../commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput
} from "../commands/HttpPayloadWithStructureCommand";
import {
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput
} from "../commands/HttpPrefixHeadersCommand";
import {
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput
} from "../commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput
} from "../commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput
} from "../commands/HttpRequestWithLabelsCommand";
import {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput
} from "../commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput
} from "../commands/InputAndOutputWithHeadersCommand";
import {
  JsonBlobsCommandInput,
  JsonBlobsCommandOutput
} from "../commands/JsonBlobsCommand";
import {
  JsonEnumsCommandInput,
  JsonEnumsCommandOutput
} from "../commands/JsonEnumsCommand";
import {
  JsonListsCommandInput,
  JsonListsCommandOutput
} from "../commands/JsonListsCommand";
import {
  JsonMapsCommandInput,
  JsonMapsCommandOutput
} from "../commands/JsonMapsCommand";
import {
  JsonTimestampsCommandInput,
  JsonTimestampsCommandOutput
} from "../commands/JsonTimestampsCommand";
import {
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput
} from "../commands/NoInputAndNoOutputCommand";
import {
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput
} from "../commands/NoInputAndOutputCommand";
import {
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput
} from "../commands/NullAndEmptyHeadersClientCommand";
import {
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput
} from "../commands/NullAndEmptyHeadersServerCommand";
import {
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput
} from "../commands/OmitsNullSerializesEmptyStringCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput
} from "../commands/QueryIdempotencyTokenAutoFillCommand";
import {
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput
} from "../commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput
} from "../commands/SimpleScalarPropertiesCommand";
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput
} from "../commands/TimestampFormatHeadersCommand";
import {
  ComplexError,
  ComplexNestedErrorData,
  FooEnum,
  FooError,
  GreetingStruct,
  InvalidGreeting,
  NestedPayload,
  RecursiveShapesInputOutputNested1,
  RecursiveShapesInputOutputNested2,
  StructureListMember
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  splitEvery as __splitEvery
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1AllQueryStringTypesCommand = async (
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/AllQueryStringTypesInput";
  const query: any = {};
  if (input.queryBoolean !== undefined) {
    query["Boolean"] = input.queryBoolean.toString();
  }
  if (input.queryBooleanList !== undefined) {
    query["BooleanList"] = (input.queryBooleanList || []).map(_entry =>
      _entry.toString()
    );
  }
  if (input.queryByte !== undefined) {
    query["Byte"] = input.queryByte.toString();
  }
  if (input.queryDouble !== undefined) {
    query["Double"] =
      input.queryDouble % 1 == 0
        ? input.queryDouble + ".0"
        : input.queryDouble.toString();
  }
  if (input.queryDoubleList !== undefined) {
    query["DoubleList"] = (input.queryDoubleList || []).map(_entry =>
      _entry % 1 == 0 ? _entry + ".0" : _entry.toString()
    );
  }
  if (input.queryEnum !== undefined) {
    query["Enum"] = input.queryEnum;
  }
  if (input.queryEnumList !== undefined) {
    query["EnumList"] = (input.queryEnumList || []).map(_entry => _entry);
  }
  if (input.queryFloat !== undefined) {
    query["Float"] =
      input.queryFloat % 1 == 0
        ? input.queryFloat + ".0"
        : input.queryFloat.toString();
  }
  if (input.queryInteger !== undefined) {
    query["Integer"] = input.queryInteger.toString();
  }
  if (input.queryIntegerList !== undefined) {
    query["IntegerList"] = (input.queryIntegerList || []).map(_entry =>
      _entry.toString()
    );
  }
  if (input.queryIntegerSet !== undefined) {
    query["IntegerSet"] = (
      Array.from(input.queryIntegerSet.values()) || []
    ).map(_entry => _entry.toString());
  }
  if (input.queryLong !== undefined) {
    query["Long"] = input.queryLong.toString();
  }
  if (input.queryShort !== undefined) {
    query["Short"] = input.queryShort.toString();
  }
  if (input.queryString !== undefined) {
    query["String"] = input.queryString;
  }
  if (input.queryStringList !== undefined) {
    query["StringList"] = (input.queryStringList || []).map(_entry => _entry);
  }
  if (input.queryStringSet !== undefined) {
    query["StringSet"] = (Array.from(input.queryStringSet.values()) || []).map(
      _entry => _entry
    );
  }
  if (input.queryTimestamp !== undefined) {
    query["Timestamp"] = (
      input.queryTimestamp.toISOString().split(".")[0] + "Z"
    ).toString();
  }
  if (input.queryTimestampList !== undefined) {
    query["TimestampList"] = (input.queryTimestampList || []).map(_entry =>
      (_entry.toISOString().split(".")[0] + "Z").toString()
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ConstantAndVariableQueryStringCommand = async (
  input: ConstantAndVariableQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ConstantAndVariableQueryString";
  const query: any = {
    foo: "bar"
  };
  if (input.baz !== undefined) {
    query["baz"] = input.baz;
  }
  if (input.maybeSet !== undefined) {
    query["maybeSet"] = input.maybeSet;
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ConstantQueryStringCommand = async (
  input: ConstantQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ConstantQueryString/{hello}";
  if (input.hello !== undefined) {
    const labelValue: string = input.hello;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: hello.");
    }
    resolvedPath = resolvedPath.replace(
      "{hello}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: hello.");
  }
  const query: any = {
    foo: "bar",
    hello: ""
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/EmptyInputAndEmptyOutput";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GreetingWithErrors";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpPayloadTraitsCommand = async (
  input: HttpPayloadTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  let resolvedPath = "/HttpPayloadTraits";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpPayloadTraitsWithMediaTypeCommand = async (
  input: HttpPayloadTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "text/plain";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  let resolvedPath = "/HttpPayloadTraitsWithMediaType";
  let body: any;
  if (input.blob !== undefined) {
    body = input.blob;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpPayloadWithStructureCommand = async (
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/HttpPayloadWithStructure";
  let body: any;
  if (input.nested !== undefined) {
    body = serializeAws_restJson1_1NestedPayload(input.nested, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpPrefixHeadersCommand = async (
  input: HttpPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  if (input.fooMap !== undefined) {
    Object.keys(input.fooMap).forEach(suffix => {
      headers["X-Foo-" + suffix] = input.fooMap![suffix];
    });
  }
  let resolvedPath = "/HttpPrefixHeaders";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpRequestWithGreedyLabelInPathCommand = async (
  input: HttpRequestWithGreedyLabelInPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/HttpRequestWithGreedyLabelInPath/foo/{foo}/baz/{baz+}";
  if (input.baz !== undefined) {
    const labelValue: string = input.baz;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: baz.");
    }
    resolvedPath = resolvedPath.replace(
      "{baz+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: baz.");
  }
  if (input.foo !== undefined) {
    const labelValue: string = input.foo;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: foo.");
    }
    resolvedPath = resolvedPath.replace(
      "{foo}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: foo.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpRequestWithLabelsCommand = async (
  input: HttpRequestWithLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/HttpRequestWithLabels/{string}/{short}/{integer}/{long}/{float}/{double}/{boolean}/{timestamp}";
  if (input.boolean !== undefined) {
    const labelValue: string = input.boolean.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: boolean.");
    }
    resolvedPath = resolvedPath.replace(
      "{boolean}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: boolean.");
  }
  if (input.double !== undefined) {
    const labelValue: string =
      input.double % 1 == 0 ? input.double + ".0" : input.double.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: double.");
    }
    resolvedPath = resolvedPath.replace(
      "{double}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: double.");
  }
  if (input.float !== undefined) {
    const labelValue: string =
      input.float % 1 == 0 ? input.float + ".0" : input.float.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: float.");
    }
    resolvedPath = resolvedPath.replace(
      "{float}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: float.");
  }
  if (input.integer !== undefined) {
    const labelValue: string = input.integer.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: integer.");
    }
    resolvedPath = resolvedPath.replace(
      "{integer}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: integer.");
  }
  if (input.long !== undefined) {
    const labelValue: string = input.long.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: long.");
    }
    resolvedPath = resolvedPath.replace(
      "{long}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: long.");
  }
  if (input.short !== undefined) {
    const labelValue: string = input.short.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: short.");
    }
    resolvedPath = resolvedPath.replace(
      "{short}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: short.");
  }
  if (input.string !== undefined) {
    const labelValue: string = input.string;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: string.");
    }
    resolvedPath = resolvedPath.replace(
      "{string}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: string.");
  }
  if (input.timestamp !== undefined) {
    const labelValue: string = (
      input.timestamp.toISOString().split(".")[0] + "Z"
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: timestamp.");
    }
    resolvedPath = resolvedPath.replace(
      "{timestamp}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: timestamp.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1HttpRequestWithLabelsAndTimestampFormatCommand = async (
  input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/HttpRequestWithLabelsAndTimestampFormat/{memberEpochSeconds}/{memberHttpDate}/{memberDateTime}/{defaultFormat}/{targetEpochSeconds}/{targetHttpDate}/{targetDateTime}";
  if (input.defaultFormat !== undefined) {
    const labelValue: string = (
      input.defaultFormat.toISOString().split(".")[0] + "Z"
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: defaultFormat."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{defaultFormat}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: defaultFormat.");
  }
  if (input.memberDateTime !== undefined) {
    const labelValue: string = (
      input.memberDateTime.toISOString().split(".")[0] + "Z"
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: memberDateTime."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{memberDateTime}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: memberDateTime.");
  }
  if (input.memberEpochSeconds !== undefined) {
    const labelValue: string = Math.round(
      input.memberEpochSeconds.getTime() / 1000
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: memberEpochSeconds."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{memberEpochSeconds}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: memberEpochSeconds."
    );
  }
  if (input.memberHttpDate !== undefined) {
    const labelValue: string = __dateToUtcString(
      input.memberHttpDate
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: memberHttpDate."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{memberHttpDate}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: memberHttpDate.");
  }
  if (input.targetDateTime !== undefined) {
    const labelValue: string = (
      input.targetDateTime.toISOString().split(".")[0] + "Z"
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: targetDateTime."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{targetDateTime}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: targetDateTime.");
  }
  if (input.targetEpochSeconds !== undefined) {
    const labelValue: string = Math.round(
      input.targetEpochSeconds.getTime() / 1000
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: targetEpochSeconds."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{targetEpochSeconds}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: targetEpochSeconds."
    );
  }
  if (input.targetHttpDate !== undefined) {
    const labelValue: string = __dateToUtcString(
      input.targetHttpDate
    ).toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: targetHttpDate."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{targetHttpDate}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: targetHttpDate.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1IgnoreQueryParamsInResponseCommand = async (
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/IgnoreQueryParamsInResponse";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1InputAndOutputWithHeadersCommand = async (
  input: InputAndOutputWithHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (isSerializableHeaderValue(input.headerBooleanList)) {
    headers["X-BooleanList"] = (input.headerBooleanList! || [])
      .map(_entry => _entry.toString())
      .join(", ");
  }
  if (isSerializableHeaderValue(input.headerByte)) {
    headers["X-Byte"] = input.headerByte!.toString();
  }
  if (isSerializableHeaderValue(input.headerDouble)) {
    headers["X-Double"] =
      input.headerDouble! % 1 == 0
        ? input.headerDouble! + ".0"
        : input.headerDouble!.toString();
  }
  if (isSerializableHeaderValue(input.headerEnum)) {
    headers["X-Enum"] = input.headerEnum!;
  }
  if (isSerializableHeaderValue(input.headerEnumList)) {
    headers["X-EnumList"] = (input.headerEnumList! || [])
      .map(_entry => _entry)
      .join(", ");
  }
  if (isSerializableHeaderValue(input.headerFalseBool)) {
    headers["X-Boolean2"] = input.headerFalseBool!.toString();
  }
  if (isSerializableHeaderValue(input.headerFloat)) {
    headers["X-Float"] =
      input.headerFloat! % 1 == 0
        ? input.headerFloat! + ".0"
        : input.headerFloat!.toString();
  }
  if (isSerializableHeaderValue(input.headerInteger)) {
    headers["X-Integer"] = input.headerInteger!.toString();
  }
  if (isSerializableHeaderValue(input.headerIntegerList)) {
    headers["X-IntegerList"] = (input.headerIntegerList! || [])
      .map(_entry => _entry.toString())
      .join(", ");
  }
  if (isSerializableHeaderValue(input.headerLong)) {
    headers["X-Long"] = input.headerLong!.toString();
  }
  if (isSerializableHeaderValue(input.headerShort)) {
    headers["X-Short"] = input.headerShort!.toString();
  }
  if (isSerializableHeaderValue(input.headerString)) {
    headers["X-String"] = input.headerString!;
  }
  if (isSerializableHeaderValue(input.headerStringList)) {
    headers["X-StringList"] = (input.headerStringList! || [])
      .map(_entry => _entry)
      .join(", ");
  }
  if (isSerializableHeaderValue(input.headerStringSet)) {
    headers["X-StringSet"] = (Array.from(input.headerStringSet!.values()) || [])
      .map(_entry => _entry)
      .join(", ");
  }
  if (isSerializableHeaderValue(input.headerTimestampList)) {
    headers["X-TimestampList"] = (input.headerTimestampList! || [])
      .map(_entry => __dateToUtcString(_entry).toString())
      .join(", ");
  }
  if (isSerializableHeaderValue(input.headerTrueBool)) {
    headers["X-Boolean1"] = input.headerTrueBool!.toString();
  }
  let resolvedPath = "/InputAndOutputWithHeaders";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1JsonBlobsCommand = async (
  input: JsonBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/JsonBlobs";
  let body: any;
  const bodyParams: any = {};
  if (input.data !== undefined) {
    bodyParams["data"] = context.base64Encoder(input.data);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1JsonEnumsCommand = async (
  input: JsonEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/JsonEnums";
  let body: any;
  const bodyParams: any = {};
  if (input.fooEnum1 !== undefined) {
    bodyParams["fooEnum1"] = input.fooEnum1;
  }
  if (input.fooEnum2 !== undefined) {
    bodyParams["fooEnum2"] = input.fooEnum2;
  }
  if (input.fooEnum3 !== undefined) {
    bodyParams["fooEnum3"] = input.fooEnum3;
  }
  if (input.fooEnumList !== undefined) {
    bodyParams["fooEnumList"] = serializeAws_restJson1_1FooEnumList(
      input.fooEnumList,
      context
    );
  }
  if (input.fooEnumMap !== undefined) {
    bodyParams["fooEnumMap"] = serializeAws_restJson1_1FooEnumMap(
      input.fooEnumMap,
      context
    );
  }
  if (input.fooEnumSet !== undefined) {
    bodyParams["fooEnumSet"] = serializeAws_restJson1_1FooEnumSet(
      input.fooEnumSet,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1JsonListsCommand = async (
  input: JsonListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/JsonLists";
  let body: any;
  const bodyParams: any = {};
  if (input.booleanList !== undefined) {
    bodyParams["booleanList"] = serializeAws_restJson1_1BooleanList(
      input.booleanList,
      context
    );
  }
  if (input.enumList !== undefined) {
    bodyParams["enumList"] = serializeAws_restJson1_1FooEnumList(
      input.enumList,
      context
    );
  }
  if (input.integerList !== undefined) {
    bodyParams["integerList"] = serializeAws_restJson1_1IntegerList(
      input.integerList,
      context
    );
  }
  if (input.nestedStringList !== undefined) {
    bodyParams["nestedStringList"] = serializeAws_restJson1_1NestedStringList(
      input.nestedStringList,
      context
    );
  }
  if (input.stringList !== undefined) {
    bodyParams["stringList"] = serializeAws_restJson1_1StringList(
      input.stringList,
      context
    );
  }
  if (input.stringSet !== undefined) {
    bodyParams["stringSet"] = serializeAws_restJson1_1StringSet(
      input.stringSet,
      context
    );
  }
  if (input.structureList !== undefined) {
    bodyParams["myStructureList"] = serializeAws_restJson1_1StructureList(
      input.structureList,
      context
    );
  }
  if (input.timestampList !== undefined) {
    bodyParams["timestampList"] = serializeAws_restJson1_1TimestampList(
      input.timestampList,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1JsonMapsCommand = async (
  input: JsonMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/JsonMaps";
  let body: any;
  const bodyParams: any = {};
  if (input.myMap !== undefined) {
    bodyParams["myMap"] = serializeAws_restJson1_1JsonMapsInputOutputMap(
      input.myMap,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1JsonTimestampsCommand = async (
  input: JsonTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/JsonTimestamps";
  let body: any;
  const bodyParams: any = {};
  if (input.dateTime !== undefined) {
    bodyParams["dateTime"] = input.dateTime.toISOString().split(".")[0] + "Z";
  }
  if (input.epochSeconds !== undefined) {
    bodyParams["epochSeconds"] = Math.round(
      input.epochSeconds.getTime() / 1000
    );
  }
  if (input.httpDate !== undefined) {
    bodyParams["httpDate"] = __dateToUtcString(input.httpDate);
  }
  if (input.normal !== undefined) {
    bodyParams["normal"] = Math.round(input.normal.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/NoInputAndNoOutput";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/NoInputAndOutputOutput";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1NullAndEmptyHeadersClientCommand = async (
  input: NullAndEmptyHeadersClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (isSerializableHeaderValue(input.a)) {
    headers["X-A"] = input.a!;
  }
  if (isSerializableHeaderValue(input.b)) {
    headers["X-B"] = input.b!;
  }
  if (isSerializableHeaderValue(input.c)) {
    headers["X-C"] = (input.c! || []).map(_entry => _entry).join(", ");
  }
  let resolvedPath = "/NullAndEmptyHeadersClient";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1NullAndEmptyHeadersServerCommand = async (
  input: NullAndEmptyHeadersServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (isSerializableHeaderValue(input.a)) {
    headers["X-A"] = input.a!;
  }
  if (isSerializableHeaderValue(input.b)) {
    headers["X-B"] = input.b!;
  }
  if (isSerializableHeaderValue(input.c)) {
    headers["X-C"] = (input.c! || []).map(_entry => _entry).join(", ");
  }
  let resolvedPath = "/NullAndEmptyHeadersServer";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1OmitsNullSerializesEmptyStringCommand = async (
  input: OmitsNullSerializesEmptyStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/OmitsNullSerializesEmptyString";
  const query: any = {};
  if (input.emptyString !== undefined) {
    query["Empty"] = input.emptyString;
  }
  if (input.nullValue !== undefined) {
    query["Null"] = input.nullValue;
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/QueryIdempotencyTokenAutoFill";
  const query: any = {};
  if (input.token !== undefined) {
    query["token"] = input.token;
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1RecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/RecursiveShapes";
  let body: any;
  const bodyParams: any = {};
  if (input.nested !== undefined) {
    bodyParams[
      "nested"
    ] = serializeAws_restJson1_1RecursiveShapesInputOutputNested1(
      input.nested,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  let resolvedPath = "/SimpleScalarProperties";
  let body: any;
  const bodyParams: any = {};
  if (input.byteValue !== undefined) {
    bodyParams["byteValue"] = input.byteValue;
  }
  if (input.doubleValue !== undefined) {
    bodyParams["DoubleDribble"] = input.doubleValue;
  }
  if (input.falseBooleanValue !== undefined) {
    bodyParams["falseBooleanValue"] = input.falseBooleanValue;
  }
  if (input.floatValue !== undefined) {
    bodyParams["floatValue"] = input.floatValue;
  }
  if (input.integerValue !== undefined) {
    bodyParams["integerValue"] = input.integerValue;
  }
  if (input.longValue !== undefined) {
    bodyParams["longValue"] = input.longValue;
  }
  if (input.shortValue !== undefined) {
    bodyParams["shortValue"] = input.shortValue;
  }
  if (input.stringValue !== undefined) {
    bodyParams["stringValue"] = input.stringValue;
  }
  if (input.trueBooleanValue !== undefined) {
    bodyParams["trueBooleanValue"] = input.trueBooleanValue;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TimestampFormatHeadersCommand = async (
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (isSerializableHeaderValue(input.defaultFormat)) {
    headers["X-defaultFormat"] = __dateToUtcString(
      input.defaultFormat!
    ).toString();
  }
  if (isSerializableHeaderValue(input.memberDateTime)) {
    headers["X-memberDateTime"] = (
      input.memberDateTime!.toISOString().split(".")[0] + "Z"
    ).toString();
  }
  if (isSerializableHeaderValue(input.memberEpochSeconds)) {
    headers["X-memberEpochSeconds"] = Math.round(
      input.memberEpochSeconds!.getTime() / 1000
    ).toString();
  }
  if (isSerializableHeaderValue(input.memberHttpDate)) {
    headers["X-memberHttpDate"] = __dateToUtcString(
      input.memberHttpDate!
    ).toString();
  }
  if (isSerializableHeaderValue(input.targetDateTime)) {
    headers["X-targetDateTime"] = (
      input.targetDateTime!.toISOString().split(".")[0] + "Z"
    ).toString();
  }
  if (isSerializableHeaderValue(input.targetEpochSeconds)) {
    headers["X-targetEpochSeconds"] = Math.round(
      input.targetEpochSeconds!.getTime() / 1000
    ).toString();
  }
  if (isSerializableHeaderValue(input.targetHttpDate)) {
    headers["X-targetHttpDate"] = __dateToUtcString(
      input.targetHttpDate!
    ).toString();
  }
  let resolvedPath = "/TimestampFormatHeaders";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1AllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AllQueryStringTypesCommandError(
      output,
      context
    );
  }
  const contents: AllQueryStringTypesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ConstantAndVariableQueryStringCommandError(
      output,
      context
    );
  }
  const contents: ConstantAndVariableQueryStringCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ConstantQueryStringCommandError(
      output,
      context
    );
  }
  const contents: ConstantQueryStringCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1EmptyInputAndEmptyOutputCommandError(
      output,
      context
    );
  }
  const contents: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EmptyInputAndEmptyOutputOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GreetingWithErrorsCommandError(
      output,
      context
    );
  }
  const contents: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GreetingWithErrorsOutput",
    greeting: undefined
  };
  if (output.headers["x-greeting"] !== undefined) {
    contents.greeting = output.headers["x-greeting"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocols.tests.restjson#ComplexError":
      response = {
        ...(await deserializeAws_restJson1_1ComplexErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FooError":
    case "aws.protocols.tests.restjson#FooError":
      response = {
        ...(await deserializeAws_restJson1_1FooErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGreeting":
    case "aws.protocols.tests.restjson#InvalidGreeting":
      response = {
        ...(await deserializeAws_restJson1_1InvalidGreetingResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpPayloadTraitsCommandError(
      output,
      context
    );
  }
  const contents: HttpPayloadTraitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadTraitsInputOutput",
    blob: undefined,
    foo: undefined
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1HttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpPayloadTraitsWithMediaTypeCommandError(
      output,
      context
    );
  }
  const contents: HttpPayloadTraitsWithMediaTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadTraitsWithMediaTypeInputOutput",
    blob: undefined,
    foo: undefined
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1HttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpPayloadWithStructureCommandError(
      output,
      context
    );
  }
  const contents: HttpPayloadWithStructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithStructureInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restJson1_1NestedPayload(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1HttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpPrefixHeadersCommandError(
      output,
      context
    );
  }
  const contents: HttpPrefixHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPrefixHeadersInputOutput",
    foo: undefined,
    fooMap: undefined
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  Object.keys(output.headers).forEach(header => {
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

const deserializeAws_restJson1_1HttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpRequestWithGreedyLabelInPathCommandError(
      output,
      context
    );
  }
  const contents: HttpRequestWithGreedyLabelInPathCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1HttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpRequestWithLabelsCommandError(
      output,
      context
    );
  }
  const contents: HttpRequestWithLabelsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1HttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1HttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1HttpRequestWithLabelsAndTimestampFormatCommandError(
      output,
      context
    );
  }
  const contents: HttpRequestWithLabelsAndTimestampFormatCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1HttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1IgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1IgnoreQueryParamsInResponseCommandError(
      output,
      context
    );
  }
  const contents: IgnoreQueryParamsInResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IgnoreQueryParamsInResponseOutput",
    baz: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.baz !== undefined && data.baz !== null) {
    contents.baz = data.baz;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1IgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1InputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InputAndOutputWithHeadersCommandError(
      output,
      context
    );
  }
  const contents: InputAndOutputWithHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InputAndOutputWithHeadersIO",
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
    headerTrueBool: undefined
  };
  if (output.headers["x-booleanlist"] !== undefined) {
    contents.headerBooleanList = (output.headers["x-booleanlist"] || "")
      .split(",")
      .map(_entry => _entry.trim() === "true");
  }
  if (output.headers["x-byte"] !== undefined) {
    contents.headerByte = parseInt(output.headers["x-byte"], 10);
  }
  if (output.headers["x-double"] !== undefined) {
    contents.headerDouble = parseFloat(output.headers["x-double"]);
  }
  if (output.headers["x-enum"] !== undefined) {
    contents.headerEnum = output.headers["x-enum"];
  }
  if (output.headers["x-enumlist"] !== undefined) {
    contents.headerEnumList = (output.headers["x-enumlist"] || "")
      .split(",")
      .map(_entry => _entry.trim());
  }
  if (output.headers["x-boolean2"] !== undefined) {
    contents.headerFalseBool = output.headers["x-boolean2"] === "true";
  }
  if (output.headers["x-float"] !== undefined) {
    contents.headerFloat = parseFloat(output.headers["x-float"]);
  }
  if (output.headers["x-integer"] !== undefined) {
    contents.headerInteger = parseInt(output.headers["x-integer"], 10);
  }
  if (output.headers["x-integerlist"] !== undefined) {
    contents.headerIntegerList = (output.headers["x-integerlist"] || "")
      .split(",")
      .map(_entry => parseInt(_entry.trim(), 10));
  }
  if (output.headers["x-long"] !== undefined) {
    contents.headerLong = parseInt(output.headers["x-long"], 10);
  }
  if (output.headers["x-short"] !== undefined) {
    contents.headerShort = parseInt(output.headers["x-short"], 10);
  }
  if (output.headers["x-string"] !== undefined) {
    contents.headerString = output.headers["x-string"];
  }
  if (output.headers["x-stringlist"] !== undefined) {
    contents.headerStringList = (output.headers["x-stringlist"] || "")
      .split(",")
      .map(_entry => _entry.trim());
  }
  if (output.headers["x-stringset"] !== undefined) {
    contents.headerStringSet = (output.headers["x-stringset"] || "")
      .split(",")
      .map(_entry => _entry.trim());
  }
  if (output.headers["x-timestamplist"] !== undefined) {
    contents.headerTimestampList = __splitEvery(
      output.headers["x-timestamplist"] || "",
      ",",
      2
    ).map(_entry => new Date(_entry.trim()));
  }
  if (output.headers["x-boolean1"] !== undefined) {
    contents.headerTrueBool = output.headers["x-boolean1"] === "true";
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1JsonBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1JsonBlobsCommandError(output, context);
  }
  const contents: JsonBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "JsonBlobsInputOutput",
    data: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.data !== undefined && data.data !== null) {
    contents.data = context.base64Decoder(data.data);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1JsonBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1JsonEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1JsonEnumsCommandError(output, context);
  }
  const contents: JsonEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "JsonEnumsInputOutput",
    fooEnum1: undefined,
    fooEnum2: undefined,
    fooEnum3: undefined,
    fooEnumList: undefined,
    fooEnumMap: undefined,
    fooEnumSet: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fooEnum1 !== undefined && data.fooEnum1 !== null) {
    contents.fooEnum1 = data.fooEnum1;
  }
  if (data.fooEnum2 !== undefined && data.fooEnum2 !== null) {
    contents.fooEnum2 = data.fooEnum2;
  }
  if (data.fooEnum3 !== undefined && data.fooEnum3 !== null) {
    contents.fooEnum3 = data.fooEnum3;
  }
  if (data.fooEnumList !== undefined && data.fooEnumList !== null) {
    contents.fooEnumList = deserializeAws_restJson1_1FooEnumList(
      data.fooEnumList,
      context
    );
  }
  if (data.fooEnumMap !== undefined && data.fooEnumMap !== null) {
    contents.fooEnumMap = deserializeAws_restJson1_1FooEnumMap(
      data.fooEnumMap,
      context
    );
  }
  if (data.fooEnumSet !== undefined && data.fooEnumSet !== null) {
    contents.fooEnumSet = deserializeAws_restJson1_1FooEnumSet(
      data.fooEnumSet,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1JsonEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1JsonListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1JsonListsCommandError(output, context);
  }
  const contents: JsonListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "JsonListsInputOutput",
    booleanList: undefined,
    enumList: undefined,
    integerList: undefined,
    nestedStringList: undefined,
    stringList: undefined,
    stringSet: undefined,
    structureList: undefined,
    timestampList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.booleanList !== undefined && data.booleanList !== null) {
    contents.booleanList = deserializeAws_restJson1_1BooleanList(
      data.booleanList,
      context
    );
  }
  if (data.enumList !== undefined && data.enumList !== null) {
    contents.enumList = deserializeAws_restJson1_1FooEnumList(
      data.enumList,
      context
    );
  }
  if (data.integerList !== undefined && data.integerList !== null) {
    contents.integerList = deserializeAws_restJson1_1IntegerList(
      data.integerList,
      context
    );
  }
  if (data.nestedStringList !== undefined && data.nestedStringList !== null) {
    contents.nestedStringList = deserializeAws_restJson1_1NestedStringList(
      data.nestedStringList,
      context
    );
  }
  if (data.stringList !== undefined && data.stringList !== null) {
    contents.stringList = deserializeAws_restJson1_1StringList(
      data.stringList,
      context
    );
  }
  if (data.stringSet !== undefined && data.stringSet !== null) {
    contents.stringSet = deserializeAws_restJson1_1StringSet(
      data.stringSet,
      context
    );
  }
  if (data.myStructureList !== undefined && data.myStructureList !== null) {
    contents.structureList = deserializeAws_restJson1_1StructureList(
      data.myStructureList,
      context
    );
  }
  if (data.timestampList !== undefined && data.timestampList !== null) {
    contents.timestampList = deserializeAws_restJson1_1TimestampList(
      data.timestampList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1JsonListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1JsonMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1JsonMapsCommandError(output, context);
  }
  const contents: JsonMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "JsonMapsInputOutput",
    myMap: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.myMap !== undefined && data.myMap !== null) {
    contents.myMap = deserializeAws_restJson1_1JsonMapsInputOutputMap(
      data.myMap,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1JsonMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1JsonTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1JsonTimestampsCommandError(
      output,
      context
    );
  }
  const contents: JsonTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "JsonTimestampsInputOutput",
    dateTime: undefined,
    epochSeconds: undefined,
    httpDate: undefined,
    normal: undefined
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

const deserializeAws_restJson1_1JsonTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1NoInputAndNoOutputCommandError(
      output,
      context
    );
  }
  const contents: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1NoInputAndOutputCommandError(
      output,
      context
    );
  }
  const contents: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NoInputAndOutputOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1NullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1NullAndEmptyHeadersClientCommandError(
      output,
      context
    );
  }
  const contents: NullAndEmptyHeadersClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NullAndEmptyHeadersIO",
    a: undefined,
    b: undefined,
    c: undefined
  };
  if (output.headers["x-a"] !== undefined) {
    contents.a = output.headers["x-a"];
  }
  if (output.headers["x-b"] !== undefined) {
    contents.b = output.headers["x-b"];
  }
  if (output.headers["x-c"] !== undefined) {
    contents.c = (output.headers["x-c"] || "")
      .split(",")
      .map(_entry => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1NullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1NullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1NullAndEmptyHeadersServerCommandError(
      output,
      context
    );
  }
  const contents: NullAndEmptyHeadersServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NullAndEmptyHeadersIO",
    a: undefined,
    b: undefined,
    c: undefined
  };
  if (output.headers["x-a"] !== undefined) {
    contents.a = output.headers["x-a"];
  }
  if (output.headers["x-b"] !== undefined) {
    contents.b = output.headers["x-b"];
  }
  if (output.headers["x-c"] !== undefined) {
    contents.c = (output.headers["x-c"] || "")
      .split(",")
      .map(_entry => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1NullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1OmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1OmitsNullSerializesEmptyStringCommandError(
      output,
      context
    );
  }
  const contents: OmitsNullSerializesEmptyStringCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1OmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1QueryIdempotencyTokenAutoFillCommandError(
      output,
      context
    );
  }
  const contents: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1RecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RecursiveShapesCommandError(
      output,
      context
    );
  }
  const contents: RecursiveShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecursiveShapesInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nested !== undefined && data.nested !== null) {
    contents.nested = deserializeAws_restJson1_1RecursiveShapesInputOutputNested1(
      data.nested,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SimpleScalarPropertiesCommandError(
      output,
      context
    );
  }
  const contents: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimpleScalarPropertiesInputOutput",
    byteValue: undefined,
    doubleValue: undefined,
    falseBooleanValue: undefined,
    floatValue: undefined,
    foo: undefined,
    integerValue: undefined,
    longValue: undefined,
    shortValue: undefined,
    stringValue: undefined,
    trueBooleanValue: undefined
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers["x-foo"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.byteValue !== undefined && data.byteValue !== null) {
    contents.byteValue = data.byteValue;
  }
  if (data.DoubleDribble !== undefined && data.DoubleDribble !== null) {
    contents.doubleValue = data.DoubleDribble;
  }
  if (data.falseBooleanValue !== undefined && data.falseBooleanValue !== null) {
    contents.falseBooleanValue = data.falseBooleanValue;
  }
  if (data.floatValue !== undefined && data.floatValue !== null) {
    contents.floatValue = data.floatValue;
  }
  if (data.integerValue !== undefined && data.integerValue !== null) {
    contents.integerValue = data.integerValue;
  }
  if (data.longValue !== undefined && data.longValue !== null) {
    contents.longValue = data.longValue;
  }
  if (data.shortValue !== undefined && data.shortValue !== null) {
    contents.shortValue = data.shortValue;
  }
  if (data.stringValue !== undefined && data.stringValue !== null) {
    contents.stringValue = data.stringValue;
  }
  if (data.trueBooleanValue !== undefined && data.trueBooleanValue !== null) {
    contents.trueBooleanValue = data.trueBooleanValue;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TimestampFormatHeadersCommandError(
      output,
      context
    );
  }
  const contents: TimestampFormatHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TimestampFormatHeadersIO",
    defaultFormat: undefined,
    memberDateTime: undefined,
    memberEpochSeconds: undefined,
    memberHttpDate: undefined,
    targetDateTime: undefined,
    targetEpochSeconds: undefined,
    targetHttpDate: undefined
  };
  if (output.headers["x-defaultformat"] !== undefined) {
    contents.defaultFormat = new Date(output.headers["x-defaultformat"]);
  }
  if (output.headers["x-memberdatetime"] !== undefined) {
    contents.memberDateTime = new Date(output.headers["x-memberdatetime"]);
  }
  if (output.headers["x-memberepochseconds"] !== undefined) {
    contents.memberEpochSeconds = new Date(
      Math.round(parseInt(output.headers["x-memberepochseconds"], 10) * 1000)
    );
  }
  if (output.headers["x-memberhttpdate"] !== undefined) {
    contents.memberHttpDate = new Date(output.headers["x-memberhttpdate"]);
  }
  if (output.headers["x-targetdatetime"] !== undefined) {
    contents.targetDateTime = new Date(output.headers["x-targetdatetime"]);
  }
  if (output.headers["x-targetepochseconds"] !== undefined) {
    contents.targetEpochSeconds = new Date(
      Math.round(parseInt(output.headers["x-targetepochseconds"], 10) * 1000)
    );
  }
  if (output.headers["x-targethttpdate"] !== undefined) {
    contents.targetHttpDate = new Date(output.headers["x-targethttpdate"]);
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const contents: ComplexError = {
    name: "ComplexError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Header: undefined,
    Nested: undefined,
    TopLevel: undefined
  };
  if (parsedOutput.headers["x-header"] !== undefined) {
    contents.Header = parsedOutput.headers["x-header"];
  }
  const data: any = parsedOutput.body;
  if (data.Nested !== undefined && data.Nested !== null) {
    contents.Nested = deserializeAws_restJson1_1ComplexNestedErrorData(
      data.Nested,
      context
    );
  }
  if (data.TopLevel !== undefined && data.TopLevel !== null) {
    contents.TopLevel = data.TopLevel;
  }
  return contents;
};

const deserializeAws_restJson1_1FooErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const contents: FooError = {
    name: "FooError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput)
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1_1InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const contents: InvalidGreeting = {
    name: "InvalidGreeting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1JsonMapsInputOutputMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_restJson1_1GreetingStruct(input[key], context);
    return acc;
  }, {});
};

const serializeAws_restJson1_1NestedPayload = (
  input: NestedPayload,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.greeting !== undefined) {
    bodyParams["greeting"] = input.greeting;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.foo !== undefined) {
    bodyParams["foo"] = input.foo;
  }
  if (input.nested !== undefined) {
    bodyParams[
      "nested"
    ] = serializeAws_restJson1_1RecursiveShapesInputOutputNested2(
      input.nested,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bar !== undefined) {
    bodyParams["bar"] = input.bar;
  }
  if (input.recursiveMember !== undefined) {
    bodyParams[
      "recursiveMember"
    ] = serializeAws_restJson1_1RecursiveShapesInputOutputNested1(
      input.recursiveMember,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1StructureList = (
  input: StructureListMember[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1StructureListMember(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1StructureListMember = (
  input: StructureListMember,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.a !== undefined) {
    bodyParams["value"] = input.a;
  }
  if (input.b !== undefined) {
    bodyParams["other"] = input.b;
  }
  return bodyParams;
};

const serializeAws_restJson1_1BooleanList = (
  input: boolean[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1FooEnumList = (
  input: (FooEnum | string)[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1FooEnumMap = (
  input: { [key: string]: FooEnum | string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1FooEnumSet = (
  input: (FooEnum | string)[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1GreetingStruct = (
  input: GreetingStruct,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.hi !== undefined) {
    bodyParams["hi"] = input.hi;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IntegerList = (
  input: number[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1NestedStringList = (
  input: string[][],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1StringList(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1StringSet = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TimestampList = (
  input: Date[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(Math.round(entry.getTime() / 1000));
  }
  return contents;
};

const deserializeAws_restJson1_1ComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  let contents: any = {
    __type: "ComplexNestedErrorData",
    Foo: undefined
  };
  if (output.Fooooo !== undefined && output.Fooooo !== null) {
    contents.Foo = output.Fooooo;
  }
  return contents;
};

const deserializeAws_restJson1_1JsonMapsInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_restJson1_1GreetingStruct(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_restJson1_1NestedPayload = (
  output: any,
  context: __SerdeContext
): NestedPayload => {
  let contents: any = {
    __type: "NestedPayload",
    greeting: undefined,
    name: undefined
  };
  if (output.greeting !== undefined && output.greeting !== null) {
    contents.greeting = output.greeting;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1RecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  let contents: any = {
    __type: "RecursiveShapesInputOutputNested1",
    foo: undefined,
    nested: undefined
  };
  if (output.foo !== undefined && output.foo !== null) {
    contents.foo = output.foo;
  }
  if (output.nested !== undefined && output.nested !== null) {
    contents.nested = deserializeAws_restJson1_1RecursiveShapesInputOutputNested2(
      output.nested,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1RecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  let contents: any = {
    __type: "RecursiveShapesInputOutputNested2",
    bar: undefined,
    recursiveMember: undefined
  };
  if (output.bar !== undefined && output.bar !== null) {
    contents.bar = output.bar;
  }
  if (output.recursiveMember !== undefined && output.recursiveMember !== null) {
    contents.recursiveMember = deserializeAws_restJson1_1RecursiveShapesInputOutputNested1(
      output.recursiveMember,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1StructureList = (
  output: any,
  context: __SerdeContext
): StructureListMember[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StructureListMember(entry, context)
  );
};

const deserializeAws_restJson1_1StructureListMember = (
  output: any,
  context: __SerdeContext
): StructureListMember => {
  let contents: any = {
    __type: "StructureListMember",
    a: undefined,
    b: undefined
  };
  if (output.value !== undefined && output.value !== null) {
    contents.a = output.value;
  }
  if (output.other !== undefined && output.other !== null) {
    contents.b = output.other;
  }
  return contents;
};

const deserializeAws_restJson1_1BooleanList = (
  output: any,
  context: __SerdeContext
): boolean[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1FooEnumList = (
  output: any,
  context: __SerdeContext
): (FooEnum | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1FooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1FooEnumSet = (
  output: any,
  context: __SerdeContext
): (FooEnum | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1GreetingStruct = (
  output: any,
  context: __SerdeContext
): GreetingStruct => {
  let contents: any = {
    __type: "GreetingStruct",
    hi: undefined
  };
  if (output.hi !== undefined && output.hi !== null) {
    contents.hi = output.hi;
  }
  return contents;
};

const deserializeAws_restJson1_1IntegerList = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1NestedStringList = (
  output: any,
  context: __SerdeContext
): string[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StringList(entry, context)
  );
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1StringSet = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TimestampList = (
  output: any,
  context: __SerdeContext
): Date[] => {
  return (output || []).map((entry: any) => new Date(Math.round(entry * 1000)));
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
