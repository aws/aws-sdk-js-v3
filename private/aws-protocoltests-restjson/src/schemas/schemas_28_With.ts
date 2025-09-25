// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dIB, _dIH, _dIP, _dIQ, _hH, _hQ, _ht, _MD, _MDI, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedDoubleInput = struct(
  n0,
  _MDI,
  0,
  [_dIB, _dIP, _dIQ, _dIH],
  [
    1,
    [1, 1],
    [
      1,
      {
        [_hQ]: _dIQ,
      },
    ],
    [
      1,
      {
        [_hH]: _dIH,
      },
    ],
  ]
);
export var MalformedDouble = op(
  n0,
  _MD,
  {
    [_ht]: ["POST", "/MalformedDouble/{doubleInPath}", 200],
  },
  () => MalformedDoubleInput,
  () => Unit
);
