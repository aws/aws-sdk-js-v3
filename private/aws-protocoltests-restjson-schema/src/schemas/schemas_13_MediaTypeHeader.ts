// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _a, _hH, _ht, _j, _JV, _mT, _MTH, _MTHI, _MTHO, _XJ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var JsonValue = sim(n0, _JV, 0, {
  [_mT]: _a,
});
export var MediaTypeHeaderInput = struct(
  n0,
  _MTHI,
  0,
  [_j],
  [
    [
      () => JsonValue,
      {
        [_hH]: _XJ,
      },
    ],
  ]
);
export var MediaTypeHeaderOutput = struct(
  n0,
  _MTHO,
  0,
  [_j],
  [
    [
      () => JsonValue,
      {
        [_hH]: _XJ,
      },
    ],
  ]
);
export var MediaTypeHeader = op(
  n0,
  _MTH,
  {
    [_ht]: ["GET", "/MediaTypeHeader", 200],
  },
  () => MediaTypeHeaderInput,
  () => MediaTypeHeaderOutput
);
