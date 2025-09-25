// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MTPD, _MTPDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampPathDefaultInput = struct(n0, _MTPDI, 0, [_ti], [[4, 1]]);
export var MalformedTimestampPathDefault = op(
  n0,
  _MTPD,
  {
    [_ht]: ["POST", "/MalformedTimestampPathDefault/{timestamp}", 200],
  },
  () => MalformedTimestampPathDefaultInput,
  () => Unit
);
