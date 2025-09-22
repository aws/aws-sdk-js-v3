// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _g, _HPWS, _HPWSIO, _ht, _n, _na, _NP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadWithStructureInputOutput = struct(n0, _HPWSIO, 0, [_n], [[() => NestedPayload, 16]]);
export var NestedPayload = struct(n0, _NP, 0, [_g, _na], [0, 0]);
export var HttpPayloadWithStructure = op(
  n0,
  _HPWS,
  {
    [_ht]: ["PUT", "/HttpPayloadWithStructure", 200],
  },
  () => HttpPayloadWithStructureInputOutput,
  () => HttpPayloadWithStructureInputOutput
);
