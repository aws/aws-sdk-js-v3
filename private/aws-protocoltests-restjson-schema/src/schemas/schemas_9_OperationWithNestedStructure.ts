// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Di,
  _di,
  _DLi,
  _dLi,
  _DM,
  _dMi,
  _f,
  _Fa,
  _g,
  _ht,
  _l,
  _OWNS,
  _OWNSI,
  _OWNSO,
  _ph,
  _TLo,
  _tLo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Dialog = struct(n0, _Di, 0, [_l, _g, _f], [0, 0, () => Farewell]);
export var Farewell = struct(n0, _Fa, 0, [_ph], [0]);
export var OperationWithNestedStructureInput = struct(n0, _OWNSI, 0, [_tLo], [() => TopLevel]);
export var OperationWithNestedStructureOutput = struct(
  n0,
  _OWNSO,
  0,
  [_di, _dLi, _dMi],
  [() => Dialog, () => DialogList, () => DialogMap]
);
export var TopLevel = struct(n0, _TLo, 0, [_di, _dLi, _dMi], [() => Dialog, () => DialogList, () => DialogMap]);
export var DialogList = list(n0, _DLi, 0, () => Dialog);
export var DialogMap = map(n0, _DM, 0, 0, () => Dialog);
export var OperationWithNestedStructure = op(
  n0,
  _OWNS,
  {
    [_ht]: ["POST", "/OperationWithNestedStructure", 200],
  },
  () => OperationWithNestedStructureInput,
  () => OperationWithNestedStructureOutput
);
