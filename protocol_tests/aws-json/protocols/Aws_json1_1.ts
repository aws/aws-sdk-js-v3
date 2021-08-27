import { EmptyOperationCommandInput, EmptyOperationCommandOutput } from "../commands/EmptyOperationCommand";
import { EndpointOperationCommandInput, EndpointOperationCommandOutput } from "../commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "../commands/EndpointWithHostLabelOperationCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "../commands/GreetingWithErrorsCommand";
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
import {
  ComplexError,
  ComplexNestedErrorData,
  EmptyStruct,
  ErrorWithMembers,
  ErrorWithoutMembers,
  FooEnum,
  FooError,
  GreetingStruct,
  GreetingWithErrorsOutput,
  HostLabelInput,
  InvalidGreeting,
  JsonEnumsInputOutput,
  KitchenSink,
  MyUnion,
  NullOperationInputOutput,
  PutAndGetInlineDocumentsInputOutput,
  SimpleScalarPropertiesInputOutput,
  SimpleStruct,
  StructWithLocationName,
  UnionInputOutput,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  dateToUtcString as __dateToUtcString,
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
  body = JSON.stringify(serializeAws_json1_1SimpleStruct(input, context));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.json#ComplexError":
      response = {
        ...(await deserializeAws_json1_1ComplexErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FooError":
    case "aws.protocoltests.json#FooError":
      response = {
        ...(await deserializeAws_json1_1FooErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGreeting":
    case "aws.protocoltests.json#InvalidGreeting":
      response = {
        ...(await deserializeAws_json1_1InvalidGreetingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ErrorWithMembers":
    case "aws.protocoltests.json#ErrorWithMembers":
      response = {
        ...(await deserializeAws_json1_1ErrorWithMembersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ErrorWithoutMembers":
    case "aws.protocoltests.json#ErrorWithoutMembers":
      response = {
        ...(await deserializeAws_json1_1ErrorWithoutMembersResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
  contents = deserializeAws_json1_1SimpleStruct(data, context);
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ComplexError(body, context);
  const contents: ComplexError = {
    name: "ComplexError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ErrorWithMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ErrorWithMembers(body, context);
  const contents: ErrorWithMembers = {
    name: "ErrorWithMembers",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ErrorWithoutMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithoutMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ErrorWithoutMembers(body, context);
  const contents: ErrorWithoutMembers = {
    name: "ErrorWithoutMembers",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FooErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FooError(body, context);
  const contents: FooError = {
    name: "FooError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGreeting(body, context);
  const contents: InvalidGreeting = {
    name: "InvalidGreeting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

const serializeAws_json1_1EmptyStruct = (input: EmptyStruct, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  return {
    ...(input.label !== undefined && input.label !== null && { label: input.label }),
  };
};

const serializeAws_json1_1JsonEnumsInputOutput = (input: JsonEnumsInputOutput, context: __SerdeContext): any => {
  return {
    ...(input.fooEnum1 !== undefined && input.fooEnum1 !== null && { fooEnum1: input.fooEnum1 }),
    ...(input.fooEnum2 !== undefined && input.fooEnum2 !== null && { fooEnum2: input.fooEnum2 }),
    ...(input.fooEnum3 !== undefined && input.fooEnum3 !== null && { fooEnum3: input.fooEnum3 }),
    ...(input.fooEnumList !== undefined &&
      input.fooEnumList !== null && { fooEnumList: serializeAws_json1_1FooEnumList(input.fooEnumList, context) }),
    ...(input.fooEnumMap !== undefined &&
      input.fooEnumMap !== null && { fooEnumMap: serializeAws_json1_1FooEnumMap(input.fooEnumMap, context) }),
    ...(input.fooEnumSet !== undefined &&
      input.fooEnumSet !== null && { fooEnumSet: serializeAws_json1_1FooEnumSet(input.fooEnumSet, context) }),
  };
};

const serializeAws_json1_1KitchenSink = (input: KitchenSink, context: __SerdeContext): any => {
  return {
    ...(input.Blob !== undefined && input.Blob !== null && { Blob: context.base64Encoder(input.Blob) }),
    ...(input.Boolean !== undefined && input.Boolean !== null && { Boolean: input.Boolean }),
    ...(input.Double !== undefined && input.Double !== null && { Double: __serializeFloat(input.Double) }),
    ...(input.EmptyStruct !== undefined &&
      input.EmptyStruct !== null && { EmptyStruct: serializeAws_json1_1EmptyStruct(input.EmptyStruct, context) }),
    ...(input.Float !== undefined && input.Float !== null && { Float: __serializeFloat(input.Float) }),
    ...(input.HttpdateTimestamp !== undefined &&
      input.HttpdateTimestamp !== null && { HttpdateTimestamp: __dateToUtcString(input.HttpdateTimestamp) }),
    ...(input.Integer !== undefined && input.Integer !== null && { Integer: input.Integer }),
    ...(input.Iso8601Timestamp !== undefined &&
      input.Iso8601Timestamp !== null && {
        Iso8601Timestamp: input.Iso8601Timestamp.toISOString().split(".")[0] + "Z",
      }),
    ...(input.JsonValue !== undefined &&
      input.JsonValue !== null && { JsonValue: __LazyJsonString.fromObject(input.JsonValue) }),
    ...(input.ListOfLists !== undefined &&
      input.ListOfLists !== null && {
        ListOfLists: serializeAws_json1_1ListOfListOfStrings(input.ListOfLists, context),
      }),
    ...(input.ListOfMapsOfStrings !== undefined &&
      input.ListOfMapsOfStrings !== null && {
        ListOfMapsOfStrings: serializeAws_json1_1ListOfMapsOfStrings(input.ListOfMapsOfStrings, context),
      }),
    ...(input.ListOfStrings !== undefined &&
      input.ListOfStrings !== null && {
        ListOfStrings: serializeAws_json1_1ListOfStrings(input.ListOfStrings, context),
      }),
    ...(input.ListOfStructs !== undefined &&
      input.ListOfStructs !== null && {
        ListOfStructs: serializeAws_json1_1ListOfStructs(input.ListOfStructs, context),
      }),
    ...(input.Long !== undefined && input.Long !== null && { Long: input.Long }),
    ...(input.MapOfListsOfStrings !== undefined &&
      input.MapOfListsOfStrings !== null && {
        MapOfListsOfStrings: serializeAws_json1_1MapOfListsOfStrings(input.MapOfListsOfStrings, context),
      }),
    ...(input.MapOfMaps !== undefined &&
      input.MapOfMaps !== null && { MapOfMaps: serializeAws_json1_1MapOfMapOfStrings(input.MapOfMaps, context) }),
    ...(input.MapOfStrings !== undefined &&
      input.MapOfStrings !== null && { MapOfStrings: serializeAws_json1_1MapOfStrings(input.MapOfStrings, context) }),
    ...(input.MapOfStructs !== undefined &&
      input.MapOfStructs !== null && { MapOfStructs: serializeAws_json1_1MapOfStructs(input.MapOfStructs, context) }),
    ...(input.RecursiveList !== undefined &&
      input.RecursiveList !== null && {
        RecursiveList: serializeAws_json1_1ListOfKitchenSinks(input.RecursiveList, context),
      }),
    ...(input.RecursiveMap !== undefined &&
      input.RecursiveMap !== null && {
        RecursiveMap: serializeAws_json1_1MapOfKitchenSinks(input.RecursiveMap, context),
      }),
    ...(input.RecursiveStruct !== undefined &&
      input.RecursiveStruct !== null && {
        RecursiveStruct: serializeAws_json1_1KitchenSink(input.RecursiveStruct, context),
      }),
    ...(input.SimpleStruct !== undefined &&
      input.SimpleStruct !== null && { SimpleStruct: serializeAws_json1_1SimpleStruct(input.SimpleStruct, context) }),
    ...(input.String !== undefined && input.String !== null && { String: input.String }),
    ...(input.StructWithLocationName !== undefined &&
      input.StructWithLocationName !== null && {
        StructWithLocationName: serializeAws_json1_1StructWithLocationName(input.StructWithLocationName, context),
      }),
    ...(input.Timestamp !== undefined &&
      input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.UnixTimestamp !== undefined &&
      input.UnixTimestamp !== null && { UnixTimestamp: Math.round(input.UnixTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListOfKitchenSinks = (input: KitchenSink[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1KitchenSink(entry, context);
    });
};

const serializeAws_json1_1ListOfListOfStrings = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ListOfStrings(entry, context);
    });
};

const serializeAws_json1_1ListOfMapsOfStrings = (input: { [key: string]: string }[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MapOfStrings(entry, context);
    });
};

const serializeAws_json1_1ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListOfStructs = (input: SimpleStruct[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SimpleStruct(entry, context);
    });
};

const serializeAws_json1_1MapOfKitchenSinks = (input: { [key: string]: KitchenSink }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1KitchenSink(value, context),
    };
  }, {});
};

const serializeAws_json1_1MapOfListsOfStrings = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1ListOfStrings(value, context),
    };
  }, {});
};

const serializeAws_json1_1MapOfMapOfStrings = (
  input: { [key: string]: { [key: string]: string } },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1MapOfStrings(value, context),
    };
  }, {});
};

const serializeAws_json1_1MapOfStrings = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1MapOfStructs = (input: { [key: string]: SimpleStruct }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1SimpleStruct(value, context),
    };
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
  return {
    ...(input.sparseStringList !== undefined &&
      input.sparseStringList !== null && {
        sparseStringList: serializeAws_json1_1SparseStringList(input.sparseStringList, context),
      }),
    ...(input.sparseStringMap !== undefined &&
      input.sparseStringMap !== null && {
        sparseStringMap: serializeAws_json1_1SparseStringMap(input.sparseStringMap, context),
      }),
    ...(input.string !== undefined && input.string !== null && { string: input.string }),
  };
};

const serializeAws_json1_1PutAndGetInlineDocumentsInputOutput = (
  input: PutAndGetInlineDocumentsInputOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.inlineDocument !== undefined &&
      input.inlineDocument !== null && { inlineDocument: serializeAws_json1_1Document(input.inlineDocument, context) }),
  };
};

const serializeAws_json1_1SimpleScalarPropertiesInputOutput = (
  input: SimpleScalarPropertiesInputOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.doubleValue !== undefined &&
      input.doubleValue !== null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.floatValue !== undefined &&
      input.floatValue !== null && { floatValue: __serializeFloat(input.floatValue) }),
  };
};

