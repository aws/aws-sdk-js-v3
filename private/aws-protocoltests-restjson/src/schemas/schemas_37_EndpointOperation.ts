// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _end, _EO, _ht, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var EndpointOperation = op(
  n0,
  _EO,
  {
    [_ht]: ["POST", "/EndpointOperation", 200],
    [_end]: ["foo."],
  },
  () => Unit,
  () => Unit
);
