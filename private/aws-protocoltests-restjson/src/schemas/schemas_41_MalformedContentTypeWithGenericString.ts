// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _MCTWGS, _MCTWGSI, _p, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedContentTypeWithGenericStringInput = struct(n0, _MCTWGSI, 0, [_p], [[0, 16]]);
export var MalformedContentTypeWithGenericString = op(
  n0,
  _MCTWGS,
  {
    [_ht]: ["POST", "/MalformedContentTypeWithGenericString", 200],
  },
  () => MalformedContentTypeWithGenericStringInput,
  () => Unit
);
