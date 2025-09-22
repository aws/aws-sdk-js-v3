// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EIAEO, _EIAEOI, _EIAEOO, _http_, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var EmptyInputAndEmptyOutputInput = struct(n1, _EIAEOI, 0, [], []);
export var EmptyInputAndEmptyOutputOutput = struct(n1, _EIAEOO, 0, [], []);
export var EmptyInputAndEmptyOutput = op(
  n1,
  _EIAEO,
  {
    [_http_]: ["POST", "/EmptyInputAndEmptyOutput", 200],
  },
  () => EmptyInputAndEmptyOutputInput,
  () => EmptyInputAndEmptyOutputOutput
);
