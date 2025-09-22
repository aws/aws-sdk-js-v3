// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _DO, _DOO, _FS, _FSO, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var DatetimeOffsetsOutput = struct(n0, _DOO, 0, [_d], [5]);
export var FractionalSecondsOutput = struct(n0, _FSO, 0, [_d], [5]);
export var DatetimeOffsets = op(
  n0,
  _DO,
  0,
  () => Unit,
  () => DatetimeOffsetsOutput
);
export var FractionalSeconds = op(
  n0,
  _FS,
  0,
  () => Unit,
  () => FractionalSecondsOutput
);
