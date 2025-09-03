// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _,
  _FXMWXNl,
  _FXMWXNO,
  _FXMWXNOM,
  _hk,
  _hm,
  _http_,
  _hv,
  _K,
  _KVP,
  _mM,
  _V,
  _xF,
  _xN,
  _xNm,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var FlattenedXmlMapWithXmlNamespaceOutput = struct(
  n1,
  _FXMWXNO,
  0,
  [_mM],
  [
    [
      () => FlattenedXmlMapWithXmlNamespaceOutputMap,
      {
        [_xN]: _KVP,
        [_xF]: 1,
        [_xNm]: [_, _hm],
      },
    ],
  ]
);
export var FlattenedXmlMapWithXmlNamespaceOutputMap = map(
  n1,
  _FXMWXNOM,
  0,
  [
    0,
    {
      [_xNm]: [_, _hk],
      [_xN]: _K,
    },
  ],
  [
    0,
    {
      [_xNm]: [_, _hv],
      [_xN]: _V,
    },
  ]
);
export var FlattenedXmlMapWithXmlNamespace = op(
  n1,
  _FXMWXNl,
  {
    [_http_]: ["POST", "/FlattenedXmlMapWithXmlNamespace", 200],
  },
  () => Unit,
  () => FlattenedXmlMapWithXmlNamespaceOutput
);
