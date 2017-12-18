/**
 * Errors encountered when the client clock and server clock cannot agree on the
 * current time.
 *
 * These errors are retryable, assuming the SDK has enabled clock skew
 * correction.
 */
export const CLOCK_SKEW_ERROR_CODES = new Set<string>();

/**
 * Errors encountered when the state an operation presumes is not yet ready.
 */
export const STILL_PROCESSING_ERROR_CODES = new Set<string>();

/**
 * Errors that indicate the SDK is being throttled.
 *
 * These errors are always retryable.
 */
export const THROTTLING_ERROR_CODES = new Set<string>();

// Populate the error code sets. This is not done in the Set constructor to
// maintain compatibility with IE 11.

[
    'PriorRequestNotComplete',
].forEach(code => STILL_PROCESSING_ERROR_CODES.add(code));

[
    'AuthFailure',
    'InvalidSignatureException',
    'RequestExpired',
    'RequestInTheFuture',
    'RequestTimeTooSkewed',
    'SignatureDoesNotMatch',
].forEach(code => CLOCK_SKEW_ERROR_CODES.add(code));

[
    'BandwidthLimitExceeded',
    'ProvisionedThroughputExceededException',
    'RequestLimitExceeded',
    'RequestThrottled',
    'RequestThrottledException',
    'SlowDown',
    'ThrottledException',
    'Throttling',
    'ThrottlingException',
    'TooManyRequestsException',
].forEach(code => THROTTLING_ERROR_CODES.add(code));
