// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _bl, _fo, _hH, _HPTWMT, _HPTWMTIO, _ht, _mT, _t, _TPB, _XF, n0, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var TextPlainBlob = sim(n1, _TPB, 21, {
  [_mT]: _t,
});
export var HttpPayloadTraitsWithMediaTypeInputOutput = struct(
  n0,
  _HPTWMTIO,
  0,
  [_fo, _bl],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    [() => TextPlainBlob, 16],
  ]
);
export var HttpPayloadTraitsWithMediaType = op(
  n0,
  _HPTWMT,
  {
    [_ht]: ["POST", "/HttpPayloadTraitsWithMediaType", 200],
  },
  () => HttpPayloadTraitsWithMediaTypeInputOutput,
  () => HttpPayloadTraitsWithMediaTypeInputOutput
);
