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
import { XmlEnumsCommandInput, XmlEnumsCommandOutput } from "../commands/XmlEnumsCommand";
import { XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "../commands/XmlIntEnumsCommand";
import { XmlListsCommandInput, XmlListsCommandOutput } from "../commands/XmlListsCommand";
import { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "../commands/XmlNamespacesCommand";
import { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "../commands/XmlTimestampsCommand";
import { EC2ProtocolServiceException as __BaseException } from "../models/EC2ProtocolServiceException";
import {
  ComplexError,
  ComplexNestedErrorData,
  DatetimeOffsetsOutput,
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputOutput,
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
  NoInputAndOutputOutput,
  PutWithContentEncodingInput,
  QueryIdempotencyTokenAutoFillInput,
  QueryListsInput,
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
  XmlNamespaceNested,
  XmlNamespacesOutput,
  XmlTimestampsOutput,
} from "../models/models_0";

/**
 * serializeAws_ec2DatetimeOffsetsCommand
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
 * serializeAws_ec2EmptyInputAndEmptyOutputCommand
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
 * serializeAws_ec2EndpointOperationCommand
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
 * serializeAws_ec2EndpointWithHostLabelOperationCommand
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
 * serializeAws_ec2FractionalSecondsCommand
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
 * serializeAws_ec2GreetingWithErrorsCommand
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
 * serializeAws_ec2HostWithPathOperationCommand
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
 * serializeAws_ec2IgnoresWrappingXmlNameCommand
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
 * serializeAws_ec2NestedStructuresCommand
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
 * serializeAws_ec2NoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "NoInputAndOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2PutWithContentEncodingCommand
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
 * serializeAws_ec2QueryIdempotencyTokenAutoFillCommand
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
 * serializeAws_ec2QueryListsCommand
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
 * serializeAws_ec2QueryTimestampsCommand
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
 * serializeAws_ec2RecursiveXmlShapesCommand
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
 * serializeAws_ec2SimpleInputParamsCommand
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
 * serializeAws_ec2SimpleScalarXmlPropertiesCommand
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
 * serializeAws_ec2XmlBlobsCommand
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
 * serializeAws_ec2XmlEmptyBlobsCommand
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
 * serializeAws_ec2XmlEmptyListsCommand
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
 * serializeAws_ec2XmlEnumsCommand
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
 * serializeAws_ec2XmlIntEnumsCommand
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
 * serializeAws_ec2XmlListsCommand
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
 * serializeAws_ec2XmlNamespacesCommand
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
 * serializeAws_ec2XmlTimestampsCommand
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
 * deserializeAws_ec2DatetimeOffsetsCommand
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
  contents = de_DatetimeOffsetsOutput(data, context);
  const response: DatetimeOffsetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2DatetimeOffsetsCommandError
 */
const de_DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2EmptyInputAndEmptyOutputCommand
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
  contents = de_EmptyInputAndEmptyOutputOutput(data, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2EmptyInputAndEmptyOutputCommandError
 */
const de_EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2EndpointOperationCommand
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
 * deserializeAws_ec2EndpointOperationCommandError
 */
const de_EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2EndpointWithHostLabelOperationCommand
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
 * deserializeAws_ec2EndpointWithHostLabelOperationCommandError
 */
const de_EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2FractionalSecondsCommand
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
  contents = de_FractionalSecondsOutput(data, context);
  const response: FractionalSecondsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2FractionalSecondsCommandError
 */
const de_FractionalSecondsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2GreetingWithErrorsCommand
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
  contents = de_GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2GreetingWithErrorsCommandError
 */
const de_GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.ec2#ComplexError":
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.ec2#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Errors.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_ec2HostWithPathOperationCommand
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
 * deserializeAws_ec2HostWithPathOperationCommandError
 */
const de_HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2IgnoresWrappingXmlNameCommand
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
  contents = de_IgnoresWrappingXmlNameOutput(data, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2IgnoresWrappingXmlNameCommandError
 */
const de_IgnoresWrappingXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2NestedStructuresCommand
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
 * deserializeAws_ec2NestedStructuresCommandError
 */
const de_NestedStructuresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2NoInputAndOutputCommand
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
  contents = de_NoInputAndOutputOutput(data, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2NoInputAndOutputCommandError
 */
const de_NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2PutWithContentEncodingCommand
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
 * deserializeAws_ec2PutWithContentEncodingCommandError
 */
const de_PutWithContentEncodingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2QueryIdempotencyTokenAutoFillCommand
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
 * deserializeAws_ec2QueryIdempotencyTokenAutoFillCommandError
 */
const de_QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2QueryListsCommand
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
 * deserializeAws_ec2QueryListsCommandError
 */
const de_QueryListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2QueryTimestampsCommand
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
 * deserializeAws_ec2QueryTimestampsCommandError
 */
const de_QueryTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2RecursiveXmlShapesCommand
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
  contents = de_RecursiveXmlShapesOutput(data, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesCommandError
 */
const de_RecursiveXmlShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2SimpleInputParamsCommand
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
 * deserializeAws_ec2SimpleInputParamsCommandError
 */
const de_SimpleInputParamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2SimpleScalarXmlPropertiesCommand
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
  contents = de_SimpleScalarXmlPropertiesOutput(data, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2SimpleScalarXmlPropertiesCommandError
 */
const de_SimpleScalarXmlPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlBlobsCommand
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
  contents = de_XmlBlobsOutput(data, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlBlobsCommandError
 */
const de_XmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlEmptyBlobsCommand
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
  contents = de_XmlBlobsOutput(data, context);
  const response: XmlEmptyBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlEmptyBlobsCommandError
 */
const de_XmlEmptyBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlEmptyListsCommand
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
  contents = de_XmlListsOutput(data, context);
  const response: XmlEmptyListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlEmptyListsCommandError
 */
const de_XmlEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlEnumsCommand
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
  contents = de_XmlEnumsOutput(data, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlEnumsCommandError
 */
const de_XmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlIntEnumsCommand
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
  contents = de_XmlIntEnumsOutput(data, context);
  const response: XmlIntEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlIntEnumsCommandError
 */
const de_XmlIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlListsCommand
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
  contents = de_XmlListsOutput(data, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlListsCommandError
 */
const de_XmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlNamespacesCommand
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
  contents = de_XmlNamespacesOutput(data, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlNamespacesCommandError
 */
const de_XmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2XmlTimestampsCommand
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
  contents = de_XmlTimestampsOutput(data, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlTimestampsCommandError
 */
const de_XmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode,
  });
};

/**
 * deserializeAws_ec2ComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ComplexError(body.Errors.Error, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_ec2InvalidGreetingRes
 */
const de_InvalidGreetingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGreeting(body.Errors.Error, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_ec2EmptyInputAndEmptyOutputInput
 */
const se_EmptyInputAndEmptyOutputInput = (input: EmptyInputAndEmptyOutputInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_ec2HostLabelInput
 */
const se_HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.label != null) {
    entries["Label"] = input.label;
  }
  return entries;
};

/**
 * serializeAws_ec2ListWithXmlName
 */
const se_ListWithXmlName = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`Item.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_ec2NestedStructuresInput
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
 * serializeAws_ec2NestedStructWithList
 */
const se_NestedStructWithList = (input: NestedStructWithList, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = se_StringList(input.ListArg, context);
    if (input.ListArg?.length === 0) {
      entries.ListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_ec2PutWithContentEncodingInput
 */
const se_PutWithContentEncodingInput = (input: PutWithContentEncodingInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.encoding != null) {
    entries["Encoding"] = input.encoding;
  }
  if (input.data != null) {
    entries["Data"] = input.data;
  }
  return entries;
};

/**
 * serializeAws_ec2QueryIdempotencyTokenAutoFillInput
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
    entries["Token"] = input.token;
  }
  return entries;
};

/**
 * serializeAws_ec2QueryListsInput
 */
const se_QueryListsInput = (input: QueryListsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = se_StringList(input.ListArg, context);
    if (input.ListArg?.length === 0) {
      entries.ListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ComplexListArg != null) {
    const memberEntries = se_GreetingList(input.ComplexListArg, context);
    if (input.ComplexListArg?.length === 0) {
      entries.ComplexListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ListArgWithXmlNameMember != null) {
    const memberEntries = se_ListWithXmlName(input.ListArgWithXmlNameMember, context);
    if (input.ListArgWithXmlNameMember?.length === 0) {
      entries.ListArgWithXmlNameMember = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArgWithXmlNameMember.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ListArgWithXmlName != null) {
    const memberEntries = se_ListWithXmlName(input.ListArgWithXmlName, context);
    if (input.ListArgWithXmlName?.length === 0) {
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
 * serializeAws_ec2QueryTimestampsInput
 */
const se_QueryTimestampsInput = (input: QueryTimestampsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.normalFormat != null) {
    entries["NormalFormat"] = input.normalFormat.toISOString().split(".")[0] + "Z";
  }
  if (input.epochMember != null) {
    entries["EpochMember"] = Math.round(input.epochMember.getTime() / 1000);
  }
  if (input.epochTarget != null) {
    entries["EpochTarget"] = Math.round(input.epochTarget.getTime() / 1000);
  }
  return entries;
};

/**
 * serializeAws_ec2SimpleInputParamsInput
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
  if (input.HasQueryName != null) {
    entries["A"] = input.HasQueryName;
  }
  if (input.HasQueryAndXmlName != null) {
    entries["B"] = input.HasQueryAndXmlName;
  }
  if (input.UsesXmlName != null) {
    entries["C"] = input.UsesXmlName;
  }
  return entries;
};

/**
 * serializeAws_ec2StructArg
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
 * serializeAws_ec2GreetingList
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
      entries[`Member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_ec2GreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.hi != null) {
    entries["Hi"] = input.hi;
  }
  return entries;
};

/**
 * serializeAws_ec2StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`Member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_ec2ComplexError
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
 * deserializeAws_ec2ComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {};
  if (output["Foo"] !== undefined) {
    contents.Foo = __expectString(output["Foo"]);
  }
  return contents;
};

/**
 * deserializeAws_ec2DatetimeOffsetsOutput
 */
const de_DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  const contents: any = {};
  if (output["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["datetime"]));
  }
  return contents;
};

/**
 * deserializeAws_ec2EmptyInputAndEmptyOutputOutput
 */
const de_EmptyInputAndEmptyOutputOutput = (output: any, context: __SerdeContext): EmptyInputAndEmptyOutputOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_ec2FractionalSecondsOutput
 */
const de_FractionalSecondsOutput = (output: any, context: __SerdeContext): FractionalSecondsOutput => {
  const contents: any = {};
  if (output["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["datetime"]));
  }
  if (output["httpdate"] !== undefined) {
    contents.httpdate = __expectNonNull(__parseRfc7231DateTime(output["httpdate"]));
  }
  return contents;
};

/**
 * deserializeAws_ec2GreetingWithErrorsOutput
 */
const de_GreetingWithErrorsOutput = (output: any, context: __SerdeContext): GreetingWithErrorsOutput => {
  const contents: any = {};
  if (output["greeting"] !== undefined) {
    contents.greeting = __expectString(output["greeting"]);
  }
  return contents;
};

/**
 * deserializeAws_ec2IgnoresWrappingXmlNameOutput
 */
const de_IgnoresWrappingXmlNameOutput = (output: any, context: __SerdeContext): IgnoresWrappingXmlNameOutput => {
  const contents: any = {};
  if (output["foo"] !== undefined) {
    contents.foo = __expectString(output["foo"]);
  }
  return contents;
};

/**
 * deserializeAws_ec2InvalidGreeting
 */
const de_InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_ec2ListWithMemberNamespace
 */
const de_ListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2ListWithNamespace
 */
const de_ListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2NoInputAndOutputOutput
 */
const de_NoInputAndOutputOutput = (output: any, context: __SerdeContext): NoInputAndOutputOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesOutput
 */
const de_RecursiveXmlShapesOutput = (output: any, context: __SerdeContext): RecursiveXmlShapesOutput => {
  const contents: any = {};
  if (output["nested"] !== undefined) {
    contents.nested = de_RecursiveXmlShapesOutputNested1(output["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesOutputNested1
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
 * deserializeAws_ec2RecursiveXmlShapesOutputNested2
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
 * deserializeAws_ec2RenamedListMembers
 */
const de_RenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2SimpleScalarXmlPropertiesOutput
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
 * deserializeAws_ec2StructureList
 */
const de_StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StructureListMember(entry, context);
    });
};

/**
 * deserializeAws_ec2StructureListMember
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
 * deserializeAws_ec2XmlBlobsOutput
 */
const de_XmlBlobsOutput = (output: any, context: __SerdeContext): XmlBlobsOutput => {
  const contents: any = {};
  if (output["data"] !== undefined) {
    contents.data = context.base64Decoder(output["data"]);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlEnumsOutput
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
 * deserializeAws_ec2XmlIntEnumsOutput
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
 * deserializeAws_ec2XmlListsOutput
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
 * deserializeAws_ec2XmlNamespacedList
 */
const de_XmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2XmlNamespaceNested
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
 * deserializeAws_ec2XmlNamespacesOutput
 */
const de_XmlNamespacesOutput = (output: any, context: __SerdeContext): XmlNamespacesOutput => {
  const contents: any = {};
  if (output["nested"] !== undefined) {
    contents.nested = de_XmlNamespaceNested(output["nested"], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlTimestampsOutput
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
 * deserializeAws_ec2BooleanList
 */
const de_BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

/**
 * deserializeAws_ec2FooEnumList
 */
const de_FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2FooEnumMap
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
 * deserializeAws_ec2FooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2IntegerEnumList
 */
const de_IntegerEnumList = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_ec2IntegerEnumMap
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
 * deserializeAws_ec2IntegerEnumSet
 */
const de_IntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_ec2IntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_ec2NestedStringList
 */
const de_NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

/**
 * deserializeAws_ec2StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2StringSet
 */
const de_StringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2TimestampList
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

const loadEc2ErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Errors.Error?.Code !== undefined) {
    return data.Errors.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
