// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _http_, _NIAO, _NIAOO, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var NoInputAndOutputOutput = struct(n1, _NIAOO, 0, [], []);
export var NoInputAndOutput = op(
  n1,
  _NIAO,
  {
    [_http_]: ["POST", "/NoInputAndOutputOutput", 200],
  },
  () => Unit,
  () => NoInputAndOutputOutput
);
