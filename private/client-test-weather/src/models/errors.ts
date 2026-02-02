// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WeatherServiceException as __BaseException } from "./WeatherServiceException";

/**
 * @public
 */
export class NoSuchResource extends __BaseException {
  readonly name = "NoSuchResource" as const;
  readonly $fault = "client" as const;
  resourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResource, __BaseException>) {
    super({
      name: "NoSuchResource",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResource.prototype);
    this.resourceType = opts.resourceType;
  }
}
