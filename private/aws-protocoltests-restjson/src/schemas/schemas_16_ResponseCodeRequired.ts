// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rC, _RCR, _RCRO, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var ResponseCodeRequiredOutput = struct(n0, _RCRO, 0, [_rC], [[1, 32]]);
export var ResponseCodeRequired = op(
  n0,
  _RCR,
  {
    [_ht]: ["GET", "/responseCodeRequired", 200],
  },
  () => Unit,
  () => ResponseCodeRequiredOutput
);
