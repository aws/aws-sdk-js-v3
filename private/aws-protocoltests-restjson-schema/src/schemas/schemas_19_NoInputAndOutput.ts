// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _NIAO, _NIAOO, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var NoInputAndOutputOutput = struct(n0, _NIAOO, 0, [], []);
export var NoInputAndOutput = op(
  n0,
  _NIAO,
  {
    [_ht]: ["POST", "/NoInputAndOutputOutput", 200],
  },
  () => Unit,
  () => NoInputAndOutputOutput
);
