// smithy-typescript generated code
import { EchoServiceServiceException as __BaseException } from "./EchoServiceServiceException";

import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * @public
 */
export interface EchoInput {
  string?: string;
}

/**
 * @public
 */
export interface EchoOutput {
  string?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface LengthInput {
  string: string | undefined;
}

/**
 * @public
 */
export interface LengthOutput {
  length?: number;
}
