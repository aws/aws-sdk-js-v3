import {
  CLOCK_SKEW_ERROR_CODES,
  STILL_PROCESSING_ERROR_CODES,
  THROTTLING_ERROR_CODES
} from "./constants";
import {
  isClockSkewError,
  isStillProcessingError,
  isThrottlingError
} from "./index";

const checkForErrorType = (
  isErrorTypeFunc: (error: Error) => boolean,
  errorName: string,
  errorTypeResult: boolean
) => {
  const error = new Error();
  error.name = errorName;
  expect(isErrorTypeFunc(error)).toBe(errorTypeResult);
};

describe("isClockSkewError", () => {
  CLOCK_SKEW_ERROR_CODES.forEach(name => {
    it(`should declare error with the name "${name}" to be a ClockSkew error`, () => {
      checkForErrorType(isClockSkewError, name, true);
    });
  });

  while (true) {
    const name = Math.random().toString(36).substring(2);
    if (!CLOCK_SKEW_ERROR_CODES.includes(name)) {
      it(`should not declare error with the name "${name}" to be a ClockSkew error`, () => {
        checkForErrorType(isClockSkewError, name, false);
      });
      break;
    }
  }
});

describe("isStillProcessingError", () => {
  STILL_PROCESSING_ERROR_CODES.forEach(name => {
    it(`should declare error with the name "${name}" to be a StillProcessing error`, () => {
      checkForErrorType(isStillProcessingError, name, true);
    });
  });

  while (true) {
    const name = Math.random().toString(36).substring(2);
    if (!STILL_PROCESSING_ERROR_CODES.includes(name)) {
      it(`should not declare error with the name "${name}" to be a StillProcessing error`, () => {
        checkForErrorType(isStillProcessingError, name, false);
      });
      break;
    }
  }
});

describe("isThrottlingError", () => {
  THROTTLING_ERROR_CODES.forEach(name => {
    it(`should declare error with the name "${name}" to be a Throttling error`, () => {
      checkForErrorType(isThrottlingError, name, true);
    });
  });

  while (true) {
    const name = Math.random().toString(36).substring(2);
    if (!THROTTLING_ERROR_CODES.includes(name)) {
      it(`should not declare error with the name "${name}" to be a Throttling error`, () => {
        checkForErrorType(isThrottlingError, name, false);
      });
      break;
    }
  }
});
