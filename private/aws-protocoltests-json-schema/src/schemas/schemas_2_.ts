// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dV, _fV, _SSP, _SSPIO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SimpleScalarPropertiesInputOutput = struct(n0, _SSPIO, 0, [_fV, _dV], [1, 1]);
export var SimpleScalarProperties = op(
  n0,
  _SSP,
  0,
  () => SimpleScalarPropertiesInputOutput,
  () => SimpleScalarPropertiesInputOutput
);
