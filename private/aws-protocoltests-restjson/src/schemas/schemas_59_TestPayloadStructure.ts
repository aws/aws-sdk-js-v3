// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _da, _hH, _ht, _PC, _pC, _tI, _TPS, _TPSIO, _xati, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PayloadConfig = struct(n0, _PC, 0, [_da], [1]);
export var TestPayloadStructureInputOutput = struct(
  n0,
  _TPSIO,
  0,
  [_tI, _pC],
  [
    [
      0,
      {
        [_hH]: _xati,
      },
    ],
    [() => PayloadConfig, 16],
  ]
);
export var TestPayloadStructure = op(
  n0,
  _TPS,
  {
    [_ht]: ["POST", "/payload", 200],
  },
  () => TestPayloadStructureInputOutput,
  () => TestPayloadStructureInputOutput
);
