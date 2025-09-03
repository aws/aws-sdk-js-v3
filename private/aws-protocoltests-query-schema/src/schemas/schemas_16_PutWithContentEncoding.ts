// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CE_, _da, _en, _hH, _PWCE, _PWCEI, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var PutWithContentEncodingInput = struct(
  n0,
  _PWCEI,
  0,
  [_en, _da],
  [
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    0,
  ]
);
export var PutWithContentEncoding = op(
  n0,
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => Unit
);
