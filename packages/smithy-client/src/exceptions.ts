import { HttpResponse, MetadataBearer, ResponseMetadata, RetryableTrait, SmithyException } from "@aws-sdk/types";

export interface SdkExceptionOptions extends SmithyException, MetadataBearer {
  message?: string;
}

export class SdkException extends Error implements SmithyException, MetadataBearer {
  readonly $fault: "client" | "server";

  $response?: HttpResponse;
  $retryable?: RetryableTrait;
  $metadata: ResponseMetadata;

  constructor(options: SdkExceptionOptions) {
    super(options.message);
    Object.setPrototypeOf(this, SdkException.prototype);
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
export const decorateSdkException = <E extends SdkException>(
  exception: E,
  additions: { [key: string]: any } = {}
): E => {
  // apply additional properties to deserialized SdkException object
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
