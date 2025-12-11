// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EchoServiceServiceException as __BaseException } from "./EchoServiceServiceException";

/**
 * For some reason, this service does not like palindromes!
 * @public
 */
export class PalindromeException extends __BaseException {
  readonly name = "PalindromeException" as const;
  readonly $fault = "client" as const;
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
