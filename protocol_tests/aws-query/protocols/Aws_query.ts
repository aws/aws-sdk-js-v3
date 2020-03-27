import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "../commands/EmptyInputAndEmptyOutputCommand";
import {
  FlattenedXmlMapCommandInput,
  FlattenedXmlMapCommandOutput,
} from "../commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
} from "../commands/FlattenedXmlMapWithXmlNameCommand";
import {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "../commands/GreetingWithErrorsCommand";
import {
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
} from "../commands/IgnoresWrappingXmlNameCommand";
import {
  NestedStructuresCommandInput,
  NestedStructuresCommandOutput,
} from "../commands/NestedStructuresCommand";
import {
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
} from "../commands/NoInputAndNoOutputCommand";
import {
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput,
} from "../commands/NoInputAndOutputCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "../commands/QueryIdempotencyTokenAutoFillCommand";
import {
  QueryListsCommandInput,
  QueryListsCommandOutput,
} from "../commands/QueryListsCommand";
import {
  QueryMapsCommandInput,
  QueryMapsCommandOutput,
} from "../commands/QueryMapsCommand";
import {
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput,
} from "../commands/QueryTimestampsCommand";
import {
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput,
} from "../commands/RecursiveXmlShapesCommand";
import {
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput,
} from "../commands/SimpleInputParamsCommand";
import {
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput,
} from "../commands/SimpleScalarXmlPropertiesCommand";
import {
  XmlBlobsCommandInput,
  XmlBlobsCommandOutput,
} from "../commands/XmlBlobsCommand";
import {
  XmlEnumsCommandInput,
  XmlEnumsCommandOutput,
} from "../commands/XmlEnumsCommand";
import {
  XmlListsCommandInput,
  XmlListsCommandOutput,
} from "../commands/XmlListsCommand";
import {
  XmlMapsCommandInput,
  XmlMapsCommandOutput,
} from "../commands/XmlMapsCommand";
import {
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput,
} from "../commands/XmlMapsXmlNameCommand";
import {
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput,
} from "../commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput,
} from "../commands/XmlTimestampsCommand";
import {
  ComplexError,
  ComplexNestedErrorData,
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputOutput,
  FlattenedXmlMapOutput,
  FlattenedXmlMapWithXmlNameOutput,
  FooEnum,
  GreetingStruct,
  GreetingWithErrorsOutput,
  IgnoresWrappingXmlNameOutput,
  InvalidGreeting,
  NestedStructuresInput,
  NoInputAndOutputOutput,
  QueryIdempotencyTokenAutoFillInput,
  QueryListsInput,
  QueryMapsInput,
  QueryTimestampsInput,
  RecursiveXmlShapesOutput,
  RecursiveXmlShapesOutputNested1,
  RecursiveXmlShapesOutputNested2,
  SimpleInputParamsInput,
  SimpleScalarXmlPropertiesOutput,
  StructArg,
  StructureListMember,
  XmlBlobsOutput,
  XmlEnumsOutput,
  XmlListsOutput,
  XmlMapsOutput,
  XmlMapsXmlNameOutput,
  XmlNamespaceNested,
  XmlNamespacesOutput,
  XmlTimestampsOutput,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_queryEmptyInputAndEmptyOutputCommand(
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryEmptyInputAndEmptyOutputInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "EmptyInputAndEmptyOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryFlattenedXmlMapCommand(
  input: FlattenedXmlMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMap",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryFlattenedXmlMapWithXmlNameCommand(
  input: FlattenedXmlMapWithXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "FlattenedXmlMapWithXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryGreetingWithErrorsCommand(
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "GreetingWithErrors",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryIgnoresWrappingXmlNameCommand(
  input: IgnoresWrappingXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "IgnoresWrappingXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryNestedStructuresCommand(
  input: NestedStructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryNestedStructuresInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "NestedStructures",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryNoInputAndNoOutputCommand(
  input: NoInputAndNoOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "NoInputAndNoOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryNoInputAndOutputCommand(
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryNoInputAndOutputOutput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "NoInputAndOutput",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryQueryIdempotencyTokenAutoFillCommand(
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryQueryIdempotencyTokenAutoFillInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryIdempotencyTokenAutoFill",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryQueryListsCommand(
  input: QueryListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryQueryListsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryQueryMapsCommand(
  input: QueryMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryQueryMapsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryQueryTimestampsCommand(
  input: QueryTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_queryQueryTimestampsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryRecursiveXmlShapesCommand(
  input: RecursiveXmlShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "RecursiveXmlShapes",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySimpleInputParamsCommand(
  input: SimpleInputParamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_querySimpleInputParamsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SimpleInputParams",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_querySimpleScalarXmlPropertiesCommand(
  input: SimpleScalarXmlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "SimpleScalarXmlProperties",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlBlobsCommand(
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlBlobs",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlEnumsCommand(
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlEnums",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlListsCommand(
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlLists",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlMapsCommand(
  input: XmlMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlMaps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlMapsXmlNameCommand(
  input: XmlMapsXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlMapsXmlName",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlNamespacesCommand(
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlNamespaces",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_queryXmlTimestampsCommand(
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers['Content-Type'] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlTimestamps",
    Version: "2020-01-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_queryEmptyInputAndEmptyOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryEmptyInputAndEmptyOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryEmptyInputAndEmptyOutputOutput(data.EmptyInputAndEmptyOutputResult, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EmptyInputAndEmptyOutputOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryEmptyInputAndEmptyOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<EmptyInputAndEmptyOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryFlattenedXmlMapCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryFlattenedXmlMapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryFlattenedXmlMapOutput(data.FlattenedXmlMapResult, context);
  const response: FlattenedXmlMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlattenedXmlMapOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryFlattenedXmlMapCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<FlattenedXmlMapCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryFlattenedXmlMapWithXmlNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryFlattenedXmlMapWithXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryFlattenedXmlMapWithXmlNameOutput(data.FlattenedXmlMapWithXmlNameResult, context);
  const response: FlattenedXmlMapWithXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlattenedXmlMapWithXmlNameOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryFlattenedXmlMapWithXmlNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<FlattenedXmlMapWithXmlNameCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryGreetingWithErrorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryGreetingWithErrorsOutput(data.GreetingWithErrorsResult, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GreetingWithErrorsOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGreetingWithErrorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GreetingWithErrorsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocols.tests.query#ComplexError":
      response = {
        ...await deserializeAws_queryComplexErrorResponse(parsedOutput, context),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      }
      break;
    case "InvalidGreeting":
    case "aws.protocols.tests.query#InvalidGreeting":
      response = {
        ...await deserializeAws_queryInvalidGreetingResponse(parsedOutput, context),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      }
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryIgnoresWrappingXmlNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryIgnoresWrappingXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryIgnoresWrappingXmlNameOutput(data.IgnoresWrappingXmlNameResult, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IgnoresWrappingXmlNameOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryIgnoresWrappingXmlNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<IgnoresWrappingXmlNameCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryNestedStructuresCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryNestedStructuresCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NestedStructuresCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryNestedStructuresCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NestedStructuresCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryNoInputAndNoOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndNoOutputCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryNoInputAndNoOutputCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NoInputAndNoOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryNoInputAndNoOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NoInputAndNoOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryNoInputAndOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryNoInputAndOutputCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryNoInputAndOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<NoInputAndOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryQueryIdempotencyTokenAutoFillCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryQueryIdempotencyTokenAutoFillCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryQueryIdempotencyTokenAutoFillCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryQueryListsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryQueryListsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryListsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryQueryListsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<QueryListsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryQueryMapsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryMapsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryQueryMapsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryQueryMapsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<QueryMapsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryQueryTimestampsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryQueryTimestampsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryQueryTimestampsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<QueryTimestampsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryRecursiveXmlShapesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRecursiveXmlShapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryRecursiveXmlShapesOutput(data.RecursiveXmlShapesResult, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecursiveXmlShapesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryRecursiveXmlShapesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RecursiveXmlShapesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySimpleInputParamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySimpleInputParamsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SimpleInputParamsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySimpleInputParamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<SimpleInputParamsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_querySimpleScalarXmlPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_querySimpleScalarXmlPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_querySimpleScalarXmlPropertiesOutput(data.SimpleScalarXmlPropertiesResult, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimpleScalarXmlPropertiesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_querySimpleScalarXmlPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<SimpleScalarXmlPropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlBlobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlBlobsOutput(data.XmlBlobsResult, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlBlobsOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlBlobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlBlobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlEnumsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlEnumsOutput(data.XmlEnumsResult, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlEnumsOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlEnumsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlEnumsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlListsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlListsOutput(data.XmlListsResult, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlListsOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlListsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlListsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlMapsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlMapsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlMapsOutput(data.XmlMapsResult, context);
  const response: XmlMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlMapsOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlMapsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlMapsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlMapsXmlNameCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlMapsXmlNameCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlMapsXmlNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlMapsXmlNameOutput(data.XmlMapsXmlNameResult, context);
  const response: XmlMapsXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlMapsXmlNameOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlMapsXmlNameCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlMapsXmlNameCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlNamespacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlNamespacesOutput(data.XmlNamespacesResult, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlNamespacesOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlNamespacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlNamespacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_queryXmlTimestampsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryXmlTimestampsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_queryXmlTimestampsOutput(data.XmlTimestampsResult, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlTimestampsOutput",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryXmlTimestampsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<XmlTimestampsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & {[key: string]: any};
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_queryComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body
  const deserialized: any = deserializeAws_queryComplexError(body.Error, context);
  const contents: ComplexError = {
    name: "ComplexError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body
  const deserialized: any = deserializeAws_queryInvalidGreeting(body.Error, context);
  const contents: InvalidGreeting = {
    name: "InvalidGreeting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryComplexMap = (
  input: { [key: string]: GreetingStruct },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    const memberEntries = serializeAws_queryGreetingStruct(input[key], context);
    Object.keys(memberEntries).forEach(key => {
      entries[`entry.${counter}.value.${key}`] = memberEntries[key];
    });
    counter++;
  });
  return entries;
}

const serializeAws_queryEmptyInputAndEmptyOutputInput = (
  input: EmptyInputAndEmptyOutputInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries
}

const serializeAws_queryListWithXmlName = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`item.${counter}`] = entry;
    counter++;
  }
  return entries;
}

const serializeAws_queryMapOfLists = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    const memberEntries = serializeAws_queryStringList(input[key], context);
    Object.keys(memberEntries).forEach(key => {
      entries[`entry.${counter}.value.${key}`] = memberEntries[key];
    });
    counter++;
  });
  return entries;
}

const serializeAws_queryMapWithXmlName = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.K`] = key;
    entries[`entry.${counter}.V`] = input[key];
    counter++;
  });
  return entries;
}

const serializeAws_queryNestedStructuresInput = (
  input: NestedStructuresInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Nested !== undefined) {
    const memberEntries = serializeAws_queryStructArg(input.Nested, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Nested.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries
}

const serializeAws_queryNoInputAndOutputOutput = (
  input: NoInputAndOutputOutput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries
}

const serializeAws_queryQueryIdempotencyTokenAutoFillInput = (
  input: QueryIdempotencyTokenAutoFillInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.token === undefined) {
    input.token = generateIdempotencyToken();
  }
  if (input.token !== undefined) {
    entries["token"] = input.token;
  }
  return entries
}

const serializeAws_queryQueryListsInput = (
  input: QueryListsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ComplexListArg !== undefined) {
    const memberEntries = serializeAws_queryGreetingList(input.ComplexListArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `ComplexListArg.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.FlattenedListArg !== undefined) {
    const memberEntries = serializeAws_queryStringList(input.FlattenedListArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `FlattenedListArg.${key.substring(key.indexOf('.') + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.FlattenedListArgWithXmlName !== undefined) {
    const memberEntries = serializeAws_queryListWithXmlName(input.FlattenedListArgWithXmlName, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Hi.${key.substring(key.indexOf('.') + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListArg !== undefined) {
    const memberEntries = serializeAws_queryStringList(input.ListArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `ListArg.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListArgWithXmlNameMember !== undefined) {
    const memberEntries = serializeAws_queryListWithXmlName(input.ListArgWithXmlNameMember, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `ListArgWithXmlNameMember.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries
}

const serializeAws_queryQueryMapsInput = (
  input: QueryMapsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ComplexMapArg !== undefined) {
    const memberEntries = serializeAws_queryComplexMap(input.ComplexMapArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `ComplexMapArg.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.FlattenedMap !== undefined) {
    const memberEntries = serializeAws_queryStringMap(input.FlattenedMap, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `FlattenedMap.${key.substring(key.indexOf('.') + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.FlattenedMapWithXmlName !== undefined) {
    const memberEntries = serializeAws_queryMapWithXmlName(input.FlattenedMapWithXmlName, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Hi.${key.substring(key.indexOf('.') + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.MapArg !== undefined) {
    const memberEntries = serializeAws_queryStringMap(input.MapArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `MapArg.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.MapOfLists !== undefined) {
    const memberEntries = serializeAws_queryMapOfLists(input.MapOfLists, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `MapOfLists.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.MapWithXmlMemberName !== undefined) {
    const memberEntries = serializeAws_queryMapWithXmlName(input.MapWithXmlMemberName, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `MapWithXmlMemberName.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RenamedMapArg !== undefined) {
    const memberEntries = serializeAws_queryStringMap(input.RenamedMapArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Foo.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries
}

const serializeAws_queryQueryTimestampsInput = (
  input: QueryTimestampsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.epochMember !== undefined) {
    entries["epochMember"] = Math.round(input.epochMember.getTime() / 1000);
  }
  if (input.epochTarget !== undefined) {
    entries["epochTarget"] = Math.round(input.epochTarget.getTime() / 1000);
  }
  if (input.normalFormat !== undefined) {
    entries["normalFormat"] = (input.normalFormat.toISOString().split('.')[0]+"Z");
  }
  return entries
}

const serializeAws_querySimpleInputParamsInput = (
  input: SimpleInputParamsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Bam !== undefined) {
    entries["Bam"] = input.Bam;
  }
  if (input.Bar !== undefined) {
    entries["Bar"] = input.Bar;
  }
  if (input.Baz !== undefined) {
    entries["Baz"] = input.Baz;
  }
  if (input.Boo !== undefined) {
    entries["Boo"] = input.Boo;
  }
  if (input.Foo !== undefined) {
    entries["Foo"] = input.Foo;
  }
  if (input.FooEnum !== undefined) {
    entries["FooEnum"] = input.FooEnum;
  }
  if (input.Qux !== undefined) {
    entries["Qux"] = context.base64Encoder(input.Qux);
  }
  return entries
}

const serializeAws_queryStructArg = (
  input: StructArg,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OtherArg !== undefined) {
    entries["OtherArg"] = input.OtherArg;
  }
  if (input.RecursiveArg !== undefined) {
    const memberEntries = serializeAws_queryStructArg(input.RecursiveArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `RecursiveArg.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StringArg !== undefined) {
    entries["StringArg"] = input.StringArg;
  }
  return entries
}

const serializeAws_queryGreetingList = (
  input: Array<GreetingStruct>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryGreetingStruct(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
}

const serializeAws_queryGreetingStruct = (
  input: GreetingStruct,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.hi !== undefined) {
    entries["hi"] = input.hi;
  }
  return entries
}

const serializeAws_queryStringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}

const serializeAws_queryStringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach(key => {
    entries[`entry.${counter}.key`] = key;
    entries[`entry.${counter}.value`] = input[key];
    counter++;
  });
  return entries;
}

const deserializeAws_queryComplexError = (
  output: any,
  context: __SerdeContext
): ComplexError => {
  let contents: any = {
    __type: "ComplexError",
    Nested: undefined,
    TopLevel: undefined,
  };
  if (output['Nested'] !== undefined) {
    contents.Nested = deserializeAws_queryComplexNestedErrorData(output['Nested'], context);
  }
  if (output['TopLevel'] !== undefined) {
    contents.TopLevel = output['TopLevel'];
  }
  return contents;
}

const deserializeAws_queryComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  let contents: any = {
    __type: "ComplexNestedErrorData",
    Foo: undefined,
  };
  if (output['Foo'] !== undefined) {
    contents.Foo = output['Foo'];
  }
  return contents;
}

const deserializeAws_queryEmptyInputAndEmptyOutputOutput = (
  output: any,
  context: __SerdeContext
): EmptyInputAndEmptyOutputOutput => {
  let contents: any = {
    __type: "EmptyInputAndEmptyOutputOutput",
  };
  return contents;
}

const deserializeAws_queryFlattenedXmlMapOutput = (
  output: any,
  context: __SerdeContext
): FlattenedXmlMapOutput => {
  let contents: any = {
    __type: "FlattenedXmlMapOutput",
    myMap: undefined,
  };
  if (output.myMap === "") {
    contents.myMap = {};
  }
  if (output['myMap'] !== undefined) {
    const wrappedItem = (output['myMap'] instanceof Array) ? output['myMap'] : [output['myMap']];
    contents.myMap = deserializeAws_queryFooEnumMap(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryFlattenedXmlMapWithXmlNameOutput = (
  output: any,
  context: __SerdeContext
): FlattenedXmlMapWithXmlNameOutput => {
  let contents: any = {
    __type: "FlattenedXmlMapWithXmlNameOutput",
    myMap: undefined,
  };
  if (output.KVP === "") {
    contents.myMap = {};
  }
  if (output['KVP'] !== undefined) {
    const wrappedItem = (output['KVP'] instanceof Array) ? output['KVP'] : [output['KVP']];
    contents.myMap = deserializeAws_queryFlattenedXmlMapWithXmlNameOutputMap(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryFlattenedXmlMapWithXmlNameOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["K"]] = pair["V"];
  });
  return mapParams;
}

const deserializeAws_queryGreetingWithErrorsOutput = (
  output: any,
  context: __SerdeContext
): GreetingWithErrorsOutput => {
  let contents: any = {
    __type: "GreetingWithErrorsOutput",
    greeting: undefined,
  };
  if (output['greeting'] !== undefined) {
    contents.greeting = output['greeting'];
  }
  return contents;
}

const deserializeAws_queryIgnoresWrappingXmlNameOutput = (
  output: any,
  context: __SerdeContext
): IgnoresWrappingXmlNameOutput => {
  let contents: any = {
    __type: "IgnoresWrappingXmlNameOutput",
    foo: undefined,
  };
  if (output['foo'] !== undefined) {
    contents.foo = output['foo'];
  }
  return contents;
}

const deserializeAws_queryInvalidGreeting = (
  output: any,
  context: __SerdeContext
): InvalidGreeting => {
  let contents: any = {
    __type: "InvalidGreeting",
    Message: undefined,
  };
  if (output['Message'] !== undefined) {
    contents.Message = output['Message'];
  }
  return contents;
}

const deserializeAws_queryRecursiveXmlShapesOutput = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutput => {
  let contents: any = {
    __type: "RecursiveXmlShapesOutput",
    nested: undefined,
  };
  if (output['nested'] !== undefined) {
    contents.nested = deserializeAws_queryRecursiveXmlShapesOutputNested1(output['nested'], context);
  }
  return contents;
}

const deserializeAws_queryRecursiveXmlShapesOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutputNested1 => {
  let contents: any = {
    __type: "RecursiveXmlShapesOutputNested1",
    foo: undefined,
    nested: undefined,
  };
  if (output['foo'] !== undefined) {
    contents.foo = output['foo'];
  }
  if (output['nested'] !== undefined) {
    contents.nested = deserializeAws_queryRecursiveXmlShapesOutputNested2(output['nested'], context);
  }
  return contents;
}

const deserializeAws_queryRecursiveXmlShapesOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutputNested2 => {
  let contents: any = {
    __type: "RecursiveXmlShapesOutputNested2",
    bar: undefined,
    recursiveMember: undefined,
  };
  if (output['bar'] !== undefined) {
    contents.bar = output['bar'];
  }
  if (output['recursiveMember'] !== undefined) {
    contents.recursiveMember = deserializeAws_queryRecursiveXmlShapesOutputNested1(output['recursiveMember'], context);
  }
  return contents;
}

const deserializeAws_queryRenamedListMembers = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry);
  });
  return contents;
}

const deserializeAws_querySimpleScalarXmlPropertiesOutput = (
  output: any,
  context: __SerdeContext
): SimpleScalarXmlPropertiesOutput => {
  let contents: any = {
    __type: "SimpleScalarXmlPropertiesOutput",
    byteValue: undefined,
    doubleValue: undefined,
    emptyStringValue: undefined,
    falseBooleanValue: undefined,
    floatValue: undefined,
    integerValue: undefined,
    longValue: undefined,
    shortValue: undefined,
    stringValue: undefined,
    trueBooleanValue: undefined,
  };
  if (output['byteValue'] !== undefined) {
    contents.byteValue = parseInt(output['byteValue']);
  }
  if (output['DoubleDribble'] !== undefined) {
    contents.doubleValue = parseFloat(output['DoubleDribble']);
  }
  if (output['emptyStringValue'] !== undefined) {
    contents.emptyStringValue = output['emptyStringValue'];
  }
  if (output['falseBooleanValue'] !== undefined) {
    contents.falseBooleanValue = output['falseBooleanValue'] == 'true';
  }
  if (output['floatValue'] !== undefined) {
    contents.floatValue = parseFloat(output['floatValue']);
  }
  if (output['integerValue'] !== undefined) {
    contents.integerValue = parseInt(output['integerValue']);
  }
  if (output['longValue'] !== undefined) {
    contents.longValue = parseInt(output['longValue']);
  }
  if (output['shortValue'] !== undefined) {
    contents.shortValue = parseInt(output['shortValue']);
  }
  if (output['stringValue'] !== undefined) {
    contents.stringValue = output['stringValue'];
  }
  if (output['trueBooleanValue'] !== undefined) {
    contents.trueBooleanValue = output['trueBooleanValue'] == 'true';
  }
  return contents;
}

const deserializeAws_queryStructureList = (
  output: any,
  context: __SerdeContext
): Array<StructureListMember> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_queryStructureListMember(entry, context));
  });
  return contents;
}

const deserializeAws_queryStructureListMember = (
  output: any,
  context: __SerdeContext
): StructureListMember => {
  let contents: any = {
    __type: "StructureListMember",
    a: undefined,
    b: undefined,
  };
  if (output['value'] !== undefined) {
    contents.a = output['value'];
  }
  if (output['other'] !== undefined) {
    contents.b = output['other'];
  }
  return contents;
}

const deserializeAws_queryXmlBlobsOutput = (
  output: any,
  context: __SerdeContext
): XmlBlobsOutput => {
  let contents: any = {
    __type: "XmlBlobsOutput",
    data: undefined,
  };
  if (output['data'] !== undefined) {
    contents.data = context.base64Decoder(output['data']);
  }
  return contents;
}

const deserializeAws_queryXmlEnumsOutput = (
  output: any,
  context: __SerdeContext
): XmlEnumsOutput => {
  let contents: any = {
    __type: "XmlEnumsOutput",
    fooEnum1: undefined,
    fooEnum2: undefined,
    fooEnum3: undefined,
    fooEnumList: undefined,
    fooEnumMap: undefined,
    fooEnumSet: undefined,
  };
  if (output['fooEnum1'] !== undefined) {
    contents.fooEnum1 = output['fooEnum1'];
  }
  if (output['fooEnum2'] !== undefined) {
    contents.fooEnum2 = output['fooEnum2'];
  }
  if (output['fooEnum3'] !== undefined) {
    contents.fooEnum3 = output['fooEnum3'];
  }
  if (output.fooEnumList === "") {
    contents.fooEnumList = [];
  }
  if (output['fooEnumList'] !== undefined && output['fooEnumList']['member'] !== undefined) {
    const wrappedItem = (output['fooEnumList']['member'] instanceof Array) ? output['fooEnumList']['member'] : [output['fooEnumList']['member']];
    contents.fooEnumList = deserializeAws_queryFooEnumList(wrappedItem, context);
  }
  if (output.fooEnumMap === "") {
    contents.fooEnumMap = {};
  }
  if (output['fooEnumMap'] !== undefined && output['fooEnumMap']['entry'] !== undefined) {
    const wrappedItem = (output['fooEnumMap']['entry'] instanceof Array) ? output['fooEnumMap']['entry'] : [output['fooEnumMap']['entry']];
    contents.fooEnumMap = deserializeAws_queryFooEnumMap(wrappedItem, context);
  }
  if (output.fooEnumSet === "") {
    contents.fooEnumSet = new Set([]);
  }
  if (output['fooEnumSet'] !== undefined && output['fooEnumSet']['member'] !== undefined) {
    const wrappedItem = (output['fooEnumSet']['member'] instanceof Array) ? output['fooEnumSet']['member'] : [output['fooEnumSet']['member']];
    contents.fooEnumSet = deserializeAws_queryFooEnumSet(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryXmlListsOutput = (
  output: any,
  context: __SerdeContext
): XmlListsOutput => {
  let contents: any = {
    __type: "XmlListsOutput",
    booleanList: undefined,
    enumList: undefined,
    flattenedList: undefined,
    flattenedList2: undefined,
    integerList: undefined,
    nestedStringList: undefined,
    renamedListMembers: undefined,
    stringList: undefined,
    stringSet: undefined,
    structureList: undefined,
    timestampList: undefined,
  };
  if (output.booleanList === "") {
    contents.booleanList = [];
  }
  if (output['booleanList'] !== undefined && output['booleanList']['member'] !== undefined) {
    const wrappedItem = (output['booleanList']['member'] instanceof Array) ? output['booleanList']['member'] : [output['booleanList']['member']];
    contents.booleanList = deserializeAws_queryBooleanList(wrappedItem, context);
  }
  if (output.enumList === "") {
    contents.enumList = [];
  }
  if (output['enumList'] !== undefined && output['enumList']['member'] !== undefined) {
    const wrappedItem = (output['enumList']['member'] instanceof Array) ? output['enumList']['member'] : [output['enumList']['member']];
    contents.enumList = deserializeAws_queryFooEnumList(wrappedItem, context);
  }
  if (output.flattenedList === "") {
    contents.flattenedList = [];
  }
  if (output['flattenedList'] !== undefined) {
    const wrappedItem = (output['flattenedList'] instanceof Array) ? output['flattenedList'] : [output['flattenedList']];
    contents.flattenedList = deserializeAws_queryRenamedListMembers(wrappedItem, context);
  }
  if (output.customName === "") {
    contents.flattenedList2 = [];
  }
  if (output['customName'] !== undefined) {
    const wrappedItem = (output['customName'] instanceof Array) ? output['customName'] : [output['customName']];
    contents.flattenedList2 = deserializeAws_queryRenamedListMembers(wrappedItem, context);
  }
  if (output.integerList === "") {
    contents.integerList = [];
  }
  if (output['integerList'] !== undefined && output['integerList']['member'] !== undefined) {
    const wrappedItem = (output['integerList']['member'] instanceof Array) ? output['integerList']['member'] : [output['integerList']['member']];
    contents.integerList = deserializeAws_queryIntegerList(wrappedItem, context);
  }
  if (output.nestedStringList === "") {
    contents.nestedStringList = [];
  }
  if (output['nestedStringList'] !== undefined && output['nestedStringList']['member'] !== undefined) {
    const wrappedItem = (output['nestedStringList']['member'] instanceof Array) ? output['nestedStringList']['member'] : [output['nestedStringList']['member']];
    contents.nestedStringList = deserializeAws_queryNestedStringList(wrappedItem, context);
  }
  if (output.renamed === "") {
    contents.renamedListMembers = [];
  }
  if (output['renamed'] !== undefined && output['renamed']['item'] !== undefined) {
    const wrappedItem = (output['renamed']['item'] instanceof Array) ? output['renamed']['item'] : [output['renamed']['item']];
    contents.renamedListMembers = deserializeAws_queryRenamedListMembers(wrappedItem, context);
  }
  if (output.stringList === "") {
    contents.stringList = [];
  }
  if (output['stringList'] !== undefined && output['stringList']['member'] !== undefined) {
    const wrappedItem = (output['stringList']['member'] instanceof Array) ? output['stringList']['member'] : [output['stringList']['member']];
    contents.stringList = deserializeAws_queryStringList(wrappedItem, context);
  }
  if (output.stringSet === "") {
    contents.stringSet = new Set([]);
  }
  if (output['stringSet'] !== undefined && output['stringSet']['member'] !== undefined) {
    const wrappedItem = (output['stringSet']['member'] instanceof Array) ? output['stringSet']['member'] : [output['stringSet']['member']];
    contents.stringSet = deserializeAws_queryStringSet(wrappedItem, context);
  }
  if (output.myStructureList === "") {
    contents.structureList = [];
  }
  if (output['myStructureList'] !== undefined && output['myStructureList']['item'] !== undefined) {
    const wrappedItem = (output['myStructureList']['item'] instanceof Array) ? output['myStructureList']['item'] : [output['myStructureList']['item']];
    contents.structureList = deserializeAws_queryStructureList(wrappedItem, context);
  }
  if (output.timestampList === "") {
    contents.timestampList = [];
  }
  if (output['timestampList'] !== undefined && output['timestampList']['member'] !== undefined) {
    const wrappedItem = (output['timestampList']['member'] instanceof Array) ? output['timestampList']['member'] : [output['timestampList']['member']];
    contents.timestampList = deserializeAws_queryTimestampList(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryXmlMapsOutput = (
  output: any,
  context: __SerdeContext
): XmlMapsOutput => {
  let contents: any = {
    __type: "XmlMapsOutput",
    myMap: undefined,
  };
  if (output.myMap === "") {
    contents.myMap = {};
  }
  if (output['myMap'] !== undefined && output['myMap']['entry'] !== undefined) {
    const wrappedItem = (output['myMap']['entry'] instanceof Array) ? output['myMap']['entry'] : [output['myMap']['entry']];
    contents.myMap = deserializeAws_queryXmlMapsOutputMap(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryXmlMapsOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = deserializeAws_queryGreetingStruct(pair["value"], context);
  });
  return mapParams;
}

const deserializeAws_queryXmlMapsXmlNameOutput = (
  output: any,
  context: __SerdeContext
): XmlMapsXmlNameOutput => {
  let contents: any = {
    __type: "XmlMapsXmlNameOutput",
    myMap: undefined,
  };
  if (output.myMap === "") {
    contents.myMap = {};
  }
  if (output['myMap'] !== undefined && output['myMap']['entry'] !== undefined) {
    const wrappedItem = (output['myMap']['entry'] instanceof Array) ? output['myMap']['entry'] : [output['myMap']['entry']];
    contents.myMap = deserializeAws_queryXmlMapsXmlNameOutputMap(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryXmlMapsXmlNameOutputMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: GreetingStruct } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["Attribute"]] = deserializeAws_queryGreetingStruct(pair["Setting"], context);
  });
  return mapParams;
}

const deserializeAws_queryXmlNamespaceNested = (
  output: any,
  context: __SerdeContext
): XmlNamespaceNested => {
  let contents: any = {
    __type: "XmlNamespaceNested",
    foo: undefined,
    values: undefined,
  };
  if (output['foo'] !== undefined) {
    contents.foo = output['foo'];
  }
  if (output.values === "") {
    contents.values = [];
  }
  if (output['values'] !== undefined && output['values']['member'] !== undefined) {
    const wrappedItem = (output['values']['member'] instanceof Array) ? output['values']['member'] : [output['values']['member']];
    contents.values = deserializeAws_queryXmlNamespacedList(wrappedItem, context);
  }
  return contents;
}

const deserializeAws_queryXmlNamespacedList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry);
  });
  return contents;
}

const deserializeAws_queryXmlNamespacesOutput = (
  output: any,
  context: __SerdeContext
): XmlNamespacesOutput => {
  let contents: any = {
    __type: "XmlNamespacesOutput",
    nested: undefined,
  };
  if (output['nested'] !== undefined) {
    contents.nested = deserializeAws_queryXmlNamespaceNested(output['nested'], context);
  }
  return contents;
}

const deserializeAws_queryXmlTimestampsOutput = (
  output: any,
  context: __SerdeContext
): XmlTimestampsOutput => {
  let contents: any = {
    __type: "XmlTimestampsOutput",
    dateTime: undefined,
    epochSeconds: undefined,
    httpDate: undefined,
    normal: undefined,
  };
  if (output['dateTime'] !== undefined) {
    contents.dateTime = new Date(output['dateTime']);
  }
  if (output['epochSeconds'] !== undefined) {
    contents.epochSeconds = new Date(output['epochSeconds']);
  }
  if (output['httpDate'] !== undefined) {
    contents.httpDate = new Date(output['httpDate']);
  }
  if (output['normal'] !== undefined) {
    contents.normal = new Date(output['normal']);
  }
  return contents;
}

const deserializeAws_queryBooleanList = (
  output: any,
  context: __SerdeContext
): Array<boolean> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry == 'true');
  });
  return contents;
}

const deserializeAws_queryFooEnumList = (
  output: any,
  context: __SerdeContext
): Array<FooEnum | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry);
  });
  return contents;
}

const deserializeAws_queryFooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = pair["value"];
  });
  return mapParams;
}

const deserializeAws_queryFooEnumSet = (
  output: any,
  context: __SerdeContext
): Set<FooEnum | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry);
  });
  return contents;
}

const deserializeAws_queryGreetingStruct = (
  output: any,
  context: __SerdeContext
): GreetingStruct => {
  let contents: any = {
    __type: "GreetingStruct",
    hi: undefined,
  };
  if (output['hi'] !== undefined) {
    contents.hi = output['hi'];
  }
  return contents;
}

const deserializeAws_queryIntegerList = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(parseInt(entry));
  });
  return contents;
}

const deserializeAws_queryNestedStringList = (
  output: any,
  context: __SerdeContext
): Array<Array<string>> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    const wrappedItem = (entry["member"] instanceof Array) ? entry["member"] : [entry["member"]];
    contents.push(deserializeAws_queryStringList(wrappedItem, context));
  });
  return contents;
}

const deserializeAws_queryStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry);
  });
  return contents;
}

const deserializeAws_queryStringSet = (
  output: any,
  context: __SerdeContext
): Set<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry);
  });
  return contents;
}

const deserializeAws_queryTimestampList = (
  output: any,
  context: __SerdeContext
): Array<Date> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(new Date(entry));
  });
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

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, { attributeNamePrefix: '', ignoreAttributes: false, parseNodeValue: false, tagValueProcessor: (val, tagName) => decodeEscapedXML(val) });
      const textNodeName = '#text';
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries).map(
    key => __extendedEncodeURIComponent(key) + '=' + __extendedEncodeURIComponent(entries[key])
  ).join("&");
}

const loadQueryErrorCode = (
  output: __HttpResponse,
  data: any
): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return 'NotFound';
  }
  return '';
};
