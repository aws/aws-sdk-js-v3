// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CLA,
  _CM,
  _CMA,
  _F,
  _FLA,
  _FLAWXN,
  _FM,
  _FMWXN,
  _GL,
  _GS,
  _H,
  _hi,
  _i,
  _K,
  _LA,
  _LAWXNM,
  _LWXN,
  _MA,
  _mM,
  _MOL,
  _MWXMN,
  _MWXN,
  _NSWL,
  _NSWM,
  _NWL,
  _QL,
  _QLI,
  _QM,
  _QMI,
  _RMA,
  _S,
  _V,
  _XEM,
  _xF,
  _XM,
  _XMO,
  _XMOM,
  _XMXN,
  _XMXNO,
  _XMXNOM,
  _xN,
  n0,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var NestedStructWithList = struct(n0, _NSWL, 0, [_LA], [64 | 0]);
export var NestedStructWithMap = struct(n0, _NSWM, 0, [_MA], [128 | 0]);
export var QueryListsInput = struct(
  n0,
  _QLI,
  0,
  [_LA, _CLA, _FLA, _LAWXNM, _FLAWXN, _NWL],
  [
    64 | 0,
    () => GreetingList,
    [
      64 | 0,
      {
        [_xF]: 1,
      },
    ],
    [() => ListWithXmlName, 0],
    [
      () => ListWithXmlName,
      {
        [_xN]: _H,
        [_xF]: 1,
      },
    ],
    () => NestedStructWithList,
  ]
);
export var QueryMapsInput = struct(
  n0,
  _QMI,
  0,
  [_MA, _RMA, _CMA, _MWXMN, _FM, _FMWXN, _MOL, _NSWM],
  [
    128 | 0,
    [
      128 | 0,
      {
        [_xN]: _F,
      },
    ],
    () => ComplexMap,
    [() => MapWithXmlName, 0],
    [
      128 | 0,
      {
        [_xF]: 1,
      },
    ],
    [
      () => MapWithXmlName,
      {
        [_xN]: _H,
        [_xF]: 1,
      },
    ],
    map(n0, _MOL, 0, 0, 64 | 0),
    () => NestedStructWithMap,
  ]
);
export var XmlMapsOutput = struct(n0, _XMO, 0, [_mM], [() => XmlMapsOutputMap]);
export var XmlMapsXmlNameOutput = struct(n0, _XMXNO, 0, [_mM], [[() => XmlMapsXmlNameOutputMap, 0]]);
export var GreetingStruct = struct(n1, _GS, 0, [_hi], [0]);
export var ListWithXmlName = list(n0, _LWXN, 0, [
  0,
  {
    [_xN]: _i,
  },
]);
export var GreetingList = list(n1, _GL, 0, () => GreetingStruct);
export var ComplexMap = map(n0, _CM, 0, 0, () => GreetingStruct);
export var MapOfLists = map(n0, _MOL, 0, 0, 64 | 0);
export var MapWithXmlName = map(
  n0,
  _MWXN,
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
export var XmlMapsOutputMap = map(n0, _XMOM, 0, 0, () => GreetingStruct);
export var XmlMapsXmlNameOutputMap = map(
  n0,
  _XMXNOM,
  0,
  [
    0,
    {
      [_xN]: _A,
    },
  ],
  [
    () => GreetingStruct,
    {
      [_xN]: _S,
    },
  ]
);
export var StringMap = 128 | 0;

export var QueryLists = op(
  n0,
  _QL,
  0,
  () => QueryListsInput,
  () => Unit
);
export var QueryMaps = op(
  n0,
  _QM,
  0,
  () => QueryMapsInput,
  () => Unit
);
export var XmlEmptyMaps = op(
  n0,
  _XEM,
  0,
  () => Unit,
  () => XmlMapsOutput
);
export var XmlMaps = op(
  n0,
  _XM,
  0,
  () => Unit,
  () => XmlMapsOutput
);
export var XmlMapsXmlName = op(
  n0,
  _XMXN,
  0,
  () => Unit,
  () => XmlMapsXmlNameOutput
);
