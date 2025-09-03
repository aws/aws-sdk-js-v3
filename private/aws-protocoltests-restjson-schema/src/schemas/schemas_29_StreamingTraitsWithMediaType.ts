// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _bl, _fo, _hH, _ht, _mT, _s, _STPB, _STWMT, _STWMTIO, _t, _XF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StreamingTextPlainBlob = sim(n0, _STPB, 42, {
  [_mT]: _t,
  [_s]: 1,
});
export var StreamingTraitsWithMediaTypeInputOutput = struct(
  n0,
  _STWMTIO,
  0,
  [_fo, _bl],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    [() => StreamingTextPlainBlob, 16],
  ]
);
export var StreamingTraitsWithMediaType = op(
  n0,
  _STWMT,
  {
    [_ht]: ["POST", "/StreamingTraitsWithMediaType", 200],
  },
  () => StreamingTraitsWithMediaTypeInputOutput,
  () => StreamingTraitsWithMediaTypeInputOutput
);
