// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  strictParseByte as __strictParseByte,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  strictParseShort as __strictParseShort,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "../commands/DatetimeOffsetsCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "../commands/EmptyInputAndEmptyOutputCommand";
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
import {
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
} from "../commands/IgnoresWrappingXmlNameCommand";
import { NestedStructuresCommandInput, NestedStructuresCommandOutput } from "../commands/NestedStructuresCommand";
import { NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput } from "../commands/NoInputAndOutputCommand";
import {
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "../commands/PutWithContentEncodingCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "../commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommandInput, QueryListsCommandOutput } from "../commands/QueryListsCommand";
import { QueryTimestampsCommandInput, QueryTimestampsCommandOutput } from "../commands/QueryTimestampsCommand";
import { RecursiveXmlShapesCommandInput, RecursiveXmlShapesCommandOutput } from "../commands/RecursiveXmlShapesCommand";
import { SimpleInputParamsCommandInput, SimpleInputParamsCommandOutput } from "../commands/SimpleInputParamsCommand";
import {
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput,
} from "../commands/SimpleScalarXmlPropertiesCommand";
import { XmlBlobsCommandInput, XmlBlobsCommandOutput } from "../commands/XmlBlobsCommand";
import { XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput } from "../commands/XmlEmptyBlobsCommand";
import { XmlEmptyListsCommandInput, XmlEmptyListsCommandOutput } from "../commands/XmlEmptyListsCommand";
import { XmlEnumsCommandInput, XmlEnumsCommandOutput } from "../commands/XmlEnumsCommand";
import { XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "../commands/XmlIntEnumsCommand";
import { XmlListsCommandInput, XmlListsCommandOutput } from "../commands/XmlListsCommand";
import { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "../commands/XmlNamespacesCommand";
import { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "../commands/XmlTimestampsCommand";
import { EC2ProtocolServiceException as __BaseException } from "../models/EC2ProtocolServiceException";
import {
  ComplexError,
  ComplexNestedErrorData,
  DatetimeOffsetsOutput,
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputOutput,
  FooEnum,
  FractionalSecondsOutput,
  GreetingStruct,
  GreetingWithErrorsOutput,
  HostLabelInput,
  IgnoresWrappingXmlNameOutput,
  IntegerEnum,
  InvalidGreeting,
  NestedStructuresInput,
  NestedStructWithList,
  NoInputAndOutputOutput,
  PutWithContentEncodingInput,
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
  XmlIntEnumsOutput,
  XmlListsOutput,
  XmlNamespaceNested,
  XmlNamespacesOutput,
  XmlTimestampsOutput,
} from "../models/models_0";

/**
 * serializeAws_ec2DatetimeOffsetsCommand
 */
export const se_DatetimeOffsetsCommand = async (
  input: DatetimeOffsetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _DO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2EmptyInputAndEmptyOutputCommand
 */
export const se_EmptyInputAndEmptyOutputCommand = async (
  input: EmptyInputAndEmptyOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EmptyInputAndEmptyOutputInput(input, context),
    [_A]: _EIAEO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2EndpointOperationCommand
 */
export const se_EndpointOperationCommand = async (
  input: EndpointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _EO,
    [_V]: _,
  });
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
 * serializeAws_ec2EndpointWithHostLabelOperationCommand
 */
export const se_EndpointWithHostLabelOperationCommand = async (
  input: EndpointWithHostLabelOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_HostLabelInput(input, context),
    [_A]: _EWHLO,
    [_V]: _,
  });
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
 * serializeAws_ec2FractionalSecondsCommand
 */
export const se_FractionalSecondsCommand = async (
  input: FractionalSecondsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _FS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2GreetingWithErrorsCommand
 */
export const se_GreetingWithErrorsCommand = async (
  input: GreetingWithErrorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GWE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2HostWithPathOperationCommand
 */
export const se_HostWithPathOperationCommand = async (
  input: HostWithPathOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _HWPO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2IgnoresWrappingXmlNameCommand
 */
export const se_IgnoresWrappingXmlNameCommand = async (
  input: IgnoresWrappingXmlNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _IWXN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2NestedStructuresCommand
 */
export const se_NestedStructuresCommand = async (
  input: NestedStructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_NestedStructuresInput(input, context),
    [_A]: _NS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2NoInputAndOutputCommand
 */
export const se_NoInputAndOutputCommand = async (
  input: NoInputAndOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _NIAO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2PutWithContentEncodingCommand
 */
export const se_PutWithContentEncodingCommand = async (
  input: PutWithContentEncodingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutWithContentEncodingInput(input, context),
    [_A]: _PWCE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2QueryIdempotencyTokenAutoFillCommand
 */
export const se_QueryIdempotencyTokenAutoFillCommand = async (
  input: QueryIdempotencyTokenAutoFillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryIdempotencyTokenAutoFillInput(input, context),
    [_A]: _QITAF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2QueryListsCommand
 */
export const se_QueryListsCommand = async (
  input: QueryListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryListsInput(input, context),
    [_A]: _QL,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2QueryTimestampsCommand
 */
export const se_QueryTimestampsCommand = async (
  input: QueryTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_QueryTimestampsInput(input, context),
    [_A]: _QT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2RecursiveXmlShapesCommand
 */
export const se_RecursiveXmlShapesCommand = async (
  input: RecursiveXmlShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _RXS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2SimpleInputParamsCommand
 */
export const se_SimpleInputParamsCommand = async (
  input: SimpleInputParamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SimpleInputParamsInput(input, context),
    [_A]: _SIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2SimpleScalarXmlPropertiesCommand
 */
export const se_SimpleScalarXmlPropertiesCommand = async (
  input: SimpleScalarXmlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _SSXP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlBlobsCommand
 */
export const se_XmlBlobsCommand = async (
  input: XmlBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlEmptyBlobsCommand
 */
export const se_XmlEmptyBlobsCommand = async (
  input: XmlEmptyBlobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XEB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlEmptyListsCommand
 */
export const se_XmlEmptyListsCommand = async (
  input: XmlEmptyListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XEL,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlEnumsCommand
 */
export const se_XmlEnumsCommand = async (
  input: XmlEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlIntEnumsCommand
 */
export const se_XmlIntEnumsCommand = async (
  input: XmlIntEnumsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XIE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlListsCommand
 */
export const se_XmlListsCommand = async (
  input: XmlListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XL,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlNamespacesCommand
 */
export const se_XmlNamespacesCommand = async (
  input: XmlNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_ec2XmlTimestampsCommand
 */
export const se_XmlTimestampsCommand = async (
  input: XmlTimestampsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _XT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_ec2DatetimeOffsetsCommand
 */
export const de_DatetimeOffsetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DatetimeOffsetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DatetimeOffsetsOutput(data, context);
  const response: DatetimeOffsetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2EmptyInputAndEmptyOutputCommand
 */
export const de_EmptyInputAndEmptyOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EmptyInputAndEmptyOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EmptyInputAndEmptyOutputOutput(data, context);
  const response: EmptyInputAndEmptyOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2EndpointOperationCommand
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
 * deserializeAws_ec2EndpointWithHostLabelOperationCommand
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
 * deserializeAws_ec2FractionalSecondsCommand
 */
export const de_FractionalSecondsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FractionalSecondsCommandOutput> => {
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
 * deserializeAws_ec2GreetingWithErrorsCommand
 */
export const de_GreetingWithErrorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GreetingWithErrorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GreetingWithErrorsOutput(data, context);
  const response: GreetingWithErrorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2HostWithPathOperationCommand
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
 * deserializeAws_ec2IgnoresWrappingXmlNameCommand
 */
export const de_IgnoresWrappingXmlNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IgnoresWrappingXmlNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IgnoresWrappingXmlNameOutput(data, context);
  const response: IgnoresWrappingXmlNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2NestedStructuresCommand
 */
export const de_NestedStructuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NestedStructuresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: NestedStructuresCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_ec2NoInputAndOutputCommand
 */
export const de_NoInputAndOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NoInputAndOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NoInputAndOutputOutput(data, context);
  const response: NoInputAndOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2PutWithContentEncodingCommand
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
 * deserializeAws_ec2QueryIdempotencyTokenAutoFillCommand
 */
export const de_QueryIdempotencyTokenAutoFillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryIdempotencyTokenAutoFillCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryIdempotencyTokenAutoFillCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_ec2QueryListsCommand
 */
export const de_QueryListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryListsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_ec2QueryTimestampsCommand
 */
export const de_QueryTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: QueryTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesCommand
 */
export const de_RecursiveXmlShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecursiveXmlShapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RecursiveXmlShapesOutput(data, context);
  const response: RecursiveXmlShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2SimpleInputParamsCommand
 */
export const de_SimpleInputParamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleInputParamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SimpleInputParamsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_ec2SimpleScalarXmlPropertiesCommand
 */
export const de_SimpleScalarXmlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimpleScalarXmlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SimpleScalarXmlPropertiesOutput(data, context);
  const response: SimpleScalarXmlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlBlobsCommand
 */
export const de_XmlBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlBlobsOutput(data, context);
  const response: XmlBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlEmptyBlobsCommand
 */
export const de_XmlEmptyBlobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyBlobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlBlobsOutput(data, context);
  const response: XmlEmptyBlobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlEmptyListsCommand
 */
export const de_XmlEmptyListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEmptyListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlListsOutput(data, context);
  const response: XmlEmptyListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlEnumsCommand
 */
export const de_XmlEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlEnumsOutput(data, context);
  const response: XmlEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlIntEnumsCommand
 */
export const de_XmlIntEnumsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlIntEnumsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlIntEnumsOutput(data, context);
  const response: XmlIntEnumsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlListsCommand
 */
export const de_XmlListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlListsOutput(data, context);
  const response: XmlListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlNamespacesCommand
 */
export const de_XmlNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlNamespacesOutput(data, context);
  const response: XmlNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_ec2XmlTimestampsCommand
 */
export const de_XmlTimestampsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<XmlTimestampsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_XmlTimestampsOutput(data, context);
  const response: XmlTimestampsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_ec2CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ComplexError":
    case "aws.protocoltests.ec2#ComplexError":
      throw await de_ComplexErrorRes(parsedOutput, context);
    case "InvalidGreeting":
    case "aws.protocoltests.ec2#InvalidGreeting":
      throw await de_InvalidGreetingRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Errors.Error,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_ec2ComplexErrorRes
 */
const de_ComplexErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ComplexError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ComplexError(body.Errors.Error, context);
  const exception = new ComplexError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_ec2InvalidGreetingRes
 */
const de_InvalidGreetingRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidGreeting> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGreeting(body.Errors.Error, context);
  const exception = new InvalidGreeting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_ec2EmptyInputAndEmptyOutputInput
 */
const se_EmptyInputAndEmptyOutputInput = (input: EmptyInputAndEmptyOutputInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_ec2HostLabelInput
 */
const se_HostLabelInput = (input: HostLabelInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_l] != null) {
    entries[_L] = input[_l];
  }
  return entries;
};

/**
 * serializeAws_ec2ListWithXmlName
 */
const se_ListWithXmlName = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`Item.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_ec2NestedStructuresInput
 */
const se_NestedStructuresInput = (input: NestedStructuresInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    const memberEntries = se_StructArg(input[_N], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Nested.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_ec2NestedStructWithList
 */
const se_NestedStructWithList = (input: NestedStructWithList, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    const memberEntries = se_StringList(input[_LA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_ec2PutWithContentEncodingInput
 */
const se_PutWithContentEncodingInput = (input: PutWithContentEncodingInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_e] != null) {
    entries[_E] = input[_e];
  }
  if (input[_d] != null) {
    entries[_D] = input[_d];
  }
  return entries;
};

/**
 * serializeAws_ec2QueryIdempotencyTokenAutoFillInput
 */
const se_QueryIdempotencyTokenAutoFillInput = (
  input: QueryIdempotencyTokenAutoFillInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_t] === undefined) {
    input[_t] = generateIdempotencyToken();
  }
  if (input[_t] != null) {
    entries[_T] = input[_t];
  }
  return entries;
};

/**
 * serializeAws_ec2QueryListsInput
 */
const se_QueryListsInput = (input: QueryListsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    const memberEntries = se_StringList(input[_LA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input[_CLA] != null) {
    const memberEntries = se_GreetingList(input[_CLA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ComplexListArg.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input[_LAWXNM] != null) {
    const memberEntries = se_ListWithXmlName(input[_LAWXNM], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListArgWithXmlNameMember.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input[_LAWXN] != null) {
    const memberEntries = se_ListWithXmlName(input[_LAWXN], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Hi.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input[_NWL] != null) {
    const memberEntries = se_NestedStructWithList(input[_NWL], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NestedWithList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_ec2QueryTimestampsInput
 */
const se_QueryTimestampsInput = (input: QueryTimestampsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_nF] != null) {
    entries[_NF] = __serializeDateTime(input[_nF]);
  }
  if (input[_eM] != null) {
    entries[_EM] = input[_eM].getTime() / 1_000;
  }
  if (input[_eT] != null) {
    entries[_ET] = input[_eT].getTime() / 1_000;
  }
  return entries;
};

/**
 * serializeAws_ec2SimpleInputParamsInput
 */
const se_SimpleInputParamsInput = (input: SimpleInputParamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_F] != null) {
    entries[_F] = input[_F];
  }
  if (input[_B] != null) {
    entries[_B] = input[_B];
  }
  if (input[_Ba] != null) {
    entries[_Ba] = input[_Ba];
  }
  if (input[_Bam] != null) {
    entries[_Bam] = input[_Bam];
  }
  if (input[_FV] != null) {
    entries[_FV] = __serializeFloat(input[_FV]);
  }
  if (input[_Bo] != null) {
    entries[_Bo] = __serializeFloat(input[_Bo]);
  }
  if (input[_Q] != null) {
    entries[_Q] = context.base64Encoder(input[_Q]);
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_HQN] != null) {
    entries[_HQN] = input[_HQN];
  }
  if (input[_HQAXN] != null) {
    entries[_HQAXN] = input[_HQAXN];
  }
  if (input[_UXN] != null) {
    entries[_UXN] = input[_UXN];
  }
  return entries;
};

/**
 * serializeAws_ec2StructArg
 */
const se_StructArg = (input: StructArg, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  if (input[_RA] != null) {
    const memberEntries = se_StructArg(input[_RA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecursiveArg.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_ec2GreetingList
 */
const se_GreetingList = (input: GreetingStruct[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_GreetingStruct(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_ec2GreetingStruct
 */
const se_GreetingStruct = (input: GreetingStruct, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_h] != null) {
    entries[_H] = input[_h];
  }
  return entries;
};

/**
 * serializeAws_ec2StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`Member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_ec2ComplexError
 */
const de_ComplexError = (output: any, context: __SerdeContext): ComplexError => {
  const contents: any = {};
  if (output[_TL] != null) {
    contents[_TL] = __expectString(output[_TL]);
  }
  if (output[_N] != null) {
    contents[_N] = de_ComplexNestedErrorData(output[_N], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2ComplexNestedErrorData
 */
const de_ComplexNestedErrorData = (output: any, context: __SerdeContext): ComplexNestedErrorData => {
  const contents: any = {};
  if (output[_F] != null) {
    contents[_F] = __expectString(output[_F]);
  }
  return contents;
};

/**
 * deserializeAws_ec2DatetimeOffsetsOutput
 */
const de_DatetimeOffsetsOutput = (output: any, context: __SerdeContext): DatetimeOffsetsOutput => {
  const contents: any = {};
  if (output[_da] != null) {
    contents[_da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_da]));
  }
  return contents;
};

/**
 * deserializeAws_ec2EmptyInputAndEmptyOutputOutput
 */
const de_EmptyInputAndEmptyOutputOutput = (output: any, context: __SerdeContext): EmptyInputAndEmptyOutputOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_ec2FractionalSecondsOutput
 */
const de_FractionalSecondsOutput = (output: any, context: __SerdeContext): FractionalSecondsOutput => {
  const contents: any = {};
  if (output[_da] != null) {
    contents[_da] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_da]));
  }
  return contents;
};

/**
 * deserializeAws_ec2GreetingWithErrorsOutput
 */
const de_GreetingWithErrorsOutput = (output: any, context: __SerdeContext): GreetingWithErrorsOutput => {
  const contents: any = {};
  if (output[_g] != null) {
    contents[_g] = __expectString(output[_g]);
  }
  return contents;
};

/**
 * deserializeAws_ec2IgnoresWrappingXmlNameOutput
 */
const de_IgnoresWrappingXmlNameOutput = (output: any, context: __SerdeContext): IgnoresWrappingXmlNameOutput => {
  const contents: any = {};
  if (output[_f] != null) {
    contents[_f] = __expectString(output[_f]);
  }
  return contents;
};

/**
 * deserializeAws_ec2InvalidGreeting
 */
const de_InvalidGreeting = (output: any, context: __SerdeContext): InvalidGreeting => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_ec2ListWithMemberNamespace
 */
const de_ListWithMemberNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2ListWithNamespace
 */
const de_ListWithNamespace = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2NoInputAndOutputOutput
 */
const de_NoInputAndOutputOutput = (output: any, context: __SerdeContext): NoInputAndOutputOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesOutput
 */
const de_RecursiveXmlShapesOutput = (output: any, context: __SerdeContext): RecursiveXmlShapesOutput => {
  const contents: any = {};
  if (output[_n] != null) {
    contents[_n] = de_RecursiveXmlShapesOutputNested1(output[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesOutputNested1
 */
const de_RecursiveXmlShapesOutputNested1 = (output: any, context: __SerdeContext): RecursiveXmlShapesOutputNested1 => {
  const contents: any = {};
  if (output[_f] != null) {
    contents[_f] = __expectString(output[_f]);
  }
  if (output[_n] != null) {
    contents[_n] = de_RecursiveXmlShapesOutputNested2(output[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2RecursiveXmlShapesOutputNested2
 */
const de_RecursiveXmlShapesOutputNested2 = (output: any, context: __SerdeContext): RecursiveXmlShapesOutputNested2 => {
  const contents: any = {};
  if (output[_b] != null) {
    contents[_b] = __expectString(output[_b]);
  }
  if (output[_rM] != null) {
    contents[_rM] = de_RecursiveXmlShapesOutputNested1(output[_rM], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2RenamedListMembers
 */
const de_RenamedListMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2SimpleScalarXmlPropertiesOutput
 */
const de_SimpleScalarXmlPropertiesOutput = (output: any, context: __SerdeContext): SimpleScalarXmlPropertiesOutput => {
  const contents: any = {};
  if (output[_sV] != null) {
    contents[_sV] = __expectString(output[_sV]);
  }
  if (output[_eSV] != null) {
    contents[_eSV] = __expectString(output[_eSV]);
  }
  if (output[_tBV] != null) {
    contents[_tBV] = __parseBoolean(output[_tBV]);
  }
  if (output[_fBV] != null) {
    contents[_fBV] = __parseBoolean(output[_fBV]);
  }
  if (output[_bV] != null) {
    contents[_bV] = __strictParseByte(output[_bV]) as number;
  }
  if (output[_sVh] != null) {
    contents[_sVh] = __strictParseShort(output[_sVh]) as number;
  }
  if (output[_iV] != null) {
    contents[_iV] = __strictParseInt32(output[_iV]) as number;
  }
  if (output[_lV] != null) {
    contents[_lV] = __strictParseLong(output[_lV]) as number;
  }
  if (output[_fV] != null) {
    contents[_fV] = __strictParseFloat(output[_fV]) as number;
  }
  if (output[_DD] != null) {
    contents[_dV] = __strictParseFloat(output[_DD]) as number;
  }
  return contents;
};

/**
 * deserializeAws_ec2StructureList
 */
const de_StructureList = (output: any, context: __SerdeContext): StructureListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StructureListMember(entry, context);
    });
};

/**
 * deserializeAws_ec2StructureListMember
 */
const de_StructureListMember = (output: any, context: __SerdeContext): StructureListMember => {
  const contents: any = {};
  if (output[_v] != null) {
    contents[_a] = __expectString(output[_v]);
  }
  if (output[_o] != null) {
    contents[_b_] = __expectString(output[_o]);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlBlobsOutput
 */
const de_XmlBlobsOutput = (output: any, context: __SerdeContext): XmlBlobsOutput => {
  const contents: any = {};
  if (output[_d] != null) {
    contents[_d] = context.base64Decoder(output[_d]);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlEnumsOutput
 */
const de_XmlEnumsOutput = (output: any, context: __SerdeContext): XmlEnumsOutput => {
  const contents: any = {};
  if (output[_fE] != null) {
    contents[_fE] = __expectString(output[_fE]);
  }
  if (output[_fEo] != null) {
    contents[_fEo] = __expectString(output[_fEo]);
  }
  if (output[_fEoo] != null) {
    contents[_fEoo] = __expectString(output[_fEoo]);
  }
  if (output.fooEnumList === "") {
    contents[_fEL] = [];
  } else if (output[_fEL] != null && output[_fEL][_m] != null) {
    contents[_fEL] = de_FooEnumList(__getArrayIfSingleItem(output[_fEL][_m]), context);
  }
  if (output.fooEnumSet === "") {
    contents[_fES] = [];
  } else if (output[_fES] != null && output[_fES][_m] != null) {
    contents[_fES] = de_FooEnumSet(__getArrayIfSingleItem(output[_fES][_m]), context);
  }
  if (output.fooEnumMap === "") {
    contents[_fEM] = {};
  } else if (output[_fEM] != null && output[_fEM][_en] != null) {
    contents[_fEM] = de_FooEnumMap(__getArrayIfSingleItem(output[_fEM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlIntEnumsOutput
 */
const de_XmlIntEnumsOutput = (output: any, context: __SerdeContext): XmlIntEnumsOutput => {
  const contents: any = {};
  if (output[_iE] != null) {
    contents[_iE] = __strictParseInt32(output[_iE]) as number;
  }
  if (output[_iEn] != null) {
    contents[_iEn] = __strictParseInt32(output[_iEn]) as number;
  }
  if (output[_iEnt] != null) {
    contents[_iEnt] = __strictParseInt32(output[_iEnt]) as number;
  }
  if (output.intEnumList === "") {
    contents[_iEL] = [];
  } else if (output[_iEL] != null && output[_iEL][_m] != null) {
    contents[_iEL] = de_IntegerEnumList(__getArrayIfSingleItem(output[_iEL][_m]), context);
  }
  if (output.intEnumSet === "") {
    contents[_iES] = [];
  } else if (output[_iES] != null && output[_iES][_m] != null) {
    contents[_iES] = de_IntegerEnumSet(__getArrayIfSingleItem(output[_iES][_m]), context);
  }
  if (output.intEnumMap === "") {
    contents[_iEM] = {};
  } else if (output[_iEM] != null && output[_iEM][_en] != null) {
    contents[_iEM] = de_IntegerEnumMap(__getArrayIfSingleItem(output[_iEM][_en]), context);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlListsOutput
 */
const de_XmlListsOutput = (output: any, context: __SerdeContext): XmlListsOutput => {
  const contents: any = {};
  if (output.stringList === "") {
    contents[_sL] = [];
  } else if (output[_sL] != null && output[_sL][_m] != null) {
    contents[_sL] = de_StringList(__getArrayIfSingleItem(output[_sL][_m]), context);
  }
  if (output.stringSet === "") {
    contents[_sS] = [];
  } else if (output[_sS] != null && output[_sS][_m] != null) {
    contents[_sS] = de_StringSet(__getArrayIfSingleItem(output[_sS][_m]), context);
  }
  if (output.integerList === "") {
    contents[_iL] = [];
  } else if (output[_iL] != null && output[_iL][_m] != null) {
    contents[_iL] = de_IntegerList(__getArrayIfSingleItem(output[_iL][_m]), context);
  }
  if (output.booleanList === "") {
    contents[_bL] = [];
  } else if (output[_bL] != null && output[_bL][_m] != null) {
    contents[_bL] = de_BooleanList(__getArrayIfSingleItem(output[_bL][_m]), context);
  }
  if (output.timestampList === "") {
    contents[_tL] = [];
  } else if (output[_tL] != null && output[_tL][_m] != null) {
    contents[_tL] = de_TimestampList(__getArrayIfSingleItem(output[_tL][_m]), context);
  }
  if (output.enumList === "") {
    contents[_eL] = [];
  } else if (output[_eL] != null && output[_eL][_m] != null) {
    contents[_eL] = de_FooEnumList(__getArrayIfSingleItem(output[_eL][_m]), context);
  }
  if (output.intEnumList === "") {
    contents[_iEL] = [];
  } else if (output[_iEL] != null && output[_iEL][_m] != null) {
    contents[_iEL] = de_IntegerEnumList(__getArrayIfSingleItem(output[_iEL][_m]), context);
  }
  if (output.nestedStringList === "") {
    contents[_nSL] = [];
  } else if (output[_nSL] != null && output[_nSL][_m] != null) {
    contents[_nSL] = de_NestedStringList(__getArrayIfSingleItem(output[_nSL][_m]), context);
  }
  if (output.renamed === "") {
    contents[_rLM] = [];
  } else if (output[_r] != null && output[_r][_i] != null) {
    contents[_rLM] = de_RenamedListMembers(__getArrayIfSingleItem(output[_r][_i]), context);
  }
  if (output.flattenedList === "") {
    contents[_fL] = [];
  } else if (output[_fL] != null) {
    contents[_fL] = de_RenamedListMembers(__getArrayIfSingleItem(output[_fL]), context);
  }
  if (output.customName === "") {
    contents[_fLl] = [];
  } else if (output[_cN] != null) {
    contents[_fLl] = de_RenamedListMembers(__getArrayIfSingleItem(output[_cN]), context);
  }
  if (output.flattenedListWithMemberNamespace === "") {
    contents[_fLWMN] = [];
  } else if (output[_fLWMN] != null) {
    contents[_fLWMN] = de_ListWithMemberNamespace(__getArrayIfSingleItem(output[_fLWMN]), context);
  }
  if (output.flattenedListWithNamespace === "") {
    contents[_fLWN] = [];
  } else if (output[_fLWN] != null) {
    contents[_fLWN] = de_ListWithNamespace(__getArrayIfSingleItem(output[_fLWN]), context);
  }
  if (output.myStructureList === "") {
    contents[_sLt] = [];
  } else if (output[_mSL] != null && output[_mSL][_i] != null) {
    contents[_sLt] = de_StructureList(__getArrayIfSingleItem(output[_mSL][_i]), context);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlNamespacedList
 */
const de_XmlNamespacedList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2XmlNamespaceNested
 */
const de_XmlNamespaceNested = (output: any, context: __SerdeContext): XmlNamespaceNested => {
  const contents: any = {};
  if (output[_f] != null) {
    contents[_f] = __expectString(output[_f]);
  }
  if (output.values === "") {
    contents[_va] = [];
  } else if (output[_va] != null && output[_va][_m] != null) {
    contents[_va] = de_XmlNamespacedList(__getArrayIfSingleItem(output[_va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlNamespacesOutput
 */
const de_XmlNamespacesOutput = (output: any, context: __SerdeContext): XmlNamespacesOutput => {
  const contents: any = {};
  if (output[_n] != null) {
    contents[_n] = de_XmlNamespaceNested(output[_n], context);
  }
  return contents;
};

/**
 * deserializeAws_ec2XmlTimestampsOutput
 */
const de_XmlTimestampsOutput = (output: any, context: __SerdeContext): XmlTimestampsOutput => {
  const contents: any = {};
  if (output[_no] != null) {
    contents[_no] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_no]));
  }
  if (output[_dT] != null) {
    contents[_dT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_dT]));
  }
  if (output[_dTOT] != null) {
    contents[_dTOT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_dTOT]));
  }
  if (output[_eS] != null) {
    contents[_eS] = __expectNonNull(__parseEpochTimestamp(output[_eS]));
  }
  if (output[_eSOT] != null) {
    contents[_eSOT] = __expectNonNull(__parseEpochTimestamp(output[_eSOT]));
  }
  if (output[_hD] != null) {
    contents[_hD] = __expectNonNull(__parseRfc7231DateTime(output[_hD]));
  }
  if (output[_hDOT] != null) {
    contents[_hDOT] = __expectNonNull(__parseRfc7231DateTime(output[_hDOT]));
  }
  return contents;
};

/**
 * deserializeAws_ec2BooleanList
 */
const de_BooleanList = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __parseBoolean(entry);
    });
};

/**
 * deserializeAws_ec2FooEnumList
 */
const de_FooEnumList = (output: any, context: __SerdeContext): FooEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2FooEnumMap
 */
const de_FooEnumMap = (output: any, context: __SerdeContext): Record<string, FooEnum> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_ec2FooEnumSet
 */
const de_FooEnumSet = (output: any, context: __SerdeContext): FooEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2IntegerEnumList
 */
const de_IntegerEnumList = (output: any, context: __SerdeContext): IntegerEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_ec2IntegerEnumMap
 */
const de_IntegerEnumMap = (output: any, context: __SerdeContext): Record<string, IntegerEnum> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __strictParseInt32(pair["value"]) as number;
    return acc;
  }, {});
};

/**
 * deserializeAws_ec2IntegerEnumSet
 */
const de_IntegerEnumSet = (output: any, context: __SerdeContext): IntegerEnum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_ec2IntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_ec2NestedStringList
 */
const de_NestedStringList = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StringList(__getArrayIfSingleItem(entry["member"]), context);
    });
};

/**
 * deserializeAws_ec2StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2StringSet
 */
const de_StringSet = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_ec2TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const _ = "2020-01-08";
const _A = "Action";
const _B = "Bar";
const _Ba = "Baz";
const _Bam = "Bam";
const _Bo = "Boo";
const _CLA = "ComplexListArg";
const _D = "Data";
const _DD = "DoubleDribble";
const _DO = "DatetimeOffsets";
const _E = "Encoding";
const _EIAEO = "EmptyInputAndEmptyOutput";
const _EM = "EpochMember";
const _EO = "EndpointOperation";
const _ET = "EpochTarget";
const _EWHLO = "EndpointWithHostLabelOperation";
const _F = "Foo";
const _FE = "FooEnum";
const _FS = "FractionalSeconds";
const _FV = "FloatValue";
const _GWE = "GreetingWithErrors";
const _H = "Hi";
const _HQAXN = "HasQueryAndXmlName";
const _HQN = "HasQueryName";
const _HWPO = "HostWithPathOperation";
const _IWXN = "IgnoresWrappingXmlName";
const _L = "Label";
const _LA = "ListArg";
const _LAWXN = "ListArgWithXmlName";
const _LAWXNM = "ListArgWithXmlNameMember";
const _M = "Message";
const _N = "Nested";
const _NF = "NormalFormat";
const _NIAO = "NoInputAndOutput";
const _NS = "NestedStructures";
const _NWL = "NestedWithList";
const _OA = "OtherArg";
const _PWCE = "PutWithContentEncoding";
const _Q = "Qux";
const _QITAF = "QueryIdempotencyTokenAutoFill";
const _QL = "QueryLists";
const _QT = "QueryTimestamps";
const _RA = "RecursiveArg";
const _RXS = "RecursiveXmlShapes";
const _SA = "StringArg";
const _SIP = "SimpleInputParams";
const _SSXP = "SimpleScalarXmlProperties";
const _T = "Token";
const _TL = "TopLevel";
const _UXN = "UsesXmlName";
const _V = "Version";
const _XB = "XmlBlobs";
const _XE = "XmlEnums";
const _XEB = "XmlEmptyBlobs";
const _XEL = "XmlEmptyLists";
const _XIE = "XmlIntEnums";
const _XL = "XmlLists";
const _XN = "XmlNamespaces";
const _XT = "XmlTimestamps";
const _a = "a";
const _b = "bar";
const _bL = "booleanList";
const _bV = "byteValue";
const _b_ = "b";
const _cN = "customName";
const _d = "data";
const _dT = "dateTime";
const _dTOT = "dateTimeOnTarget";
const _dV = "doubleValue";
const _da = "datetime";
const _e = "encoding";
const _eL = "enumList";
const _eM = "epochMember";
const _eS = "epochSeconds";
const _eSOT = "epochSecondsOnTarget";
const _eSV = "emptyStringValue";
const _eT = "epochTarget";
const _en = "entry";
const _f = "foo";
const _fBV = "falseBooleanValue";
const _fE = "fooEnum1";
const _fEL = "fooEnumList";
const _fEM = "fooEnumMap";
const _fES = "fooEnumSet";
const _fEo = "fooEnum2";
const _fEoo = "fooEnum3";
const _fL = "flattenedList";
const _fLWMN = "flattenedListWithMemberNamespace";
const _fLWN = "flattenedListWithNamespace";
const _fLl = "flattenedList2";
const _fV = "floatValue";
const _g = "greeting";
const _h = "hi";
const _hD = "httpDate";
const _hDOT = "httpDateOnTarget";
const _i = "item";
const _iE = "intEnum1";
const _iEL = "intEnumList";
const _iEM = "intEnumMap";
const _iES = "intEnumSet";
const _iEn = "intEnum2";
const _iEnt = "intEnum3";
const _iL = "integerList";
const _iV = "integerValue";
const _l = "label";
const _lV = "longValue";
const _m = "member";
const _mSL = "myStructureList";
const _n = "nested";
const _nF = "normalFormat";
const _nSL = "nestedStringList";
const _no = "normal";
const _o = "other";
const _r = "renamed";
const _rLM = "renamedListMembers";
const _rM = "recursiveMember";
const _sL = "stringList";
const _sLt = "structureList";
const _sS = "stringSet";
const _sV = "stringValue";
const _sVh = "shortValue";
const _t = "token";
const _tBV = "trueBooleanValue";
const _tL = "timestampList";
const _v = "value";
const _va = "values";

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadEc2ErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Errors.Error?.Code !== undefined) {
    return data.Errors.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
