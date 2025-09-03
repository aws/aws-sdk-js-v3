// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _g, _HPWS, _HPWSIO, _http_, _n, _na, _NP, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadWithStructureInputOutput = struct(n1, _HPWSIO, 0, [_n], [[() => NestedPayload, 16]]);
export var NestedPayload = struct(n1, _NP, 0, [_g, _na], [0, 0]);
export var HttpPayloadWithStructure = op(
  n1,
  _HPWS,
  {
    [_http_]: ["PUT", "/HttpPayloadWithStructure", 200],
  },
  () => HttpPayloadWithStructureInputOutput,
  () => HttpPayloadWithStructureInputOutput
);
