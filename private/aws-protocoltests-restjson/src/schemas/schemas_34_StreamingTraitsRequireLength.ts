// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _bl, _fo, _FSB, _hH, _ht, _rL, _s, _STRL, _STRLI, _XF, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var FiniteStreamingBlob = sim(n0, _FSB, 42, {
  [_rL]: 1,
  [_s]: 1,
});
export var StreamingTraitsRequireLengthInput = struct(
  n0,
  _STRLI,
  0,
  [_fo, _bl],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    [() => FiniteStreamingBlob, 16],
  ]
);
export var StreamingTraitsRequireLength = op(
  n0,
  _STRL,
  {
    [_ht]: ["POST", "/StreamingTraitsRequireLength", 200],
  },
  () => StreamingTraitsRequireLengthInput,
  () => Unit
);
