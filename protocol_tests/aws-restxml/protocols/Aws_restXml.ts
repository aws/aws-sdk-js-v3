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
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "../commands/EmptyInputAndEmptyOutputCommand";
import {
  FlattenedXmlMapCommandInput,
  FlattenedXmlMapCommandOutput,
} from "../commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
} from "../commands/FlattenedXmlMapWithXmlNameCommand";
import {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "../commands/GreetingWithErrorsCommand";
import {
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
} from "../commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "../commands/HttpPayloadTraitsWithMediaTypeCommand";
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
import {
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
} from "../commands/HttpPrefixHeadersCommand";
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
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "../commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "../commands/InputAndOutputWithHeadersCommand";
import {
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
} from "../commands/NoInputAndNoOutputCommand";
import {
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput,
} from "../commands/NoInputAndOutputCommand";
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
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput,
} from "../commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "../commands/SimpleScalarPropertiesCommand";
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "../commands/TimestampFormatHeadersCommand";
import {
  XmlAttributesCommandInput,
  XmlAttributesCommandOutput,
} from "../commands/XmlAttributesCommand";
import {
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput,
} from "../commands/XmlAttributesOnPayloadCommand";
import {
  XmlBlobsCommandInput,
  XmlBlobsCommandOutput,
} from "../commands/XmlBlobsCommand";
import {
  XmlEnumsCommandInput,
  XmlEnumsCommandOutput,
} from "../commands/XmlEnumsCommand";
import {
  XmlListsCommandInput,
  XmlListsCommandOutput,
} from "../commands/XmlListsCommand";
import {
  XmlMapsCommandInput,
  XmlMapsCommandOutput,
} from "../commands/XmlMapsCommand";
import {
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput,
} from "../commands/XmlMapsXmlNameCommand";
import {
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput,
} from "../commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput,
} from "../commands/XmlTimestampsCommand";
import {
  ComplexError,
  ComplexNestedErrorData,
  FooEnum,
  GreetingStruct,
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
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  splitEvery as __splitEvery,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import {
  XmlNode as __XmlNode,
  XmlText as __XmlText,
} from "@aws-sdk/xml-builder";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restXmlAllQueryStringTypesCommand(
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/AllQueryStringTypesInput";
  const query: any = {};
  if (input.queryBoolean !== undefined) {
    query["Boolean"] = input.queryBoolean.toString();
  }
  if (input.queryBooleanList !== undefined) {
    query["BooleanList"] = (input.queryBooleanList || []).map(_entry => _entry.toString());
  }
  if (input.queryByte !== undefined) {
    query["Byte"] = input.queryByte.toString();
  }
  if (input.queryDouble !== undefined) {
    query["Double"] = ((input.queryDouble % 1 == 0) ? input.queryDouble + ".0" : input.queryDouble.toString());
  }
  if (input.queryDoubleList !== undefined) {
    query["DoubleList"] = (input.queryDoubleList || []).map(_entry => ((_entry % 1 == 0) ? _entry + ".0" : _entry.toString()));
  }
  if (input.queryEnum !== undefined) {
    query["Enum"] = input.queryEnum;
  }
  if (input.queryEnumList !== undefined) {
    query["EnumList"] = (input.queryEnumList || []).map(_entry => _entry);
  }
  if (input.queryFloat !== undefined) {
    query["Float"] = ((input.queryFloat % 1 == 0) ? input.queryFloat + ".0" : input.queryFloat.toString());
  }
  if (input.queryInteger !== undefined) {
    query["Integer"] = input.queryInteger.toString();
  }
  if (input.queryIntegerList !== undefined) {
    query["IntegerList"] = (input.queryIntegerList || []).map(_entry => _entry.toString());
  }
  if (input.queryIntegerSet !== undefined) {
    query["IntegerSet"] = (Array.from(input.queryIntegerSet.values()) || []).map(_entry => _entry.toString());
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
    query["StringSet"] = (Array.from(input.queryStringSet.values()) || []).map(_entry => _entry);
  }
  if (input.queryTimestamp !== undefined) {
    query["Timestamp"] = (input.queryTimestamp.toISOString().split('.')[0]+"Z").toString();
  }
  if (input.queryTimestampList !== undefined) {
    query["TimestampList"] = (input.queryTimestampList || []).map(_entry => (_entry.toISOString().split('.')[0]+"Z").toString());
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body,
  });
}

export async function serializeAws_restXmlConstantAndVariableQueryStringCommand(
  input: ConstantAndVariableQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/ConstantAndVariableQueryString";
  const query: any = {
    "foo": "bar",
  };
  if (input.baz !== undefined) {
    query["baz"] = input.baz;
  }
  if (input.maybeSet !== undefined) {
    query["maybeSet"] = input.maybeSet;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body,
  });
}

export async function serializeAws_restXmlConstantQueryStringCommand(
  input: ConstantQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/ConstantQueryString/{hello}";
  if (input.hello !== undefined) {
    const labelValue: string = input.hello;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: hello.');
    }
    resolvedPath = resolvedPath.replace("{hello}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: hello.');
  }
  const query: any = {
    "foo": "bar",
    "hello": "",
  };
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body,
  });
}

