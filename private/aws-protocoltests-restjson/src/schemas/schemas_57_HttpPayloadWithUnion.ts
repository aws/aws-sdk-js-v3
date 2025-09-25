// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _g, _HPWU, _HPWUIO, _ht, _n, _UP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadWithUnionInputOutput = struct(n0, _HPWUIO, 0, [_n], [[() => UnionPayload, 16]]);
export var UnionPayload = uni(n0, _UP, 0, [_g], [0]);
export var HttpPayloadWithUnion = op(
  n0,
  _HPWU,
  {
    [_ht]: ["PUT", "/HttpPayloadWithUnion", 200],
  },
  () => HttpPayloadWithUnionInputOutput,
  () => HttpPayloadWithUnionInputOutput
);
