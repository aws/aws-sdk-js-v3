// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _do, _fl, _HRWFL, _HRWFLI, _http_, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var HttpRequestWithFloatLabelsInput = struct(
  n1,
  _HRWFLI,
  0,
  [_fl, _do],
  [
    [1, 1],
    [1, 1],
  ]
);
export var HttpRequestWithFloatLabels = op(
  n1,
  _HRWFL,
  {
    [_http_]: ["GET", "/FloatHttpLabels/{float}/{double}", 200],
  },
  () => HttpRequestWithFloatLabelsInput,
  () => Unit
);
