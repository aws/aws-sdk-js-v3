// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _hQ, _ht, _IQPIR, _IQPIRO, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var IgnoreQueryParamsInResponseOutput = struct(
  n0,
  _IQPIRO,
  0,
  [_b],
  [
    [
      0,
      {
        [_hQ]: _b,
      },
    ],
  ]
);
export var IgnoreQueryParamsInResponse = op(
  n0,
  _IQPIR,
  {
    [_ht]: ["GET", "/IgnoreQueryParamsInResponse", 200],
  },
  () => Unit,
  () => IgnoreQueryParamsInResponseOutput
);
