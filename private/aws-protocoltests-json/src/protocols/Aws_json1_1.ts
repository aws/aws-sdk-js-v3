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
  body = JSON.stringify(se_HostLabelInput(input, context));
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
  body = JSON.stringify(se_JsonEnumsInputOutput(input, context));
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
  body = JSON.stringify(se_OperationWithOptionalInputOutputInput(input, context));
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_JsonEnumsInputOutput(data, context);
  const response: JsonEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents = de_OperationWithOptionalInputOutputOutput(data, context);
  const response: OperationWithOptionalInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  const deserialized: any = de_ErrorWithoutMembers(body, context);
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
  const deserialized: any = de_FooError(body, context);
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
  const deserialized: any = de_InvalidGreeting(body, context);
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

/**
 * serializeAws_json1_1EmptyStruct
 */
const se_EmptyStruct = (input: EmptyStruct, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1HostLabelInput
 */
const se_HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  return {
    ...(input.label != null && { label: input.label }),
  };
};

/**
 * serializeAws_json1_1JsonEnumsInputOutput
 */
const se_JsonEnumsInputOutput = (input: JsonEnumsInputOutput, context: __SerdeContext): any => {
  return {
    ...(input.fooEnum1 != null && { fooEnum1: input.fooEnum1 }),
    ...(input.fooEnum2 != null && { fooEnum2: input.fooEnum2 }),
    ...(input.fooEnum3 != null && { fooEnum3: input.fooEnum3 }),
    ...(input.fooEnumList != null && { fooEnumList: se_FooEnumList(input.fooEnumList, context) }),
    ...(input.fooEnumMap != null && { fooEnumMap: se_FooEnumMap(input.fooEnumMap, context) }),
    ...(input.fooEnumSet != null && { fooEnumSet: se_FooEnumSet(input.fooEnumSet, context) }),
  };
};

/**
 * serializeAws_json1_1KitchenSink
 */
const se_KitchenSink = (input: KitchenSink, context: __SerdeContext): any => {
  return {
    ...(input.Blob != null && { Blob: context.base64Encoder(input.Blob) }),
    ...(input.Boolean != null && { Boolean: input.Boolean }),
    ...(input.Double != null && { Double: __serializeFloat(input.Double) }),
    ...(input.EmptyStruct != null && { EmptyStruct: se_EmptyStruct(input.EmptyStruct, context) }),
    ...(input.Float != null && { Float: __serializeFloat(input.Float) }),
    ...(input.HttpdateTimestamp != null && { HttpdateTimestamp: __dateToUtcString(input.HttpdateTimestamp) }),
    ...(input.Integer != null && { Integer: input.Integer }),
    ...(input.Iso8601Timestamp != null && {
      Iso8601Timestamp: input.Iso8601Timestamp.toISOString().split(".")[0] + "Z",
    }),
    ...(input.JsonValue != null && { JsonValue: __LazyJsonString.fromObject(input.JsonValue) }),
    ...(input.ListOfLists != null && { ListOfLists: se_ListOfListOfStrings(input.ListOfLists, context) }),
    ...(input.ListOfMapsOfStrings != null && {
      ListOfMapsOfStrings: se_ListOfMapsOfStrings(input.ListOfMapsOfStrings, context),
    }),
    ...(input.ListOfStrings != null && { ListOfStrings: se_ListOfStrings(input.ListOfStrings, context) }),
    ...(input.ListOfStructs != null && { ListOfStructs: se_ListOfStructs(input.ListOfStructs, context) }),
    ...(input.Long != null && { Long: input.Long }),
    ...(input.MapOfListsOfStrings != null && {
      MapOfListsOfStrings: se_MapOfListsOfStrings(input.MapOfListsOfStrings, context),
    }),
    ...(input.MapOfMaps != null && { MapOfMaps: se_MapOfMapOfStrings(input.MapOfMaps, context) }),
    ...(input.MapOfStrings != null && { MapOfStrings: se_MapOfStrings(input.MapOfStrings, context) }),
    ...(input.MapOfStructs != null && { MapOfStructs: se_MapOfStructs(input.MapOfStructs, context) }),
    ...(input.RecursiveList != null && { RecursiveList: se_ListOfKitchenSinks(input.RecursiveList, context) }),
    ...(input.RecursiveMap != null && { RecursiveMap: se_MapOfKitchenSinks(input.RecursiveMap, context) }),
    ...(input.RecursiveStruct != null && { RecursiveStruct: se_KitchenSink(input.RecursiveStruct, context) }),
    ...(input.SimpleStruct != null && { SimpleStruct: se_SimpleStruct(input.SimpleStruct, context) }),
    ...(input.String != null && { String: input.String }),
    ...(input.StructWithJsonName != null && {
      StructWithJsonName: se_StructWithJsonName(input.StructWithJsonName, context),
    }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.UnixTimestamp != null && { UnixTimestamp: Math.round(input.UnixTimestamp.getTime() / 1000) }),
  };
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

/**
 * serializeAws_json1_1ListOfListOfStrings
 */
const se_ListOfListOfStrings = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListOfStrings(entry, context);
    });
};