export async function serializeAws_restXmlEmptyInputAndEmptyOutputCommand(
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/EmptyInputAndEmptyOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlFlattenedXmlMapCommand(
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/FlattenedXmlMap";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
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
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand(
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/FlattenedXmlMapWithXmlName";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
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
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlGreetingWithErrorsCommand(
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/GreetingWithErrors";
  let body: any;
  body = "";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPayloadTraitsCommand(
  input: HttpPayloadTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/octet-stream";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  let resolvedPath = "/HttpPayloadTraits";
  let body: any;
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand(
  input: HttpPayloadTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "text/plain";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  let resolvedPath = "/HttpPayloadTraitsWithMediaType";
  let body: any;
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPayloadWithStructureCommand(
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/HttpPayloadWithStructure";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlNestedPayload(input.nested, context);
    body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    body += contents.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPayloadWithXmlNameCommand(
  input: HttpPayloadWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/HttpPayloadWithXmlName";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlName(input.nested, context);
    body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    body += contents.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand(
  input: HttpPayloadWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/HttpPayloadWithXmlNamespace";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlNamespace(input.nested, context);
    body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    contents.addAttribute("xmlns", "http://foo.com");
    body += contents.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand(
  input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/HttpPayloadWithXmlNamespaceAndPrefix";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(input.nested, context);
    body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    contents.addAttribute("xmlns:baz", "http://foo.com");
    body += contents.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpPrefixHeadersCommand(
  input: HttpPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand(
  input: HttpRequestWithGreedyLabelInPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/HttpRequestWithGreedyLabelInPath/foo/{foo}/baz/{baz+}";
  if (input.baz !== undefined) {
    const labelValue: string = input.baz;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: baz.');
    }
    resolvedPath = resolvedPath.replace("{baz+}", labelValue.split("/").map(segment => __extendedEncodeURIComponent(segment)).join("/"));
  } else {
    throw new Error('No value provided for input HTTP label: baz.');
  }
  if (input.foo !== undefined) {
    const labelValue: string = input.foo;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: foo.');
    }
    resolvedPath = resolvedPath.replace("{foo}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: foo.');
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpRequestWithLabelsCommand(
  input: HttpRequestWithLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/HttpRequestWithLabels/{string}/{short}/{integer}/{long}/{float}/{double}/{boolean}/{timestamp}";
  if (input.boolean !== undefined) {
    const labelValue: string = input.boolean.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: boolean.');
    }
    resolvedPath = resolvedPath.replace("{boolean}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: boolean.');
  }
  if (input.double !== undefined) {
    const labelValue: string = ((input.double % 1 == 0) ? input.double + ".0" : input.double.toString());
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: double.');
    }
    resolvedPath = resolvedPath.replace("{double}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: double.');
  }
  if (input.float !== undefined) {
    const labelValue: string = ((input.float % 1 == 0) ? input.float + ".0" : input.float.toString());
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: float.');
    }
    resolvedPath = resolvedPath.replace("{float}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: float.');
  }
  if (input.integer !== undefined) {
    const labelValue: string = input.integer.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: integer.');
    }
    resolvedPath = resolvedPath.replace("{integer}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: integer.');
  }
  if (input.long !== undefined) {
    const labelValue: string = input.long.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: long.');
    }
    resolvedPath = resolvedPath.replace("{long}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: long.');
  }
  if (input.short !== undefined) {
    const labelValue: string = input.short.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: short.');
    }
    resolvedPath = resolvedPath.replace("{short}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: short.');
  }
  if (input.string !== undefined) {
    const labelValue: string = input.string;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: string.');
    }
    resolvedPath = resolvedPath.replace("{string}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: string.');
  }
  if (input.timestamp !== undefined) {
    const labelValue: string = (input.timestamp.toISOString().split('.')[0]+"Z").toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: timestamp.');
    }
    resolvedPath = resolvedPath.replace("{timestamp}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: timestamp.');
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand(
  input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/HttpRequestWithLabelsAndTimestampFormat/{memberEpochSeconds}/{memberHttpDate}/{memberDateTime}/{defaultFormat}/{targetEpochSeconds}/{targetHttpDate}/{targetDateTime}";
  if (input.defaultFormat !== undefined) {
    const labelValue: string = (input.defaultFormat.toISOString().split('.')[0]+"Z").toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: defaultFormat.');
    }
    resolvedPath = resolvedPath.replace("{defaultFormat}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: defaultFormat.');
  }
  if (input.memberDateTime !== undefined) {
    const labelValue: string = (input.memberDateTime.toISOString().split('.')[0]+"Z").toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: memberDateTime.');
    }
    resolvedPath = resolvedPath.replace("{memberDateTime}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: memberDateTime.');
  }
  if (input.memberEpochSeconds !== undefined) {
    const labelValue: string = Math.round(input.memberEpochSeconds.getTime() / 1000).toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: memberEpochSeconds.');
    }
    resolvedPath = resolvedPath.replace("{memberEpochSeconds}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: memberEpochSeconds.');
  }
  if (input.memberHttpDate !== undefined) {
    const labelValue: string = __dateToUtcString(input.memberHttpDate).toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: memberHttpDate.');
    }
    resolvedPath = resolvedPath.replace("{memberHttpDate}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: memberHttpDate.');
  }
  if (input.targetDateTime !== undefined) {
    const labelValue: string = (input.targetDateTime.toISOString().split('.')[0]+"Z").toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: targetDateTime.');
    }
    resolvedPath = resolvedPath.replace("{targetDateTime}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: targetDateTime.');
  }
  if (input.targetEpochSeconds !== undefined) {
    const labelValue: string = Math.round(input.targetEpochSeconds.getTime() / 1000).toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: targetEpochSeconds.');
    }
    resolvedPath = resolvedPath.replace("{targetEpochSeconds}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: targetEpochSeconds.');
  }
  if (input.targetHttpDate !== undefined) {
    const labelValue: string = __dateToUtcString(input.targetHttpDate).toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: targetHttpDate.');
    }
    resolvedPath = resolvedPath.replace("{targetHttpDate}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: targetHttpDate.');
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlIgnoreQueryParamsInResponseCommand(
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/IgnoreQueryParamsInResponse";
  let body: any;
  body = "";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlInputAndOutputWithHeadersCommand(
  input: InputAndOutputWithHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  if (isSerializableHeaderValue(input.headerBooleanList)) {
    headers["X-BooleanList"] = (input.headerBooleanList! || []).map(_entry => _entry.toString()).join(', ');
  }
  if (isSerializableHeaderValue(input.headerByte)) {
    headers["X-Byte"] = input.headerByte!.toString();
  }
  if (isSerializableHeaderValue(input.headerDouble)) {
    headers["X-Double"] = ((input.headerDouble! % 1 == 0) ? input.headerDouble! + ".0" : input.headerDouble!.toString());
  }
  if (isSerializableHeaderValue(input.headerEnum)) {
    headers["X-Enum"] = input.headerEnum!;
  }
  if (isSerializableHeaderValue(input.headerEnumList)) {
    headers["X-EnumList"] = (input.headerEnumList! || []).map(_entry => _entry).join(', ');
  }
  if (isSerializableHeaderValue(input.headerFalseBool)) {
    headers["X-Boolean2"] = input.headerFalseBool!.toString();
  }
  if (isSerializableHeaderValue(input.headerFloat)) {
    headers["X-Float"] = ((input.headerFloat! % 1 == 0) ? input.headerFloat! + ".0" : input.headerFloat!.toString());
  }
  if (isSerializableHeaderValue(input.headerInteger)) {
    headers["X-Integer"] = input.headerInteger!.toString();
  }
  if (isSerializableHeaderValue(input.headerIntegerList)) {
    headers["X-IntegerList"] = (input.headerIntegerList! || []).map(_entry => _entry.toString()).join(', ');
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
    headers["X-StringList"] = (input.headerStringList! || []).map(_entry => _entry).join(', ');
  }
  if (isSerializableHeaderValue(input.headerStringSet)) {
    headers["X-StringSet"] = (Array.from(input.headerStringSet!.values()) || []).map(_entry => _entry).join(', ');
  }
  if (isSerializableHeaderValue(input.headerTimestampList)) {
    headers["X-TimestampList"] = (input.headerTimestampList! || []).map(_entry => __dateToUtcString(_entry).toString()).join(', ');
  }
  if (isSerializableHeaderValue(input.headerTrueBool)) {
    headers["X-Boolean1"] = input.headerTrueBool!.toString();
  }
  let resolvedPath = "/InputAndOutputWithHeaders";
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlNoInputAndNoOutputCommand(
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/NoInputAndNoOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlNoInputAndOutputCommand(
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/NoInputAndOutputOutput";
  let body: any;
  body = "";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlNullAndEmptyHeadersClientCommand(
  input: NullAndEmptyHeadersClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  if (isSerializableHeaderValue(input.a)) {
    headers["X-A"] = input.a!;
  }
  if (isSerializableHeaderValue(input.b)) {
    headers["X-B"] = input.b!;
  }
  if (isSerializableHeaderValue(input.c)) {
    headers["X-C"] = (input.c! || []).map(_entry => _entry).join(', ');
  }
  let resolvedPath = "/NullAndEmptyHeadersClient";
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlNullAndEmptyHeadersServerCommand(
  input: NullAndEmptyHeadersServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  if (isSerializableHeaderValue(input.a)) {
    headers["X-A"] = input.a!;
  }
  if (isSerializableHeaderValue(input.b)) {
    headers["X-B"] = input.b!;
  }
  if (isSerializableHeaderValue(input.c)) {
    headers["X-C"] = (input.c! || []).map(_entry => _entry).join(', ');
  }
  let resolvedPath = "/NullAndEmptyHeadersServer";
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlOmitsNullSerializesEmptyStringCommand(
  input: OmitsNullSerializesEmptyStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/OmitsNullSerializesEmptyString";
  const query: any = {};
  if (input.emptyString !== undefined) {
    query["Empty"] = input.emptyString;
  }
  if (input.nullValue !== undefined) {
    query["Null"] = input.nullValue;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body,
  });
}

export async function serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand(
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/QueryIdempotencyTokenAutoFill";
  const query: any = {};
  if (input.token !== undefined) {
    query["token"] = input.token;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body,
  });
}

export async function serializeAws_restXmlRecursiveShapesCommand(
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/RecursiveShapes";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("RecursiveShapesInputOutput");
  if (input.nested !== undefined) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested1(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlSimpleScalarPropertiesCommand(
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  if (isSerializableHeaderValue(input.foo)) {
    headers["X-Foo"] = input.foo!;
  }
  let resolvedPath = "/SimpleScalarProperties";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("SimpleScalarPropertiesInputOutput");
  if (input.byteValue !== undefined) {
    const node = new __XmlNode("Byte").addChildNode(new __XmlText(String(input.byteValue))).withName("byteValue");
    bodyNode.addChildNode(node);
  }
  if (input.doubleValue !== undefined) {
    const node = new __XmlNode("Double").addChildNode(new __XmlText(String(input.doubleValue))).withName("DoubleDribble");
    bodyNode.addChildNode(node);
  }
  if (input.falseBooleanValue !== undefined) {
    const node = new __XmlNode("Boolean").addChildNode(new __XmlText(String(input.falseBooleanValue))).withName("falseBooleanValue");
    bodyNode.addChildNode(node);
  }
  if (input.floatValue !== undefined) {
    const node = new __XmlNode("Float").addChildNode(new __XmlText(String(input.floatValue))).withName("floatValue");
    bodyNode.addChildNode(node);
  }
  if (input.integerValue !== undefined) {
    const node = new __XmlNode("Integer").addChildNode(new __XmlText(String(input.integerValue))).withName("integerValue");
    bodyNode.addChildNode(node);
  }
  if (input.longValue !== undefined) {
    const node = new __XmlNode("Long").addChildNode(new __XmlText(String(input.longValue))).withName("longValue");
    bodyNode.addChildNode(node);
  }
  if (input.shortValue !== undefined) {
    const node = new __XmlNode("Short").addChildNode(new __XmlText(String(input.shortValue))).withName("shortValue");
    bodyNode.addChildNode(node);
  }
  if (input.stringValue !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.stringValue)).withName("stringValue");
    bodyNode.addChildNode(node);
  }
  if (input.trueBooleanValue !== undefined) {
    const node = new __XmlNode("Boolean").addChildNode(new __XmlText(String(input.trueBooleanValue))).withName("trueBooleanValue");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlTimestampFormatHeadersCommand(
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  if (isSerializableHeaderValue(input.defaultFormat)) {
    headers["X-defaultFormat"] = __dateToUtcString(input.defaultFormat!).toString();
  }
  if (isSerializableHeaderValue(input.memberDateTime)) {
    headers["X-memberDateTime"] = (input.memberDateTime!.toISOString().split('.')[0]+"Z").toString();
  }
  if (isSerializableHeaderValue(input.memberEpochSeconds)) {
    headers["X-memberEpochSeconds"] = Math.round(input.memberEpochSeconds!.getTime() / 1000).toString();
  }
  if (isSerializableHeaderValue(input.memberHttpDate)) {
    headers["X-memberHttpDate"] = __dateToUtcString(input.memberHttpDate!).toString();
  }
  if (isSerializableHeaderValue(input.targetDateTime)) {
    headers["X-targetDateTime"] = (input.targetDateTime!.toISOString().split('.')[0]+"Z").toString();
  }
  if (isSerializableHeaderValue(input.targetEpochSeconds)) {
    headers["X-targetEpochSeconds"] = Math.round(input.targetEpochSeconds!.getTime() / 1000).toString();
  }
  if (isSerializableHeaderValue(input.targetHttpDate)) {
    headers["X-targetHttpDate"] = __dateToUtcString(input.targetHttpDate!).toString();
  }
  let resolvedPath = "/TimestampFormatHeaders";
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlAttributesCommand(
  input: XmlAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlAttributes";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("XmlAttributesInputOutput");
  if (input.attr !== undefined) {
    bodyNode.addAttribute("test", input.attr);
  }
  if (input.foo !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.foo)).withName("foo");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlAttributesOnPayloadCommand(
  input: XmlAttributesOnPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlAttributesOnPayload";
  let body: any;
  let contents: any;
  if (input.payload !== undefined) {
    contents = serializeAws_restXmlXmlAttributesInputOutput(input.payload, context);
    body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    body += contents.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlBlobsCommand(
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlBlobs";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("XmlBlobsInputOutput");
  if (input.data !== undefined) {
    const node = new __XmlNode("Blob").addChildNode(new __XmlText(context.base64Encoder(input.data))).withName("data");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlEnumsCommand(
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlEnums";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("XmlEnumsInputOutput");
  if (input.fooEnum1 !== undefined) {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(input.fooEnum1)).withName("fooEnum1");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnum2 !== undefined) {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(input.fooEnum2)).withName("fooEnum2");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnum3 !== undefined) {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(input.fooEnum3)).withName("fooEnum3");
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
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlListsCommand(
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlLists";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
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
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlMapsCommand(
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlMaps";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
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
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlMapsXmlNameCommand(
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlMapsXmlName";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
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
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlNamespacesCommand(
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlNamespaces";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("XmlNamespacesInputOutput");
  bodyNode.addAttribute("xmlns", "http://foo.com");
  if (input.nested !== undefined) {
    const node = serializeAws_restXmlXmlNamespaceNested(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restXmlXmlTimestampsCommand(
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/xml";
  let resolvedPath = "/XmlTimestamps";
  let body: any;
  body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  const bodyNode = new __XmlNode("XmlTimestampsInputOutput");
  if (input.dateTime !== undefined) {
    const node = new __XmlNode("Timestamp").addChildNode(new __XmlText((input.dateTime.toISOString().split('.')[0]+"Z").toString())).withName("dateTime");
    bodyNode.addChildNode(node);
  }
  if (input.epochSeconds !== undefined) {
    const node = new __XmlNode("Timestamp").addChildNode(new __XmlText(Math.round(input.epochSeconds.getTime() / 1000).toString())).withName("epochSeconds");
    bodyNode.addChildNode(node);
  }
  if (input.httpDate !== undefined) {
    const node = new __XmlNode("Timestamp").addChildNode(new __XmlText(__dateToUtcString(input.httpDate).toString())).withName("httpDate");
    bodyNode.addChildNode(node);
  }
  if (input.normal !== undefined) {
    const node = new __XmlNode("Timestamp").addChildNode(new __XmlText((input.normal.toISOString().split('.')[0]+"Z"))).withName("normal");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function deserializeAws_restXmlAllQueryStringTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlAllQueryStringTypesCommandError(output, context);
  }
  const contents: AllQueryStringTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlAllQueryStringTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<AllQueryStringTypesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlConstantAndVariableQueryStringCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlConstantAndVariableQueryStringCommandError(output, context);
  }
  const contents: ConstantAndVariableQueryStringCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlConstantAndVariableQueryStringCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ConstantAndVariableQueryStringCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlConstantQueryStringCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlConstantQueryStringCommandError(output, context);
  }
  const contents: ConstantQueryStringCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlConstantQueryStringCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ConstantQueryStringCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlEmptyInputAndEmptyOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError(output, context);
  }
  const contents: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EmptyInputAndEmptyOutputOutput",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<EmptyInputAndEmptyOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlFlattenedXmlMapCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlFlattenedXmlMapCommandError(output, context);
  }
  const contents: FlattenedXmlMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlattenedXmlMapInputOutput",
    myMap: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data.myMap === "") {
    contents.myMap = {};
  }
  if (data['myMap'] !== undefined) {
    const wrappedItem = (data['myMap'] instanceof Array) ? data['myMap'] : [data['myMap']];
    contents.myMap = deserializeAws_restXmlFooEnumMap(wrappedItem, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlFlattenedXmlMapCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<FlattenedXmlMapCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError(output, context);
  }
  const contents: FlattenedXmlMapWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlattenedXmlMapWithXmlNameInputOutput",
    myMap: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data.KVP === "") {
    contents.myMap = {};
  }
  if (data['KVP'] !== undefined) {
    const wrappedItem = (data['KVP'] instanceof Array) ? data['KVP'] : [data['KVP']];
    contents.myMap = deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap(wrappedItem, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlGreetingWithErrorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGreetingWithErrorsCommandError(output, context);
  }
  const contents: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GreetingWithErrorsOutput",
    greeting: undefined,
  };
  if (output.headers["x-greeting"] !== undefined) {
    contents.greeting = output.headers['x-greeting'];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlGreetingWithErrorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GreetingWithErrorsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocols.tests.restxml#ComplexError":
      response = {
        ...await deserializeAws_restXmlComplexErrorResponse(parsedOutput, context),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      }
      break;
    case "InvalidGreeting":
    case "aws.protocols.tests.restxml#InvalidGreeting":
      response = {
        ...await deserializeAws_restXmlInvalidGreetingResponse(parsedOutput, context),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      }
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPayloadTraitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadTraitsCommandError(output, context);
  }
  const contents: HttpPayloadTraitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadTraitsInputOutput",
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers['x-foo'];
  }
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpPayloadTraitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPayloadTraitsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError(output, context);
  }
  const contents: HttpPayloadTraitsWithMediaTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadTraitsWithMediaTypeInputOutput",
    blob: undefined,
    foo: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers['x-foo'];
  }
  const data: any = await collectBody(output.body, context);
  contents.blob = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPayloadWithStructureCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithStructureCommandError(output, context);
  }
  const contents: HttpPayloadWithStructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithStructureInputOutput",
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlNestedPayload(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpPayloadWithStructureCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPayloadWithStructureCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPayloadWithXmlNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithXmlNameCommandError(output, context);
  }
  const contents: HttpPayloadWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithXmlNameInputOutput",
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlPayloadWithXmlName(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpPayloadWithXmlNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPayloadWithXmlNameCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError(output, context);
  }
  const contents: HttpPayloadWithXmlNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithXmlNamespaceInputOutput",
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlPayloadWithXmlNamespace(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError(output, context);
  }
  const contents: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithXmlNamespaceAndPrefixInputOutput",
    nested: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpPrefixHeadersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPrefixHeadersCommandError(output, context);
  }
  const contents: HttpPrefixHeadersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPrefixHeadersInputOutput",
    foo: undefined,
    fooMap: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers['x-foo'];
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
}

async function deserializeAws_restXmlHttpPrefixHeadersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpPrefixHeadersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError(output, context);
  }
  const contents: HttpRequestWithGreedyLabelInPathCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpRequestWithLabelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpRequestWithLabelsCommandError(output, context);
  }
  const contents: HttpRequestWithLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpRequestWithLabelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpRequestWithLabelsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError(output, context);
  }
  const contents: HttpRequestWithLabelsAndTimestampFormatCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlIgnoreQueryParamsInResponseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError(output, context);
  }
  const contents: IgnoreQueryParamsInResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IgnoreQueryParamsInResponseOutput",
    baz: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['baz'] !== undefined) {
    contents.baz = ((data['baz']['#text'] !== undefined) ? data['baz']['#text'] : data['baz']);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<IgnoreQueryParamsInResponseCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlInputAndOutputWithHeadersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlInputAndOutputWithHeadersCommandError(output, context);
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
    headerTrueBool: undefined,
  };
  if (output.headers["x-booleanlist"] !== undefined) {
    contents.headerBooleanList = (output.headers['x-booleanlist'] || "").split(',').map(_entry => _entry.trim() === 'true');
  }
  if (output.headers["x-byte"] !== undefined) {
    contents.headerByte = parseInt(output.headers['x-byte'], 10);
  }
  if (output.headers["x-double"] !== undefined) {
    contents.headerDouble = parseFloat(output.headers['x-double']);
  }
  if (output.headers["x-enum"] !== undefined) {
    contents.headerEnum = output.headers['x-enum'];
  }
  if (output.headers["x-enumlist"] !== undefined) {
    contents.headerEnumList = (output.headers['x-enumlist'] || "").split(',').map(_entry => _entry.trim());
  }
  if (output.headers["x-boolean2"] !== undefined) {
    contents.headerFalseBool = output.headers['x-boolean2'] === 'true';
  }
  if (output.headers["x-float"] !== undefined) {
    contents.headerFloat = parseFloat(output.headers['x-float']);
  }
  if (output.headers["x-integer"] !== undefined) {
    contents.headerInteger = parseInt(output.headers['x-integer'], 10);
  }
  if (output.headers["x-integerlist"] !== undefined) {
    contents.headerIntegerList = (output.headers['x-integerlist'] || "").split(',').map(_entry => parseInt(_entry.trim(), 10));
  }
  if (output.headers["x-long"] !== undefined) {
    contents.headerLong = parseInt(output.headers['x-long'], 10);
  }
  if (output.headers["x-short"] !== undefined) {
    contents.headerShort = parseInt(output.headers['x-short'], 10);
  }
  if (output.headers["x-string"] !== undefined) {
    contents.headerString = output.headers['x-string'];
  }
  if (output.headers["x-stringlist"] !== undefined) {
    contents.headerStringList = (output.headers['x-stringlist'] || "").split(',').map(_entry => _entry.trim());
  }
  if (output.headers["x-stringset"] !== undefined) {
    contents.headerStringSet = new Set((output.headers['x-stringset'] || "").split(',').map(_entry => _entry.trim()));
  }
  if (output.headers["x-timestamplist"] !== undefined) {
    contents.headerTimestampList = __splitEvery((output.headers['x-timestamplist'] || ""), ',', 2).map(_entry => new Date(_entry.trim()));
  }
  if (output.headers["x-boolean1"] !== undefined) {
    contents.headerTrueBool = output.headers['x-boolean1'] === 'true';
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlInputAndOutputWithHeadersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<InputAndOutputWithHeadersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlNoInputAndNoOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNoInputAndNoOutputCommandError(output, context);
  }
  const contents: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlNoInputAndNoOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NoInputAndNoOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlNoInputAndOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNoInputAndOutputCommandError(output, context);
  }
  const contents: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NoInputAndOutputOutput",
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlNoInputAndOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NoInputAndOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlNullAndEmptyHeadersClientCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNullAndEmptyHeadersClientCommandError(output, context);
  }
  const contents: NullAndEmptyHeadersClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NullAndEmptyHeadersIO",
    a: undefined,
    b: undefined,
    c: undefined,
  };
  if (output.headers["x-a"] !== undefined) {
    contents.a = output.headers['x-a'];
  }
  if (output.headers["x-b"] !== undefined) {
    contents.b = output.headers['x-b'];
  }
  if (output.headers["x-c"] !== undefined) {
    contents.c = (output.headers['x-c'] || "").split(',').map(_entry => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlNullAndEmptyHeadersClientCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NullAndEmptyHeadersClientCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlNullAndEmptyHeadersServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNullAndEmptyHeadersServerCommandError(output, context);
  }
  const contents: NullAndEmptyHeadersServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NullAndEmptyHeadersIO",
    a: undefined,
    b: undefined,
    c: undefined,
  };
  if (output.headers["x-a"] !== undefined) {
    contents.a = output.headers['x-a'];
  }
  if (output.headers["x-b"] !== undefined) {
    contents.b = output.headers['x-b'];
  }
  if (output.headers["x-c"] !== undefined) {
    contents.c = (output.headers['x-c'] || "").split(',').map(_entry => _entry.trim());
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlNullAndEmptyHeadersServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NullAndEmptyHeadersServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError(output, context);
  }
  const contents: OmitsNullSerializesEmptyStringCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<OmitsNullSerializesEmptyStringCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  const contents: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlRecursiveShapesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlRecursiveShapesCommandError(output, context);
  }
  const contents: RecursiveShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecursiveShapesInputOutput",
    nested: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['nested'] !== undefined) {
    contents.nested = deserializeAws_restXmlRecursiveShapesInputOutputNested1(data['nested'], context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlRecursiveShapesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RecursiveShapesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlSimpleScalarPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlSimpleScalarPropertiesCommandError(output, context);
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
    trueBooleanValue: undefined,
  };
  if (output.headers["x-foo"] !== undefined) {
    contents.foo = output.headers['x-foo'];
  }
  const data: any = (await parseBody(output.body, context));
  if (data['byteValue'] !== undefined) {
    contents.byteValue = parseInt(((data['byteValue']['#text'] !== undefined) ? data['byteValue']['#text'] : data['byteValue']));
  }
  if (data['DoubleDribble'] !== undefined) {
    contents.doubleValue = parseFloat(((data['DoubleDribble']['#text'] !== undefined) ? data['DoubleDribble']['#text'] : data['DoubleDribble']));
  }
  if (data['falseBooleanValue'] !== undefined) {
    contents.falseBooleanValue = ((data['falseBooleanValue']['#text'] !== undefined) ? data['falseBooleanValue']['#text'] : data['falseBooleanValue']) == 'true';
  }
  if (data['floatValue'] !== undefined) {
    contents.floatValue = parseFloat(((data['floatValue']['#text'] !== undefined) ? data['floatValue']['#text'] : data['floatValue']));
  }
  if (data['integerValue'] !== undefined) {
    contents.integerValue = parseInt(((data['integerValue']['#text'] !== undefined) ? data['integerValue']['#text'] : data['integerValue']));
  }
  if (data['longValue'] !== undefined) {
    contents.longValue = parseInt(((data['longValue']['#text'] !== undefined) ? data['longValue']['#text'] : data['longValue']));
  }
  if (data['shortValue'] !== undefined) {
    contents.shortValue = parseInt(((data['shortValue']['#text'] !== undefined) ? data['shortValue']['#text'] : data['shortValue']));
  }
  if (data['stringValue'] !== undefined) {
    contents.stringValue = ((data['stringValue']['#text'] !== undefined) ? data['stringValue']['#text'] : data['stringValue']);
  }
  if (data['trueBooleanValue'] !== undefined) {
    contents.trueBooleanValue = ((data['trueBooleanValue']['#text'] !== undefined) ? data['trueBooleanValue']['#text'] : data['trueBooleanValue']) == 'true';
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlSimpleScalarPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<SimpleScalarPropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlTimestampFormatHeadersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlTimestampFormatHeadersCommandError(output, context);
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
    targetHttpDate: undefined,
  };
  if (output.headers["x-defaultformat"] !== undefined) {
    contents.defaultFormat = new Date(output.headers['x-defaultformat']);
  }
  if (output.headers["x-memberdatetime"] !== undefined) {
    contents.memberDateTime = new Date(output.headers['x-memberdatetime']);
  }
  if (output.headers["x-memberepochseconds"] !== undefined) {
    contents.memberEpochSeconds = new Date(Math.round(parseInt(output.headers['x-memberepochseconds'], 10) * 1000));
  }
  if (output.headers["x-memberhttpdate"] !== undefined) {
    contents.memberHttpDate = new Date(output.headers['x-memberhttpdate']);
  }
  if (output.headers["x-targetdatetime"] !== undefined) {
    contents.targetDateTime = new Date(output.headers['x-targetdatetime']);
  }
  if (output.headers["x-targetepochseconds"] !== undefined) {
    contents.targetEpochSeconds = new Date(Math.round(parseInt(output.headers['x-targetepochseconds'], 10) * 1000));
  }
  if (output.headers["x-targethttpdate"] !== undefined) {
    contents.targetHttpDate = new Date(output.headers['x-targethttpdate']);
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlTimestampFormatHeadersCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<TimestampFormatHeadersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlAttributesCommandError(output, context);
  }
  const contents: XmlAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlAttributesInputOutput",
    attr: undefined,
    foo: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['test'] !== undefined) {
    contents.attr = ((data['test']['#text'] !== undefined) ? data['test']['#text'] : data['test']);
  }
  if (data['foo'] !== undefined) {
    contents.foo = ((data['foo']['#text'] !== undefined) ? data['foo']['#text'] : data['foo']);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlAttributesOnPayloadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlAttributesOnPayloadCommandError(output, context);
  }
  const contents: XmlAttributesOnPayloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlAttributesOnPayloadInputOutput",
    payload: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.payload = deserializeAws_restXmlXmlAttributesInputOutput(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlAttributesOnPayloadCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlAttributesOnPayloadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlBlobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlBlobsCommandError(output, context);
  }
  const contents: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlBlobsInputOutput",
    data: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['data'] !== undefined) {
    contents.data = context.base64Decoder(((data['data']['#text'] !== undefined) ? data['data']['#text'] : data['data']));
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlBlobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlBlobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlEnumsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlEnumsCommandError(output, context);
  }
  const contents: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlEnumsInputOutput",
    fooEnum1: undefined,
    fooEnum2: undefined,
    fooEnum3: undefined,
    fooEnumList: undefined,
    fooEnumMap: undefined,
    fooEnumSet: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['fooEnum1'] !== undefined) {
    contents.fooEnum1 = ((data['fooEnum1']['#text'] !== undefined) ? data['fooEnum1']['#text'] : data['fooEnum1']);
  }
  if (data['fooEnum2'] !== undefined) {
    contents.fooEnum2 = ((data['fooEnum2']['#text'] !== undefined) ? data['fooEnum2']['#text'] : data['fooEnum2']);
  }
  if (data['fooEnum3'] !== undefined) {
    contents.fooEnum3 = ((data['fooEnum3']['#text'] !== undefined) ? data['fooEnum3']['#text'] : data['fooEnum3']);
  }
  if (data.fooEnumList === "") {
    contents.fooEnumList = [];
  }
  if (data['fooEnumList'] !== undefined && data['fooEnumList']['member'] !== undefined) {
    const wrappedItem = (data['fooEnumList']['member'] instanceof Array) ? data['fooEnumList']['member'] : [data['fooEnumList']['member']];
    contents.fooEnumList = deserializeAws_restXmlFooEnumList(wrappedItem, context);
  }
  if (data.fooEnumMap === "") {
    contents.fooEnumMap = {};
  }
  if (data['fooEnumMap'] !== undefined && data['fooEnumMap']['entry'] !== undefined) {
    const wrappedItem = (data['fooEnumMap']['entry'] instanceof Array) ? data['fooEnumMap']['entry'] : [data['fooEnumMap']['entry']];
    contents.fooEnumMap = deserializeAws_restXmlFooEnumMap(wrappedItem, context);
  }
  if (data.fooEnumSet === "") {
    contents.fooEnumSet = new Set([]);
  }
  if (data['fooEnumSet'] !== undefined && data['fooEnumSet']['member'] !== undefined) {
    const wrappedItem = (data['fooEnumSet']['member'] instanceof Array) ? data['fooEnumSet']['member'] : [data['fooEnumSet']['member']];
    contents.fooEnumSet = deserializeAws_restXmlFooEnumSet(wrappedItem, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlEnumsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlEnumsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlListsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlListsCommandError(output, context);
  }
  const contents: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlListsInputOutput",
    booleanList: undefined,
    enumList: undefined,
    flattenedList: undefined,
    flattenedList2: undefined,
    integerList: undefined,
    nestedStringList: undefined,
    renamedListMembers: undefined,
    stringList: undefined,
    stringSet: undefined,
    structureList: undefined,
    timestampList: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data.booleanList === "") {
    contents.booleanList = [];
  }
  if (data['booleanList'] !== undefined && data['booleanList']['member'] !== undefined) {
    const wrappedItem = (data['booleanList']['member'] instanceof Array) ? data['booleanList']['member'] : [data['booleanList']['member']];
    contents.booleanList = deserializeAws_restXmlBooleanList(wrappedItem, context);
  }
  if (data.enumList === "") {
    contents.enumList = [];
  }
  if (data['enumList'] !== undefined && data['enumList']['member'] !== undefined) {
    const wrappedItem = (data['enumList']['member'] instanceof Array) ? data['enumList']['member'] : [data['enumList']['member']];
    contents.enumList = deserializeAws_restXmlFooEnumList(wrappedItem, context);
  }
  if (data.flattenedList === "") {
    contents.flattenedList = [];
  }
  if (data['flattenedList'] !== undefined) {
    const wrappedItem = (data['flattenedList'] instanceof Array) ? data['flattenedList'] : [data['flattenedList']];
    contents.flattenedList = deserializeAws_restXmlRenamedListMembers(wrappedItem, context);
  }
  if (data.customName === "") {
    contents.flattenedList2 = [];
  }
  if (data['customName'] !== undefined) {
    const wrappedItem = (data['customName'] instanceof Array) ? data['customName'] : [data['customName']];
    contents.flattenedList2 = deserializeAws_restXmlRenamedListMembers(wrappedItem, context);
  }
  if (data.integerList === "") {
    contents.integerList = [];
  }
  if (data['integerList'] !== undefined && data['integerList']['member'] !== undefined) {
    const wrappedItem = (data['integerList']['member'] instanceof Array) ? data['integerList']['member'] : [data['integerList']['member']];
    contents.integerList = deserializeAws_restXmlIntegerList(wrappedItem, context);
  }
  if (data.nestedStringList === "") {
    contents.nestedStringList = [];
  }
  if (data['nestedStringList'] !== undefined && data['nestedStringList']['member'] !== undefined) {
    const wrappedItem = (data['nestedStringList']['member'] instanceof Array) ? data['nestedStringList']['member'] : [data['nestedStringList']['member']];
    contents.nestedStringList = deserializeAws_restXmlNestedStringList(wrappedItem, context);
  }
  if (data.renamed === "") {
    contents.renamedListMembers = [];
  }
  if (data['renamed'] !== undefined && data['renamed']['item'] !== undefined) {
    const wrappedItem = (data['renamed']['item'] instanceof Array) ? data['renamed']['item'] : [data['renamed']['item']];
    contents.renamedListMembers = deserializeAws_restXmlRenamedListMembers(wrappedItem, context);
  }
  if (data.stringList === "") {
    contents.stringList = [];
  }
  if (data['stringList'] !== undefined && data['stringList']['member'] !== undefined) {
    const wrappedItem = (data['stringList']['member'] instanceof Array) ? data['stringList']['member'] : [data['stringList']['member']];
    contents.stringList = deserializeAws_restXmlStringList(wrappedItem, context);
  }
  if (data.stringSet === "") {
    contents.stringSet = new Set([]);
  }
  if (data['stringSet'] !== undefined && data['stringSet']['member'] !== undefined) {
    const wrappedItem = (data['stringSet']['member'] instanceof Array) ? data['stringSet']['member'] : [data['stringSet']['member']];
    contents.stringSet = deserializeAws_restXmlStringSet(wrappedItem, context);
  }
  if (data.myStructureList === "") {
    contents.structureList = [];
  }
  if (data['myStructureList'] !== undefined && data['myStructureList']['item'] !== undefined) {
    const wrappedItem = (data['myStructureList']['item'] instanceof Array) ? data['myStructureList']['item'] : [data['myStructureList']['item']];
    contents.structureList = deserializeAws_restXmlStructureList(wrappedItem, context);
  }
  if (data.timestampList === "") {
    contents.timestampList = [];
  }
  if (data['timestampList'] !== undefined && data['timestampList']['member'] !== undefined) {
    const wrappedItem = (data['timestampList']['member'] instanceof Array) ? data['timestampList']['member'] : [data['timestampList']['member']];
    contents.timestampList = deserializeAws_restXmlTimestampList(wrappedItem, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlListsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlListsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlMapsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlMapsCommandError(output, context);
  }
  const contents: XmlMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlMapsInputOutput",
    myMap: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data.myMap === "") {
    contents.myMap = {};
  }
  if (data['myMap'] !== undefined && data['myMap']['entry'] !== undefined) {
    const wrappedItem = (data['myMap']['entry'] instanceof Array) ? data['myMap']['entry'] : [data['myMap']['entry']];
    contents.myMap = deserializeAws_restXmlXmlMapsInputOutputMap(wrappedItem, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlMapsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlMapsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlMapsXmlNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlMapsXmlNameCommandError(output, context);
  }
  const contents: XmlMapsXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlMapsXmlNameInputOutput",
    myMap: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data.myMap === "") {
    contents.myMap = {};
  }
  if (data['myMap'] !== undefined && data['myMap']['entry'] !== undefined) {
    const wrappedItem = (data['myMap']['entry'] instanceof Array) ? data['myMap']['entry'] : [data['myMap']['entry']];
    contents.myMap = deserializeAws_restXmlXmlMapsXmlNameInputOutputMap(wrappedItem, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlMapsXmlNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlMapsXmlNameCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlNamespacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlNamespacesCommandError(output, context);
  }
  const contents: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlNamespacesInputOutput",
    nested: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['nested'] !== undefined) {
    contents.nested = deserializeAws_restXmlXmlNamespaceNested(data['nested'], context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlNamespacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlNamespacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlXmlTimestampsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlTimestampsCommandError(output, context);
  }
  const contents: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlTimestampsInputOutput",
    dateTime: undefined,
    epochSeconds: undefined,
    httpDate: undefined,
    normal: undefined,
  };
  const data: any = (await parseBody(output.body, context));
  if (data['dateTime'] !== undefined) {
    contents.dateTime = new Date(data['dateTime']);
  }
  if (data['epochSeconds'] !== undefined) {
    contents.epochSeconds = new Date(data['epochSeconds']);
  }
  if (data['httpDate'] !== undefined) {
    contents.httpDate = new Date(data['httpDate']);
  }
  if (data['normal'] !== undefined) {
    contents.normal = new Date(data['normal']);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlXmlTimestampsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlTimestampsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restXmlComplexErrorResponse = async (
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
    contents.Header = parsedOutput.headers['x-header'];
  }
  const data: any = parsedOutput.body.Error;
  if (data['Nested'] !== undefined) {
    contents.Nested = deserializeAws_restXmlComplexNestedErrorData(data['Nested'], context);
  }
  if (data['TopLevel'] !== undefined) {
    contents.TopLevel = ((data['TopLevel']['#text'] !== undefined) ? data['TopLevel']['#text'] : data['TopLevel']);
  }
  return contents;
};

const deserializeAws_restXmlInvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const contents: InvalidGreeting = {
    name: "InvalidGreeting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data['Message'] !== undefined) {
    contents.Message = ((data['Message']['#text'] !== undefined) ? data['Message']['#text'] : data['Message']);
  }
  return contents;
};

const serializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  Object.keys(input).forEach(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String").addChildNode(new __XmlText(key)).withName("K");
    entryNode.addChildNode(keyNode);
    const node = new __XmlNode("String").addChildNode(new __XmlText(input[key]));
    entryNode.addChildNode(node.withName("V"));
    collectedNodes.push(entryNode);
  });
  return collectedNodes;
}

const serializeAws_restXmlNestedPayload = (
  input: NestedPayload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NestedPayload");
  if (input.greeting !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.greeting)).withName("greeting");
    bodyNode.addChildNode(node);
  }
  if (input.name !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.name)).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlPayloadWithXmlName = (
  input: PayloadWithXmlName,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("Hello");
  if (input.name !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.name)).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlPayloadWithXmlNamespace = (
  input: PayloadWithXmlNamespace,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespace");
  if (input.name !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.name)).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix = (
  input: PayloadWithXmlNamespaceAndPrefix,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespaceAndPrefix");
  if (input.name !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.name)).withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlRecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested1");
  if (input.foo !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.foo)).withName("foo");
    bodyNode.addChildNode(node);
  }
  if (input.nested !== undefined) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested2(input.nested, context).withName("nested");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlRecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested2");
  if (input.bar !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.bar)).withName("bar");
    bodyNode.addChildNode(node);
  }
  if (input.recursiveMember !== undefined) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested1(input.recursiveMember, context).withName("recursiveMember");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlRenamedListMembers = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    collectedNodes.push(node.withName("item"));
  }
  return collectedNodes;
}

