// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { WeatherClient } from "../WeatherClient";

/**
 * @public
 */
export interface WeatherPaginationConfiguration extends PaginationConfiguration {
  client: WeatherClient;
}
