// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLA,
  _GL,
  _GS,
  _H,
  _hi,
  _i,
  _LA,
  _LAWXN,
  _LAWXNM,
  _LWXN,
  _NSWL,
  _NWL,
  _QL,
  _QLI,
  _xN,
  n0,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var NestedStructWithList = struct(n0, _NSWL, 0, [_LA], [64 | 0]);
export var QueryListsInput = struct(
  n0,
  _QLI,
  0,
  [_LA, _CLA, _LAWXNM, _LAWXN, _NWL],
  [
    64 | 0,
    () => GreetingList,
    [() => ListWithXmlName, 0],
    [
      () => ListWithXmlName,
      {
        [_xN]: _H,
      },
    ],
    () => NestedStructWithList,
  ]
);
export var GreetingStruct = struct(n1, _GS, 0, [_hi], [0]);
export var ListWithXmlName = list(n0, _LWXN, 0, [
  0,
  {
    [_xN]: _i,
  },
]);
export var GreetingList = list(n1, _GL, 0, () => GreetingStruct);
export var StringList = 64 | 0;

export var QueryLists = op(
  n0,
  _QL,
  0,
  () => QueryListsInput,
  () => Unit
);
