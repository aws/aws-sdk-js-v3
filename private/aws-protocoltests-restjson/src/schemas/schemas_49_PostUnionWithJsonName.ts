// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _b, _ba, _baz, _fo, _FOO, _ht, _jN, _PUWJN, _PUWJNI, _PUWJNO, _UWJN, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PostUnionWithJsonNameInput = struct(n0, _PUWJNI, 0, [_v], [[() => UnionWithJsonName, 0]]);
export var PostUnionWithJsonNameOutput = struct(n0, _PUWJNO, 0, [_v], [[() => UnionWithJsonName, 0]]);
export var UnionWithJsonName = uni(
  n0,
  _UWJN,
  0,
  [_fo, _ba, _b],
  [
    [
      0,
      {
        [_jN]: _FOO,
      },
    ],
    0,
    [
      0,
      {
        [_jN]: _baz,
      },
    ],
  ]
);
export var PostUnionWithJsonName = op(
  n0,
  _PUWJN,
  {
    [_ht]: ["POST", "/PostUnionWithJsonName", 200],
  },
  () => PostUnionWithJsonNameInput,
  () => PostUnionWithJsonNameOutput
);
