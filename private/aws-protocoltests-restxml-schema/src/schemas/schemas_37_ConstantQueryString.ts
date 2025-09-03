// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CQS, _CQSI, _h, _http_, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var ConstantQueryStringInput = struct(n1, _CQSI, 0, [_h], [[0, 1]]);
export var ConstantQueryString = op(
  n1,
  _CQS,
  {
    [_http_]: ["GET", "/ConstantQueryString/{hello}?foo=bar&hello", 200],
  },
  () => ConstantQueryStringInput,
  () => Unit
);
