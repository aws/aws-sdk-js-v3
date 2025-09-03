// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _he, _hH, _ht, _MCTWBEI, _MCTWBEII, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedContentTypeWithoutBodyEmptyInputInput = struct(
  n0,
  _MCTWBEII,
  0,
  [_he],
  [
    [
      0,
      {
        [_hH]: _he,
      },
    ],
  ]
);
export var MalformedContentTypeWithoutBodyEmptyInput = op(
  n0,
  _MCTWBEI,
  {
    [_ht]: ["POST", "/MalformedContentTypeWithoutBodyEmptyInput", 200],
  },
  () => MalformedContentTypeWithoutBodyEmptyInputInput,
  () => Unit
);
