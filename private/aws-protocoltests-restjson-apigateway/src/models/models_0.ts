// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { APIGatewayServiceException as __BaseException } from "./APIGatewayServiceException";

/**
 * @public
 * @enum
 */
export const ApiKeySourceType = {
  AUTHORIZER: "AUTHORIZER",
  HEADER: "HEADER",
} as const;
/**
 * @public
 */
export type ApiKeySourceType = (typeof ApiKeySourceType)[keyof typeof ApiKeySourceType];

/**
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 */
export interface GetRestApisRequest {
  position?: string;
  limit?: number;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  EDGE: "EDGE",
  PRIVATE: "PRIVATE",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 */
export interface EndpointConfiguration {
  types?: EndpointType[];
  vpcEndpointIds?: string[];
}

/**
 * @public
 */
export interface RestApi {
  id?: string;
  name?: string;
  description?: string;
  createdDate?: Date;
  version?: string;
  warnings?: string[];
  binaryMediaTypes?: string[];
  minimumCompressionSize?: number;
  apiKeySource?: ApiKeySourceType;
  endpointConfiguration?: EndpointConfiguration;
  policy?: string;
  tags?: Record<string, string>;
  disableExecuteApiEndpoint?: boolean;
}

/**
 * @public
 */
export interface RestApis {
  items?: RestApi[];
  position?: string;
}

/**
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  retryAfterSeconds?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}
