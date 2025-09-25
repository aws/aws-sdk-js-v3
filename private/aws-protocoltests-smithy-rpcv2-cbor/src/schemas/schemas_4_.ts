// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Fl, _FO, _v, n1 } from "./schemas_0";
import { Unit } from "./schemas_1_Rpc";

/* eslint no-var: 0 */

export var Float16Output = struct(n1, _FO, 0, [_v], [1]);
export var Float16 = op(
  n1,
  _Fl,
  0,
  () => Unit,
  () => Float16Output
);
