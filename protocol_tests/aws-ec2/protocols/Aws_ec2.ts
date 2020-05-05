import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput
} from "../commands/EmptyInputAndEmptyOutputCommand";
import {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput
} from "../commands/GreetingWithErrorsCommand";
import {
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput
} from "../commands/IgnoresWrappingXmlNameCommand";
import {
  NestedStructuresCommandInput,
  NestedStructuresCommandOutput
} from "../commands/NestedStructuresCommand";
import {
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput
} from "../commands/NoInputAndOutputCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput
} from "../commands/QueryIdempotencyTokenAutoFillCommand";
import {
  QueryListsCommandInput,
  QueryListsCommandOutput
} from "../commands/QueryListsCommand";
import {
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput
} from "../commands/QueryTimestampsCommand";
import {
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput
} from "../commands/RecursiveXmlShapesCommand";
import {
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput
} from "../commands/SimpleInputParamsCommand";
import {
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput
} from "../commands/SimpleScalarXmlPropertiesCommand";
import {
  XmlBlobsCommandInput,
  XmlBlobsCommandOutput
} from "../commands/XmlBlobsCommand";
import {
  XmlEnumsCommandInput,
  XmlEnumsCommandOutput
} from "../commands/XmlEnumsCommand";
import {
  XmlListsCommandInput,
  XmlListsCommandOutput
} from "../commands/XmlListsCommand";
import {
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput
} from "../commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput
} from "../commands/XmlTimestampsCommand";
import {
  ComplexError,
  ComplexNestedErrorData,
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputOutput,
  FooEnum,
  GreetingStruct,
  GreetingWithErrorsOutput,
  IgnoresWrappingXmlNameOutput,
  InvalidGreeting,
  NestedStructuresInput,
  NoInputAndOutputOutput,
  QueryIdempotencyTokenAutoFillInput,
  QueryListsInput,
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
  XmlNamespaceNested,
  XmlNamespacesOutput,
  XmlTimestampsOutput
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_ec2EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_ec2EmptyInputAndEmptyOutputInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "EmptyInputAndEmptyOutput",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "GreetingWithErrors",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2IgnoresWrappingXmlNameCommand = async (
  input: IgnoresWrappingXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "IgnoresWrappingXmlName",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2NestedStructuresCommand = async (
  input: NestedStructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_ec2NestedStructuresInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "NestedStructures",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "NoInputAndOutput",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_ec2QueryIdempotencyTokenAutoFillInput(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryIdempotencyTokenAutoFill",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2QueryListsCommand = async (
  input: QueryListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_ec2QueryListsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryLists",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2QueryTimestampsCommand = async (
  input: QueryTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_ec2QueryTimestampsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "QueryTimestamps",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2RecursiveXmlShapesCommand = async (
  input: RecursiveXmlShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "RecursiveXmlShapes",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2SimpleInputParamsCommand = async (
  input: SimpleInputParamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any;
  const entries = serializeAws_ec2SimpleInputParamsInput(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "SimpleInputParams",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2SimpleScalarXmlPropertiesCommand = async (
  input: SimpleScalarXmlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "SimpleScalarXmlProperties",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2XmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlBlobs",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2XmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlEnums",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2XmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlLists",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2XmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlNamespaces",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_ec2XmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  const body = buildFormUrlencodedString({
    Action: "XmlTimestamps",
    Version: "2020-01-08"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_ec2EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2EmptyInputAndEmptyOutputCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2EmptyInputAndEmptyOutputOutput(data, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EmptyInputAndEmptyOutputOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2EmptyInputAndEmptyOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2GreetingWithErrorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GreetingWithErrorsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2GreetingWithErrorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocols.tests.ec2#ComplexError":
      response = {
        ...(await deserializeAws_ec2ComplexErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGreeting":
    case "aws.protocols.tests.ec2#InvalidGreeting":
      response = {
        ...(await deserializeAws_ec2InvalidGreetingResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2IgnoresWrappingXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2IgnoresWrappingXmlNameCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2IgnoresWrappingXmlNameOutput(data, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IgnoresWrappingXmlNameOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2IgnoresWrappingXmlNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2NestedStructuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2NestedStructuresCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NestedStructuresCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2NestedStructuresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2NoInputAndOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2NoInputAndOutputOutput(data, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NoInputAndOutputOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2NoInputAndOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2QueryIdempotencyTokenAutoFillCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2QueryIdempotencyTokenAutoFillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2QueryListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2QueryListsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryListsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2QueryListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2QueryTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2QueryTimestampsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2QueryTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2RecursiveXmlShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2RecursiveXmlShapesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2RecursiveXmlShapesOutput(data, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecursiveXmlShapesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2RecursiveXmlShapesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2SimpleInputParamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2SimpleInputParamsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SimpleInputParamsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2SimpleInputParamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2SimpleScalarXmlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2SimpleScalarXmlPropertiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2SimpleScalarXmlPropertiesOutput(data, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimpleScalarXmlPropertiesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2SimpleScalarXmlPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2XmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2XmlBlobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlBlobsOutput(data, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlBlobsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlBlobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2XmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2XmlEnumsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlEnumsOutput(data, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlEnumsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlEnumsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2XmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2XmlListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlListsOutput(data, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlListsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2XmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2XmlNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlNamespacesOutput(data, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlNamespacesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_ec2XmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_ec2XmlTimestampsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_ec2XmlTimestampsOutput(data, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "XmlTimestampsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_ec2XmlTimestampsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode =
        parsedBody.Errors.Error.code ||
        parsedBody.Errors.Error.Code ||
        errorCode;
      response = {
        ...parsedBody.Errors.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Errors.Error.message ||
          parsedBody.Errors.Error.Message ||
          errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_ec2ComplexErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_ec2ComplexError(
    body.Errors.Error,
    context
  );
  const contents: ComplexError = {
    name: "ComplexError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_ec2InvalidGreetingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_ec2InvalidGreeting(
    body.Errors.Error,
    context
  );
  const contents: InvalidGreeting = {
    name: "InvalidGreeting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_ec2EmptyInputAndEmptyOutputInput = (
  input: EmptyInputAndEmptyOutputInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_ec2ListWithXmlName = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`Item.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_ec2NestedStructuresInput = (
  input: NestedStructuresInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Nested !== undefined) {
    const memberEntries = serializeAws_ec2StructArg(input.Nested, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Nested.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_ec2QueryIdempotencyTokenAutoFillInput = (
  input: QueryIdempotencyTokenAutoFillInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.token === undefined) {
    input.token = generateIdempotencyToken();
  }
  if (input.token !== undefined) {
    entries["Token"] = input.token;
  }
  return entries;
};

const serializeAws_ec2QueryListsInput = (
  input: QueryListsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ComplexListArg !== undefined) {
    const memberEntries = serializeAws_ec2GreetingList(
      input.ComplexListArg,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ComplexListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListArg !== undefined) {
    const memberEntries = serializeAws_ec2StringList(input.ListArg, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `ListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListArgWithXmlName !== undefined) {
    const memberEntries = serializeAws_ec2ListWithXmlName(
      input.ListArgWithXmlName,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ListArgWithXmlNameMember !== undefined) {
    const memberEntries = serializeAws_ec2ListWithXmlName(
      input.ListArgWithXmlNameMember,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `ListArgWithXmlNameMember.${key.substring(
        key.indexOf(".") + 1
      )}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_ec2QueryTimestampsInput = (
  input: QueryTimestampsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.epochMember !== undefined) {
    entries["EpochMember"] = Math.round(input.epochMember.getTime() / 1000);
  }
  if (input.epochTarget !== undefined) {
    entries["EpochTarget"] = Math.round(input.epochTarget.getTime() / 1000);
  }
  if (input.normalFormat !== undefined) {
    entries["NormalFormat"] =
      input.normalFormat.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_ec2SimpleInputParamsInput = (
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
  if (input.HasQueryAndXmlName !== undefined) {
    entries["B"] = input.HasQueryAndXmlName;
  }
  if (input.HasQueryName !== undefined) {
    entries["A"] = input.HasQueryName;
  }
  if (input.Qux !== undefined) {
    entries["Qux"] = context.base64Encoder(input.Qux);
  }
  if (input.UsesXmlName !== undefined) {
    entries["C"] = input.UsesXmlName;
  }
  return entries;
};

const serializeAws_ec2StructArg = (
  input: StructArg,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OtherArg !== undefined) {
    entries["OtherArg"] = input.OtherArg;
  }
  if (input.RecursiveArg !== undefined) {
    const memberEntries = serializeAws_ec2StructArg(
      input.RecursiveArg,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `RecursiveArg.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.StringArg !== undefined) {
    entries["StringArg"] = input.StringArg;
  }
  return entries;
};

const serializeAws_ec2GreetingList = (
  input: GreetingStruct[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_ec2GreetingStruct(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`Member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  }
  return entries;
};

const serializeAws_ec2GreetingStruct = (
  input: GreetingStruct,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.hi !== undefined) {
    entries["Hi"] = input.hi;
  }
  return entries;
};

const serializeAws_ec2StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`Member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_ec2ComplexError = (
  output: any,
  context: __SerdeContext
): ComplexError => {
  let contents: any = {
    __type: "ComplexError",
    Nested: undefined,
    TopLevel: undefined
  };
  if (output["Nested"] !== undefined) {
    contents.Nested = deserializeAws_ec2ComplexNestedErrorData(
      output["Nested"],
      context
    );
  }
  if (output["TopLevel"] !== undefined) {
    contents.TopLevel =
      output["TopLevel"]["#text"] !== undefined
        ? output["TopLevel"]["#text"]
        : output["TopLevel"];
  }
  return contents;
};

const deserializeAws_ec2ComplexNestedErrorData = (
  output: any,
  context: __SerdeContext
): ComplexNestedErrorData => {
  let contents: any = {
    __type: "ComplexNestedErrorData",
    Foo: undefined
  };
  if (output["Foo"] !== undefined) {
    contents.Foo =
      output["Foo"]["#text"] !== undefined
        ? output["Foo"]["#text"]
        : output["Foo"];
  }
  return contents;
};

const deserializeAws_ec2EmptyInputAndEmptyOutputOutput = (
  output: any,
  context: __SerdeContext
): EmptyInputAndEmptyOutputOutput => {
  let contents: any = {
    __type: "EmptyInputAndEmptyOutputOutput"
  };
  return contents;
};

const deserializeAws_ec2GreetingWithErrorsOutput = (
  output: any,
  context: __SerdeContext
): GreetingWithErrorsOutput => {
  let contents: any = {
    __type: "GreetingWithErrorsOutput",
    greeting: undefined
  };
  if (output["greeting"] !== undefined) {
    contents.greeting =
      output["greeting"]["#text"] !== undefined
        ? output["greeting"]["#text"]
        : output["greeting"];
  }
  return contents;
};

const deserializeAws_ec2IgnoresWrappingXmlNameOutput = (
  output: any,
  context: __SerdeContext
): IgnoresWrappingXmlNameOutput => {
  let contents: any = {
    __type: "IgnoresWrappingXmlNameOutput",
    foo: undefined
  };
  if (output["foo"] !== undefined) {
    contents.foo =
      output["foo"]["#text"] !== undefined
        ? output["foo"]["#text"]
        : output["foo"];
  }
  return contents;
};

const deserializeAws_ec2InvalidGreeting = (
  output: any,
  context: __SerdeContext
): InvalidGreeting => {
  let contents: any = {
    __type: "InvalidGreeting",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message =
      output["Message"]["#text"] !== undefined
        ? output["Message"]["#text"]
        : output["Message"];
  }
  return contents;
};

const deserializeAws_ec2NoInputAndOutputOutput = (
  output: any,
  context: __SerdeContext
): NoInputAndOutputOutput => {
  let contents: any = {
    __type: "NoInputAndOutputOutput"
  };
  return contents;
};

const deserializeAws_ec2RecursiveXmlShapesOutput = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutput => {
  let contents: any = {
    __type: "RecursiveXmlShapesOutput",
    nested: undefined
  };
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_ec2RecursiveXmlShapesOutputNested1(
      output["nested"],
      context
    );
  }
  return contents;
};

const deserializeAws_ec2RecursiveXmlShapesOutputNested1 = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutputNested1 => {
  let contents: any = {
    __type: "RecursiveXmlShapesOutputNested1",
    foo: undefined,
    nested: undefined
  };
  if (output["foo"] !== undefined) {
    contents.foo =
      output["foo"]["#text"] !== undefined
        ? output["foo"]["#text"]
        : output["foo"];
  }
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_ec2RecursiveXmlShapesOutputNested2(
      output["nested"],
      context
    );
  }
  return contents;
};

const deserializeAws_ec2RecursiveXmlShapesOutputNested2 = (
  output: any,
  context: __SerdeContext
): RecursiveXmlShapesOutputNested2 => {
  let contents: any = {
    __type: "RecursiveXmlShapesOutputNested2",
    bar: undefined,
    recursiveMember: undefined
  };
  if (output["bar"] !== undefined) {
    contents.bar =
      output["bar"]["#text"] !== undefined
        ? output["bar"]["#text"]
        : output["bar"];
  }
  if (output["recursiveMember"] !== undefined) {
    contents.recursiveMember = deserializeAws_ec2RecursiveXmlShapesOutputNested1(
      output["recursiveMember"],
      context
    );
  }
  return contents;
};

const deserializeAws_ec2RenamedListMembers = (
  output: any,
  context: __SerdeContext
): string[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_ec2SimpleScalarXmlPropertiesOutput = (
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
    trueBooleanValue: undefined
  };
  if (output["byteValue"] !== undefined) {
    contents.byteValue = parseInt(
      output["byteValue"]["#text"] !== undefined
        ? output["byteValue"]["#text"]
        : output["byteValue"]
    );
  }
  if (output["DoubleDribble"] !== undefined) {
    contents.doubleValue = parseFloat(
      output["DoubleDribble"]["#text"] !== undefined
        ? output["DoubleDribble"]["#text"]
        : output["DoubleDribble"]
    );
  }
  if (output["emptyStringValue"] !== undefined) {
    contents.emptyStringValue =
      output["emptyStringValue"]["#text"] !== undefined
        ? output["emptyStringValue"]["#text"]
        : output["emptyStringValue"];
  }
  if (output["falseBooleanValue"] !== undefined) {
    contents.falseBooleanValue =
      (output["falseBooleanValue"]["#text"] !== undefined
        ? output["falseBooleanValue"]["#text"]
        : output["falseBooleanValue"]) == "true";
  }
  if (output["floatValue"] !== undefined) {
    contents.floatValue = parseFloat(
      output["floatValue"]["#text"] !== undefined
        ? output["floatValue"]["#text"]
        : output["floatValue"]
    );
  }
  if (output["integerValue"] !== undefined) {
    contents.integerValue = parseInt(
      output["integerValue"]["#text"] !== undefined
        ? output["integerValue"]["#text"]
        : output["integerValue"]
    );
  }
  if (output["longValue"] !== undefined) {
    contents.longValue = parseInt(
      output["longValue"]["#text"] !== undefined
        ? output["longValue"]["#text"]
        : output["longValue"]
    );
  }
  if (output["shortValue"] !== undefined) {
    contents.shortValue = parseInt(
      output["shortValue"]["#text"] !== undefined
        ? output["shortValue"]["#text"]
        : output["shortValue"]
    );
  }
  if (output["stringValue"] !== undefined) {
    contents.stringValue =
      output["stringValue"]["#text"] !== undefined
        ? output["stringValue"]["#text"]
        : output["stringValue"];
  }
  if (output["trueBooleanValue"] !== undefined) {
    contents.trueBooleanValue =
      (output["trueBooleanValue"]["#text"] !== undefined
        ? output["trueBooleanValue"]["#text"]
        : output["trueBooleanValue"]) == "true";
  }
  return contents;
};

const deserializeAws_ec2StructureList = (
  output: any,
  context: __SerdeContext
): StructureListMember[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(deserializeAws_ec2StructureListMember(entry, context));
  });
  return contents;
};

const deserializeAws_ec2StructureListMember = (
  output: any,
  context: __SerdeContext
): StructureListMember => {
  let contents: any = {
    __type: "StructureListMember",
    a: undefined,
    b: undefined
  };
  if (output["value"] !== undefined) {
    contents.a =
      output["value"]["#text"] !== undefined
        ? output["value"]["#text"]
        : output["value"];
  }
  if (output["other"] !== undefined) {
    contents.b =
      output["other"]["#text"] !== undefined
        ? output["other"]["#text"]
        : output["other"];
  }
  return contents;
};

const deserializeAws_ec2XmlBlobsOutput = (
  output: any,
  context: __SerdeContext
): XmlBlobsOutput => {
  let contents: any = {
    __type: "XmlBlobsOutput",
    data: undefined
  };
  if (output["data"] !== undefined) {
    contents.data = context.base64Decoder(
      output["data"]["#text"] !== undefined
        ? output["data"]["#text"]
        : output["data"]
    );
  }
  return contents;
};

const deserializeAws_ec2XmlEnumsOutput = (
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
    fooEnumSet: undefined
  };
  if (output["fooEnum1"] !== undefined) {
    contents.fooEnum1 =
      output["fooEnum1"]["#text"] !== undefined
        ? output["fooEnum1"]["#text"]
        : output["fooEnum1"];
  }
  if (output["fooEnum2"] !== undefined) {
    contents.fooEnum2 =
      output["fooEnum2"]["#text"] !== undefined
        ? output["fooEnum2"]["#text"]
        : output["fooEnum2"];
  }
  if (output["fooEnum3"] !== undefined) {
    contents.fooEnum3 =
      output["fooEnum3"]["#text"] !== undefined
        ? output["fooEnum3"]["#text"]
        : output["fooEnum3"];
  }
  if (output.fooEnumList === "") {
    contents.fooEnumList = [];
  }
  if (
    output["fooEnumList"] !== undefined &&
    output["fooEnumList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["fooEnumList"]["member"] instanceof Array
        ? output["fooEnumList"]["member"]
        : [output["fooEnumList"]["member"]];
    contents.fooEnumList = deserializeAws_ec2FooEnumList(wrappedItem, context);
  }
  if (output.fooEnumMap === "") {
    contents.fooEnumMap = {};
  }
  if (
    output["fooEnumMap"] !== undefined &&
    output["fooEnumMap"]["entry"] !== undefined
  ) {
    const wrappedItem =
      output["fooEnumMap"]["entry"] instanceof Array
        ? output["fooEnumMap"]["entry"]
        : [output["fooEnumMap"]["entry"]];
    contents.fooEnumMap = deserializeAws_ec2FooEnumMap(wrappedItem, context);
  }
  if (output.fooEnumSet === "") {
    contents.fooEnumSet = new Set([]);
  }
  if (
    output["fooEnumSet"] !== undefined &&
    output["fooEnumSet"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["fooEnumSet"]["member"] instanceof Array
        ? output["fooEnumSet"]["member"]
        : [output["fooEnumSet"]["member"]];
    contents.fooEnumSet = deserializeAws_ec2FooEnumSet(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_ec2XmlListsOutput = (
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
    timestampList: undefined
  };
  if (output.booleanList === "") {
    contents.booleanList = [];
  }
  if (
    output["booleanList"] !== undefined &&
    output["booleanList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["booleanList"]["member"] instanceof Array
        ? output["booleanList"]["member"]
        : [output["booleanList"]["member"]];
    contents.booleanList = deserializeAws_ec2BooleanList(wrappedItem, context);
  }
  if (output.enumList === "") {
    contents.enumList = [];
  }
  if (
    output["enumList"] !== undefined &&
    output["enumList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["enumList"]["member"] instanceof Array
        ? output["enumList"]["member"]
        : [output["enumList"]["member"]];
    contents.enumList = deserializeAws_ec2FooEnumList(wrappedItem, context);
  }
  if (output.flattenedList === "") {
    contents.flattenedList = [];
  }
  if (output["flattenedList"] !== undefined) {
    const wrappedItem =
      output["flattenedList"] instanceof Array
        ? output["flattenedList"]
        : [output["flattenedList"]];
    contents.flattenedList = deserializeAws_ec2RenamedListMembers(
      wrappedItem,
      context
    );
  }
  if (output.customName === "") {
    contents.flattenedList2 = [];
  }
  if (output["customName"] !== undefined) {
    const wrappedItem =
      output["customName"] instanceof Array
        ? output["customName"]
        : [output["customName"]];
    contents.flattenedList2 = deserializeAws_ec2RenamedListMembers(
      wrappedItem,
      context
    );
  }
  if (output.integerList === "") {
    contents.integerList = [];
  }
  if (
    output["integerList"] !== undefined &&
    output["integerList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["integerList"]["member"] instanceof Array
        ? output["integerList"]["member"]
        : [output["integerList"]["member"]];
    contents.integerList = deserializeAws_ec2IntegerList(wrappedItem, context);
  }
  if (output.nestedStringList === "") {
    contents.nestedStringList = [];
  }
  if (
    output["nestedStringList"] !== undefined &&
    output["nestedStringList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["nestedStringList"]["member"] instanceof Array
        ? output["nestedStringList"]["member"]
        : [output["nestedStringList"]["member"]];
    contents.nestedStringList = deserializeAws_ec2NestedStringList(
      wrappedItem,
      context
    );
  }
  if (output.renamed === "") {
    contents.renamedListMembers = [];
  }
  if (
    output["renamed"] !== undefined &&
    output["renamed"]["item"] !== undefined
  ) {
    const wrappedItem =
      output["renamed"]["item"] instanceof Array
        ? output["renamed"]["item"]
        : [output["renamed"]["item"]];
    contents.renamedListMembers = deserializeAws_ec2RenamedListMembers(
      wrappedItem,
      context
    );
  }
  if (output.stringList === "") {
    contents.stringList = [];
  }
  if (
    output["stringList"] !== undefined &&
    output["stringList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["stringList"]["member"] instanceof Array
        ? output["stringList"]["member"]
        : [output["stringList"]["member"]];
    contents.stringList = deserializeAws_ec2StringList(wrappedItem, context);
  }
  if (output.stringSet === "") {
    contents.stringSet = new Set([]);
  }
  if (
    output["stringSet"] !== undefined &&
    output["stringSet"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["stringSet"]["member"] instanceof Array
        ? output["stringSet"]["member"]
        : [output["stringSet"]["member"]];
    contents.stringSet = deserializeAws_ec2StringSet(wrappedItem, context);
  }
  if (output.myStructureList === "") {
    contents.structureList = [];
  }
  if (
    output["myStructureList"] !== undefined &&
    output["myStructureList"]["item"] !== undefined
  ) {
    const wrappedItem =
      output["myStructureList"]["item"] instanceof Array
        ? output["myStructureList"]["item"]
        : [output["myStructureList"]["item"]];
    contents.structureList = deserializeAws_ec2StructureList(
      wrappedItem,
      context
    );
  }
  if (output.timestampList === "") {
    contents.timestampList = [];
  }
  if (
    output["timestampList"] !== undefined &&
    output["timestampList"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["timestampList"]["member"] instanceof Array
        ? output["timestampList"]["member"]
        : [output["timestampList"]["member"]];
    contents.timestampList = deserializeAws_ec2TimestampList(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_ec2XmlNamespaceNested = (
  output: any,
  context: __SerdeContext
): XmlNamespaceNested => {
  let contents: any = {
    __type: "XmlNamespaceNested",
    foo: undefined,
    values: undefined
  };
  if (output["foo"] !== undefined) {
    contents.foo =
      output["foo"]["#text"] !== undefined
        ? output["foo"]["#text"]
        : output["foo"];
  }
  if (output.values === "") {
    contents.values = [];
  }
  if (
    output["values"] !== undefined &&
    output["values"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["values"]["member"] instanceof Array
        ? output["values"]["member"]
        : [output["values"]["member"]];
    contents.values = deserializeAws_ec2XmlNamespacedList(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_ec2XmlNamespacedList = (
  output: any,
  context: __SerdeContext
): string[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_ec2XmlNamespacesOutput = (
  output: any,
  context: __SerdeContext
): XmlNamespacesOutput => {
  let contents: any = {
    __type: "XmlNamespacesOutput",
    nested: undefined
  };
  if (output["nested"] !== undefined) {
    contents.nested = deserializeAws_ec2XmlNamespaceNested(
      output["nested"],
      context
    );
  }
  return contents;
};

const deserializeAws_ec2XmlTimestampsOutput = (
  output: any,
  context: __SerdeContext
): XmlTimestampsOutput => {
  let contents: any = {
    __type: "XmlTimestampsOutput",
    dateTime: undefined,
    epochSeconds: undefined,
    httpDate: undefined,
    normal: undefined
  };
  if (output["dateTime"] !== undefined) {
    contents.dateTime = new Date(output["dateTime"]);
  }
  if (output["epochSeconds"] !== undefined) {
    contents.epochSeconds = new Date(output["epochSeconds"]);
  }
  if (output["httpDate"] !== undefined) {
    contents.httpDate = new Date(output["httpDate"]);
  }
  if (output["normal"] !== undefined) {
    contents.normal = new Date(output["normal"]);
  }
  return contents;
};

const deserializeAws_ec2BooleanList = (
  output: any,
  context: __SerdeContext
): boolean[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      (entry["#text"] !== undefined ? entry["#text"] : entry) == "true"
    );
  });
  return contents;
};

const deserializeAws_ec2FooEnumList = (
  output: any,
  context: __SerdeContext
): (FooEnum | string)[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_ec2FooEnumMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: FooEnum | string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] =
      pair["value"]["#text"] !== undefined
        ? pair["value"]["#text"]
        : pair["value"];
  });
  return mapParams;
};

const deserializeAws_ec2FooEnumSet = (
  output: any,
  context: __SerdeContext
): Set<FooEnum | string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_ec2IntegerList = (
  output: any,
  context: __SerdeContext
): number[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(
      parseInt(entry["#text"] !== undefined ? entry["#text"] : entry)
    );
  });
  return contents;
};

const deserializeAws_ec2NestedStringList = (
  output: any,
  context: __SerdeContext
): string[][] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    const wrappedItem =
      entry["member"] instanceof Array ? entry["member"] : [entry["member"]];
    contents.push(deserializeAws_ec2StringList(wrappedItem, context));
  });
  return contents;
};

const deserializeAws_ec2StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_ec2StringSet = (
  output: any,
  context: __SerdeContext
): Set<string> => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(entry["#text"] !== undefined ? entry["#text"] : entry);
  });
  return contents;
};

const deserializeAws_ec2TimestampList = (
  output: any,
  context: __SerdeContext
): Date[] => {
  const contents: any = [];
  (output || []).map((entry: any) => {
    contents.push(new Date(entry));
  });
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

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

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
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

const buildFormUrlencodedString = (entries: any): string =>
  Object.keys(entries)
    .map(
      key =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(entries[key])
    )
    .join("&");

const loadEc2ErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Errors.Error.Code !== undefined) {
    return data.Errors.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
