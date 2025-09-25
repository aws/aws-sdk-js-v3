// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _RCHF, _RCHFIO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResponseCodeHttpFallbackInputOutput = struct(n0, _RCHFIO, 0, [], []);
export var ResponseCodeHttpFallback = op(
  n0,
  _RCHF,
  {
    [_ht]: ["GET", "/responseCodeHttpFallback", 201],
  },
  () => ResponseCodeHttpFallbackInputOutput,
  () => ResponseCodeHttpFallbackInputOutput
);
