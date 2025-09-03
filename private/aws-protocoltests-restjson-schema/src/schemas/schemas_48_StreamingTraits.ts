// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _bl, _fo, _hH, _ht, _s, _SB, _ST, _STIO, _XF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StreamingBlob = sim(n0, _SB, 42, {
  [_s]: 1,
});
export var StreamingTraitsInputOutput = struct(
  n0,
  _STIO,
  0,
  [_fo, _bl],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    [() => StreamingBlob, 16],
  ]
);
export var StreamingTraits = op(
  n0,
  _ST,
  {
    [_ht]: ["POST", "/StreamingTraits", 200],
  },
  () => StreamingTraitsInputOutput,
  () => StreamingTraitsInputOutput
);
