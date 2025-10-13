export const _BRE = "BadRequestException";
export const _EC = "EndpointConfiguration";
export const _GRA = "GetRestApis";
export const _GRAR = "GetRestApisRequest";
export const _LORA = "ListOfRestApi";
export const _RA = "RestApi";
export const _RA_ = "Retry-After";
export const _RAe = "RestApis";
export const _TMRE = "TooManyRequestsException";
export const _UE = "UnauthorizedException";
export const _aKS = "apiKeySource";
export const _bMT = "binaryMediaTypes";
export const _c = "client";
export const _cD = "createdDate";
export const _d = "description";
export const _dEAE = "disableExecuteApiEndpoint";
export const _e = "error";
export const _eC = "endpointConfiguration";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _i = "id";
export const _it = "items";
export const _ite = "item";
export const _jN = "jsonName";
export const _l = "limit";
export const _m = "message";
export const _mCS = "minimumCompressionSize";
export const _n = "name";
export const _p = "position";
export const _po = "policy";
export const _rAS = "retryAfterSeconds";
export const _s = "smithy.ts.sdk.synthetic.com.amazonaws.apigateway";
export const _t = "types";
export const _ta = "tags";
export const _v = "version";
export const _vEI = "vpcEndpointIds";
export const _w = "warnings";
export const n0 = "com.amazonaws.apigateway";

// smithy-typescript generated code
import { error, TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { APIGatewayServiceException as __APIGatewayServiceException } from "../models/APIGatewayServiceException";
import {
  BadRequestException as __BadRequestException,
  TooManyRequestsException as __TooManyRequestsException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/index";

/* eslint no-var: 0 */

export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var EndpointConfiguration: StaticStructureSchema = [3, n0, _EC, 0, [_t, _vEI], [64 | 0, 64 | 0]];
export var GetRestApisRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var RestApi: StaticStructureSchema = [
  3,
  n0,
  _RA,
  0,
  [_i, _n, _d, _cD, _v, _w, _bMT, _mCS, _aKS, _eC, _po, _ta, _dEAE],
  [0, 0, 0, 4, 0, 64 | 0, 64 | 0, 1, 0, () => EndpointConfiguration, 0, 128 | 0, 2],
];
export var RestApis: StaticStructureSchema = [
  3,
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
  ],
];
export var TooManyRequestsException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);

export var UnauthorizedException: StaticErrorSchema = [
  -3,
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnauthorizedException, __UnauthorizedException);

export var Unit = "unit" as const;

export var APIGatewayServiceException = error(_s, "APIGatewayServiceException", 0, [], [], null);
TypeRegistry.for(_s).registerError(APIGatewayServiceException, __APIGatewayServiceException);

export var ListOfEndpointType = 64 | 0;

export var ListOfRestApi: StaticListSchema = [1, n0, _LORA, 0, () => RestApi];
export var ListOfString = 64 | 0;

export var MapOfStringToString = 128 | 0;

export var GetRestApis: StaticOperationSchema = [
  9,
  n0,
  _GRA,
  {
    [_h]: ["GET", "/restapis", 200],
  },
  () => GetRestApisRequest,
  () => RestApis,
];
