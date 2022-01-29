import { HttpResponse, MetadataBearer, ResponseMetadata, RetryableTrait, SmithyException } from "@aws-sdk/types";

export interface ServiceExceptionOptions extends SmithyException, MetadataBearer {
  message?: string;
}

/**
 * Base exception class for the exceptions from the server-side.
 */
export class ServiceException extends Error implements SmithyException, MetadataBearer {
  readonly $fault: "client" | "server";

  $response?: HttpResponse;
  $retryable?: RetryableTrait;
  $metadata: ResponseMetadata;

  constructor(options: ServiceExceptionOptions) {
    super(options.message);
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
}

/**
 * This method inject unmodeled member to a deserialized SDK exception,
 * and load the error message from different possible keys('message',
 * 'Message').
 *
 * @internal
 */
export const decorateServiceException = <E extends ServiceException>(
  exception: E,
  additions: { [key: string]: any } = {}
): E => {
  // apply additional properties to deserialized ServiceException object
  Object.entries(additions)
    .filter(([, v]) => v !== undefined)
    .forEach(([k, v]) => {
      // @ts-ignore assign unmodeled keys
      exception[k] = v;
    });
  // load error message from possible locations
  // @ts-expect-error message could exist in Message key.
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  // @ts-expect-error
  delete exception.Message;
  return exception;
};
