// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _hQ, _ht, _iIB, _iIH, _iIP, _iIQ, _MI, _MII, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedIntegerInput = struct(
  n0,
  _MII,
  0,
  [_iIB, _iIP, _iIQ, _iIH],
  [
    1,
    [1, 1],
    [
      1,
      {
        [_hQ]: _iIQ,
      },
    ],
    [
      1,
      {
        [_hH]: _iIH,
      },
    ],
  ]
);
export var MalformedInteger = op(
  n0,
  _MI,
  {
    [_ht]: ["POST", "/MalformedInteger/{integerInPath}", 200],
  },
  () => MalformedIntegerInput,
  () => Unit
);
