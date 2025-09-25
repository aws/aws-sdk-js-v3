// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _fo, _HRWGLIP, _HRWGLIPI, _ht, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HttpRequestWithGreedyLabelInPathInput = struct(
  n0,
  _HRWGLIPI,
  0,
  [_fo, _b],
  [
    [0, 1],
    [0, 1],
  ]
);
export var HttpRequestWithGreedyLabelInPath = op(
  n0,
  _HRWGLIP,
  {
    [_ht]: ["GET", "/HttpRequestWithGreedyLabelInPath/foo/{foo}/baz/{baz+}", 200],
  },
  () => HttpRequestWithGreedyLabelInPathInput,
  () => Unit
);
