// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _, _FXMWXNl, _FXMWXNOl, _FXMWXNOMl, _hk, _hm, _hv, _K, _KVP, _mM, _V, _xF, _xN, _xNm, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var FlattenedXmlMapWithXmlNamespaceOutput = struct(
  n0,
  _FXMWXNOl,
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
  n0,
  _FXMWXNOMl,
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
  n0,
  _FXMWXNl,
  0,
  () => Unit,
  () => FlattenedXmlMapWithXmlNamespaceOutput
);
