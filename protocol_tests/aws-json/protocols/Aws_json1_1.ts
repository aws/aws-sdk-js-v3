import {
  EmptyOperationCommandInput,
  EmptyOperationCommandOutput
} from "../commands/EmptyOperationCommand";
import {
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput
} from "../commands/KitchenSinkOperationCommand";
import {
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput
} from "../commands/OperationWithOptionalInputOutputCommand";
import {
  EmptyStruct,
  ErrorWithMembers,
  ErrorWithoutMembers,
  KitchenSink,
  SimpleStruct,
  StructWithLocationName
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1EmptyOperationCommand = async (
  input: EmptyOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "JsonProtocol.EmptyOperation"
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const serializeAws_json1_1KitchenSinkOperationCommand = async (
  input: KitchenSinkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "JsonProtocol.KitchenSinkOperation"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1KitchenSink(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1OperationWithOptionalInputOutputCommand = async (
  input: OperationWithOptionalInputOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "JsonProtocol.OperationWithOptionalInputOutput"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SimpleStruct(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1EmptyOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EmptyOperationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EmptyOperationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EmptyOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
};

export const deserializeAws_json1_1KitchenSinkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<KitchenSinkOperationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1KitchenSinkOperationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1KitchenSink(data, context);
  const response: KitchenSinkOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "KitchenSink",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1KitchenSinkOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<KitchenSinkOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ErrorWithMembers":
    case "aws.protocoltests.json#ErrorWithMembers":
      response = {
        ...(await deserializeAws_json1_1ErrorWithMembersResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ErrorWithoutMembers":
    case "aws.protocoltests.json#ErrorWithoutMembers":
      response = {
        ...(await deserializeAws_json1_1ErrorWithoutMembersResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1OperationWithOptionalInputOutputCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SimpleStruct(data, context);
  const response: OperationWithOptionalInputOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimpleStruct",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1OperationWithOptionalInputOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OperationWithOptionalInputOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
};

const deserializeAws_json1_1ErrorWithMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ErrorWithMembers(
    body,
    context
  );
  const contents: ErrorWithMembers = {
    name: "ErrorWithMembers",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ErrorWithoutMembersResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ErrorWithoutMembers> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ErrorWithoutMembers(
    body,
    context
  );
  const contents: ErrorWithoutMembers = {
    name: "ErrorWithoutMembers",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1EmptyStruct = (
  input: EmptyStruct,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1KitchenSink = (
  input: KitchenSink,
  context: __SerdeContext
): any => {
  return {
    ...(input.Blob !== undefined && {
      Blob: context.base64Encoder(input.Blob)
    }),
    ...(input.Boolean !== undefined && { Boolean: input.Boolean }),
    ...(input.Double !== undefined && { Double: input.Double }),
    ...(input.EmptyStruct !== undefined && {
      EmptyStruct: serializeAws_json1_1EmptyStruct(input.EmptyStruct, context)
    }),
    ...(input.Float !== undefined && { Float: input.Float }),
    ...(input.HttpdateTimestamp !== undefined && {
      HttpdateTimestamp: __dateToUtcString(input.HttpdateTimestamp)
    }),
    ...(input.Integer !== undefined && { Integer: input.Integer }),
    ...(input.Iso8601Timestamp !== undefined && {
      Iso8601Timestamp: input.Iso8601Timestamp.toISOString().split(".")[0] + "Z"
    }),
    ...(input.JsonValue !== undefined && {
      JsonValue: __LazyJsonString.fromObject(input.JsonValue)
    }),
    ...(input.ListOfLists !== undefined && {
      ListOfLists: serializeAws_json1_1ListOfListOfStrings(
        input.ListOfLists,
        context
      )
    }),
    ...(input.ListOfMapsOfStrings !== undefined && {
      ListOfMapsOfStrings: serializeAws_json1_1ListOfMapsOfStrings(
        input.ListOfMapsOfStrings,
        context
      )
    }),
    ...(input.ListOfStrings !== undefined && {
      ListOfStrings: serializeAws_json1_1ListOfStrings(
        input.ListOfStrings,
        context
      )
    }),
    ...(input.ListOfStructs !== undefined && {
      ListOfStructs: serializeAws_json1_1ListOfStructs(
        input.ListOfStructs,
        context
      )
    }),
    ...(input.Long !== undefined && { Long: input.Long }),
    ...(input.MapOfListsOfStrings !== undefined && {
      MapOfListsOfStrings: serializeAws_json1_1MapOfListsOfStrings(
        input.MapOfListsOfStrings,
        context
      )
    }),
    ...(input.MapOfMaps !== undefined && {
      MapOfMaps: serializeAws_json1_1MapOfMapOfStrings(input.MapOfMaps, context)
    }),
    ...(input.MapOfStrings !== undefined && {
      MapOfStrings: serializeAws_json1_1MapOfStrings(
        input.MapOfStrings,
        context
      )
    }),
    ...(input.MapOfStructs !== undefined && {
      MapOfStructs: serializeAws_json1_1MapOfStructs(
        input.MapOfStructs,
        context
      )
    }),
    ...(input.RecursiveList !== undefined && {
      RecursiveList: serializeAws_json1_1ListOfKitchenSinks(
        input.RecursiveList,
        context
      )
    }),
    ...(input.RecursiveMap !== undefined && {
      RecursiveMap: serializeAws_json1_1MapOfKitchenSinks(
        input.RecursiveMap,
        context
      )
    }),
    ...(input.RecursiveStruct !== undefined && {
      RecursiveStruct: serializeAws_json1_1KitchenSink(
        input.RecursiveStruct,
        context
      )
    }),
    ...(input.SimpleStruct !== undefined && {
      SimpleStruct: serializeAws_json1_1SimpleStruct(
        input.SimpleStruct,
        context
      )
    }),
    ...(input.String !== undefined && { String: input.String }),
    ...(input.StructWithLocationName !== undefined && {
      StructWithLocationName: serializeAws_json1_1StructWithLocationName(
        input.StructWithLocationName,
        context
      )
    }),
    ...(input.Timestamp !== undefined && {
      Timestamp: Math.round(input.Timestamp.getTime() / 1000)
    }),
    ...(input.UnixTimestamp !== undefined && {
      UnixTimestamp: Math.round(input.UnixTimestamp.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1ListOfKitchenSinks = (
  input: KitchenSink[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1KitchenSink(entry, context));
};

const serializeAws_json1_1ListOfListOfStrings = (
  input: string[][],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ListOfStrings(entry, context));
};

const serializeAws_json1_1ListOfMapsOfStrings = (
  input: { [key: string]: string }[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1MapOfStrings(entry, context));
};

const serializeAws_json1_1ListOfStrings = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListOfStructs = (
  input: SimpleStruct[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1SimpleStruct(entry, context));
};

const serializeAws_json1_1MapOfKitchenSinks = (
  input: { [key: string]: KitchenSink },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: KitchenSink }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1KitchenSink(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1MapOfListsOfStrings = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1ListOfStrings(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1MapOfMapOfStrings = (
  input: { [key: string]: { [key: string]: string } },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: { [key: string]: string } },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_1MapOfStrings(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1MapOfStrings = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1MapOfStructs = (
  input: { [key: string]: SimpleStruct },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: SimpleStruct }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1SimpleStruct(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1SimpleStruct = (
  input: SimpleStruct,
  context: __SerdeContext
): any => {
  return {
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1StructWithLocationName = (
  input: StructWithLocationName,
  context: __SerdeContext
): any => {
  return {
    ...(input.Value !== undefined && { RenamedMember: input.Value })
  };
};

const deserializeAws_json1_1EmptyStruct = (
  output: any,
  context: __SerdeContext
): EmptyStruct => {
  return {
    __type: "EmptyStruct"
  } as any;
};

const deserializeAws_json1_1ErrorWithMembers = (
  output: any,
  context: __SerdeContext
): ErrorWithMembers => {
  return {
    __type: "ErrorWithMembers",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    ComplexData:
      output.ComplexData !== undefined && output.ComplexData !== null
        ? deserializeAws_json1_1KitchenSink(output.ComplexData, context)
        : undefined,
    IntegerField:
      output.IntegerField !== undefined && output.IntegerField !== null
        ? output.IntegerField
        : undefined,
    ListField:
      output.ListField !== undefined && output.ListField !== null
        ? deserializeAws_json1_1ListOfStrings(output.ListField, context)
        : undefined,
    MapField:
      output.MapField !== undefined && output.MapField !== null
        ? deserializeAws_json1_1MapOfStrings(output.MapField, context)
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    StringField:
      output.StringField !== undefined && output.StringField !== null
        ? output.StringField
        : undefined
  } as any;
};

const deserializeAws_json1_1ErrorWithoutMembers = (
  output: any,
  context: __SerdeContext
): ErrorWithoutMembers => {
  return {
    __type: "ErrorWithoutMembers"
  } as any;
};

const deserializeAws_json1_1KitchenSink = (
  output: any,
  context: __SerdeContext
): KitchenSink => {
  return {
    __type: "KitchenSink",
    Blob:
      output.Blob !== undefined && output.Blob !== null
        ? context.base64Decoder(output.Blob)
        : undefined,
    Boolean:
      output.Boolean !== undefined && output.Boolean !== null
        ? output.Boolean
        : undefined,
    Double:
      output.Double !== undefined && output.Double !== null
        ? output.Double
        : undefined,
    EmptyStruct:
      output.EmptyStruct !== undefined && output.EmptyStruct !== null
        ? deserializeAws_json1_1EmptyStruct(output.EmptyStruct, context)
        : undefined,
    Float:
      output.Float !== undefined && output.Float !== null
        ? output.Float
        : undefined,
    HttpdateTimestamp:
      output.HttpdateTimestamp !== undefined &&
      output.HttpdateTimestamp !== null
        ? new Date(Math.round(output.HttpdateTimestamp * 1000))
        : undefined,
    Integer:
      output.Integer !== undefined && output.Integer !== null
        ? output.Integer
        : undefined,
    Iso8601Timestamp:
      output.Iso8601Timestamp !== undefined && output.Iso8601Timestamp !== null
        ? new Date(Math.round(output.Iso8601Timestamp * 1000))
        : undefined,
    JsonValue:
      output.JsonValue !== undefined && output.JsonValue !== null
        ? new __LazyJsonString(output.JsonValue)
        : undefined,
    ListOfLists:
      output.ListOfLists !== undefined && output.ListOfLists !== null
        ? deserializeAws_json1_1ListOfListOfStrings(output.ListOfLists, context)
        : undefined,
    ListOfMapsOfStrings:
      output.ListOfMapsOfStrings !== undefined &&
      output.ListOfMapsOfStrings !== null
        ? deserializeAws_json1_1ListOfMapsOfStrings(
            output.ListOfMapsOfStrings,
            context
          )
        : undefined,
    ListOfStrings:
      output.ListOfStrings !== undefined && output.ListOfStrings !== null
        ? deserializeAws_json1_1ListOfStrings(output.ListOfStrings, context)
        : undefined,
    ListOfStructs:
      output.ListOfStructs !== undefined && output.ListOfStructs !== null
        ? deserializeAws_json1_1ListOfStructs(output.ListOfStructs, context)
        : undefined,
    Long:
      output.Long !== undefined && output.Long !== null
        ? output.Long
        : undefined,
    MapOfListsOfStrings:
      output.MapOfListsOfStrings !== undefined &&
      output.MapOfListsOfStrings !== null
        ? deserializeAws_json1_1MapOfListsOfStrings(
            output.MapOfListsOfStrings,
            context
          )
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
        ? deserializeAws_json1_1ListOfKitchenSinks(
            output.RecursiveList,
            context
          )
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
    String:
      output.String !== undefined && output.String !== null
        ? output.String
        : undefined,
    StructWithLocationName:
      output.StructWithLocationName !== undefined &&
      output.StructWithLocationName !== null
        ? deserializeAws_json1_1StructWithLocationName(
            output.StructWithLocationName,
            context
          )
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    UnixTimestamp:
      output.UnixTimestamp !== undefined && output.UnixTimestamp !== null
        ? new Date(Math.round(output.UnixTimestamp * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ListOfKitchenSinks = (
  output: any,
  context: __SerdeContext
): KitchenSink[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KitchenSink(entry, context)
  );
};

const deserializeAws_json1_1ListOfListOfStrings = (
  output: any,
  context: __SerdeContext
): string[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListOfStrings(entry, context)
  );
};

const deserializeAws_json1_1ListOfMapsOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string }[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MapOfStrings(entry, context)
  );
};

const deserializeAws_json1_1ListOfStrings = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListOfStructs = (
  output: any,
  context: __SerdeContext
): SimpleStruct[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SimpleStruct(entry, context)
  );
};

const deserializeAws_json1_1MapOfKitchenSinks = (
  output: any,
  context: __SerdeContext
): { [key: string]: KitchenSink } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: KitchenSink }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1KitchenSink(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1MapOfListsOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1ListOfStrings(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1MapOfMapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: string } } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: { [key: string]: string } },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_json1_1MapOfStrings(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1MapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1MapOfStructs = (
  output: any,
  context: __SerdeContext
): { [key: string]: SimpleStruct } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: SimpleStruct }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1SimpleStruct(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1SimpleStruct = (
  output: any,
  context: __SerdeContext
): SimpleStruct => {
  return {
    __type: "SimpleStruct",
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1StructWithLocationName = (
  output: any,
  context: __SerdeContext
): StructWithLocationName => {
  return {
    __type: "StructWithLocationName",
    Value:
      output.RenamedMember !== undefined && output.RenamedMember !== null
        ? output.RenamedMember
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
