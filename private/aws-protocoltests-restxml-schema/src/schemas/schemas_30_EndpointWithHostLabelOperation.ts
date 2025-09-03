// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _end, _EWHLO, _EWHLOR, _hL, _http_, _l, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var EndpointWithHostLabelOperationRequest = struct(
  n1,
  _EWHLOR,
  0,
  [_l],
  [
    [
      0,
      {
        [_hL]: 1,
      },
    ],
  ]
);
export var EndpointWithHostLabelOperation = op(
  n1,
  _EWHLO,
  {
    [_http_]: ["POST", "/EndpointWithHostLabelOperation", 200],
    [_end]: ["foo.{label}."],
  },
  () => EndpointWithHostLabelOperationRequest,
  () => Unit
);
