// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _bl, _f, _hH, _HPTWMT, _HPTWMTIO, _http_, _mT, _t, _TPB, _XF, n0, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var TextPlainBlob = sim(n0, _TPB, 21, {
  [_mT]: _t,
});
export var HttpPayloadTraitsWithMediaTypeInputOutput = struct(
  n1,
  _HPTWMTIO,
  0,
  [_f, _bl],
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
  n1,
  _HPTWMT,
  {
    [_http_]: ["POST", "/HttpPayloadTraitsWithMediaType", 200],
  },
  () => HttpPayloadTraitsWithMediaTypeInputOutput,
  () => HttpPayloadTraitsWithMediaTypeInputOutput
);
