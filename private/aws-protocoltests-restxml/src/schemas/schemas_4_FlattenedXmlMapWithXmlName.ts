// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _FXMWXN, _FXMWXNIOM, _FXMWXNR, _FXMWXNRl, _http_, _K, _KVP, _mM, _V, _xF, _xN, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var FlattenedXmlMapWithXmlNameRequest = struct(
  n1,
  _FXMWXNR,
  0,
  [_mM],
  [
    [
      () => FlattenedXmlMapWithXmlNameInputOutputMap,
      {
        [_xN]: _KVP,
        [_xF]: 1,
      },
    ],
  ]
);
export var FlattenedXmlMapWithXmlNameResponse = struct(
  n1,
  _FXMWXNRl,
  0,
  [_mM],
  [
    [
      () => FlattenedXmlMapWithXmlNameInputOutputMap,
      {
        [_xN]: _KVP,
        [_xF]: 1,
      },
    ],
  ]
);
export var FlattenedXmlMapWithXmlNameInputOutputMap = map(
  n1,
  _FXMWXNIOM,
  0,
  [
    0,
    {
      [_xN]: _K,
    },
  ],
  [
    0,
    {
      [_xN]: _V,
    },
  ]
);
export var FlattenedXmlMapWithXmlName = op(
  n1,
  _FXMWXN,
  {
    [_http_]: ["POST", "/FlattenedXmlMapWithXmlName", 200],
  },
  () => FlattenedXmlMapWithXmlNameRequest,
  () => FlattenedXmlMapWithXmlNameResponse
);
