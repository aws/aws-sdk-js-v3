// smithy-typescript generated code
import { error, list, op, struct, TypeRegistry } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  TooManyRequestsException as __TooManyRequestsException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/index";
import {
  _aKS,
  _bMT,
  _BRE,
  _c,
  _cD,
  _d,
  _dEAE,
  _e,
  _EC,
  _eC,
  _GRA,
  _GRAR,
  _h,
  _hE,
  _hH,
  _hQ,
  _i,
  _it,
  _ite,
  _jN,
  _l,
  _LORA,
  _m,
  _mCS,
  _n,
  _p,
  _po,
  _RA,
  _RA_,
  _RAe,
  _rAS,
  _t,
  _ta,
  _TMRE,
  _UE,
  _v,
  _vEI,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
  null
);
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var EndpointConfiguration = struct(n0, _EC, 0, [_t, _vEI], [64 | 0, 64 | 0]);
export var GetRestApisRequest = struct(
  n0,
  _GRAR,
  0,
  [_p, _l],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var RestApi = struct(
  n0,
  _RA,
  0,
  [_i, _n, _d, _cD, _v, _w, _bMT, _mCS, _aKS, _eC, _po, _ta, _dEAE],
  [0, 0, 0, 4, 0, 64 | 0, 64 | 0, 1, 0, () => EndpointConfiguration, 0, 128 | 0, 2]
);
export var RestApis = struct(
  n0,
  _RAe,
  0,
  [_it, _p],
  [
    [
      () => ListOfRestApi,
      {
        [_jN]: _ite,
      },
    ],
    0,
  ]
);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_rAS, _m],
  [
    [
      0,
      {
        [_hH]: _RA_,
      },
    ],
    0,
  ],
  null
);
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);

export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],
  null
);
TypeRegistry.for(n0).registerError(UnauthorizedException, __UnauthorizedException);

export var Unit = "unit" as const;

export var ListOfEndpointType = 64 | 0;

export var ListOfRestApi = list(n0, _LORA, 0, () => RestApi);
export var ListOfString = 64 | 0;

export var MapOfStringToString = 128 | 0;

export var GetRestApis = op(
  n0,
  _GRA,
  {
    [_h]: ["GET", "/restapis", 200],
  },
  () => GetRestApisRequest,
  () => RestApis
);
