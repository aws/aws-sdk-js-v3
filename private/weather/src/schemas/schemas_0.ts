export const _OCA = "OnlyCustomAuth";
export const _OCAO = "OnlyCustomAuthOptional";
export const _OHAKA = "OnlyHttpApiKeyAuth";
export const _OHAKABA = "OnlyHttpApiKeyAndBearerAuth";
export const _OHAKABAR = "OnlyHttpApiKeyAndBearerAuthReversed";
export const _OHAKAO = "OnlyHttpApiKeyAuthOptional";
export const _OHBA = "OnlyHttpBearerAuth";
export const _OHBAO = "OnlyHttpBearerAuthOptional";
export const _OSA = "OnlySigv4Auth";
export const _OSAO = "OnlySigv4AuthOptional";
export const _SAS = "SameAsService";
export const _SASO = "SameAsServiceOutput";
export const _h = "http";
export const _s = "service";
export const n0 = "example.weather";

// smithy-typescript generated code
import { WeatherServiceException as __WeatherServiceException } from "../models/WeatherServiceException";
import { error } from "@smithy/core/schema";

/* eslint no-var: 0 */

export var Unit = "unit" as const;

export var WeatherServiceException = error(
  "smithy.ts.sdk.synthetic.example.weather",
  "WeatherServiceException",
  0,
  [],
  [],
  __WeatherServiceException
);
