// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { APIGatewayClient } from "./APIGatewayClient";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand";
import { paginateGetRestApis } from "./pagination/GetRestApisPaginator";

const commands = {
  GetRestApisCommand,
};
const paginators = {
  paginateGetRestApis,
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

  /**
   * @see {@link GetRestApisCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetRestApisCommandOutput}.
   */
  paginateGetRestApis(
    args?: GetRestApisCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetRestApisCommandOutput>;
}

/**
 * @public
 */
export class APIGateway extends APIGatewayClient implements APIGateway {}
createAggregatedClient(commands, APIGateway, { paginators });