const serializeAws_restXmlStructureList = (
  input: Array<StructureListMember>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = serializeAws_restXmlStructureListMember(entry, context);
    collectedNodes.push(node.withName("item"));
  }
  return collectedNodes;
}

const serializeAws_restXmlStructureListMember = (
  input: StructureListMember,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StructureListMember");
  if (input.a !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.a)).withName("value");
    bodyNode.addChildNode(node);
  }
  if (input.b !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.b)).withName("other");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlXmlAttributesInputOutput = (
  input: XmlAttributesInputOutput,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("XmlAttributesInputOutput");
  if (input.attr !== undefined) {
    bodyNode.addAttribute("test", input.attr);
  }
  if (input.foo !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.foo)).withName("foo");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlXmlMapsInputOutputMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  Object.keys(input).forEach(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String").addChildNode(new __XmlText(key)).withName("key");
    entryNode.addChildNode(keyNode);
    const node = serializeAws_restXmlGreetingStruct(input[key], context);
    entryNode.addChildNode(node.withName("value"));
    collectedNodes.push(entryNode);
  });
  return collectedNodes;
}

const serializeAws_restXmlXmlMapsXmlNameInputOutputMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  Object.keys(input).forEach(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String").addChildNode(new __XmlText(key)).withName("Attribute");
    entryNode.addChildNode(keyNode);
    const node = serializeAws_restXmlGreetingStruct(input[key], context);
    entryNode.addChildNode(node.withName("Setting"));
    collectedNodes.push(entryNode);
  });
  return collectedNodes;
}

