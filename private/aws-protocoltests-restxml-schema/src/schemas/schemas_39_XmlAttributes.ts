// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _at, _f, _http_, _te, _xA, _XAm, _XAR, _XARm, _xN, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var XmlAttributesRequest = struct(
  n1,
  _XAR,
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
export var XmlAttributesResponse = struct(
  n1,
  _XARm,
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
export var XmlAttributes = op(
  n1,
  _XAm,
  {
    [_http_]: ["PUT", "/XmlAttributes", 200],
  },
  () => XmlAttributesRequest,
  () => XmlAttributesResponse
);
