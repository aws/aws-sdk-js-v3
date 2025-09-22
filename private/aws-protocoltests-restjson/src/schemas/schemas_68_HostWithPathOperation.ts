// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _ht, _HWPO, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HostWithPathOperation = op(
  n0,
  _HWPO,
  {
    [_ht]: ["GET", "/HostWithPathOperation", 200],
  },
  () => Unit,
  () => Unit
);
