// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _end, _EWHLO, _hL, _HLI, _ht, _la, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HostLabelInput = struct(
  n0,
  _HLI,
  0,
  [_la],
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
    [_ht]: ["POST", "/EndpointWithHostLabelOperation", 200],
    [_end]: ["foo.{label}."],
  },
  () => HostLabelInput,
  () => Unit
);
