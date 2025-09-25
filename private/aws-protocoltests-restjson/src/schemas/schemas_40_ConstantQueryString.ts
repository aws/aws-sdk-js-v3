// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CQS, _CQSI, _h, _ht, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var ConstantQueryStringInput = struct(n0, _CQSI, 0, [_h], [[0, 1]]);
export var ConstantQueryString = op(
  n0,
  _CQS,
  {
    [_ht]: ["GET", "/ConstantQueryString/{hello}?foo=bar&hello", 200],
  },
  () => ConstantQueryStringInput,
  () => Unit
);
