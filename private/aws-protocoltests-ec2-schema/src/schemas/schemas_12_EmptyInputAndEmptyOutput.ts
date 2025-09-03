// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EIAEO, _EIAEOI, _EIAEOO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EmptyInputAndEmptyOutputInput = struct(n0, _EIAEOI, 0, [], []);
export var EmptyInputAndEmptyOutputOutput = struct(n0, _EIAEOO, 0, [], []);
export var EmptyInputAndEmptyOutput = op(
  n0,
  _EIAEO,
  0,
  () => EmptyInputAndEmptyOutputInput,
  () => EmptyInputAndEmptyOutputOutput
);
