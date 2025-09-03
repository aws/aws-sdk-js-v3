// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _at, _f, _http_, _p, _te, _xA, _XAOP, _XAOPR, _XAOPRm, _XAPR, _XAPRm, _xN, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var XmlAttributesOnPayloadRequest = struct(n1, _XAOPR, 0, [_p], [[() => XmlAttributesPayloadRequest, 16]]);
export var XmlAttributesOnPayloadResponse = struct(n1, _XAOPRm, 0, [_p], [[() => XmlAttributesPayloadResponse, 16]]);
export var XmlAttributesPayloadRequest = struct(
  n1,
  _XAPR,
  0,
  [_f, _at],
  [
    0,
    [
      0,
      {
        [_xN]: _te,
        [_xA]: 1,
      },
    ],
  ]
);
export var XmlAttributesPayloadResponse = struct(
  n1,
  _XAPRm,
  0,
  [_f, _at],
  [
    0,
    [
      0,
      {
        [_xN]: _te,
        [_xA]: 1,
      },
    ],
  ]
);
export var XmlAttributesOnPayload = op(
  n1,
  _XAOP,
  {
    [_http_]: ["PUT", "/XmlAttributesOnPayload", 200],
  },
  () => XmlAttributesOnPayloadRequest,
  () => XmlAttributesOnPayloadResponse
);
