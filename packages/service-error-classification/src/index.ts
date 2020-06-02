import {
  CLOCK_SKEW_ERROR_CODES,
  THROTTLING_ERROR_CODES,
  TRANSIENT_ERROR_CODES,
  TRANSIENT_ERROR_STATUS_CODES
} from "./constants";
import { SdkError } from "@aws-sdk/types";

export const isClockSkewError = (error: SdkError) =>
  CLOCK_SKEW_ERROR_CODES.includes(error.name);

export const isThrottlingError = (error: SdkError) =>
  THROTTLING_ERROR_CODES.includes(error.name);

export const isTransientError = (error: SdkError) =>
  TRANSIENT_ERROR_CODES.includes(error.name) ||
  TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
