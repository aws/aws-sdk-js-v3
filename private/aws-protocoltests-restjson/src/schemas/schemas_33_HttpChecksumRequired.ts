// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _fo, _HCR, _hCR, _HCRIO, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpChecksumRequiredInputOutput = struct(n0, _HCRIO, 0, [_fo], [0]);
export var HttpChecksumRequired = op(
  n0,
  _HCR,
  {
    [_ht]: ["POST", "/HttpChecksumRequired", 200],
    [_hCR]: 1,
  },
  () => HttpChecksumRequiredInputOutput,
  () => HttpChecksumRequiredInputOutput
);
