// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  dateToUtcString as __dateToUtcString,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "../commands/PutWithContentEncodingCommand";
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
  HostLabelInput,
  InvalidGreeting,
  JsonEnumsInputOutput,
  KitchenSink,
  MyUnion,
  NullOperationInputOutput,
  OperationWithOptionalInputOutputInput,
  PutAndGetInlineDocumentsInputOutput,
  PutWithContentEncodingInput,
  SimpleScalarPropertiesInputOutput,
  SimpleStruct,
  StructWithJsonName,
  UnionInputOutput,
} from "../models/models_0";

/**
 * serializeAws_json1_1DatetimeOffsetsCommand
 */
export const se_DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DatetimeOffsets");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EmptyOperationCommand
 */
export const se_EmptyOperationCommand = async (
  input: EmptyOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EmptyOperation");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EndpointOperation");
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

/**
 * serializeAws_json1_1EndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EndpointWithHostLabelOperation");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1FractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("FractionalSeconds");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GreetingWithErrors");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1HostWithPathOperationCommand
 */
export const se_HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("HostWithPathOperation");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1JsonEnumsCommand
 */
export const se_JsonEnumsCommand = async (
  input: JsonEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("JsonEnums");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1JsonUnionsCommand
 */
export const se_JsonUnionsCommand = async (
  input: JsonUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("JsonUnions");
  let body: any;
  body = JSON.stringify(se_UnionInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1KitchenSinkOperationCommand
 */
export const se_KitchenSinkOperationCommand = async (
  input: KitchenSinkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("KitchenSinkOperation");
  let body: any;
  body = JSON.stringify(se_KitchenSink(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NullOperationCommand
 */
export const se_NullOperationCommand = async (
  input: NullOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NullOperation");
  let body: any;
  body = JSON.stringify(se_NullOperationInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1OperationWithOptionalInputOutputCommand
 */
export const se_OperationWithOptionalInputOutputCommand = async (
  input: OperationWithOptionalInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OperationWithOptionalInputOutput");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAndGetInlineDocumentsCommand
 */
export const se_PutAndGetInlineDocumentsCommand = async (
  input: PutAndGetInlineDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAndGetInlineDocuments");
  let body: any;
  body = JSON.stringify(se_PutAndGetInlineDocumentsInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutWithContentEncoding");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SimpleScalarPropertiesCommand
 */
export const se_SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SimpleScalarProperties");
  let body: any;
  body = JSON.stringify(se_SimpleScalarPropertiesInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DatetimeOffsetsCommand
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
 * deserializeAws_json1_1DatetimeOffsetsCommandError
 */
const de_DatetimeOffsetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1EmptyOperationCommand
 */
export const de_EmptyOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EmptyOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EmptyOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1EmptyOperationCommandError
 */
const de_EmptyOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1EndpointOperationCommand
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
 * deserializeAws_json1_1EndpointOperationCommandError
 */
const de_EndpointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1EndpointWithHostLabelOperationCommand
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
 * deserializeAws_json1_1EndpointWithHostLabelOperationCommandError
 */
const de_EndpointWithHostLabelOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1FractionalSecondsCommand
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
 * deserializeAws_json1_1FractionalSecondsCommandError
 */
const de_FractionalSecondsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GreetingWithErrorsCommand
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
  contents = _json(data);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GreetingWithErrorsCommandError
 */
const de_GreetingWithErrorsCommandError = async (
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
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "FooError":
    case "aws.protocoltests.json#FooError":
      throw await de_FooErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.json#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1HostWithPathOperationCommand
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
 * deserializeAws_json1_1HostWithPathOperationCommandError
 */
const de_HostWithPathOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1JsonEnumsCommand
 */
export const de_JsonEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_JsonEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: JsonEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1JsonEnumsCommandError
 */
const de_JsonEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1JsonUnionsCommand
 */
export const de_JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_JsonUnionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UnionInputOutput(data, context);
  const response: JsonUnionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1JsonUnionsCommandError
 */
const de_JsonUnionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1KitchenSinkOperationCommand
 */
export const de_KitchenSinkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<KitchenSinkOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_KitchenSinkOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_KitchenSink(data, context);
  const response: KitchenSinkOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1KitchenSinkOperationCommandError
 */
const de_KitchenSinkOperationCommandError = async (
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
      throw await de_ErrorWithMembersRes(parsedOutput, context);
    case "ErrorWithoutMembers":
    case "aws.protocoltests.json#ErrorWithoutMembers":
      throw await de_ErrorWithoutMembersRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1NullOperationCommand
 */
export const de_NullOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NullOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NullOperationInputOutput(data, context);
  const response: NullOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1NullOperationCommandError
 */
const de_NullOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NullOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1OperationWithOptionalInputOutputCommand
 */
export const de_OperationWithOptionalInputOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithOptionalInputOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OperationWithOptionalInputOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: OperationWithOptionalInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1OperationWithOptionalInputOutputCommandError
 */
const de_OperationWithOptionalInputOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithOptionalInputOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1PutAndGetInlineDocumentsCommand
 */
export const de_PutAndGetInlineDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAndGetInlineDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAndGetInlineDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAndGetInlineDocumentsInputOutput(data, context);
  const response: PutAndGetInlineDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAndGetInlineDocumentsCommandError
 */
const de_PutAndGetInlineDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAndGetInlineDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1PutWithContentEncodingCommand
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
 * deserializeAws_json1_1PutWithContentEncodingCommandError
 */
const de_PutWithContentEncodingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SimpleScalarPropertiesCommand
 */
export const de_SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SimpleScalarPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SimpleScalarPropertiesInputOutput(data, context);
  const response: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SimpleScalarPropertiesCommandError
 */
const de_SimpleScalarPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ComplexError(body, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ErrorWithMembersRes
 */
const de_ErrorWithMembersRes = async (parsedOutput: any, context: __SerdeContext): Promise<ErrorWithMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ErrorWithMembers(body, context);
  const exception = new ErrorWithMembers({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ErrorWithoutMembersRes
 */
const de_ErrorWithoutMembersRes = async (parsedOutput: any, context: __SerdeContext): Promise<ErrorWithoutMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ErrorWithoutMembers({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FooErrorRes
 */
const de_FooErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<FooError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FooError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGreetingRes
 */
const de_InvalidGreetingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_EmptyStruct omitted.

// se_HostLabelInput omitted.

// se_JsonEnumsInputOutput omitted.

/**
 * serializeAws_json1_1KitchenSink
 */
const se_KitchenSink = (input: KitchenSink, context: __SerdeContext): any => {
  return take(input, {
    Blob: context.base64Encoder,
    Boolean: [],
    Double: __serializeFloat,
    EmptyStruct: _json,
    Float: __serializeFloat,
    HttpdateTimestamp: __dateToUtcString,
    Integer: [],
    Iso8601Timestamp: (_) => _.toISOString().split(".")[0] + "Z",
    JsonValue: __LazyJsonString.fromObject,
    ListOfLists: _json,
    ListOfMapsOfStrings: _json,
    ListOfStrings: _json,
    ListOfStructs: _json,
    Long: [],
    MapOfListsOfStrings: _json,
    MapOfMaps: _json,
    MapOfStrings: _json,
    MapOfStructs: _json,
    RecursiveList: (_) => se_ListOfKitchenSinks(_, context),
    RecursiveMap: (_) => se_MapOfKitchenSinks(_, context),
    RecursiveStruct: (_) => se_KitchenSink(_, context),
    SimpleStruct: _json,
    String: [],
    StructWithJsonName: (_) => se_StructWithJsonName(_, context),
    Timestamp: (_) => Math.round(_.getTime() / 1000),
    UnixTimestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1ListOfKitchenSinks
 */
const se_ListOfKitchenSinks = (input: KitchenSink[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KitchenSink(entry, context);
    });
};

// se_ListOfListOfStrings omitted.

// se_ListOfMapsOfStrings omitted.

// se_ListOfStrings omitted.

// se_ListOfStructs omitted.

/**
 * serializeAws_json1_1MapOfKitchenSinks
 */
const se_MapOfKitchenSinks = (input: Record<string, KitchenSink>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_KitchenSink(value, context);
    return acc;
  }, {});
};

// se_MapOfListsOfStrings omitted.

// se_MapOfMapOfStrings omitted.

// se_MapOfStrings omitted.

// se_MapOfStructs omitted.

/**
 * serializeAws_json1_1MyUnion
 */
const se_MyUnion = (input: MyUnion, context: __SerdeContext): any => {
  return MyUnion.visit(input, {
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    enumValue: (value) => ({ enumValue: value }),
    listValue: (value) => ({ listValue: _json(value) }),
    mapValue: (value) => ({ mapValue: _json(value) }),
    numberValue: (value) => ({ numberValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: _json(value) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_1NullOperationInputOutput
 */
const se_NullOperationInputOutput = (input: NullOperationInputOutput, context: __SerdeContext): any => {
  return take(input, {
    sparseStringList: (_) => se_SparseStringList(_, context),
    sparseStringMap: (_) => se_SparseStringMap(_, context),
    string: [],
  });
};

// se_OperationWithOptionalInputOutputInput omitted.

/**
 * serializeAws_json1_1PutAndGetInlineDocumentsInputOutput
 */
const se_PutAndGetInlineDocumentsInputOutput = (
  input: PutAndGetInlineDocumentsInputOutput,
  context: __SerdeContext
): any => {
  return take(input, {
    inlineDocument: (_) => se_Document(_, context),
  });
};

// se_PutWithContentEncodingInput omitted.

/**
 * serializeAws_json1_1SimpleScalarPropertiesInputOutput
 */
const se_SimpleScalarPropertiesInputOutput = (
  input: SimpleScalarPropertiesInputOutput,
  context: __SerdeContext
): any => {
  return take(input, {
    doubleValue: __serializeFloat,
    floatValue: __serializeFloat,
  });
};

// se_SimpleStruct omitted.

/**
 * serializeAws_json1_1StructWithJsonName
 */
const se_StructWithJsonName = (input: StructWithJsonName, context: __SerdeContext): any => {
  return take(input, {
    Value: [, , `Value`],
  });
};

/**
 * serializeAws_json1_1UnionInputOutput
 */
const se_UnionInputOutput = (input: UnionInputOutput, context: __SerdeContext): any => {
  return take(input, {
    contents: (_) => se_MyUnion(_, context),
  });
};

// se_FooEnumList omitted.

// se_FooEnumMap omitted.

// se_FooEnumSet omitted.

// se_GreetingStruct omitted.

/**
 * serializeAws_json1_1SparseStringList
 */
const se_SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_json1_1SparseStringMap
 */
const se_SparseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

// se_StringList omitted.

// se_StringMap omitted.

/**
 * deserializeAws_json1_1ComplexError
 */
const de_ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  return take(output, {
    Nested: (_: any) => de_ComplexNestedErrorData(_, context),
    TopLevel: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  return take(output, {
    Foo: [, __expectString, `Foo`],
  }) as any;
};

/**
 * deserializeAws_json1_1DatetimeOffsetsOutput
 */
const de_DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  return take(output, {
    datetime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_json1_1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_EmptyStruct omitted.

/**
 * deserializeAws_json1_1ErrorWithMembers
 */
const de_ErrorWithMembers = (output: any, context: __SerdeContext): ErrorWithMembers => {
  return take(output, {
    Code: __expectString,
    ComplexData: (_: any) => de_KitchenSink(_, context),
    IntegerField: __expectInt32,
    ListField: _json,
    MapField: _json,
    Message: __expectString,
    StringField: __expectString,
  }) as any;
};

// de_ErrorWithoutMembers omitted.

// de_FooError omitted.

/**
 * deserializeAws_json1_1FractionalSecondsOutput
 */
const de_FractionalSecondsOutput = (output: any, context: __SerdeContext): FractionalSecondsOutput => {
  return take(output, {
    datetime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_GreetingWithErrorsOutput omitted.

// de_InvalidGreeting omitted.

// de_JsonEnumsInputOutput omitted.

/**
 * deserializeAws_json1_1KitchenSink
 */
const de_KitchenSink = (output: any, context: __SerdeContext): KitchenSink => {
  return take(output, {
    Blob: context.base64Decoder,
    Boolean: __expectBoolean,
    Double: __limitedParseDouble,
    EmptyStruct: _json,
    Float: __limitedParseFloat32,
    HttpdateTimestamp: (_: any) => __expectNonNull(__parseRfc7231DateTime(_)),
    Integer: __expectInt32,
    Iso8601Timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    JsonValue: (_: any) => new __LazyJsonString(_),
    ListOfLists: _json,
    ListOfMapsOfStrings: _json,
    ListOfStrings: _json,
    ListOfStructs: _json,
    Long: __expectLong,
    MapOfListsOfStrings: _json,
    MapOfMaps: _json,
    MapOfStrings: _json,
    MapOfStructs: _json,
    RecursiveList: (_: any) => de_ListOfKitchenSinks(_, context),
    RecursiveMap: (_: any) => de_MapOfKitchenSinks(_, context),
    RecursiveStruct: (_: any) => de_KitchenSink(_, context),
    SimpleStruct: _json,
    String: __expectString,
    StructWithJsonName: (_: any) => de_StructWithJsonName(_, context),
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UnixTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ListOfKitchenSinks
 */
const de_ListOfKitchenSinks = (output: any, context: __SerdeContext): KitchenSink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KitchenSink(entry, context);
    });
  return retVal;
};

// de_ListOfListOfStrings omitted.

// de_ListOfMapsOfStrings omitted.

// de_ListOfStrings omitted.

// de_ListOfStructs omitted.

/**
 * deserializeAws_json1_1MapOfKitchenSinks
 */
const de_MapOfKitchenSinks = (output: any, context: __SerdeContext): Record<string, KitchenSink> => {
  return Object.entries(output).reduce((acc: Record<string, KitchenSink>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_KitchenSink(value, context);
    return acc;
  }, {} as Record<string, KitchenSink>);
};

// de_MapOfListsOfStrings omitted.

// de_MapOfMapOfStrings omitted.

// de_MapOfStrings omitted.

// de_MapOfStructs omitted.

/**
 * deserializeAws_json1_1MyUnion
 */
const de_MyUnion = (output: any, context: __SerdeContext): MyUnion => {
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
      listValue: _json(output.listValue),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: _json(output.mapValue),
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
      structureValue: _json(output.structureValue),
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue))),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1NullOperationInputOutput
 */
const de_NullOperationInputOutput = (output: any, context: __SerdeContext): NullOperationInputOutput => {
  return take(output, {
    sparseStringList: (_: any) => de_SparseStringList(_, context),
    sparseStringMap: (_: any) => de_SparseStringMap(_, context),
    string: __expectString,
  }) as any;
};

// de_OperationWithOptionalInputOutputOutput omitted.

/**
 * deserializeAws_json1_1PutAndGetInlineDocumentsInputOutput
 */
const de_PutAndGetInlineDocumentsInputOutput = (
  output: any,
  context: __SerdeContext
): PutAndGetInlineDocumentsInputOutput => {
  return take(output, {
    inlineDocument: (_: any) => de_Document(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SimpleScalarPropertiesInputOutput
 */
const de_SimpleScalarPropertiesInputOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarPropertiesInputOutput => {
  return take(output, {
    doubleValue: __limitedParseDouble,
    floatValue: __limitedParseFloat32,
  }) as any;
};

// de_SimpleStruct omitted.

/**
 * deserializeAws_json1_1StructWithJsonName
 */
const de_StructWithJsonName = (output: any, context: __SerdeContext): StructWithJsonName => {
  return take(output, {
    Value: [, __expectString, `Value`],
  }) as any;
};

/**
 * deserializeAws_json1_1UnionInputOutput
 */
const de_UnionInputOutput = (output: any, context: __SerdeContext): UnionInputOutput => {
  return take(output, {
    contents: (_: any) => de_MyUnion(__expectUnion(_), context),
  }) as any;
};

// de_FooEnumList omitted.

// de_FooEnumMap omitted.

// de_FooEnumSet omitted.

// de_GreetingStruct omitted.

/**
 * deserializeAws_json1_1SparseStringList
 */
const de_SparseStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

/**
 * deserializeAws_json1_1SparseStringMap
 */
const de_SparseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

// de_StringList omitted.

// de_StringMap omitted.

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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `JsonProtocol.${operation}`,
  };
}

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
