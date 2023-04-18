import { HttpResponse, ResponseMetadata } from "@aws-sdk/types";

import { decorateServiceException } from "./exceptions";

/**
 * Always throws an error with the given `exceptionCtor` and other arguments.
 * This is only called from an error handling code path.
 *
 * @internal
 */
export const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }: any) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata,
  });
  throw decorateServiceException(response, parsedBody);
};

/**
 * @internal
 *
 * Creates {@link throwDefaultError} with bound ExceptionCtor.
 */
export const withBaseException = (ExceptionCtor: { new (...args: any): any }): any => {
  return ({ output, parsedBody, errorCode }: any) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
};

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});
