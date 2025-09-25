// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _ht, _MTQE, _MTQEI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampQueryEpochInput = struct(
  n0,
  _MTQEI,
  0,
  [_ti],
  [
    [
      7,
      {
        [_hQ]: _ti,
      },
    ],
  ]
);
export var MalformedTimestampQueryEpoch = op(
  n0,
  _MTQE,
  {
    [_ht]: ["POST", "/MalformedTimestampQueryEpoch", 200],
  },
  () => MalformedTimestampQueryEpochInput,
  () => Unit
);