const serializeAws_restXmlXmlNamespaceNested = (
  input: XmlNamespaceNested,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("XmlNamespaceNested");
  if (input.foo !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.foo)).withName("foo");
    node.addAttribute("xmlns:baz", "http://baz.com");
    bodyNode.addChildNode(node);
  }
  if (input.values !== undefined) {
    const nodes = serializeAws_restXmlXmlNamespacedList(input.values, context);
    const containerNode = new __XmlNode("values");
    containerNode.addAttribute("xmlns", "http://qux.com");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
}

const serializeAws_restXmlXmlNamespacedList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    node.addAttribute("xmlns", "http://bux.com");
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlBooleanList = (
  input: Array<boolean>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("PrimitiveBoolean").addChildNode(new __XmlText(String(entry)));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlFooEnumList = (
  input: Array<FooEnum | string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(entry));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlFooEnumMap = (
  input: { [key: string]: FooEnum | string },
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  Object.keys(input).forEach(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String").addChildNode(new __XmlText(key)).withName("key");
    entryNode.addChildNode(keyNode);
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(input[key]));
    entryNode.addChildNode(node.withName("value"));
    collectedNodes.push(entryNode);
  });
  return collectedNodes;
}

const serializeAws_restXmlFooEnumSet = (
  input: Set<FooEnum | string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(entry));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlGreetingStruct = (
  input: GreetingStruct,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("GreetingStruct");
  if (input.hi !== undefined) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(input.hi)).withName("hi");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
}

