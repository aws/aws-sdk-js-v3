/**
 * Errors encountered when the client clock and server clock cannot agree on the
 * current time.
 *
 * These errors are retryable, assuming the SDK has enabled clock skew
 * correction.
 */
export const CLOCK_SKEW_ERROR_CODES = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch"
];

/**
 * Errors encountered when the state presumed by an operation is not yet ready.
 */
export const STILL_PROCESSING_ERROR_CODES = ["PriorRequestNotComplete"];

/**
 * Errors that indicate the SDK is being throttled.
 *
 * These errors are always retryable.
 */
export const THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException"
];
