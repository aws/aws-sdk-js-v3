// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _end, _EWHLHO, _hH, _hL, _HLHI, _http_, _XAAI, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var HostLabelHeaderInput = struct(
  n1,
  _HLHI,
  0,
  [_aI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _XAAI,
      },
    ],
  ]
);
export var EndpointWithHostLabelHeaderOperation = op(
  n1,
  _EWHLHO,
  {
    [_http_]: ["POST", "/EndpointWithHostLabelHeaderOperation", 200],
    [_end]: ["{accountId}."],
  },
  () => HostLabelHeaderInput,
  () => Unit
);
