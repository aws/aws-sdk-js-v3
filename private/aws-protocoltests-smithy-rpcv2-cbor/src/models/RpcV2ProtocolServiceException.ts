// smithy-typescript generated code
import {
  type ServiceExceptionOptions as __ServiceExceptionOptions,
  ServiceException as __ServiceException,
} from "@smithy/core/client";

export type { __ServiceExceptionOptions };

export { __ServiceException };

/**
 * @public
 *
 * Base exception class for all service exceptions from RpcV2Protocol service.
 */
export class RpcV2ProtocolServiceException extends __ServiceException {
  public static readonly shapeId: string = "smithy.ts.sdk.synthetic.smithy.protocoltests.rpcv2Cbor#RpcV2ProtocolServiceException";
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, RpcV2ProtocolServiceException.prototype);
  }
}
