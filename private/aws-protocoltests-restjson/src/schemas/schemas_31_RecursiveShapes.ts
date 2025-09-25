// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ba, _fo, _ht, _n, _rM, _RS, _RSIO, _RSION, _RSIONe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RecursiveShapesInputOutput = struct(n0, _RSIO, 0, [_n], [() => RecursiveShapesInputOutputNested1]);
export var RecursiveShapesInputOutputNested1 = struct(
  n0,
  _RSION,
  0,
  [_fo, _n],
  [0, () => RecursiveShapesInputOutputNested2]
);
export var RecursiveShapesInputOutputNested2 = struct(
  n0,
  _RSIONe,
  0,
  [_ba, _rM],
  [0, () => RecursiveShapesInputOutputNested1]
);
export var RecursiveShapes = op(
  n0,
  _RS,
  {
    [_ht]: ["PUT", "/RecursiveShapes", 200],
  },
  () => RecursiveShapesInputOutput,
  () => RecursiveShapesInputOutput
);