const serializeAws_restXmlIntegerList = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("Integer").addChildNode(new __XmlText(String(entry)));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlNestedStringList = (
  input: Array<Array<string>>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = serializeAws_restXmlStringList(entry, context);
    const container = new __XmlNode("member");
    for (let index in node) {
      const workingNode = node[index];
      container.addChildNode(workingNode);
    }
    collectedNodes.push(container);
  }
  return collectedNodes;
}

const serializeAws_restXmlStringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlStringSet = (
  input: Set<string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const serializeAws_restXmlTimestampList = (
  input: Array<Date>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("Timestamp").addChildNode(new __XmlText((entry.toISOString().split('.')[0]+"Z")));
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
}

const deserializeAws_restXmlComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  let contents: any = {
    __type: "ComplexNestedErrorData",
    Foo: undefined,
  };
  if (output['Foo'] !== undefined) {
    contents.Foo = ((output['Foo']['#text'] !== undefined) ? output['Foo']['#text'] : output['Foo']);
  }
  return contents;
}

const deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["K"]] = ((pair["V"]['#text'] !== undefined) ? pair["V"]['#text'] : pair["V"]);
  });
  return mapParams;
}

const deserializeAws_restXmlNestedPayload = (
  output: any,
  context: __SerdeContext
): NestedPayload => {
  let contents: any = {
    __type: "NestedPayload",
    greeting: undefined,
    name: undefined,
  };
  if (output['greeting'] !== undefined) {
    contents.greeting = ((output['greeting']['#text'] !== undefined) ? output['greeting']['#text'] : output['greeting']);
  }
  if (output['name'] !== undefined) {
    contents.name = ((output['name']['#text'] !== undefined) ? output['name']['#text'] : output['name']);
  }
  return contents;
}

