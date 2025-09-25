// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _, _HPWXNIOt, _HPWXNt, _ht, _http_, _n, _na, _PWXNa, _xNm, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadWithXmlNamespaceInputOutput = struct(
  n1,
  _HPWXNIOt,
  0,
  [_n],
  [[() => PayloadWithXmlNamespace, 16]]
);
export var PayloadWithXmlNamespace = struct(
  n1,
  _PWXNa,
  {
    [_xNm]: [_, _ht],
  },
  [_na],
  [0]
);
export var HttpPayloadWithXmlNamespace = op(
  n1,
  _HPWXNt,
  {
    [_http_]: ["PUT", "/HttpPayloadWithXmlNamespace", 200],
  },
  () => HttpPayloadWithXmlNamespaceInputOutput,
  () => HttpPayloadWithXmlNamespaceInputOutput
);
