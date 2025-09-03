// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _ht, _UIAO, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var UnitInputAndOutput = op(
  n0,
  _UIAO,
  {
    [_ht]: ["POST", "/UnitInputAndOutput", 200],
  },
  () => Unit,
  () => Unit
);
