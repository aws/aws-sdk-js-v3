// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import {
  HttpRequest,
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectByte as __expectByte,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectShort as __expectShort,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  type Endpoint as __Endpoint,
  type ResponseMetadata as __ResponseMetadata,
  type SerdeContext as __SerdeContext,
  DocumentType as __DocumentType,
  HeaderBag as __HeaderBag,
} from "@smithy/types";

import {
  ContentTypeParametersCommandInput,
  ContentTypeParametersCommandOutput,
} from "../commands/ContentTypeParametersCommand";
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
  OperationWithDefaultsCommandInput,
  OperationWithDefaultsCommandOutput,
} from "../commands/OperationWithDefaultsCommand";
import {
  OperationWithNestedStructureCommandInput,
  OperationWithNestedStructureCommandOutput,
} from "../commands/OperationWithNestedStructureCommand";
import {
  OperationWithRequiredMembersCommandInput,
  OperationWithRequiredMembersCommandOutput,
} from "../commands/OperationWithRequiredMembersCommand";
import {
  OperationWithRequiredMembersWithDefaultsCommandInput,
  OperationWithRequiredMembersWithDefaultsCommandOutput,
} from "../commands/OperationWithRequiredMembersWithDefaultsCommand";
import {
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "../commands/PutWithContentEncodingCommand";
import {
  QueryIncompatibleOperationCommandInput,
  QueryIncompatibleOperationCommandOutput,
} from "../commands/QueryIncompatibleOperationCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "../commands/SimpleScalarPropertiesCommand";
import { ComplexError, FooError, InvalidGreeting } from "../models/errors";
import { JSONRPC10ServiceException as __BaseException } from "../models/JSONRPC10ServiceException";
import {
  ClientOptionalDefaults,
  ComplexNestedErrorData,
  ContentTypeParametersInput,
  Defaults,
  Dialog,
  EmptyInputAndEmptyOutputInput,
  EndpointWithHostLabelOperationInput,
  Farewell,
  GreetingStruct,
  GreetingWithErrorsInput,
  JsonUnionsInput,
  JsonUnionsOutput,
  MyUnion,
  OperationWithDefaultsInput,
  OperationWithDefaultsOutput,
  OperationWithNestedStructureInput,
  OperationWithRequiredMembersOutput,
  OperationWithRequiredMembersWithDefaultsOutput,
  PutWithContentEncodingInput,
  SimpleScalarPropertiesInput,
  SimpleScalarPropertiesOutput,
  TopLevel,
} from "../models/models_0";

/**
 * serializeAws_json1_0ContentTypeParametersCommand
 */
export const se_ContentTypeParametersCommand = async (
  input: ContentTypeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ContentTypeParameters")
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0EmptyInputAndEmptyOutputCommand
 */
export const se_EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EmptyInputAndEmptyOutput")
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0EndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EndpointOperation")
  const body = '{}';
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
 * serializeAws_json1_0EndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EndpointWithHostLabelOperation")
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "foo.{label}." + resolvedHostname;
    if (input.label === undefined) {
      throw new Error('Empty value provided for input host prefix: label.');
    }
    resolvedHostname = resolvedHostname.replace("{label}", input.label!)
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

/**
 * serializeAws_json1_0GreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GreetingWithErrors")
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0HostWithPathOperationCommand
 */
export const se_HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("HostWithPathOperation")
  const body = '{}';
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0JsonUnionsCommand
 */
export const se_JsonUnionsCommand = async (
  input: JsonUnionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("JsonUnions")
  let body: any;
  body = JSON.stringify(se_JsonUnionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0NoInputAndNoOutputCommand
 */
export const se_NoInputAndNoOutputCommand = async (
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NoInputAndNoOutput")
  const body = '{}';
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0NoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NoInputAndOutput")
  const body = '{}';
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0OperationWithDefaultsCommand
 */
export const se_OperationWithDefaultsCommand = async (
  input: OperationWithDefaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OperationWithDefaults")
  let body: any;
  body = JSON.stringify(se_OperationWithDefaultsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0OperationWithNestedStructureCommand
 */
export const se_OperationWithNestedStructureCommand = async (
  input: OperationWithNestedStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OperationWithNestedStructure")
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0OperationWithRequiredMembersCommand
 */
export const se_OperationWithRequiredMembersCommand = async (
  input: OperationWithRequiredMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OperationWithRequiredMembers")
  const body = '{}';
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0OperationWithRequiredMembersWithDefaultsCommand
 */
export const se_OperationWithRequiredMembersWithDefaultsCommand = async (
  input: OperationWithRequiredMembersWithDefaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OperationWithRequiredMembersWithDefaults")
  const body = '{}';
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutWithContentEncoding")
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0QueryIncompatibleOperationCommand
 */
export const se_QueryIncompatibleOperationCommand = async (
  input: QueryIncompatibleOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("QueryIncompatibleOperation")
  const body = '{}';
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SimpleScalarPropertiesCommand
 */
export const se_SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SimpleScalarProperties")
  let body: any;
  body = JSON.stringify(se_SimpleScalarPropertiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0ContentTypeParametersCommand
 */
export const de_ContentTypeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContentTypeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = _json(data);
  const response: ContentTypeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0EmptyInputAndEmptyOutputCommand
 */
export const de_EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = _json(data);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0EndpointOperationCommand
 */
export const de_EndpointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0EndpointWithHostLabelOperationCommand
 */
export const de_EndpointWithHostLabelOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndpointWithHostLabelOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EndpointWithHostLabelOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0GreetingWithErrorsCommand
 */
export const de_GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = _json(data);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0HostWithPathOperationCommand
 */
export const de_HostWithPathOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HostWithPathOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: HostWithPathOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0JsonUnionsCommand
 */
export const de_JsonUnionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<JsonUnionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = de_JsonUnionsOutput(data, context);
  const response: JsonUnionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0NoInputAndNoOutputCommand
 */
export const de_NoInputAndNoOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0NoInputAndOutputCommand
 */
export const de_NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = _json(data);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0OperationWithDefaultsCommand
 */
export const de_OperationWithDefaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithDefaultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = de_OperationWithDefaultsOutput(data, context);
  const response: OperationWithDefaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0OperationWithNestedStructureCommand
 */
export const de_OperationWithNestedStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithNestedStructureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = _json(data);
  const response: OperationWithNestedStructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0OperationWithRequiredMembersCommand
 */
export const de_OperationWithRequiredMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithRequiredMembersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = de_OperationWithRequiredMembersOutput(data, context);
  const response: OperationWithRequiredMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0OperationWithRequiredMembersWithDefaultsCommand
 */
export const de_OperationWithRequiredMembersWithDefaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithRequiredMembersWithDefaultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = de_OperationWithRequiredMembersWithDefaultsOutput(data, context);
  const response: OperationWithRequiredMembersWithDefaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutWithContentEncodingCommand
 */
export const de_PutWithContentEncodingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWithContentEncodingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutWithContentEncodingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0QueryIncompatibleOperationCommand
 */
export const de_QueryIncompatibleOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIncompatibleOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryIncompatibleOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0SimpleScalarPropertiesCommand
 */
export const de_SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = de_SimpleScalarPropertiesOutput(data, context);
  const response: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.json10#ComplexError":
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "FooError":
    case "aws.protocoltests.json10#FooError":
      throw await de_FooErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.json10#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      }) as never;
  }
}

/**
 * deserializeAws_json1_0ComplexErrorRes
 */
const de_ComplexErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body
  const deserialized: any = de_ComplexError(body, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0FooErrorRes
 */
const de_FooErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FooError> => {
  const body = parsedOutput.body
  const deserialized: any = _json(body);
  const exception = new FooError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidGreetingRes
 */
const de_InvalidGreetingRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body
  const deserialized: any = _json(body);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return __decorateServiceException(exception, body);
};

// se_ClientOptionalDefaults omitted.

// se_ContentTypeParametersInput omitted.

/**
 * serializeAws_json1_0Defaults
 */
const se_Defaults = (
  input: Defaults,
  context: __SerdeContext
): any => {
  return take(input, {
    'defaultBlob': context.base64Encoder,
    'defaultBoolean': [],
    'defaultByte': [],
    'defaultDocumentBoolean': _ => se_Document(_, context),
    'defaultDocumentList': _ => se_Document(_, context),
    'defaultDocumentMap': _ => se_Document(_, context),
    'defaultDocumentString': _ => se_Document(_, context),
    'defaultDouble': __serializeFloat,
    'defaultEnum': [],
    'defaultFloat': __serializeFloat,
    'defaultIntEnum': [],
    'defaultInteger': [],
    'defaultList': _json,
    'defaultLong': [],
    'defaultMap': _json,
    'defaultNullDocument': _ => se_Document(_, context),
    'defaultShort': [],
    'defaultString': [],
    'defaultTimestamp': _ => (_.getTime() / 1_000),
    'emptyBlob': context.base64Encoder,
    'emptyString': [],
    'falseBoolean': [],
    'zeroByte': [],
    'zeroDouble': __serializeFloat,
    'zeroFloat': __serializeFloat,
    'zeroInteger': [],
    'zeroLong': [],
    'zeroShort': [],
  });
}

// se_Dialog omitted.

// se_DialogList omitted.

// se_DialogMap omitted.

// se_EmptyInputAndEmptyOutputInput omitted.

// se_EndpointWithHostLabelOperationInput omitted.

// se_Farewell omitted.

// se_GreetingWithErrorsInput omitted.

/**
 * serializeAws_json1_0JsonUnionsInput
 */
const se_JsonUnionsInput = (
  input: JsonUnionsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    'contents': _ => se_MyUnion(_, context),
  });
}

/**
 * serializeAws_json1_0MyUnion
 */
const se_MyUnion = (
  input: MyUnion,
  context: __SerdeContext
): any => {
  return MyUnion.visit(input, {
    blobValue: value => ({ "blobValue": context.base64Encoder(value) }),
    booleanValue: value => ({ "booleanValue": value }),
    enumValue: value => ({ "enumValue": value }),
    intEnumValue: value => ({ "intEnumValue": value }),
    listValue: value => ({ "listValue": _json(value) }),
    mapValue: value => ({ "mapValue": _json(value) }),
    numberValue: value => ({ "numberValue": value }),
    stringValue: value => ({ "stringValue": value }),
    structureValue: value => ({ "structureValue": _json(value) }),
    timestampValue: value => ({ "timestampValue": (value.getTime() / 1_000) }),
    _: (name, value) => ({ [name]: value } as any)
  });
}

/**
 * serializeAws_json1_0OperationWithDefaultsInput
 */
const se_OperationWithDefaultsInput = (
  input: OperationWithDefaultsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    'clientOptionalDefaults': _json,
    'defaults': _ => se_Defaults(_, context),
    'otherTopLevelDefault': [],
    'topLevelDefault': [],
  });
}

// se_OperationWithNestedStructureInput omitted.

// se_PutWithContentEncodingInput omitted.

/**
 * serializeAws_json1_0SimpleScalarPropertiesInput
 */
const se_SimpleScalarPropertiesInput = (
  input: SimpleScalarPropertiesInput,
  context: __SerdeContext
): any => {
  return take(input, {
    'doubleValue': __serializeFloat,
    'floatValue': __serializeFloat,
  });
}

// se_TestStringList omitted.

// se_TestStringMap omitted.

// se_TopLevel omitted.

// se_GreetingStruct omitted.

// se_StringList omitted.

// se_StringMap omitted.

/**
 * serializeAws_json1_0Document
 */
const se_Document = (
  input: __DocumentType,
  context: __SerdeContext
): any => {
  return input;
}

/**
 * deserializeAws_json1_0ComplexError
 */
const de_ComplexError = (
  output: any,
  context: __SerdeContext
): ComplexError => {
  return take(output, {
    'Nested': (_: any) => de_ComplexNestedErrorData(_, context),
    'TopLevel': __expectString,
  }) as any;
}

/**
 * deserializeAws_json1_0ComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  return take(output, {
    'Foo': [,__expectString,`Foo`],
  }) as any;
}

// de_ContentTypeParametersOutput omitted.

// de_Dialog omitted.

// de_DialogList omitted.

// de_DialogMap omitted.

// de_EmptyInputAndEmptyOutputOutput omitted.

// de_Farewell omitted.

// de_FooError omitted.

// de_GreetingWithErrorsOutput omitted.

// de_InvalidGreeting omitted.

/**
 * deserializeAws_json1_0JsonUnionsOutput
 */
const de_JsonUnionsOutput = (
  output: any,
  context: __SerdeContext
): JsonUnionsOutput => {
  return take(output, {
    'contents': (_: any) => de_MyUnion(__expectUnion(_), context),
  }) as any;
}

/**
 * deserializeAws_json1_0MyUnion
 */
const de_MyUnion = (
  output: any,
  context: __SerdeContext
): MyUnion => {
  if (output.blobValue != null) {
    return {
      blobValue: context.base64Decoder(output.blobValue)
    };
  }
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any }
  }
  if (__expectString(output.enumValue) !== undefined) {
    return { enumValue: __expectString(output.enumValue) as any }
  }
  if (__expectInt32(output.intEnumValue) !== undefined) {
    return { intEnumValue: __expectInt32(output.intEnumValue) as any }
  }
  if (output.listValue != null) {
    return {
      listValue: _json(output.listValue)
    };
  }
  if (output.mapValue != null) {
    return {
      mapValue: _json(output.mapValue)
    };
  }
  if (__expectInt32(output.numberValue) !== undefined) {
    return { numberValue: __expectInt32(output.numberValue) as any }
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any }
  }
  if (output.structureValue != null) {
    return {
      structureValue: _json(output.structureValue)
    };
  }
  if (output.timestampValue != null) {
    return {
      timestampValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestampValue)))
    };
  }
  return { $unknown: Object.entries(output)[0] };
}

// de_NoInputAndOutputOutput omitted.

/**
 * deserializeAws_json1_0OperationWithDefaultsOutput
 */
const de_OperationWithDefaultsOutput = (
  output: any,
  context: __SerdeContext
): OperationWithDefaultsOutput => {
  return take(output, {
    'defaultBlob': context.base64Decoder,
    'defaultBoolean': __expectBoolean,
    'defaultByte': __expectByte,
    'defaultDocumentBoolean': (_: any) => de_Document(_, context),
    'defaultDocumentList': (_: any) => de_Document(_, context),
    'defaultDocumentMap': (_: any) => de_Document(_, context),
    'defaultDocumentString': (_: any) => de_Document(_, context),
    'defaultDouble': __limitedParseDouble,
    'defaultEnum': __expectString,
    'defaultFloat': __limitedParseFloat32,
    'defaultIntEnum': __expectInt32,
    'defaultInteger': __expectInt32,
    'defaultList': _json,
    'defaultLong': __expectLong,
    'defaultMap': _json,
    'defaultNullDocument': (_: any) => de_Document(_, context),
    'defaultShort': __expectShort,
    'defaultString': __expectString,
    'defaultTimestamp': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    'emptyBlob': context.base64Decoder,
    'emptyString': __expectString,
    'falseBoolean': __expectBoolean,
    'zeroByte': __expectByte,
    'zeroDouble': __limitedParseDouble,
    'zeroFloat': __limitedParseFloat32,
    'zeroInteger': __expectInt32,
    'zeroLong': __expectLong,
    'zeroShort': __expectShort,
  }) as any;
}

// de_OperationWithNestedStructureOutput omitted.

/**
 * deserializeAws_json1_0OperationWithRequiredMembersOutput
 */
const de_OperationWithRequiredMembersOutput = (
  output: any,
  context: __SerdeContext
): OperationWithRequiredMembersOutput => {
  return take(output, {
    'requiredBlob': context.base64Decoder,
    'requiredBoolean': __expectBoolean,
    'requiredByte': __expectByte,
    'requiredDouble': __limitedParseDouble,
    'requiredFloat': __limitedParseFloat32,
    'requiredInteger': __expectInt32,
    'requiredList': _json,
    'requiredLong': __expectLong,
    'requiredMap': _json,
    'requiredShort': __expectShort,
    'requiredString': __expectString,
    'requiredTimestamp': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
}

/**
 * deserializeAws_json1_0OperationWithRequiredMembersWithDefaultsOutput
 */
const de_OperationWithRequiredMembersWithDefaultsOutput = (
  output: any,
  context: __SerdeContext
): OperationWithRequiredMembersWithDefaultsOutput => {
  return take(output, {
    'requiredBlob': context.base64Decoder,
    'requiredBoolean': __expectBoolean,
    'requiredByte': __expectByte,
    'requiredDouble': __limitedParseDouble,
    'requiredEnum': __expectString,
    'requiredFloat': __limitedParseFloat32,
    'requiredIntEnum': __expectInt32,
    'requiredInteger': __expectInt32,
    'requiredList': _json,
    'requiredLong': __expectLong,
    'requiredMap': _json,
    'requiredShort': __expectShort,
    'requiredString': __expectString,
    'requiredTimestamp': (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
}

// de_RequiredStringList omitted.

// de_RequiredStringMap omitted.

/**
 * deserializeAws_json1_0SimpleScalarPropertiesOutput
 */
const de_SimpleScalarPropertiesOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarPropertiesOutput => {
  return take(output, {
    'doubleValue': __limitedParseDouble,
    'floatValue': __limitedParseFloat32,
  }) as any;
}

// de_TestStringList omitted.

// de_TestStringMap omitted.

// de_GreetingStruct omitted.

// de_StringList omitted.

// de_StringMap omitted.

/**
 * deserializeAws_json1_0Document
 */
const de_Document = (
  output: any,
  context: __SerdeContext
): __DocumentType => {
  return output;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => collectBody(streamBody, context).then(body => context.utf8Encoder(body))

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any,
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
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
  return new HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag { return {
  'content-type': "application/x-amz-json-1.0",
  'x-amz-target': `JsonRpc10.${operation}`,
}};
