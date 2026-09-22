// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { APIGatewayClient } from "./APIGatewayClient";
import {
  type GetRestApisCommandInput,
  type GetRestApisCommandOutput,
  GetRestApisCommand,
} from "./commands/GetRestApisCommand";
import { paginateGetRestApis } from "./pagination/GetRestApisPaginator";

const commands = {
  GetRestApisCommand,
};
const paginators = {
  paginateGetRestApis,
};

/**
 * @public
 */
export interface APIGatewayRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface APIGateway {
  /**
   * @see {@link GetRestApisCommand}
   */
  getRestApis(): Promise<GetRestApisCommandOutput>;
  getRestApis(
    args: GetRestApisCommandInput,
    options?: APIGatewayRequestOptions
  ): Promise<GetRestApisCommandOutput>;
  getRestApis(
    args: GetRestApisCommandInput,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
  getRestApis(
    args: GetRestApisCommandInput,
    options: APIGatewayRequestOptions,
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
