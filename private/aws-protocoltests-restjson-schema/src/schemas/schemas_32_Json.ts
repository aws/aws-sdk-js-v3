// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GS, _hi, _ht, _MAWB, _MCTWB, n0, n1 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var GreetingStruct = struct(n1, _GS, 0, [_hi], [0]);
export var MalformedAcceptWithBody = op(
  n0,
  _MAWB,
  {
    [_ht]: ["POST", "/MalformedAcceptWithBody", 200],
  },
  () => Unit,
  () => GreetingStruct
);
export var MalformedContentTypeWithBody = op(
  n0,
  _MCTWB,
  {
    [_ht]: ["POST", "/MalformedContentTypeWithBody", 200],
  },
  () => GreetingStruct,
  () => Unit
);
