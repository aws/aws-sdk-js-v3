// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _ht, _MTHE, _MTHEI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampHeaderEpochInput = struct(
  n0,
  _MTHEI,
  0,
  [_ti],
  [
    [
      7,
      {
        [_hH]: _ti,
      },
    ],
  ]
);
export var MalformedTimestampHeaderEpoch = op(
  n0,
  _MTHE,
  {
    [_ht]: ["POST", "/MalformedTimestampHeaderEpoch", 200],
  },
  () => MalformedTimestampHeaderEpochInput,
  () => Unit
);
