// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  serializeFloat as __serializeFloat,
  strictParseByte as __strictParseByte,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  strictParseShort as __strictParseShort,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XMLParser } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

import { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "../commands/DatetimeOffsetsCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "../commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommandInput, EndpointOperationCommandOutput } from "../commands/EndpointOperationCommand";
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
import {
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "../commands/HostWithPathOperationCommand";
import {
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
} from "../commands/IgnoresWrappingXmlNameCommand";
import { NestedStructuresCommandInput, NestedStructuresCommandOutput } from "../commands/NestedStructuresCommand";
import { NoInputAndNoOutputCommandInput, NoInputAndNoOutputCommandOutput } from "../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput } from "../commands/NoInputAndOutputCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "../commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommandInput, QueryListsCommandOutput } from "../commands/QueryListsCommand";
import { QueryMapsCommandInput, QueryMapsCommandOutput } from "../commands/QueryMapsCommand";
import { QueryTimestampsCommandInput, QueryTimestampsCommandOutput } from "../commands/QueryTimestampsCommand";
import { RecursiveXmlShapesCommandInput, RecursiveXmlShapesCommandOutput } from "../commands/RecursiveXmlShapesCommand";
import { SimpleInputParamsCommandInput, SimpleInputParamsCommandOutput } from "../commands/SimpleInputParamsCommand";
import {
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput,
} from "../commands/SimpleScalarXmlPropertiesCommand";
import { XmlBlobsCommandInput, XmlBlobsCommandOutput } from "../commands/XmlBlobsCommand";
import { XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput } from "../commands/XmlEmptyBlobsCommand";
import { XmlEmptyListsCommandInput, XmlEmptyListsCommandOutput } from "../commands/XmlEmptyListsCommand";
import { XmlEmptyMapsCommandInput, XmlEmptyMapsCommandOutput } from "../commands/XmlEmptyMapsCommand";
import { XmlEnumsCommandInput, XmlEnumsCommandOutput } from "../commands/XmlEnumsCommand";
import { XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "../commands/XmlIntEnumsCommand";
import { XmlListsCommandInput, XmlListsCommandOutput } from "../commands/XmlListsCommand";
import { XmlMapsCommandInput, XmlMapsCommandOutput } from "../commands/XmlMapsCommand";
import { XmlMapsXmlNameCommandInput, XmlMapsXmlNameCommandOutput } from "../commands/XmlMapsXmlNameCommand";
import { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "../commands/XmlNamespacesCommand";
import { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "../commands/XmlTimestampsCommand";
import {
  ComplexError,
  ComplexNestedErrorData,
  CustomCodeError,
  DatetimeOffsetsOutput,
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputOutput,
  FlattenedXmlMapOutput,
  FlattenedXmlMapWithXmlNameOutput,
  FlattenedXmlMapWithXmlNamespaceOutput,
  FooEnum,
  GreetingStruct,
  GreetingWithErrorsOutput,
  HostLabelInput,
  IgnoresWrappingXmlNameOutput,
  IntegerEnum,
  InvalidGreeting,
  NestedStructuresInput,
  NestedStructWithList,
  NestedStructWithMap,
  NoInputAndOutputInput,
  NoInputAndOutputOutput,
  QueryIdempotencyTokenAutoFillInput,
  QueryListsInput,
  QueryMapsInput,
  QueryTimestampsInput,
  RecursiveXmlShapesOutput,
  RecursiveXmlShapesOutputNested1,
  RecursiveXmlShapesOutputNested2,
  SimpleInputParamsInput,
  SimpleScalarXmlPropertiesOutput,
  StructArg,
  StructureListMember,
  XmlBlobsOutput,
  XmlEnumsOutput,
  XmlIntEnumsOutput,
  XmlListsOutput,
  XmlMapsOutput,
  XmlMapsXmlNameOutput,
  XmlNamespaceNested,
  XmlNamespacesOutput,
  XmlTimestampsOutput,
} from "../models/models_0";
import { QueryProtocolServiceException as __BaseException } from "../models/QueryProtocolServiceException";

export const serializeAws_queryDatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DatetimeOffsets",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEmptyInputAndEmptyOutputInput(input, context),
    Action: "EmptyInputAndEmptyOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "EndpointOperation",
    Version: "2020-01-08",
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "foo." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

export const serializeAws_queryEndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryHostLabelInput(input, context),
    Action: "EndpointWithHostLabelOperation",
    Version: "2020-01-08",
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
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

export const serializeAws_queryFlattenedXmlMapCommand = async (
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMap",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryFlattenedXmlMapWithXmlNameCommand = async (
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMapWithXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand = async (
  input: FlattenedXmlMapWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMapWithXmlNamespace",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GreetingWithErrors",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryHostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "HostWithPathOperation",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryIgnoresWrappingXmlNameCommand = async (
  input: IgnoresWrappingXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "IgnoresWrappingXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryNestedStructuresCommand = async (
  input: NestedStructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryNestedStructuresInput(input, context),
    Action: "NestedStructures",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryNoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "NoInputAndNoOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryNoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryNoInputAndOutputInput(input, context),
    Action: "NoInputAndOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryQueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryQueryIdempotencyTokenAutoFillInput(input, context),
    Action: "QueryIdempotencyTokenAutoFill",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryQueryListsCommand = async (
  input: QueryListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryQueryListsInput(input, context),
    Action: "QueryLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryQueryMapsCommand = async (
  input: QueryMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryQueryMapsInput(input, context),
    Action: "QueryMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryQueryTimestampsCommand = async (
  input: QueryTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryQueryTimestampsInput(input, context),
    Action: "QueryTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRecursiveXmlShapesCommand = async (
  input: RecursiveXmlShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "RecursiveXmlShapes",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySimpleInputParamsCommand = async (
  input: SimpleInputParamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySimpleInputParamsInput(input, context),
    Action: "SimpleInputParams",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySimpleScalarXmlPropertiesCommand = async (
  input: SimpleScalarXmlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "SimpleScalarXmlProperties",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlBlobs",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlEmptyBlobsCommand = async (
  input: XmlEmptyBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlEmptyBlobs",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlEmptyListsCommand = async (
  input: XmlEmptyListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlEmptyLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlEmptyMapsCommand = async (
  input: XmlEmptyMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlEmptyMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlEnums",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlIntEnumsCommand = async (
  input: XmlIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlIntEnums",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlMapsCommand = async (
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlMapsXmlNameCommand = async (
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlMapsXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlNamespaces",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryXmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "XmlTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryDatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDatetimeOffsetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDatetimeOffsetsOutput(data.DatetimeOffsetsResult, context);
  const response: DatetimeOffsetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryEmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEmptyInputAndEmptyOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEmptyInputAndEmptyOutputOutput(data.EmptyInputAndEmptyOutputResult, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryEndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEndpointOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryEndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEndpointWithHostLabelOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryFlattenedXmlMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryFlattenedXmlMapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFlattenedXmlMapOutput(data.FlattenedXmlMapResult, context);
  const response: FlattenedXmlMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFlattenedXmlMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryFlattenedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryFlattenedXmlMapWithXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFlattenedXmlMapWithXmlNameOutput(data.FlattenedXmlMapWithXmlNameResult, context);
  const response: FlattenedXmlMapWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFlattenedXmlMapWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryFlattenedXmlMapWithXmlNamespaceOutput(
    data.FlattenedXmlMapWithXmlNamespaceResult,
    context
  );
  const response: FlattenedXmlMapWithXmlNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryGreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGreetingWithErrorsOutput(data.GreetingWithErrorsResult, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.query#ComplexError":
      throw await deserializeAws_queryComplexErrorResponse(parsedOutput, context);
    case "Customized":
    case "aws.protocoltests.query#CustomCodeError":
      throw await deserializeAws_queryCustomCodeErrorResponse(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.query#InvalidGreeting":
      throw await deserializeAws_queryInvalidGreetingResponse(parsedOutput, context);
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

export const deserializeAws_queryHostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryHostWithPathOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryHostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryIgnoresWrappingXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryIgnoresWrappingXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryIgnoresWrappingXmlNameOutput(data.IgnoresWrappingXmlNameResult, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryIgnoresWrappingXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryNestedStructuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryNestedStructuresCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NestedStructuresCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryNestedStructuresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryNoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryNoInputAndNoOutputCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryNoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryNoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryNoInputAndOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryNoInputAndOutputOutput(data.NoInputAndOutputResult, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryNoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryQueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryQueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryQueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryQueryListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryQueryListsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryListsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryQueryListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryQueryMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryMapsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryQueryMapsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryQueryMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryQueryTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryQueryTimestampsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryQueryTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryRecursiveXmlShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRecursiveXmlShapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRecursiveXmlShapesOutput(data.RecursiveXmlShapesResult, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRecursiveXmlShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_querySimpleInputParamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySimpleInputParamsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SimpleInputParamsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySimpleInputParamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_querySimpleScalarXmlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySimpleScalarXmlPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySimpleScalarXmlPropertiesOutput(data.SimpleScalarXmlPropertiesResult, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySimpleScalarXmlPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlBlobsOutput(data.XmlBlobsResult, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlEmptyBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlBlobsOutput(data.XmlEmptyBlobsResult, context);
  const response: XmlEmptyBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlEmptyBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlEmptyListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlListsOutput(data.XmlEmptyListsResult, context);
  const response: XmlEmptyListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlEmptyMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlEmptyMapsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlMapsOutput(data.XmlEmptyMapsResult, context);
  const response: XmlEmptyMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlEmptyMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlEnumsOutput(data.XmlEnumsResult, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlIntEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlIntEnumsOutput(data.XmlIntEnumsResult, context);
  const response: XmlIntEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlListsOutput(data.XmlListsResult, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlMapsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlMapsOutput(data.XmlMapsResult, context);
  const response: XmlMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlMapsXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlMapsXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlMapsXmlNameOutput(data.XmlMapsXmlNameResult, context);
  const response: XmlMapsXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlMapsXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlNamespacesOutput(data.XmlNamespacesResult, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryXmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryXmlTimestampsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryXmlTimestampsOutput(data.XmlTimestampsResult, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryXmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const deserializeAws_queryComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryComplexError(body.Error, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCustomCodeErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomCodeError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCustomCodeError(body.Error, context);
  const exception = new CustomCodeError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidGreeting(body.Error, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryComplexMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      const memberEntries = serializeAws_queryGreetingStruct(input[key], context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

const serializeAws_queryEmptyInputAndEmptyOutputInput = (
  input: EmptyInputAndEmptyOutputInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryHostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.label != null) {
    entries["label"] = input.label;
  }
  return entries;
};

const serializeAws_queryListWithXmlName = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`item.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryMapOfLists = (input: Record<string, string[]>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      const memberEntries = serializeAws_queryStringList(input[key], context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

const serializeAws_queryMapWithXmlName = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.K`] = key;
      entries[`entry.${counter}.V`] = input[key];
      counter++;
    });
  return entries;
};

const serializeAws_queryNestedStructuresInput = (input: NestedStructuresInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Nested != null) {
    const memberEntries = serializeAws_queryStructArg(input.Nested, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Nested.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryNestedStructWithList = (input: NestedStructWithList, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = serializeAws_queryStringList(input.ListArg, context);
    if (input.ListArg?.length === 0) {
      entries.ListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryNestedStructWithMap = (input: NestedStructWithMap, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MapArg != null) {
    const memberEntries = serializeAws_queryStringMap(input.MapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryNoInputAndOutputInput = (input: NoInputAndOutputInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryQueryIdempotencyTokenAutoFillInput = (
  input: QueryIdempotencyTokenAutoFillInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.token === undefined) {
    input.token = generateIdempotencyToken();
  }
  if (input.token != null) {
    entries["token"] = input.token;
  }
  return entries;
};

const serializeAws_queryQueryListsInput = (input: QueryListsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = serializeAws_queryStringList(input.ListArg, context);
    if (input.ListArg?.length === 0) {
      entries.ListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ComplexListArg != null) {
    const memberEntries = serializeAws_queryGreetingList(input.ComplexListArg, context);
    if (input.ComplexListArg?.length === 0) {
      entries.ComplexListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexListArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedListArg != null) {
    const memberEntries = serializeAws_queryStringList(input.FlattenedListArg, context);
    if (input.FlattenedListArg?.length === 0) {
      entries.FlattenedListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FlattenedListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ListArgWithXmlNameMember != null) {
    const memberEntries = serializeAws_queryListWithXmlName(input.ListArgWithXmlNameMember, context);
    if (input.ListArgWithXmlNameMember?.length === 0) {
      entries.ListArgWithXmlNameMember = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArgWithXmlNameMember.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedListArgWithXmlName != null) {
    const memberEntries = serializeAws_queryListWithXmlName(input.FlattenedListArgWithXmlName, context);
    if (input.FlattenedListArgWithXmlName?.length === 0) {
      entries.Hi = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.NestedWithList != null) {
    const memberEntries = serializeAws_queryNestedStructWithList(input.NestedWithList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NestedWithList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryQueryMapsInput = (input: QueryMapsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MapArg != null) {
    const memberEntries = serializeAws_queryStringMap(input.MapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RenamedMapArg != null) {
    const memberEntries = serializeAws_queryStringMap(input.RenamedMapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Foo.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ComplexMapArg != null) {
    const memberEntries = serializeAws_queryComplexMap(input.ComplexMapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexMapArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MapWithXmlMemberName != null) {
    const memberEntries = serializeAws_queryMapWithXmlName(input.MapWithXmlMemberName, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapWithXmlMemberName.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedMap != null) {
    const memberEntries = serializeAws_queryStringMap(input.FlattenedMap, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FlattenedMap.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedMapWithXmlName != null) {
    const memberEntries = serializeAws_queryMapWithXmlName(input.FlattenedMapWithXmlName, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MapOfLists != null) {
    const memberEntries = serializeAws_queryMapOfLists(input.MapOfLists, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapOfLists.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NestedStructWithMap != null) {
    const memberEntries = serializeAws_queryNestedStructWithMap(input.NestedStructWithMap, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NestedStructWithMap.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryQueryTimestampsInput = (input: QueryTimestampsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.normalFormat != null) {
    entries["normalFormat"] = input.normalFormat.toISOString().split(".")[0] + "Z";
  }
  if (input.epochMember != null) {
    entries["epochMember"] = Math.round(input.epochMember.getTime() / 1000);
  }
  if (input.epochTarget != null) {
    entries["epochTarget"] = Math.round(input.epochTarget.getTime() / 1000);
  }
  return entries;
};

const serializeAws_querySimpleInputParamsInput = (input: SimpleInputParamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Foo != null) {
    entries["Foo"] = input.Foo;
  }
  if (input.Bar != null) {
    entries["Bar"] = input.Bar;
  }
  if (input.Baz != null) {
    entries["Baz"] = input.Baz;
  }
  if (input.Bam != null) {
    entries["Bam"] = input.Bam;
  }
  if (input.FloatValue != null) {
    entries["FloatValue"] = __serializeFloat(input.FloatValue);
  }
  if (input.Boo != null) {
    entries["Boo"] = __serializeFloat(input.Boo);
  }
  if (input.Qux != null) {
    entries["Qux"] = context.base64Encoder(input.Qux);
  }
  if (input.FooEnum != null) {
    entries["FooEnum"] = input.FooEnum;
  }
  if (input.IntegerEnum != null) {
    entries["IntegerEnum"] = input.IntegerEnum;
  }
  return entries;
};

const serializeAws_queryStructArg = (input: StructArg, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StringArg != null) {
    entries["StringArg"] = input.StringArg;
  }
  if (input.OtherArg != null) {
    entries["OtherArg"] = input.OtherArg;
  }
  if (input.RecursiveArg != null) {
    const memberEntries = serializeAws_queryStructArg(input.RecursiveArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecursiveArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGreetingList = (input: GreetingStruct[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryGreetingStruct(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryGreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.hi != null) {
    entries["hi"] = input.hi;
  }
  return entries;
};

const serializeAws_queryStringList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

const deserializeAws_queryComplexError = (output: any, context: __SerdeContext): ComplexError => {
  const contents: any = {
    TopLevel: undefined,
    Nested: undefined,
  };
  if (output["TopLevel"] !== undefined) {
    contents.TopLevel = __expectString(output["TopLevel"]);
  }
  if (output["Nested"] !== undefined) {
    contents.Nested = deserializeAws_queryComplexNestedErrorData(output["Nested"], context);
  }
  return contents;
};

const deserializeAws_queryComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {
    Foo: undefined,
  };
  if (output["Foo"] !== undefined) {
    contents.Foo = __expectString(output["Foo"]);
  }
  return contents;
};

const deserializeAws_queryCustomCodeError = (output: any, context: __SerdeContext): CustomCodeError => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  const contents: any = {
    datetime: undefined,
  };
  if (output["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["datetime"]));
  }
  return contents;
};

const deserializeAws_queryEmptyInputAndEmptyOutputOutput = (
  output: any,
  context: __SerdeContext
): EmptyInputAndEmptyOutputOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryFlattenedXmlMapOutput = (output: any, context: __SerdeContext): FlattenedXmlMapOutput => {
  const contents: any = {
    myMap: undefined,
  };
  if (output.myMap === "") {
    contents.myMap = {};
  } else if (output["myMap"] !== undefined) {
    contents.myMap = deserializeAws_queryFooEnumMap(__getArrayIfSingleItem(output["myMap"]), context);
  }
  return contents;
};

const deserializeAws_queryFlattenedXmlMapWithXmlNameOutput = (
  output: any,
  context: __SerdeContext
): FlattenedXmlMapWithXmlNameOutput => {
  const contents: any = {
    myMap: undefined,
  };
  if (output.KVP === "") {
    contents.myMap = {};
  } else if (output["KVP"] !== undefined) {
    contents.myMap = deserializeAws_queryFlattenedXmlMapWithXmlNameOutputMap(
      __getArrayIfSingleItem(output["KVP"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryFlattenedXmlMapWithXmlNameOutputMap = (
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

const deserializeAws_queryFlattenedXmlMapWithXmlNamespaceOutput = (
  output: any,
  context: __SerdeContext
): FlattenedXmlMapWithXmlNamespaceOutput => {
  const contents: any = {
    myMap: undefined,
  };
  if (output.KVP === "") {
    contents.myMap = {};
  } else if (output["KVP"] !== undefined) {
    contents.myMap = deserializeAws_queryFlattenedXmlMapWithXmlNamespaceOutputMap(
      __getArrayIfSingleItem(output["KVP"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryFlattenedXmlMapWithXmlNamespaceOutputMap = (
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

const deserializeAws_queryGreetingWithErrorsOutput = (
  output: any,
  context: __SerdeContext
): GreetingWithErrorsOutput => {
  const contents: any = {
    greeting: undefined,
  };
  if (output["greeting"] !== undefined) {
    contents.greeting = __expectString(output["greeting"]);
  }
  return contents;
};

const deserializeAws_queryIgnoresWrappingXmlNameOutput = (
  output: any,
  context: __SerdeContext
): IgnoresWrappingXmlNameOutput => {
  const contents: any = {
    foo: undefined,
  };
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  return contents;
};

const deserializeAws_queryInvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryNoInputAndOutputOutput = (output: any, context: __SerdeContext): NoInputAndOutputOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryRecursiveXmlShapesOutput = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutput => {
  const contents: any = {
    nested: undefined,
  };
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_queryRecursiveXmlShapesOutputNested1(output["nested"], context);
  }
  return contents;
};

const deserializeAws_queryRecursiveXmlShapesOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutputNested1 => {
  const contents: any = {
    foo: undefined,
    nested: undefined,
  };
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_queryRecursiveXmlShapesOutputNested2(output["nested"], context);
  }
  return contents;
};

const deserializeAws_queryRecursiveXmlShapesOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutputNested2 => {
  const contents: any = {
    bar: undefined,
    recursiveMember: undefined,
  };
  if (output["bar"] !== undefined) {
    contents.bar = __expectString(output["bar"]);
  }
  if (output["recursiveMember"] !== undefined) {
    contents.recursiveMember = deserializeAws_queryRecursiveXmlShapesOutputNested1(output["recursiveMember"], context);
  }
  return contents;
};

const deserializeAws_queryRenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySimpleScalarXmlPropertiesOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarXmlPropertiesOutput => {
  const contents: any = {
    stringValue: undefined,
    emptyStringValue: undefined,
    trueBooleanValue: undefined,
    falseBooleanValue: undefined,
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
  if (output["emptyStringValue"] !== undefined) {
    contents.emptyStringValue = __expectString(output["emptyStringValue"]);
  }
  if (output["trueBooleanValue"] !== undefined) {
    contents.trueBooleanValue = __parseBoolean(output["trueBooleanValue"]);
  }
  if (output["falseBooleanValue"] !== undefined) {
    contents.falseBooleanValue = __parseBoolean(output["falseBooleanValue"]);
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
  if (output["DoubleDribble"] !== undefined) {
    contents.doubleValue = __strictParseFloat(output["DoubleDribble"]) as number;
  }
  return contents;
};

const deserializeAws_queryStructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryStructureListMember(entry, context);
    });
};

const deserializeAws_queryStructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
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

const deserializeAws_queryXmlBlobsOutput = (output: any, context: __SerdeContext): XmlBlobsOutput => {
  const contents: any = {
    data: undefined,
  };
  if (output["data"] !== undefined) {
    contents.data = context.base64Decoder(output["data"]);
  }
  return contents;
};

const deserializeAws_queryXmlEnumsOutput = (output: any, context: __SerdeContext): XmlEnumsOutput => {
  const contents: any = {
    fooEnum1: undefined,
    fooEnum2: undefined,
    fooEnum3: undefined,
    fooEnumList: undefined,
    fooEnumSet: undefined,
    fooEnumMap: undefined,
  };
  if (output["fooEnum1"] !== undefined) {
    contents.fooEnum1 = __expectString(output["fooEnum1"]);
  }
  if (output["fooEnum2"] !== undefined) {
    contents.fooEnum2 = __expectString(output["fooEnum2"]);
  }
  if (output["fooEnum3"] !== undefined) {
    contents.fooEnum3 = __expectString(output["fooEnum3"]);
  }
  if (output.fooEnumList === "") {
    contents.fooEnumList = [];
  } else if (output["fooEnumList"] !== undefined && output["fooEnumList"]["member"] !== undefined) {
    contents.fooEnumList = deserializeAws_queryFooEnumList(
      __getArrayIfSingleItem(output["fooEnumList"]["member"]),
      context
    );
  }
  if (output.fooEnumSet === "") {
    contents.fooEnumSet = [];
  } else if (output["fooEnumSet"] !== undefined && output["fooEnumSet"]["member"] !== undefined) {
    contents.fooEnumSet = deserializeAws_queryFooEnumSet(
      __getArrayIfSingleItem(output["fooEnumSet"]["member"]),
      context
    );
  }
  if (output.fooEnumMap === "") {
    contents.fooEnumMap = {};
  } else if (output["fooEnumMap"] !== undefined && output["fooEnumMap"]["entry"] !== undefined) {
    contents.fooEnumMap = deserializeAws_queryFooEnumMap(
      __getArrayIfSingleItem(output["fooEnumMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryXmlIntEnumsOutput = (output: any, context: __SerdeContext): XmlIntEnumsOutput => {
  const contents: any = {
    intEnum1: undefined,
    intEnum2: undefined,
    intEnum3: undefined,
    intEnumList: undefined,
    intEnumSet: undefined,
    intEnumMap: undefined,
  };
  if (output["intEnum1"] !== undefined) {
    contents.intEnum1 = __strictParseInt32(output["intEnum1"]) as number;
  }
  if (output["intEnum2"] !== undefined) {
    contents.intEnum2 = __strictParseInt32(output["intEnum2"]) as number;
  }
  if (output["intEnum3"] !== undefined) {
    contents.intEnum3 = __strictParseInt32(output["intEnum3"]) as number;
  }
  if (output.intEnumList === "") {
    contents.intEnumList = [];
  } else if (output["intEnumList"] !== undefined && output["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = deserializeAws_queryIntegerEnumList(
      __getArrayIfSingleItem(output["intEnumList"]["member"]),
      context
    );
  }
  if (output.intEnumSet === "") {
    contents.intEnumSet = [];
  } else if (output["intEnumSet"] !== undefined && output["intEnumSet"]["member"] !== undefined) {
    contents.intEnumSet = deserializeAws_queryIntegerEnumSet(
      __getArrayIfSingleItem(output["intEnumSet"]["member"]),
      context
    );
  }
  if (output.intEnumMap === "") {
    contents.intEnumMap = {};
  } else if (output["intEnumMap"] !== undefined && output["intEnumMap"]["entry"] !== undefined) {
    contents.intEnumMap = deserializeAws_queryIntegerEnumMap(
      __getArrayIfSingleItem(output["intEnumMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryXmlListsOutput = (output: any, context: __SerdeContext): XmlListsOutput => {
  const contents: any = {
    stringList: undefined,
    stringSet: undefined,
    integerList: undefined,
    booleanList: undefined,
    timestampList: undefined,
    enumList: undefined,
    intEnumList: undefined,
    nestedStringList: undefined,
    renamedListMembers: undefined,
    flattenedList: undefined,
    flattenedList2: undefined,
    flattenedListWithMemberNamespace: undefined,
    flattenedListWithNamespace: undefined,
    structureList: undefined,
  };
  if (output.stringList === "") {
    contents.stringList = [];
  } else if (output["stringList"] !== undefined && output["stringList"]["member"] !== undefined) {
    contents.stringList = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["stringList"]["member"]),
      context
    );
  }
  if (output.stringSet === "") {
    contents.stringSet = [];
  } else if (output["stringSet"] !== undefined && output["stringSet"]["member"] !== undefined) {
    contents.stringSet = deserializeAws_queryStringSet(__getArrayIfSingleItem(output["stringSet"]["member"]), context);
  }
  if (output.integerList === "") {
    contents.integerList = [];
  } else if (output["integerList"] !== undefined && output["integerList"]["member"] !== undefined) {
    contents.integerList = deserializeAws_queryIntegerList(
      __getArrayIfSingleItem(output["integerList"]["member"]),
      context
    );
  }
  if (output.booleanList === "") {
    contents.booleanList = [];
  } else if (output["booleanList"] !== undefined && output["booleanList"]["member"] !== undefined) {
    contents.booleanList = deserializeAws_queryBooleanList(
      __getArrayIfSingleItem(output["booleanList"]["member"]),
      context
    );
  }
  if (output.timestampList === "") {
    contents.timestampList = [];
  } else if (output["timestampList"] !== undefined && output["timestampList"]["member"] !== undefined) {
    contents.timestampList = deserializeAws_queryTimestampList(
      __getArrayIfSingleItem(output["timestampList"]["member"]),
      context
    );
  }
  if (output.enumList === "") {
    contents.enumList = [];
  } else if (output["enumList"] !== undefined && output["enumList"]["member"] !== undefined) {
    contents.enumList = deserializeAws_queryFooEnumList(__getArrayIfSingleItem(output["enumList"]["member"]), context);
  }
  if (output.intEnumList === "") {
    contents.intEnumList = [];
  } else if (output["intEnumList"] !== undefined && output["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = deserializeAws_queryIntegerEnumList(
      __getArrayIfSingleItem(output["intEnumList"]["member"]),
      context
    );
  }
  if (output.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (output["nestedStringList"] !== undefined && output["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = deserializeAws_queryNestedStringList(
      __getArrayIfSingleItem(output["nestedStringList"]["member"]),
      context
    );
  }
  if (output.renamed === "") {
    contents.renamedListMembers = [];
  } else if (output["renamed"] !== undefined && output["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = deserializeAws_queryRenamedListMembers(
      __getArrayIfSingleItem(output["renamed"]["item"]),
      context
    );
  }
  if (output.flattenedList === "") {
    contents.flattenedList = [];
  } else if (output["flattenedList"] !== undefined) {
    contents.flattenedList = deserializeAws_queryRenamedListMembers(
      __getArrayIfSingleItem(output["flattenedList"]),
      context
    );
  }
  if (output.customName === "") {
    contents.flattenedList2 = [];
  } else if (output["customName"] !== undefined) {
    contents.flattenedList2 = deserializeAws_queryRenamedListMembers(
      __getArrayIfSingleItem(output["customName"]),
      context
    );
  }
  if (output.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (output["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = deserializeAws_queryListWithMemberNamespace(
      __getArrayIfSingleItem(output["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (output.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (output["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = deserializeAws_queryListWithNamespace(
      __getArrayIfSingleItem(output["flattenedListWithNamespace"]),
      context
    );
  }
  if (output.myStructureList === "") {
    contents.structureList = [];
  } else if (output["myStructureList"] !== undefined && output["myStructureList"]["item"] !== undefined) {
    contents.structureList = deserializeAws_queryStructureList(
      __getArrayIfSingleItem(output["myStructureList"]["item"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryXmlMapsOutput = (output: any, context: __SerdeContext): XmlMapsOutput => {
  const contents: any = {
    myMap: undefined,
  };
  if (output.myMap === "") {
    contents.myMap = {};
  } else if (output["myMap"] !== undefined && output["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_queryXmlMapsOutputMap(__getArrayIfSingleItem(output["myMap"]["entry"]), context);
  }
  return contents;
};

const deserializeAws_queryXmlMapsOutputMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = deserializeAws_queryGreetingStruct(pair["value"], context);
    return acc;
  }, {});
};

const deserializeAws_queryXmlMapsXmlNameOutput = (output: any, context: __SerdeContext): XmlMapsXmlNameOutput => {
  const contents: any = {
    myMap: undefined,
  };
  if (output.myMap === "") {
    contents.myMap = {};
  } else if (output["myMap"] !== undefined && output["myMap"]["entry"] !== undefined) {
    contents.myMap = deserializeAws_queryXmlMapsXmlNameOutputMap(
      __getArrayIfSingleItem(output["myMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryXmlMapsXmlNameOutputMap = (
  output: any,
  context: __SerdeContext
): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Setting"] === null) {
      return acc;
    }
    acc[pair["Attribute"]] = deserializeAws_queryGreetingStruct(pair["Setting"], context);
    return acc;
  }, {});
};

const deserializeAws_queryXmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryXmlNamespaceNested = (output: any, context: __SerdeContext): XmlNamespaceNested => {
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
    contents.values = deserializeAws_queryXmlNamespacedList(
      __getArrayIfSingleItem(output["values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryXmlNamespacesOutput = (output: any, context: __SerdeContext): XmlNamespacesOutput => {
  const contents: any = {
    nested: undefined,
  };
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_queryXmlNamespaceNested(output["nested"], context);
  }
  return contents;
};

const deserializeAws_queryXmlTimestampsOutput = (output: any, context: __SerdeContext): XmlTimestampsOutput => {
  const contents: any = {
    normal: undefined,
    dateTime: undefined,
    dateTimeOnTarget: undefined,
    epochSeconds: undefined,
    epochSecondsOnTarget: undefined,
    httpDate: undefined,
    httpDateOnTarget: undefined,
  };
  if (output["normal"] !== undefined) {
    contents.normal = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["normal"]));
  }
  if (output["dateTime"] !== undefined) {
    contents.dateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["dateTime"]));
  }
  if (output["dateTimeOnTarget"] !== undefined) {
    contents.dateTimeOnTarget = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["dateTimeOnTarget"]));
  }
  if (output["epochSeconds"] !== undefined) {
    contents.epochSeconds = __expectNonNull(__parseEpochTimestamp(output["epochSeconds"]));
  }
  if (output["epochSecondsOnTarget"] !== undefined) {
    contents.epochSecondsOnTarget = __expectNonNull(__parseEpochTimestamp(output["epochSecondsOnTarget"]));
  }
  if (output["httpDate"] !== undefined) {
    contents.httpDate = __expectNonNull(__parseRfc7231DateTime(output["httpDate"]));
  }
  if (output["httpDateOnTarget"] !== undefined) {
    contents.httpDateOnTarget = __expectNonNull(__parseRfc7231DateTime(output["httpDateOnTarget"]));
  }
  return contents;
};

const deserializeAws_queryBooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

const deserializeAws_queryFooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryFooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_queryFooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryGreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  const contents: any = {
    hi: undefined,
  };
  if (output["hi"] !== undefined) {
    contents.hi = __expectString(output["hi"]);
  }
  return contents;
};

const deserializeAws_queryIntegerEnumList = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_queryIntegerEnumMap = (
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

const deserializeAws_queryIntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_queryIntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_queryNestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryStringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

const deserializeAws_queryStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryStringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryTimestampList = (output: any, context: __SerdeContext): Date[] => {
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
