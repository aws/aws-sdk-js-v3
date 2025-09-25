// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _hQ, _ht, _lIB, _lIH, _lIP, _lIQ, _MLa, _MLIa, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedLongInput = struct(
  n0,
  _MLIa,
  0,
  [_lIB, _lIP, _lIQ, _lIH],
  [
    1,
    [1, 1],
    [
      1,
      {
        [_hQ]: _lIQ,
      },
    ],
    [
      1,
      {
        [_hH]: _lIH,
      },
    ],
  ]
);
export var MalformedLong = op(
  n0,
  _MLa,
  {
    [_ht]: ["POST", "/MalformedLong/{longInPath}", 200],
  },
  () => MalformedLongInput,
  () => Unit
);
