// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  dateToUtcString as __dateToUtcString,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  serializeFloat as __serializeFloat,
  take,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "../commands/DatetimeOffsetsCommand";
import { EmptyOperationCommandInput, EmptyOperationCommandOutput } from "../commands/EmptyOperationCommand";
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
import { JsonEnumsCommandInput, JsonEnumsCommandOutput } from "../commands/JsonEnumsCommand";
import { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "../commands/JsonUnionsCommand";
import {
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
} from "../commands/KitchenSinkOperationCommand";
import { NullOperationCommandInput, NullOperationCommandOutput } from "../commands/NullOperationCommand";
import {
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput,
} from "../commands/OperationWithOptionalInputOutputCommand";
import {
  PutAndGetInlineDocumentsCommandInput,
  PutAndGetInlineDocumentsCommandOutput,
} from "../commands/PutAndGetInlineDocumentsCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "../commands/SimpleScalarPropertiesCommand";
import { JsonProtocolServiceException as __BaseException } from "../models/JsonProtocolServiceException";
import {
  ComplexError,
  ComplexNestedErrorData,
  DatetimeOffsetsOutput,
  EmptyStruct,
  ErrorWithMembers,
  ErrorWithoutMembers,
  FooEnum,
  FooError,
  FractionalSecondsOutput,
  GreetingStruct,
  GreetingWithErrorsOutput,
  HostLabelInput,
  InvalidGreeting,
  JsonEnumsInputOutput,
  KitchenSink,
  MyUnion,
  NullOperationInputOutput,
  OperationWithOptionalInputOutputInput,
  OperationWithOptionalInputOutputOutput,
  PutAndGetInlineDocumentsInputOutput,
  SimpleScalarPropertiesInputOutput,
  SimpleStruct,
  StructWithJsonName,
  UnionInputOutput,
} from "../models/models_0";

export const serializeAws_json1_1DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.DatetimeOffsets",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EmptyOperationCommand = async (
  input: EmptyOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.EmptyOperation",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.EndpointOperation",
  };
  const body = "{}";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "foo." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

export const serializeAws_json1_1EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.EndpointWithHostLabelOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1HostLabelInput(input, context));
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

