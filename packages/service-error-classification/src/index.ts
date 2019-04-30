import {
  CLOCK_SKEW_ERROR_CODES,
  STILL_PROCESSING_ERROR_CODES,
  THROTTLING_ERROR_CODES
} from "./constants";

export function isClockSkewError(error: Error) {
  return error.name in CLOCK_SKEW_ERROR_CODES;
}

export function isStillProcessingError(error: Error): boolean {
  return error.name in STILL_PROCESSING_ERROR_CODES;
}

export function isThrottlingError(error: Error): boolean {
  return error.name in THROTTLING_ERROR_CODES;
}
