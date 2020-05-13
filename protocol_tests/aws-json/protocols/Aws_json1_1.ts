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
    case "aws.protocols.tests.json#ErrorWithMembers":
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
    case "aws.protocols.tests.json#ErrorWithoutMembers":
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
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_json1_1KitchenSink(input[key], context);
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfListsOfStrings = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_json1_1ListOfStrings(input[key], context);
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfMapOfStrings = (
  input: { [key: string]: { [key: string]: string } },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_json1_1MapOfStrings(input[key], context);
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfStrings = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_json1_1MapOfStructs = (
  input: { [key: string]: SimpleStruct },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_json1_1SimpleStruct(input[key], context);
    return acc;
  }, {});
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
  let contents: any = {
    __type: "EmptyStruct"
  };
  return contents;
};

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
    StringField: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.ComplexData !== undefined && output.ComplexData !== null) {
    contents.ComplexData = deserializeAws_json1_1KitchenSink(
      output.ComplexData,
      context
    );
  }
  if (output.IntegerField !== undefined && output.IntegerField !== null) {
    contents.IntegerField = output.IntegerField;
  }
  if (output.ListField !== undefined && output.ListField !== null) {
    contents.ListField = deserializeAws_json1_1ListOfStrings(
      output.ListField,
      context
    );
  }
  if (output.MapField !== undefined && output.MapField !== null) {
    contents.MapField = deserializeAws_json1_1MapOfStrings(
      output.MapField,
      context
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.StringField !== undefined && output.StringField !== null) {
    contents.StringField = output.StringField;
  }
  return contents;
};

const deserializeAws_json1_1ErrorWithoutMembers = (
  output: any,
  context: __SerdeContext
): ErrorWithoutMembers => {
  let contents: any = {
    __type: "ErrorWithoutMembers"
  };
  return contents;
};

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
    UnixTimestamp: undefined
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
    contents.EmptyStruct = deserializeAws_json1_1EmptyStruct(
      output.EmptyStruct,
      context
    );
  }
  if (output.Float !== undefined && output.Float !== null) {
    contents.Float = output.Float;
  }
  if (
    output.HttpdateTimestamp !== undefined &&
    output.HttpdateTimestamp !== null
  ) {
    contents.HttpdateTimestamp = new Date(
      Math.round(output.HttpdateTimestamp * 1000)
    );
  }
  if (output.Integer !== undefined && output.Integer !== null) {
    contents.Integer = output.Integer;
  }
  if (
    output.Iso8601Timestamp !== undefined &&
    output.Iso8601Timestamp !== null
  ) {
    contents.Iso8601Timestamp = new Date(
      Math.round(output.Iso8601Timestamp * 1000)
    );
  }
  if (output.JsonValue !== undefined && output.JsonValue !== null) {
    contents.JsonValue = new __LazyJsonString(output.JsonValue);
  }
  if (output.ListOfLists !== undefined && output.ListOfLists !== null) {
    contents.ListOfLists = deserializeAws_json1_1ListOfListOfStrings(
      output.ListOfLists,
      context
    );
  }
  if (
    output.ListOfMapsOfStrings !== undefined &&
    output.ListOfMapsOfStrings !== null
  ) {
    contents.ListOfMapsOfStrings = deserializeAws_json1_1ListOfMapsOfStrings(
      output.ListOfMapsOfStrings,
      context
    );
  }
  if (output.ListOfStrings !== undefined && output.ListOfStrings !== null) {
    contents.ListOfStrings = deserializeAws_json1_1ListOfStrings(
      output.ListOfStrings,
      context
    );
  }
  if (output.ListOfStructs !== undefined && output.ListOfStructs !== null) {
    contents.ListOfStructs = deserializeAws_json1_1ListOfStructs(
      output.ListOfStructs,
      context
    );
  }
  if (output.Long !== undefined && output.Long !== null) {
    contents.Long = output.Long;
  }
  if (
    output.MapOfListsOfStrings !== undefined &&
    output.MapOfListsOfStrings !== null
  ) {
    contents.MapOfListsOfStrings = deserializeAws_json1_1MapOfListsOfStrings(
      output.MapOfListsOfStrings,
      context
    );
  }
  if (output.MapOfMaps !== undefined && output.MapOfMaps !== null) {
    contents.MapOfMaps = deserializeAws_json1_1MapOfMapOfStrings(
      output.MapOfMaps,
      context
    );
  }
  if (output.MapOfStrings !== undefined && output.MapOfStrings !== null) {
    contents.MapOfStrings = deserializeAws_json1_1MapOfStrings(
      output.MapOfStrings,
      context
    );
  }
  if (output.MapOfStructs !== undefined && output.MapOfStructs !== null) {
    contents.MapOfStructs = deserializeAws_json1_1MapOfStructs(
      output.MapOfStructs,
      context
    );
  }
  if (output.RecursiveList !== undefined && output.RecursiveList !== null) {
    contents.RecursiveList = deserializeAws_json1_1ListOfKitchenSinks(
      output.RecursiveList,
      context
    );
  }
  if (output.RecursiveMap !== undefined && output.RecursiveMap !== null) {
    contents.RecursiveMap = deserializeAws_json1_1MapOfKitchenSinks(
      output.RecursiveMap,
      context
    );
  }
  if (output.RecursiveStruct !== undefined && output.RecursiveStruct !== null) {
    contents.RecursiveStruct = deserializeAws_json1_1KitchenSink(
      output.RecursiveStruct,
      context
    );
  }
  if (output.SimpleStruct !== undefined && output.SimpleStruct !== null) {
    contents.SimpleStruct = deserializeAws_json1_1SimpleStruct(
      output.SimpleStruct,
      context
    );
  }
  if (output.String !== undefined && output.String !== null) {
    contents.String = output.String;
  }
  if (
    output.StructWithLocationName !== undefined &&
    output.StructWithLocationName !== null
  ) {
    contents.StructWithLocationName = deserializeAws_json1_1StructWithLocationName(
      output.StructWithLocationName,
      context
    );
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  if (output.UnixTimestamp !== undefined && output.UnixTimestamp !== null) {
    contents.UnixTimestamp = new Date(Math.round(output.UnixTimestamp * 1000));
  }
  return contents;
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
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1KitchenSink(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfListsOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1ListOfStrings(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfMapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: string } } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1MapOfStrings(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfStrings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_json1_1MapOfStructs = (
  output: any,
  context: __SerdeContext
): { [key: string]: SimpleStruct } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1SimpleStruct(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1SimpleStruct = (
  output: any,
  context: __SerdeContext
): SimpleStruct => {
  let contents: any = {
    __type: "SimpleStruct",
    Value: undefined
  };
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1StructWithLocationName = (
  output: any,
  context: __SerdeContext
): StructWithLocationName => {
  let contents: any = {
    __type: "StructWithLocationName",
    Value: undefined
  };
  if (output.RenamedMember !== undefined && output.RenamedMember !== null) {
    contents.Value = output.RenamedMember;
  }
  return contents;
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
