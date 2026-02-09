// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListCitiesCommand, ListCitiesCommandInput, ListCitiesCommandOutput } from "../commands/ListCitiesCommand";
import { WeatherClient } from "../WeatherClient";
import { WeatherPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCities: (
  config: WeatherPaginationConfiguration,
  input: ListCitiesCommandInput,
  ...rest: any[]
) => Paginator<ListCitiesCommandOutput> = createPaginator<
  WeatherPaginationConfiguration,
  ListCitiesCommandInput,
  ListCitiesCommandOutput
>(WeatherClient, ListCitiesCommand, "nextToken", "nextToken", "pageSize");
