// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bM, _ht, _MM, _MMI, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedMapInput = struct(n0, _MMI, 0, [_bM], [128 | 0]);
export var SimpleMap = 128 | 0;

export var MalformedMap = op(
  n0,
  _MM,
  {
    [_ht]: ["POST", "/MalformedMap", 200],
  },
  () => MalformedMapInput,
  () => Unit
);
