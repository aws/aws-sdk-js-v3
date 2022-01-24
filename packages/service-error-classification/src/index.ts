import { SdkException } from "@aws-sdk/types";

import {
  CLOCK_SKEW_ERROR_CODES,
  THROTTLING_ERROR_CODES,
  TRANSIENT_ERROR_CODES,
  TRANSIENT_ERROR_STATUS_CODES,
} from "./constants";

export const isRetryableByTrait = (error: SdkException) => error.$retryable !== undefined;

export const isClockSkewError = (error: SdkException) => CLOCK_SKEW_ERROR_CODES.includes(error.name);

export const isThrottlingError = (error: SdkException) =>
  error.$metadata?.httpStatusCode === 429 ||
  THROTTLING_ERROR_CODES.includes(error.name) ||
  error.$retryable?.throttling == true;

export const isTransientError = (error: SdkException) =>
  TRANSIENT_ERROR_CODES.includes(error.name) ||
  TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
