import {
  EmptyOperationCommandInput,
  EmptyOperationCommandOutput,
} from "../commands/EmptyOperationCommand";
import {
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
} from "../commands/KitchenSinkOperationCommand";
import {
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput,
} from "../commands/OperationWithOptionalInputOutputCommand";
import {
  EmptyStruct,
  ErrorWithMembers,
  ErrorWithoutMembers,
  KitchenSink,
  SimpleStruct,
  StructWithLocationName,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_json1_1EmptyOperationCommand(
  input: EmptyOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "JsonProtocol.EmptyOperation";
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}

export async function serializeAws_json1_1KitchenSinkOperationCommand(
  input: KitchenSinkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "JsonProtocol.KitchenSinkOperation";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1KitchenSink(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1OperationWithOptionalInputOutputCommand(
  input: OperationWithOptionalInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "JsonProtocol.OperationWithOptionalInputOutput";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SimpleStruct(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1EmptyOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EmptyOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EmptyOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EmptyOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<EmptyOperationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1KitchenSinkOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<KitchenSinkOperationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1KitchenSinkOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1KitchenSink(data, context);
  const response: KitchenSinkOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "KitchenSink",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1KitchenSinkOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<KitchenSinkOperationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ErrorWithMembers":
    case "aws.protocols.tests.json#ErrorWithMembers":
      response = {
        ...await deserializeAws_json1_1ErrorWithMembersResponse(parsedOutput, context),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      }
      break;
    case "ErrorWithoutMembers":
    case "aws.protocols.tests.json#ErrorWithoutMembers":
      response = {
        ...await deserializeAws_json1_1ErrorWithoutMembersResponse(parsedOutput, context),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      }
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1OperationWithOptionalInputOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithOptionalInputOutputCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1OperationWithOptionalInputOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1SimpleStruct(data, context);
  const response: OperationWithOptionalInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimpleStruct",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1OperationWithOptionalInputOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<OperationWithOptionalInputOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1ErrorWithMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithMembers> => {
  const body = parsedOutput.body
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
  const body = parsedOutput.body
  const deserialized: any = deserializeAws_json1_1ErrorWithoutMembers(body, context);
  const contents: ErrorWithoutMembers = {
    name: "ErrorWithoutMembers",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1EmptyStruct = (
  input: EmptyStruct,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1KitchenSink = (
  input: KitchenSink,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Blob !== undefined) {
    bodyParams['Blob'] = context.base64Encoder(input.Blob);
  }
  if (input.Boolean !== undefined) {
    bodyParams['Boolean'] = input.Boolean;
  }
  if (input.Double !== undefined) {
    bodyParams['Double'] = input.Double;
  }
  if (input.EmptyStruct !== undefined) {
    bodyParams['EmptyStruct'] = serializeAws_json1_1EmptyStruct(input.EmptyStruct, context);
  }
  if (input.Float !== undefined) {
    bodyParams['Float'] = input.Float;
  }
  if (input.HttpdateTimestamp !== undefined) {
    bodyParams['HttpdateTimestamp'] = __dateToUtcString(input.HttpdateTimestamp);
  }
  if (input.Integer !== undefined) {
    bodyParams['Integer'] = input.Integer;
  }
  if (input.Iso8601Timestamp !== undefined) {
    bodyParams['Iso8601Timestamp'] = (input.Iso8601Timestamp.toISOString().split('.')[0]+"Z");
  }
  if (input.JsonValue !== undefined) {
    bodyParams['JsonValue'] = __LazyJsonString.fromObject(input.JsonValue);
  }
  if (input.ListOfLists !== undefined) {
    bodyParams['ListOfLists'] = serializeAws_json1_1ListOfListOfStrings(input.ListOfLists, context);
  }
  if (input.ListOfMapsOfStrings !== undefined) {
    bodyParams['ListOfMapsOfStrings'] = serializeAws_json1_1ListOfMapsOfStrings(input.ListOfMapsOfStrings, context);
  }
  if (input.ListOfStrings !== undefined) {
    bodyParams['ListOfStrings'] = serializeAws_json1_1ListOfStrings(input.ListOfStrings, context);
  }
  if (input.ListOfStructs !== undefined) {
    bodyParams['ListOfStructs'] = serializeAws_json1_1ListOfStructs(input.ListOfStructs, context);
  }
  if (input.Long !== undefined) {
    bodyParams['Long'] = input.Long;
  }
  if (input.MapOfListsOfStrings !== undefined) {
    bodyParams['MapOfListsOfStrings'] = serializeAws_json1_1MapOfListsOfStrings(input.MapOfListsOfStrings, context);
  }
  if (input.MapOfMaps !== undefined) {
    bodyParams['MapOfMaps'] = serializeAws_json1_1MapOfMapOfStrings(input.MapOfMaps, context);
  }
  if (input.MapOfStrings !== undefined) {
    bodyParams['MapOfStrings'] = serializeAws_json1_1MapOfStrings(input.MapOfStrings, context);
  }
  if (input.MapOfStructs !== undefined) {
    bodyParams['MapOfStructs'] = serializeAws_json1_1MapOfStructs(input.MapOfStructs, context);
  }
  if (input.RecursiveList !== undefined) {
    bodyParams['RecursiveList'] = serializeAws_json1_1ListOfKitchenSinks(input.RecursiveList, context);
  }
  if (input.RecursiveMap !== undefined) {
    bodyParams['RecursiveMap'] = serializeAws_json1_1MapOfKitchenSinks(input.RecursiveMap, context);
  }
  if (input.RecursiveStruct !== undefined) {
    bodyParams['RecursiveStruct'] = serializeAws_json1_1KitchenSink(input.RecursiveStruct, context);
  }
  if (input.SimpleStruct !== undefined) {
    bodyParams['SimpleStruct'] = serializeAws_json1_1SimpleStruct(input.SimpleStruct, context);
  }
  if (input.String !== undefined) {
    bodyParams['String'] = input.String;
  }
  if (input.StructWithLocationName !== undefined) {
    bodyParams['StructWithLocationName'] = serializeAws_json1_1StructWithLocationName(input.StructWithLocationName, context);
  }
  if (input.Timestamp !== undefined) {
    bodyParams['Timestamp'] = Math.round(input.Timestamp.getTime() / 1000);
  }
  if (input.UnixTimestamp !== undefined) {
    bodyParams['UnixTimestamp'] = Math.round(input.UnixTimestamp.getTime() / 1000);
  }
  return bodyParams;
}

const serializeAws_json1_1ListOfKitchenSinks = (
  input: Array<KitchenSink>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1KitchenSink(entry, context));
  }
  return contents;
}

const serializeAws_json1_1ListOfListOfStrings = (
  input: Array<Array<string>>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ListOfStrings(entry, context));
  }
  return contents;
}

const serializeAws_json1_1ListOfMapsOfStrings = (
  input: Array<{ [key: string]: string }>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1MapOfStrings(entry, context));
  }
  return contents;
}

