// smithy-typescript generated code
import {
  buildHttpRpcRequest,
  cbor,
  checkCborResponse as cr,
  dateToTag as __dateToTag,
  loadSmithyRpcV2CborErrorCode,
  parseCborBody as parseBody,
  parseCborErrorBody as parseErrorBody,
} from "@smithy/core/cbor";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectByte as __expectByte,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectShort as __expectShort,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EmptyInputOutputCommandInput, EmptyInputOutputCommandOutput } from "../commands/EmptyInputOutputCommand";
import { Float16CommandInput, Float16CommandOutput } from "../commands/Float16Command";
import { FractionalSecondsCommandInput, FractionalSecondsCommandOutput } from "../commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "../commands/GreetingWithErrorsCommand";
import { NoInputOutputCommandInput, NoInputOutputCommandOutput } from "../commands/NoInputOutputCommand";
import {
  OperationWithDefaultsCommandInput,
  OperationWithDefaultsCommandOutput,
} from "../commands/OperationWithDefaultsCommand";
import {
  OptionalInputOutputCommandInput,
  OptionalInputOutputCommandOutput,
} from "../commands/OptionalInputOutputCommand";
import { RecursiveShapesCommandInput, RecursiveShapesCommandOutput } from "../commands/RecursiveShapesCommand";
import { RpcV2CborDenseMapsCommandInput, RpcV2CborDenseMapsCommandOutput } from "../commands/RpcV2CborDenseMapsCommand";
import { RpcV2CborListsCommandInput, RpcV2CborListsCommandOutput } from "../commands/RpcV2CborListsCommand";
import {
  RpcV2CborSparseMapsCommandInput,
  RpcV2CborSparseMapsCommandOutput,
} from "../commands/RpcV2CborSparseMapsCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "../commands/SimpleScalarPropertiesCommand";
import {
  SparseNullsOperationCommandInput,
  SparseNullsOperationCommandOutput,
} from "../commands/SparseNullsOperationCommand";
import {
  ClientOptionalDefaults,
  ComplexError,
  Defaults,
  EmptyStructure,
  Float16Output,
  FooEnum,
  FractionalSecondsOutput,
  GreetingStruct,
  IntegerEnum,
  InvalidGreeting,
  OperationWithDefaultsInput,
  OperationWithDefaultsOutput,
  RecursiveShapesInputOutput,
  RecursiveShapesInputOutputNested1,
  RecursiveShapesInputOutputNested2,
  RpcV2CborDenseMapsInputOutput,
  RpcV2CborListInputOutput,
  RpcV2CborSparseMapsInputOutput,
  SimpleScalarStructure,
  SimpleStructure,
  SparseNullsOperationInputOutput,
  StructureListMember,
  ValidationException,
} from "../models/models_0";
import { RpcV2ProtocolServiceException as __BaseException } from "../models/RpcV2ProtocolServiceException";

/**
 * serializeRpcv2cborEmptyInputOutputCommand
 */
export const se_EmptyInputOutputCommand = async (
  input: EmptyInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/EmptyInputOutput", undefined, body);
};

/**
 * serializeRpcv2cborFloat16Command
 */
export const se_Float16Command = async (
  input: Float16CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = { ...SHARED_HEADERS };
  delete headers["content-type"];

  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/Float16", undefined, undefined);
};

/**
 * serializeRpcv2cborFractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = { ...SHARED_HEADERS };
  delete headers["content-type"];

  return buildHttpRpcRequest(
    context,
    headers,
    "/service/RpcV2Protocol/operation/FractionalSeconds",
    undefined,
    undefined
  );
};

/**
 * serializeRpcv2cborGreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = { ...SHARED_HEADERS };
  delete headers["content-type"];

  return buildHttpRpcRequest(
    context,
    headers,
    "/service/RpcV2Protocol/operation/GreetingWithErrors",
    undefined,
    undefined
  );
};

/**
 * serializeRpcv2cborNoInputOutputCommand
 */
export const se_NoInputOutputCommand = async (
  input: NoInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = { ...SHARED_HEADERS };
  delete headers["content-type"];

  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/NoInputOutput", undefined, undefined);
};

/**
 * serializeRpcv2cborOperationWithDefaultsCommand
 */
