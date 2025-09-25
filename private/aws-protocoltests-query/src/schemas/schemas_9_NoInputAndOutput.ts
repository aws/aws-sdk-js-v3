// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _NIAO, _NIAOI, _NIAOO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NoInputAndOutputInput = struct(n0, _NIAOI, 0, [], []);
export var NoInputAndOutputOutput = struct(n0, _NIAOO, 0, [], []);
export var NoInputAndOutput = op(
  n0,
  _NIAO,
  0,
  () => NoInputAndOutputInput,
  () => NoInputAndOutputOutput
);
