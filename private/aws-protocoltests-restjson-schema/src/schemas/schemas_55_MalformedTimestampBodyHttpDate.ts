// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MTBHD, _MTBHDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampBodyHttpDateInput = struct(n0, _MTBHDI, 0, [_ti], [6]);
export var MalformedTimestampBodyHttpDate = op(
  n0,
  _MTBHD,
  {
    [_ht]: ["POST", "/MalformedTimestampBodyHttpDate", 200],
  },
  () => MalformedTimestampBodyHttpDateInput,
  () => Unit
);
