// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dV, _fV, _SSP, _SSPI, _SSPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SimpleScalarPropertiesInput = struct(n0, _SSPI, 0, [_fV, _dV], [1, 1]);
export var SimpleScalarPropertiesOutput = struct(n0, _SSPO, 0, [_fV, _dV], [1, 1]);
export var SimpleScalarProperties = op(
  n0,
  _SSP,
  0,
  () => SimpleScalarPropertiesInput,
  () => SimpleScalarPropertiesOutput
);
