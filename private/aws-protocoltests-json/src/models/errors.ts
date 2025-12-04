// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { JsonProtocolServiceException as __BaseException } from "./JsonProtocolServiceException";
import type { ComplexNestedErrorData, KitchenSink } from "./models_0";

/**
 * This error is thrown when a request is invalid.
 * @public
 */
export class ComplexError extends __BaseException {
  readonly name = "ComplexError" as const;
  readonly $fault = "client" as const;
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
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

/**
 * @public
 */
export class ErrorWithoutMembers extends __BaseException {
  readonly name = "ErrorWithoutMembers" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ErrorWithoutMembers, __BaseException>) {
    super({
      name: "ErrorWithoutMembers",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ErrorWithoutMembers.prototype);
  }
}

/**
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 * @public
 */
export class FooError extends __BaseException {
  readonly name = "FooError" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FooError, __BaseException>) {
    super({
      name: "FooError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, FooError.prototype);
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

/**
 * @public
 */
export class ErrorWithMembers extends __BaseException {
  readonly name = "ErrorWithMembers" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  ComplexData?: KitchenSink | undefined;
  IntegerField?: number | undefined;
  ListField?: string[] | undefined;
  MapField?: Record<string, string> | undefined;
  Message?: string | undefined;
  /**
   * abc
   * @public
   */
  StringField?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ErrorWithMembers, __BaseException>) {
    super({
      name: "ErrorWithMembers",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ErrorWithMembers.prototype);
    this.Code = opts.Code;
    this.ComplexData = opts.ComplexData;
    this.IntegerField = opts.IntegerField;
    this.ListField = opts.ListField;
    this.MapField = opts.MapField;
    this.Message = opts.Message;
    this.StringField = opts.StringField;
  }
}
