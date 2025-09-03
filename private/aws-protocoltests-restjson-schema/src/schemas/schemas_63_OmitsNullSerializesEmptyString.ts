// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Em, _eS, _hQ, _ht, _Nu, _nV, _ONSES, _ONSESI, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var OmitsNullSerializesEmptyStringInput = struct(
  n0,
  _ONSESI,
  0,
  [_nV, _eS],
  [
    [
      0,
      {
        [_hQ]: _Nu,
      },
    ],
    [
      0,
      {
        [_hQ]: _Em,
      },
    ],
  ]
);
export var OmitsNullSerializesEmptyString = op(
  n0,
  _ONSES,
  {
    [_ht]: ["GET", "/OmitsNullSerializesEmptyString", 200],
  },
  () => OmitsNullSerializesEmptyStringInput,
  () => Unit
);
