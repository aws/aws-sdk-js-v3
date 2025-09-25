// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _HSP, _ht, _p, _SPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StringPayloadInput = struct(n0, _SPI, 0, [_p], [[0, 16]]);
export var HttpStringPayload = op(
  n0,
  _HSP,
  {
    [_ht]: ["POST", "/StringPayload", 200],
  },
  () => StringPayloadInput,
  () => StringPayloadInput
);