export const serializeAws_json1_1FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.FractionalSeconds",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.GreetingWithErrors",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.HostWithPathOperation",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1JsonEnumsCommand = async (
  input: JsonEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.JsonEnums",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1JsonEnumsInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1JsonUnionsCommand = async (
  input: JsonUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.JsonUnions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnionInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1KitchenSinkOperationCommand = async (
  input: KitchenSinkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.KitchenSinkOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1KitchenSink(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NullOperationCommand = async (
  input: NullOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.NullOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1NullOperationInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1OperationWithOptionalInputOutputCommand = async (
  input: OperationWithOptionalInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.OperationWithOptionalInputOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1OperationWithOptionalInputOutputInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAndGetInlineDocumentsCommand = async (
  input: PutAndGetInlineDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.PutAndGetInlineDocuments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAndGetInlineDocumentsInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "JsonProtocol.SimpleScalarProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SimpleScalarPropertiesInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DatetimeOffsetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DatetimeOffsetsOutput(data, context);
  const response: DatetimeOffsetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1EmptyOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EmptyOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EmptyOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EmptyOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EndpointOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EndpointWithHostLabelOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1FractionalSecondsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1FractionalSecondsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1FractionalSecondsOutput(data, context);
  const response: FractionalSecondsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1FractionalSecondsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.json#ComplexError":
      throw await deserializeAws_json1_1ComplexErrorResponse(parsedOutput, context);
    case "FooError":
    case "aws.protocoltests.json#FooError":
      throw await deserializeAws_json1_1FooErrorResponse(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.json#InvalidGreeting":
      throw await deserializeAws_json1_1InvalidGreetingResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1HostWithPathOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1JsonEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1JsonEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1JsonEnumsInputOutput(data, context);
  const response: JsonEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1JsonEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1JsonUnionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnionInputOutput(data, context);
  const response: JsonUnionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1JsonUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1KitchenSinkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<KitchenSinkOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1KitchenSinkOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1KitchenSink(data, context);
  const response: KitchenSinkOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1KitchenSinkOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<KitchenSinkOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ErrorWithMembers":
    case "aws.protocoltests.json#ErrorWithMembers":
      throw await deserializeAws_json1_1ErrorWithMembersResponse(parsedOutput, context);
    case "ErrorWithoutMembers":
    case "aws.protocoltests.json#ErrorWithoutMembers":
      throw await deserializeAws_json1_1ErrorWithoutMembersResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1NullOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1NullOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NullOperationInputOutput(data, context);
  const response: NullOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NullOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1OperationWithOptionalInputOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithOptionalInputOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1OperationWithOptionalInputOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1OperationWithOptionalInputOutputOutput(data, context);
  const response: OperationWithOptionalInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1OperationWithOptionalInputOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithOptionalInputOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1PutAndGetInlineDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAndGetInlineDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAndGetInlineDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAndGetInlineDocumentsInputOutput(data, context);
  const response: PutAndGetInlineDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAndGetInlineDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAndGetInlineDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_json1_1SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SimpleScalarPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SimpleScalarPropertiesInputOutput(data, context);
  const response: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const deserializeAws_json1_1ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ComplexError(body, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ErrorWithMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ErrorWithMembers(body, context);
  const exception = new ErrorWithMembers({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ErrorWithoutMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithoutMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ErrorWithoutMembers(body, context);
  const exception = new ErrorWithoutMembers({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FooErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FooError(body, context);
  const exception = new FooError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGreeting(body, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

const serializeAws_json1_1EmptyStruct = (input: EmptyStruct, context: __SerdeContext): any => {
  return take(input, {});
};

const serializeAws_json1_1HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  return take(input, {
    label: [],
  });
};

const serializeAws_json1_1JsonEnumsInputOutput = (input: JsonEnumsInputOutput, context: __SerdeContext): any => {
  return take(input, {
    fooEnum1: [],
    fooEnum2: [],
    fooEnum3: [],
    fooEnumList: [, (_) => serializeAws_json1_1FooEnumList(_, context)],
    fooEnumMap: [, (_) => serializeAws_json1_1FooEnumMap(_, context)],
    fooEnumSet: [, (_) => serializeAws_json1_1FooEnumSet(_, context)],
  });
};

const serializeAws_json1_1KitchenSink = (input: KitchenSink, context: __SerdeContext): any => {
  return take(input, {
    Blob: [, (_) => context.base64Encoder(_)],
    Boolean: [],
    Double: [, (_) => __serializeFloat(_)],
    EmptyStruct: [, (_) => serializeAws_json1_1EmptyStruct(_, context)],
    Float: [, (_) => __serializeFloat(_)],
    HttpdateTimestamp: [, (_) => __dateToUtcString(_)],
    Integer: [],
    Iso8601Timestamp: [, (_) => _.toISOString().split(".")[0] + "Z"],
    JsonValue: [, (_) => __LazyJsonString.fromObject(_)],
    ListOfLists: [, (_) => serializeAws_json1_1ListOfListOfStrings(_, context)],
    ListOfMapsOfStrings: [, (_) => serializeAws_json1_1ListOfMapsOfStrings(_, context)],
    ListOfStrings: [, (_) => serializeAws_json1_1ListOfStrings(_, context)],
    ListOfStructs: [, (_) => serializeAws_json1_1ListOfStructs(_, context)],
    Long: [],
    MapOfListsOfStrings: [, (_) => serializeAws_json1_1MapOfListsOfStrings(_, context)],
    MapOfMaps: [, (_) => serializeAws_json1_1MapOfMapOfStrings(_, context)],
    MapOfStrings: [, (_) => serializeAws_json1_1MapOfStrings(_, context)],
    MapOfStructs: [, (_) => serializeAws_json1_1MapOfStructs(_, context)],
    RecursiveList: [, (_) => serializeAws_json1_1ListOfKitchenSinks(_, context)],
    RecursiveMap: [, (_) => serializeAws_json1_1MapOfKitchenSinks(_, context)],
    RecursiveStruct: [, (_) => serializeAws_json1_1KitchenSink(_, context)],
    SimpleStruct: [, (_) => serializeAws_json1_1SimpleStruct(_, context)],
    String: [],
    StructWithJsonName: [, (_) => serializeAws_json1_1StructWithJsonName(_, context)],
    Timestamp: [, (_) => Math.round(_.getTime() / 1000)],
    UnixTimestamp: [, (_) => Math.round(_.getTime() / 1000)],
  });
};

const serializeAws_json1_1ListOfKitchenSinks = (input: KitchenSink[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1KitchenSink(entry, context);
    });
};

const serializeAws_json1_1ListOfListOfStrings = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ListOfStrings(entry, context);
    });
};

const serializeAws_json1_1ListOfMapsOfStrings = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MapOfStrings(entry, context);
    });
};

const serializeAws_json1_1ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1ListOfStructs = (input: SimpleStruct[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SimpleStruct(entry, context);
    });
};

const serializeAws_json1_1MapOfKitchenSinks = (input: Record<string, KitchenSink>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1KitchenSink(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfListsOfStrings = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ListOfStrings(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfMapOfStrings = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1MapOfStrings(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfStrings = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfStructs = (input: Record<string, SimpleStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1SimpleStruct(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1MyUnion = (input: MyUnion, context: __SerdeContext): any => {
  return MyUnion.visit(input, {
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    enumValue: (value) => ({ enumValue: value }),
    listValue: (value) => ({ listValue: serializeAws_json1_1StringList(value, context) }),
    mapValue: (value) => ({ mapValue: serializeAws_json1_1StringMap(value, context) }),
    numberValue: (value) => ({ numberValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: serializeAws_json1_1GreetingStruct(value, context) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_1NullOperationInputOutput = (
  input: NullOperationInputOutput,
  context: __SerdeContext
): any => {
  return take(input, {
    sparseStringList: [, (_) => serializeAws_json1_1SparseStringList(_, context)],
    sparseStringMap: [, (_) => serializeAws_json1_1SparseStringMap(_, context)],
    string: [],
  });
};

const serializeAws_json1_1OperationWithOptionalInputOutputInput = (
  input: OperationWithOptionalInputOutputInput,
  context: __SerdeContext
): any => {
  return take(input, {
    Value: [],
  });
};

const serializeAws_json1_1PutAndGetInlineDocumentsInputOutput = (
  input: PutAndGetInlineDocumentsInputOutput,
  context: __SerdeContext
): any => {
  return take(input, {
    inlineDocument: [, (_) => serializeAws_json1_1Document(_, context)],
  });
};

const serializeAws_json1_1SimpleScalarPropertiesInputOutput = (
  input: SimpleScalarPropertiesInputOutput,
  context: __SerdeContext
): any => {
  return take(input, {
    doubleValue: [, (_) => __serializeFloat(_)],
    floatValue: [, (_) => __serializeFloat(_)],
  });
};

const serializeAws_json1_1SimpleStruct = (input: SimpleStruct, context: __SerdeContext): any => {
  return take(input, {
    Value: [],
  });
};

const serializeAws_json1_1StructWithJsonName = (input: StructWithJsonName, context: __SerdeContext): any => {
  return take(input, {
    Value: [],
  });
};

const serializeAws_json1_1UnionInputOutput = (input: UnionInputOutput, context: __SerdeContext): any => {
  return take(input, {
    contents: [, (_) => serializeAws_json1_1MyUnion(_, context)],
  });
};

const serializeAws_json1_1FooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1FooEnumMap = (input: Record<string, FooEnum | string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1FooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return take(input, {
    hi: [],
  });
};

const serializeAws_json1_1SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input;
};

const serializeAws_json1_1SparseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

const serializeAws_json1_1StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_json1_1ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  return take(output, {
    Nested: [, (_) => deserializeAws_json1_1ComplexNestedErrorData(_, context)],
    TopLevel: __expectString,
  }) as any;
};

const deserializeAws_json1_1ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  return take(output, {
    Foo: __expectString,
  }) as any;
};

const deserializeAws_json1_1DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  return take(output, {
    datetime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_))],
  }) as any;
};

const deserializeAws_json1_1Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

const deserializeAws_json1_1EmptyStruct = (output: any, context: __SerdeContext): EmptyStruct => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1ErrorWithMembers = (output: any, context: __SerdeContext): ErrorWithMembers => {
  return take(output, {
    Code: __expectString,
    ComplexData: [, (_) => deserializeAws_json1_1KitchenSink(_, context)],
    IntegerField: __expectInt32,
    ListField: [, (_) => deserializeAws_json1_1ListOfStrings(_, context)],
    MapField: [, (_) => deserializeAws_json1_1MapOfStrings(_, context)],
    Message: __expectString,
    StringField: __expectString,
  }) as any;
};

const deserializeAws_json1_1ErrorWithoutMembers = (output: any, context: __SerdeContext): ErrorWithoutMembers => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1FooError = (output: any, context: __SerdeContext): FooError => {
  return take(output, {}) as any;
};

const deserializeAws_json1_1FractionalSecondsOutput = (
  output: any,
  context: __SerdeContext
): FractionalSecondsOutput => {
  return take(output, {
    datetime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_))],
    httpdate: [, (_) => __expectNonNull(__parseRfc7231DateTime(_))],
  }) as any;
};

const deserializeAws_json1_1GreetingWithErrorsOutput = (
  output: any,
  context: __SerdeContext
): GreetingWithErrorsOutput => {
  return take(output, {
    greeting: __expectString,
  }) as any;
};

const deserializeAws_json1_1InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  return take(output, {
    Message: __expectString,
  }) as any;
};

const deserializeAws_json1_1JsonEnumsInputOutput = (output: any, context: __SerdeContext): JsonEnumsInputOutput => {
  return take(output, {
    fooEnum1: __expectString,
    fooEnum2: __expectString,
    fooEnum3: __expectString,
    fooEnumList: [, (_) => deserializeAws_json1_1FooEnumList(_, context)],
    fooEnumMap: [, (_) => deserializeAws_json1_1FooEnumMap(_, context)],
    fooEnumSet: [, (_) => deserializeAws_json1_1FooEnumSet(_, context)],
  }) as any;
};

const deserializeAws_json1_1KitchenSink = (output: any, context: __SerdeContext): KitchenSink => {
  return take(output, {
    Blob: [, (_) => context.base64Decoder(_)],
    Boolean: __expectBoolean,
    Double: __limitedParseDouble,
    EmptyStruct: [, (_) => deserializeAws_json1_1EmptyStruct(_, context)],
    Float: __limitedParseFloat32,
    HttpdateTimestamp: [, (_) => __expectNonNull(__parseRfc7231DateTime(_))],
    Integer: __expectInt32,
    Iso8601Timestamp: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_))],
    JsonValue: [, (_) => new __LazyJsonString(_)],
    ListOfLists: [, (_) => deserializeAws_json1_1ListOfListOfStrings(_, context)],
    ListOfMapsOfStrings: [, (_) => deserializeAws_json1_1ListOfMapsOfStrings(_, context)],
    ListOfStrings: [, (_) => deserializeAws_json1_1ListOfStrings(_, context)],
    ListOfStructs: [, (_) => deserializeAws_json1_1ListOfStructs(_, context)],
    Long: __expectLong,
    MapOfListsOfStrings: [, (_) => deserializeAws_json1_1MapOfListsOfStrings(_, context)],
    MapOfMaps: [, (_) => deserializeAws_json1_1MapOfMapOfStrings(_, context)],
    MapOfStrings: [, (_) => deserializeAws_json1_1MapOfStrings(_, context)],
    MapOfStructs: [, (_) => deserializeAws_json1_1MapOfStructs(_, context)],
    RecursiveList: [, (_) => deserializeAws_json1_1ListOfKitchenSinks(_, context)],
    RecursiveMap: [, (_) => deserializeAws_json1_1MapOfKitchenSinks(_, context)],
    RecursiveStruct: [, (_) => deserializeAws_json1_1KitchenSink(_, context)],
    SimpleStruct: [, (_) => deserializeAws_json1_1SimpleStruct(_, context)],
    String: __expectString,
    StructWithJsonName: [, (_) => deserializeAws_json1_1StructWithJsonName(_, context)],
    Timestamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
    UnixTimestamp: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_)))],
  }) as any;
};

