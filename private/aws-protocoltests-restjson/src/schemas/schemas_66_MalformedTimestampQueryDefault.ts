// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _ht, _MTQD, _MTQDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampQueryDefaultInput = struct(
  n0,
  _MTQDI,
  0,
  [_ti],
  [
    [
      4,
      {
        [_hQ]: _ti,
      },
    ],
  ]
);
export var MalformedTimestampQueryDefault = op(
  n0,
  _MTQD,
  {
    [_ht]: ["POST", "/MalformedTimestampQueryDefault", 200],
  },
  () => MalformedTimestampQueryDefaultInput,
  () => Unit
);