/**
 * serializeAws_json1_1ListOfMapsOfStrings
 */
const se_ListOfMapsOfStrings = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MapOfStrings(entry, context);
    });
};

/**
 * serializeAws_json1_1ListOfStrings
 */
const se_ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListOfStructs
 */
const se_ListOfStructs = (input: SimpleStruct[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SimpleStruct(entry, context);
    });
};

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

/**
 * serializeAws_json1_1MapOfListsOfStrings
 */
const se_MapOfListsOfStrings = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ListOfStrings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MapOfMapOfStrings
 */
const se_MapOfMapOfStrings = (input: Record<string, Record<string, string>>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_MapOfStrings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MapOfStrings
 */
const se_MapOfStrings = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MapOfStructs
 */
const se_MapOfStructs = (input: Record<string, SimpleStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SimpleStruct(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MyUnion
 */
const se_MyUnion = (input: MyUnion, context: __SerdeContext): any => {
  return MyUnion.visit(input, {
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    enumValue: (value) => ({ enumValue: value }),
    listValue: (value) => ({ listValue: se_StringList(value, context) }),
    mapValue: (value) => ({ mapValue: se_StringMap(value, context) }),
    numberValue: (value) => ({ numberValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: se_GreetingStruct(value, context) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_1NullOperationInputOutput
 */
const se_NullOperationInputOutput = (input: NullOperationInputOutput, context: __SerdeContext): any => {
  return {
    ...(input.sparseStringList != null && { sparseStringList: se_SparseStringList(input.sparseStringList, context) }),
    ...(input.sparseStringMap != null && { sparseStringMap: se_SparseStringMap(input.sparseStringMap, context) }),
    ...(input.string != null && { string: input.string }),
  };
};

/**
 * serializeAws_json1_1OperationWithOptionalInputOutputInput
 */
const se_OperationWithOptionalInputOutputInput = (
  input: OperationWithOptionalInputOutputInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1PutAndGetInlineDocumentsInputOutput
 */
const se_PutAndGetInlineDocumentsInputOutput = (
  input: PutAndGetInlineDocumentsInputOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.inlineDocument != null && { inlineDocument: se_Document(input.inlineDocument, context) }),
  };
};

/**
 * serializeAws_json1_1SimpleScalarPropertiesInputOutput
 */
const se_SimpleScalarPropertiesInputOutput = (
  input: SimpleScalarPropertiesInputOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.floatValue != null && { floatValue: __serializeFloat(input.floatValue) }),
  };
};

/**
 * serializeAws_json1_1SimpleStruct
 */
const se_SimpleStruct = (input: SimpleStruct, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1StructWithJsonName
 */
const se_StructWithJsonName = (input: StructWithJsonName, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1UnionInputOutput
 */
const se_UnionInputOutput = (input: UnionInputOutput, context: __SerdeContext): any => {
  return {
    ...(input.contents != null && { contents: se_MyUnion(input.contents, context) }),
  };
};

/**
 * serializeAws_json1_1FooEnumList
 */
const se_FooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FooEnumMap
 */
const se_FooEnumMap = (input: Record<string, FooEnum | string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1FooEnumSet
 */
const se_FooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return {
    ...(input.hi != null && { hi: input.hi }),
  };
};

/**
 * serializeAws_json1_1SparseStringList
 */
const se_SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    if (entry === null) {
      return null as any;
    }
    return entry;
  });
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

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ComplexError
 */
const de_ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  return {
    Nested: output.Nested != null ? de_ComplexNestedErrorData(output.Nested, context) : undefined,
    TopLevel: __expectString(output.TopLevel),
  } as any;
};

/**
 * deserializeAws_json1_1ComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  return {
    Foo: __expectString(output.Foo),
  } as any;
};

/**
 * deserializeAws_json1_1DatetimeOffsetsOutput
 */
const de_DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  return {
    datetime: output.datetime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.datetime)) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_json1_1EmptyStruct
 */
const de_EmptyStruct = (output: any, context: __SerdeContext): EmptyStruct => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ErrorWithMembers
 */
const de_ErrorWithMembers = (output: any, context: __SerdeContext): ErrorWithMembers => {
  return {
    Code: __expectString(output.Code),
    ComplexData: output.ComplexData != null ? de_KitchenSink(output.ComplexData, context) : undefined,
    IntegerField: __expectInt32(output.IntegerField),
    ListField: output.ListField != null ? de_ListOfStrings(output.ListField, context) : undefined,
    MapField: output.MapField != null ? de_MapOfStrings(output.MapField, context) : undefined,
    Message: __expectString(output.Message),
    StringField: __expectString(output.StringField),
  } as any;
};

/**
 * deserializeAws_json1_1ErrorWithoutMembers
 */
const de_ErrorWithoutMembers = (output: any, context: __SerdeContext): ErrorWithoutMembers => {
  return {} as any;
};

/**
 * deserializeAws_json1_1FooError
 */
const de_FooError = (output: any, context: __SerdeContext): FooError => {
  return {} as any;
};

/**
 * deserializeAws_json1_1FractionalSecondsOutput
 */
const de_FractionalSecondsOutput = (output: any, context: __SerdeContext): FractionalSecondsOutput => {
  return {
    datetime: output.datetime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.datetime)) : undefined,
    httpdate: output.httpdate != null ? __expectNonNull(__parseRfc7231DateTime(output.httpdate)) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GreetingWithErrorsOutput
 */
const de_GreetingWithErrorsOutput = (output: any, context: __SerdeContext): GreetingWithErrorsOutput => {
  return {
    greeting: __expectString(output.greeting),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGreeting
 */
const de_InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1JsonEnumsInputOutput
 */
const de_JsonEnumsInputOutput = (output: any, context: __SerdeContext): JsonEnumsInputOutput => {
  return {
    fooEnum1: __expectString(output.fooEnum1),
    fooEnum2: __expectString(output.fooEnum2),
    fooEnum3: __expectString(output.fooEnum3),
    fooEnumList: output.fooEnumList != null ? de_FooEnumList(output.fooEnumList, context) : undefined,
    fooEnumMap: output.fooEnumMap != null ? de_FooEnumMap(output.fooEnumMap, context) : undefined,
    fooEnumSet: output.fooEnumSet != null ? de_FooEnumSet(output.fooEnumSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1KitchenSink
 */
const de_KitchenSink = (output: any, context: __SerdeContext): KitchenSink => {
  return {
    Blob: output.Blob != null ? context.base64Decoder(output.Blob) : undefined,
    Boolean: __expectBoolean(output.Boolean),
    Double: __limitedParseDouble(output.Double),
    EmptyStruct: output.EmptyStruct != null ? de_EmptyStruct(output.EmptyStruct, context) : undefined,
    Float: __limitedParseFloat32(output.Float),
    HttpdateTimestamp:
      output.HttpdateTimestamp != null ? __expectNonNull(__parseRfc7231DateTime(output.HttpdateTimestamp)) : undefined,
    Integer: __expectInt32(output.Integer),
    Iso8601Timestamp:
      output.Iso8601Timestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Iso8601Timestamp))
        : undefined,
    JsonValue: output.JsonValue != null ? new __LazyJsonString(output.JsonValue) : undefined,
    ListOfLists: output.ListOfLists != null ? de_ListOfListOfStrings(output.ListOfLists, context) : undefined,
    ListOfMapsOfStrings:
      output.ListOfMapsOfStrings != null ? de_ListOfMapsOfStrings(output.ListOfMapsOfStrings, context) : undefined,
    ListOfStrings: output.ListOfStrings != null ? de_ListOfStrings(output.ListOfStrings, context) : undefined,
    ListOfStructs: output.ListOfStructs != null ? de_ListOfStructs(output.ListOfStructs, context) : undefined,
    Long: __expectLong(output.Long),
    MapOfListsOfStrings:
      output.MapOfListsOfStrings != null ? de_MapOfListsOfStrings(output.MapOfListsOfStrings, context) : undefined,
    MapOfMaps: output.MapOfMaps != null ? de_MapOfMapOfStrings(output.MapOfMaps, context) : undefined,
    MapOfStrings: output.MapOfStrings != null ? de_MapOfStrings(output.MapOfStrings, context) : undefined,
    MapOfStructs: output.MapOfStructs != null ? de_MapOfStructs(output.MapOfStructs, context) : undefined,
    RecursiveList: output.RecursiveList != null ? de_ListOfKitchenSinks(output.RecursiveList, context) : undefined,
    RecursiveMap: output.RecursiveMap != null ? de_MapOfKitchenSinks(output.RecursiveMap, context) : undefined,
    RecursiveStruct: output.RecursiveStruct != null ? de_KitchenSink(output.RecursiveStruct, context) : undefined,
    SimpleStruct: output.SimpleStruct != null ? de_SimpleStruct(output.SimpleStruct, context) : undefined,
    String: __expectString(output.String),
    StructWithJsonName:
      output.StructWithJsonName != null ? de_StructWithJsonName(output.StructWithJsonName, context) : undefined,
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    UnixTimestamp:
      output.UnixTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UnixTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOfKitchenSinks
 */
const de_ListOfKitchenSinks = (output: any, context: __SerdeContext): KitchenSink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KitchenSink(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfListOfStrings
 */
const de_ListOfListOfStrings = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListOfStrings(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfMapsOfStrings
 */
const de_ListOfMapsOfStrings = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MapOfStrings(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfStrings
 */
const de_ListOfStrings = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfStructs
 */
const de_ListOfStructs = (output: any, context: __SerdeContext): SimpleStruct[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimpleStruct(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MapOfKitchenSinks
 */
const de_MapOfKitchenSinks = (output: any, context: __SerdeContext): Record<string, KitchenSink> => {
  return Object.entries(output).reduce((acc: Record<string, KitchenSink>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_KitchenSink(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MapOfListsOfStrings
 */
const de_MapOfListsOfStrings = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ListOfStrings(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MapOfMapOfStrings
 */
const de_MapOfMapOfStrings = (output: any, context: __SerdeContext): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MapOfStrings(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MapOfStrings
 */
const de_MapOfStrings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MapOfStructs
 */
const de_MapOfStructs = (output: any, context: __SerdeContext): Record<string, SimpleStruct> => {
  return Object.entries(output).reduce((acc: Record<string, SimpleStruct>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SimpleStruct(value, context);
    return acc;
  }, {});
};

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
      listValue: de_StringList(output.listValue, context),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: de_StringMap(output.mapValue, context),
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
      structureValue: de_GreetingStruct(output.structureValue, context),
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
  return {
    sparseStringList:
      output.sparseStringList != null ? de_SparseStringList(output.sparseStringList, context) : undefined,
    sparseStringMap: output.sparseStringMap != null ? de_SparseStringMap(output.sparseStringMap, context) : undefined,
    string: __expectString(output.string),
  } as any;
};

/**
 * deserializeAws_json1_1OperationWithOptionalInputOutputOutput
 */
const de_OperationWithOptionalInputOutputOutput = (
  output: any,
  context: __SerdeContext
): OperationWithOptionalInputOutputOutput => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1PutAndGetInlineDocumentsInputOutput
 */
const de_PutAndGetInlineDocumentsInputOutput = (
  output: any,
  context: __SerdeContext
): PutAndGetInlineDocumentsInputOutput => {
  return {
    inlineDocument: output.inlineDocument != null ? de_Document(output.inlineDocument, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SimpleScalarPropertiesInputOutput
 */
const de_SimpleScalarPropertiesInputOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarPropertiesInputOutput => {
  return {
    doubleValue: __limitedParseDouble(output.doubleValue),
    floatValue: __limitedParseFloat32(output.floatValue),
  } as any;
};

/**
 * deserializeAws_json1_1SimpleStruct
 */
const de_SimpleStruct = (output: any, context: __SerdeContext): SimpleStruct => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1StructWithJsonName
 */
const de_StructWithJsonName = (output: any, context: __SerdeContext): StructWithJsonName => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1UnionInputOutput
 */
const de_UnionInputOutput = (output: any, context: __SerdeContext): UnionInputOutput => {
  return {
    contents: output.contents != null ? de_MyUnion(__expectUnion(output.contents), context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FooEnumList
 */
const de_FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FooEnumMap
 */
const de_FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum | string> => {
  return Object.entries(output).reduce((acc: Record<string, FooEnum | string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GreetingStruct
 */
const de_GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return {
    hi: __expectString(output.hi),
  } as any;
};

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
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
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