const serializeAws_json1_1SimpleStruct = (input: SimpleStruct, context: __SerdeContext): any => {
  return {
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1StructWithLocationName = (input: StructWithLocationName, context: __SerdeContext): any => {
  return {
    ...(input.Value !== undefined && input.Value !== null && { RenamedMember: input.Value }),
  };
};

const serializeAws_json1_1UnionInputOutput = (input: UnionInputOutput, context: __SerdeContext): any => {
  return {
    ...(input.contents !== undefined &&
      input.contents !== null && { contents: serializeAws_json1_1MyUnion(input.contents, context) }),
  };
};

const serializeAws_json1_1FooEnumList = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FooEnumMap = (input: { [key: string]: FooEnum | string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1FooEnumSet = (input: (FooEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  return {
    ...(input.hi !== undefined && input.hi !== null && { hi: input.hi }),
  };
};

const serializeAws_json1_1SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    if (entry === null) {
      return null as any;
    }
    return entry;
  });
};

const serializeAws_json1_1SparseStringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  return {
    Nested:
      output.Nested !== undefined && output.Nested !== null
        ? deserializeAws_json1_1ComplexNestedErrorData(output.Nested, context)
        : undefined,
    TopLevel: __expectString(output.TopLevel),
  } as any;
};

const deserializeAws_json1_1ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  return {
    Foo: __expectString(output.Fooooo),
  } as any;
};

