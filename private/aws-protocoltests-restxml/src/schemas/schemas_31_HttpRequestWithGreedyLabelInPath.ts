// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _f, _HRWGLIP, _HRWGLIPI, _http_, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var HttpRequestWithGreedyLabelInPathInput = struct(
  n1,
  _HRWGLIPI,
  0,
  [_f, _b],
  [
    [0, 1],
    [0, 1],
  ]
);
export var HttpRequestWithGreedyLabelInPath = op(
  n1,
  _HRWGLIP,
  {
    [_http_]: ["GET", "/HttpRequestWithGreedyLabelInPath/foo/{foo}/baz/{baz+}", 200],
  },
  () => HttpRequestWithGreedyLabelInPathInput,
  () => Unit
);
