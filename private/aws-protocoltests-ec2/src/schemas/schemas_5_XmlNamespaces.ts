// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _, _ba, _f, _h, _ht, _htt, _http, _n, _va, _XN, _XNL, _xNm, _XNN, _XNO, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var XmlNamespaceNested = struct(
  n0,
  _XNN,
  {
    [_xNm]: [_, _h],
  },
  [_f, _va],
  [
    [
      0,
      {
        [_xNm]: [_ba, _ht],
      },
    ],
    [
      () => XmlNamespacedList,
      {
        [_xNm]: [_, _htt],
      },
    ],
  ]
);
export var XmlNamespacesOutput = struct(
  n0,
  _XNO,
  {
    [_xNm]: [_, _h],
  },
  [_n],
  [[() => XmlNamespaceNested, 0]]
);
export var XmlNamespacedList = list(n0, _XNL, 0, [
  0,
  {
    [_xNm]: [_, _http],
  },
]);
export var XmlNamespaces = op(
  n0,
  _XN,
  0,
  () => Unit,
  () => XmlNamespacesOutput
);
