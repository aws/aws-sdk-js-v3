// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _HPWXNAP, _HPWXNAPIO, _ht, _http_, _n, _na, _PWXNAP, _xNm, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadWithXmlNamespaceAndPrefixInputOutput = struct(
  n1,
  _HPWXNAPIO,
  0,
  [_n],
  [[() => PayloadWithXmlNamespaceAndPrefix, 16]]
);
export var PayloadWithXmlNamespaceAndPrefix = struct(
  n1,
  _PWXNAP,
  {
    [_xNm]: [_b, _ht],
  },
  [_na],
  [0]
);
export var HttpPayloadWithXmlNamespaceAndPrefix = op(
  n1,
  _HPWXNAP,
  {
    [_http_]: ["PUT", "/HttpPayloadWithXmlNamespaceAndPrefix", 200],
  },
  () => HttpPayloadWithXmlNamespaceAndPrefixInputOutput,
  () => HttpPayloadWithXmlNamespaceAndPrefixInputOutput
);