const serializeAws_json1_1ListOfStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
}

const serializeAws_json1_1ListOfStructs = (
  input: Array<SimpleStruct>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SimpleStruct(entry, context));
  }
  return contents;
}

const serializeAws_json1_1MapOfKitchenSinks = (
  input: { [key: string]: KitchenSink },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1KitchenSink(input[key], context);
  });
  return mapParams;
}

const serializeAws_json1_1MapOfListsOfStrings = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1ListOfStrings(input[key], context);
  });
  return mapParams;
}

const serializeAws_json1_1MapOfMapOfStrings = (
  input: { [key: string]: { [key: string]: string } },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1MapOfStrings(input[key], context);
  });
  return mapParams;
}

const serializeAws_json1_1MapOfStrings = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
}

const serializeAws_json1_1MapOfStructs = (
  input: { [key: string]: SimpleStruct },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1SimpleStruct(input[key], context);
  });
  return mapParams;
}

const serializeAws_json1_1SimpleStruct = (
  input: SimpleStruct,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_json1_1StructWithLocationName = (
  input: StructWithLocationName,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Value !== undefined) {
    bodyParams['RenamedMember'] = input.Value;
  }
  return bodyParams;
}

const deserializeAws_json1_1EmptyStruct = (
  output: any,
  context: __SerdeContext
): EmptyStruct => {
  let contents: any = {
    __type: "EmptyStruct",
  };
  return contents;
}

