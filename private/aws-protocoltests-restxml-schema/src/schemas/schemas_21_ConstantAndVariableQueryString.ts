// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _CAVQS, _CAVQSI, _hQ, _http_, _mS, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var ConstantAndVariableQueryStringInput = struct(
  n1,
  _CAVQSI,
  0,
  [_b, _mS],
  [
    [
      0,
      {
        [_hQ]: _b,
      },
    ],
    [
      0,
      {
        [_hQ]: _mS,
      },
    ],
  ]
);
export var ConstantAndVariableQueryString = op(
  n1,
  _CAVQS,
  {
    [_http_]: ["GET", "/ConstantAndVariableQueryString?foo=bar", 200],
  },
  () => ConstantAndVariableQueryStringInput,
  () => Unit
);