export const se_OperationWithDefaultsCommand = async (
  input: OperationWithDefaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_OperationWithDefaultsInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/RpcV2Protocol/operation/OperationWithDefaults",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborOptionalInputOutputCommand
 */
export const se_OptionalInputOutputCommand = async (
  input: OptionalInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/OptionalInputOutput", undefined, body);
};

/**
 * serializeRpcv2cborRecursiveShapesCommand
 */
export const se_RecursiveShapesCommand = async (
  input: RecursiveShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_RecursiveShapesInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/RecursiveShapes", undefined, body);
};

/**
 * serializeRpcv2cborRpcV2CborDenseMapsCommand
 */
export const se_RpcV2CborDenseMapsCommand = async (
  input: RpcV2CborDenseMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/RpcV2CborDenseMaps", undefined, body);
};

/**
 * serializeRpcv2cborRpcV2CborListsCommand
 */
export const se_RpcV2CborListsCommand = async (
  input: RpcV2CborListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_RpcV2CborListInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/RpcV2CborLists", undefined, body);
};

/**
 * serializeRpcv2cborRpcV2CborSparseMapsCommand
 */
export const se_RpcV2CborSparseMapsCommand = async (
  input: RpcV2CborSparseMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_RpcV2CborSparseMapsInputOutput(input, context));
  return buildHttpRpcRequest(context, headers, "/service/RpcV2Protocol/operation/RpcV2CborSparseMaps", undefined, body);
};

/**
 * serializeRpcv2cborSimpleScalarPropertiesCommand
 */
