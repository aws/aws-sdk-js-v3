// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MTBDT, _MTBDTI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampBodyDateTimeInput = struct(n0, _MTBDTI, 0, [_ti], [5]);
export var MalformedTimestampBodyDateTime = op(
  n0,
  _MTBDT,
  {
    [_ht]: ["POST", "/MalformedTimestampBodyDateTime", 200],
  },
  () => MalformedTimestampBodyDateTimeInput,
  () => Unit
);
