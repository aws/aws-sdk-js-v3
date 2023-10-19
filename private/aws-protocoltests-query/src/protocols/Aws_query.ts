// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  collectBody,
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
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import { FractionalSecondsCommandInput, FractionalSecondsCommandOutput } from "../commands/FractionalSecondsCommand";
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
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "../commands/PutWithContentEncodingCommand";
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
  FractionalSecondsOutput,
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
  PutWithContentEncodingInput,
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

/**
 * serializeAws_queryDatetimeOffsetsCommand
 */
export const se_DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DatetimeOffsets",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEmptyInputAndEmptyOutputCommand
 */
export const se_EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EmptyInputAndEmptyOutputInput(input, context),
    Action: "EmptyInputAndEmptyOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
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

/**
 * serializeAws_queryEndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_HostLabelInput(input, context),
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

/**
 * serializeAws_queryFlattenedXmlMapCommand
 */
export const se_FlattenedXmlMapCommand = async (
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMap",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFlattenedXmlMapWithXmlNameCommand
 */
export const se_FlattenedXmlMapWithXmlNameCommand = async (
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMapWithXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand
 */
export const se_FlattenedXmlMapWithXmlNamespaceCommand = async (
  input: FlattenedXmlMapWithXmlNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMapWithXmlNamespace",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryFractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "FractionalSeconds",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "GreetingWithErrors",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryHostWithPathOperationCommand
 */
export const se_HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "HostWithPathOperation",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryIgnoresWrappingXmlNameCommand
 */
export const se_IgnoresWrappingXmlNameCommand = async (
  input: IgnoresWrappingXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "IgnoresWrappingXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryNestedStructuresCommand
 */
export const se_NestedStructuresCommand = async (
  input: NestedStructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_NestedStructuresInput(input, context),
    Action: "NestedStructures",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryNoInputAndNoOutputCommand
 */
export const se_NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "NoInputAndNoOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryNoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_NoInputAndOutputInput(input, context),
    Action: "NoInputAndOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutWithContentEncodingInput(input, context),
    Action: "PutWithContentEncoding",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryQueryIdempotencyTokenAutoFillCommand
 */
export const se_QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryIdempotencyTokenAutoFillInput(input, context),
    Action: "QueryIdempotencyTokenAutoFill",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryQueryListsCommand
 */
export const se_QueryListsCommand = async (
  input: QueryListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryListsInput(input, context),
    Action: "QueryLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryQueryMapsCommand
 */
export const se_QueryMapsCommand = async (
  input: QueryMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryMapsInput(input, context),
    Action: "QueryMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryQueryTimestampsCommand
 */
export const se_QueryTimestampsCommand = async (
  input: QueryTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryTimestampsInput(input, context),
    Action: "QueryTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRecursiveXmlShapesCommand
 */
export const se_RecursiveXmlShapesCommand = async (
  input: RecursiveXmlShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "RecursiveXmlShapes",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySimpleInputParamsCommand
 */
export const se_SimpleInputParamsCommand = async (
  input: SimpleInputParamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SimpleInputParamsInput(input, context),
    Action: "SimpleInputParams",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySimpleScalarXmlPropertiesCommand
 */
export const se_SimpleScalarXmlPropertiesCommand = async (
  input: SimpleScalarXmlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "SimpleScalarXmlProperties",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlBlobsCommand
 */
export const se_XmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlBlobs",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlEmptyBlobsCommand
 */
export const se_XmlEmptyBlobsCommand = async (
  input: XmlEmptyBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlEmptyBlobs",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlEmptyListsCommand
 */
export const se_XmlEmptyListsCommand = async (
  input: XmlEmptyListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlEmptyLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlEmptyMapsCommand
 */
export const se_XmlEmptyMapsCommand = async (
  input: XmlEmptyMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlEmptyMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlEnumsCommand
 */
export const se_XmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlEnums",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlIntEnumsCommand
 */
export const se_XmlIntEnumsCommand = async (
  input: XmlIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlIntEnums",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlListsCommand
 */
export const se_XmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlMapsCommand
 */
export const se_XmlMapsCommand = async (
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlMapsXmlNameCommand
 */
export const se_XmlMapsXmlNameCommand = async (
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlMapsXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlNamespacesCommand
 */
export const se_XmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlNamespaces",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryXmlTimestampsCommand
 */
export const se_XmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "XmlTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryDatetimeOffsetsCommand
 */
export const de_DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DatetimeOffsetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DatetimeOffsetsOutput(data.DatetimeOffsetsResult, context);
  const response: DatetimeOffsetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDatetimeOffsetsCommandError
 */
const de_DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryEmptyInputAndEmptyOutputCommand
 */
export const de_EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EmptyInputAndEmptyOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EmptyInputAndEmptyOutputOutput(data.EmptyInputAndEmptyOutputResult, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEmptyInputAndEmptyOutputCommandError
 */
const de_EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryEndpointOperationCommand
 */
export const de_EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EndpointOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEndpointOperationCommandError
 */
const de_EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryEndpointWithHostLabelOperationCommand
 */
export const de_EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EndpointWithHostLabelOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEndpointWithHostLabelOperationCommandError
 */
const de_EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryFlattenedXmlMapCommand
 */
export const de_FlattenedXmlMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FlattenedXmlMapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FlattenedXmlMapOutput(data.FlattenedXmlMapResult, context);
  const response: FlattenedXmlMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFlattenedXmlMapCommandError
 */
const de_FlattenedXmlMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNameCommand
 */
export const de_FlattenedXmlMapWithXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FlattenedXmlMapWithXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FlattenedXmlMapWithXmlNameOutput(data.FlattenedXmlMapWithXmlNameResult, context);
  const response: FlattenedXmlMapWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNameCommandError
 */
const de_FlattenedXmlMapWithXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand
 */
export const de_FlattenedXmlMapWithXmlNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FlattenedXmlMapWithXmlNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FlattenedXmlMapWithXmlNamespaceOutput(data.FlattenedXmlMapWithXmlNamespaceResult, context);
  const response: FlattenedXmlMapWithXmlNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommandError
 */
const de_FlattenedXmlMapWithXmlNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryFractionalSecondsCommand
 */
export const de_FractionalSecondsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FractionalSecondsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FractionalSecondsOutput(data.FractionalSecondsResult, context);
  const response: FractionalSecondsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryFractionalSecondsCommandError
 */
const de_FractionalSecondsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryGreetingWithErrorsCommand
 */
export const de_GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GreetingWithErrorsOutput(data.GreetingWithErrorsResult, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGreetingWithErrorsCommandError
 */
const de_GreetingWithErrorsCommandError = async (
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
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "Customized":
    case "aws.protocoltests.query#CustomCodeError":
      throw await de_CustomCodeErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.query#InvalidGreeting":
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
 * deserializeAws_queryHostWithPathOperationCommand
 */
export const de_HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_HostWithPathOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryHostWithPathOperationCommandError
 */
const de_HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryIgnoresWrappingXmlNameCommand
 */
export const de_IgnoresWrappingXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IgnoresWrappingXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IgnoresWrappingXmlNameOutput(data.IgnoresWrappingXmlNameResult, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryIgnoresWrappingXmlNameCommandError
 */
const de_IgnoresWrappingXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryNestedStructuresCommand
 */
export const de_NestedStructuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NestedStructuresCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NestedStructuresCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryNestedStructuresCommandError
 */
const de_NestedStructuresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryNoInputAndNoOutputCommand
 */
export const de_NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NoInputAndNoOutputCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryNoInputAndNoOutputCommandError
 */
const de_NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryNoInputAndOutputCommand
 */
export const de_NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NoInputAndOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NoInputAndOutputOutput(data.NoInputAndOutputResult, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryNoInputAndOutputCommandError
 */
const de_NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryPutWithContentEncodingCommand
 */
export const de_PutWithContentEncodingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutWithContentEncodingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutWithContentEncodingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutWithContentEncodingCommandError
 */
const de_PutWithContentEncodingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryQueryIdempotencyTokenAutoFillCommand
 */
export const de_QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryQueryIdempotencyTokenAutoFillCommandError
 */
const de_QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryQueryListsCommand
 */
export const de_QueryListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryListsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryListsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryQueryListsCommandError
 */
const de_QueryListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryQueryMapsCommand
 */
export const de_QueryMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryMapsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryMapsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryQueryMapsCommandError
 */
const de_QueryMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryQueryTimestampsCommand
 */
export const de_QueryTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryTimestampsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryQueryTimestampsCommandError
 */
const de_QueryTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryRecursiveXmlShapesCommand
 */
export const de_RecursiveXmlShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RecursiveXmlShapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RecursiveXmlShapesOutput(data.RecursiveXmlShapesResult, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRecursiveXmlShapesCommandError
 */
const de_RecursiveXmlShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_querySimpleInputParamsCommand
 */
export const de_SimpleInputParamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SimpleInputParamsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SimpleInputParamsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySimpleInputParamsCommandError
 */
const de_SimpleInputParamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_querySimpleScalarXmlPropertiesCommand
 */
export const de_SimpleScalarXmlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SimpleScalarXmlPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SimpleScalarXmlPropertiesOutput(data.SimpleScalarXmlPropertiesResult, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySimpleScalarXmlPropertiesCommandError
 */
const de_SimpleScalarXmlPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlBlobsCommand
 */
export const de_XmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlBlobsOutput(data.XmlBlobsResult, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlBlobsCommandError
 */
const de_XmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlEmptyBlobsCommand
 */
export const de_XmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlEmptyBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlBlobsOutput(data.XmlEmptyBlobsResult, context);
  const response: XmlEmptyBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlEmptyBlobsCommandError
 */
const de_XmlEmptyBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlEmptyListsCommand
 */
export const de_XmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlEmptyListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlListsOutput(data.XmlEmptyListsResult, context);
  const response: XmlEmptyListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlEmptyListsCommandError
 */
const de_XmlEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlEmptyMapsCommand
 */
export const de_XmlEmptyMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlEmptyMapsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlMapsOutput(data.XmlEmptyMapsResult, context);
  const response: XmlEmptyMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlEmptyMapsCommandError
 */
const de_XmlEmptyMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlEnumsCommand
 */
export const de_XmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlEnumsOutput(data.XmlEnumsResult, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlEnumsCommandError
 */
const de_XmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlIntEnumsCommand
 */
export const de_XmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlIntEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlIntEnumsOutput(data.XmlIntEnumsResult, context);
  const response: XmlIntEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlIntEnumsCommandError
 */
const de_XmlIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlListsCommand
 */
export const de_XmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlListsOutput(data.XmlListsResult, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlListsCommandError
 */
const de_XmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlMapsCommand
 */
export const de_XmlMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlMapsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlMapsOutput(data.XmlMapsResult, context);
  const response: XmlMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlMapsCommandError
 */
const de_XmlMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlMapsXmlNameCommand
 */
export const de_XmlMapsXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlMapsXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlMapsXmlNameOutput(data.XmlMapsXmlNameResult, context);
  const response: XmlMapsXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlMapsXmlNameCommandError
 */
const de_XmlMapsXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlNamespacesCommand
 */
export const de_XmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlNamespacesOutput(data.XmlNamespacesResult, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlNamespacesCommandError
 */
const de_XmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryXmlTimestampsCommand
 */
export const de_XmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_XmlTimestampsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlTimestampsOutput(data.XmlTimestampsResult, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryXmlTimestampsCommandError
 */
const de_XmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ComplexError(body.Error, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomCodeErrorRes
 */
const de_CustomCodeErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<CustomCodeError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomCodeError(body.Error, context);
  const exception = new CustomCodeError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidGreetingRes
 */
const de_InvalidGreetingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGreeting(body.Error, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryComplexMap
 */
const se_ComplexMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      const memberEntries = se_GreetingStruct(input[key as keyof typeof input]!, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryEmptyInputAndEmptyOutputInput
 */
const se_EmptyInputAndEmptyOutputInput = (input: EmptyInputAndEmptyOutputInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryHostLabelInput
 */
const se_HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.label != null) {
    entries["label"] = input.label;
  }
  return entries;
};

/**
 * serializeAws_queryListWithXmlName
 */
const se_ListWithXmlName = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryMapOfLists
 */
const se_MapOfLists = (input: Record<string, string[]>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      const memberEntries = se_StringList(input[key as keyof typeof input]!, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryMapWithXmlName
 */
const se_MapWithXmlName = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.K`] = key;
      entries[`entry.${counter}.V`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryNestedStructuresInput
 */
const se_NestedStructuresInput = (input: NestedStructuresInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Nested != null) {
    const memberEntries = se_StructArg(input.Nested, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Nested.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryNestedStructWithList
 */
const se_NestedStructWithList = (input: NestedStructWithList, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = se_StringList(input.ListArg, context);
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

/**
 * serializeAws_queryNestedStructWithMap
 */
const se_NestedStructWithMap = (input: NestedStructWithMap, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MapArg != null) {
    const memberEntries = se_StringMap(input.MapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryNoInputAndOutputInput
 */
const se_NoInputAndOutputInput = (input: NoInputAndOutputInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryPutWithContentEncodingInput
 */
const se_PutWithContentEncodingInput = (input: PutWithContentEncodingInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.encoding != null) {
    entries["encoding"] = input.encoding;
  }
  if (input.data != null) {
    entries["data"] = input.data;
  }
  return entries;
};

/**
 * serializeAws_queryQueryIdempotencyTokenAutoFillInput
 */
const se_QueryIdempotencyTokenAutoFillInput = (
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

/**
 * serializeAws_queryQueryListsInput
 */
const se_QueryListsInput = (input: QueryListsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = se_StringList(input.ListArg, context);
    if (input.ListArg?.length === 0) {
      entries.ListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ComplexListArg != null) {
    const memberEntries = se_GreetingList(input.ComplexListArg, context);
    if (input.ComplexListArg?.length === 0) {
      entries.ComplexListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexListArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedListArg != null) {
    const memberEntries = se_StringList(input.FlattenedListArg, context);
    if (input.FlattenedListArg?.length === 0) {
      entries.FlattenedListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FlattenedListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ListArgWithXmlNameMember != null) {
    const memberEntries = se_ListWithXmlName(input.ListArgWithXmlNameMember, context);
    if (input.ListArgWithXmlNameMember?.length === 0) {
      entries.ListArgWithXmlNameMember = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArgWithXmlNameMember.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedListArgWithXmlName != null) {
    const memberEntries = se_ListWithXmlName(input.FlattenedListArgWithXmlName, context);
    if (input.FlattenedListArgWithXmlName?.length === 0) {
      entries.Hi = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.NestedWithList != null) {
    const memberEntries = se_NestedStructWithList(input.NestedWithList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NestedWithList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryQueryMapsInput
 */
const se_QueryMapsInput = (input: QueryMapsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MapArg != null) {
    const memberEntries = se_StringMap(input.MapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.RenamedMapArg != null) {
    const memberEntries = se_StringMap(input.RenamedMapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Foo.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ComplexMapArg != null) {
    const memberEntries = se_ComplexMap(input.ComplexMapArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexMapArg.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MapWithXmlMemberName != null) {
    const memberEntries = se_MapWithXmlName(input.MapWithXmlMemberName, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapWithXmlMemberName.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedMap != null) {
    const memberEntries = se_StringMap(input.FlattenedMap, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FlattenedMap.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.FlattenedMapWithXmlName != null) {
    const memberEntries = se_MapWithXmlName(input.FlattenedMapWithXmlName, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MapOfLists != null) {
    const memberEntries = se_MapOfLists(input.MapOfLists, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MapOfLists.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NestedStructWithMap != null) {
    const memberEntries = se_NestedStructWithMap(input.NestedStructWithMap, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NestedStructWithMap.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryQueryTimestampsInput
 */
const se_QueryTimestampsInput = (input: QueryTimestampsInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_querySimpleInputParamsInput
 */
const se_SimpleInputParamsInput = (input: SimpleInputParamsInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_queryStructArg
 */
const se_StructArg = (input: StructArg, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StringArg != null) {
    entries["StringArg"] = input.StringArg;
  }
  if (input.OtherArg != null) {
    entries["OtherArg"] = input.OtherArg;
  }
  if (input.RecursiveArg != null) {
    const memberEntries = se_StructArg(input.RecursiveArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecursiveArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGreetingList
 */
const se_GreetingList = (input: GreetingStruct[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_GreetingStruct(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryGreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.hi != null) {
    entries["hi"] = input.hi;
  }
  return entries;
};

/**
 * serializeAws_queryStringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_queryStringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * deserializeAws_queryComplexError
 */
const de_ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  const contents: any = {};
  if (output["TopLevel"] !== undefined) {
    contents.TopLevel = __expectString(output["TopLevel"]);
  }
  if (output["Nested"] !== undefined) {
    contents.Nested = de_ComplexNestedErrorData(output["Nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {};
  if (output["Foo"] !== undefined) {
    contents.Foo = __expectString(output["Foo"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomCodeError
 */
const de_CustomCodeError = (output: any, context: __SerdeContext): CustomCodeError => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDatetimeOffsetsOutput
 */
const de_DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  const contents: any = {};
  if (output["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["datetime"]));
  }
  return contents;
};

/**
 * deserializeAws_queryEmptyInputAndEmptyOutputOutput
 */
const de_EmptyInputAndEmptyOutputOutput = (output: any, context: __SerdeContext): EmptyInputAndEmptyOutputOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryFlattenedXmlMapOutput
 */
const de_FlattenedXmlMapOutput = (output: any, context: __SerdeContext): FlattenedXmlMapOutput => {
  const contents: any = {};
  if (output.myMap === "") {
    contents.myMap = {};
  } else if (output["myMap"] !== undefined) {
    contents.myMap = de_FooEnumMap(__getArrayIfSingleItem(output["myMap"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNameOutput
 */
const de_FlattenedXmlMapWithXmlNameOutput = (
  output: any,
  context: __SerdeContext
): FlattenedXmlMapWithXmlNameOutput => {
  const contents: any = {};
  if (output.KVP === "") {
    contents.myMap = {};
  } else if (output["KVP"] !== undefined) {
    contents.myMap = de_FlattenedXmlMapWithXmlNameOutputMap(__getArrayIfSingleItem(output["KVP"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNameOutputMap
 */
const de_FlattenedXmlMapWithXmlNameOutputMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["V"] === null) {
      return acc;
    }
    acc[pair["K"]] = __expectString(pair["V"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNamespaceOutput
 */
const de_FlattenedXmlMapWithXmlNamespaceOutput = (
  output: any,
  context: __SerdeContext
): FlattenedXmlMapWithXmlNamespaceOutput => {
  const contents: any = {};
  if (output.KVP === "") {
    contents.myMap = {};
  } else if (output["KVP"] !== undefined) {
    contents.myMap = de_FlattenedXmlMapWithXmlNamespaceOutputMap(__getArrayIfSingleItem(output["KVP"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryFlattenedXmlMapWithXmlNamespaceOutputMap
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
 * deserializeAws_queryFractionalSecondsOutput
 */
const de_FractionalSecondsOutput = (output: any, context: __SerdeContext): FractionalSecondsOutput => {
  const contents: any = {};
  if (output["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["datetime"]));
  }
  return contents;
};

/**
 * deserializeAws_queryGreetingWithErrorsOutput
 */
const de_GreetingWithErrorsOutput = (output: any, context: __SerdeContext): GreetingWithErrorsOutput => {
  const contents: any = {};
  if (output["greeting"] !== undefined) {
    contents.greeting = __expectString(output["greeting"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIgnoresWrappingXmlNameOutput
 */
const de_IgnoresWrappingXmlNameOutput = (output: any, context: __SerdeContext): IgnoresWrappingXmlNameOutput => {
  const contents: any = {};
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidGreeting
 */
const de_InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListWithMemberNamespace
 */
const de_ListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryListWithNamespace
 */
const de_ListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryNoInputAndOutputOutput
 */
const de_NoInputAndOutputOutput = (output: any, context: __SerdeContext): NoInputAndOutputOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRecursiveXmlShapesOutput
 */
const de_RecursiveXmlShapesOutput = (output: any, context: __SerdeContext): RecursiveXmlShapesOutput => {
  const contents: any = {};
  if (output["nested"] !== undefined) {
    contents.nested = de_RecursiveXmlShapesOutputNested1(output["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecursiveXmlShapesOutputNested1
 */
const de_RecursiveXmlShapesOutputNested1 = (output: any, context: __SerdeContext): RecursiveXmlShapesOutputNested1 => {
  const contents: any = {};
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  if (output["nested"] !== undefined) {
    contents.nested = de_RecursiveXmlShapesOutputNested2(output["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRecursiveXmlShapesOutputNested2
 */
const de_RecursiveXmlShapesOutputNested2 = (output: any, context: __SerdeContext): RecursiveXmlShapesOutputNested2 => {
  const contents: any = {};
  if (output["bar"] !== undefined) {
    contents.bar = __expectString(output["bar"]);
  }
  if (output["recursiveMember"] !== undefined) {
    contents.recursiveMember = de_RecursiveXmlShapesOutputNested1(output["recursiveMember"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRenamedListMembers
 */
const de_RenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySimpleScalarXmlPropertiesOutput
 */
const de_SimpleScalarXmlPropertiesOutput = (output: any, context: __SerdeContext): SimpleScalarXmlPropertiesOutput => {
  const contents: any = {};
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

/**
 * deserializeAws_queryStructureList
 */
const de_StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StructureListMember(entry, context);
    });
};

/**
 * deserializeAws_queryStructureListMember
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
 * deserializeAws_queryXmlBlobsOutput
 */
const de_XmlBlobsOutput = (output: any, context: __SerdeContext): XmlBlobsOutput => {
  const contents: any = {};
  if (output["data"] !== undefined) {
    contents.data = context.base64Decoder(output["data"]);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlEnumsOutput
 */
const de_XmlEnumsOutput = (output: any, context: __SerdeContext): XmlEnumsOutput => {
  const contents: any = {};
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
    contents.fooEnumList = de_FooEnumList(__getArrayIfSingleItem(output["fooEnumList"]["member"]), context);
  }
  if (output.fooEnumSet === "") {
    contents.fooEnumSet = [];
  } else if (output["fooEnumSet"] !== undefined && output["fooEnumSet"]["member"] !== undefined) {
    contents.fooEnumSet = de_FooEnumSet(__getArrayIfSingleItem(output["fooEnumSet"]["member"]), context);
  }
  if (output.fooEnumMap === "") {
    contents.fooEnumMap = {};
  } else if (output["fooEnumMap"] !== undefined && output["fooEnumMap"]["entry"] !== undefined) {
    contents.fooEnumMap = de_FooEnumMap(__getArrayIfSingleItem(output["fooEnumMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlIntEnumsOutput
 */
const de_XmlIntEnumsOutput = (output: any, context: __SerdeContext): XmlIntEnumsOutput => {
  const contents: any = {};
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
    contents.intEnumList = de_IntegerEnumList(__getArrayIfSingleItem(output["intEnumList"]["member"]), context);
  }
  if (output.intEnumSet === "") {
    contents.intEnumSet = [];
  } else if (output["intEnumSet"] !== undefined && output["intEnumSet"]["member"] !== undefined) {
    contents.intEnumSet = de_IntegerEnumSet(__getArrayIfSingleItem(output["intEnumSet"]["member"]), context);
  }
  if (output.intEnumMap === "") {
    contents.intEnumMap = {};
  } else if (output["intEnumMap"] !== undefined && output["intEnumMap"]["entry"] !== undefined) {
    contents.intEnumMap = de_IntegerEnumMap(__getArrayIfSingleItem(output["intEnumMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlListsOutput
 */
const de_XmlListsOutput = (output: any, context: __SerdeContext): XmlListsOutput => {
  const contents: any = {};
  if (output.stringList === "") {
    contents.stringList = [];
  } else if (output["stringList"] !== undefined && output["stringList"]["member"] !== undefined) {
    contents.stringList = de_StringList(__getArrayIfSingleItem(output["stringList"]["member"]), context);
  }
  if (output.stringSet === "") {
    contents.stringSet = [];
  } else if (output["stringSet"] !== undefined && output["stringSet"]["member"] !== undefined) {
    contents.stringSet = de_StringSet(__getArrayIfSingleItem(output["stringSet"]["member"]), context);
  }
  if (output.integerList === "") {
    contents.integerList = [];
  } else if (output["integerList"] !== undefined && output["integerList"]["member"] !== undefined) {
    contents.integerList = de_IntegerList(__getArrayIfSingleItem(output["integerList"]["member"]), context);
  }
  if (output.booleanList === "") {
    contents.booleanList = [];
  } else if (output["booleanList"] !== undefined && output["booleanList"]["member"] !== undefined) {
    contents.booleanList = de_BooleanList(__getArrayIfSingleItem(output["booleanList"]["member"]), context);
  }
  if (output.timestampList === "") {
    contents.timestampList = [];
  } else if (output["timestampList"] !== undefined && output["timestampList"]["member"] !== undefined) {
    contents.timestampList = de_TimestampList(__getArrayIfSingleItem(output["timestampList"]["member"]), context);
  }
  if (output.enumList === "") {
    contents.enumList = [];
  } else if (output["enumList"] !== undefined && output["enumList"]["member"] !== undefined) {
    contents.enumList = de_FooEnumList(__getArrayIfSingleItem(output["enumList"]["member"]), context);
  }
  if (output.intEnumList === "") {
    contents.intEnumList = [];
  } else if (output["intEnumList"] !== undefined && output["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = de_IntegerEnumList(__getArrayIfSingleItem(output["intEnumList"]["member"]), context);
  }
  if (output.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (output["nestedStringList"] !== undefined && output["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = de_NestedStringList(
      __getArrayIfSingleItem(output["nestedStringList"]["member"]),
      context
    );
  }
  if (output.renamed === "") {
    contents.renamedListMembers = [];
  } else if (output["renamed"] !== undefined && output["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = de_RenamedListMembers(__getArrayIfSingleItem(output["renamed"]["item"]), context);
  }
  if (output.flattenedList === "") {
    contents.flattenedList = [];
  } else if (output["flattenedList"] !== undefined) {
    contents.flattenedList = de_RenamedListMembers(__getArrayIfSingleItem(output["flattenedList"]), context);
  }
  if (output.customName === "") {
    contents.flattenedList2 = [];
  } else if (output["customName"] !== undefined) {
    contents.flattenedList2 = de_RenamedListMembers(__getArrayIfSingleItem(output["customName"]), context);
  }
  if (output.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (output["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = de_ListWithMemberNamespace(
      __getArrayIfSingleItem(output["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (output.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (output["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = de_ListWithNamespace(
      __getArrayIfSingleItem(output["flattenedListWithNamespace"]),
      context
    );
  }
  if (output.myStructureList === "") {
    contents.structureList = [];
  } else if (output["myStructureList"] !== undefined && output["myStructureList"]["item"] !== undefined) {
    contents.structureList = de_StructureList(__getArrayIfSingleItem(output["myStructureList"]["item"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlMapsOutput
 */
const de_XmlMapsOutput = (output: any, context: __SerdeContext): XmlMapsOutput => {
  const contents: any = {};
  if (output.myMap === "") {
    contents.myMap = {};
  } else if (output["myMap"] !== undefined && output["myMap"]["entry"] !== undefined) {
    contents.myMap = de_XmlMapsOutputMap(__getArrayIfSingleItem(output["myMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlMapsOutputMap
 */
const de_XmlMapsOutputMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_GreetingStruct(pair["value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryXmlMapsXmlNameOutput
 */
const de_XmlMapsXmlNameOutput = (output: any, context: __SerdeContext): XmlMapsXmlNameOutput => {
  const contents: any = {};
  if (output.myMap === "") {
    contents.myMap = {};
  } else if (output["myMap"] !== undefined && output["myMap"]["entry"] !== undefined) {
    contents.myMap = de_XmlMapsXmlNameOutputMap(__getArrayIfSingleItem(output["myMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlMapsXmlNameOutputMap
 */
const de_XmlMapsXmlNameOutputMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Setting"] === null) {
      return acc;
    }
    acc[pair["Attribute"]] = de_GreetingStruct(pair["Setting"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryXmlNamespacedList
 */
const de_XmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryXmlNamespaceNested
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
 * deserializeAws_queryXmlNamespacesOutput
 */
const de_XmlNamespacesOutput = (output: any, context: __SerdeContext): XmlNamespacesOutput => {
  const contents: any = {};
  if (output["nested"] !== undefined) {
    contents.nested = de_XmlNamespaceNested(output["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryXmlTimestampsOutput
 */
const de_XmlTimestampsOutput = (output: any, context: __SerdeContext): XmlTimestampsOutput => {
  const contents: any = {};
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

/**
 * deserializeAws_queryBooleanList
 */
const de_BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

/**
 * deserializeAws_queryFooEnumList
 */
const de_FooEnumList = (output: any, context: __SerdeContext): FooEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryFooEnumMap
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
 * deserializeAws_queryFooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): FooEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryGreetingStruct
 */
const de_GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  const contents: any = {};
  if (output["hi"] !== undefined) {
    contents.hi = __expectString(output["hi"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntegerEnumList
 */
const de_IntegerEnumList = (output: any, context: __SerdeContext): IntegerEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_queryIntegerEnumMap
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
 * deserializeAws_queryIntegerEnumSet
 */
const de_IntegerEnumSet = (output: any, context: __SerdeContext): IntegerEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_queryIntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_queryNestedStringList
 */
const de_NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

/**
 * deserializeAws_queryStringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryStringSet
 */
const de_StringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTimestampList
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

const throwDefaultError = withBaseException(__BaseException);
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
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
