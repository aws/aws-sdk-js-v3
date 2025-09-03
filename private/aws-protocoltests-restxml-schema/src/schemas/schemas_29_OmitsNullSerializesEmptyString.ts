// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Em, _eS, _hQ, _http_, _Nu, _nV, _ONSES, _ONSESI, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var OmitsNullSerializesEmptyStringInput = struct(
  n1,
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
  n1,
  _ONSES,
  {
    [_http_]: ["GET", "/OmitsNullSerializesEmptyString", 200],
  },
  () => OmitsNullSerializesEmptyStringInput,
  () => Unit
);
