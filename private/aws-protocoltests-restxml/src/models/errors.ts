// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComplexNestedErrorData } from "./models_0";
import { RestXmlProtocolServiceException as __BaseException } from "./RestXmlProtocolServiceException";

/**
 * This error is thrown when a request is invalid.
 * @public
 */
export class ComplexError extends __BaseException {
  readonly name = "ComplexError" as const;
  readonly $fault = "client" as const;
  Header?: string | undefined;
  TopLevel?: string | undefined;
  Nested?: ComplexNestedErrorData | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComplexError, __BaseException>) {
    super({
      name: "ComplexError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComplexError.prototype);
    this.Header = opts.Header;
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

/**
 * This error is thrown when an invalid greeting value is provided.
 * @public
 */
export class InvalidGreeting extends __BaseException {
  readonly name = "InvalidGreeting" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGreeting, __BaseException>) {
    super({
      name: "InvalidGreeting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGreeting.prototype);
    this.Message = opts.Message;
  }
}
