import {
  CLOCK_SKEW_ERROR_CODES,
  THROTTLING_ERROR_CODES,
  TRANSIENT_ERROR_CODES,
  TRANSIENT_ERROR_STATUS_CODES
} from "./constants";
import { isClockSkewError, isThrottlingError, isTransientError } from "./index";
import { SdkError } from "@aws-sdk/types";

const checkForErrorType = (
  isErrorTypeFunc: (error: SdkError) => boolean,
  options: { name?: string; httpStatusCode?: number },
  errorTypeResult: boolean
) => {
  const { name, httpStatusCode } = options;
  const error = Object.assign(new Error(), {
    name,
    $metadata: { httpStatusCode }
  });
  expect(isErrorTypeFunc(error)).toBe(errorTypeResult);
};

describe("isClockSkewError", () => {
  CLOCK_SKEW_ERROR_CODES.forEach(name => {
    it(`should declare error with the name "${name}" to be a ClockSkew error`, () => {
      checkForErrorType(isClockSkewError, { name }, true);
    });
  });

  while (true) {
    const name = Math.random().toString(36).substring(2);
    if (!CLOCK_SKEW_ERROR_CODES.includes(name)) {
      it(`should not declare error with the name "${name}" to be a ClockSkew error`, () => {
        checkForErrorType(isClockSkewError, { name }, false);
      });
      break;
    }
  }
});

describe("isThrottlingError", () => {
  THROTTLING_ERROR_CODES.forEach(name => {
    it(`should declare error with the name "${name}" to be a Throttling error`, () => {
      checkForErrorType(isThrottlingError, { name }, true);
    });
  });

  while (true) {
    const name = Math.random().toString(36).substring(2);
    if (!THROTTLING_ERROR_CODES.includes(name)) {
      it(`should not declare error with the name "${name}" to be a Throttling error`, () => {
        checkForErrorType(isThrottlingError, { name }, false);
      });
      break;
    }
  }
});

describe("isTransientError", () => {
  TRANSIENT_ERROR_CODES.forEach(name => {
    it(`should declare error with the name "${name}" to be a Throttling error`, () => {
      checkForErrorType(isTransientError, { name }, true);
    });
  });

  TRANSIENT_ERROR_STATUS_CODES.forEach(httpStatusCode => {
    it(`should declare error with the HTTP Status Code "${httpStatusCode}" to be a Throttling error`, () => {
      checkForErrorType(isTransientError, { httpStatusCode }, true);
    });
  });

  while (true) {
    const name = Math.random().toString(36).substring(2);
    if (!TRANSIENT_ERROR_CODES.includes(name)) {
      it(`should not declare error with the name "${name}" to be a Throttling error`, () => {
        checkForErrorType(isTransientError, { name }, false);
      });
      break;
    }
  }

  while (true) {
    const httpStatusCode = Math.ceil(Math.random() * 10 ** 3);
    if (!TRANSIENT_ERROR_STATUS_CODES.includes(httpStatusCode)) {
      it(`should declare error with the HTTP Status Code "${httpStatusCode}" to be a Throttling error`, () => {
        checkForErrorType(isTransientError, { httpStatusCode }, false);
      });
      break;
    }
  }
});
