// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MTPHD, _MTPHDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampPathHttpDateInput = struct(n0, _MTPHDI, 0, [_ti], [[6, 1]]);
export var MalformedTimestampPathHttpDate = op(
  n0,
  _MTPHD,
  {
    [_ht]: ["POST", "/MalformedTimestampPathHttpDate/{timestamp}", 200],
  },
  () => MalformedTimestampPathHttpDateInput,
  () => Unit
);
