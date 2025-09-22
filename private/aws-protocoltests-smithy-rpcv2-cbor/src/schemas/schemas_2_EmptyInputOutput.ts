// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EIO, _ES, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var EmptyStructure = struct(n1, _ES, 0, [], []);
export var EmptyInputOutput = op(
  n1,
  _EIO,
  0,
  () => EmptyStructure,
  () => EmptyStructure
);
