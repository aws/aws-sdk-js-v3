// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _ht, _int, _MUa, _MUI, _st, _SU, _u, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedUnionInput = struct(n0, _MUI, 0, [_u], [() => SimpleUnion]);
export var SimpleUnion = uni(n0, _SU, 0, [_int, _st], [1, 0]);
export var MalformedUnion = op(
  n0,
  _MUa,
  {
    [_ht]: ["POST", "/MalformedUnion", 200],
  },
  () => MalformedUnionInput,
  () => Unit
);
