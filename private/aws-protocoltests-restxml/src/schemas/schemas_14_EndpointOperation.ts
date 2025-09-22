// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _end, _EO, _http_, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var EndpointOperation = op(
  n1,
  _EO,
  {
    [_http_]: ["POST", "/EndpointOperation", 200],
    [_end]: ["foo."],
  },
  () => Unit,
  () => Unit
);
