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
  FlattenedXmlMapCommandInput,
  FlattenedXmlMapCommandOutput
} from "../commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput
} from "../commands/FlattenedXmlMapWithXmlNameCommand";
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
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput
} from "../commands/HttpPayloadWithXmlNameCommand";
import {
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
} from "../commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import {
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput
} from "../commands/HttpPayloadWithXmlNamespaceCommand";
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
  XmlAttributesCommandInput,
  XmlAttributesCommandOutput
} from "../commands/XmlAttributesCommand";
import {
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput
} from "../commands/XmlAttributesOnPayloadCommand";
import {
  XmlBlobsCommandInput,
  XmlBlobsCommandOutput
} from "../commands/XmlBlobsCommand";
import {
  XmlEnumsCommandInput,
  XmlEnumsCommandOutput
} from "../commands/XmlEnumsCommand";
import {
  XmlListsCommandInput,
  XmlListsCommandOutput
} from "../commands/XmlListsCommand";
import {
  XmlMapsCommandInput,
  XmlMapsCommandOutput
} from "../commands/XmlMapsCommand";
import {
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput
} from "../commands/XmlMapsXmlNameCommand";
import {
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput
} from "../commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput
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
  XmlNamespaceNested
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  splitEvery as __splitEvery
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import {
  XmlNode as __XmlNode,
  XmlText as __XmlText
} from "@aws-sdk/xml-builder";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restXmlAllQueryStringTypesCommand = async (
  input: AllQueryStringTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/AllQueryStringTypesInput";
  const query: any = {
    ...(input.queryBoolean !== undefined && {
      Boolean: input.queryBoolean.toString()
    }),
    ...(input.queryBooleanList !== undefined && {
      BooleanList: (input.queryBooleanList || []).map(_entry =>
        _entry.toString()
      )
    }),
    ...(input.queryByte !== undefined && { Byte: input.queryByte.toString() }),
    ...(input.queryDouble !== undefined && {
      Double:
        input.queryDouble % 1 == 0
          ? input.queryDouble + ".0"
          : input.queryDouble.toString()
    }),
    ...(input.queryDoubleList !== undefined && {
      DoubleList: (input.queryDoubleList || []).map(_entry =>
        _entry % 1 == 0 ? _entry + ".0" : _entry.toString()
      )
    }),
    ...(input.queryEnum !== undefined && { Enum: input.queryEnum }),
    ...(input.queryEnumList !== undefined && {
      EnumList: (input.queryEnumList || []).map(_entry => _entry)
    }),
    ...(input.queryFloat !== undefined && {
      Float:
        input.queryFloat % 1 == 0
          ? input.queryFloat + ".0"
          : input.queryFloat.toString()
    }),
    ...(input.queryInteger !== undefined && {
      Integer: input.queryInteger.toString()
    }),
    ...(input.queryIntegerList !== undefined && {
      IntegerList: (input.queryIntegerList || []).map(_entry =>
        _entry.toString()
      )
    }),
    ...(input.queryIntegerSet !== undefined && {
      IntegerSet: (
        Array.from(input.queryIntegerSet.values()) || []
      ).map(_entry => _entry.toString())
    }),
    ...(input.queryLong !== undefined && { Long: input.queryLong.toString() }),
    ...(input.queryShort !== undefined && {
      Short: input.queryShort.toString()
    }),
    ...(input.queryString !== undefined && { String: input.queryString }),
    ...(input.queryStringList !== undefined && {
      StringList: (input.queryStringList || []).map(_entry => _entry)
    }),
    ...(input.queryStringSet !== undefined && {
      StringSet: (Array.from(input.queryStringSet.values()) || []).map(
        _entry => _entry
      )
    }),
    ...(input.queryTimestamp !== undefined && {
      Timestamp: (
        input.queryTimestamp.toISOString().split(".")[0] + "Z"
      ).toString()
    }),
    ...(input.queryTimestampList !== undefined && {
      TimestampList: (input.queryTimestampList || []).map(_entry =>
        (_entry.toISOString().split(".")[0] + "Z").toString()
      )
    })
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

export const serializeAws_restXmlConstantAndVariableQueryStringCommand = async (
  input: ConstantAndVariableQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ConstantAndVariableQueryString";
  const query: any = {
    foo: "bar",
    ...(input.baz !== undefined && { baz: input.baz }),
    ...(input.maybeSet !== undefined && { maybeSet: input.maybeSet })
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

export const serializeAws_restXmlConstantQueryStringCommand = async (
  input: ConstantQueryStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restXmlEmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/EmptyInputAndEmptyOutput";
  let body: any;
  body = "";
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

export const serializeAws_restXmlFlattenedXmlMapCommand = async (
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/FlattenedXmlMap";
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

export const serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand = async (
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/FlattenedXmlMapWithXmlName";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("FlattenedXmlMapWithXmlNameInputOutput");
  if (input.myMap !== undefined) {
    const nodes = serializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap(
      input.myMap,
      context
    );
    nodes.map((node: any) => {
      node = node.withName("KVP");
      bodyNode.addChildNode(node);
    });
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlGreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GreetingWithErrors";
  let body: any;
  body = "";
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

export const serializeAws_restXmlHttpPayloadTraitsCommand = async (
  input: HttpPayloadTraitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.foo) && { "X-Foo": input.foo! })
  };
  let resolvedPath = "/HttpPayloadTraits";
  let body: any;
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
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

export const serializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand = async (
  input: HttpPayloadTraitsWithMediaTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "text/plain",
    ...(isSerializableHeaderValue(input.foo) && { "X-Foo": input.foo! })
  };
  let resolvedPath = "/HttpPayloadTraitsWithMediaType";
  let body: any;
  let contents: any;
  if (input.blob !== undefined) {
    contents = input.blob;
    body = contents;
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

export const serializeAws_restXmlHttpPayloadWithStructureCommand = async (
  input: HttpPayloadWithStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/HttpPayloadWithStructure";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlNestedPayload(input.nested, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

export const serializeAws_restXmlHttpPayloadWithXmlNameCommand = async (
  input: HttpPayloadWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/HttpPayloadWithXmlName";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlName(input.nested, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

export const serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand = async (
  input: HttpPayloadWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/HttpPayloadWithXmlNamespace";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlNamespace(
      input.nested,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://foo.com");
    body += contents.toString();
  }
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

export const serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/HttpPayloadWithXmlNamespaceAndPrefix";
  let body: any;
  let contents: any;
  if (input.nested !== undefined) {
    contents = serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(
      input.nested,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns:baz", "http://foo.com");
    body += contents.toString();
  }
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

export const serializeAws_restXmlHttpPrefixHeadersCommand = async (
  input: HttpPrefixHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.foo) && { "X-Foo": input.foo! }),
    ...(input.fooMap !== undefined &&
      Object.keys(input.fooMap).reduce((acc: any, suffix: string) => {
        acc["X-Foo-" + suffix] = input.fooMap![suffix];
        return acc;
      }, {}))
  };
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

export const serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand = async (
  input: HttpRequestWithGreedyLabelInPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restXmlHttpRequestWithLabelsCommand = async (
  input: HttpRequestWithLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand = async (
  input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restXmlIgnoreQueryParamsInResponseCommand = async (
  input: IgnoreQueryParamsInResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/IgnoreQueryParamsInResponse";
  let body: any;
  body = "";
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

export const serializeAws_restXmlInputAndOutputWithHeadersCommand = async (
  input: InputAndOutputWithHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.headerBooleanList) && {
      "X-BooleanList": (input.headerBooleanList! || [])
        .map(_entry => _entry.toString())
        .join(", ")
    }),
    ...(isSerializableHeaderValue(input.headerByte) && {
      "X-Byte": input.headerByte!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerDouble) && {
      "X-Double":
        input.headerDouble! % 1 == 0
          ? input.headerDouble! + ".0"
          : input.headerDouble!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerEnum) && {
      "X-Enum": input.headerEnum!
    }),
    ...(isSerializableHeaderValue(input.headerEnumList) && {
      "X-EnumList": (input.headerEnumList! || [])
        .map(_entry => _entry)
        .join(", ")
    }),
    ...(isSerializableHeaderValue(input.headerFalseBool) && {
      "X-Boolean2": input.headerFalseBool!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerFloat) && {
      "X-Float":
        input.headerFloat! % 1 == 0
          ? input.headerFloat! + ".0"
          : input.headerFloat!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerInteger) && {
      "X-Integer": input.headerInteger!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerIntegerList) && {
      "X-IntegerList": (input.headerIntegerList! || [])
        .map(_entry => _entry.toString())
        .join(", ")
    }),
    ...(isSerializableHeaderValue(input.headerLong) && {
      "X-Long": input.headerLong!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerShort) && {
      "X-Short": input.headerShort!.toString()
    }),
    ...(isSerializableHeaderValue(input.headerString) && {
      "X-String": input.headerString!
    }),
    ...(isSerializableHeaderValue(input.headerStringList) && {
      "X-StringList": (input.headerStringList! || [])
        .map(_entry => _entry)
        .join(", ")
    }),
    ...(isSerializableHeaderValue(input.headerStringSet) && {
      "X-StringSet": (Array.from(input.headerStringSet!.values()) || [])
        .map(_entry => _entry)
        .join(", ")
    }),
    ...(isSerializableHeaderValue(input.headerTimestampList) && {
      "X-TimestampList": (input.headerTimestampList! || [])
        .map(_entry => __dateToUtcString(_entry).toString())
        .join(", ")
    }),
    ...(isSerializableHeaderValue(input.headerTrueBool) && {
      "X-Boolean1": input.headerTrueBool!.toString()
    })
  };
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

export const serializeAws_restXmlNoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/NoInputAndNoOutput";
  let body: any;
  body = "";
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

export const serializeAws_restXmlNoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/NoInputAndOutputOutput";
  let body: any;
  body = "";
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

export const serializeAws_restXmlNullAndEmptyHeadersClientCommand = async (
  input: NullAndEmptyHeadersClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.a) && { "X-A": input.a! }),
    ...(isSerializableHeaderValue(input.b) && { "X-B": input.b! }),
    ...(isSerializableHeaderValue(input.c) && {
      "X-C": (input.c! || []).map(_entry => _entry).join(", ")
    })
  };
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

export const serializeAws_restXmlNullAndEmptyHeadersServerCommand = async (
  input: NullAndEmptyHeadersServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.a) && { "X-A": input.a! }),
    ...(isSerializableHeaderValue(input.b) && { "X-B": input.b! }),
    ...(isSerializableHeaderValue(input.c) && {
      "X-C": (input.c! || []).map(_entry => _entry).join(", ")
    })
  };
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

export const serializeAws_restXmlOmitsNullSerializesEmptyStringCommand = async (
  input: OmitsNullSerializesEmptyStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/OmitsNullSerializesEmptyString";
  const query: any = {
    ...(input.emptyString !== undefined && { Empty: input.emptyString }),
    ...(input.nullValue !== undefined && { Null: input.nullValue })
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

export const serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/QueryIdempotencyTokenAutoFill";
  const query: any = {
    ...(input.token !== undefined && { token: input.token })
  };
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

export const serializeAws_restXmlRecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/RecursiveShapes";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("RecursiveShapesInputOutput");
  if (input.nested !== undefined) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested1(
      input.nested,
      context
    ).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlSimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.foo) && { "X-Foo": input.foo! })
  };
  let resolvedPath = "/SimpleScalarProperties";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("SimpleScalarPropertiesInputOutput");
  if (input.byteValue !== undefined) {
    const node = new __XmlNode("Byte")
      .addChildNode(new __XmlText(String(input.byteValue)))
      .withName("byteValue");
    bodyNode.addChildNode(node);
  }
  if (input.doubleValue !== undefined) {
    const node = new __XmlNode("Double")
      .addChildNode(new __XmlText(String(input.doubleValue)))
      .withName("DoubleDribble");
    bodyNode.addChildNode(node);
  }
  if (input.falseBooleanValue !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.falseBooleanValue)))
      .withName("falseBooleanValue");
    bodyNode.addChildNode(node);
  }
  if (input.floatValue !== undefined) {
    const node = new __XmlNode("Float")
      .addChildNode(new __XmlText(String(input.floatValue)))
      .withName("floatValue");
    bodyNode.addChildNode(node);
  }
  if (input.integerValue !== undefined) {
    const node = new __XmlNode("Integer")
      .addChildNode(new __XmlText(String(input.integerValue)))
      .withName("integerValue");
    bodyNode.addChildNode(node);
  }
  if (input.longValue !== undefined) {
    const node = new __XmlNode("Long")
      .addChildNode(new __XmlText(String(input.longValue)))
      .withName("longValue");
    bodyNode.addChildNode(node);
  }
  if (input.shortValue !== undefined) {
    const node = new __XmlNode("Short")
      .addChildNode(new __XmlText(String(input.shortValue)))
      .withName("shortValue");
    bodyNode.addChildNode(node);
  }
  if (input.stringValue !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.stringValue))
      .withName("stringValue");
    bodyNode.addChildNode(node);
  }
  if (input.trueBooleanValue !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.trueBooleanValue)))
      .withName("trueBooleanValue");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlTimestampFormatHeadersCommand = async (
  input: TimestampFormatHeadersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.defaultFormat) && {
      "X-defaultFormat": __dateToUtcString(input.defaultFormat!).toString()
    }),
    ...(isSerializableHeaderValue(input.memberDateTime) && {
      "X-memberDateTime": (
        input.memberDateTime!.toISOString().split(".")[0] + "Z"
      ).toString()
    }),
    ...(isSerializableHeaderValue(input.memberEpochSeconds) && {
      "X-memberEpochSeconds": Math.round(
        input.memberEpochSeconds!.getTime() / 1000
      ).toString()
    }),
    ...(isSerializableHeaderValue(input.memberHttpDate) && {
      "X-memberHttpDate": __dateToUtcString(input.memberHttpDate!).toString()
    }),
    ...(isSerializableHeaderValue(input.targetDateTime) && {
      "X-targetDateTime": (
        input.targetDateTime!.toISOString().split(".")[0] + "Z"
      ).toString()
    }),
    ...(isSerializableHeaderValue(input.targetEpochSeconds) && {
      "X-targetEpochSeconds": Math.round(
        input.targetEpochSeconds!.getTime() / 1000
      ).toString()
    }),
    ...(isSerializableHeaderValue(input.targetHttpDate) && {
      "X-targetHttpDate": __dateToUtcString(input.targetHttpDate!).toString()
    })
  };
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

