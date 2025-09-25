// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _a_,
  _b_,
  _c_,
  _co,
  _fo,
  _hH,
  _hQ,
  _ht,
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
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var NullAndEmptyHeadersIO = struct(
  n0,
  _NAEHIO,
  0,
  [_a_, _b_, _c_],
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
  n0,
  _QPASLMI,
  0,
  [_q, _fo],
  [
    [
      0,
      {
        [_hQ]: _co,
      },
    ],
    [map(n1, _SLM, 0, 0, 64 | 0), 64],
  ]
);
export var StringList = 64 | 0;

export var StringListMap = map(n1, _SLM, 0, 0, 64 | 0);
export var NullAndEmptyHeadersClient = op(
  n0,
  _NAEHC,
  {
    [_ht]: ["GET", "/NullAndEmptyHeadersClient", 200],
  },
  () => NullAndEmptyHeadersIO,
  () => NullAndEmptyHeadersIO
);
export var NullAndEmptyHeadersServer = op(
  n0,
  _NAEHS,
  {
    [_ht]: ["GET", "/NullAndEmptyHeadersServer", 200],
  },
  () => NullAndEmptyHeadersIO,
  () => NullAndEmptyHeadersIO
);
export var QueryParamsAsStringListMap = op(
  n0,
  _QPASLM,
  {
    [_ht]: ["POST", "/StringListMap", 200],
  },
  () => QueryParamsAsStringListMapInput,
  () => Unit
);