export const se_SimpleScalarPropertiesCommand = async (
  input: SimpleScalarPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_SimpleScalarStructure(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/RpcV2Protocol/operation/SimpleScalarProperties",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborSparseNullsOperationCommand
 */
export const se_SparseNullsOperationCommand = async (
  input: SparseNullsOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_SparseNullsOperationInputOutput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/RpcV2Protocol/operation/SparseNullsOperation",
    undefined,
    body
  );
};

/**
 * deserializeRpcv2cborEmptyInputOutputCommand
 */
export const de_EmptyInputOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputOutputCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: EmptyInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborFloat16Command
 */
export const de_Float16Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<Float16CommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Float16Output(data, context);
  const response: Float16CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborFractionalSecondsCommand
 */
export const de_FractionalSecondsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborGreetingWithErrorsCommand
 */
export const de_GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborNoInputOutputCommand
 */
export const de_NoInputOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputOutputCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  await collectBody(output.body, context);
  const response: NoInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborOperationWithDefaultsCommand
 */
export const de_OperationWithDefaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithDefaultsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OperationWithDefaultsOutput(data, context);
  const response: OperationWithDefaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborOptionalInputOutputCommand
 */
export const de_OptionalInputOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptionalInputOutputCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: OptionalInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRecursiveShapesCommand
 */
export const de_RecursiveShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveShapesCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RecursiveShapesInputOutput(data, context);
  const response: RecursiveShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRpcV2CborDenseMapsCommand
 */
export const de_RpcV2CborDenseMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RpcV2CborDenseMapsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RpcV2CborDenseMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRpcV2CborListsCommand
 */
export const de_RpcV2CborListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RpcV2CborListsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RpcV2CborListInputOutput(data, context);
  const response: RpcV2CborListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRpcV2CborSparseMapsCommand
 */
export const de_RpcV2CborSparseMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RpcV2CborSparseMapsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RpcV2CborSparseMapsInputOutput(data, context);
  const response: RpcV2CborSparseMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborSimpleScalarPropertiesCommand
 */
export const de_SimpleScalarPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarPropertiesCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SimpleScalarStructure(data, context);
  const response: SimpleScalarPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborSparseNullsOperationCommand
 */
export const de_SparseNullsOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SparseNullsOperationCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SparseNullsOperationInputOutput(data, context);
  const response: SparseNullsOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Rpcv2cborCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadSmithyRpcV2CborErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "smithy.protocoltests.rpcv2Cbor#ComplexError":
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "smithy.protocoltests.rpcv2Cbor#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    case "ValidationException":
    case "smithy.framework#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeRpcv2cborValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidGreetingRes
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

// se_ClientOptionalDefaults omitted.

/**
 * serializeRpcv2cborDefaults
 */
const se_Defaults = (input: Defaults, context: __SerdeContext): any => {
  return take(input, {
    defaultBlob: [],
    defaultBoolean: [],
    defaultByte: [],
    defaultDouble: [],
    defaultEnum: [],
    defaultFloat: [],
    defaultIntEnum: [],
    defaultInteger: [],
    defaultList: _json,
    defaultLong: [],
    defaultMap: _json,
    defaultShort: [],
    defaultString: [],
    defaultTimestamp: __dateToTag,
    emptyBlob: [],
    emptyString: [],
    falseBoolean: [],
    zeroByte: [],
    zeroDouble: [],
    zeroFloat: [],
    zeroInteger: [],
    zeroLong: [],
    zeroShort: [],
  });
};

// se_DenseBooleanMap omitted.

// se_DenseNumberMap omitted.

// se_DenseSetMap omitted.

// se_DenseStringMap omitted.

// se_DenseStructMap omitted.

// se_EmptyStructure omitted.

/**
 * serializeRpcv2cborOperationWithDefaultsInput
 */
const se_OperationWithDefaultsInput = (input: OperationWithDefaultsInput, context: __SerdeContext): any => {
  return take(input, {
    clientOptionalDefaults: _json,
    defaults: (_) => se_Defaults(_, context),
    otherTopLevelDefault: [],
    topLevelDefault: [],
  });
};

/**
 * serializeRpcv2cborRecursiveShapesInputOutput
 */
const se_RecursiveShapesInputOutput = (input: RecursiveShapesInputOutput, context: __SerdeContext): any => {
  return take(input, {
    nested: (_) => se_RecursiveShapesInputOutputNested1(_, context),
  });
};

/**
 * serializeRpcv2cborRecursiveShapesInputOutputNested1
 */
const se_RecursiveShapesInputOutputNested1 = (
  input: RecursiveShapesInputOutputNested1,
  context: __SerdeContext
): any => {
  return take(input, {
    foo: [],
    nested: (_) => se_RecursiveShapesInputOutputNested2(_, context),
  });
};

/**
 * serializeRpcv2cborRecursiveShapesInputOutputNested2
 */
const se_RecursiveShapesInputOutputNested2 = (
  input: RecursiveShapesInputOutputNested2,
  context: __SerdeContext
): any => {
  return take(input, {
    bar: [],
    recursiveMember: (_) => se_RecursiveShapesInputOutputNested1(_, context),
  });
};

// se_RpcV2CborDenseMapsInputOutput omitted.

/**
 * serializeRpcv2cborRpcV2CborListInputOutput
 */
const se_RpcV2CborListInputOutput = (input: RpcV2CborListInputOutput, context: __SerdeContext): any => {
  return take(input, {
    blobList: (_) => se_BlobList(_, context),
    booleanList: _json,
    enumList: _json,
    intEnumList: _json,
    integerList: _json,
    nestedStringList: _json,
    stringList: _json,
    stringSet: _json,
    structureList: _json,
    timestampList: (_) => se_TimestampList(_, context),
  });
};

/**
 * serializeRpcv2cborRpcV2CborSparseMapsInputOutput
 */
const se_RpcV2CborSparseMapsInputOutput = (input: RpcV2CborSparseMapsInputOutput, context: __SerdeContext): any => {
  return take(input, {
    sparseBooleanMap: (_) => se_SparseBooleanMap(_, context),
    sparseNumberMap: (_) => se_SparseNumberMap(_, context),
    sparseSetMap: (_) => se_SparseSetMap(_, context),
    sparseStringMap: (_) => se_SparseStringMap(_, context),
    sparseStructMap: (_) => se_SparseStructMap(_, context),
  });
};

/**
 * serializeRpcv2cborSimpleScalarStructure
 */
const se_SimpleScalarStructure = (input: SimpleScalarStructure, context: __SerdeContext): any => {
  return take(input, {
    blobValue: [],
    byteValue: [],
    doubleValue: [],
    falseBooleanValue: [],
    floatValue: [],
    integerValue: [],
    longValue: [],
    shortValue: [],
    stringValue: [],
    trueBooleanValue: [],
  });
};

// se_SimpleStructure omitted.

/**
 * serializeRpcv2cborSparseBooleanMap
 */
const se_SparseBooleanMap = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = value;
    } else {
      acc[key] = null as any;
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborSparseNullsOperationInputOutput
 */
const se_SparseNullsOperationInputOutput = (input: SparseNullsOperationInputOutput, context: __SerdeContext): any => {
  return take(input, {
    sparseStringList: (_) => se_SparseStringList(_, context),
    sparseStringMap: (_) => se_SparseStringMap(_, context),
  });
};

/**
 * serializeRpcv2cborSparseNumberMap
 */
const se_SparseNumberMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = value;
    } else {
      acc[key] = null as any;
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborSparseSetMap
 */
const se_SparseSetMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = _json(value);
    } else {
      acc[key] = null as any;
    }

    return acc;
  }, {});
};