const deserializeAws_restXmlPayloadWithXmlName = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlName => {
  let contents: any = {
    __type: "PayloadWithXmlName",
    name: undefined,
  };
  if (output['name'] !== undefined) {
    contents.name = ((output['name']['#text'] !== undefined) ? output['name']['#text'] : output['name']);
  }
  return contents;
}

const deserializeAws_restXmlPayloadWithXmlNamespace = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespace => {
  let contents: any = {
    __type: "PayloadWithXmlNamespace",
    name: undefined,
  };
  if (output['name'] !== undefined) {
    contents.name = ((output['name']['#text'] !== undefined) ? output['name']['#text'] : output['name']);
  }
  return contents;
}

const deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespaceAndPrefix => {
  let contents: any = {
    __type: "PayloadWithXmlNamespaceAndPrefix",
    name: undefined,
  };
  if (output['name'] !== undefined) {
    contents.name = ((output['name']['#text'] !== undefined) ? output['name']['#text'] : output['name']);
  }
  return contents;
}

const deserializeAws_restXmlRecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  let contents: any = {
    __type: "RecursiveShapesInputOutputNested1",
    foo: undefined,
    nested: undefined,
  };
  if (output['foo'] !== undefined) {
    contents.foo = ((output['foo']['#text'] !== undefined) ? output['foo']['#text'] : output['foo']);
  }
  if (output['nested'] !== undefined) {
    contents.nested = deserializeAws_restXmlRecursiveShapesInputOutputNested2(output['nested'], context);
  }
  return contents;
}

