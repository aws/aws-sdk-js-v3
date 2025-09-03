// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _FS, _FSO, n1 } from "./schemas_0";
import { Unit } from "./schemas_1_Rpc";

/* eslint no-var: 0 */

export var FractionalSecondsOutput = struct(n1, _FSO, 0, [_d], [5]);
export var FractionalSeconds = op(
  n1,
  _FS,
  0,
  () => Unit,
  () => FractionalSecondsOutput
);
