// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MTPE, _MTPEI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampPathEpochInput = struct(n0, _MTPEI, 0, [_ti], [[7, 1]]);
export var MalformedTimestampPathEpoch = op(
  n0,
  _MTPE,
  {
    [_ht]: ["POST", "/MalformedTimestampPathEpoch/{timestamp}", 200],
  },
  () => MalformedTimestampPathEpochInput,
  () => Unit
);
