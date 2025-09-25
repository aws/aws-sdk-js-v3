// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _bo,
  _bV,
  _bVo,
  _CTP,
  _CTPI,
  _CTPO,
  _DD,
  _do,
  _dV,
  _f,
  _fBV,
  _fl,
  _fV,
  _hH,
  _HRC,
  _HRCO,
  _HRWL,
  _HRWLI,
  _http_,
  _i,
  _iV,
  _lo,
  _lV,
  _s,
  _sh,
  _SSP,
  _SSPR,
  _SSPRi,
  _St,
  _sV,
  _sVh,
  _sVt,
  _tBV,
  _ti,
  _uV,
  _v,
  _XF,
  _xN,
  _XNUS,
  _XU,
  _XUR,
  _XURm,
  _XUS,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var ContentTypeParametersInput = struct(n1, _CTPI, 0, [_v], [1]);
export var ContentTypeParametersOutput = struct(n1, _CTPO, 0, [], []);
export var HttpRequestWithLabelsInput = struct(
  n1,
  _HRWLI,
  0,
  [_s, _sh, _i, _lo, _fl, _do, _bo, _ti],
  [
    [0, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [2, 1],
    [4, 1],
  ]
);
export var HttpResponseCodeOutput = struct(n1, _HRCO, 0, [_St], [[1, 32]]);
export var SimpleScalarPropertiesRequest = struct(
  n1,
  _SSPR,
  0,
  [_f, _sV, _tBV, _fBV, _bV, _sVh, _iV, _lV, _fV, _dV],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    0,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    [
      1,
      {
        [_xN]: _DD,
      },
    ],
  ]
);
export var SimpleScalarPropertiesResponse = struct(
  n1,
  _SSPRi,
  0,
  [_f, _sV, _tBV, _fBV, _bV, _sVh, _iV, _lV, _fV, _dV],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    0,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    [
      1,
      {
        [_xN]: _DD,
      },
    ],
  ]
);
export var XmlNestedUnionStruct = struct(
  n1,
  _XNUS,
  0,
  [_sV, _bVo, _bV, _sVh, _iV, _lV, _fV, _dV],
  [0, 2, 1, 1, 1, 1, 1, 1]
);
export var XmlUnionsRequest = struct(n1, _XUR, 0, [_uV], [() => XmlUnionShape]);
export var XmlUnionsResponse = struct(n1, _XURm, 0, [_uV], [() => XmlUnionShape]);
export var XmlUnionShape = uni(
  n1,
  _XUS,
  0,
  [_sV, _bVo, _bV, _sVh, _iV, _lV, _fV, _dV, _uV, _sVt],
  [0, 2, 1, 1, 1, 1, 1, 1, () => XmlUnionShape, () => XmlNestedUnionStruct]
);
export var ContentTypeParameters = op(
  n1,
  _CTP,
  {
    [_http_]: ["PUT", "/ContentTypeParameters", 200],
  },
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput
);
export var HttpRequestWithLabels = op(
  n1,
  _HRWL,
  {
    [_http_]: [
      "GET",
      "/HttpRequestWithLabels/{string}/{short}/{integer}/{long}/{float}/{double}/{boolean}/{timestamp}",
      200,
    ],
  },
  () => HttpRequestWithLabelsInput,
  () => Unit
);
export var HttpResponseCode = op(
  n1,
  _HRC,
  {
    [_http_]: ["PUT", "/HttpResponseCode", 200],
  },
  () => Unit,
  () => HttpResponseCodeOutput
);
export var SimpleScalarProperties = op(
  n1,
  _SSP,
  {
    [_http_]: ["PUT", "/SimpleScalarProperties", 200],
  },
  () => SimpleScalarPropertiesRequest,
  () => SimpleScalarPropertiesResponse
);
export var XmlUnions = op(
  n1,
  _XU,
  {
    [_http_]: ["PUT", "/XmlUnions", 200],
  },
  () => XmlUnionsRequest,
  () => XmlUnionsResponse
);
