// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GlacierServiceException as __BaseException } from "./GlacierServiceException";

/**
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  readonly name = "MissingParameterValueException" as const;
  readonly $fault = "client" as const;
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  readonly name = "RequestTimeoutException" as const;
  readonly $fault = "client" as const;
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}
