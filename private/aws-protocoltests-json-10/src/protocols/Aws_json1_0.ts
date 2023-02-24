// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
import { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "../commands/JsonUnionsCommand";
import { NoInputAndNoOutputCommandInput, NoInputAndNoOutputCommandOutput } from "../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput } from "../commands/NoInputAndOutputCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "../commands/SimpleScalarPropertiesCommand";
import { JSONRPC10ServiceException as __BaseException } from "../models/JSONRPC10ServiceException";
import {
  ComplexError,
  ComplexNestedErrorData,
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputOutput,
  EndpointWithHostLabelOperationInput,
  FooError,
  GreetingStruct,
  GreetingWithErrorsInput,
  GreetingWithErrorsOutput,
  InvalidGreeting,
  JsonUnionsInput,
  JsonUnionsOutput,
  MyUnion,
  NoInputAndOutputOutput,
  SimpleScalarPropertiesInput,
  SimpleScalarPropertiesOutput,
} from "../models/models_0";

export const serializeAws_json1_0EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.EmptyInputAndEmptyOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0EmptyInputAndEmptyOutputInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.EndpointOperation",
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

export const serializeAws_json1_0EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.EndpointWithHostLabelOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0EndpointWithHostLabelOperationInput(input, context));
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

export const serializeAws_json1_0GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.GreetingWithErrors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GreetingWithErrorsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.HostWithPathOperation",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0JsonUnionsCommand = async (
  input: JsonUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.JsonUnions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0JsonUnionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.NoInputAndNoOutput",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.NoInputAndOutput",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "JsonRpc10.SimpleScalarProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SimpleScalarPropertiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0EmptyInputAndEmptyOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0EmptyInputAndEmptyOutputOutput(data, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
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

export const deserializeAws_json1_0EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0EndpointOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0EndpointOperationCommandError = async (
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

export const deserializeAws_json1_0EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0EndpointWithHostLabelOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0EndpointWithHostLabelOperationCommandError = async (
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

export const deserializeAws_json1_0GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GreetingWithErrorsCommandError = async (
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
    case "aws.protocoltests.json10#ComplexError":
      throw await deserializeAws_json1_0ComplexErrorResponse(parsedOutput, context);
    case "FooError":
    case "aws.protocoltests.json10#FooError":
      throw await deserializeAws_json1_0FooErrorResponse(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.json10#InvalidGreeting":
      throw await deserializeAws_json1_0InvalidGreetingResponse(parsedOutput, context);
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

export const deserializeAws_json1_0HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0HostWithPathOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0HostWithPathOperationCommandError = async (
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

export const deserializeAws_json1_0JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0JsonUnionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0JsonUnionsOutput(data, context);
  const response: JsonUnionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0JsonUnionsCommandError = async (
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

export const deserializeAws_json1_0NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0NoInputAndNoOutputCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0NoInputAndNoOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
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

export const deserializeAws_json1_0NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0NoInputAndOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0NoInputAndOutputOutput(data, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
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

export const deserializeAws_json1_0SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SimpleScalarPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SimpleScalarPropertiesOutput(data, context);
  const response: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SimpleScalarPropertiesCommandError = async (
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

const deserializeAws_json1_0ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ComplexError(body, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0FooErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0FooError(body, context);
  const exception = new FooError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidGreeting(body, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0EmptyInputAndEmptyOutputInput = (
  input: EmptyInputAndEmptyOutputInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0EndpointWithHostLabelOperationInput = (
  input: EndpointWithHostLabelOperationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.label != null && { label: input.label }),
  };
};

const serializeAws_json1_0GreetingWithErrorsInput = (input: GreetingWithErrorsInput, context: __SerdeContext): any => {
  return {
    ...(input.greeting != null && { greeting: input.greeting }),
  };
};

const serializeAws_json1_0JsonUnionsInput = (input: JsonUnionsInput, context: __SerdeContext): any => {
  return {
    ...(input.contents != null && { contents: serializeAws_json1_0MyUnion(input.contents, context) }),
  };
};

const serializeAws_json1_0MyUnion = (input: MyUnion, context: __SerdeContext): any => {
  return MyUnion.visit(input, {
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    enumValue: (value) => ({ enumValue: value }),
    intEnumValue: (value) => ({ intEnumValue: value }),
    listValue: (value) => ({ listValue: serializeAws_json1_0StringList(value, context) }),
    mapValue: (value) => ({ mapValue: serializeAws_json1_0StringMap(value, context) }),
    numberValue: (value) => ({ numberValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    structureValue: (value) => ({ structureValue: serializeAws_json1_0GreetingStruct(value, context) }),
    timestampValue: (value) => ({ timestampValue: Math.round(value.getTime() / 1000) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0SimpleScalarPropertiesInput = (
  input: SimpleScalarPropertiesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.floatValue != null && { floatValue: __serializeFloat(input.floatValue) }),
  };
};

const serializeAws_json1_0GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return {
    ...(input.hi != null && { hi: input.hi }),
  };
};

const serializeAws_json1_0StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_json1_0ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  return {
    Nested: output.Nested != null ? deserializeAws_json1_0ComplexNestedErrorData(output.Nested, context) : undefined,
    TopLevel: __expectString(output.TopLevel),
  } as any;
};

const deserializeAws_json1_0ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  return {
    Foo: __expectString(output.Foo),
  } as any;
};

const deserializeAws_json1_0EmptyInputAndEmptyOutputOutput = (
  output: any,
  context: __SerdeContext
): EmptyInputAndEmptyOutputOutput => {
  return {} as any;
};

const deserializeAws_json1_0FooError = (output: any, context: __SerdeContext): FooError => {
  return {} as any;
};

const deserializeAws_json1_0GreetingWithErrorsOutput = (
  output: any,
  context: __SerdeContext
): GreetingWithErrorsOutput => {
  return {
    greeting: __expectString(output.greeting),
  } as any;
};

const deserializeAws_json1_0InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0JsonUnionsOutput = (output: any, context: __SerdeContext): JsonUnionsOutput => {
  return {
    contents:
      output.contents != null ? deserializeAws_json1_0MyUnion(__expectUnion(output.contents), context) : undefined,
  } as any;
};

const deserializeAws_json1_0MyUnion = (output: any, context: __SerdeContext): MyUnion => {
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
  if (__expectInt32(output.intEnumValue) !== undefined) {
    return { intEnumValue: __expectInt32(output.intEnumValue) as any };
  }
  if (output.listValue != null) {
    return {
      listValue: deserializeAws_json1_0StringList(output.listValue, context),
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: deserializeAws_json1_0StringMap(output.mapValue, context),
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
      structureValue: deserializeAws_json1_0GreetingStruct(output.structureValue, context),
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue))),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0NoInputAndOutputOutput = (output: any, context: __SerdeContext): NoInputAndOutputOutput => {
  return {} as any;
};

const deserializeAws_json1_0SimpleScalarPropertiesOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarPropertiesOutput => {
  return {
    doubleValue: __limitedParseDouble(output.doubleValue),
    floatValue: __limitedParseFloat32(output.floatValue),
  } as any;
};

const deserializeAws_json1_0GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return {
    hi: __expectString(output.hi),
  } as any;
};

const deserializeAws_json1_0StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
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
