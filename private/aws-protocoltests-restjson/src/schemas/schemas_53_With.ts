// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bIBy, _bIHy, _bIPy, _bIQy, _hH, _hQ, _ht, _MBal, _MBIal, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedByteInput = struct(
  n0,
  _MBIal,
  0,
  [_bIBy, _bIPy, _bIQy, _bIHy],
  [
    1,
    [1, 1],
    [
      1,
      {
        [_hQ]: _bIQy,
      },
    ],
    [
      1,
      {
        [_hH]: _bIHy,
      },
    ],
  ]
);
export var MalformedByte = op(
  n0,
  _MBal,
  {
    [_ht]: ["POST", "/MalformedByte/{byteInPath}", 200],
  },
  () => MalformedByteInput,
  () => Unit
);
