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
  GreetingStruct,
  GreetingWithErrorsOutput,
  HostLabelInput,
  IgnoresWrappingXmlNameOutput,
  IntegerEnum,
  InvalidGreeting,
  NestedStructuresInput,
  NestedStructWithList,
  NoInputAndOutputOutput,
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

export const serializeAws_ec2DatetimeOffsetsCommand = async (
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

export const serializeAws_ec2EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2EmptyInputAndEmptyOutputInput(input, context),
    Action: "EmptyInputAndEmptyOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2EndpointOperationCommand = async (
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

export const serializeAws_ec2EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2HostLabelInput(input, context),
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

export const serializeAws_ec2GreetingWithErrorsCommand = async (
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

export const serializeAws_ec2HostWithPathOperationCommand = async (
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

export const serializeAws_ec2IgnoresWrappingXmlNameCommand = async (
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

export const serializeAws_ec2NestedStructuresCommand = async (
  input: NestedStructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2NestedStructuresInput(input, context),
    Action: "NestedStructures",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "NoInputAndOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2QueryIdempotencyTokenAutoFillInput(input, context),
    Action: "QueryIdempotencyTokenAutoFill",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2QueryListsCommand = async (
  input: QueryListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2QueryListsInput(input, context),
    Action: "QueryLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2QueryTimestampsCommand = async (
  input: QueryTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2QueryTimestampsInput(input, context),
    Action: "QueryTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2RecursiveXmlShapesCommand = async (
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

export const serializeAws_ec2SimpleInputParamsCommand = async (
  input: SimpleInputParamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_ec2SimpleInputParamsInput(input, context),
    Action: "SimpleInputParams",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2SimpleScalarXmlPropertiesCommand = async (
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

export const serializeAws_ec2XmlBlobsCommand = async (
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

export const serializeAws_ec2XmlEmptyBlobsCommand = async (
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

export const serializeAws_ec2XmlEmptyListsCommand = async (
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

export const serializeAws_ec2XmlEnumsCommand = async (
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

export const serializeAws_ec2XmlIntEnumsCommand = async (
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

export const serializeAws_ec2XmlListsCommand = async (
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

export const serializeAws_ec2XmlNamespacesCommand = async (
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

export const serializeAws_ec2XmlTimestampsCommand = async (
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

export const deserializeAws_ec2DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2DatetimeOffsetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2DatetimeOffsetsOutput(data, context);
  const response: DatetimeOffsetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2EmptyInputAndEmptyOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2EmptyInputAndEmptyOutputOutput(data, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2EndpointOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2EndpointWithHostLabelOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2GreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2GreetingWithErrorsCommandError = async (
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
      throw await deserializeAws_ec2ComplexErrorResponse(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.ec2#InvalidGreeting":
      throw await deserializeAws_ec2InvalidGreetingResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Errors.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_ec2HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2HostWithPathOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2IgnoresWrappingXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2IgnoresWrappingXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2IgnoresWrappingXmlNameOutput(data, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2IgnoresWrappingXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2NestedStructuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2NestedStructuresCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NestedStructuresCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2NestedStructuresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2NoInputAndOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2NoInputAndOutputOutput(data, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2QueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2QueryListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2QueryListsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryListsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2QueryListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2QueryTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2QueryTimestampsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2QueryTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2RecursiveXmlShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2RecursiveXmlShapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2RecursiveXmlShapesOutput(data, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2RecursiveXmlShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2SimpleInputParamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2SimpleInputParamsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SimpleInputParamsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2SimpleInputParamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2SimpleScalarXmlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2SimpleScalarXmlPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2SimpleScalarXmlPropertiesOutput(data, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2SimpleScalarXmlPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlBlobsOutput(data, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlEmptyBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlBlobsOutput(data, context);
  const response: XmlEmptyBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlEmptyBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlEmptyListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlListsOutput(data, context);
  const response: XmlEmptyListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlEmptyListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlEnumsOutput(data, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlIntEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlIntEnumsOutput(data, context);
  const response: XmlIntEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlIntEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlListsOutput(data, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlNamespacesOutput(data, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_ec2XmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_ec2XmlTimestampsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlTimestampsOutput(data, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Errors.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const deserializeAws_ec2ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_ec2ComplexError(body.Errors.Error, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_ec2InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_ec2InvalidGreeting(body.Errors.Error, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_ec2EmptyInputAndEmptyOutputInput = (
  input: EmptyInputAndEmptyOutputInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_ec2HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.label != null) {
    entries["Label"] = input.label;
  }
  return entries;
};

const serializeAws_ec2ListWithXmlName = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_ec2NestedStructuresInput = (input: NestedStructuresInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Nested != null) {
    const memberEntries = serializeAws_ec2StructArg(input.Nested, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Nested.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_ec2NestedStructWithList = (input: NestedStructWithList, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = serializeAws_ec2StringList(input.ListArg, context);
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

const serializeAws_ec2QueryIdempotencyTokenAutoFillInput = (
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

const serializeAws_ec2QueryListsInput = (input: QueryListsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ListArg != null) {
    const memberEntries = serializeAws_ec2StringList(input.ListArg, context);
    if (input.ListArg?.length === 0) {
      entries.ListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ComplexListArg != null) {
    const memberEntries = serializeAws_ec2GreetingList(input.ComplexListArg, context);
    if (input.ComplexListArg?.length === 0) {
      entries.ComplexListArg = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ListArgWithXmlNameMember != null) {
    const memberEntries = serializeAws_ec2ListWithXmlName(input.ListArgWithXmlNameMember, context);
    if (input.ListArgWithXmlNameMember?.length === 0) {
      entries.ListArgWithXmlNameMember = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArgWithXmlNameMember.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.ListArgWithXmlName != null) {
    const memberEntries = serializeAws_ec2ListWithXmlName(input.ListArgWithXmlName, context);
    if (input.ListArgWithXmlName?.length === 0) {
      entries.Hi = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.NestedWithList != null) {
    const memberEntries = serializeAws_ec2NestedStructWithList(input.NestedWithList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NestedWithList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_ec2QueryTimestampsInput = (input: QueryTimestampsInput, context: __SerdeContext): any => {
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

const serializeAws_ec2SimpleInputParamsInput = (input: SimpleInputParamsInput, context: __SerdeContext): any => {
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

const serializeAws_ec2StructArg = (input: StructArg, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StringArg != null) {
    entries["StringArg"] = input.StringArg;
  }
  if (input.OtherArg != null) {
    entries["OtherArg"] = input.OtherArg;
  }
  if (input.RecursiveArg != null) {
    const memberEntries = serializeAws_ec2StructArg(input.RecursiveArg, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecursiveArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_ec2GreetingList = (input: GreetingStruct[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_ec2GreetingStruct(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_ec2GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.hi != null) {
    entries["Hi"] = input.hi;
  }
  return entries;
};

const serializeAws_ec2StringList = (input: string[], context: __SerdeContext): any => {
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

const deserializeAws_ec2ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  const contents: any = {
    TopLevel: undefined,
    Nested: undefined,
  };
  if (output["TopLevel"] !== undefined) {
    contents.TopLevel = __expectString(output["TopLevel"]);
  }
  if (output["Nested"] !== undefined) {
    contents.Nested = deserializeAws_ec2ComplexNestedErrorData(output["Nested"], context);
  }
  return contents;
};

const deserializeAws_ec2ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {
    Foo: undefined,
  };
  if (output["Foo"] !== undefined) {
    contents.Foo = __expectString(output["Foo"]);
  }
  return contents;
};

const deserializeAws_ec2DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  const contents: any = {
    datetime: undefined,
  };
  if (output["datetime"] !== undefined) {
    contents.datetime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["datetime"]));
  }
  return contents;
};

const deserializeAws_ec2EmptyInputAndEmptyOutputOutput = (
  output: any,
  context: __SerdeContext
): EmptyInputAndEmptyOutputOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_ec2GreetingWithErrorsOutput = (output: any, context: __SerdeContext): GreetingWithErrorsOutput => {
  const contents: any = {
    greeting: undefined,
  };
  if (output["greeting"] !== undefined) {
    contents.greeting = __expectString(output["greeting"]);
  }
  return contents;
};

const deserializeAws_ec2IgnoresWrappingXmlNameOutput = (
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

const deserializeAws_ec2InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_ec2ListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2ListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2NoInputAndOutputOutput = (output: any, context: __SerdeContext): NoInputAndOutputOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_ec2RecursiveXmlShapesOutput = (output: any, context: __SerdeContext): RecursiveXmlShapesOutput => {
  const contents: any = {
    nested: undefined,
  };
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_ec2RecursiveXmlShapesOutputNested1(output["nested"], context);
  }
  return contents;
};

const deserializeAws_ec2RecursiveXmlShapesOutputNested1 = (
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
    contents.nested = deserializeAws_ec2RecursiveXmlShapesOutputNested2(output["nested"], context);
  }
  return contents;
};

const deserializeAws_ec2RecursiveXmlShapesOutputNested2 = (
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
    contents.recursiveMember = deserializeAws_ec2RecursiveXmlShapesOutputNested1(output["recursiveMember"], context);
  }
  return contents;
};

const deserializeAws_ec2RenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2SimpleScalarXmlPropertiesOutput = (
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

const deserializeAws_ec2StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_ec2StructureListMember(entry, context);
    });
};

const deserializeAws_ec2StructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
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

const deserializeAws_ec2XmlBlobsOutput = (output: any, context: __SerdeContext): XmlBlobsOutput => {
  const contents: any = {
    data: undefined,
  };
  if (output["data"] !== undefined) {
    contents.data = context.base64Decoder(output["data"]);
  }
  return contents;
};

const deserializeAws_ec2XmlEnumsOutput = (output: any, context: __SerdeContext): XmlEnumsOutput => {
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
    contents.fooEnumList = deserializeAws_ec2FooEnumList(
      __getArrayIfSingleItem(output["fooEnumList"]["member"]),
      context
    );
  }
  if (output.fooEnumSet === "") {
    contents.fooEnumSet = [];
  } else if (output["fooEnumSet"] !== undefined && output["fooEnumSet"]["member"] !== undefined) {
    contents.fooEnumSet = deserializeAws_ec2FooEnumSet(__getArrayIfSingleItem(output["fooEnumSet"]["member"]), context);
  }
  if (output.fooEnumMap === "") {
    contents.fooEnumMap = {};
  } else if (output["fooEnumMap"] !== undefined && output["fooEnumMap"]["entry"] !== undefined) {
    contents.fooEnumMap = deserializeAws_ec2FooEnumMap(__getArrayIfSingleItem(output["fooEnumMap"]["entry"]), context);
  }
  return contents;
};

const deserializeAws_ec2XmlIntEnumsOutput = (output: any, context: __SerdeContext): XmlIntEnumsOutput => {
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
    contents.intEnumList = deserializeAws_ec2IntegerEnumList(
      __getArrayIfSingleItem(output["intEnumList"]["member"]),
      context
    );
  }
  if (output.intEnumSet === "") {
    contents.intEnumSet = [];
  } else if (output["intEnumSet"] !== undefined && output["intEnumSet"]["member"] !== undefined) {
    contents.intEnumSet = deserializeAws_ec2IntegerEnumSet(
      __getArrayIfSingleItem(output["intEnumSet"]["member"]),
      context
    );
  }
  if (output.intEnumMap === "") {
    contents.intEnumMap = {};
  } else if (output["intEnumMap"] !== undefined && output["intEnumMap"]["entry"] !== undefined) {
    contents.intEnumMap = deserializeAws_ec2IntegerEnumMap(
      __getArrayIfSingleItem(output["intEnumMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_ec2XmlListsOutput = (output: any, context: __SerdeContext): XmlListsOutput => {
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
    contents.stringList = deserializeAws_ec2StringList(__getArrayIfSingleItem(output["stringList"]["member"]), context);
  }
  if (output.stringSet === "") {
    contents.stringSet = [];
  } else if (output["stringSet"] !== undefined && output["stringSet"]["member"] !== undefined) {
    contents.stringSet = deserializeAws_ec2StringSet(__getArrayIfSingleItem(output["stringSet"]["member"]), context);
  }
  if (output.integerList === "") {
    contents.integerList = [];
  } else if (output["integerList"] !== undefined && output["integerList"]["member"] !== undefined) {
    contents.integerList = deserializeAws_ec2IntegerList(
      __getArrayIfSingleItem(output["integerList"]["member"]),
      context
    );
  }
  if (output.booleanList === "") {
    contents.booleanList = [];
  } else if (output["booleanList"] !== undefined && output["booleanList"]["member"] !== undefined) {
    contents.booleanList = deserializeAws_ec2BooleanList(
      __getArrayIfSingleItem(output["booleanList"]["member"]),
      context
    );
  }
  if (output.timestampList === "") {
    contents.timestampList = [];
  } else if (output["timestampList"] !== undefined && output["timestampList"]["member"] !== undefined) {
    contents.timestampList = deserializeAws_ec2TimestampList(
      __getArrayIfSingleItem(output["timestampList"]["member"]),
      context
    );
  }
  if (output.enumList === "") {
    contents.enumList = [];
  } else if (output["enumList"] !== undefined && output["enumList"]["member"] !== undefined) {
    contents.enumList = deserializeAws_ec2FooEnumList(__getArrayIfSingleItem(output["enumList"]["member"]), context);
  }
  if (output.intEnumList === "") {
    contents.intEnumList = [];
  } else if (output["intEnumList"] !== undefined && output["intEnumList"]["member"] !== undefined) {
    contents.intEnumList = deserializeAws_ec2IntegerEnumList(
      __getArrayIfSingleItem(output["intEnumList"]["member"]),
      context
    );
  }
  if (output.nestedStringList === "") {
    contents.nestedStringList = [];
  } else if (output["nestedStringList"] !== undefined && output["nestedStringList"]["member"] !== undefined) {
    contents.nestedStringList = deserializeAws_ec2NestedStringList(
      __getArrayIfSingleItem(output["nestedStringList"]["member"]),
      context
    );
  }
  if (output.renamed === "") {
    contents.renamedListMembers = [];
  } else if (output["renamed"] !== undefined && output["renamed"]["item"] !== undefined) {
    contents.renamedListMembers = deserializeAws_ec2RenamedListMembers(
      __getArrayIfSingleItem(output["renamed"]["item"]),
      context
    );
  }
  if (output.flattenedList === "") {
    contents.flattenedList = [];
  } else if (output["flattenedList"] !== undefined) {
    contents.flattenedList = deserializeAws_ec2RenamedListMembers(
      __getArrayIfSingleItem(output["flattenedList"]),
      context
    );
  }
  if (output.customName === "") {
    contents.flattenedList2 = [];
  } else if (output["customName"] !== undefined) {
    contents.flattenedList2 = deserializeAws_ec2RenamedListMembers(
      __getArrayIfSingleItem(output["customName"]),
      context
    );
  }
  if (output.flattenedListWithMemberNamespace === "") {
    contents.flattenedListWithMemberNamespace = [];
  } else if (output["flattenedListWithMemberNamespace"] !== undefined) {
    contents.flattenedListWithMemberNamespace = deserializeAws_ec2ListWithMemberNamespace(
      __getArrayIfSingleItem(output["flattenedListWithMemberNamespace"]),
      context
    );
  }
  if (output.flattenedListWithNamespace === "") {
    contents.flattenedListWithNamespace = [];
  } else if (output["flattenedListWithNamespace"] !== undefined) {
    contents.flattenedListWithNamespace = deserializeAws_ec2ListWithNamespace(
      __getArrayIfSingleItem(output["flattenedListWithNamespace"]),
      context
    );
  }
  if (output.myStructureList === "") {
    contents.structureList = [];
  } else if (output["myStructureList"] !== undefined && output["myStructureList"]["item"] !== undefined) {
    contents.structureList = deserializeAws_ec2StructureList(
      __getArrayIfSingleItem(output["myStructureList"]["item"]),
      context
    );
  }
  return contents;
};

const deserializeAws_ec2XmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2XmlNamespaceNested = (output: any, context: __SerdeContext): XmlNamespaceNested => {
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
    contents.values = deserializeAws_ec2XmlNamespacedList(__getArrayIfSingleItem(output["values"]["member"]), context);
  }
  return contents;
};

const deserializeAws_ec2XmlNamespacesOutput = (output: any, context: __SerdeContext): XmlNamespacesOutput => {
  const contents: any = {
    nested: undefined,
  };
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_ec2XmlNamespaceNested(output["nested"], context);
  }
  return contents;
};

const deserializeAws_ec2XmlTimestampsOutput = (output: any, context: __SerdeContext): XmlTimestampsOutput => {
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

const deserializeAws_ec2BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

const deserializeAws_ec2FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_ec2FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2IntegerEnumList = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_ec2IntegerEnumMap = (
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

const deserializeAws_ec2IntegerEnumSet = (output: any, context: __SerdeContext): (IntegerEnum | number)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_ec2IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_ec2NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_ec2StringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

const deserializeAws_ec2StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2StringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_ec2TimestampList = (output: any, context: __SerdeContext): Date[] => {
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

const loadEc2ErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Errors.Error?.Code !== undefined) {
    return data.Errors.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
