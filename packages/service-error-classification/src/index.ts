import {
    CLOCK_SKEW_ERROR_CODES,
    STILL_PROCESSING_ERROR_CODES,
    THROTTLING_ERROR_CODES,
} from './constants';

export function isClockSkewError(error: Error) {
    return CLOCK_SKEW_ERROR_CODES.has(error.name);
}

export function isStillProcessingError(error: Error): boolean {
    return STILL_PROCESSING_ERROR_CODES.has(error.name);
}

export function isThrottlingError(error: Error): boolean {
    return THROTTLING_ERROR_CODES.has(error.name);
}
