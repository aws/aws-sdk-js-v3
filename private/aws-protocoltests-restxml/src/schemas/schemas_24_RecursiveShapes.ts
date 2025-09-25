// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ba, _f, _http_, _n, _rM, _RS, _RSION, _RSIONe, _RSR, _RSRe, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var RecursiveShapesInputOutputNested1 = struct(
  n1,
  _RSION,
  0,
  [_f, _n],
  [0, () => RecursiveShapesInputOutputNested2]
);
export var RecursiveShapesInputOutputNested2 = struct(
  n1,
  _RSIONe,
  0,
  [_ba, _rM],
  [0, () => RecursiveShapesInputOutputNested1]
);
export var RecursiveShapesRequest = struct(n1, _RSR, 0, [_n], [() => RecursiveShapesInputOutputNested1]);
export var RecursiveShapesResponse = struct(n1, _RSRe, 0, [_n], [() => RecursiveShapesInputOutputNested1]);
export var RecursiveShapes = op(
  n1,
  _RS,
  {
    [_http_]: ["PUT", "/RecursiveShapes", 200],
  },
  () => RecursiveShapesRequest,
  () => RecursiveShapesResponse
);
