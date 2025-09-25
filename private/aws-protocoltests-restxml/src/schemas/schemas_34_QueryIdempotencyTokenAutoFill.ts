// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _http_, _iT, _QITAF, _QITAFI, _to, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var QueryIdempotencyTokenAutoFillInput = struct(
  n1,
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
  n1,
  _QITAF,
  {
    [_http_]: ["POST", "/QueryIdempotencyTokenAutoFill", 200],
  },
  () => QueryIdempotencyTokenAutoFillInput,
  () => Unit
);