const deserializeAws_restXmlRecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  let contents: any = {
    __type: "RecursiveShapesInputOutputNested2",
    bar: undefined,
    recursiveMember: undefined,
  };
  if (output['bar'] !== undefined) {
    contents.bar = ((output['bar']['#text'] !== undefined) ? output['bar']['#text'] : output['bar']);
  }
  if (output['recursiveMember'] !== undefined) {
    contents.recursiveMember = deserializeAws_restXmlRecursiveShapesInputOutputNested1(output['recursiveMember'], context);
  }
  return contents;
}

const deserializeAws_restXmlRenamedListMembers = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry));
  });
  return contents;
}

const deserializeAws_restXmlStructureList = (
  output: any,
  context: __SerdeContext
): Array<StructureListMember> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_restXmlStructureListMember(entry, context));
  });
  return contents;
}

const deserializeAws_restXmlStructureListMember = (
  output: any,
  context: __SerdeContext
): StructureListMember => {
  let contents: any = {
    __type: "StructureListMember",
    a: undefined,
    b: undefined,
  };
  if (output['value'] !== undefined) {
    contents.a = ((output['value']['#text'] !== undefined) ? output['value']['#text'] : output['value']);
  }
  if (output['other'] !== undefined) {
    contents.b = ((output['other']['#text'] !== undefined) ? output['other']['#text'] : output['other']);
  }
  return contents;
}

