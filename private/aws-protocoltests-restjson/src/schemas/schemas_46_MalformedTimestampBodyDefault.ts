// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MTBD, _MTBDI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampBodyDefaultInput = struct(n0, _MTBDI, 0, [_ti], [4]);
export var MalformedTimestampBodyDefault = op(
  n0,
  _MTBD,
  {
    [_ht]: ["POST", "/MalformedTimestampBodyDefault", 200],
  },
  () => MalformedTimestampBodyDefaultInput,
  () => Unit
);
