// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _HRWRL, _HRWRLI, _ht, _str, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HttpRequestWithRegexLiteralInput = struct(n0, _HRWRLI, 0, [_str], [[0, 1]]);
export var HttpRequestWithRegexLiteral = op(
  n0,
  _HRWRL,
  {
    [_ht]: ["GET", "/ReDosLiteral/{str}/(a+)+", 200],
  },
  () => HttpRequestWithRegexLiteralInput,
  () => Unit
);
