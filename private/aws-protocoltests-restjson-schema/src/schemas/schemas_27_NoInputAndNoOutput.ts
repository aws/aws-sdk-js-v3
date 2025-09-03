// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _ht, _NIANO, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var NoInputAndNoOutput = op(
  n0,
  _NIANO,
  {
    [_ht]: ["POST", "/NoInputAndNoOutput", 200],
  },
  () => Unit,
  () => Unit
);