const deserializeAws_json1_1Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

const deserializeAws_json1_1EmptyStruct = (output: any, context: __SerdeContext): EmptyStruct => {
  return {} as any;
};

const deserializeAws_json1_1ErrorWithMembers = (output: any, context: __SerdeContext): ErrorWithMembers => {
  return {
    Code: __expectString(output.Code),
    ComplexData:
      output.ComplexData !== undefined && output.ComplexData !== null
        ? deserializeAws_json1_1KitchenSink(output.ComplexData, context)
        : undefined,
    IntegerField: __expectInt(output.IntegerField),
    ListField:
      output.ListField !== undefined && output.ListField !== null
        ? deserializeAws_json1_1ListOfStrings(output.ListField, context)
        : undefined,
    MapField:
      output.MapField !== undefined && output.MapField !== null
        ? deserializeAws_json1_1MapOfStrings(output.MapField, context)
        : undefined,
    Message: __expectString(output.Message),
    StringField: __expectString(output.StringField),
  } as any;
};

const deserializeAws_json1_1ErrorWithoutMembers = (output: any, context: __SerdeContext): ErrorWithoutMembers => {
  return {} as any;
};

const deserializeAws_json1_1FooError = (output: any, context: __SerdeContext): FooError => {
  return {} as any;
};

const deserializeAws_json1_1GreetingWithErrorsOutput = (
  output: any,
  context: __SerdeContext
): GreetingWithErrorsOutput => {
  return {
    greeting: __expectString(output.greeting),
  } as any;
};

