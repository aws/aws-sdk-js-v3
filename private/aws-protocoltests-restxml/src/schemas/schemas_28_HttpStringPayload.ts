// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _HSP, _http_, _p, _SPI, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var StringPayloadInput = struct(n1, _SPI, 0, [_p], [[0, 16]]);
export var HttpStringPayload = op(
  n1,
  _HSP,
  {
    [_http_]: ["POST", "/StringPayload", 200],
  },
  () => StringPayloadInput,
  () => StringPayloadInput
);
