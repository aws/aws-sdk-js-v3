// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _ht, _MTHDT, _MTHDTI, _ti, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedTimestampHeaderDateTimeInput = struct(
  n0,
  _MTHDTI,
  0,
  [_ti],
  [
    [
      5,
      {
        [_hH]: _ti,
      },
    ],
  ]
);
export var MalformedTimestampHeaderDateTime = op(
  n0,
  _MTHDT,
  {
    [_ht]: ["POST", "/MalformedTimestampHeaderDateTime", 200],
  },
  () => MalformedTimestampHeaderDateTimeInput,
  () => Unit
);