const deserializeAws_json1_1ListOfKitchenSinks = (output: any, context: __SerdeContext): KitchenSink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1KitchenSink(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfListOfStrings = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1ListOfStrings(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfMapsOfStrings = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1MapOfStrings(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListOfStrings = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ListOfStructs = (output: any, context: __SerdeContext): SimpleStruct[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_json1_1SimpleStruct(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MapOfKitchenSinks = (output: any, context: __SerdeContext): Record<string, KitchenSink> => {
  return Object.entries(output).reduce((acc: Record<string, KitchenSink>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1KitchenSink(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfListsOfStrings = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1ListOfStrings(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfMapOfStrings = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1MapOfStrings(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfStrings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfStructs = (output: any, context: __SerdeContext): Record<string, SimpleStruct> => {
  return Object.entries(output).reduce((acc: Record<string, SimpleStruct>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1SimpleStruct(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MyUnion = (output: any, context: __SerdeContext): MyUnion => {
  if (output.blobValue != null) {
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
  if (output.listValue != null) {
    return {
      listValue: deserializeAws_json1_1StringList(output.listValue, context),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: deserializeAws_json1_1StringMap(output.mapValue, context),
    };
  }
  if (__expectInt32(output.numberValue) !== undefined) {
    return { numberValue: __expectInt32(output.numberValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structureValue != null) {
    return {
      structureValue: deserializeAws_json1_1GreetingStruct(output.structureValue, context),
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue))),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1NullOperationInputOutput = (
  output: any,
  context: __SerdeContext
): NullOperationInputOutput => {
  return take(output, {
    sparseStringList: [, (_) => deserializeAws_json1_1SparseStringList(_, context)],
    sparseStringMap: [, (_) => deserializeAws_json1_1SparseStringMap(_, context)],
    string: __expectString,
  }) as any;
};

const deserializeAws_json1_1OperationWithOptionalInputOutputOutput = (
  output: any,
  context: __SerdeContext
): OperationWithOptionalInputOutputOutput => {
  return take(output, {
    Value: __expectString,
  }) as any;
};

const deserializeAws_json1_1PutAndGetInlineDocumentsInputOutput = (
  output: any,
  context: __SerdeContext
): PutAndGetInlineDocumentsInputOutput => {
  return take(output, {
    inlineDocument: [, (_) => deserializeAws_json1_1Document(_, context)],
  }) as any;
};

const deserializeAws_json1_1SimpleScalarPropertiesInputOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarPropertiesInputOutput => {
  return take(output, {
    doubleValue: __limitedParseDouble,
    floatValue: __limitedParseFloat32,
  }) as any;
};

const deserializeAws_json1_1SimpleStruct = (output: any, context: __SerdeContext): SimpleStruct => {
  return take(output, {
    Value: __expectString,
  }) as any;
};

const deserializeAws_json1_1StructWithJsonName = (output: any, context: __SerdeContext): StructWithJsonName => {
  return take(output, {
    Value: __expectString,
  }) as any;
};

const deserializeAws_json1_1UnionInputOutput = (output: any, context: __SerdeContext): UnionInputOutput => {
  return take(output, {
    contents: [, (_) => deserializeAws_json1_1MyUnion(__expectUnion(_), context)],
  }) as any;
};

const deserializeAws_json1_1FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
  return Object.entries(output).reduce((acc: Record<string, FooEnum | string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return take(output, {
    hi: __expectString,
  }) as any;
};

const deserializeAws_json1_1SparseStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

const deserializeAws_json1_1SparseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
