import { ResponseMetadata } from "@aws-sdk/types";

/**
 * An interface used to construct a ServiceException.
 */
export interface ServiceExceptionOption {
  /*
   * Metadata about the response received, including the HTTP status code,
   * HTTP headers, and any request identifiers
   * recognized by the SDK.
   */
  $metadata: ResponseMetadata;
  /** name of exception */
  name?: string;
  /** a human readable description of this exception */
  message?: string;
  /** parsed exception object normalized according to its API model */
  rawException?: any;
  /** the name of the operation that throws the exception */
  operationName?: string;
}

export function initServiceException(
  error: Error,
  option: ServiceExceptionOption
): any {
  const { name, $metadata, rawException, message, operationName } = option;
  const serviceException: any = error;
  serviceException.name = name || `${operationName || ""}Error`;
  serviceException.message =
    message ||
    (rawException
      ? rawException.message || rawException.Message || ""
      : error.message);
  serviceException.details = rawException || {};
  serviceException.$metadata = $metadata;
  return serviceException;
}
