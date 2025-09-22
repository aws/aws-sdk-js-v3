// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _ht, _TBS, _TBSIO, _TC, _tC, _tI, _tim, _xati, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TestBodyStructureInputOutput = struct(
  n0,
  _TBSIO,
  0,
  [_tI, _tC],
  [
    [
      0,
      {
        [_hH]: _xati,
      },
    ],
    () => TestConfig,
  ]
);
export var TestConfig = struct(n0, _TC, 0, [_tim], [1]);
export var TestBodyStructure = op(
  n0,
  _TBS,
  {
    [_ht]: ["POST", "/body", 200],
  },
  () => TestBodyStructureInputOutput,
  () => TestBodyStructureInputOutput
);
