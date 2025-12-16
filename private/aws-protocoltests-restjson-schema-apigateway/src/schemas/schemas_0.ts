const _BRE = "BadRequestException";
const _EC = "EndpointConfiguration";
const _GRA = "GetRestApis";
const _GRAR = "GetRestApisRequest";
const _LORA = "ListOfRestApi";
const _RA = "RestApi";
const _RA_ = "Retry-After";
const _RAe = "RestApis";
const _TMRE = "TooManyRequestsException";
const _UE = "UnauthorizedException";
const _aKS = "apiKeySource";
const _bMT = "binaryMediaTypes";
const _c = "client";
const _cD = "createdDate";
const _d = "description";
const _dEAE = "disableExecuteApiEndpoint";
const _e = "error";
const _eC = "endpointConfiguration";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "id";
const _it = "items";
const _ite = "item";
const _jN = "jsonName";
const _l = "limit";
const _m = "message";
const _mCS = "minimumCompressionSize";
const _n = "name";
const _p = "position";
const _po = "policy";
const _rAS = "retryAfterSeconds";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.apigateway";
const _t = "types";
const _ta = "tags";
const _v = "version";
const _vEI = "vpcEndpointIds";
const _w = "warnings";
const n0 = "com.amazonaws.apigateway";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { APIGatewayServiceException } from "../models/APIGatewayServiceException";
import { BadRequestException, TooManyRequestsException, UnauthorizedException } from "../models/errors";

/* eslint no-var: 0 */
export var BadRequestException$: StaticErrorSchema = [-3, n0, _BRE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(BadRequestException$, BadRequestException);
export var EndpointConfiguration$: StaticStructureSchema = [3, n0, _EC, 0, [_t, _vEI], [64 | 0, 64 | 0]];
export var GetRestApisRequest$: StaticStructureSchema = [
  3,
  n0,
  _GRAR,
  0,
  [_p, _l],
  [
    [0, { [_hQ]: _p }],
    [1, { [_hQ]: _l }],
  ],
];
export var RestApi$: StaticStructureSchema = [
  3,
  n0,
  _RA,
  0,
  [_i, _n, _d, _cD, _v, _w, _bMT, _mCS, _aKS, _eC, _po, _ta, _dEAE],
  [0, 0, 0, 4, 0, 64 | 0, 64 | 0, 1, 0, () => EndpointConfiguration$, 0, 128 | 0, 2],
];
export var RestApis$: StaticStructureSchema = [3, n0, _RAe, 0, [_it, _p], [[() => ListOfRestApi, { [_jN]: _ite }], 0]];
export var TooManyRequestsException$: StaticErrorSchema = [
  -3,
  n0,
  _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_rAS, _m],
  [[0, { [_hH]: _RA_ }], 0],
];
TypeRegistry.for(n0).registerError(TooManyRequestsException$, TooManyRequestsException);
export var UnauthorizedException$: StaticErrorSchema = [-3, n0, _UE, { [_e]: _c, [_hE]: 401 }, [_m], [0]];
TypeRegistry.for(n0).registerError(UnauthorizedException$, UnauthorizedException);
export var APIGatewayServiceException$: StaticErrorSchema = [-3, _s, "APIGatewayServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(APIGatewayServiceException$, APIGatewayServiceException);
var ListOfEndpointType = 64 | 0;
var ListOfRestApi: StaticListSchema = [1, n0, _LORA, 0, () => RestApi$];
var ListOfString = 64 | 0;
var MapOfStringToString = 128 | 0;
export var GetRestApis$: StaticOperationSchema = [
  9,
  n0,
  _GRA,
  { [_h]: ["GET", "/restapis", 200] },
  () => GetRestApisRequest$,
  () => RestApis$,
];