/**
 * serializeRpcv2cborSparseStructMap
 */
const se_SparseStructMap = (input: Record<string, GreetingStruct>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = _json(value);
    } else {
      acc[key] = null as any;
    }

    return acc;
  }, {});
};

// se_StructureList omitted.

// se_StructureListMember omitted.

// se_TestStringList omitted.

// se_TestStringMap omitted.

/**
 * serializeRpcv2cborBlobList
 */
const se_BlobList = (input: Uint8Array[], context: __SerdeContext): any => {
  return input.filter((e: any) => e != null);
};

// se_BooleanList omitted.

// se_FooEnumList omitted.

// se_GreetingStruct omitted.

// se_IntegerEnumList omitted.

// se_IntegerList omitted.

// se_NestedStringList omitted.

/**
 * serializeRpcv2cborSparseStringList
 */
const se_SparseStringList = (input: string[], context: __SerdeContext): any => {
  return input;
};

/**
 * serializeRpcv2cborSparseStringMap
 */
const se_SparseStringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key] = value;
    } else {
      acc[key] = null as any;
    }

    return acc;
  }, {});
};

// se_StringList omitted.

// se_StringSet omitted.

/**
 * serializeRpcv2cborTimestampList
 */
const se_TimestampList = (input: Date[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __dateToTag(entry);
    });
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_ComplexError omitted.

// de_ComplexNestedErrorData omitted.

// de_DenseBooleanMap omitted.

// de_DenseNumberMap omitted.

// de_DenseSetMap omitted.

// de_DenseStringMap omitted.

// de_DenseStructMap omitted.

// de_EmptyStructure omitted.

/**
 * deserializeRpcv2cborFloat16Output
 */
