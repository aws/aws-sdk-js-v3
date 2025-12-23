// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { APIGatewayClient } from "./APIGatewayClient";
import {
  type GetRestApisCommandInput,
  type GetRestApisCommandOutput,
  GetRestApisCommand,
} from "./commands/GetRestApisCommand";

const commands = {
  GetRestApisCommand,
};

export interface APIGateway {
  /**
   * @see {@link GetRestApisCommand}
   */
  getRestApis(): Promise<GetRestApisCommandOutput>;
  getRestApis(
    args: GetRestApisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestApisCommandOutput>;
  getRestApis(
    args: GetRestApisCommandInput,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
  getRestApis(
    args: GetRestApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class APIGateway extends APIGatewayClient implements APIGateway {}
createAggregatedClient(commands, APIGateway);
