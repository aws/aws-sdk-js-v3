// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _DO, _DOO, _FS, _FSO, _http_, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var DatetimeOffsetsOutput = struct(n1, _DOO, 0, [_d], [5]);
export var FractionalSecondsOutput = struct(n1, _FSO, 0, [_d], [5]);
export var DatetimeOffsets = op(
  n1,
  _DO,
  {
    [_http_]: ["POST", "/DatetimeOffsets", 200],
  },
  () => Unit,
  () => DatetimeOffsetsOutput
);
export var FractionalSeconds = op(
  n1,
  _FS,
  {
    [_http_]: ["POST", "/FractionalSeconds", 200],
  },
  () => Unit,
  () => FractionalSecondsOutput
);
