// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { MachineLearningServiceException as __BaseException } from "./MachineLearningServiceException";

/**
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.machinelearning#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  code?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.machinelearning#InvalidInputException";
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.machinelearning#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class PredictorNotMountedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.machinelearning#PredictorNotMountedException";
  readonly name = "PredictorNotMountedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PredictorNotMountedException, __BaseException>) {
    super({
      name: "PredictorNotMountedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PredictorNotMountedException.prototype);
  }
}

/**
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.machinelearning#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
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
    this.code = opts.code;
  }
}
