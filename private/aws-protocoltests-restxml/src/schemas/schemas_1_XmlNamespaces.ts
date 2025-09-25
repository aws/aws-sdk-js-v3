// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _,
  _b,
  _f,
  _ht,
  _htt,
  _http,
  _http_,
  _httpb,
  _n,
  _va,
  _XN,
  _XNL,
  _xNm,
  _XNN,
  _XNR,
  _XNRm,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var XmlNamespaceNested = struct(
  n1,
  _XNN,
  {
    [_xNm]: [_, _ht],
  },
  [_f, _va],
  [
    [
      0,
      {
        [_xNm]: [_b, _htt],
      },
    ],
    [
      () => XmlNamespacedList,
      {
        [_xNm]: [_, _http],
      },
    ],
  ]
);
export var XmlNamespacesRequest = struct(
  n1,
  _XNR,
  {
    [_xNm]: [_, _ht],
  },
  [_n],
  [[() => XmlNamespaceNested, 0]]
);
export var XmlNamespacesResponse = struct(
  n1,
  _XNRm,
  {
    [_xNm]: [_, _ht],
  },
  [_n],
  [[() => XmlNamespaceNested, 0]]
);
export var XmlNamespacedList = list(n1, _XNL, 0, [
  0,
  {
    [_xNm]: [_, _httpb],
  },
]);
export var XmlNamespaces = op(
  n1,
  _XN,
  {
    [_http_]: ["POST", "/XmlNamespaces", 200],
  },
  () => XmlNamespacesRequest,
  () => XmlNamespacesResponse
);
