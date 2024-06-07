// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { APIGatewayClient } from "../APIGatewayClient";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRestApis: (
  config: APIGatewayPaginationConfiguration,
  input: GetRestApisCommandInput,
  ...rest: any[]
) => Paginator<GetRestApisCommandOutput> = createPaginator<
  APIGatewayPaginationConfiguration,
  GetRestApisCommandInput,
  GetRestApisCommandOutput
>(APIGatewayClient, GetRestApisCommand, "position", "position", "limit");
