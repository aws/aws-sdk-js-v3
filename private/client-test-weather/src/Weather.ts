// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { GetCityCommand, GetCityCommandInput, GetCityCommandOutput } from "./commands/GetCityCommand";
import {
  GetCurrentTimeCommand,
  GetCurrentTimeCommandInput,
  GetCurrentTimeCommandOutput,
} from "./commands/GetCurrentTimeCommand";
import { GetForecastCommand, GetForecastCommandInput, GetForecastCommandOutput } from "./commands/GetForecastCommand";
import { ListCitiesCommand, ListCitiesCommandInput, ListCitiesCommandOutput } from "./commands/ListCitiesCommand";
import { paginateListCities } from "./pagination/ListCitiesPaginator";
import { WeatherClient } from "./WeatherClient";

const commands = {
  GetCityCommand,
  GetCurrentTimeCommand,
  GetForecastCommand,
  ListCitiesCommand,
};
const paginators = {
  paginateListCities,
};

export interface Weather {
  /**
   * @see {@link GetCityCommand}
   */
  getCity(
    args: GetCityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCityCommandOutput>;
  getCity(
    args: GetCityCommandInput,
    cb: (err: any, data?: GetCityCommandOutput) => void
  ): void;
  getCity(
    args: GetCityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCurrentTimeCommand}
   */
  getCurrentTime(): Promise<GetCurrentTimeCommandOutput>;
  getCurrentTime(
    args: GetCurrentTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCurrentTimeCommandOutput>;
  getCurrentTime(
    args: GetCurrentTimeCommandInput,
    cb: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): void;
  getCurrentTime(
    args: GetCurrentTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetForecastCommand}
   */
  getForecast(
    args: GetForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetForecastCommandOutput>;
  getForecast(
    args: GetForecastCommandInput,
    cb: (err: any, data?: GetForecastCommandOutput) => void
  ): void;
  getForecast(
    args: GetForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCitiesCommand}
   */
  listCities(): Promise<ListCitiesCommandOutput>;
  listCities(
    args: ListCitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCitiesCommandOutput>;
  listCities(
    args: ListCitiesCommandInput,
    cb: (err: any, data?: ListCitiesCommandOutput) => void
  ): void;
  listCities(
    args: ListCitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCitiesCommandOutput}.
   */
  paginateListCities(
    args?: ListCitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCitiesCommandOutput>;
}

/**
 * Provides weather forecasts.
 * @public
 */
export class Weather extends WeatherClient implements Weather {}
createAggregatedClient(commands, Weather, { paginators });
