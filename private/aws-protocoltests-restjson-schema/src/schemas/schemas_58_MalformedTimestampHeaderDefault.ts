// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _ht, _MTHD, _MTHDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampHeaderDefaultInput = struct(
  n0,
  _MTHDI,
  0,
  [_ti],
  [
    [
      4,
      {
        [_hH]: _ti,
      },
    ],
  ]
);
export var MalformedTimestampHeaderDefault = op(
  n0,
  _MTHD,
  {
    [_ht]: ["POST", "/MalformedTimestampHeaderDefault", 200],
  },
  () => MalformedTimestampHeaderDefaultInput,
  () => Unit
);