const deserializeAws_json1_1ErrorWithMembers = (
  output: any,
  context: __SerdeContext
): ErrorWithMembers => {
  let contents: any = {
    __type: "ErrorWithMembers",
    Code: undefined,
    ComplexData: undefined,
    IntegerField: undefined,
    ListField: undefined,
    MapField: undefined,
    Message: undefined,
    StringField: undefined,
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.ComplexData !== undefined && output.ComplexData !== null) {
    contents.ComplexData = deserializeAws_json1_1KitchenSink(output.ComplexData, context);
  }
  if (output.IntegerField !== undefined && output.IntegerField !== null) {
    contents.IntegerField = output.IntegerField;
  }
  if (output.ListField !== undefined && output.ListField !== null) {
    contents.ListField = deserializeAws_json1_1ListOfStrings(output.ListField, context);
  }
  if (output.MapField !== undefined && output.MapField !== null) {
    contents.MapField = deserializeAws_json1_1MapOfStrings(output.MapField, context);
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.StringField !== undefined && output.StringField !== null) {
    contents.StringField = output.StringField;
  }
  return contents;
}

const deserializeAws_json1_1ErrorWithoutMembers = (
  output: any,
  context: __SerdeContext
): ErrorWithoutMembers => {
  let contents: any = {
    __type: "ErrorWithoutMembers",
  };
  return contents;
}

const deserializeAws_json1_1KitchenSink = (
  output: any,
  context: __SerdeContext
): KitchenSink => {
  let contents: any = {
    __type: "KitchenSink",
    Blob: undefined,
    Boolean: undefined,
    Double: undefined,
    EmptyStruct: undefined,
    Float: undefined,
    HttpdateTimestamp: undefined,
    Integer: undefined,
    Iso8601Timestamp: undefined,
    JsonValue: undefined,
    ListOfLists: undefined,
    ListOfMapsOfStrings: undefined,
    ListOfStrings: undefined,
    ListOfStructs: undefined,
    Long: undefined,
    MapOfListsOfStrings: undefined,
    MapOfMaps: undefined,
    MapOfStrings: undefined,
    MapOfStructs: undefined,
    RecursiveList: undefined,
    RecursiveMap: undefined,
    RecursiveStruct: undefined,
    SimpleStruct: undefined,
    String: undefined,
    StructWithLocationName: undefined,
    Timestamp: undefined,
    UnixTimestamp: undefined,
  };
  if (output.Blob !== undefined && output.Blob !== null) {
    contents.Blob = context.base64Decoder(output.Blob);
  }
  if (output.Boolean !== undefined && output.Boolean !== null) {
    contents.Boolean = output.Boolean;
  }
  if (output.Double !== undefined && output.Double !== null) {
    contents.Double = output.Double;
  }
  if (output.EmptyStruct !== undefined && output.EmptyStruct !== null) {
    contents.EmptyStruct = deserializeAws_json1_1EmptyStruct(output.EmptyStruct, context);
  }
  if (output.Float !== undefined && output.Float !== null) {
    contents.Float = output.Float;
  }
  if (output.HttpdateTimestamp !== undefined && output.HttpdateTimestamp !== null) {
    contents.HttpdateTimestamp = new Date(Math.round(output.HttpdateTimestamp * 1000));
  }
  if (output.Integer !== undefined && output.Integer !== null) {
    contents.Integer = output.Integer;
  }
  if (output.Iso8601Timestamp !== undefined && output.Iso8601Timestamp !== null) {
    contents.Iso8601Timestamp = new Date(Math.round(output.Iso8601Timestamp * 1000));
  }
  if (output.JsonValue !== undefined && output.JsonValue !== null) {
    contents.JsonValue = new __LazyJsonString(output.JsonValue);
  }
  if (output.ListOfLists !== undefined && output.ListOfLists !== null) {
    contents.ListOfLists = deserializeAws_json1_1ListOfListOfStrings(output.ListOfLists, context);
  }
  if (output.ListOfMapsOfStrings !== undefined && output.ListOfMapsOfStrings !== null) {
    contents.ListOfMapsOfStrings = deserializeAws_json1_1ListOfMapsOfStrings(output.ListOfMapsOfStrings, context);
  }
  if (output.ListOfStrings !== undefined && output.ListOfStrings !== null) {
    contents.ListOfStrings = deserializeAws_json1_1ListOfStrings(output.ListOfStrings, context);
  }
  if (output.ListOfStructs !== undefined && output.ListOfStructs !== null) {
    contents.ListOfStructs = deserializeAws_json1_1ListOfStructs(output.ListOfStructs, context);
  }
  if (output.Long !== undefined && output.Long !== null) {
    contents.Long = output.Long;
  }
  if (output.MapOfListsOfStrings !== undefined && output.MapOfListsOfStrings !== null) {
    contents.MapOfListsOfStrings = deserializeAws_json1_1MapOfListsOfStrings(output.MapOfListsOfStrings, context);
  }
  if (output.MapOfMaps !== undefined && output.MapOfMaps !== null) {
    contents.MapOfMaps = deserializeAws_json1_1MapOfMapOfStrings(output.MapOfMaps, context);
  }
  if (output.MapOfStrings !== undefined && output.MapOfStrings !== null) {
    contents.MapOfStrings = deserializeAws_json1_1MapOfStrings(output.MapOfStrings, context);
  }
  if (output.MapOfStructs !== undefined && output.MapOfStructs !== null) {
    contents.MapOfStructs = deserializeAws_json1_1MapOfStructs(output.MapOfStructs, context);
  }
  if (output.RecursiveList !== undefined && output.RecursiveList !== null) {
    contents.RecursiveList = deserializeAws_json1_1ListOfKitchenSinks(output.RecursiveList, context);
  }
  if (output.RecursiveMap !== undefined && output.RecursiveMap !== null) {
    contents.RecursiveMap = deserializeAws_json1_1MapOfKitchenSinks(output.RecursiveMap, context);
  }
  if (output.RecursiveStruct !== undefined && output.RecursiveStruct !== null) {
    contents.RecursiveStruct = deserializeAws_json1_1KitchenSink(output.RecursiveStruct, context);
  }
  if (output.SimpleStruct !== undefined && output.SimpleStruct !== null) {
    contents.SimpleStruct = deserializeAws_json1_1SimpleStruct(output.SimpleStruct, context);
  }
  if (output.String !== undefined && output.String !== null) {
    contents.String = output.String;
  }
  if (output.StructWithLocationName !== undefined && output.StructWithLocationName !== null) {
    contents.StructWithLocationName = deserializeAws_json1_1StructWithLocationName(output.StructWithLocationName, context);
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  if (output.UnixTimestamp !== undefined && output.UnixTimestamp !== null) {
    contents.UnixTimestamp = new Date(Math.round(output.UnixTimestamp * 1000));
  }
  return contents;
}

const deserializeAws_json1_1ListOfKitchenSinks = (
  output: any,
  context: __SerdeContext
): Array<KitchenSink> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KitchenSink(entry, context)
  );
}

