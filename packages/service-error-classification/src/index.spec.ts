import { CLOCK_SKEW_ERROR_CODES, THROTTLING_ERROR_CODES } from "./constants";
import { isClockSkewError, isThrottlingError } from "./index";
import { SdkError } from "@aws-sdk/types";

const checkForErrorType = (
  isErrorTypeFunc: (error: SdkError) => boolean,
  errorName: string,
  errorTypeResult: boolean
) => {
  const error = Object.assign(new Error(), {
    name: errorName,
    $metadata: {}
  });
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
