// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _hQ, _http_, _IQPIR, _IQPIRO, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var IgnoreQueryParamsInResponseOutput = struct(
  n1,
  _IQPIRO,
  0,
  [_b],
  [
    [
      0,
      {
        [_hQ]: _b,
      },
    ],
  ]
);
export var IgnoreQueryParamsInResponse = op(
  n1,
  _IQPIR,
  {
    [_http_]: ["GET", "/IgnoreQueryParamsInResponse", 200],
  },
  () => Unit,
  () => IgnoreQueryParamsInResponseOutput
);
