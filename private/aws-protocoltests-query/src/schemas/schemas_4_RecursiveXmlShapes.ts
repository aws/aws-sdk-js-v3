// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _f, _n, _rM, _RXS, _RXSO, _RXSON, _RXSONe, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var RecursiveXmlShapesOutput = struct(n0, _RXSO, 0, [_n], [() => RecursiveXmlShapesOutputNested1]);
export var RecursiveXmlShapesOutputNested1 = struct(
  n0,
  _RXSON,
  0,
  [_f, _n],
  [0, () => RecursiveXmlShapesOutputNested2]
);
export var RecursiveXmlShapesOutputNested2 = struct(
  n0,
  _RXSONe,
  0,
  [_b, _rM],
  [0, () => RecursiveXmlShapesOutputNested1]
);
export var RecursiveXmlShapes = op(
  n0,
  _RXS,
  0,
  () => Unit,
  () => RecursiveXmlShapesOutput
);
