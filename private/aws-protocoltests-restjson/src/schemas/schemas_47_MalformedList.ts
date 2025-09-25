// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bLo, _ht, _ML, _MLI, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedListInput = struct(n0, _MLI, 0, [_bLo], [64 | 0]);
export var SimpleList = 64 | 0;

export var MalformedList = op(
  n0,
  _ML,
  {
    [_ht]: ["POST", "/MalformedList", 200],
  },
  () => MalformedListInput,
  () => Unit
);