const deserializeAws_json1_1ListOfListOfStrings = (
  output: any,
  context: __SerdeContext
): Array<Array<string>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListOfStrings(entry, context)
  );
}

const deserializeAws_json1_1ListOfMapsOfStrings = (
  output: any,
  context: __SerdeContext
): Array<{ [key: string]: string }> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MapOfStrings(entry, context)
  );
}

const deserializeAws_json1_1ListOfStrings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1ListOfStructs = (
  output: any,
  context: __SerdeContext
): Array<SimpleStruct> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SimpleStruct(entry, context)
  );
}

const deserializeAws_json1_1MapOfKitchenSinks = (
  output: any,
  context: __SerdeContext
): { [key: string]: KitchenSink } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1KitchenSink(output[key], context);
  });
  return mapParams;
}

const deserializeAws_json1_1MapOfListsOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<string> } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1ListOfStrings(output[key], context);
  });
  return mapParams;
}

const deserializeAws_json1_1MapOfMapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: string } } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1MapOfStrings(output[key], context);
  });
  return mapParams;
}

const deserializeAws_json1_1MapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
}

const deserializeAws_json1_1MapOfStructs = (
  output: any,
  context: __SerdeContext
): { [key: string]: SimpleStruct } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1SimpleStruct(output[key], context);
  });
  return mapParams;
}

const deserializeAws_json1_1SimpleStruct = (
  output: any,
  context: __SerdeContext
): SimpleStruct => {
  let contents: any = {
    __type: "SimpleStruct",
    Value: undefined,
  };
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
}

const deserializeAws_json1_1StructWithLocationName = (
  output: any,
  context: __SerdeContext
): StructWithLocationName => {
  let contents: any = {
    __type: "StructWithLocationName",
    Value: undefined,
  };
  if (output.RenamedMember !== undefined && output.RenamedMember !== null) {
    contents.Value = output.RenamedMember;
  }
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any, context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => {
  return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any,
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
