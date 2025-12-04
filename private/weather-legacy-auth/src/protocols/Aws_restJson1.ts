// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import type {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { OnlyCustomAuthCommandInput, OnlyCustomAuthCommandOutput } from "../commands/OnlyCustomAuthCommand";
import {
  OnlyCustomAuthOptionalCommandInput,
  OnlyCustomAuthOptionalCommandOutput,
} from "../commands/OnlyCustomAuthOptionalCommand";
import {
  OnlyHttpApiKeyAndBearerAuthCommandInput,
  OnlyHttpApiKeyAndBearerAuthCommandOutput,
} from "../commands/OnlyHttpApiKeyAndBearerAuthCommand";
import {
  OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
  OnlyHttpApiKeyAndBearerAuthReversedCommandOutput,
} from "../commands/OnlyHttpApiKeyAndBearerAuthReversedCommand";
import { OnlyHttpApiKeyAuthCommandInput, OnlyHttpApiKeyAuthCommandOutput } from "../commands/OnlyHttpApiKeyAuthCommand";
import {
  OnlyHttpApiKeyAuthOptionalCommandInput,
  OnlyHttpApiKeyAuthOptionalCommandOutput,
} from "../commands/OnlyHttpApiKeyAuthOptionalCommand";
import { OnlyHttpBearerAuthCommandInput, OnlyHttpBearerAuthCommandOutput } from "../commands/OnlyHttpBearerAuthCommand";
import {
  OnlyHttpBearerAuthOptionalCommandInput,
  OnlyHttpBearerAuthOptionalCommandOutput,
} from "../commands/OnlyHttpBearerAuthOptionalCommand";
import { OnlySigv4AuthCommandInput, OnlySigv4AuthCommandOutput } from "../commands/OnlySigv4AuthCommand";
import {
  OnlySigv4AuthOptionalCommandInput,
  OnlySigv4AuthOptionalCommandOutput,
} from "../commands/OnlySigv4AuthOptionalCommand";
import { SameAsServiceCommandInput, SameAsServiceCommandOutput } from "../commands/SameAsServiceCommand";
import { WeatherServiceException as __BaseException } from "../models/WeatherServiceException";

/**
 * serializeAws_restJson1OnlyCustomAuthCommand
 */
export const se_OnlyCustomAuthCommand = async (
  input: OnlyCustomAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyCustomAuth");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyCustomAuthOptionalCommand
 */
export const se_OnlyCustomAuthOptionalCommand = async (
  input: OnlyCustomAuthOptionalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyCustomAuthOptional");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyHttpApiKeyAndBearerAuthCommand
 */
export const se_OnlyHttpApiKeyAndBearerAuthCommand = async (
  input: OnlyHttpApiKeyAndBearerAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyHttpApiKeyAndBearerAuth");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyHttpApiKeyAndBearerAuthReversedCommand
 */
export const se_OnlyHttpApiKeyAndBearerAuthReversedCommand = async (
  input: OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyHttpApiKeyAndBearerAuthReversed");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyHttpApiKeyAuthCommand
 */
export const se_OnlyHttpApiKeyAuthCommand = async (
  input: OnlyHttpApiKeyAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyHttpApiKeyAuth");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyHttpApiKeyAuthOptionalCommand
 */
export const se_OnlyHttpApiKeyAuthOptionalCommand = async (
  input: OnlyHttpApiKeyAuthOptionalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyHttpApiKeyAuthOptional");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyHttpBearerAuthCommand
 */
export const se_OnlyHttpBearerAuthCommand = async (
  input: OnlyHttpBearerAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyHttpBearerAuth");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlyHttpBearerAuthOptionalCommand
 */
export const se_OnlyHttpBearerAuthOptionalCommand = async (
  input: OnlyHttpBearerAuthOptionalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlyHttpBearerAuthOptional");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlySigv4AuthCommand
 */
export const se_OnlySigv4AuthCommand = async (
  input: OnlySigv4AuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlySigv4Auth");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OnlySigv4AuthOptionalCommand
 */
export const se_OnlySigv4AuthOptionalCommand = async (
  input: OnlySigv4AuthOptionalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/OnlySigv4AuthOptional");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SameAsServiceCommand
 */
export const se_SameAsServiceCommand = async (
  input: SameAsServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/SameAsService");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1OnlyCustomAuthCommand
 */
export const de_OnlyCustomAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyCustomAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyCustomAuthOptionalCommand
 */
export const de_OnlyCustomAuthOptionalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyCustomAuthOptionalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyHttpApiKeyAndBearerAuthCommand
 */
export const de_OnlyHttpApiKeyAndBearerAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyHttpApiKeyAndBearerAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyHttpApiKeyAndBearerAuthReversedCommand
 */
export const de_OnlyHttpApiKeyAndBearerAuthReversedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyHttpApiKeyAndBearerAuthReversedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyHttpApiKeyAuthCommand
 */
export const de_OnlyHttpApiKeyAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyHttpApiKeyAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyHttpApiKeyAuthOptionalCommand
 */
export const de_OnlyHttpApiKeyAuthOptionalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyHttpApiKeyAuthOptionalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyHttpBearerAuthCommand
 */
export const de_OnlyHttpBearerAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyHttpBearerAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlyHttpBearerAuthOptionalCommand
 */
export const de_OnlyHttpBearerAuthOptionalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlyHttpBearerAuthOptionalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlySigv4AuthCommand
 */
export const de_OnlySigv4AuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlySigv4AuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1OnlySigv4AuthOptionalCommand
 */
export const de_OnlySigv4AuthOptionalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OnlySigv4AuthOptionalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SameAsServiceCommand
 */
export const de_SameAsServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SameAsServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    service: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  }) as never;
};

const throwDefaultError = withBaseException(__BaseException);
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
