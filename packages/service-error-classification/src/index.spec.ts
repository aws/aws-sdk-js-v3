import {
    CLOCK_SKEW_ERROR_CODES,
    STILL_PROCESSING_ERROR_CODES,
    THROTTLING_ERROR_CODES,
} from './constants';
import {
    isClockSkewError,
    isStillProcessingError,
    isThrottlingError,
 } from "./index";

describe('isClockSkewError', () => {
    for (const name of CLOCK_SKEW_ERROR_CODES) {
        it(
            `should declare errors with the name ${name} to be throttling errors`,
            () => {
                const error = new Error();
                error.name = name;
                expect(isClockSkewError(error)).toBe(true);
            }
        );
    }
});

describe('isStillProcessingError', () => {
    for (const name of STILL_PROCESSING_ERROR_CODES) {
        it(
            `should declare errors with the name ${name} to be throttling errors`,
            () => {
                const error = new Error();
                error.name = name;
                expect(isStillProcessingError(error)).toBe(true);
            }
        );
    }
});

describe('isThrottlingError', () => {
    for (const name of THROTTLING_ERROR_CODES) {
        it(
            `should declare errors with the name ${name} to be throttling errors`,
            () => {
                const error = new Error();
                error.name = name;
                expect(isThrottlingError(error)).toBe(true);
            }
        );
    }
});
