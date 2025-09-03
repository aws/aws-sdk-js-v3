// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _,
  _hk,
  _hm,
  _http_,
  _hv,
  _K,
  _KVP,
  _mM,
  _V,
  _XMWXN,
  _XMWXNIOM,
  _XMWXNR,
  _XMWXNRm,
  _xN,
  _xNm,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var XmlMapWithXmlNamespaceRequest = struct(
  n1,
  _XMWXNR,
  0,
  [_mM],
  [
    [
      () => XmlMapWithXmlNamespaceInputOutputMap,
      {
        [_xNm]: [_, _hm],
        [_xN]: _KVP,
      },
    ],
  ]
);
export var XmlMapWithXmlNamespaceResponse = struct(
  n1,
  _XMWXNRm,
  0,
  [_mM],
  [
    [
      () => XmlMapWithXmlNamespaceInputOutputMap,
      {
        [_xNm]: [_, _hm],
        [_xN]: _KVP,
      },
    ],
  ]
);
export var XmlMapWithXmlNamespaceInputOutputMap = map(
  n1,
  _XMWXNIOM,
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
export var XmlMapWithXmlNamespace = op(
  n1,
  _XMWXN,
  {
    [_http_]: ["POST", "/XmlMapWithXmlNamespace", 200],
  },
  () => XmlMapWithXmlNamespaceRequest,
  () => XmlMapWithXmlNamespaceResponse
);
