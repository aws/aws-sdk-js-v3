// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _http_,
  _IK,
  _IV,
  _NXMWXN,
  _NXMWXNIM,
  _NXMWXNM,
  _nXMWXNM,
  _NXMWXNR,
  _NXMWXNRe,
  _OK,
  _xN,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NestedXmlMapWithXmlNameRequest = struct(
  n1,
  _NXMWXNR,
  0,
  [_nXMWXNM],
  [[() => NestedXmlMapWithXmlNameMap, 0]]
);
export var NestedXmlMapWithXmlNameResponse = struct(
  n1,
  _NXMWXNRe,
  0,
  [_nXMWXNM],
  [[() => NestedXmlMapWithXmlNameMap, 0]]
);
export var NestedXmlMapWithXmlNameInnerMap = map(
  n1,
  _NXMWXNIM,
  0,
  [
    0,
    {
      [_xN]: _IK,
    },
  ],
  [
    0,
    {
      [_xN]: _IV,
    },
  ]
);
export var NestedXmlMapWithXmlNameMap = map(
  n1,
  _NXMWXNM,
  0,
  [
    0,
    {
      [_xN]: _OK,
    },
  ],
  [() => NestedXmlMapWithXmlNameInnerMap, 0]
);
export var NestedXmlMapWithXmlName = op(
  n1,
  _NXMWXN,
  {
    [_http_]: ["POST", "/NestedXmlMapWithXmlName", 200],
  },
  () => NestedXmlMapWithXmlNameRequest,
  () => NestedXmlMapWithXmlNameResponse
);
