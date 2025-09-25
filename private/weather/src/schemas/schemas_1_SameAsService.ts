// smithy-typescript generated code
import { Unit, _SAS, _SASO, _h, _s, n0 } from "./schemas_0";
import { op, struct } from "@smithy/core/schema";

/* eslint no-var: 0 */

export var SameAsServiceOutput = struct(n0, _SASO, 0, [_s], [0]);
export var SameAsService = op(
  n0,
  _SAS,
  {
    [_h]: ["GET", "/SameAsService", 200],
  },
  () => Unit,
  () => SameAsServiceOutput
);
