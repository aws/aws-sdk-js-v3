// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _FXMWXN, _FXMWXNO, _FXMWXNOM, _K, _KVP, _mM, _V, _xF, _xN, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var FlattenedXmlMapWithXmlNameOutput = struct(
  n0,
  _FXMWXNO,
  0,
  [_mM],
  [
    [
      () => FlattenedXmlMapWithXmlNameOutputMap,
      {
        [_xN]: _KVP,
        [_xF]: 1,
      },
    ],
  ]
);
export var FlattenedXmlMapWithXmlNameOutputMap = map(
  n0,
  _FXMWXNOM,
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
  n0,
  _FXMWXN,
  0,
  () => Unit,
  () => FlattenedXmlMapWithXmlNameOutput
);