const de_Float16Output = (output: any, context: __SerdeContext): Float16Output => {
  return take(output, {
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeRpcv2cborFractionalSecondsOutput
 */
const de_FractionalSecondsOutput = (output: any, context: __SerdeContext): FractionalSecondsOutput => {
  return take(output, {
    datetime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
  }) as any;
};

// de_GreetingWithErrorsOutput omitted.

// de_InvalidGreeting omitted.

/**
 * deserializeRpcv2cborOperationWithDefaultsOutput
 */
const de_OperationWithDefaultsOutput = (output: any, context: __SerdeContext): OperationWithDefaultsOutput => {
  return take(output, {
    defaultBlob: [],
    defaultBoolean: __expectBoolean,
    defaultByte: __expectByte,
    defaultDouble: __limitedParseDouble,
    defaultEnum: __expectString,
    defaultFloat: __limitedParseFloat32,
    defaultIntEnum: __expectInt32,
    defaultInteger: __expectInt32,
    defaultList: _json,
    defaultLong: __expectLong,
    defaultMap: _json,
    defaultShort: __expectShort,
    defaultString: __expectString,
    defaultTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    emptyBlob: [],
    emptyString: __expectString,
    falseBoolean: __expectBoolean,
    zeroByte: __expectByte,
    zeroDouble: __limitedParseDouble,
    zeroFloat: __limitedParseFloat32,
    zeroInteger: __expectInt32,
    zeroLong: __expectLong,
    zeroShort: __expectShort,
  }) as any;
};

/**
 * deserializeRpcv2cborRecursiveShapesInputOutput
 */
const de_RecursiveShapesInputOutput = (output: any, context: __SerdeContext): RecursiveShapesInputOutput => {
  return take(output, {
    nested: (_: any) => de_RecursiveShapesInputOutputNested1(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborRecursiveShapesInputOutputNested1
 */
const de_RecursiveShapesInputOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested1 => {
  return take(output, {
    foo: __expectString,
    nested: (_: any) => de_RecursiveShapesInputOutputNested2(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborRecursiveShapesInputOutputNested2
 */
const de_RecursiveShapesInputOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveShapesInputOutputNested2 => {
  return take(output, {
    bar: __expectString,
    recursiveMember: (_: any) => de_RecursiveShapesInputOutputNested1(_, context),
  }) as any;
};

// de_RpcV2CborDenseMapsInputOutput omitted.

/**
 * deserializeRpcv2cborRpcV2CborListInputOutput
 */
const de_RpcV2CborListInputOutput = (output: any, context: __SerdeContext): RpcV2CborListInputOutput => {
  return take(output, {
    blobList: (_: any) => de_BlobList(_, context),
    booleanList: _json,
    enumList: _json,
    intEnumList: _json,
    integerList: _json,
    nestedStringList: _json,
    stringList: _json,
    stringSet: _json,
    structureList: _json,
    timestampList: (_: any) => de_TimestampList(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborRpcV2CborSparseMapsInputOutput
 */
const de_RpcV2CborSparseMapsInputOutput = (output: any, context: __SerdeContext): RpcV2CborSparseMapsInputOutput => {
  return take(output, {
    sparseBooleanMap: (_: any) => de_SparseBooleanMap(_, context),
    sparseNumberMap: (_: any) => de_SparseNumberMap(_, context),
    sparseSetMap: (_: any) => de_SparseSetMap(_, context),
    sparseStringMap: (_: any) => de_SparseStringMap(_, context),
    sparseStructMap: (_: any) => de_SparseStructMap(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborSimpleScalarStructure
 */
const de_SimpleScalarStructure = (output: any, context: __SerdeContext): SimpleScalarStructure => {
  return take(output, {
    blobValue: [],
    byteValue: __expectByte,
    doubleValue: __limitedParseDouble,
    falseBooleanValue: __expectBoolean,
    floatValue: __limitedParseFloat32,
    integerValue: __expectInt32,
    longValue: __expectLong,
    shortValue: __expectShort,
    stringValue: __expectString,
    trueBooleanValue: __expectBoolean,
  }) as any;
};

// de_SimpleStructure omitted.

/**
 * deserializeRpcv2cborSparseBooleanMap
 */
const de_SparseBooleanMap = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = __expectBoolean(value) as any;
    } else {
      acc[key as string] = null as any;
    }
    return acc;
  }, {} as Record<string, boolean>);
};

/**
 * deserializeRpcv2cborSparseNullsOperationInputOutput
 */
const de_SparseNullsOperationInputOutput = (output: any, context: __SerdeContext): SparseNullsOperationInputOutput => {
  return take(output, {
    sparseStringList: (_: any) => de_SparseStringList(_, context),
    sparseStringMap: (_: any) => de_SparseStringMap(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborSparseNumberMap
 */
const de_SparseNumberMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = __expectInt32(value) as any;
    } else {
      acc[key as string] = null as any;
    }
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeRpcv2cborSparseSetMap
 */
const de_SparseSetMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = _json(value);
    } else {
      acc[key as string] = null as any;
    }
    return acc;
  }, {} as Record<string, string[]>);
};

/**
 * deserializeRpcv2cborSparseStructMap
 */
const de_SparseStructMap = (output: any, context: __SerdeContext): Record<string, GreetingStruct> => {
  return Object.entries(output).reduce((acc: Record<string, GreetingStruct>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = _json(value);
    } else {
      acc[key as string] = null as any;
    }
    return acc;
  }, {} as Record<string, GreetingStruct>);
};

// de_StructureList omitted.

// de_StructureListMember omitted.

// de_TestStringList omitted.

// de_TestStringMap omitted.

/**
 * deserializeRpcv2cborBlobList
 */
const de_BlobList = (output: any, context: __SerdeContext): Uint8Array[] => {
  const collection = (output || []).filter((e: any) => e != null);
  return collection;
};

// de_BooleanList omitted.

// de_FooEnumList omitted.

// de_GreetingStruct omitted.

// de_IntegerEnumList omitted.

// de_IntegerList omitted.

// de_NestedStringList omitted.

/**
 * deserializeRpcv2cborSparseStringList
 */
const de_SparseStringList = (output: any, context: __SerdeContext): string[] => {
  const collection = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
  return collection;
};

/**
 * deserializeRpcv2cborSparseStringMap
 */
const de_SparseStringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = __expectString(value) as any;
    } else {
      acc[key as string] = null as any;
    }
    return acc;
  }, {} as Record<string, string>);
};

// de_StringList omitted.

// de_StringSet omitted.

/**
 * deserializeRpcv2cborTimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(entry));
    });
  return collection;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

const throwDefaultError = withBaseException(__BaseException);
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/cbor",
  "smithy-protocol": "rpc-v2-cbor",
  accept: "application/cbor",
};
