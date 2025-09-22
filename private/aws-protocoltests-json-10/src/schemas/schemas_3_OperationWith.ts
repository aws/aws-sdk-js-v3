// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTP, _CTPI, _CTPO, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ContentTypeParametersInput = struct(n0, _CTPI, 0, [_v], [1]);
export var ContentTypeParametersOutput = struct(n0, _CTPO, 0, [], []);
export var ContentTypeParameters = op(
  n0,
  _CTP,
  0,
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput
);
