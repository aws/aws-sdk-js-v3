// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _QITAF, _QITAFI, _t, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var QueryIdempotencyTokenAutoFillInput = struct(n0, _QITAFI, 0, [_t], [[0, 4]]);
export var QueryIdempotencyTokenAutoFill = op(
  n0,
  _QITAF,
  0,
  () => QueryIdempotencyTokenAutoFillInput,
  () => Unit
);