const deserializeAws_json1_1InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JsonEnumsInputOutput = (output: any, context: __SerdeContext): JsonEnumsInputOutput => {
  return {
    fooEnum1: __expectString(output.fooEnum1),
    fooEnum2: __expectString(output.fooEnum2),
    fooEnum3: __expectString(output.fooEnum3),
    fooEnumList:
      output.fooEnumList !== undefined && output.fooEnumList !== null
        ? deserializeAws_json1_1FooEnumList(output.fooEnumList, context)
        : undefined,
    fooEnumMap:
      output.fooEnumMap !== undefined && output.fooEnumMap !== null
        ? deserializeAws_json1_1FooEnumMap(output.fooEnumMap, context)
        : undefined,
    fooEnumSet:
      output.fooEnumSet !== undefined && output.fooEnumSet !== null
        ? deserializeAws_json1_1FooEnumSet(output.fooEnumSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1KitchenSink = (output: any, context: __SerdeContext): KitchenSink => {
  return {
    Blob: output.Blob !== undefined && output.Blob !== null ? context.base64Decoder(output.Blob) : undefined,
    Boolean: __expectBoolean(output.Boolean),
    Double: __limitedParseFloat(output.Double),
    EmptyStruct:
      output.EmptyStruct !== undefined && output.EmptyStruct !== null
        ? deserializeAws_json1_1EmptyStruct(output.EmptyStruct, context)
        : undefined,
    Float: __limitedParseFloat(output.Float),
    HttpdateTimestamp:
      output.HttpdateTimestamp !== undefined && output.HttpdateTimestamp !== null
        ? new Date(Math.round(output.HttpdateTimestamp * 1000))
        : undefined,
    Integer: __expectInt(output.Integer),
    Iso8601Timestamp:
      output.Iso8601Timestamp !== undefined && output.Iso8601Timestamp !== null
        ? new Date(Math.round(output.Iso8601Timestamp * 1000))
        : undefined,
    JsonValue:
      output.JsonValue !== undefined && output.JsonValue !== null ? new __LazyJsonString(output.JsonValue) : undefined,
    ListOfLists:
      output.ListOfLists !== undefined && output.ListOfLists !== null
        ? deserializeAws_json1_1ListOfListOfStrings(output.ListOfLists, context)
        : undefined,
    ListOfMapsOfStrings:
      output.ListOfMapsOfStrings !== undefined && output.ListOfMapsOfStrings !== null
        ? deserializeAws_json1_1ListOfMapsOfStrings(output.ListOfMapsOfStrings, context)
        : undefined,
    ListOfStrings:
      output.ListOfStrings !== undefined && output.ListOfStrings !== null
        ? deserializeAws_json1_1ListOfStrings(output.ListOfStrings, context)
        : undefined,
    ListOfStructs:
      output.ListOfStructs !== undefined && output.ListOfStructs !== null
        ? deserializeAws_json1_1ListOfStructs(output.ListOfStructs, context)
        : undefined,
    Long: __expectInt(output.Long),
    MapOfListsOfStrings:
      output.MapOfListsOfStrings !== undefined && output.MapOfListsOfStrings !== null
        ? deserializeAws_json1_1MapOfListsOfStrings(output.MapOfListsOfStrings, context)
        : undefined,
    MapOfMaps:
      output.MapOfMaps !== undefined && output.MapOfMaps !== null
        ? deserializeAws_json1_1MapOfMapOfStrings(output.MapOfMaps, context)
        : undefined,
    MapOfStrings:
      output.MapOfStrings !== undefined && output.MapOfStrings !== null
        ? deserializeAws_json1_1MapOfStrings(output.MapOfStrings, context)
        : undefined,
    MapOfStructs:
      output.MapOfStructs !== undefined && output.MapOfStructs !== null
        ? deserializeAws_json1_1MapOfStructs(output.MapOfStructs, context)
        : undefined,
    RecursiveList:
      output.RecursiveList !== undefined && output.RecursiveList !== null
        ? deserializeAws_json1_1ListOfKitchenSinks(output.RecursiveList, context)
        : undefined,
    RecursiveMap:
      output.RecursiveMap !== undefined && output.RecursiveMap !== null
        ? deserializeAws_json1_1MapOfKitchenSinks(output.RecursiveMap, context)
        : undefined,
    RecursiveStruct:
      output.RecursiveStruct !== undefined && output.RecursiveStruct !== null
        ? deserializeAws_json1_1KitchenSink(output.RecursiveStruct, context)
        : undefined,
    SimpleStruct:
      output.SimpleStruct !== undefined && output.SimpleStruct !== null
        ? deserializeAws_json1_1SimpleStruct(output.SimpleStruct, context)
        : undefined,
    String: __expectString(output.String),
    StructWithLocationName:
      output.StructWithLocationName !== undefined && output.StructWithLocationName !== null
        ? deserializeAws_json1_1StructWithLocationName(output.StructWithLocationName, context)
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    UnixTimestamp:
      output.UnixTimestamp !== undefined && output.UnixTimestamp !== null
        ? new Date(Math.round(output.UnixTimestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListOfKitchenSinks = (output: any, context: __SerdeContext): KitchenSink[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KitchenSink(entry, context);
    });
};

const deserializeAws_json1_1ListOfListOfStrings = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListOfStrings(entry, context);
    });
};

const deserializeAws_json1_1ListOfMapsOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string }[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MapOfStrings(entry, context);
    });
};

