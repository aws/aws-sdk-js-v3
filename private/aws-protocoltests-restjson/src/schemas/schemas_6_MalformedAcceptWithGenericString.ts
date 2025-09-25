// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MAWGS, _MAWGSO, _p, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedAcceptWithGenericStringOutput = struct(n0, _MAWGSO, 0, [_p], [[0, 16]]);
export var MalformedAcceptWithGenericString = op(
  n0,
  _MAWGS,
  {
    [_ht]: ["POST", "/MalformedAcceptWithGenericString", 200],
  },
  () => Unit,
  () => MalformedAcceptWithGenericStringOutput
);