export const serializeAws_restXmlXmlAttributesCommand = async (
  input: XmlAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlAttributes";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlAttributesInputOutput");
  if (input.attr !== undefined) {
    bodyNode.addAttribute("test", input.attr);
  }
  if (input.foo !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.foo))
      .withName("foo");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlXmlAttributesOnPayloadCommand = async (
  input: XmlAttributesOnPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlAttributesOnPayload";
  let body: any;
  let contents: any;
  if (input.payload !== undefined) {
    contents = serializeAws_restXmlXmlAttributesInputOutput(
      input.payload,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    body += contents.toString();
  }
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

export const serializeAws_restXmlXmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlBlobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlBlobsInputOutput");
  if (input.data !== undefined) {
    const node = new __XmlNode("Blob")
      .addChildNode(new __XmlText(context.base64Encoder(input.data)))
      .withName("data");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlXmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlEnums";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlEnumsInputOutput");
  if (input.fooEnum1 !== undefined) {
    const node = new __XmlNode("FooEnum")
      .addChildNode(new __XmlText(input.fooEnum1))
      .withName("fooEnum1");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnum2 !== undefined) {
    const node = new __XmlNode("FooEnum")
      .addChildNode(new __XmlText(input.fooEnum2))
      .withName("fooEnum2");
    bodyNode.addChildNode(node);
  }
  if (input.fooEnum3 !== undefined) {
    const node = new __XmlNode("FooEnum")
      .addChildNode(new __XmlText(input.fooEnum3))
      .withName("fooEnum3");
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

export const serializeAws_restXmlXmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlLists";
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
    const nodes = serializeAws_restXmlRenamedListMembers(
      input.flattenedList,
      context
    );
    nodes.map((node: any) => {
      node = node.withName("flattenedList");
      bodyNode.addChildNode(node);
    });
  }
  if (input.flattenedList2 !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(
      input.flattenedList2,
      context
    );
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
    const nodes = serializeAws_restXmlNestedStringList(
      input.nestedStringList,
      context
    );
    const containerNode = new __XmlNode("nestedStringList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.renamedListMembers !== undefined) {
    const nodes = serializeAws_restXmlRenamedListMembers(
      input.renamedListMembers,
      context
    );
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
    const nodes = serializeAws_restXmlStructureList(
      input.structureList,
      context
    );
    const containerNode = new __XmlNode("myStructureList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.timestampList !== undefined) {
    const nodes = serializeAws_restXmlTimestampList(
      input.timestampList,
      context
    );
    const containerNode = new __XmlNode("timestampList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlXmlMapsCommand = async (
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlMaps";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlMapsInputOutput");
  if (input.myMap !== undefined) {
    const nodes = serializeAws_restXmlXmlMapsInputOutputMap(
      input.myMap,
      context
    );
    const containerNode = new __XmlNode("myMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlXmlMapsXmlNameCommand = async (
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlMapsXmlName";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlMapsXmlNameInputOutput");
  if (input.myMap !== undefined) {
    const nodes = serializeAws_restXmlXmlMapsXmlNameInputOutputMap(
      input.myMap,
      context
    );
    const containerNode = new __XmlNode("myMap");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlXmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlNamespaces";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlNamespacesInputOutput");
  bodyNode.addAttribute("xmlns", "http://foo.com");
  if (input.nested !== undefined) {
    const node = serializeAws_restXmlXmlNamespaceNested(
      input.nested,
      context
    ).withName("nested");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

export const serializeAws_restXmlXmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml"
  };
  let resolvedPath = "/XmlTimestamps";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("XmlTimestampsInputOutput");
  if (input.dateTime !== undefined) {
    const node = new __XmlNode("Timestamp")
      .addChildNode(
        new __XmlText(
          (input.dateTime.toISOString().split(".")[0] + "Z").toString()
        )
      )
      .withName("dateTime");
    bodyNode.addChildNode(node);
  }
  if (input.epochSeconds !== undefined) {
    const node = new __XmlNode("Timestamp")
      .addChildNode(
        new __XmlText(
          Math.round(input.epochSeconds.getTime() / 1000).toString()
        )
      )
      .withName("epochSeconds");
    bodyNode.addChildNode(node);
  }
  if (input.httpDate !== undefined) {
    const node = new __XmlNode("Timestamp")
      .addChildNode(new __XmlText(__dateToUtcString(input.httpDate).toString()))
      .withName("httpDate");
    bodyNode.addChildNode(node);
  }
  if (input.normal !== undefined) {
    const node = new __XmlNode("Timestamp")
      .addChildNode(
        new __XmlText(input.normal.toISOString().split(".")[0] + "Z")
      )
      .withName("normal");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
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

export const deserializeAws_restXmlAllQueryStringTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlAllQueryStringTypesCommandError(
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

const deserializeAws_restXmlAllQueryStringTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllQueryStringTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlConstantAndVariableQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlConstantAndVariableQueryStringCommandError(
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

const deserializeAws_restXmlConstantAndVariableQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantAndVariableQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlConstantQueryStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlConstantQueryStringCommandError(
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

const deserializeAws_restXmlConstantQueryStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConstantQueryStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlEmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError(
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

const deserializeAws_restXmlEmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlFlattenedXmlMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlFlattenedXmlMapCommandError(output, context);
  }
  const contents: FlattenedXmlMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlattenedXmlMapInputOutput",
    myMap: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.myMap === "") {
    contents.myMap = {};
  }
  if (data["myMap"] !== undefined) {
    contents.myMap = deserializeAws_restXmlFooEnumMap(
      __getArrayIfSingleItem(data["myMap"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlFlattenedXmlMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError(
      output,
      context
    );
  }
  const contents: FlattenedXmlMapWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlattenedXmlMapWithXmlNameInputOutput",
    myMap: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.KVP === "") {
    contents.myMap = {};
  }
  if (data["KVP"] !== undefined) {
    contents.myMap = deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap(
      __getArrayIfSingleItem(data["KVP"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGreetingWithErrorsCommandError(
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

const deserializeAws_restXmlGreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.restxml#ComplexError":
      response = {
        ...(await deserializeAws_restXmlComplexErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGreeting":
    case "aws.protocoltests.restxml#InvalidGreeting":
      response = {
        ...(await deserializeAws_restXmlInvalidGreetingResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPayloadTraitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadTraitsCommandError(output, context);
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

const deserializeAws_restXmlHttpPayloadTraitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError(
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

const deserializeAws_restXmlHttpPayloadTraitsWithMediaTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPayloadWithStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithStructureCommandError(
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
  contents.nested = deserializeAws_restXmlNestedPayload(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHttpPayloadWithStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPayloadWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithXmlNameCommandError(
      output,
      context
    );
  }
  const contents: HttpPayloadWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithXmlNameInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlPayloadWithXmlName(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHttpPayloadWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError(
      output,
      context
    );
  }
  const contents: HttpPayloadWithXmlNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithXmlNamespaceInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlPayloadWithXmlNamespace(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError(
      output,
      context
    );
  }
  const contents: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "HttpPayloadWithXmlNamespaceAndPrefixInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.nested = deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpPrefixHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpPrefixHeadersCommandError(output, context);
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

const deserializeAws_restXmlHttpPrefixHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpPrefixHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError(
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

const deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpRequestWithLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpRequestWithLabelsCommandError(
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

const deserializeAws_restXmlHttpRequestWithLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError(
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

const deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlIgnoreQueryParamsInResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError(
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
  if (data["baz"] !== undefined) {
    contents.baz = data["baz"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlIgnoreQueryParamsInResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoreQueryParamsInResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlInputAndOutputWithHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlInputAndOutputWithHeadersCommandError(
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

const deserializeAws_restXmlInputAndOutputWithHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InputAndOutputWithHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlNoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNoInputAndNoOutputCommandError(
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

const deserializeAws_restXmlNoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlNoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNoInputAndOutputCommandError(output, context);
  }
  const contents: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NoInputAndOutputOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlNoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlNullAndEmptyHeadersClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNullAndEmptyHeadersClientCommandError(
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

const deserializeAws_restXmlNullAndEmptyHeadersClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlNullAndEmptyHeadersServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlNullAndEmptyHeadersServerCommandError(
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

const deserializeAws_restXmlNullAndEmptyHeadersServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullAndEmptyHeadersServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError(
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

const deserializeAws_restXmlOmitsNullSerializesEmptyStringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OmitsNullSerializesEmptyStringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError(
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

const deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlRecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlRecursiveShapesCommandError(output, context);
  }
  const contents: RecursiveShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecursiveShapesInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlRecursiveShapesInputOutputNested1(
      data["nested"],
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlRecursiveShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlSimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlSimpleScalarPropertiesCommandError(
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
  if (data["byteValue"] !== undefined) {
    contents.byteValue = parseInt(data["byteValue"]);
  }
  if (data["DoubleDribble"] !== undefined) {
    contents.doubleValue = parseFloat(data["DoubleDribble"]);
  }
  if (data["falseBooleanValue"] !== undefined) {
    contents.falseBooleanValue = data["falseBooleanValue"] == "true";
  }
  if (data["floatValue"] !== undefined) {
    contents.floatValue = parseFloat(data["floatValue"]);
  }
  if (data["integerValue"] !== undefined) {
    contents.integerValue = parseInt(data["integerValue"]);
  }
  if (data["longValue"] !== undefined) {
    contents.longValue = parseInt(data["longValue"]);
  }
  if (data["shortValue"] !== undefined) {
    contents.shortValue = parseInt(data["shortValue"]);
  }
  if (data["stringValue"] !== undefined) {
    contents.stringValue = data["stringValue"];
  }
  if (data["trueBooleanValue"] !== undefined) {
    contents.trueBooleanValue = data["trueBooleanValue"] == "true";
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlSimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlTimestampFormatHeadersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlTimestampFormatHeadersCommandError(
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

const deserializeAws_restXmlTimestampFormatHeadersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TimestampFormatHeadersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlAttributesCommandError(output, context);
  }
  const contents: XmlAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlAttributesInputOutput",
    attr: undefined,
    foo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["test"] !== undefined) {
    contents.attr = data["test"];
  }
  if (data["foo"] !== undefined) {
    contents.foo = data["foo"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlAttributesOnPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlAttributesOnPayloadCommandError(
      output,
      context
    );
  }
  const contents: XmlAttributesOnPayloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlAttributesOnPayloadInputOutput",
    payload: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.payload = deserializeAws_restXmlXmlAttributesInputOutput(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlAttributesOnPayloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlAttributesOnPayloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlBlobsCommandError(output, context);
  }
  const contents: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlBlobsInputOutput",
    data: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["data"] !== undefined) {
    contents.data = context.base64Decoder(data["data"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
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
    fooEnumSet: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["fooEnum1"] !== undefined) {
    contents.fooEnum1 = data["fooEnum1"];
  }
  if (data["fooEnum2"] !== undefined) {
    contents.fooEnum2 = data["fooEnum2"];
  }
  if (data["fooEnum3"] !== undefined) {
    contents.fooEnum3 = data["fooEnum3"];
  }
  if (data.fooEnumList === "") {
    contents.fooEnumList = [];
  }
  if (
    data["fooEnumList"] !== undefined &&
    data["fooEnumList"]["member"] !== undefined
  ) {
    contents.fooEnumList = deserializeAws_restXmlFooEnumList(
      __getArrayIfSingleItem(data["fooEnumList"]["member"]),
      context
    );
  }
  if (data.fooEnumMap === "") {
    contents.fooEnumMap = {};
  }
  if (
    data["fooEnumMap"] !== undefined &&
    data["fooEnumMap"]["entry"] !== undefined
  ) {
    contents.fooEnumMap = deserializeAws_restXmlFooEnumMap(
      __getArrayIfSingleItem(data["fooEnumMap"]["entry"]),
      context
    );
  }
  if (data.fooEnumSet === "") {
    contents.fooEnumSet = [];
  }
  if (
    data["fooEnumSet"] !== undefined &&
    data["fooEnumSet"]["member"] !== undefined
  ) {
    contents.fooEnumSet = deserializeAws_restXmlFooEnumSet(
      __getArrayIfSingleItem(data["fooEnumSet"]["member"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
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
    timestampList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.booleanList === "") {
    contents.booleanList = [];
  }
  if (
    data["booleanList"] !== undefined &&
    data["booleanList"]["member"] !== undefined
  ) {
    contents.booleanList = deserializeAws_restXmlBooleanList(
      __getArrayIfSingleItem(data["booleanList"]["member"]),
      context
    );
  }
  if (data.enumList === "") {
    contents.enumList = [];
  }
  if (
    data["enumList"] !== undefined &&
    data["enumList"]["member"] !== undefined
  ) {
    contents.enumList = deserializeAws_restXmlFooEnumList(
      __getArrayIfSingleItem(data["enumList"]["member"]),
      context
    );
  }
  if (data.flattenedList === "") {
    contents.flattenedList = [];
  }
  if (data["flattenedList"] !== undefined) {
    contents.flattenedList = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["flattenedList"]),
      context
    );
  }
  if (data.customName === "") {
    contents.flattenedList2 = [];
  }
  if (data["customName"] !== undefined) {
    contents.flattenedList2 = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["customName"]),
      context
    );
  }
  if (data.integerList === "") {
    contents.integerList = [];
  }
  if (
    data["integerList"] !== undefined &&
    data["integerList"]["member"] !== undefined
  ) {
    contents.integerList = deserializeAws_restXmlIntegerList(
      __getArrayIfSingleItem(data["integerList"]["member"]),
      context
    );
  }
  if (data.nestedStringList === "") {
    contents.nestedStringList = [];
  }
  if (
    data["nestedStringList"] !== undefined &&
    data["nestedStringList"]["member"] !== undefined
  ) {
    contents.nestedStringList = deserializeAws_restXmlNestedStringList(
      __getArrayIfSingleItem(data["nestedStringList"]["member"]),
      context
    );
  }
  if (data.renamed === "") {
    contents.renamedListMembers = [];
  }
  if (data["renamed"] !== undefined && data["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = deserializeAws_restXmlRenamedListMembers(
      __getArrayIfSingleItem(data["renamed"]["item"]),
      context
    );
  }
  if (data.stringList === "") {
    contents.stringList = [];
  }
  if (
    data["stringList"] !== undefined &&
    data["stringList"]["member"] !== undefined
  ) {
    contents.stringList = deserializeAws_restXmlStringList(
      __getArrayIfSingleItem(data["stringList"]["member"]),
      context
    );
  }
  if (data.stringSet === "") {
    contents.stringSet = [];
  }
  if (
    data["stringSet"] !== undefined &&
    data["stringSet"]["member"] !== undefined
  ) {
    contents.stringSet = deserializeAws_restXmlStringSet(
      __getArrayIfSingleItem(data["stringSet"]["member"]),
      context
    );
  }
  if (data.myStructureList === "") {
    contents.structureList = [];
  }
  if (
    data["myStructureList"] !== undefined &&
    data["myStructureList"]["item"] !== undefined
  ) {
    contents.structureList = deserializeAws_restXmlStructureList(
      __getArrayIfSingleItem(data["myStructureList"]["item"]),
      context
    );
  }
  if (data.timestampList === "") {
    contents.timestampList = [];
  }
  if (
    data["timestampList"] !== undefined &&
    data["timestampList"]["member"] !== undefined
  ) {
    contents.timestampList = deserializeAws_restXmlTimestampList(
      __getArrayIfSingleItem(data["timestampList"]["member"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlMapsCommandError(output, context);
  }
  const contents: XmlMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlMapsInputOutput",
    myMap: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.myMap === "") {
    contents.myMap = {};
  }
  if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_restXmlXmlMapsInputOutputMap(
      __getArrayIfSingleItem(data["myMap"]["entry"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlMapsXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlMapsXmlNameCommandError(output, context);
  }
  const contents: XmlMapsXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlMapsXmlNameInputOutput",
    myMap: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.myMap === "") {
    contents.myMap = {};
  }
  if (data["myMap"] !== undefined && data["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_restXmlXmlMapsXmlNameInputOutputMap(
      __getArrayIfSingleItem(data["myMap"]["entry"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlMapsXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlNamespacesCommandError(output, context);
  }
  const contents: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlNamespacesInputOutput",
    nested: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlXmlNamespaceNested(
      data["nested"],
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlXmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlXmlTimestampsCommandError(output, context);
  }
  const contents: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlTimestampsInputOutput",
    dateTime: undefined,
    epochSeconds: undefined,
    httpDate: undefined,
    normal: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["dateTime"] !== undefined) {
    contents.dateTime = new Date(data["dateTime"]);
  }
  if (data["epochSeconds"] !== undefined) {
    contents.epochSeconds = new Date(data["epochSeconds"]);
  }
  if (data["httpDate"] !== undefined) {
    contents.httpDate = new Date(data["httpDate"]);
  }
  if (data["normal"] !== undefined) {
    contents.normal = new Date(data["normal"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlXmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

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
    TopLevel: undefined
  };
  if (parsedOutput.headers["x-header"] !== undefined) {
    contents.Header = parsedOutput.headers["x-header"];
  }
  const data: any = parsedOutput.body.Error;
  if (data["Nested"] !== undefined) {
    contents.Nested = deserializeAws_restXmlComplexNestedErrorData(
      data["Nested"],
      context
    );
  }
  if (data["TopLevel"] !== undefined) {
    contents.TopLevel = data["TopLevel"];
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
    Message: undefined
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};

const serializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).map(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String")
      .addChildNode(new __XmlText(key))
      .withName("K");
    entryNode.addChildNode(keyNode);
    const node = new __XmlNode("String").addChildNode(
      new __XmlText(input[key])
    );
    entryNode.addChildNode(node.withName("V"));
    return entryNode;
  });
};

const serializeAws_restXmlNestedPayload = (
  input: NestedPayload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NestedPayload");
  if (input.greeting !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.greeting))
      .withName("greeting");
    bodyNode.addChildNode(node);
  }
  if (input.name !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.name))
      .withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPayloadWithXmlName = (
  input: PayloadWithXmlName,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("Hello");
  if (input.name !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.name))
      .withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPayloadWithXmlNamespace = (
  input: PayloadWithXmlNamespace,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespace");
  if (input.name !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.name))
      .withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPayloadWithXmlNamespaceAndPrefix = (
  input: PayloadWithXmlNamespaceAndPrefix,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PayloadWithXmlNamespaceAndPrefix");
  if (input.name !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.name))
      .withName("name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested1");
  if (input.foo !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.foo))
      .withName("foo");
    bodyNode.addChildNode(node);
  }
  if (input.nested !== undefined) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested2(
      input.nested,
      context
    ).withName("nested");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RecursiveShapesInputOutputNested2");
  if (input.bar !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.bar))
      .withName("bar");
    bodyNode.addChildNode(node);
  }
  if (input.recursiveMember !== undefined) {
    const node = serializeAws_restXmlRecursiveShapesInputOutputNested1(
      input.recursiveMember,
      context
    ).withName("recursiveMember");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRenamedListMembers = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    return node.withName("item");
  });
};

const serializeAws_restXmlStructureList = (
  input: StructureListMember[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = serializeAws_restXmlStructureListMember(entry, context);
    return node.withName("item");
  });
};

const serializeAws_restXmlStructureListMember = (
  input: StructureListMember,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StructureListMember");
  if (input.a !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.a))
      .withName("value");
    bodyNode.addChildNode(node);
  }
  if (input.b !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.b))
      .withName("other");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlXmlAttributesInputOutput = (
  input: XmlAttributesInputOutput,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("XmlAttributesInputOutput");
  if (input.attr !== undefined) {
    bodyNode.addAttribute("test", input.attr);
  }
  if (input.foo !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.foo))
      .withName("foo");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlXmlMapsInputOutputMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  return Object.keys(input).map(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String")
      .addChildNode(new __XmlText(key))
      .withName("key");
    entryNode.addChildNode(keyNode);
    const node = serializeAws_restXmlGreetingStruct(input[key], context);
    entryNode.addChildNode(node.withName("value"));
    return entryNode;
  });
};

const serializeAws_restXmlXmlMapsXmlNameInputOutputMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  return Object.keys(input).map(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String")
      .addChildNode(new __XmlText(key))
      .withName("Attribute");
    entryNode.addChildNode(keyNode);
    const node = serializeAws_restXmlGreetingStruct(input[key], context);
    entryNode.addChildNode(node.withName("Setting"));
    return entryNode;
  });
};

const serializeAws_restXmlXmlNamespacedList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    node.addAttribute("xmlns", "http://bux.com");
    return node.withName("member");
  });
};

const serializeAws_restXmlXmlNamespaceNested = (
  input: XmlNamespaceNested,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("XmlNamespaceNested");
  if (input.foo !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.foo))
      .withName("foo");
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
};

const serializeAws_restXmlBooleanList = (
  input: boolean[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("PrimitiveBoolean").addChildNode(
      new __XmlText(String(entry))
    );
    return node.withName("member");
  });
};

const serializeAws_restXmlFooEnumList = (
  input: (FooEnum | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlFooEnumMap = (
  input: { [key: string]: FooEnum | string },
  context: __SerdeContext
): any => {
  return Object.keys(input).map(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("String")
      .addChildNode(new __XmlText(key))
      .withName("key");
    entryNode.addChildNode(keyNode);
    const node = new __XmlNode("FooEnum").addChildNode(
      new __XmlText(input[key])
    );
    entryNode.addChildNode(node.withName("value"));
    return entryNode;
  });
};

const serializeAws_restXmlFooEnumSet = (
  input: (FooEnum | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("FooEnum").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlGreetingStruct = (
  input: GreetingStruct,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("GreetingStruct");
  if (input.hi !== undefined) {
    const node = new __XmlNode("String")
      .addChildNode(new __XmlText(input.hi))
      .withName("hi");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlIntegerList = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("Integer").addChildNode(
      new __XmlText(String(entry))
    );
    return node.withName("member");
  });
};

const serializeAws_restXmlNestedStringList = (
  input: string[][],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = serializeAws_restXmlStringList(entry, context);
    return node.reduce((acc: __XmlNode, workingNode: any) => {
      return acc.addChildNode(workingNode);
    }, new __XmlNode("member"));
  });
};

const serializeAws_restXmlStringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlStringSet = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("String").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlTimestampList = (
  input: Date[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("Timestamp").addChildNode(
      new __XmlText(entry.toISOString().split(".")[0] + "Z")
    );
    return node.withName("member");
  });
};

const deserializeAws_restXmlComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  let contents: any = {
    __type: "ComplexNestedErrorData",
    Foo: undefined
  };
  if (output["Foo"] !== undefined) {
    contents.Foo = output["Foo"];
  }
  return contents;
};

const deserializeAws_restXmlFlattenedXmlMapWithXmlNameInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["K"]]: pair["V"]
    }),
    {}
  );
};

const deserializeAws_restXmlNestedPayload = (
  output: any,
  context: __SerdeContext
): NestedPayload => {
  let contents: any = {
    __type: "NestedPayload",
    greeting: undefined,
    name: undefined
  };
  if (output["greeting"] !== undefined) {
    contents.greeting = output["greeting"];
  }
  if (output["name"] !== undefined) {
    contents.name = output["name"];
  }
  return contents;
};

const deserializeAws_restXmlPayloadWithXmlName = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlName => {
  let contents: any = {
    __type: "PayloadWithXmlName",
    name: undefined
  };
  if (output["name"] !== undefined) {
    contents.name = output["name"];
  }
  return contents;
};

const deserializeAws_restXmlPayloadWithXmlNamespace = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespace => {
  let contents: any = {
    __type: "PayloadWithXmlNamespace",
    name: undefined
  };
  if (output["name"] !== undefined) {
    contents.name = output["name"];
  }
  return contents;
};

const deserializeAws_restXmlPayloadWithXmlNamespaceAndPrefix = (
  output: any,
  context: __SerdeContext
): PayloadWithXmlNamespaceAndPrefix => {
  let contents: any = {
    __type: "PayloadWithXmlNamespaceAndPrefix",
    name: undefined
  };
  if (output["name"] !== undefined) {
    contents.name = output["name"];
  }
  return contents;
};

const deserializeAws_restXmlRecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  let contents: any = {
    __type: "RecursiveShapesInputOutputNested1",
    foo: undefined,
    nested: undefined
  };
  if (output["foo"] !== undefined) {
    contents.foo = output["foo"];
  }
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_restXmlRecursiveShapesInputOutputNested2(
      output["nested"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlRecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  let contents: any = {
    __type: "RecursiveShapesInputOutputNested2",
    bar: undefined,
    recursiveMember: undefined
  };
  if (output["bar"] !== undefined) {
    contents.bar = output["bar"];
  }
  if (output["recursiveMember"] !== undefined) {
    contents.recursiveMember = deserializeAws_restXmlRecursiveShapesInputOutputNested1(
      output["recursiveMember"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlRenamedListMembers = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlStructureList = (
  output: any,
  context: __SerdeContext
): StructureListMember[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlStructureListMember(entry, context)
  );
};

const deserializeAws_restXmlStructureListMember = (
  output: any,
  context: __SerdeContext
): StructureListMember => {
  let contents: any = {
    __type: "StructureListMember",
    a: undefined,
    b: undefined
  };
  if (output["value"] !== undefined) {
    contents.a = output["value"];
  }
  if (output["other"] !== undefined) {
    contents.b = output["other"];
  }
  return contents;
};

const deserializeAws_restXmlXmlAttributesInputOutput = (
  output: any,
  context: __SerdeContext
): XmlAttributesInputOutput => {
  let contents: any = {
    __type: "XmlAttributesInputOutput",
    attr: undefined,
    foo: undefined
  };
  if (output["test"] !== undefined) {
    contents.attr = output["test"];
  }
  if (output["foo"] !== undefined) {
    contents.foo = output["foo"];
  }
  return contents;
};

const deserializeAws_restXmlXmlMapsInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: deserializeAws_restXmlGreetingStruct(
        pair["value"],
        context
      )
    }),
    {}
  );
};

const deserializeAws_restXmlXmlMapsXmlNameInputOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["Attribute"]]: deserializeAws_restXmlGreetingStruct(
        pair["Setting"],
        context
      )
    }),
    {}
  );
};

const deserializeAws_restXmlXmlNamespacedList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlXmlNamespaceNested = (
  output: any,
  context: __SerdeContext
): XmlNamespaceNested => {
  let contents: any = {
    __type: "XmlNamespaceNested",
    foo: undefined,
    values: undefined
  };
  if (output["foo"] !== undefined) {
    contents.foo = output["foo"];
  }
  if (output.values === "") {
    contents.values = [];
  }
  if (
    output["values"] !== undefined &&
    output["values"]["member"] !== undefined
  ) {
    contents.values = deserializeAws_restXmlXmlNamespacedList(
      __getArrayIfSingleItem(output["values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlBooleanList = (
  output: any,
  context: __SerdeContext
): boolean[] => {
  return (output || []).map((entry: any) => entry == "true");
};

const deserializeAws_restXmlFooEnumList = (
  output: any,
  context: __SerdeContext
): (FooEnum | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlFooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"]
    }),
    {}
  );
};

const deserializeAws_restXmlFooEnumSet = (
  output: any,
  context: __SerdeContext
): (FooEnum | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlGreetingStruct = (
  output: any,
  context: __SerdeContext
): GreetingStruct => {
  let contents: any = {
    __type: "GreetingStruct",
    hi: undefined
  };
  if (output["hi"] !== undefined) {
    contents.hi = output["hi"];
  }
  return contents;
};

const deserializeAws_restXmlIntegerList = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => parseInt(entry));
};

const deserializeAws_restXmlNestedStringList = (
  output: any,
  context: __SerdeContext
): string[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlStringList(
      __getArrayIfSingleItem(entry["member"]),
      context
    )
  );
};

const deserializeAws_restXmlStringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlStringSet = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlTimestampList = (
  output: any,
  context: __SerdeContext
): Date[] => {
  return (output || []).map((entry: any) => new Date(entry));
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

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
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

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
