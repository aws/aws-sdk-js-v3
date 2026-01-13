const _OCA = "OnlyCustomAuth";
const _OCAO = "OnlyCustomAuthOptional";
const _OHAKA = "OnlyHttpApiKeyAuth";
const _OHAKABA = "OnlyHttpApiKeyAndBearerAuth";
const _OHAKABAR = "OnlyHttpApiKeyAndBearerAuthReversed";
const _OHAKAO = "OnlyHttpApiKeyAuthOptional";
const _OHBA = "OnlyHttpBearerAuth";
const _OHBAO = "OnlyHttpBearerAuthOptional";
const _OSA = "OnlySigv4Auth";
const _OSAO = "OnlySigv4AuthOptional";
const _SAS = "SameAsService";
const _SASO = "SameAsServiceOutput";
const _h = "http";
const _s = "service";
const _sm = "smithy.ts.sdk.synthetic.example.weather";
const n0 = "example.weather";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { WeatherServiceException } from "../models/WeatherServiceException";

/* eslint no-var: 0 */
export var SameAsServiceOutput$: StaticStructureSchema = [3, n0, _SASO,
  0,
  [_s],
  [0]
];
var __Unit = "unit" as const;
export var WeatherServiceException$: StaticErrorSchema = [-3, _sm, "WeatherServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(WeatherServiceException$, WeatherServiceException);
export var OnlyCustomAuth$: StaticOperationSchema = [9, n0, _OCA,
  { [_h]: ["GET", "/OnlyCustomAuth", 200] }, () => __Unit, () => __Unit
];
export var OnlyCustomAuthOptional$: StaticOperationSchema = [9, n0, _OCAO,
  { [_h]: ["GET", "/OnlyCustomAuthOptional", 200] }, () => __Unit, () => __Unit
];
export var OnlyHttpApiKeyAndBearerAuth$: StaticOperationSchema = [9, n0, _OHAKABA,
  { [_h]: ["GET", "/OnlyHttpApiKeyAndBearerAuth", 200] }, () => __Unit, () => __Unit
];
export var OnlyHttpApiKeyAndBearerAuthReversed$: StaticOperationSchema = [9, n0, _OHAKABAR,
  { [_h]: ["GET", "/OnlyHttpApiKeyAndBearerAuthReversed", 200] }, () => __Unit, () => __Unit
];
export var OnlyHttpApiKeyAuth$: StaticOperationSchema = [9, n0, _OHAKA,
  { [_h]: ["GET", "/OnlyHttpApiKeyAuth", 200] }, () => __Unit, () => __Unit
];
export var OnlyHttpApiKeyAuthOptional$: StaticOperationSchema = [9, n0, _OHAKAO,
  { [_h]: ["GET", "/OnlyHttpApiKeyAuthOptional", 200] }, () => __Unit, () => __Unit
];
export var OnlyHttpBearerAuth$: StaticOperationSchema = [9, n0, _OHBA,
  { [_h]: ["GET", "/OnlyHttpBearerAuth", 200] }, () => __Unit, () => __Unit
];
export var OnlyHttpBearerAuthOptional$: StaticOperationSchema = [9, n0, _OHBAO,
  { [_h]: ["GET", "/OnlyHttpBearerAuthOptional", 200] }, () => __Unit, () => __Unit
];
export var OnlySigv4Auth$: StaticOperationSchema = [9, n0, _OSA,
  { [_h]: ["GET", "/OnlySigv4Auth", 200] }, () => __Unit, () => __Unit
];
export var OnlySigv4AuthOptional$: StaticOperationSchema = [9, n0, _OSAO,
  { [_h]: ["GET", "/OnlySigv4AuthOptional", 200] }, () => __Unit, () => __Unit
];
export var SameAsService$: StaticOperationSchema = [9, n0, _SAS,
  { [_h]: ["GET", "/SameAsService", 200] }, () => __Unit, () => SameAsServiceOutput$
];
