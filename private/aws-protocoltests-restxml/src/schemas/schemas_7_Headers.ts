// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _b_,
  _c_,
  _co,
  _f,
  _hH,
  _hQ,
  _http_,
  _NAEHC,
  _NAEHIO,
  _NAEHS,
  _q,
  _QPASLM,
  _QPASLMI,
  _SLM,
  _XA,
  _XB____,
  _XC,
  n0,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var NullAndEmptyHeadersIO = struct(
  n1,
  _NAEHIO,
  0,
  [_a, _b_, _c_],
  [
    [
      0,
      {
        [_hH]: _XA,
      },
    ],
    [
      0,
      {
        [_hH]: _XB____,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _XC,
      },
    ],
  ]
);
export var QueryParamsAsStringListMapInput = struct(
  n1,
  _QPASLMI,
  0,
  [_q, _f],
  [
    [
      0,
      {
        [_hQ]: _co,
      },
    ],
    [map(n0, _SLM, 0, 0, 64 | 0), 64],
  ]
);
export var StringList = 64 | 0;

export var StringListMap = map(n0, _SLM, 0, 0, 64 | 0);
export var NullAndEmptyHeadersClient = op(
  n1,
  _NAEHC,
  {
    [_http_]: ["GET", "/NullAndEmptyHeadersClient", 200],
  },
  () => NullAndEmptyHeadersIO,
  () => NullAndEmptyHeadersIO
);
export var NullAndEmptyHeadersServer = op(
  n1,
  _NAEHS,
  {
    [_http_]: ["GET", "/NullAndEmptyHeadersServer", 200],
  },
  () => NullAndEmptyHeadersIO,
  () => NullAndEmptyHeadersIO
);
export var QueryParamsAsStringListMap = op(
  n1,
  _QPASLM,
  {
    [_http_]: ["POST", "/StringListMap", 200],
  },
  () => QueryParamsAsStringListMapInput,
  () => Unit
);
