// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _do,
  _fIB,
  _fIH,
  _fIP,
  _fIQ,
  _fl,
  _hH,
  _hQ,
  _HRWFL,
  _HRWFLI,
  _ht,
  _int,
  _MF,
  _MFI,
  _MRB,
  _MRBI,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HttpRequestWithFloatLabelsInput = struct(
  n0,
  _HRWFLI,
  0,
  [_fl, _do],
  [
    [1, 1],
    [1, 1],
  ]
);
export var MalformedFloatInput = struct(
  n0,
  _MFI,
  0,
  [_fIB, _fIP, _fIQ, _fIH],
  [
    1,
    [1, 1],
    [
      1,
      {
        [_hQ]: _fIQ,
      },
    ],
    [
      1,
      {
        [_hH]: _fIH,
      },
    ],
  ]
);
export var MalformedRequestBodyInput = struct(n0, _MRBI, 0, [_int, _fl], [1, 1]);
export var HttpRequestWithFloatLabels = op(
  n0,
  _HRWFL,
  {
    [_ht]: ["GET", "/FloatHttpLabels/{float}/{double}", 200],
  },
  () => HttpRequestWithFloatLabelsInput,
  () => Unit
);
export var MalformedFloat = op(
  n0,
  _MF,
  {
    [_ht]: ["POST", "/MalformedFloat/{floatInPath}", 200],
  },
  () => MalformedFloatInput,
  () => Unit
);
export var MalformedRequestBody = op(
  n0,
  _MRB,
  {
    [_ht]: ["POST", "/MalformedRequestBody", 200],
  },
  () => MalformedRequestBodyInput,
  () => Unit
);
