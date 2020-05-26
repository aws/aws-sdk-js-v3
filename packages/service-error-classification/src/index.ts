import { CLOCK_SKEW_ERROR_CODES, THROTTLING_ERROR_CODES } from "./constants";

export const isClockSkewError = (error: Error) =>
  CLOCK_SKEW_ERROR_CODES.includes(error.name);

export const isThrottlingError = (error: Error) =>
  THROTTLING_ERROR_CODES.includes(error.name);
