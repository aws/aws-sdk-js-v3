// smithy-typescript generated code
import { EchoServiceServiceException as __BaseException } from "./EchoServiceServiceException";

import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

export interface EchoInput {
  string?: string;
}

export interface EchoOutput {
  string?: string;
}

/**
 * For some reason, this service does not like palindromes!
 */
export class PalindromeException extends __BaseException {
  readonly name: "PalindromeException" = "PalindromeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PalindromeException, __BaseException>) {
    super({
      name: "PalindromeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PalindromeException.prototype);
  }
}

export interface LengthInput {
  string: string | undefined;
}

export interface LengthOutput {
  length?: number;
}

/**
 * @internal
 */
export const EchoInputFilterSensitiveLog = (obj: EchoInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EchoOutputFilterSensitiveLog = (obj: EchoOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LengthInputFilterSensitiveLog = (obj: LengthInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LengthOutputFilterSensitiveLog = (obj: LengthOutput): any => ({
  ...obj,
});
