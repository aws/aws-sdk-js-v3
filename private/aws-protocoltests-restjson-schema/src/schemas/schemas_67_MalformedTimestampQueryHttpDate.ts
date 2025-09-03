// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _ht, _MTQHD, _MTQHDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampQueryHttpDateInput = struct(
  n0,
  _MTQHDI,
  0,
  [_ti],
  [
    [
      6,
      {
        [_hQ]: _ti,
      },
    ],
  ]
);
export var MalformedTimestampQueryHttpDate = op(
  n0,
  _MTQHD,
  {
    [_ht]: ["POST", "/MalformedTimestampQueryHttpDate", 200],
  },
  () => MalformedTimestampQueryHttpDateInput,
  () => Unit
);
