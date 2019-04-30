export type ErrorCodeSet = { [errorCode: string]: true };

/**
 * Errors encountered when the client clock and server clock cannot agree on the
 * current time.
 *
 * These errors are retryable, assuming the SDK has enabled clock skew
 * correction.
 */
export const CLOCK_SKEW_ERROR_CODES: ErrorCodeSet = {
  AuthFailure: true,
  InvalidSignatureException: true,
  RequestExpired: true,
  RequestInTheFuture: true,
  RequestTimeTooSkewed: true,
  SignatureDoesNotMatch: true
};

/**
 * Errors encountered when the state presumed by an operation is not yet ready.
 */
export const STILL_PROCESSING_ERROR_CODES: ErrorCodeSet = {
  PriorRequestNotComplete: true
};

/**
 * Errors that indicate the SDK is being throttled.
 *
 * These errors are always retryable.
 */
export const THROTTLING_ERROR_CODES: ErrorCodeSet = {
  BandwidthLimitExceeded: true,
  ProvisionedThroughputExceededException: true,
  RequestLimitExceeded: true,
  RequestThrottled: true,
  RequestThrottledException: true,
  SlowDown: true,
  ThrottledException: true,
  Throttling: true,
  ThrottlingException: true,
  TooManyRequestsException: true
};
