// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _http_, _NIANO, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var NoInputAndNoOutput = op(
  n1,
  _NIANO,
  {
    [_http_]: ["POST", "/NoInputAndNoOutput", 200],
  },
  () => Unit,
  () => Unit
);
