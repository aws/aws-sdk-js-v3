// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _g, _HPWU, _HPWUIO, _http_, _n, _UP, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadWithUnionInputOutput = struct(n1, _HPWUIO, 0, [_n], [[() => UnionPayload, 16]]);
export var UnionPayload = uni(n1, _UP, 0, [_g], [0]);
export var HttpPayloadWithUnion = op(
  n1,
  _HPWU,
  {
    [_http_]: ["PUT", "/HttpPayloadWithUnion", 200],
  },
  () => HttpPayloadWithUnionInputOutput,
  () => HttpPayloadWithUnionInputOutput
);