const deserializeAws_restXmlXmlAttributesInputOutput = (
  output: any,
  context: __SerdeContext
): XmlAttributesInputOutput => {
  let contents: any = {
    __type: "XmlAttributesInputOutput",
    attr: undefined,
    foo: undefined,
  };
  if (output['test'] !== undefined) {
    contents.attr = ((output['test']['#text'] !== undefined) ? output['test']['#text'] : output['test']);
  }
  if (output['foo'] !== undefined) {
    contents.foo = ((output['foo']['#text'] !== undefined) ? output['foo']['#text'] : output['foo']);
  }
  return contents;
}

const deserializeAws_restXmlXmlMapsInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = deserializeAws_restXmlGreetingStruct(pair["value"], context);
  });
  return mapParams;
}

const deserializeAws_restXmlXmlMapsXmlNameInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["Attribute"]] = deserializeAws_restXmlGreetingStruct(pair["Setting"], context);
  });
  return mapParams;
}

const deserializeAws_restXmlXmlNamespaceNested = (
  output: any,
  context: __SerdeContext
): XmlNamespaceNested => {
  let contents: any = {
    __type: "XmlNamespaceNested",
    foo: undefined,
    values: undefined,
  };
  if (output['foo'] !== undefined) {
    contents.foo = ((output['foo']['#text'] !== undefined) ? output['foo']['#text'] : output['foo']);
  }
  if (output.values === "") {
    contents.values = [];
  }
  if (output['values'] !== undefined && output['values']['member'] !== undefined) {
    const wrappedItem = (output['values']['member'] instanceof Array) ? output['values']['member'] : [output['values']['member']];
    contents.values = deserializeAws_restXmlXmlNamespacedList(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_restXmlXmlNamespacedList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry));
  });
  return contents;
}

const deserializeAws_restXmlBooleanList = (
  output: any,
  context: __SerdeContext
): Array<boolean> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry) == 'true');
  });
  return contents;
}

const deserializeAws_restXmlFooEnumList = (
  output: any,
  context: __SerdeContext
): Array<FooEnum | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry));
  });
  return contents;
}

const deserializeAws_restXmlFooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = ((pair["value"]['#text'] !== undefined) ? pair["value"]['#text'] : pair["value"]);
  });
  return mapParams;
}

const deserializeAws_restXmlFooEnumSet = (
  output: any,
  context: __SerdeContext
): Set<FooEnum | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry));
  });
  return contents;
}

const deserializeAws_restXmlGreetingStruct = (
  output: any,
  context: __SerdeContext
): GreetingStruct => {
  let contents: any = {
    __type: "GreetingStruct",
    hi: undefined,
  };
  if (output['hi'] !== undefined) {
    contents.hi = ((output['hi']['#text'] !== undefined) ? output['hi']['#text'] : output['hi']);
  }
  return contents;
}

const deserializeAws_restXmlIntegerList = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(parseInt(((entry['#text'] !== undefined) ? entry['#text'] : entry)));
  });
  return contents;
}

const deserializeAws_restXmlNestedStringList = (
  output: any,
  context: __SerdeContext
): Array<Array<string>> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    const wrappedItem = (entry["member"] instanceof Array) ? entry["member"] : [entry["member"]];
    contents.push(deserializeAws_restXmlStringList(wrappedItem, context));
  });
  return contents;
}

const deserializeAws_restXmlStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry));
  });
  return contents;
}

const deserializeAws_restXmlStringSet = (
  output: any,
  context: __SerdeContext
): Set<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(((entry['#text'] !== undefined) ? entry['#text'] : entry));
  });
  return contents;
}

const deserializeAws_restXmlTimestampList = (
  output: any,
  context: __SerdeContext
): Array<Date> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(new Date(entry));
  });
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any, context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => {
  return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};

function isSerializableHeaderValue(value: any): boolean {
  return value !== undefined
      && value !== ""
      && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0)
      && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
}

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, { attributeNamePrefix: '', ignoreAttributes: false, parseNodeValue: false, tagValueProcessor: (val, tagName) => decodeEscapedXML(val) });
      const textNodeName = '#text';
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const loadRestXmlErrorCode = (
  output: __HttpResponse,
  data: any
): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return 'NotFound';
  }
  return '';
};