const deserializeAws_json1_1ListOfStrings = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ListOfStructs = (output: any, context: __SerdeContext): SimpleStruct[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SimpleStruct(entry, context);
    });
};

const deserializeAws_json1_1MapOfKitchenSinks = (
  output: any,
  context: __SerdeContext
): { [key: string]: KitchenSink } => {
  return Object.entries(output).reduce((acc: { [key: string]: KitchenSink }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1KitchenSink(value, context),
    };
  }, {});
};

const deserializeAws_json1_1MapOfListsOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1ListOfStrings(value, context),
    };
  }, {});
};

const deserializeAws_json1_1MapOfMapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: string } } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: { [key: string]: string } }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_1MapOfStrings(value, context),
      };
    },
    {}
  );
};

const deserializeAws_json1_1MapOfStrings = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1MapOfStructs = (output: any, context: __SerdeContext): { [key: string]: SimpleStruct } => {
  return Object.entries(output).reduce((acc: { [key: string]: SimpleStruct }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1SimpleStruct(value, context),
    };
  }, {});
};

const deserializeAws_json1_1MyUnion = (output: any, context: __SerdeContext): MyUnion => {
  if (output.blobValue !== undefined && output.blobValue !== null) {
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
  if (output.listValue !== undefined && output.listValue !== null) {
    return {
      listValue: deserializeAws_json1_1StringList(output.listValue, context),
    };
  }
  if (output.mapValue !== undefined && output.mapValue !== null) {
    return {
      mapValue: deserializeAws_json1_1StringMap(output.mapValue, context),
    };
  }
  if (__expectInt(output.numberValue) !== undefined) {
    return { numberValue: __expectInt(output.numberValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structureValue !== undefined && output.structureValue !== null) {
    return {
      structureValue: deserializeAws_json1_1GreetingStruct(output.structureValue, context),
    };
  }
  if (output.timestampValue !== undefined && output.timestampValue !== null) {
    return {
      timestampValue: new Date(Math.round(output.timestampValue * 1000)),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1NullOperationInputOutput = (
  output: any,
  context: __SerdeContext
): NullOperationInputOutput => {
  return {
    sparseStringList:
      output.sparseStringList !== undefined && output.sparseStringList !== null
        ? deserializeAws_json1_1SparseStringList(output.sparseStringList, context)
        : undefined,
    sparseStringMap:
      output.sparseStringMap !== undefined && output.sparseStringMap !== null
        ? deserializeAws_json1_1SparseStringMap(output.sparseStringMap, context)
        : undefined,
    string: __expectString(output.string),
  } as any;
};

const deserializeAws_json1_1PutAndGetInlineDocumentsInputOutput = (
  output: any,
  context: __SerdeContext
): PutAndGetInlineDocumentsInputOutput => {
  return {
    inlineDocument:
      output.inlineDocument !== undefined && output.inlineDocument !== null
        ? deserializeAws_json1_1Document(output.inlineDocument, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SimpleScalarPropertiesInputOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarPropertiesInputOutput => {
  return {
    doubleValue: __limitedParseFloat(output.doubleValue),
    floatValue: __limitedParseFloat(output.floatValue),
  } as any;
};

const deserializeAws_json1_1SimpleStruct = (output: any, context: __SerdeContext): SimpleStruct => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1StructWithLocationName = (output: any, context: __SerdeContext): StructWithLocationName => {
  return {
    Value: __expectString(output.RenamedMember),
  } as any;
};

const deserializeAws_json1_1UnionInputOutput = (output: any, context: __SerdeContext): UnionInputOutput => {
  return {
    contents:
      output.contents !== undefined && output.contents !== null
        ? deserializeAws_json1_1MyUnion(output.contents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FooEnumList = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1FooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  return Object.entries(output).reduce((acc: { [key: string]: FooEnum | string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1FooEnumSet = (output: any, context: __SerdeContext): (FooEnum | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1GreetingStruct = (output: any, context: __SerdeContext): GreetingStruct => {
  return {
    hi: __expectString(output.hi),
  } as any;
};

const deserializeAws_json1_1SparseStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
};

const deserializeAws_json1_1SparseStringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return { ...acc, [key]: null as any };
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
