// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _ht, _i, _JB, _MAWP, _MAWPO, _MCTWP, _MCTWPI, _mT, _p, n0, n1 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var JpegBlob = sim(n1, _JB, 21, {
  [_mT]: _i,
});
export var MalformedAcceptWithPayloadOutput = struct(n0, _MAWPO, 0, [_p], [[() => JpegBlob, 16]]);
export var MalformedContentTypeWithPayloadInput = struct(n0, _MCTWPI, 0, [_p], [[() => JpegBlob, 16]]);
export var MalformedAcceptWithPayload = op(
  n0,
  _MAWP,
  {
    [_ht]: ["POST", "/MalformedAcceptWithPayload", 200],
  },
  () => Unit,
  () => MalformedAcceptWithPayloadOutput
);
export var MalformedContentTypeWithPayload = op(
  n0,
  _MCTWP,
  {
    [_ht]: ["POST", "/MalformedContentTypeWithPayload", 200],
  },
  () => MalformedContentTypeWithPayloadInput,
  () => Unit
);
