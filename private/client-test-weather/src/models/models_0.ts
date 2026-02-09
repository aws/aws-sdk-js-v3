// smithy-typescript generated code
/**
 * @public
 */
export interface CityCoordinates {
  latitude: number | undefined;
  longitude: number | undefined;
}

/**
 * @public
 */
export interface GetForecastInput {
  cityId: string | undefined;
}

/**
 * @public
 */
export interface GetForecastOutput {
  chanceOfRain?: number | undefined;
}

/**
 * @public
 */
export interface GetCityInput {
  cityId: string | undefined;
}

/**
 * @public
 */
export interface GetCityOutput {
  name: string | undefined;
  coordinates: CityCoordinates | undefined;
}

/**
 * @public
 */
export interface ListCitiesInput {
  nextToken?: string | undefined;
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface CitySummary {
  cityId: string | undefined;
  name: string | undefined;
}

/**
 * @public
 */
export interface ListCitiesOutput {
  nextToken?: string | undefined;
  items: CitySummary[] | undefined;
}

/**
 * @public
 */
export interface GetCurrentTimeOutput {
  time: Date | undefined;
}
