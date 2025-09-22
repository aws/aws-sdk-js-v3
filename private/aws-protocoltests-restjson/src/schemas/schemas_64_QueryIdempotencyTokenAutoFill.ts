// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _ht, _iT, _QITAF, _QITAFI, _to, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var QueryIdempotencyTokenAutoFillInput = struct(
  n0,
  _QITAFI,
  0,
  [_to],
  [
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _to,
      },
    ],
  ]
);
export var QueryIdempotencyTokenAutoFill = op(
  n0,
  _QITAF,
  {
    [_ht]: ["POST", "/QueryIdempotencyTokenAutoFill", 200],
  },
  () => QueryIdempotencyTokenAutoFillInput,
  () => Unit
);
