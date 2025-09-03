// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CE_, _da, _en, _hH, _http_, _PWCE, _PWCEI, n1 } from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var PutWithContentEncodingInput = struct(
  n1,
  _PWCEI,
  0,
  [_en, _da],
  [
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    0,
  ]
);
export var PutWithContentEncoding = op(
  n1,
  _PWCE,
  {
    [_http_]: ["POST", "/requestcompression/putcontentwithencoding", 200],
  },
  () => PutWithContentEncodingInput,
  () => Unit
);
