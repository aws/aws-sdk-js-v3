// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _HRC, _HRCO, _ht, _St, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HttpResponseCodeOutput = struct(n0, _HRCO, 0, [_St], [[1, 32]]);
export var HttpResponseCode = op(
  n0,
  _HRC,
  {
    [_ht]: ["PUT", "/HttpResponseCode", 200],
  },
  () => Unit,
  () => HttpResponseCodeOutput
);
