// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _CAVQS, _CAVQSI, _hQ, _ht, _mS, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var ConstantAndVariableQueryStringInput = struct(
  n0,
  _CAVQSI,
  0,
  [_b, _mS],
  [
    [
      0,
      {
        [_hQ]: _b,
      },
    ],
    [
      0,
      {
        [_hQ]: _mS,
      },
    ],
  ]
);
export var ConstantAndVariableQueryString = op(
  n0,
  _CAVQS,
  {
    [_ht]: ["GET", "/ConstantAndVariableQueryString?foo=bar", 200],
  },
  () => ConstantAndVariableQueryStringInput,
  () => Unit
);
