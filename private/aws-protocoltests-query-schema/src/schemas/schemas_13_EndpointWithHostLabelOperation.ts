// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _end, _EWHLO, _hL, _HLI, _l, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var HostLabelInput = struct(
  n0,
  _HLI,
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
  n0,
  _EWHLO,
  {
    [_end]: ["foo.{label}."],
  },
  () => HostLabelInput,
  () => Unit
);
